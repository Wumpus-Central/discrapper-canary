"use strict";
n.d(t, { A: () => z });
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
    P = n(850226),
    k = n(717319),
    U = n(384059),
    G = n(652215),
    F = n(650583),
    V = n(985018),
    B = n(293390),
    H = n(976092);
let j = 80,
    Y = 40,
    W = 32;
function K(e) {
    let { voiceState: t, user: n, channel: i } = e,
        s = (0, l.bG)([N.A], () => N.A.getStreamForUser(n.id, i.guild_id)),
        { enableHangStatus: a } = (0, T.$j)({ guildId: i.guild_id, location: "IncomingCallModalV2" }),
        o = (0, S.h)(n.id),
        c = (0, x.tx)(n);
    return (0, r.jsxs)("div", {
        className: B.q7,
        children: [
            (0, r.jsxs)("div", {
                className: B.G7,
                children: [
                    (0, r.jsx)(u.euF, {
                        "aria-label": n.username,
                        src: n.getAvatarURL(i.guild_id, W, !1, !1),
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
function z(e) {
    let { animatedStyle: t, x: n, y: s, channel: T } = e,
        { analyticsLocations: S } = (0, m.Ay)(p.A.INCOMING_CALL_MODAL),
        y = i.useRef(null),
        N = (0, l.bG)([O.A], () => O.A.windowSize()),
        W = (0, l.bG)([C.A], () => C.A.getGuild(T.guild_id)),
        z = null != W ? L.Ay.getGuildIconURL({ id: W.id, icon: W.icon, size: Y }) : null,
        $ = (0, E.Y)(T, Y, !0) ?? z,
        q = (0, g.Ay)(T),
        Z = (0, l.yK)([R.Ay, M.A], () =>
            R.Ay.getVoiceStatesForChannel(T).filter((e) => !M.A.getGuildRingingUsers(T.id).has(e.user.id)),
        ),
        X = (0, l.bG)([b.default], () => b.default.getCurrentUser()),
        Q = (0, x.tx)(X),
        J = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        ee = i.useCallback(() => {
            (0, U.X)(S[0], U.O.DISCONNECT),
                D.default.track(G.HAw.RING_CALL_DECLINED, { location: S[0], guild_id: T.guild_id, ...(0, h.dI)(T) }),
                c.A.stopRinging(T.id);
        }, [T, S]),
        et = i.useCallback(() => {
            (0, U.X)(S[0], U.O.JOIN_CALL),
                D.default.track(G.HAw.RING_CALL_ACCEPTED, { location: S[0], guild_id: T.guild_id, ...(0, h.dI)(T) }),
                _.default.selectVoiceChannel(T.id);
        }, [T, S]);
    i.useEffect(() => {
        let e = (e) => {
            e.key === F.dh.ESCAPE && c.A.stopRinging(T.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [T]),
        i.useEffect(
            () => (
                w._.subscribe(G.jej.CALL_ACCEPT, et),
                () => {
                    w._.unsubscribe(G.jej.CALL_ACCEPT, et);
                }
            ),
            [et],
        );
    let en = (0, A.gU)(T);
    return (0, r.jsx)(m.f5, {
        value: S,
        children: (0, r.jsx)(f.A, {
            className: B.iE,
            selector: `.${B.zr}`,
            initialPosition: { left: n, top: s },
            maxX: N.width,
            maxY: N.height,
            onDragEnd: J,
            dragAnywhere: !0,
            children: (0, r.jsx)(u.NPJ, {
                children: (e) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: a()(B.zr, H.a8, e),
                        style: { ...t },
                        children: [
                            (0, r.jsxs)("div", {
                                className: B.wx,
                                children: [
                                    (0, r.jsx)(u.euF, {
                                        className: B.gX,
                                        "aria-label": "user",
                                        src: X?.getAvatarURL(T.guild_id, j, !1, !1),
                                        size: u._3J.SIZE_80,
                                    }),
                                    (0, r.jsx)(u.Heading, {
                                        variant: "heading-lg/semibold",
                                        className: a()(B.gX, B.DD),
                                        children: V.intl.format(V.t.M3F6cv, { username: Q }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: B.C5,
                                        children: [
                                            (null != W || null != $) &&
                                                (0, r.jsx)(I.Ay, {
                                                    mask: I.hW.SQUIRCLE,
                                                    width: Y,
                                                    height: Y,
                                                    className: B.NR,
                                                    children:
                                                        null != $
                                                            ? (0, r.jsx)("img", {
                                                                  alt: W?.name ?? q ?? "",
                                                                  src: $,
                                                                  width: Y,
                                                                  height: Y,
                                                              })
                                                            : null != W
                                                              ? (0, r.jsx)("div", {
                                                                    className: B.$r,
                                                                    children: (0, r.jsx)("div", {
                                                                        className: B.q9,
                                                                        children: (0, v.Rb)(W),
                                                                    }),
                                                                })
                                                              : null,
                                                }),
                                            (0, r.jsxs)("div", {
                                                className: B.Ug,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: B.HA,
                                                        children: [
                                                            null != en &&
                                                                (0, r.jsx)(en, {
                                                                    size: "xs",
                                                                    color: u.LU0.colors.TEXT_DEFAULT,
                                                                    className: B.NR,
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                className: B.zb,
                                                                children: q,
                                                            }),
                                                        ],
                                                    }),
                                                    W?.name != null &&
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            className: B.zb,
                                                            children: W.name,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(u.HOs, {
                                className: B.XG,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: B.bi,
                                        children: V.intl.format(V.t.e95u3C, { count: Z.length }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: B.Xk,
                                        children: Z.map((e) => {
                                            let { voiceState: t, user: n } = e;
                                            return (0, r.jsx)(K, { voiceState: t, user: n, channel: T }, n.id);
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: B.o1,
                                children: [
                                    (0, r.jsx)(u.Button, {
                                        text: V.intl.string(V.t.L5eIZ2),
                                        fullWidth: !0,
                                        variant: "secondary",
                                        onClick: ee,
                                    }),
                                    (0, r.jsx)(u.YNO, {
                                        targetElementRef: y,
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(P.A, { onClose: t, channel: T });
                                        },
                                        position: "bottom",
                                        children: (e) => {
                                            let { onClick: t } = e;
                                            return (0, r.jsx)(k.A, {
                                                ref: y,
                                                text: V.intl.string(V.t["96ANUN"]),
                                                fullWidth: !0,
                                                variant: "active",
                                                onClick: et,
                                                caretTooltipText: V.intl.string(V.t["+1H47t"]),
                                                onContextMenu: t,
                                            });
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
            }),
        }),
    });
}
