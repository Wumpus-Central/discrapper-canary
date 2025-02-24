n.d(t, { Z: () => A }), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(904245),
    i = n(147913),
    o = n(710845),
    a = n(957730),
    s = n(592125),
    l = n(430824),
    c = n(131951),
    u = n(496675),
    d = n(944486),
    f = n(594174),
    p = n(70956),
    _ = n(358085),
    h = n(743498),
    m = n(875527),
    g = n(709706),
    E = n(981631),
    v = n(231338),
    b = n(388032);
function y(e, t, n) {
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
let O = 30 * p.Z.Millis.MINUTE,
    S = 10 * p.Z.Millis.SECOND,
    I = new o.Z('VoiceFilterFeedbackManager');
function T() {
    return (0, m.wt)({
        location: 'VoiceFilterFeedbackManager',
        autoTrackExposure: !1
    });
}
class N extends i.Z {
    handleMediaEngineStoreChange() {
        T() && this.maybeQueueFeedbackMessage();
    }
    handleVoiceChannelSelect(e) {
        let { guildId: t } = e;
        T() &&
        (0, m.m3)({
            location: 'VoiceFilterFeedbackManager',
            guildId: t
        })
            ? (0, h.v6)(null)
            : this.maybeQueueFeedbackMessage();
    }
    maybeQueueFeedbackMessage() {
        if (!T()) return;
        clearTimeout(this.queuedSendTimeout);
        let e = f.default.getCurrentUser();
        !((null == e ? void 0 : e.isStaff()) !== !0 || null == c.Z.getActiveVoiceFilter() || c.Z.isSelfMute() || c.Z.isSelfMutedTemporarily()) &&
            (this.queuedSendTimeout = setTimeout(() => {
                this._maybeSendFeedbackMessage();
            }, S));
    }
    _maybeSendFeedbackMessage() {
        var e, t;
        let n = c.Z.getActiveVoiceFilter();
        if (null == n) return;
        let i = s.Z.getChannel(d.Z.getVoiceChannelId());
        if (null == i) return;
        let o = i.getGuildId(),
            f = l.Z.getGuild(o);
        if (null == f || !f.hasFeature(E.oNc.INTERNAL_EMPLOYEE_ONLY) || i.type === E.d4z.GUILD_STAGE_VOICE) return;
        if (!u.Z.can(v.Pl.SEND_MESSAGES, i)) {
            I.info('Skipping vf feedback message due to no send permission');
            return;
        }
        let p = ''.concat(i.id, ':').concat(n),
            h = this.lastSentTimestamp.get(p);
        if (null != h) {
            let e = Date.now() - h;
            if (e - h < O) {
                I.info('Skipping vf feedback message due to cooldown', e);
                return;
            }
        }
        let m = g.Z.getVoiceFilter(n),
            y = null != m ? b.NW.string(m.name) : "Don't Know",
            S = c.Z.getInputDeviceId(),
            T = null === (e = c.Z.getInputDevices()[S]) || void 0 === e ? void 0 : e.name,
            N = c.Z.getOutputDeviceId(),
            A = new URLSearchParams({
                usp: 'pp_url',
                'entry.1110868176': y,
                'entry.51879725': T,
                'entry.45023460': null === (t = c.Z.getOutputDevices()[N]) || void 0 === t ? void 0 : t.name,
                'entry.1264180151': (0, _.isWindows)() ? 'Windows' : (0, _.isMac)() ? 'Mac' : (0, _.getPlatformName)()
            }),
            C = 'https://docs.google.com/forms/d/e/1FAIpQLSfiEURI77Kv0pp4DR8XAaZ0eou7fmdJ6tuU2lWkNyD_aiknsg/viewform?'.concat(A);
        r.Z.sendMessage(i.id, a.ZP.parse(i, "-# STAFF TESTING\n<:voicefilter:1336871150252458015> I'm using the **".concat(y, '** voice filter.\nHow does it sound? [Please share feedback](').concat(C, ').'))), this.lastSentTimestamp.set(p, Date.now());
    }
    constructor(...e) {
        super(...e),
            y(this, 'actions', {
                VOICE_FILTER_APPLIED: () => this.maybeQueueFeedbackMessage(),
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e)
            }),
            y(
                this,
                'stores',
                new Map().set(c.Z, () => this.handleMediaEngineStoreChange())
            ),
            y(this, 'lastSentTimestamp', new Map()),
            y(this, 'queuedSendTimeout', void 0);
    }
}
let A = new N();
