"use strict";
n.d(t, { A: () => q });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(407045),
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
    S = n(481947),
    y = n(260509),
    v = n(616356),
    N = n(71393),
    C = n(430452),
    R = n(287809),
    O = n(607567),
    b = n(503509),
    D = n(531685),
    L = n(954571),
    w = n(486020),
    M = n(203982),
    P = n(427262),
    x = n(313961),
    k = n(850226),
    U = n(717319),
    G = n(384059),
    F = n(652215),
    V = n(650583),
    B = n(731854),
    H = n(985018),
    j = n(384043),
    Y = n(604949);
let W = 80,
    K = 40,
    $ = 32;
function z(e) {
    let { voiceState: t, user: n, channel: i } = e,
        s = (0, l.bG)([v.A], () => v.A.getStreamForUser(n.id, i.guild_id)),
        a = (0, P.tx)(n);
    return (0, r.jsxs)("div", {
        className: j.q7,
        children: [
            (0, r.jsxs)("div", {
                className: j.G7,
                children: [
                    (0, r.jsx)(u.euF, {
                        "aria-label": n.username,
                        src: n.getAvatarURL(i.guild_id, $, !1, !1),
                        size: u._3J.SIZE_32,
                    }),
                    (0, r.jsx)(u.Text, { variant: "text-sm/medium", children: a }),
                ],
            }),
            (0, r.jsx)(S.Kc, {
                user: n,
                channelId: i.id,
                mute: t.isVoiceMuted(),
                deaf: t.isVoiceDeafened(),
                video: t.selfVideo,
                isStreaming: null != s && s.channelId === i.id,
                serverMute: t.mute,
                serverDeaf: t.deaf,
            }),
        ],
    });
}
function q(e) {
    let { animatedStyle: t, x: n, y: s, channel: S, senderId: v } = e,
        { analyticsLocations: $ } = (0, E.Ay)(h.A.INCOMING_CALL_MODAL),
        q = i.useRef(null),
        Z = (0, l.bG)([D.A], () => D.A.windowSize()),
        X = (0, l.bG)([N.A], () => N.A.getGuild(S.guild_id)),
        Q = null != X ? w.Ay.getGuildIconURL({ id: X.id, icon: X.icon, size: K }) : null,
        J = (0, g.Y)(S, K, !0) ?? Q,
        ee = (0, A.Ay)(S),
        et = (0, l.yK)([O.Ay, x.A], () =>
            O.Ay.getVoiceStatesForChannel(S).filter((e) => !x.A.getGuildRingingUsers(S.id).has(e.user.id)),
        ),
        [en, er] = (0, l.yK)([C.Ay], () => [C.Ay.supports(B.O5.VIDEO), Object.keys(C.Ay.getVideoDevices()).length]),
        ei = (0, l.bG)([x.A], () => x.A.getVideoParticipants(S.id).length > 0),
        es = (0, l.bG)([R.default], () => R.default.getUser(v)),
        ea = (0, P.tx)(es),
        eo = ei && en && er > 0,
        el = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        eu = i.useCallback(() => {
            (0, G.X)($[0], G.O.DISCONNECT),
                L.default.track(F.HAw.RING_CALL_DECLINED, { location: $[0], guild_id: S.guild_id, ...(0, m.dI)(S) }),
                c.A.stopRinging(S.id);
        }, [S, $]),
        ec = i.useCallback(() => {
            (0, G.X)($[0], G.O.JOIN_CALL),
                L.default.track(F.HAw.RING_CALL_ACCEPTED, { location: $[0], guild_id: S.guild_id, ...(0, m.dI)(S) }),
                _.default.selectVoiceChannel(S.id);
        }, [S, $]);
    i.useEffect(() => {
        let e = (e) => {
            e.key === V.dh.ESCAPE && c.A.stopRinging(S.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [S]),
        i.useEffect(
            () => (
                M._.subscribe(F.jej.CALL_ACCEPT, ec),
                () => {
                    M._.unsubscribe(F.jej.CALL_ACCEPT, ec);
                }
            ),
            [ec],
        ),
        i.useEffect(() => {
            null == es && (0, f.wz)(v);
        }, [v, es]);
    let ed = (0, I.gU)(S);
    return (0, r.jsx)(E.f5, {
        value: $,
        children: (0, r.jsx)(p.A, {
            className: j.iE,
            selector: `.${j.zr}`,
            initialPosition: { left: n, top: s },
            maxX: Z.width,
            maxY: Z.height,
            onDragEnd: el,
            dragAnywhere: !0,
            children: (0, r.jsx)(u.NPJ, {
                children: (e) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: a()(j.zr, Y.a8, e),
                        style: { ...t, "--custom-modal-width": `${b.c.width}px` },
                        children: [
                            (0, r.jsxs)("div", {
                                className: j.wx,
                                children: [
                                    null != es &&
                                        (0, r.jsx)(u.euF, {
                                            className: j.gX,
                                            "aria-label": "user",
                                            src: es?.getAvatarURL(S.guild_id, W, !1, !1),
                                            size: u._3J.SIZE_80,
                                        }),
                                    (0, r.jsx)(u.Heading, {
                                        variant: "heading-lg/semibold",
                                        className: a()(j.gX, j.DD),
                                        children:
                                            null != es
                                                ? H.intl.format(H.t.M3F6cv, { username: ea })
                                                : H.intl.string(H.t["3rE1P8"]),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: j.C5,
                                        children: [
                                            (null != X || null != J) &&
                                                (0, r.jsx)(T.Ay, {
                                                    mask: T.hW.SQUIRCLE,
                                                    width: K,
                                                    height: K,
                                                    className: j.NR,
                                                    children:
                                                        null != J
                                                            ? (0, r.jsx)("img", {
                                                                  alt: X?.name ?? ee ?? "",
                                                                  src: J,
                                                                  width: K,
                                                                  height: K,
                                                              })
                                                            : null != X
                                                              ? (0, r.jsx)("div", {
                                                                    className: j.$r,
                                                                    children: (0, r.jsx)("div", {
                                                                        className: j.q9,
                                                                        children: (0, y.Rb)(X),
                                                                    }),
                                                                })
                                                              : null,
                                                }),
                                            (0, r.jsxs)("div", {
                                                className: j.Ug,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: j.HA,
                                                        children: [
                                                            null != ed &&
                                                                (0, r.jsx)(ed, {
                                                                    size: "xs",
                                                                    color: u.LU0.colors.TEXT_DEFAULT,
                                                                    className: j.NR,
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                className: j.zb,
                                                                children: ee,
                                                            }),
                                                        ],
                                                    }),
                                                    X?.name != null &&
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            className: j.zb,
                                                            children: X.name,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(u.HOs, {
                                className: j.XG,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: j.bi,
                                        children: H.intl.format(H.t.e95u3C, { count: et.length }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: j.Xk,
                                        children: et.map((e) => {
                                            let { voiceState: t, user: n } = e;
                                            return (0, r.jsx)(z, { voiceState: t, user: n, channel: S }, n.id);
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: j.o1,
                                children: [
                                    (0, r.jsx)(u.Button, {
                                        text: H.intl.string(H.t.L5eIZ2),
                                        fullWidth: !0,
                                        variant: "secondary",
                                        onClick: eu,
                                    }),
                                    eo
                                        ? (0, r.jsx)(u.YNO, {
                                              targetElementRef: q,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(k.A, { onClose: t, channel: S });
                                              },
                                              position: "bottom",
                                              children: (e) => {
                                                  let { onClick: t } = e;
                                                  return (0, r.jsx)(U.A, {
                                                      ref: q,
                                                      text: H.intl.string(H.t["96ANUN"]),
                                                      fullWidth: !0,
                                                      variant: "active",
                                                      onClick: ec,
                                                      caretTooltipText: H.intl.string(H.t["+1H47t"]),
                                                      onContextMenu: t,
                                                  });
                                              },
                                          })
                                        : (0, r.jsx)(u.Button, {
                                              text: H.intl.string(H.t["96ANUN"]),
                                              onClick: ec,
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
