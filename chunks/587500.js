n.r(t), n.d(t, { default: () => ec });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(419354),
    o = n(311907),
    d = n(289873),
    c = n(789645),
    u = n(265872),
    h = n(717421),
    _ = n(778712),
    g = n(834730),
    A = n(43990),
    f = n(821609),
    m = n(387755),
    v = n(517499),
    p = n(956793),
    x = n(712960),
    b = n(793574),
    I = n(58149),
    E = n(688810),
    C = n(571694),
    D = n(47167),
    y = n(573435),
    N = n(976860),
    j = n(329551),
    O = n(413339),
    T = n(952572),
    L = n(151476),
    w = n(704877),
    R = n(222692),
    M = n(404355),
    k = n(496841),
    U = n(970636),
    P = n(164891),
    G = n(260509),
    V = n(71393),
    S = n(430452),
    F = n(287809),
    B = n(531685),
    X = n(954571),
    z = n(486020),
    H = n(313961),
    W = n(85448),
    $ = n(436416),
    K = n(750765),
    Y = n(384059),
    Z = n(480890),
    Q = n(806931),
    J = n(652215),
    q = n(650583),
    ee = n(731854),
    et = n(985018),
    en = n(126957),
    ei = n(875051),
    el = n(604949);
let es = { width: 232, height: 315 },
    ea = { width: 232, height: 267 };
function er(e) {
    let { header: t } = e,
        n = S.Ay.getCameraComponent(),
        s = (0, o.bG)([S.Ay], () => S.Ay.getVideoDeviceId()),
        a = (0, T.A)();
    return (
        l.useEffect(() => {
            let e = F.default.getCurrentUser();
            if (a && null != e) {
                let t = (0, j.i)(e);
                (0, O.S1)(t, s, { track: !1 }).catch(J.tEg);
            }
        }, [a, s]),
        (0, i.jsxs)("div", {
            className: ei.Tg,
            children: [
                (0, i.jsx)(d.y, {}),
                (0, i.jsx)("div", {
                    className: ei.VH,
                    children: (0, i.jsx)(n, { disabled: !1, deviceId: s, width: 475, height: 267 }),
                }),
                (0, i.jsx)("div", { className: ei.dB, children: t }),
            ],
        })
    );
}
function eo(e) {
    let { canVideo: t, channel: n, numVideoDevices: s } = e,
        { parentAnalyticsLocation: r } = (0, E.Ay)(),
        { cameraUnavailable: o, enabled: d } = (0, L.A)(),
        h = (0, w.A)(n),
        _ = l.useRef(null),
        g = s > 1;
    return (0, i.jsxs)("div", {
        className: a()(ei.iE, ei.o1),
        children: [
            (0, i.jsx)(M.A, {
                iconComponent: c.P,
                label: et.intl.string(et.t.WAI6xu),
                className: ei.hP,
                onClick: () => {
                    (0, Y.X)(r, Y.O.DISCONNECT),
                        X.default.track(J.HAw.RING_CALL_DECLINED, {
                            location: r,
                            guild_id: n.guild_id,
                            ...(0, I.dI)(n),
                        }),
                        m.A.stopRinging(n.id);
                },
            }),
            t &&
                (0, i.jsx)(u.Y, {
                    targetElementRef: _,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(K.A, {
                            onClose: t,
                            onInteraction: (0, Z.s)("VideoDeviceMenu", r, { entrypoint: Q.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: u.Y.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: l } = e,
                            { isShown: s } = t;
                        return (0, i.jsx)(U.A, {
                            buttonRef: _,
                            join: !0,
                            enabled: d,
                            className: a()(ei.hP, { [ei.$j]: g }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: h,
                            cameraUnavailable: o,
                            channel: n,
                            onPopoutClick: g ? l : null,
                            popoutOpen: s,
                            onCameraUnavailable: R.A,
                            onChange: () => {
                                (0, Y.X)(r, Y.O.JOIN_VIDEO_CALL),
                                    X.default.track(J.HAw.RING_CALL_ACCEPTED, {
                                        location: r,
                                        guild_id: n.guild_id,
                                        ...(0, I.dI)(n),
                                    }),
                                    p.default.selectVoiceChannel(n.id, !0),
                                    (0, N.uh)(n.guild_id ?? J.ME, n.id);
                            },
                        });
                    },
                }),
            (0, i.jsx)(k.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    X.default.track(J.HAw.RING_CALL_ACCEPTED, { location: r, guild_id: n.guild_id, ...(0, I.dI)(n) }),
                className: ei.hP,
            }),
        ],
    });
}
function ed(e) {
    let { animatedStyle: t, y: n, x: s, channel: d } = e,
        { analyticsLocations: c } = (0, E.Ay)(b.A.INCOMING_CALL_MODAL),
        [u, p] = l.useState(!1),
        I = (0, o.bG)([V.A], () => V.A.getGuild(d.guild_id)),
        N = null != I ? z.Ay.getGuildIconURL({ id: I.id, icon: I.icon, size: 128 }) : null,
        j = (0, C.Y)(d, 128, !0) ?? N,
        O = (0, D.Ay)(d),
        [T, L] = (0, o.yK)([S.Ay], () => [S.Ay.supports(ee.O5.VIDEO), Object.keys(S.Ay.getVideoDevices()).length]),
        w = null != I ? `${O}, ${I.name}` : O,
        R = (0, o.bG)([B.A], () => B.A.isFocused()),
        M = (0, o.bG)([H.A], () => H.A.getMode(d.id)),
        k = l.useCallback((e) => {
            null != e.top && null != e.left && v.A.move(e.left, e.top);
        }, []),
        U = (0, h.z)({ value: +!!u, config: { ...r.config.stiff, clamp: !0 } }, "animate-always");
    l.useEffect(() => {
        let e = (e) => {
            e.key === q.dh.ESCAPE && m.A.stopRinging(d.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [d]);
    let F = M === J._Of.VIDEO && T && L > 0,
        { enabled: X } = P.A.useExperiment({ guildId: d?.guild_id, location: "IncomingCallModal" }),
        $ =
            M === J._Of.VOICE || (X && d.type === J.rbe.GUILD_VOICE)
                ? et.intl.string(et.t.Js8cK3)
                : et.intl.string(et.t.KcnWCO),
        K = (0, i.jsxs)(i.Fragment, {
            children: [
                null != I && null == N
                    ? (0, i.jsx)("div", {
                          className: a()(ei.Kk, en.iE, en.hs),
                          children: (0, i.jsx)(y.Ay, {
                              className: ei.dK,
                              mask: y.hW.AVATAR_DEFAULT,
                              width: u ? 40 : 80,
                              height: u ? 40 : 80,
                              children: (0, i.jsx)("div", {
                                  className: a()(ei.$f, ei.Gc),
                                  children: (0, i.jsx)("div", { className: ei.Hj, children: (0, G.Rb)(I) }),
                              }),
                          }),
                      })
                    : (0, i.jsx)(W.A, {
                          className: ei.Kk,
                          ringing: R,
                          src: j ?? "",
                          ringingType: W.A.RingingType.INCOMING,
                          size: u ? _._3.SIZE_40 : _._3.SIZE_80,
                      }),
                (0, i.jsxs)("div", {
                    className: ei.i8,
                    children: [
                        (0, i.jsx)(g.E, {
                            className: ei.DD,
                            color: "text-strong",
                            variant: u ? "text-md/semibold" : "text-lg/semibold",
                            children: w,
                        }),
                        (0, i.jsx)(g.E, {
                            color: "text-default",
                            className: ei.VA,
                            variant: u ? "text-sm/normal" : "text-md/normal",
                            children: $,
                        }),
                    ],
                }),
            ],
        }),
        Y = F ? es : ea,
        Z = (0, o.bG)([B.A], () => B.A.windowSize());
    return (0, i.jsx)(E.f5, {
        value: c,
        children: (0, i.jsx)(x.A, {
            className: ei.iE,
            selector: `.${ei.zr}`,
            initialPosition: { left: s, top: n },
            maxX: Z.width,
            maxY: Z.height,
            onDragEnd: k,
            dragAnywhere: !0,
            children: (0, i.jsx)(A.N, {
                theme: u ? J.NJ8.DARK : void 0,
                children: (e) =>
                    (0, i.jsxs)(r.animated.div, {
                        className: a()(ei.zr, el.a8, { [ei.mY]: u }, e),
                        style: {
                            ...t,
                            minWidth: U.value.interpolate([0, 1], [Y.width, 475]),
                            minHeight: U.value.interpolate([0, 1], [Y.height, 267]),
                            translateX: U.value.interpolate([0, 1], [0, (-1 * Math.abs(475 - Y.width)) / 2]),
                        },
                        children: [
                            u ? (0, i.jsx)(er, { header: K }) : (0, i.jsx)("div", { className: ei.Rh, children: K }),
                            (0, i.jsx)(eo, { canVideo: F, channel: d, numVideoDevices: L }),
                            F && !u
                                ? (0, i.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: ei.jc,
                                      children: (0, i.jsx)(f.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: et.intl.string(et.t["8B0UDr"]),
                                          fullWidth: !0,
                                          onClick: () => p(!0),
                                      }),
                                  })
                                : null,
                        ],
                    }),
            }),
        }),
    });
}
function ec(e) {
    let { enabled: t } = P.A.useExperiment({ guildId: e.channel.guild_id, location: "IncomingCallModal" });
    return t && null != e.channel.guild_id ? (0, i.jsx)($.A, { ...e }) : (0, i.jsx)(ed, { ...e });
}
