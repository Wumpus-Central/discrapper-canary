"use strict";
n.d(t, { A: () => X });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(687498),
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
    R = n(71393),
    O = n(430452),
    b = n(287809),
    D = n(607567),
    L = n(503509),
    w = n(531685),
    M = n(954571),
    x = n(486020),
    P = n(203982),
    k = n(427262),
    U = n(313961),
    G = n(850226),
    F = n(717319),
    V = n(384059),
    B = n(652215),
    H = n(650583),
    j = n(731854),
    Y = n(985018),
    W = n(25051),
    K = n(778437);
let $ = 80,
    z = 40,
    q = 32;
function Z(e) {
    let { voiceState: t, user: n, channel: i } = e,
        s = (0, l.bG)([C.A], () => C.A.getStreamForUser(n.id, i.guild_id)),
        { enableHangStatus: a } = (0, S.$j)({ guildId: i.guild_id, location: "IncomingCallModalV2" }),
        o = (0, y.h)(n.id),
        c = (0, k.tx)(n);
    return (0, r.jsxs)("div", {
        className: W.q7,
        children: [
            (0, r.jsxs)("div", {
                className: W.G7,
                children: [
                    (0, r.jsx)(u.euF, {
                        "aria-label": n.username,
                        src: n.getAvatarURL(i.guild_id, q, !1, !1),
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
function X(e) {
    let { animatedStyle: t, x: n, y: s, channel: S, senderId: y } = e,
        { analyticsLocations: v } = (0, E.Ay)(h.A.INCOMING_CALL_MODAL),
        C = i.useRef(null),
        q = (0, l.bG)([w.A], () => w.A.windowSize()),
        X = (0, l.bG)([R.A], () => R.A.getGuild(S.guild_id)),
        Q = null != X ? x.Ay.getGuildIconURL({ id: X.id, icon: X.icon, size: z }) : null,
        J = (0, g.Y)(S, z, !0) ?? Q,
        ee = (0, A.Ay)(S),
        et = (0, l.yK)([D.Ay, U.A], () =>
            D.Ay.getVoiceStatesForChannel(S).filter((e) => !U.A.getGuildRingingUsers(S.id).has(e.user.id)),
        ),
        [en, er] = (0, l.yK)([O.Ay], () => [O.Ay.supports(j.O5.VIDEO), Object.keys(O.Ay.getVideoDevices()).length]),
        ei = (0, l.bG)([U.A], () => U.A.getVideoParticipants(S.id).length > 0),
        es = (0, l.bG)([b.default], () => b.default.getUser(y)),
        ea = (0, k.tx)(es),
        eo = ei && en && er > 0,
        el = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        eu = i.useCallback(() => {
            (0, V.X)(v[0], V.O.DISCONNECT),
                M.default.track(B.HAw.RING_CALL_DECLINED, { location: v[0], guild_id: S.guild_id, ...(0, m.dI)(S) }),
                c.A.stopRinging(S.id);
        }, [S, v]),
        ec = i.useCallback(() => {
            (0, V.X)(v[0], V.O.JOIN_CALL),
                M.default.track(B.HAw.RING_CALL_ACCEPTED, { location: v[0], guild_id: S.guild_id, ...(0, m.dI)(S) }),
                _.default.selectVoiceChannel(S.id);
        }, [S, v]);
    i.useEffect(() => {
        let e = (e) => {
            e.key === H.dh.ESCAPE && c.A.stopRinging(S.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [S]),
        i.useEffect(
            () => (
                P._.subscribe(B.jej.CALL_ACCEPT, ec),
                () => {
                    P._.unsubscribe(B.jej.CALL_ACCEPT, ec);
                }
            ),
            [ec],
        ),
        i.useEffect(() => {
            null == es && (0, f.wz)(y);
        }, [y, es]);
    let ed = (0, I.gU)(S);
    return (0, r.jsx)(E.f5, {
        value: v,
        children: (0, r.jsx)(p.A, {
            className: W.iE,
            selector: `.${W.zr}`,
            initialPosition: { left: n, top: s },
            maxX: q.width,
            maxY: q.height,
            onDragEnd: el,
            dragAnywhere: !0,
            children: (0, r.jsx)(u.NPJ, {
                children: (e) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: a()(W.zr, K.a8, e),
                        style: { ...t, "--custom-modal-width": `${L.c.width}px` },
                        children: [
                            (0, r.jsxs)("div", {
                                className: W.wx,
                                children: [
                                    null != es &&
                                        (0, r.jsx)(u.euF, {
                                            className: W.gX,
                                            "aria-label": "user",
                                            src: es?.getAvatarURL(S.guild_id, $, !1, !1),
                                            size: u._3J.SIZE_80,
                                        }),
                                    (0, r.jsx)(u.Heading, {
                                        variant: "heading-lg/semibold",
                                        className: a()(W.gX, W.DD),
                                        children:
                                            null != es
                                                ? Y.intl.format(Y.t.M3F6cv, { username: ea })
                                                : Y.intl.string(Y.t["3rE1P8"]),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: W.C5,
                                        children: [
                                            (null != X || null != J) &&
                                                (0, r.jsx)(T.Ay, {
                                                    mask: T.hW.SQUIRCLE,
                                                    width: z,
                                                    height: z,
                                                    className: W.NR,
                                                    children:
                                                        null != J
                                                            ? (0, r.jsx)("img", {
                                                                  alt: X?.name ?? ee ?? "",
                                                                  src: J,
                                                                  width: z,
                                                                  height: z,
                                                              })
                                                            : null != X
                                                              ? (0, r.jsx)("div", {
                                                                    className: W.$r,
                                                                    children: (0, r.jsx)("div", {
                                                                        className: W.q9,
                                                                        children: (0, N.Rb)(X),
                                                                    }),
                                                                })
                                                              : null,
                                                }),
                                            (0, r.jsxs)("div", {
                                                className: W.Ug,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: W.HA,
                                                        children: [
                                                            null != ed &&
                                                                (0, r.jsx)(ed, {
                                                                    size: "xs",
                                                                    color: u.LU0.colors.TEXT_DEFAULT,
                                                                    className: W.NR,
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                className: W.zb,
                                                                children: ee,
                                                            }),
                                                        ],
                                                    }),
                                                    X?.name != null &&
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            className: W.zb,
                                                            children: X.name,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(u.HOs, {
                                className: W.XG,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: W.bi,
                                        children: Y.intl.format(Y.t.e95u3C, { count: et.length }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: W.Xk,
                                        children: et.map((e) => {
                                            let { voiceState: t, user: n } = e;
                                            return (0, r.jsx)(Z, { voiceState: t, user: n, channel: S }, n.id);
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: W.o1,
                                children: [
                                    (0, r.jsx)(u.Button, {
                                        text: Y.intl.string(Y.t.L5eIZ2),
                                        fullWidth: !0,
                                        variant: "secondary",
                                        onClick: eu,
                                    }),
                                    eo
                                        ? (0, r.jsx)(u.YNO, {
                                              targetElementRef: C,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, r.jsx)(G.A, { onClose: t, channel: S });
                                              },
                                              position: "bottom",
                                              children: (e) => {
                                                  let { onClick: t } = e;
                                                  return (0, r.jsx)(F.A, {
                                                      ref: C,
                                                      text: Y.intl.string(Y.t["96ANUN"]),
                                                      fullWidth: !0,
                                                      variant: "active",
                                                      onClick: ec,
                                                      caretTooltipText: Y.intl.string(Y.t["+1H47t"]),
                                                      onContextMenu: t,
                                                  });
                                              },
                                          })
                                        : (0, r.jsx)(u.Button, {
                                              text: Y.intl.string(Y.t["96ANUN"]),
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
