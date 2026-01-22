n.d(t, { A: () => U }), n(896048);
var r = n(735438),
    i = n(451988),
    a = n(73153),
    s = n(401843),
    o = n(439372),
    l = n(487329),
    c = n(601900),
    u = n(253932),
    d = n(616356),
    f = n(961350),
    p = n(734057),
    _ = n(498642),
    h = n(873985),
    m = n(309010),
    g = n(162605),
    E = n(287809),
    b = n(927813),
    y = n(842179),
    O = n(652896),
    A = n(502075),
    v = n(652215);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let T = (0, r.debounce)(s.a8, 1000),
    C = {},
    N = {},
    R = 3 * b.A.Millis.MINUTE,
    w = 5 * b.A.Millis.SECOND,
    P = 12 * b.A.Millis.SECOND,
    D = null;
function x(e) {
    var t;
    null == (t = C[e]) || t.stop(), delete C[e];
}
function L(e) {
    var t;
    null == (t = N[e]) || t.stop(), delete N[e];
}
function j(e, t) {
    if (m.A.getVoiceChannelId() !== e) return !1;
    let n = p.A.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != d.A.getActiveStreamForUser(t, n.getGuildId()))
        return !1;
    let r = d.A.getStreamForUser(t, n.getGuildId());
    if (null == r) return !1;
    let i = (0, O._z)(r);
    return i !== D && ((D = i), (0, s.A9)(r, { noFocus: !0 }), !0);
}
function M(e, t) {
    let n = null != t ? t : h.A.getPreferredRegion();
    null != n && n !== h.A.getRegion(g.A.getHostname(e)) && (0, s.dA)(e, n);
}
function k(e, t) {
    var n;
    if (g.A.getAllActiveStreamKeys().includes(e)) return;
    let r = null != (n = N[e]) ? n : new i.Ep();
    (N[e] = r),
        r.start(t ? P : w, () => {
            a.h.dispatch({
                type: "STREAM_TIMED_OUT",
                streamKey: e,
            });
        });
}
class U extends o.A {
    constructor(...e) {
        super(...e),
            S(this, "handleStreamWatch", (e) => {
                let { streamKey: t, allowMultiple: n } = e,
                    { channelId: r } = (0, O.Iy)(t),
                    i = p.A.getChannel(r);
                k(t, null == i ? void 0 : i.isGuildStageVoice()),
                    x(t),
                    n ||
                        d.A.getAllActiveStreams().forEach((e) => {
                            let n = (0, O._z)(e);
                            e.ownerId === f.default.getId() || (n !== t && (0, s.vN)(n, !1));
                        });
            }),
            S(this, "handleStreamStart", (e) => {
                let { channelId: t, streamType: n, guildId: r } = e,
                    i = p.A.getChannel(t);
                k(
                    (0, O._z)({
                        streamType: n,
                        guildId: r,
                        channelId: t,
                        ownerId: f.default.getId(),
                    }),
                    null == i ? void 0 : i.isGuildStageVoice(),
                ),
                    this.platformHandleStreamStart(e);
            }),
            S(this, "handleStreamCreate", (e) => {
                var t;
                let { streamKey: n } = e;
                L(n);
                let { ownerId: r, guildId: i } = (0, O.Iy)(n);
                if (
                    null == i ||
                    null == r ||
                    (0, y.oZ)({
                        guildId: i,
                        location: "ApplicationStreamingManager",
                    }) ||
                    r !== (null == (t = E.default.getCurrentUser()) ? void 0 : t.id)
                )
                    return;
                let a = _.A.getMemberCount(i);
                null == a || a < 2 || a > A.G1 || (u.wv.getSetting() && T(n));
            }),
            S(this, "handleStreamUpdate", (e) => {
                let { streamKey: t } = e;
                L(t);
            }),
            S(this, "handleStreamDelete", (e) => {
                let { reason: t, streamKey: n } = e;
                L(n),
                    t === v.H2B.STREAM_FULL &&
                        ((0, l.QW)(I({ type: l.iy.STREAM_FULL }, (0, c.id)(n))),
                        (0, s.Xi)(n, !1),
                        this.platformShowStreamFull());
            }),
            S(this, "handleStreamClose", (e) => {
                let { streamKey: t } = e;
                x(t), L(t);
            }),
            S(this, "handleVoiceChannelSelect", (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                D = null;
                let n = d.A.getAllApplicationStreamsForChannel(t).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== f.default.getId();
                })[0];
                null != n && j(t, n.ownerId);
            }),
            S(this, "handleVoiceStateUpdates", (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    let { userId: t, channelId: n, guildId: r, selfStream: a } = e;
                    if ((this.platformHandleVoiceStateUpdate(e), t !== f.default.getId() && null != n)) {
                        if (a && j(n, t)) return;
                        let e = d.A.getActiveStreamForUser(t, r);
                        if (null != e && e.channelId === n) {
                            if (!a && e.state !== v.XYD.ENDED) {
                                var o;
                                let t = (0, O._z)(e),
                                    n = null != (o = C[t]) ? o : new i.Ep();
                                n.start(R, () => (0, s.Xi)(t, !1)), (C[t] = n);
                            }
                            if (a && e.state === v.XYD.ENDED) {
                                x((0, O._z)(e));
                                let n = d.A.getStreamForUser(t, r);
                                if (null == n) return;
                                (0, s.A9)(n);
                            }
                        }
                    }
                });
            }),
            S(this, "handleCallUpdate", (e) => {
                let { channelId: t, region: n } = e,
                    r = d.A.getCurrentUserActiveStream();
                (null == r ? void 0 : r.channelId) === t && M((0, O._z)(r), n);
            }),
            S(this, "handleChannelUpdates", (e) => {
                let { channels: t } = e,
                    n = d.A.getCurrentUserActiveStream();
                if (null != n) for (let e of t) n.channelId === e.id && M((0, O._z)(n), e.rtcRegion);
            }),
            S(this, "actions", {
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
