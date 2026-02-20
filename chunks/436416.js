"use strict";
n.d(t, { A: () => Z });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(475539),
    l = n(311907),
    u = n(397927),
    c = n(387755),
    d = n(517499),
    _ = n(956793),
    f = n(803306),
    p = n(712960),
    h = n(793574),
    m = n(58149),
    E = n(688810),
    g = n(571694),
    A = n(47167),
    I = n(713654),
    T = n(573435),
    S = n(140547),
    y = n(7054),
    v = n(481947),
    N = n(260509),
    C = n(616356),
    b = n(71393),
    R = n(430452),
    O = n(287809),
    D = n(607567),
    L = n(531685),
    w = n(954571),
    x = n(486020),
    M = n(203982),
    P = n(427262),
    k = n(313961),
    U = n(850226),
    G = n(717319),
    F = n(384059),
    V = n(652215),
    B = n(650583),
    H = n(731854),
    j = n(985018),
    Y = n(293390),
    W = n(976092);
let K = 80,
    z = 40,
    $ = 32;
function q(e) {
    let { voiceState: t, user: n, channel: i } = e,
        s = (0, l.bG)([C.A], () => C.A.getStreamForUser(n.id, i.guild_id)),
        { enableHangStatus: a } = (0, S.$j)({ guildId: i.guild_id, location: "IncomingCallModalV2" }),
        o = (0, y.h)(n.id),
        c = (0, P.tx)(n);
    return (0, r.jsxs)("div", {
        className: Y.q7,
        children: [
            (0, r.jsxs)("div", {
                className: Y.G7,
                children: [
                    (0, r.jsx)(u.euF, {
                        "aria-label": n.username,
                        src: n.getAvatarURL(i.guild_id, $, !1, !1),
                        size: u._3J.SIZE_32,
                    }),
                    (0, r.jsx)(u.Text, { variant: "text-sm/medium", children: c }),
                ],
            }),
            (0, r.jsx)(v.Kc, {
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
function Z(e) {
    let { animatedStyle: t, x: n, y: s, channel: S, senderId: y } = e,
        { analyticsLocations: v } = (0, E.Ay)(h.A.INCOMING_CALL_MODAL),
        C = i.useRef(null),
        $ = (0, l.bG)([L.A], () => L.A.windowSize()),
        Z = (0, l.bG)([b.A], () => b.A.getGuild(S.guild_id)),
        X = null != Z ? x.Ay.getGuildIconURL({ id: Z.id, icon: Z.icon, size: z }) : null,
        Q = (0, g.Y)(S, z, !0) ?? X,
        J = (0, A.Ay)(S),
        ee = (0, l.yK)([D.Ay, k.A], () =>
            D.Ay.getVoiceStatesForChannel(S).filter((e) => !k.A.getGuildRingingUsers(S.id).has(e.user.id)),
        ),
        [et, en] = (0, l.yK)([R.Ay], () => [R.Ay.supports(H.O5.VIDEO), Object.keys(R.Ay.getVideoDevices()).length]),
        er = (0, l.bG)([k.A], () => k.A.getVideoParticipants(S.id).length > 0),
        ei = (0, l.bG)([O.default], () => O.default.getUser(y)),
        es = (0, P.tx)(ei),
        ea = er && et && en > 0,
        eo = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        el = i.useCallback(() => {
            (0, F.X)(v[0], F.O.DISCONNECT),
                w.default.track(V.HAw.RING_CALL_DECLINED, { location: v[0], guild_id: S.guild_id, ...(0, m.dI)(S) }),
                c.A.stopRinging(S.id);
        }, [S, v]),
        eu = i.useCallback(() => {
            (0, F.X)(v[0], F.O.JOIN_CALL),
                w.default.track(V.HAw.RING_CALL_ACCEPTED, { location: v[0], guild_id: S.guild_id, ...(0, m.dI)(S) }),
                _.default.selectVoiceChannel(S.id);
        }, [S, v]);
    i.useEffect(() => {
        let e = (e) => {
            e.key === B.dh.ESCAPE && c.A.stopRinging(S.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [S]),
        i.useEffect(
            () => (
                M._.subscribe(V.jej.CALL_ACCEPT, eu),
                () => {
                    M._.unsubscribe(V.jej.CALL_ACCEPT, eu);
                }
            ),
            [eu],
        ),
        i.useEffect(() => {
            null == ei && (0, f.wz)(y);
        }, [y, ei]);
    let ec = (0, I.gU)(S);
    return (0, r.jsx)(E.f5, {
        value: v,
        children: (0, r.jsx)(p.A, {
            className: Y.iE,
            selector: `.${Y.zr}`,
            initialPosition: { left: n, top: s },
            maxX: $.width,
            maxY: $.height,
            onDragEnd: eo,
            dragAnywhere: !0,
            children: (0, r.jsx)(u.NPJ, {
                children: (e) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: a()(Y.zr, W.a8, e),
                        style: { ...t },
                        children: [
                            (0, r.jsxs)("div", {
                                className: Y.wx,
                                children: [
                                    null != ei &&
                                        (0, r.jsx)(u.euF, {
                                            className: Y.gX,
                                            "aria-label": "user",
                                            src: ei?.getAvatarURL(S.guild_id, K, !1, !1),
                                            size: u._3J.SIZE_80,
                                        }),
                                    (0, r.jsx)(u.Heading, {
                                        variant: "heading-lg/semibold",
                                        className: a()(Y.gX, Y.DD),
                                        children:
                                            null != ei
                                                ? j.intl.format(j.t.M3F6cv, { username: es })
                                                : j.intl.string(j.t["3rE1P8"]),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: Y.C5,
                                        children: [
                                            (null != Z || null != Q) &&
                                                (0, r.jsx)(T.Ay, {
                                                    mask: T.hW.SQUIRCLE,
                                                    width: z,
                                                    height: z,
                                                    className: Y.NR,
                                                    children:
                                                        null != Q
                                                            ? (0, r.jsx)("img", {
                                                                  alt: Z?.name ?? J ?? "",
                                                                  src: Q,
                                                                  width: z,
                                                                  height: z,
                                                              })
                                                            : null != Z
                                                              ? (0, r.jsx)("div", {
                                                                    className: Y.$r,
                                                                    children: (0, r.jsx)("div", {
                                                                        className: Y.q9,
                                                                        children: (0, N.Rb)(Z),
                                                                    }),
                                                                })
                                                              : null,
                                                }),
                                            (0, r.jsxs)("div", {
                                                className: Y.Ug,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: Y.HA,
                                                        children: [
                                                            null != ec &&
                                                                (0, r.jsx)(ec, {
                                                                    size: "xs",
                                                                    color: u.LU0.colors.TEXT_DEFAULT,
                                                                    className: Y.NR,
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                className: Y.zb,
                                                                children: J,
                                                            }),
                                                        ],
                                                    }),
                                                    Z?.name != null &&
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            className: Y.zb,
                                                            children: Z.name,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(u.HOs, {
                                className: Y.XG,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: Y.bi,
                                        children: j.intl.format(j.t.e95u3C, { count: ee.length }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: Y.Xk,
                                        children: ee.map((e) => {
                                            let { voiceState: t, user: n } = e;
                                            return (0, r.jsx)(q, { voiceState: t, user: n, channel: S }, n.id);
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: Y.o1,
                                children: [
                                    (0, r.jsx)(u.Button, {
                                        text: j.intl.string(j.t.L5eIZ2),
                                        fullWidth: !0,
                                        variant: "secondary",
                                        onClick: el,
                                    }),
                                    ea
                                        ? (0, r.jsx)(u.YNO, {
                                              targetElementRef: C,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(U.A, { onClose: t, channel: S });
                                              },
                                              position: "bottom",
                                              children: (e) => {
                                                  let { onClick: t } = e;
                                                  return (0, r.jsx)(G.A, {
                                                      ref: C,
                                                      text: j.intl.string(j.t["96ANUN"]),
                                                      fullWidth: !0,
                                                      variant: "active",
                                                      onClick: eu,
                                                      caretTooltipText: j.intl.string(j.t["+1H47t"]),
                                                      onContextMenu: t,
                                                  });
                                              },
                                          })
                                        : (0, r.jsx)(u.Button, {
                                              text: j.intl.string(j.t["96ANUN"]),
                                              onClick: eu,
                                              fullWidth: !0,
                                              variant: "active",
                                          }),
                                ],
                            }),
                        ],
                    }),
            }),
        }),
    });
}
