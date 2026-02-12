"use strict";
n.d(t, { A: () => K });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(40153),
    l = n(311907),
    u = n(397927),
    c = n(387755),
    d = n(517499),
    _ = n(956793),
    f = n(712960),
    h = n(793574),
    p = n(58149),
    g = n(688810),
    E = n(571694),
    A = n(47167),
    I = n(713654),
    T = n(573435),
    y = n(140547),
    S = n(7054),
    v = n(481947),
    C = n(260509),
    b = n(616356),
    N = n(71393),
    R = n(287809),
    O = n(607567),
    D = n(531685),
    L = n(954571),
    w = n(486020),
    x = n(203982),
    P = n(427262),
    M = n(313961),
    k = n(384059),
    U = n(652215),
    G = n(650583),
    F = n(985018),
    V = n(293390),
    B = n(976092);
let j = 80,
    H = 40,
    Y = 32;
function W(e) {
    let { voiceState: t, user: n, channel: i } = e,
        a = (0, l.bG)([b.A], () => b.A.getStreamForUser(n.id, i.guild_id)),
        { enableHangStatus: s } = (0, y.$j)({ guildId: i.guild_id, location: "IncomingCallModalV2" }),
        o = (0, S.h)(n.id),
        c = (0, P.tx)(n);
    return (0, r.jsxs)("div", {
        className: V.q7,
        children: [
            (0, r.jsx)(u.euF, {
                "aria-label": n.username,
                src: n.getAvatarURL(i.guild_id, Y, !1, !1),
                size: u._3J.SIZE_32,
            }),
            (0, r.jsx)(u.Text, { variant: "text-sm/medium", children: c }),
            (0, r.jsx)(v.Kc, {
                user: n,
                channelId: i.id,
                mute: t.isVoiceMuted(),
                deaf: t.isVoiceDeafened(),
                video: t.selfVideo,
                isStreaming: null != a && a.channelId === i.id,
                serverMute: t.mute,
                serverDeaf: t.deaf,
                hangStatusActivity: s ? o : void 0,
            }),
        ],
    });
}
function K(e) {
    let { animatedStyle: t, x: n, y: a, channel: y } = e,
        { analyticsLocations: S } = (0, g.Ay)(h.A.INCOMING_CALL_MODAL),
        v = (0, l.bG)([D.A], () => D.A.windowSize()),
        b = (0, l.bG)([N.A], () => N.A.getGuild(y.guild_id)),
        Y = null != b ? w.Ay.getGuildIconURL({ id: b.id, icon: b.icon, size: H }) : null,
        K = (0, E.Y)(y, H, !0) ?? Y,
        $ = (0, A.Ay)(y),
        z = (0, l.yK)([O.Ay, M.A], () =>
            O.Ay.getVoiceStatesForChannel(y).filter((e) => !M.A.getGuildRingingUsers(y.id).has(e.user.id)),
        ),
        q = (0, l.bG)([R.default], () => R.default.getCurrentUser()),
        X = (0, P.tx)(q),
        Z = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        Q = i.useCallback(() => {
            (0, k.X)(S[0], k.O.DISCONNECT),
                L.default.track(U.HAw.RING_CALL_DECLINED, { location: S[0], guild_id: y.guild_id, ...(0, p.dI)(y) }),
                c.A.stopRinging(y.id);
        }, [y, S]),
        J = i.useCallback(() => {
            (0, k.X)(S[0], k.O.JOIN_CALL),
                L.default.track(U.HAw.RING_CALL_ACCEPTED, { location: S[0], guild_id: y.guild_id, ...(0, p.dI)(y) }),
                _.default.selectVoiceChannel(y.id);
        }, [y, S]);
    i.useEffect(() => {
        let e = (e) => {
            e.key === G.dh.ESCAPE && c.A.stopRinging(y.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [y]),
        i.useEffect(
            () => (
                x._.subscribe(U.jej.CALL_ACCEPT, J),
                () => {
                    x._.unsubscribe(U.jej.CALL_ACCEPT, J);
                }
            ),
            [J],
        );
    let ee = (0, I.gU)(y);
    return (0, r.jsx)(g.f5, {
        value: S,
        children: (0, r.jsx)(f.A, {
            className: V.iE,
            selector: `.${V.zr}`,
            initialPosition: { left: n, top: a },
            maxX: v.width,
            maxY: v.height,
            onDragEnd: Z,
            dragAnywhere: !0,
            children: (0, r.jsx)(u.NPJ, {
                children: (e) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: s()(V.zr, B.a8, e),
                        style: { ...t },
                        children: [
                            (0, r.jsx)(u.euF, {
                                className: V.gX,
                                "aria-label": "user",
                                src: q?.getAvatarURL(y.guild_id, j, !1, !1),
                                size: u._3J.SIZE_80,
                            }),
                            (0, r.jsx)(u.Heading, {
                                variant: "heading-lg/semibold",
                                className: s()(V.gX, V.DD),
                                children: F.intl.format(F.t.M3F6cv, { username: X }),
                            }),
                            (0, r.jsxs)("div", {
                                className: V.C5,
                                children: [
                                    (null != b || null != K) &&
                                        (0, r.jsx)(T.Ay, {
                                            mask: T.hW.SQUIRCLE,
                                            width: H,
                                            height: H,
                                            className: V.NR,
                                            children:
                                                null != K
                                                    ? (0, r.jsx)("img", {
                                                          alt: b?.name ?? $ ?? "",
                                                          src: K,
                                                          width: H,
                                                          height: H,
                                                      })
                                                    : null != b
                                                      ? (0, r.jsx)("div", {
                                                            className: V.$r,
                                                            children: (0, r.jsx)("div", {
                                                                className: V.q9,
                                                                children: (0, C.Rb)(b),
                                                            }),
                                                        })
                                                      : null,
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: V.Ug,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: V.HA,
                                                children: [
                                                    null != ee &&
                                                        (0, r.jsx)(ee, {
                                                            size: "xs",
                                                            color: u.LU0.colors.TEXT_DEFAULT,
                                                            className: V.NR,
                                                        }),
                                                    (0, r.jsx)(u.Text, {
                                                        variant: "text-md/semibold",
                                                        color: "text-default",
                                                        className: V.zb,
                                                        children: $,
                                                    }),
                                                ],
                                            }),
                                            b?.name != null &&
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    className: V.zb,
                                                    children: b.name,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(u.HOs, {
                                className: V.XG,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: F.intl.format(F.t.e95u3C, { count: z.length }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: V.Xk,
                                        children: z.map((e) => {
                                            let { voiceState: t, user: n } = e;
                                            return (0, r.jsx)(W, { voiceState: t, user: n, channel: y }, n.id);
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: V.o1,
                                children: [
                                    (0, r.jsx)(u.Button, {
                                        text: F.intl.string(F.t.L5eIZ2),
                                        fullWidth: !0,
                                        variant: "secondary",
                                        onClick: Q,
                                    }),
                                    (0, r.jsx)(u.Button, {
                                        text: F.intl.string(F.t["96ANUN"]),
                                        fullWidth: !0,
                                        variant: "active",
                                        onClick: J,
                                    }),
                                ],
                            }),
                        ],
                    }),
            }),
        }),
    });
}
