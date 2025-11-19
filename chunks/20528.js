n.d(t, { Z: () => U }), n(388685);
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
    y = n(992817),
    O = n(569545),
    v = n(70722),
    I = n(981631);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
let A = (0, r.debounce)(o.xc, 1000),
    C = {},
    N = {},
    R = 3 * b.Z.Millis.MINUTE,
    P = 5 * b.Z.Millis.SECOND,
    D = 12 * b.Z.Millis.SECOND,
    w = null;
function L(e) {
    var t;
    null == (t = C[e]) || t.stop(), delete C[e];
}
function x(e) {
    var t;
    null == (t = N[e]) || t.stop(), delete N[e];
}
function M(e, t) {
    if (m.Z.getVoiceChannelId() !== e) return !1;
    let n = _.Z.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != d.Z.getActiveStreamForUser(t, n.getGuildId()))
        return !1;
    let r = d.Z.getStreamForUser(t, n.getGuildId());
    if (null == r) return !1;
    let i = (0, O.V9)(r);
    return i !== w && ((w = i), (0, o.rn)(r, { noFocus: !0 }), !0);
}
function j(e, t) {
    let n = null != t ? t : h.Z.getPreferredRegion();
    null != n && n !== h.Z.getRegion(g.Z.getHostname(e)) && (0, o.dV)(e, n);
}
function k(e, t) {
    var n;
    if (g.Z.getAllActiveStreamKeys().includes(e)) return;
    let r = null != (n = N[e]) ? n : new i.V7();
    (N[e] = r),
        r.start(t ? D : P, () => {
            a.Z.dispatch({
                type: "STREAM_TIMED_OUT",
                streamKey: e,
            });
        });
}
class U extends s.Z {
    constructor(...e) {
        super(...e),
            T(this, "handleStreamWatch", (e) => {
                let { streamKey: t, allowMultiple: n } = e,
                    { channelId: r } = (0, O.my)(t),
                    i = _.Z.getChannel(r);
                k(t, null == i ? void 0 : i.isGuildStageVoice()),
                    L(t),
                    n ||
                        d.Z.getAllActiveStreams().forEach((e) => {
                            let n = (0, O.V9)(e);
                            e.ownerId !== f.default.getId() && n !== t && (0, o.g)(n, !1);
                        });
            }),
            T(this, "handleStreamStart", (e) => {
                let { channelId: t, streamType: n, guildId: r } = e,
                    i = _.Z.getChannel(t);
                k(
                    (0, O.V9)({
                        streamType: n,
                        guildId: r,
                        channelId: t,
                        ownerId: f.default.getId(),
                    }),
                    null == i ? void 0 : i.isGuildStageVoice(),
                ),
                    this.platformHandleStreamStart(e);
            }),
            T(this, "handleStreamCreate", (e) => {
                var t;
                let { streamKey: n } = e;
                x(n);
                let { ownerId: r, guildId: i } = (0, O.my)(n);
                if (
                    null == i ||
                    null == r ||
                    (0, y.Bx)({
                        guildId: i,
                        location: "ApplicationStreamingManager",
                    }) ||
                    r !== (null == (t = E.default.getCurrentUser()) ? void 0 : t.id)
                )
                    return;
                let a = p.Z.getMemberCount(i);
                null == a || a < 2 || a > v.tB || (u.eo.getSetting() && A(n));
            }),
            T(this, "handleStreamUpdate", (e) => {
                let { streamKey: t } = e;
                x(t);
            }),
            T(this, "handleStreamDelete", (e) => {
                let { reason: t, streamKey: n } = e;
                x(n),
                    t === I.si2.STREAM_FULL &&
                        ((0, l.kr)(S({ type: l.u.STREAM_FULL }, (0, c.rT)(n))),
                        (0, o.aP)(n, !1),
                        this.platformShowStreamFull());
            }),
            T(this, "handleStreamClose", (e) => {
                let { streamKey: t } = e;
                L(t), x(t);
            }),
            T(this, "handleVoiceChannelSelect", (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                w = null;
                let n = d.Z.getAllApplicationStreamsForChannel(t).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== f.default.getId();
                })[0];
                null != n && M(t, n.ownerId);
            }),
            T(this, "handleVoiceStateUpdates", (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    let { userId: t, channelId: n, guildId: r, selfStream: a } = e;
                    if ((this.platformHandleVoiceStateUpdate(e), t !== f.default.getId() && null != n)) {
                        if (a && M(n, t)) return;
                        let e = d.Z.getActiveStreamForUser(t, r);
                        if (null != e && e.channelId === n) {
                            if (!a && e.state !== I.jm8.ENDED) {
                                var s;
                                let t = (0, O.V9)(e),
                                    n = null != (s = C[t]) ? s : new i.V7();
                                n.start(R, () => (0, o.aP)(t, !1)), (C[t] = n);
                            }
                            if (a && e.state === I.jm8.ENDED) {
                                L((0, O.V9)(e));
                                let n = d.Z.getStreamForUser(t, r);
                                if (null == n) return;
                                (0, o.rn)(n);
                            }
                        }
                    }
                });
            }),
            T(this, "handleCallUpdate", (e) => {
                let { channelId: t, region: n } = e,
                    r = d.Z.getCurrentUserActiveStream();
                (null == r ? void 0 : r.channelId) === t && j((0, O.V9)(r), n);
            }),
            T(this, "handleChannelUpdates", (e) => {
                let { channels: t } = e,
                    n = d.Z.getCurrentUserActiveStream();
                if (null != n) for (let e of t) n.channelId === e.id && j((0, O.V9)(n), e.rtcRegion);
            }),
            T(this, "actions", {
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
            });
    }
}
