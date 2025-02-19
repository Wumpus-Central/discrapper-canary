n.d(t, { Z: () => N }), n(610138), n(216116), n(78328), n(815648), n(47120);
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
    v = n(231338);
function b(e, t, n) {
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
let y = 30 * p.Z.Millis.MINUTE,
    O = 10 * p.Z.Millis.SECOND,
    S = new o.Z('VoiceFilterFeedbackManager');
function I() {
    return (0, m.wt)({
        location: 'VoiceFilterFeedbackManager',
        autoTrackExposure: !1
    });
}
class T extends i.Z {
    handleMediaEngineStoreChange() {
        I() && this.maybeQueueFeedbackMessage();
    }
    handleVoiceChannelSelect(e) {
        let { guildId: t } = e;
        I() &&
        (0, m.m3)({
            location: 'VoiceFilterFeedbackManager',
            guildId: t
        })
            ? (0, h.v6)(null)
            : this.maybeQueueFeedbackMessage();
    }
    maybeQueueFeedbackMessage() {
        if (!I()) return;
        clearTimeout(this.queuedSendTimeout);
        let e = f.default.getCurrentUser();
        !((null == e ? void 0 : e.isStaff()) !== !0 || null == c.Z.getActiveVoiceFilter() || c.Z.isSelfMute() || c.Z.isSelfMutedTemporarily()) &&
            (this.queuedSendTimeout = setTimeout(() => {
                this._maybeSendFeedbackMessage();
            }, O));
    }
    _maybeSendFeedbackMessage() {
        var e, t, n;
        let i = c.Z.getActiveVoiceFilter();
        if (null == i) return;
        let o = s.Z.getChannel(d.Z.getVoiceChannelId());
        if (null == o) return;
        let f = o.getGuildId(),
            p = l.Z.getGuild(f);
        if (null == p || !p.hasFeature(E.oNc.INTERNAL_EMPLOYEE_ONLY) || o.type === E.d4z.GUILD_STAGE_VOICE) return;
        if (!u.Z.can(v.Pl.SEND_MESSAGES, o)) {
            S.info('Skipping vf feedback message due to no send permission');
            return;
        }
        let h = ''.concat(o.id, ':').concat(i),
            m = this.lastSentTimestamp.get(h);
        if (null != m) {
            let e = Date.now() - m;
            if (e - m < y) {
                S.info('Skipping vf feedback message due to cooldown', e);
                return;
            }
        }
        let b = g.Z.getVoiceFilter(i),
            O = null !== (n = null == b ? void 0 : b.name) && void 0 !== n ? n : "Don't Know",
            I = c.Z.getInputDeviceId(),
            T = null === (e = c.Z.getInputDevices()[I]) || void 0 === e ? void 0 : e.name,
            N = c.Z.getOutputDeviceId(),
            A = new URLSearchParams({
                usp: 'pp_url',
                'entry.1110868176': O,
                'entry.51879725': T,
                'entry.45023460': null === (t = c.Z.getOutputDevices()[N]) || void 0 === t ? void 0 : t.name,
                'entry.1264180151': (0, _.isWindows)() ? 'Windows' : (0, _.isMac)() ? 'Mac' : (0, _.getPlatformName)()
            }),
            C = 'https://docs.google.com/forms/d/e/1FAIpQLSfiEURI77Kv0pp4DR8XAaZ0eou7fmdJ6tuU2lWkNyD_aiknsg/viewform?'.concat(A);
        r.Z.sendMessage(o.id, a.ZP.parse(o, "-# STAFF TESTING\n<:voicefilter:1336871150252458015> I'm using the **".concat(O, '** voice filter.\nHow does it sound? [Please share feedback](').concat(C, ').'))), this.lastSentTimestamp.set(h, Date.now());
    }
    constructor(...e) {
        super(...e),
            b(this, 'actions', {
                VOICE_FILTER_APPLIED: () => this.maybeQueueFeedbackMessage(),
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e)
            }),
            b(
                this,
                'stores',
                new Map().set(c.Z, () => this.handleMediaEngineStoreChange())
            ),
            b(this, 'lastSentTimestamp', new Map()),
            b(this, 'queuedSendTimeout', void 0);
    }
}
let N = new T();
