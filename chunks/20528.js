n.d(t, { Z: () => M }), n(47120);
var r = n(392711),
    i = n(846519),
    o = n(570140),
    a = n(872810),
    s = n(147913),
    l = n(785141),
    c = n(303284),
    u = n(695346),
    d = n(199902),
    f = n(314897),
    _ = n(592125),
    p = n(650774),
    h = n(936349),
    m = n(944486),
    g = n(959457),
    E = n(594174),
    b = n(70956),
    y = n(569545),
    v = n(70722),
    O = n(981631);
function I(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
let T = (0, r.debounce)(a.xc, 1000),
    N = new i.V7(),
    A = new i.V7(),
    C = 3 * b.Z.Millis.MINUTE,
    R = 5 * b.Z.Millis.SECOND,
    P = 12 * b.Z.Millis.SECOND,
    w = null;
function D(e, t) {
    if (m.Z.getVoiceChannelId() !== e) return !1;
    let n = _.Z.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != d.Z.getActiveStreamForUser(t, n.getGuildId())) return !1;
    let r = d.Z.getStreamForUser(t, n.getGuildId());
    if (null == r) return !1;
    let i = (0, y.V9)(r);
    return i !== w && ((w = i), (0, a.rn)(r, { noFocus: !0 }), !0);
}
function L(e, t) {
    let n = null != t ? t : h.Z.getPreferredRegion();
    null != n && n !== h.Z.getRegion(g.Z.getHostname(g.Z.getActiveStreamKey())) && (0, a.dV)(e, n);
}
function x(e, t) {
    g.Z.getAllActiveStreamKeys().includes(e) ||
        A.start(t ? P : R, () => {
            o.Z.dispatch({
                type: 'STREAM_TIMED_OUT',
                streamKey: e
            });
        });
}
class M extends s.Z {
    constructor(...e) {
        super(...e),
            I(this, 'handleStreamWatch', (e) => {
                let { streamKey: t, allowMultiple: n } = e,
                    { channelId: r } = (0, y.my)(t),
                    i = _.Z.getChannel(r);
                x(t, null == i ? void 0 : i.isGuildStageVoice()),
                    n ||
                        d.Z.getAllActiveStreams().forEach((e) => {
                            let n = (0, y.V9)(e);
                            e.ownerId !== f.default.getId() && n !== t && (0, a.g)(n, !1);
                        });
            }),
            I(this, 'handleStreamStart', (e) => {
                let { channelId: t, streamType: n, guildId: r } = e,
                    i = _.Z.getChannel(t);
                x(
                    (0, y.V9)({
                        streamType: n,
                        guildId: r,
                        channelId: t,
                        ownerId: f.default.getId()
                    }),
                    null == i ? void 0 : i.isGuildStageVoice()
                ),
                    this.platformHandleStreamStart(e);
            }),
            I(this, 'handleStreamCreate', (e) => {
                var t;
                let { streamKey: n } = e;
                A.stop();
                let { ownerId: r, guildId: i } = (0, y.my)(n);
                if (null == i || null == r || r !== (null == (t = E.default.getCurrentUser()) ? void 0 : t.id)) return;
                let o = p.Z.getMemberCount(i);
                null == o || o < 2 || o > v.tB || (u.eo.getSetting() && T(n));
            }),
            I(this, 'handleStreamUpdate', () => {
                A.stop();
            }),
            I(this, 'handleStreamDelete', (e) => {
                let { reason: t, streamKey: n } = e;
                A.stop(), t === O.si2.STREAM_FULL && ((0, l.kr)(S({ type: l.u.STREAM_FULL }, (0, c.rT)(n))), (0, a.aP)(n, !1), this.platformShowStreamFull());
            }),
            I(this, 'handleStreamClose', () => {
                N.stop(), A.stop();
            }),
            I(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                w = null;
                let n = d.Z.getAllApplicationStreamsForChannel(t).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== f.default.getId();
                })[0];
                null != n && D(t, n.ownerId);
            }),
            I(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    let { userId: t, channelId: n, guildId: r, selfStream: i } = e;
                    if ((this.platformHandleVoiceStateUpdate(e), t !== f.default.getId() && null != n)) {
                        if (i && D(n, t)) return;
                        let e = d.Z.getActiveStreamForUser(t, r);
                        if (null != e && e.channelId === n && (i || e.state === O.jm8.ENDED || N.start(C, () => (0, a.aP)((0, y.V9)(e), !1)), i && e.state === O.jm8.ENDED)) {
                            N.stop();
                            let e = d.Z.getStreamForUser(t, r);
                            if (null == e) return;
                            (0, a.rn)(e);
                        }
                    }
                });
            }),
            I(this, 'handleCallUpdate', (e) => {
                let { channelId: t, region: n } = e,
                    r = d.Z.getCurrentUserActiveStream();
                (null == r ? void 0 : r.channelId) === t && L((0, y.V9)(r), n);
            }),
            I(this, 'handleChannelUpdates', (e) => {
                let { channels: t } = e,
                    n = d.Z.getCurrentUserActiveStream();
                if (null != n) for (let e of t) n.channelId === e.id && L((0, y.V9)(n), e.rtcRegion);
            }),
            I(this, 'handleMediaEngineVideoStateChanged', (e) => {
                let { videoState: t } = e,
                    n = d.Z.getCurrentUserActiveStream();
                if (null != n) {
                    let e = t === O.FQ1.PAUSED;
                    (0, a.tK)(n, e);
                }
            }),
            I(this, 'actions', {
                STREAM_WATCH: this.handleStreamWatch,
                STREAM_START: this.handleStreamStart,
                STREAM_CREATE: this.handleStreamCreate,
                STREAM_UPDATE: this.handleStreamUpdate,
                STREAM_DELETE: this.handleStreamDelete,
                STREAM_CLOSE: this.handleStreamClose,
                CALL_UPDATE: this.handleCallUpdate,
                CHANNEL_UPDATES: this.handleChannelUpdates,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                MEDIA_ENGINE_VIDEO_STATE_CHANGED: this.handleMediaEngineVideoStateChanged
            });
    }
}
