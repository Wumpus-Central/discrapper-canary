"use strict";
n.d(t, { A: () => W });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(522160),
    l = n(311907),
    u = n(397927),
    c = n(387755),
    d = n(517499),
    _ = n(956793),
    f = n(712960),
    p = n(793574),
    h = n(58149),
    m = n(688810),
    E = n(571694),
    g = n(47167),
    A = n(713654),
    I = n(573435),
    T = n(140547),
    S = n(7054),
    y = n(481947),
    v = n(260509),
    N = n(616356),
    C = n(71393),
    b = n(287809),
    R = n(607567),
    O = n(531685),
    D = n(954571),
    L = n(486020),
    w = n(203982),
    x = n(427262),
    M = n(313961),
    P = n(384059),
    k = n(652215),
    U = n(650583),
    G = n(985018),
    F = n(293390),
    V = n(976092);
let B = 80,
    H = 40,
    j = 32;
function Y(e) {
    let { voiceState: t, user: n, channel: i } = e,
        s = (0, l.bG)([N.A], () => N.A.getStreamForUser(n.id, i.guild_id)),
        { enableHangStatus: a } = (0, T.$j)({ guildId: i.guild_id, location: "IncomingCallModalV2" }),
        o = (0, S.h)(n.id),
        c = (0, x.tx)(n);
    return (0, r.jsxs)("div", {
        className: F.q7,
        children: [
            (0, r.jsxs)("div", {
                className: F.G7,
                children: [
                    (0, r.jsx)(u.euF, {
                        "aria-label": n.username,
                        src: n.getAvatarURL(i.guild_id, j, !1, !1),
                        size: u._3J.SIZE_32,
                    }),
                    (0, r.jsx)(u.Text, { variant: "text-sm/medium", children: c }),
                ],
            }),
            (0, r.jsx)(y.Kc, {
                user: n,
                channelId: i.id,
                mute: t.isVoiceMuted(),
                deaf: t.isVoiceDeafened(),
                video: t.selfVideo,
                isStreaming: null != s && s.channelId === i.id,
                serverMute: t.mute,
                serverDeaf: t.deaf,
                hangStatusActivity: a ? o : void 0,
            }),
        ],
    });
}
function W(e) {
    let { animatedStyle: t, x: n, y: s, channel: T } = e,
        { analyticsLocations: S } = (0, m.Ay)(p.A.INCOMING_CALL_MODAL),
        y = (0, l.bG)([O.A], () => O.A.windowSize()),
        N = (0, l.bG)([C.A], () => C.A.getGuild(T.guild_id)),
        j = null != N ? L.Ay.getGuildIconURL({ id: N.id, icon: N.icon, size: H }) : null,
        W = (0, E.Y)(T, H, !0) ?? j,
        K = (0, g.Ay)(T),
        z = (0, l.yK)([R.Ay, M.A], () =>
            R.Ay.getVoiceStatesForChannel(T).filter((e) => !M.A.getGuildRingingUsers(T.id).has(e.user.id)),
        ),
        $ = (0, l.bG)([b.default], () => b.default.getCurrentUser()),
        q = (0, x.tx)($),
        Z = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        X = i.useCallback(() => {
            (0, P.X)(S[0], P.O.DISCONNECT),
                D.default.track(k.HAw.RING_CALL_DECLINED, { location: S[0], guild_id: T.guild_id, ...(0, h.dI)(T) }),
                c.A.stopRinging(T.id);
        }, [T, S]),
        Q = i.useCallback(() => {
            (0, P.X)(S[0], P.O.JOIN_CALL),
                D.default.track(k.HAw.RING_CALL_ACCEPTED, { location: S[0], guild_id: T.guild_id, ...(0, h.dI)(T) }),
                _.default.selectVoiceChannel(T.id);
        }, [T, S]);
    i.useEffect(() => {
        let e = (e) => {
            e.key === U.dh.ESCAPE && c.A.stopRinging(T.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [T]),
        i.useEffect(
            () => (
                w._.subscribe(k.jej.CALL_ACCEPT, Q),
                () => {
                    w._.unsubscribe(k.jej.CALL_ACCEPT, Q);
                }
            ),
            [Q],
        );
    let J = (0, A.gU)(T);
    return (0, r.jsx)(m.f5, {
        value: S,
        children: (0, r.jsx)(f.A, {
            className: F.iE,
            selector: `.${F.zr}`,
            initialPosition: { left: n, top: s },
            maxX: y.width,
            maxY: y.height,
            onDragEnd: Z,
            dragAnywhere: !0,
            children: (0, r.jsx)(u.NPJ, {
                children: (e) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: a()(F.zr, V.a8, e),
                        style: { ...t },
                        children: [
                            (0, r.jsxs)("div", {
                                className: F.wx,
                                children: [
                                    (0, r.jsx)(u.euF, {
                                        className: F.gX,
                                        "aria-label": "user",
                                        src: $?.getAvatarURL(T.guild_id, B, !1, !1),
                                        size: u._3J.SIZE_80,
                                    }),
                                    (0, r.jsx)(u.Heading, {
                                        variant: "heading-lg/semibold",
                                        className: a()(F.gX, F.DD),
                                        children: G.intl.format(G.t.M3F6cv, { username: q }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: F.C5,
                                        children: [
                                            (null != N || null != W) &&
                                                (0, r.jsx)(I.Ay, {
                                                    mask: I.hW.SQUIRCLE,
                                                    width: H,
                                                    height: H,
                                                    className: F.NR,
                                                    children:
                                                        null != W
                                                            ? (0, r.jsx)("img", {
                                                                  alt: N?.name ?? K ?? "",
                                                                  src: W,
                                                                  width: H,
                                                                  height: H,
                                                              })
                                                            : null != N
                                                              ? (0, r.jsx)("div", {
                                                                    className: F.$r,
                                                                    children: (0, r.jsx)("div", {
                                                                        className: F.q9,
                                                                        children: (0, v.Rb)(N),
                                                                    }),
                                                                })
                                                              : null,
                                                }),
                                            (0, r.jsxs)("div", {
                                                className: F.Ug,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: F.HA,
                                                        children: [
                                                            null != J &&
                                                                (0, r.jsx)(J, {
                                                                    size: "xs",
                                                                    color: u.LU0.colors.TEXT_DEFAULT,
                                                                    className: F.NR,
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                className: F.zb,
                                                                children: K,
                                                            }),
                                                        ],
                                                    }),
                                                    N?.name != null &&
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            className: F.zb,
                                                            children: N.name,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(u.HOs, {
                                className: F.XG,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: F.bi,
                                        children: G.intl.format(G.t.e95u3C, { count: z.length }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: F.Xk,
                                        children: z.map((e) => {
                                            let { voiceState: t, user: n } = e;
                                            return (0, r.jsx)(Y, { voiceState: t, user: n, channel: T }, n.id);
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: F.o1,
                                children: [
                                    (0, r.jsx)(u.Button, {
                                        text: G.intl.string(G.t.L5eIZ2),
                                        fullWidth: !0,
                                        variant: "secondary",
                                        onClick: X,
                                    }),
                                    (0, r.jsx)(u.Button, {
                                        text: G.intl.string(G.t["96ANUN"]),
                                        fullWidth: !0,
                                        variant: "active",
                                        onClick: Q,
                                    }),
                                ],
                            }),
                        ],
                    }),
            }),
        }),
    });
}
