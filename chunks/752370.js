n.d(t, { Z: () => S }), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(904245),
    r = n(147913),
    a = n(710845),
    s = n(957730),
    o = n(592125),
    l = n(131951),
    u = n(496675),
    c = n(944486),
    d = n(594174),
    f = n(70956),
    _ = n(358085),
    p = n(875527),
    h = n(709706),
    m = n(981631),
    g = n(231338);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let v = 30 * f.Z.Millis.MINUTE,
    y = 10 * f.Z.Millis.SECOND,
    I = new a.Z('VoiceFilterFeedbackManager');
function T() {
    let { enabled: e } = p.c.getCurrentConfig({ location: 'VoiceFilterFeedbackManager' }, { autoTrackExposure: !1 });
    return e;
}
class b extends r.Z {
    handleMediaEngineStoreChange() {
        T() && this.maybeQueueFeedbackMessage();
    }
    maybeQueueFeedbackMessage() {
        if (!T()) return;
        clearTimeout(this.queuedSendTimeout);
        let e = d.default.getCurrentUser();
        !((null == e ? void 0 : e.isStaff()) !== !0 || null == l.Z.getActiveVoiceFilter() || l.Z.isSelfMute() || l.Z.isSelfMutedTemporarily()) &&
            (this.queuedSendTimeout = setTimeout(() => {
                this._maybeSendFeedbackMessage();
            }, y));
    }
    _maybeSendFeedbackMessage() {
        var e, t, n;
        let r = l.Z.getActiveVoiceFilter();
        if (null == r) return;
        let a = o.Z.getChannel(c.Z.getVoiceChannelId());
        if (null == a || a.type === m.d4z.GUILD_STAGE_VOICE) return;
        if (!u.Z.can(g.Pl.SEND_MESSAGES, a)) {
            I.info('Skipping vf feedback message due to no send permission');
            return;
        }
        let d = ''.concat(a.id, ':').concat(r),
            f = this.lastSentTimestamp.get(d);
        if (null != f) {
            let e = Date.now() - f;
            if (e - f < v) {
                I.info('Skipping vf feedback message due to cooldown', e);
                return;
            }
        }
        let p = h.Z.getVoiceFilter(r),
            E = null !== (n = null == p ? void 0 : p.name) && void 0 !== n ? n : "Don't Know",
            y = l.Z.getInputDeviceId(),
            T = null === (e = l.Z.getInputDevices()[y]) || void 0 === e ? void 0 : e.name,
            b = l.Z.getOutputDeviceId(),
            S = new URLSearchParams({
                usp: 'pp_url',
                'entry.1110868176': E,
                'entry.51879725': T,
                'entry.45023460': null === (t = l.Z.getOutputDevices()[b]) || void 0 === t ? void 0 : t.name,
                'entry.1264180151': (0, _.isWindows)() ? 'Windows' : (0, _.isMac)() ? 'Mac' : (0, _.getPlatformName)()
            }),
            A = 'https://docs.google.com/forms/d/e/1FAIpQLSfiEURI77Kv0pp4DR8XAaZ0eou7fmdJ6tuU2lWkNyD_aiknsg/viewform?'.concat(S);
        i.Z.sendMessage(a.id, s.ZP.parse(a, "-# STAFF TESTING\n<:voicefilter:1336871150252458015> I'm using the **".concat(E, '** voice filter.\nHow does it sound? [Please share feedback](').concat(A, ').'))), this.lastSentTimestamp.set(d, Date.now());
    }
    constructor(...e) {
        super(...e),
            E(this, 'actions', {
                VOICE_FILTER_APPLIED: () => this.maybeQueueFeedbackMessage(),
                VOICE_CHANNEL_SELECT: () => this.maybeQueueFeedbackMessage()
            }),
            E(
                this,
                'stores',
                new Map().set(l.Z, () => this.handleMediaEngineStoreChange())
            ),
            E(this, 'lastSentTimestamp', new Map()),
            E(this, 'queuedSendTimeout', void 0);
    }
}
let S = new b();
