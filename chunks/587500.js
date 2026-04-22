l.r(t), l.d(t, { default: () => ed });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(517738),
    o = l(311907),
    c = l(289873),
    d = l(789645),
    u = l(265872),
    h = l(717421),
    g = l(778712),
    f = l(834730),
    A = l(43990),
    v = l(821609),
    _ = l(387755),
    m = l(517499),
    p = l(956793),
    x = l(712960),
    C = l(793574),
    E = l(58149),
    I = l(688810),
    N = l(571694),
    w = l(47167),
    b = l(573435),
    L = l(976860),
    y = l(329551),
    D = l(413339),
    j = l(952572),
    M = l(151476),
    R = l(704877),
    T = l(222692),
    O = l(404355),
    U = l(496841),
    V = l(970636),
    k = l(164891),
    G = l(260509),
    S = l(71393),
    Z = l(430452),
    P = l(287809),
    F = l(531685),
    B = l(954571),
    H = l(486020),
    X = l(313961),
    z = l(85448),
    W = l(436416),
    Y = l(750765),
    K = l(384059),
    $ = l(480890),
    J = l(806931),
    q = l(652215),
    Q = l(650583),
    ee = l(731854),
    et = l(985018),
    el = l(126957),
    en = l(875051),
    ei = l(604949);
let es = { width: 232, height: 315 },
    ea = { width: 232, height: 267 };
function er(e) {
    let { header: t } = e,
        l = Z.Ay.getCameraComponent(),
        s = (0, o.bG)([Z.Ay], () => Z.Ay.getVideoDeviceId()),
        a = (0, j.A)();
    return (
        i.useEffect(() => {
            let e = P.default.getCurrentUser();
            if (a && null != e) {
                let t = (0, y.i)(e);
                (0, D.S1)(t, s, { track: !1 }).catch(q.tEg);
            }
        }, [a, s]),
        (0, n.jsxs)("div", {
            className: en.Tg,
            children: [
                (0, n.jsx)(c.y, {}),
                (0, n.jsx)("div", {
                    className: en.VH,
                    children: (0, n.jsx)(l, { disabled: !1, deviceId: s, width: 475, height: 267 }),
                }),
                (0, n.jsx)("div", { className: en.dB, children: t }),
            ],
        })
    );
}
function eo(e) {
    let { canVideo: t, channel: l, numVideoDevices: s } = e,
        { parentAnalyticsLocation: r } = (0, I.Ay)(),
        { cameraUnavailable: o, enabled: c } = (0, M.A)(),
        h = (0, R.A)(l),
        g = i.useRef(null),
        f = s > 1;
    return (0, n.jsxs)("div", {
        className: a()(en.iE, en.o1),
        children: [
            (0, n.jsx)(O.A, {
                iconComponent: d.P,
                label: et.intl.string(et.t.WAI6xu),
                className: en.hP,
                onClick: () => {
                    (0, K.X)(r, K.O.DISCONNECT),
                        B.default.track(q.HAw.RING_CALL_DECLINED, {
                            location: r,
                            guild_id: l.guild_id,
                            ...(0, E.dI)(l),
                        }),
                        _.A.stopRinging(l.id);
                },
            }),
            t &&
                (0, n.jsx)(u.Y, {
                    targetElementRef: g,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, n.jsx)(Y.A, {
                            onClose: t,
                            onInteraction: (0, $.s)("VideoDeviceMenu", r, { entrypoint: J.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: u.Y.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: s } = t;
                        return (0, n.jsx)(V.A, {
                            buttonRef: g,
                            join: !0,
                            enabled: c,
                            className: a()(en.hP, { [en.$j]: f }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: h,
                            cameraUnavailable: o,
                            channel: l,
                            onPopoutClick: f ? i : null,
                            popoutOpen: s,
                            onCameraUnavailable: T.A,
                            onChange: () => {
                                (0, K.X)(r, K.O.JOIN_VIDEO_CALL),
                                    B.default.track(q.HAw.RING_CALL_ACCEPTED, {
                                        location: r,
                                        guild_id: l.guild_id,
                                        ...(0, E.dI)(l),
                                    }),
                                    p.default.selectVoiceChannel(l.id, !0),
                                    (0, L.uh)(l.guild_id ?? q.ME, l.id);
                            },
                        });
                    },
                }),
            (0, n.jsx)(U.A, {
                channel: l,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    B.default.track(q.HAw.RING_CALL_ACCEPTED, { location: r, guild_id: l.guild_id, ...(0, E.dI)(l) }),
                className: en.hP,
            }),
        ],
    });
}
function ec(e) {
    let { animatedStyle: t, y: l, x: s, channel: c } = e,
        { analyticsLocations: d } = (0, I.Ay)(C.A.INCOMING_CALL_MODAL),
        [u, p] = i.useState(!1),
        E = (0, o.bG)([S.A], () => S.A.getGuild(c.guild_id)),
        L = null != E ? H.Ay.getGuildIconURL({ id: E.id, icon: E.icon, size: 128 }) : null,
        y = (0, N.Y)(c, 128, !0) ?? L,
        D = (0, w.Ay)(c),
        [j, M] = (0, o.yK)([Z.Ay], () => [Z.Ay.supports(ee.O5.VIDEO), Object.keys(Z.Ay.getVideoDevices()).length]),
        R = null != E ? `${D}, ${E.name}` : D,
        T = (0, o.bG)([F.A], () => F.A.isFocused()),
        O = (0, o.bG)([X.A], () => X.A.getMode(c.id)),
        U = i.useCallback((e) => {
            null != e.top && null != e.left && m.A.move(e.left, e.top);
        }, []),
        V = (0, h.z)({ value: +!!u, config: { ...r.config.stiff, clamp: !0 } }, "animate-always");
    i.useEffect(() => {
        let e = (e) => {
            e.key === Q.dh.ESCAPE && _.A.stopRinging(c.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [c]);
    let P = O === q._Of.VIDEO && j && M > 0,
        { enabled: B } = k.A.useExperiment({ guildId: c?.guild_id, location: "IncomingCallModal" }),
        W =
            O === q._Of.VOICE || (B && c.type === q.rbe.GUILD_VOICE)
                ? et.intl.string(et.t.Js8cK3)
                : et.intl.string(et.t.KcnWCO),
        Y = (0, n.jsxs)(n.Fragment, {
            children: [
                null != E && null == L
                    ? (0, n.jsx)("div", {
                          className: a()(en.Kk, el.iE, el.hs),
                          children: (0, n.jsx)(b.Ay, {
                              className: en.dK,
                              mask: b.hW.AVATAR_DEFAULT,
                              width: u ? 40 : 80,
                              height: u ? 40 : 80,
                              children: (0, n.jsx)("div", {
                                  className: a()(en.$f, en.Gc),
                                  children: (0, n.jsx)("div", { className: en.Hj, children: (0, G.Rb)(E) }),
                              }),
                          }),
                      })
                    : (0, n.jsx)(z.A, {
                          className: en.Kk,
                          ringing: T,
                          src: y ?? "",
                          ringingType: z.A.RingingType.INCOMING,
                          size: u ? g._3.SIZE_40 : g._3.SIZE_80,
                      }),
                (0, n.jsxs)("div", {
                    className: en.i8,
                    children: [
                        (0, n.jsx)(f.E, {
                            className: en.DD,
                            color: "text-strong",
                            variant: u ? "text-md/semibold" : "text-lg/semibold",
                            children: R,
                        }),
                        (0, n.jsx)(f.E, {
                            color: "text-default",
                            className: en.VA,
                            variant: u ? "text-sm/normal" : "text-md/normal",
                            children: W,
                        }),
                    ],
                }),
            ],
        }),
        K = P ? es : ea,
        $ = (0, o.bG)([F.A], () => F.A.windowSize());
    return (0, n.jsx)(I.f5, {
        value: d,
        children: (0, n.jsx)(x.A, {
            className: en.iE,
            selector: `.${en.zr}`,
            initialPosition: { left: s, top: l },
            maxX: $.width,
            maxY: $.height,
            onDragEnd: U,
            dragAnywhere: !0,
            children: (0, n.jsx)(A.N, {
                theme: u ? q.NJ8.DARK : void 0,
                children: (e) =>
                    (0, n.jsxs)(r.animated.div, {
                        className: a()(en.zr, ei.a8, { [en.mY]: u }, e),
                        style: {
                            ...t,
                            minWidth: V.value.interpolate([0, 1], [K.width, 475]),
                            minHeight: V.value.interpolate([0, 1], [K.height, 267]),
                            translateX: V.value.interpolate([0, 1], [0, (-1 * Math.abs(475 - K.width)) / 2]),
                        },
                        children: [
                            u ? (0, n.jsx)(er, { header: Y }) : (0, n.jsx)("div", { className: en.Rh, children: Y }),
                            (0, n.jsx)(eo, { canVideo: P, channel: c, numVideoDevices: M }),
                            P && !u
                                ? (0, n.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: en.jc,
                                      children: (0, n.jsx)(v.$, {
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
function ed(e) {
    let { enabled: t } = k.A.useExperiment({ guildId: e.channel.guild_id, location: "IncomingCallModal" });
    return t && null != e.channel.guild_id ? (0, n.jsx)(W.A, { ...e }) : (0, n.jsx)(ec, { ...e });
}
