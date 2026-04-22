l.d(t, { A: () => ee });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(517738),
    o = l(311907),
    c = l(97808),
    d = l(778712),
    u = l(834730),
    h = l(43990),
    g = l(534514),
    f = l(827734),
    A = l(573613),
    v = l(821609),
    _ = l(265872),
    m = l(387755),
    p = l(517499),
    x = l(956793),
    C = l(803306),
    E = l(712960),
    I = l(793574),
    N = l(58149),
    w = l(688810),
    b = l(571694),
    L = l(47167),
    y = l(713654),
    D = l(573435),
    j = l(481947),
    M = l(260509),
    R = l(616356),
    T = l(71393),
    O = l(430452),
    U = l(287809),
    V = l(607567),
    k = l(503509),
    G = l(531685),
    S = l(954571),
    Z = l(486020),
    P = l(203982),
    F = l(427262),
    B = l(313961),
    H = l(850226),
    X = l(717319),
    z = l(384059),
    W = l(652215),
    Y = l(650583),
    K = l(731854),
    $ = l(985018),
    J = l(384043),
    q = l(604949);
function Q(e) {
    let { voiceState: t, user: l, channel: i } = e,
        s = (0, o.bG)([R.A], () => R.A.getStreamForUser(l.id, i.guild_id)),
        a = (0, F.tx)(l);
    return (0, n.jsxs)("div", {
        className: J.q7,
        children: [
            (0, n.jsxs)("div", {
                className: J.G7,
                children: [
                    (0, n.jsx)(c.eu, {
                        "aria-label": l.username,
                        src: l.getAvatarURL(i.guild_id, 32, !1, !1),
                        size: d._3.SIZE_32,
                    }),
                    (0, n.jsx)(u.E, { variant: "text-sm/medium", children: a }),
                ],
            }),
            (0, n.jsx)(j.Kc, {
                user: l,
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
function ee(e) {
    let { animatedStyle: t, x: l, y: s, channel: j, senderId: R } = e,
        { analyticsLocations: ee } = (0, w.Ay)(I.A.INCOMING_CALL_MODAL),
        et = i.useRef(null),
        el = (0, o.bG)([G.A], () => G.A.windowSize()),
        en = (0, o.bG)([T.A], () => T.A.getGuild(j.guild_id)),
        ei = null != en ? Z.Ay.getGuildIconURL({ id: en.id, icon: en.icon, size: 40 }) : null,
        es = (0, b.Y)(j, 40, !0) ?? ei,
        ea = (0, L.Ay)(j),
        er = (0, o.yK)([V.Ay, B.A], () =>
            V.Ay.getVoiceStatesForChannel(j).filter((e) => !B.A.getGuildRingingUsers(j.id).has(e.user.id)),
        ),
        [eo, ec] = (0, o.yK)([O.Ay], () => [O.Ay.supports(K.O5.VIDEO), Object.keys(O.Ay.getVideoDevices()).length]),
        ed = (0, o.bG)([B.A], () => B.A.getVideoParticipants(j.id).length > 0),
        eu = (0, o.bG)([U.default], () => U.default.getUser(R)),
        eh = (0, F.tx)(eu),
        eg = ed && eo && ec > 0,
        ef = i.useCallback((e) => {
            null != e.top && null != e.left && p.A.move(e.left, e.top);
        }, []),
        eA = i.useCallback(() => {
            (0, z.X)(ee[0], z.O.DISCONNECT),
                S.default.track(W.HAw.RING_CALL_DECLINED, { location: ee[0], guild_id: j.guild_id, ...(0, N.dI)(j) }),
                m.A.stopRinging(j.id);
        }, [j, ee]),
        ev = i.useCallback(() => {
            (0, z.X)(ee[0], z.O.JOIN_CALL),
                S.default.track(W.HAw.RING_CALL_ACCEPTED, { location: ee[0], guild_id: j.guild_id, ...(0, N.dI)(j) }),
                x.default.selectVoiceChannel(j.id);
        }, [j, ee]);
    i.useEffect(() => {
        let e = (e) => {
            e.key === Y.dh.ESCAPE && m.A.stopRinging(j.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [j]),
        i.useEffect(
            () => (
                P._.subscribe(W.jej.CALL_ACCEPT, ev),
                () => {
                    P._.unsubscribe(W.jej.CALL_ACCEPT, ev);
                }
            ),
            [ev],
        ),
        i.useEffect(() => {
            null == eu && (0, C.wz)(R);
        }, [R, eu]);
    let e_ = (0, y.gU)(j);
    return (0, n.jsx)(w.f5, {
        value: ee,
        children: (0, n.jsx)(E.A, {
            className: J.iE,
            selector: `.${J.zr}`,
            initialPosition: { left: l, top: s },
            maxX: el.width,
            maxY: el.height,
            onDragEnd: ef,
            dragAnywhere: !0,
            children: (0, n.jsx)(h.N, {
                children: (e) =>
                    (0, n.jsxs)(r.animated.div, {
                        className: a()(J.zr, q.a8, e),
                        style: { ...t, "--custom-modal-width": `${k.c.width}px` },
                        children: [
                            (0, n.jsxs)("div", {
                                className: J.wx,
                                children: [
                                    null != eu &&
                                        (0, n.jsx)(c.eu, {
                                            className: J.gX,
                                            "aria-label": "user",
                                            src: eu?.getAvatarURL(j.guild_id, 80, !1, !1),
                                            size: d._3.SIZE_80,
                                        }),
                                    (0, n.jsx)(g.D, {
                                        variant: "heading-lg/semibold",
                                        className: a()(J.gX, J.DD),
                                        children:
                                            null != eu
                                                ? $.intl.format($.t.M3F6cv, { username: eh })
                                                : $.intl.string($.t["3rE1P8"]),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: J.C5,
                                        children: [
                                            (null != en || null != es) &&
                                                (0, n.jsx)(D.Ay, {
                                                    mask: D.hW.SQUIRCLE,
                                                    width: 40,
                                                    height: 40,
                                                    className: J.NR,
                                                    children:
                                                        null != es
                                                            ? (0, n.jsx)("img", {
                                                                  alt: en?.name ?? ea ?? "",
                                                                  src: es,
                                                                  width: 40,
                                                                  height: 40,
                                                              })
                                                            : null != en
                                                              ? (0, n.jsx)("div", {
                                                                    className: J.$r,
                                                                    children: (0, n.jsx)("div", {
                                                                        className: J.q9,
                                                                        children: (0, M.Rb)(en),
                                                                    }),
                                                                })
                                                              : null,
                                                }),
                                            (0, n.jsxs)("div", {
                                                className: J.Ug,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: J.HA,
                                                        children: [
                                                            null != e_ &&
                                                                (0, n.jsx)(e_, {
                                                                    size: "xs",
                                                                    color: f.A.colors.TEXT_DEFAULT,
                                                                    className: J.NR,
                                                                }),
                                                            (0, n.jsx)(u.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                className: J.zb,
                                                                children: ea,
                                                            }),
                                                        ],
                                                    }),
                                                    en?.name != null &&
                                                        (0, n.jsx)(u.E, {
                                                            variant: "text-sm/medium",
                                                            color: "text-muted",
                                                            className: J.zb,
                                                            children: en.name,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(A.Ip, {
                                className: J.XG,
                                children: [
                                    (0, n.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: J.bi,
                                        children: $.intl.format($.t.e95u3C, { count: er.length }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: J.Xk,
                                        children: er.map((e) => {
                                            let { voiceState: t, user: l } = e;
                                            return (0, n.jsx)(Q, { voiceState: t, user: l, channel: j }, l.id);
                                        }),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: J.o1,
                                children: [
                                    (0, n.jsx)(v.$, {
                                        text: $.intl.string($.t.L5eIZ2),
                                        fullWidth: !0,
                                        variant: "secondary",
                                        onClick: eA,
                                    }),
                                    eg
                                        ? (0, n.jsx)(_.Y, {
                                              targetElementRef: et,
                                              renderPopout: (e) => {
                                                  let { closePopout: t } = e;
                                                  return (0, n.jsx)(H.A, { onClose: t, channel: j });
                                              },
                                              position: "bottom",
                                              children: (e) => {
                                                  let { onClick: t } = e;
                                                  return (0, n.jsx)(X.A, {
                                                      ref: et,
                                                      text: $.intl.string($.t["96ANUN"]),
                                                      fullWidth: !0,
                                                      variant: "active",
                                                      onClick: ev,
                                                      caretTooltipText: $.intl.string($.t["+1H47t"]),
                                                      onContextMenu: t,
                                                  });
                                              },
                                          })
                                        : (0, n.jsx)(v.$, {
                                              text: $.intl.string($.t["96ANUN"]),
                                              onClick: ev,
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
