(n.d(t, { Z: () => j }), n(388685));
var r = n(392711),
    i = n(846519),
    a = n(570140),
    o = n(872810),
    s = n(147913),
    l = n(458725),
    c = n(442741),
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
    O = n(70722),
    v = n(981631);
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            }));
    }
    return e;
}
let S = (0, r.debounce)(o.xc, 1000),
    A = {},
    N = {},
    C = 3 * b.Z.Millis.MINUTE,
    R = 5 * b.Z.Millis.SECOND,
    P = 12 * b.Z.Millis.SECOND,
    w = null;
function D(e) {
    var t;
    (null == (t = A[e]) || t.stop(), delete A[e]);
}
function L(e) {
    var t;
    (null == (t = N[e]) || t.stop(), delete N[e]);
}
function x(e, t) {
    if (m.Z.getVoiceChannelId() !== e) return !1;
    let n = _.Z.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != d.Z.getActiveStreamForUser(t, n.getGuildId())) return !1;
    let r = d.Z.getStreamForUser(t, n.getGuildId());
    if (null == r) return !1;
    let i = (0, y.V9)(r);
    return i !== w && ((w = i), (0, o.rn)(r, { noFocus: !0 }), !0);
}
function M(e, t) {
    let n = null != t ? t : h.Z.getPreferredRegion();
    null != n && n !== h.Z.getRegion(g.Z.getHostname(e)) && (0, o.dV)(e, n);
}
function k(e, t) {
    var n;
    if (g.Z.getAllActiveStreamKeys().includes(e)) return;
    let r = null != (n = N[e]) ? n : new i.V7();
    ((N[e] = r),
        r.start(t ? P : R, () => {
            a.Z.dispatch({
                type: 'STREAM_TIMED_OUT',
                streamKey: e
            });
        }));
}
class j extends s.Z {
    constructor(...e) {
        (super(...e),
            I(this, 'handleStreamWatch', (e) => {
                let { streamKey: t, allowMultiple: n } = e,
                    { channelId: r } = (0, y.my)(t),
                    i = _.Z.getChannel(r);
                (k(t, null == i ? void 0 : i.isGuildStageVoice()),
                    D(t),
                    n ||
                        d.Z.getAllActiveStreams().forEach((e) => {
                            let n = (0, y.V9)(e);
                            e.ownerId !== f.default.getId() && n !== t && (0, o.g)(n, !1);
                        }));
            }),
            I(this, 'handleStreamStart', (e) => {
                let { channelId: t, streamType: n, guildId: r } = e,
                    i = _.Z.getChannel(t);
                (k(
                    (0, y.V9)({
                        streamType: n,
                        guildId: r,
                        channelId: t,
                        ownerId: f.default.getId()
                    }),
                    null == i ? void 0 : i.isGuildStageVoice()
                ),
                    this.platformHandleStreamStart(e));
            }),
            I(this, 'handleStreamCreate', (e) => {
                var t;
                let { streamKey: n } = e;
                L(n);
                let { ownerId: r, guildId: i } = (0, y.my)(n);
                if (null == i || null == r || r !== (null == (t = E.default.getCurrentUser()) ? void 0 : t.id)) return;
                let a = p.Z.getMemberCount(i);
                null == a || a < 2 || a > O.tB || (u.eo.getSetting() && S(n));
            }),
            I(this, 'handleStreamUpdate', (e) => {
                let { streamKey: t } = e;
                L(t);
            }),
            I(this, 'handleStreamDelete', (e) => {
                let { reason: t, streamKey: n } = e;
                (L(n), t === v.si2.STREAM_FULL && ((0, l.kr)(T({ type: l.u.STREAM_FULL }, (0, c.rT)(n))), (0, o.aP)(n, !1), this.platformShowStreamFull()));
            }),
            I(this, 'handleStreamClose', (e) => {
                let { streamKey: t } = e;
                (D(t), L(t));
            }),
            I(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                w = null;
                let n = d.Z.getAllApplicationStreamsForChannel(t).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== f.default.getId();
                })[0];
                null != n && x(t, n.ownerId);
            }),
            I(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    let { userId: t, channelId: n, guildId: r, selfStream: a } = e;
                    if ((this.platformHandleVoiceStateUpdate(e), t !== f.default.getId() && null != n)) {
                        if (a && x(n, t)) return;
                        let e = d.Z.getActiveStreamForUser(t, r);
                        if (null != e && e.channelId === n) {
                            if (!a && e.state !== v.jm8.ENDED) {
                                var s;
                                let t = (0, y.V9)(e),
                                    n = null != (s = A[t]) ? s : new i.V7();
                                (n.start(C, () => (0, o.aP)(t, !1)), (A[t] = n));
                            }
                            if (a && e.state === v.jm8.ENDED) {
                                D((0, y.V9)(e));
                                let n = d.Z.getStreamForUser(t, r);
                                if (null == n) return;
                                (0, o.rn)(n);
                            }
                        }
                    }
                });
            }),
            I(this, 'handleCallUpdate', (e) => {
                let { channelId: t, region: n } = e,
                    r = d.Z.getCurrentUserActiveStream();
                (null == r ? void 0 : r.channelId) === t && M((0, y.V9)(r), n);
            }),
            I(this, 'handleChannelUpdates', (e) => {
                let { channels: t } = e,
                    n = d.Z.getCurrentUserActiveStream();
                if (null != n) for (let e of t) n.channelId === e.id && M((0, y.V9)(n), e.rtcRegion);
            }),
            I(this, 'handleMediaEngineVideoStateChanged', (e) => {
                let { videoState: t } = e,
                    n = d.Z.getCurrentUserActiveStream();
                if (null != n) {
                    let e = t === v.FQ1.PAUSED;
                    (0, o.tK)(n, e);
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
            }));
    }
}
