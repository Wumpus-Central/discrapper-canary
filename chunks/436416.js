n.d(t, { A: () => ee });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(419354),
    o = n(311907),
    d = n(97808),
    c = n(778712),
    u = n(834730),
    h = n(43990),
    _ = n(534514),
    g = n(827734),
    A = n(573613),
    f = n(821609),
    m = n(265872),
    v = n(387755),
    p = n(517499),
    x = n(956793),
    b = n(803306),
    I = n(712960),
    E = n(793574),
    C = n(58149),
    D = n(688810),
    y = n(571694),
    N = n(47167),
    j = n(713654),
    O = n(573435),
    T = n(481947),
    L = n(260509),
    w = n(616356),
    R = n(71393),
    M = n(430452),
    k = n(287809),
    U = n(607567),
    P = n(503509),
    G = n(531685),
    V = n(954571),
    S = n(486020),
    F = n(203982),
    B = n(427262),
    X = n(313961),
    z = n(850226),
    H = n(717319),
    W = n(384059),
    $ = n(652215),
    K = n(650583),
    Y = n(731854),
    Z = n(985018),
    Q = n(384043),
    J = n(604949);
function q(e) {
    let { voiceState: t, user: n, channel: l } = e,
        s = (0, o.bG)([w.A], () => w.A.getStreamForUser(n.id, l.guild_id)),
        a = (0, B.tx)(n);
    return (0, i.jsxs)("div", {
        className: Q.q7,
        children: [
            (0, i.jsxs)("div", {
                className: Q.G7,
                children: [
                    (0, i.jsx)(d.eu, {
                        "aria-label": n.username,
                        src: n.getAvatarURL(l.guild_id, 32, !1, !1),
                        size: c._3.SIZE_32,
                    }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", children: a }),
                ],
            }),
            (0, i.jsx)(T.Kc, {
                user: n,
                channelId: l.id,
                mute: t.isVoiceMuted(),
                deaf: t.isVoiceDeafened(),
                video: t.selfVideo,
                isStreaming: null != s && s.channelId === l.id,
                serverMute: t.mute,
                serverDeaf: t.deaf,
            }),
        ],
    });
}
function ee(e) {
    let { animatedStyle: t, x: n, y: s, channel: T, senderId: w } = e,
        { analyticsLocations: ee } = (0, D.Ay)(E.A.INCOMING_CALL_MODAL),
        et = l.useRef(null),
        en = (0, o.bG)([G.A], () => G.A.windowSize()),
        ei = (0, o.bG)([R.A], () => R.A.getGuild(T.guild_id)),
        el = null != ei ? S.Ay.getGuildIconURL({ id: ei.id, icon: ei.icon, size: 40 }) : null,
        es = (0, y.Y)(T, 40, !0) ?? el,
        ea = (0, N.Ay)(T),
        er = (0, o.yK)([U.Ay, X.A], () =>
            U.Ay.getVoiceStatesForChannel(T).filter((e) => !X.A.getGuildRingingUsers(T.id).has(e.user.id)),
        ),
        [eo, ed] = (0, o.yK)([M.Ay], () => [M.Ay.supports(Y.O5.VIDEO), Object.keys(M.Ay.getVideoDevices()).length]),
        ec = (0, o.bG)([X.A], () => X.A.getVideoParticipants(T.id).length > 0),
        eu = (0, o.bG)([k.default], () => k.default.getUser(w)),
        eh = (0, B.tx)(eu),
        e_ = ec && eo && ed > 0,
        eg = l.useCallback((e) => {
            null != e.top && null != e.left && p.A.move(e.left, e.top);
        }, []),
        eA = l.useCallback(() => {
            (0, W.X)(ee[0], W.O.DISCONNECT),
                V.default.track($.HAw.RING_CALL_DECLINED, { location: ee[0], guild_id: T.guild_id, ...(0, C.dI)(T) }),
                v.A.stopRinging(T.id);
        }, [T, ee]),
        ef = l.useCallback(() => {
            (0, W.X)(ee[0], W.O.JOIN_CALL),
                V.default.track($.HAw.RING_CALL_ACCEPTED, { location: ee[0], guild_id: T.guild_id, ...(0, C.dI)(T) }),
                x.default.selectVoiceChannel(T.id);
        }, [T, ee]);
    l.useEffect(() => {
        let e = (e) => {
            e.key === K.dh.ESCAPE && v.A.stopRinging(T.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [T]),
        l.useEffect(
            () => (
                F._.subscribe($.jej.CALL_ACCEPT, ef),
                () => {
                    F._.unsubscribe($.jej.CALL_ACCEPT, ef);
                }
            ),
            [ef],
        ),
        l.useEffect(() => {
            null == eu && (0, b.wz)(w);
        }, [w, eu]);
    let em = (0, j.gU)(T);
    return (0, i.jsx)(D.f5, {
        value: ee,
        children: (0, i.jsx)(I.A, {
            className: Q.iE,
            selector: `.${Q.zr}`,
            initialPosition: { left: n, top: s },
            maxX: en.width,
            maxY: en.height,
            onDragEnd: eg,
            dragAnywhere: !0,
            children: (0, i.jsx)(h.N, {
                children: (e) =>
                    (0, i.jsxs)(r.animated.div, {
                        className: a()(Q.zr, J.a8, e),
                        style: { ...t, "--custom-modal-width": `${P.c.width}px` },
                        children: [
                            (0, i.jsxs)("div", {
                                className: Q.wx,
                                children: [
                                    null != eu &&
                                        (0, i.jsx)(d.eu, {
                                            className: Q.gX,
                                            "aria-label": "user",
                                            src: eu?.getAvatarURL(T.guild_id, 80, !1, !1),
                                            size: c._3.SIZE_80,
                                        }),
                                    (0, i.jsx)(_.D, {
                                        variant: "heading-lg/semibold",
                                        className: a()(Q.gX, Q.DD),
                                        children:
                                            null != eu
                                                ? Z.intl.format(Z.t.M3F6cv, { username: eh })
                                                : Z.intl.string(Z.t["3rE1P8"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: Q.C5,
                                        children: [
                                            (null != ei || null != es) &&
                                                (0, i.jsx)(O.Ay, {
                                                    mask: O.hW.SQUIRCLE,
                                                    width: 40,
                                                    height: 40,
                                                    className: Q.NR,
                                                    children:
                                                        null != es
                                                            ? (0, i.jsx)("img", {
                                                                  alt: ei?.name ?? ea ?? "",
                                                                  src: es,
                                                                  width: 40,
                                                                  height: 40,
                                                              })
                                                            : null != ei
                                                              ? (0, i.jsx)("div", {
                                                                    className: Q.$r,
                                                                    children: (0, i.jsx)("div", {
                                                                        className: Q.q9,
                                                                        children: (0, L.Rb)(ei),
                                                                    }),
                                                                })
                                                              : null,
                                                }),
                                            (0, i.jsxs)("div", {
                                                className: Q.Ug,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: Q.HA,
                                                        children: [
                                                            null != em &&
                                                                (0, i.jsx)(em, {
                                                                    size: "xs",
                                                                    color: g.A.colors.TEXT_DEFAULT,
                                                                    className: Q.NR,
                                                                }),
                                                            (0, i.jsx)(u.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                className: Q.zb,
                                                                children: ea,
                                                            }),
                                                        ],
                                                    }),
                                                    ei?.name != null &&
                                                        (0, i.jsx)(u.E, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            className: Q.zb,
                                                            children: ei.name,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(A.Ip, {
                                className: Q.XG,
                                children: [
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: Q.bi,
                                        children: Z.intl.format(Z.t.e95u3C, { count: er.length }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: Q.Xk,
                                        children: er.map((e) => {
                                            let { voiceState: t, user: n } = e;
                                            return (0, i.jsx)(q, { voiceState: t, user: n, channel: T }, n.id);
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: Q.o1,
                                children: [
                                    (0, i.jsx)(f.$, {
                                        text: Z.intl.string(Z.t.L5eIZ2),
                                        fullWidth: !0,
                                        variant: "secondary",
                                        onClick: eA,
                                    }),
                                    e_
                                        ? (0, i.jsx)(m.Y, {
                                              targetElementRef: et,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, i.jsx)(z.A, { onClose: t, channel: T });
                                              },
                                              position: "bottom",
                                              children: (e) => {
                                                  let { onClick: t } = e;
                                                  return (0, i.jsx)(H.A, {
                                                      ref: et,
                                                      text: Z.intl.string(Z.t["96ANUN"]),
                                                      fullWidth: !0,
                                                      variant: "active",
                                                      onClick: ef,
                                                      caretTooltipText: Z.intl.string(Z.t["+1H47t"]),
                                                      onContextMenu: t,
                                                  });
                                              },
                                          })
                                        : (0, i.jsx)(f.$, {
                                              text: Z.intl.string(Z.t["96ANUN"]),
                                              onClick: ef,
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
