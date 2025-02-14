n.d(t, { Z: () => A }), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(904245),
    r = n(147913),
    a = n(710845),
    s = n(957730),
    o = n(592125),
    l = n(430824),
    u = n(131951),
    c = n(496675),
    d = n(944486),
    f = n(594174),
    _ = n(70956),
    p = n(358085),
    h = n(875527),
    m = n(709706),
    g = n(981631),
    E = n(231338);
function v(e, t, n) {
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
let y = 30 * _.Z.Millis.MINUTE,
    I = 10 * _.Z.Millis.SECOND,
    T = new a.Z('VoiceFilterFeedbackManager');
function b() {
    return (0, h.wt)({
        location: 'VoiceFilterFeedbackManager',
        autoTrackExposure: !1
    });
}
class S extends r.Z {
    handleMediaEngineStoreChange() {
        b() && this.maybeQueueFeedbackMessage();
    }
    maybeQueueFeedbackMessage() {
        if (!b()) return;
        clearTimeout(this.queuedSendTimeout);
        let e = f.default.getCurrentUser();
        !((null == e ? void 0 : e.isStaff()) !== !0 || null == u.Z.getActiveVoiceFilter() || u.Z.isSelfMute() || u.Z.isSelfMutedTemporarily()) &&
            (this.queuedSendTimeout = setTimeout(() => {
                this._maybeSendFeedbackMessage();
            }, I));
    }
    _maybeSendFeedbackMessage() {
        var e, t, n;
        let r = u.Z.getActiveVoiceFilter();
        if (null == r) return;
        let a = o.Z.getChannel(d.Z.getVoiceChannelId());
        if (null == a) return;
        let f = a.getGuildId(),
            _ = l.Z.getGuild(f);
        if (null == _ || !_.hasFeature(g.oNc.INTERNAL_EMPLOYEE_ONLY) || a.type === g.d4z.GUILD_STAGE_VOICE) return;
        if (!c.Z.can(E.Pl.SEND_MESSAGES, a)) {
            T.info('Skipping vf feedback message due to no send permission');
            return;
        }
        let h = ''.concat(a.id, ':').concat(r),
            v = this.lastSentTimestamp.get(h);
        if (null != v) {
            let e = Date.now() - v;
            if (e - v < y) {
                T.info('Skipping vf feedback message due to cooldown', e);
                return;
            }
        }
        let I = m.Z.getVoiceFilter(r),
            b = null !== (n = null == I ? void 0 : I.name) && void 0 !== n ? n : "Don't Know",
            S = u.Z.getInputDeviceId(),
            A = null === (e = u.Z.getInputDevices()[S]) || void 0 === e ? void 0 : e.name,
            N = u.Z.getOutputDeviceId(),
            C = new URLSearchParams({
                usp: 'pp_url',
                'entry.1110868176': b,
                'entry.51879725': A,
                'entry.45023460': null === (t = u.Z.getOutputDevices()[N]) || void 0 === t ? void 0 : t.name,
                'entry.1264180151': (0, p.isWindows)() ? 'Windows' : (0, p.isMac)() ? 'Mac' : (0, p.getPlatformName)()
            }),
            R = 'https://docs.google.com/forms/d/e/1FAIpQLSfiEURI77Kv0pp4DR8XAaZ0eou7fmdJ6tuU2lWkNyD_aiknsg/viewform?'.concat(C);
        i.Z.sendMessage(a.id, s.ZP.parse(a, "-# STAFF TESTING\n<:voicefilter:1336871150252458015> I'm using the **".concat(b, '** voice filter.\nHow does it sound? [Please share feedback](').concat(R, ').'))), this.lastSentTimestamp.set(h, Date.now());
    }
    constructor(...e) {
        super(...e),
            v(this, 'actions', {
                VOICE_FILTER_APPLIED: () => this.maybeQueueFeedbackMessage(),
                VOICE_CHANNEL_SELECT: () => this.maybeQueueFeedbackMessage()
            }),
            v(
                this,
                'stores',
                new Map().set(u.Z, () => this.handleMediaEngineStoreChange())
            ),
            v(this, 'lastSentTimestamp', new Map()),
            v(this, 'queuedSendTimeout', void 0);
    }
}
let A = new S();
