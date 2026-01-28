n.d(t, {
    A: () => k,
}),
    n(896048);
var r = n(735438),
    i = n(451988),
    a = n(73153),
    o = n(401843),
    s = n(439372),
    l = n(709710),
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
    y = n(927813),
    b = n(652896),
    O = n(502075),
    v = n(652215);

function A(e, t, n) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
let S = (0, r.debounce)(o.a8, 1e3),
    T = {},
    C = {},
    N = 3 * y.A.Millis.MINUTE,
    w = 5 * y.A.Millis.SECOND,
    R = 12 * y.A.Millis.SECOND,
    P = null;

function D(e) {
    var t;
    null == (t = T[e]) || t.stop(), delete T[e];
}

function L(e) {
    var t;
    null == (t = C[e]) || t.stop(), delete C[e];
}

function x(e, t) {
    if (m.A.getVoiceChannelId() !== e) return !1;
    let n = p.A.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != d.A.getActiveStreamForUser(t, n.getGuildId()))
        return !1;
    let r = d.A.getStreamForUser(t, n.getGuildId());
    if (null == r) return !1;
    let i = (0, b._z)(r);
    return (
        i !== P &&
        ((P = i),
        (0, o.A9)(r, {
            noFocus: !0,
        }),
        !0)
    );
}

function M(e, t) {
    let n = null != t ? t : h.A.getPreferredRegion();
    null != n && n !== h.A.getRegion(g.A.getHostname(e)) && (0, o.dA)(e, n);
}

function j(e, t) {
    var n;
    if (g.A.getAllActiveStreamKeys().includes(e)) return;
    let r = null != (n = C[e]) ? n : new i.Ep();
    (C[e] = r),
        r.start(t ? R : w, () => {
            a.h.dispatch({
                type: "STREAM_TIMED_OUT",
                streamKey: e,
            });
        });
}
class k extends s.A {
    constructor(...e) {
        super(...e),
            A(this, "handleStreamWatch", (e) => {
                let { streamKey: t, allowMultiple: n } = e,
                    { channelId: r } = (0, b.Iy)(t),
                    i = p.A.getChannel(r);
                j(t, null == i ? void 0 : i.isGuildStageVoice()),
                    D(t),
                    n ||
                        d.A.getAllActiveStreams().forEach((e) => {
                            let n = (0, b._z)(e);
                            e.ownerId === f.default.getId() || (n !== t && (0, o.vN)(n, !1));
                        });
            }),
            A(this, "handleStreamStart", (e) => {
                let { channelId: t, streamType: n, guildId: r } = e,
                    i = p.A.getChannel(t);
                j(
                    (0, b._z)({
                        streamType: n,
                        guildId: r,
                        channelId: t,
                        ownerId: f.default.getId(),
                    }),
                    null == i ? void 0 : i.isGuildStageVoice(),
                ),
                    this.platformHandleStreamStart(e);
            }),
            A(this, "handleStreamCreate", (e) => {
                var t;
                let { streamKey: n } = e;
                L(n);
                let { ownerId: r, guildId: i } = (0, b.Iy)(n);
                if (null == i || null == r || r !== (null == (t = E.default.getCurrentUser()) ? void 0 : t.id)) return;
                let a = _.A.getMemberCount(i);
                null == a || a <= O.oe || a > O.G1 || (u.wv.getSetting() && S(n));
            }),
            A(this, "handleStreamUpdate", (e) => {
                let { streamKey: t } = e;
                L(t);
            }),
            A(this, "handleStreamDelete", (e) => {
                let { reason: t, streamKey: n } = e;
                L(n),
                    t === v.H2B.STREAM_FULL &&
                        ((0, l.QW)(
                            I(
                                {
                                    type: l.iy.STREAM_FULL,
                                },
                                (0, c.id)(n),
                            ),
                        ),
                        (0, o.Xi)(n, !1),
                        this.platformShowStreamFull());
            }),
            A(this, "handleStreamClose", (e) => {
                let { streamKey: t } = e;
                D(t), L(t);
            }),
            A(this, "handleVoiceChannelSelect", (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                P = null;
                let n = d.A.getAllApplicationStreamsForChannel(t).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== f.default.getId();
                })[0];
                null != n && x(t, n.ownerId);
            }),
            A(this, "handleVoiceStateUpdates", (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    let { userId: t, channelId: n, guildId: r, selfStream: a } = e;
                    if ((this.platformHandleVoiceStateUpdate(e), t !== f.default.getId() && null != n)) {
                        if (a && x(n, t)) return;
                        let e = d.A.getActiveStreamForUser(t, r);
                        if (null != e && e.channelId === n) {
                            if (!a && e.state !== v.XYD.ENDED) {
                                var s;
                                let t = (0, b._z)(e),
                                    n = null != (s = T[t]) ? s : new i.Ep();
                                n.start(N, () => (0, o.Xi)(t, !1)), (T[t] = n);
                            }
                            if (a && e.state === v.XYD.ENDED) {
                                D((0, b._z)(e));
                                let n = d.A.getStreamForUser(t, r);
                                if (null == n) return;
                                (0, o.A9)(n);
                            }
                        }
                    }
                });
            }),
            A(this, "handleCallUpdate", (e) => {
                let { channelId: t, region: n } = e,
                    r = d.A.getCurrentUserActiveStream();
                (null == r ? void 0 : r.channelId) === t && M((0, b._z)(r), n);
            }),
            A(this, "handleChannelUpdates", (e) => {
                let { channels: t } = e,
                    n = d.A.getCurrentUserActiveStream();
                if (null != n) for (let e of t) n.channelId === e.id && M((0, b._z)(n), e.rtcRegion);
            }),
            A(this, "actions", {
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
