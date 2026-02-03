n.d(t, {
    A: () => el,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(311907),
    c = n(397927),
    u = n(387755),
    d = n(517499),
    f = n(956793),
    p = n(712960),
    _ = n(793574),
    h = n(58149),
    m = n(688810),
    g = n(571694),
    E = n(47167),
    y = n(573435),
    b = n(976860),
    O = n(329551),
    v = n(413339),
    A = n(952572),
    I = n(151476),
    S = n(704877),
    T = n(222692),
    C = n(404355),
    N = n(496841),
    w = n(970636),
    R = n(164891),
    P = n(260509),
    D = n(71393),
    L = n(430452),
    x = n(287809),
    M = n(531685),
    j = n(954571),
    k = n(486020),
    U = n(313961),
    G = n(85448),
    V = n(750765),
    F = n(384059),
    B = n(480890),
    H = n(806931),
    Y = n(652215),
    W = n(650583),
    K = n(731854),
    z = n(985018),
    q = n(503434),
    Z = n(424658),
    Q = n(976092);

function X(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                X(e, t, n[t]);
            });
    }
    return e;
}

function $(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : $(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let et = {
        width: 232,
        height: 315,
    },
    en = {
        width: 232,
        height: 267,
    },
    er = 475,
    ei = 267,
    ea = 128;

function eo(e) {
    let { header: t } = e,
        n = L.A.getCameraComponent(),
        a = (0, l.bG)([L.A], () => L.A.getVideoDeviceId()),
        o = (0, A.A)();
    return (
        i.useEffect(() => {
            let e = x.default.getCurrentUser();
            if (o && null != e) {
                let t = (0, O.i)(e);
                (0, v.S1)(t, a, {
                    track: !1,
                }).catch(Y.tEg);
            }
        }, [o, a]),
        (0, r.jsxs)("div", {
            className: Z.Tg,
            children: [
                (0, r.jsx)(c.y$y, {}),
                (0, r.jsx)("div", {
                    className: Z.VH,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: a,
                        width: er,
                        height: ei,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: Z.dB,
                    children: t,
                }),
            ],
        })
    );
}

function es(e) {
    let { canVideo: t, channel: n, numVideoDevices: a } = e,
        { parentAnalyticsLocation: s } = (0, m.Ay)(),
        { cameraUnavailable: l, enabled: d } = (0, I.A)(),
        p = (0, S.A)(n),
        _ = i.useRef(null),
        g = a > 1;
    return (0, r.jsxs)("div", {
        className: o()(Z.iE, Z.o1),
        children: [
            (0, r.jsx)(C.A, {
                iconComponent: c.PGe,
                label: z.intl.string(z.t.WAI6xu),
                className: Z.hP,
                onClick: () => {
                    (0, F.X)(s, F.O.DISCONNECT),
                        j.default.track(
                            Y.HAw.RING_CALL_DECLINED,
                            J(
                                {
                                    location: s,
                                    guild_id: n.guild_id,
                                },
                                (0, h.dI)(n),
                            ),
                        ),
                        u.A.stopRinging(n.id);
                },
            }),
            t &&
                (0, r.jsx)(c.YNO, {
                    targetElementRef: _,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(V.A, {
                            onClose: t,
                            onInteraction: (0, B.s)("VideoDeviceMenu", s, {
                                entrypoint: H.GK.CARET,
                            }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: c.YNO.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: a } = t;
                        return (0, r.jsx)(w.A, {
                            buttonRef: _,
                            join: !0,
                            enabled: d,
                            className: o()(Z.hP, {
                                [Z.$j]: g,
                            }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: p,
                            cameraUnavailable: l,
                            channel: n,
                            onPopoutClick: g ? i : null,
                            popoutOpen: a,
                            onCameraUnavailable: T.A,
                            onChange: () => {
                                var e;
                                (0, F.X)(s, F.O.JOIN_VIDEO_CALL),
                                    j.default.track(
                                        Y.HAw.RING_CALL_ACCEPTED,
                                        J(
                                            {
                                                location: s,
                                                guild_id: n.guild_id,
                                            },
                                            (0, h.dI)(n),
                                        ),
                                    ),
                                    f.default.selectVoiceChannel(n.id, !0),
                                    (0, b.uh)(null != (e = n.guild_id) ? e : Y.ME, n.id);
                            },
                        });
                    },
                }),
            (0, r.jsx)(N.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    j.default.track(
                        Y.HAw.RING_CALL_ACCEPTED,
                        J(
                            {
                                location: s,
                                guild_id: n.guild_id,
                            },
                            (0, h.dI)(n),
                        ),
                    ),
                className: Z.hP,
            }),
        ],
    });
}

function el(e) {
    var t;
    let { animatedStyle: n, y: a, x: f, channel: h } = e,
        { analyticsLocations: b } = (0, m.Ay)(_.A.INCOMING_CALL_MODAL),
        [O, v] = i.useState(!1),
        A = (0, l.bG)([D.A], () => D.A.getGuild(h.guild_id)),
        I =
            null != A
                ? k.Ay.getGuildIconURL({
                      id: A.id,
                      icon: A.icon,
                      size: ea,
                  })
                : null,
        S = null != (t = (0, g.Y)(h, ea, !0)) ? t : I,
        T = (0, E.Ay)(h),
        [C, N] = (0, l.yK)([L.A], () => [L.A.supports(K.O5.VIDEO), Object.keys(L.A.getVideoDevices()).length]),
        w = null != A ? "".concat(T, ", ").concat(A.name) : T,
        x = (0, l.bG)([M.A], () => M.A.isFocused()),
        j = (0, l.bG)([U.A], () => U.A.getMode(h.id)),
        V = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        F = (0, c.zhh)(
            {
                value: +!!O,
                config: ee(J({}, s.config.stiff), {
                    clamp: !0,
                }),
            },
            "animate-always",
        );
    i.useEffect(() => {
        let e = (e) => {
            e.key === W.dh.ESCAPE && u.A.stopRinging(h.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [h]);
    let B = j === Y._Of.VIDEO && C && N > 0,
        { enabled: H } = R.A.useExperiment({
            guildId: null == h ? void 0 : h.guild_id,
            location: "IncomingCallModal",
        }),
        X =
            j === Y._Of.VOICE || (H && h.type === Y.rbe.GUILD_VOICE)
                ? z.intl.string(z.t.Js8cK3)
                : z.intl.string(z.t.KcnWCO),
        $ = (0, r.jsxs)(r.Fragment, {
            children: [
                null != A && null == I
                    ? (0, r.jsx)("div", {
                          className: o()(Z.Kk, q.iE, q.hs),
                          children: (0, r.jsx)(y.Ay, {
                              className: Z.dK,
                              mask: y.hW.AVATAR_DEFAULT,
                              width: O ? 40 : 80,
                              height: O ? 40 : 80,
                              children: (0, r.jsx)("div", {
                                  className: o()(Z.$f, Z.Gc),
                                  children: (0, r.jsx)("div", {
                                      className: Z.Hj,
                                      children: (0, P.Rb)(A),
                                  }),
                              }),
                          }),
                      })
                    : (0, r.jsx)(G.A, {
                          className: Z.Kk,
                          ringing: x,
                          src: null != S ? S : "",
                          ringingType: G.A.RingingType.INCOMING,
                          size: O ? c._3J.SIZE_40 : c._3J.SIZE_80,
                      }),
                (0, r.jsxs)("div", {
                    className: Z.i8,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: Z.DD,
                            color: "text-strong",
                            variant: O ? "text-md/semibold" : "text-lg/semibold",
                            children: w,
                        }),
                        (0, r.jsx)(c.Text, {
                            color: "text-default",
                            className: Z.VA,
                            variant: O ? "text-sm/normal" : "text-md/normal",
                            children: X,
                        }),
                    ],
                }),
            ],
        }),
        el = B ? et : en,
        ec = (0, l.bG)([M.A], () => M.A.windowSize());
    return (0, r.jsx)(m.f5, {
        value: b,
        children: (0, r.jsx)(p.A, {
            className: Z.iE,
            selector: ".".concat(Z.zr),
            initialPosition: {
                left: f,
                top: a,
            },
            maxX: ec.width,
            maxY: ec.height,
            onDragEnd: V,
            dragAnywhere: !0,
            children: (0, r.jsx)(c.NPJ, {
                theme: O ? Y.NJ8.DARK : void 0,
                children: (e) =>
                    (0, r.jsxs)(s.animated.div, {
                        className: o()(
                            Z.zr,
                            Q.a8,
                            {
                                [Z.mY]: O,
                            },
                            e,
                        ),
                        style: ee(J({}, n), {
                            minWidth: F.value.interpolate([0, 1], [el.width, er]),
                            minHeight: F.value.interpolate([0, 1], [el.height, ei]),
                            translateX: F.value.interpolate([0, 1], [0, (-1 * Math.abs(er - el.width)) / 2]),
                        }),
                        children: [
                            O
                                ? (0, r.jsx)(eo, {
                                      header: $,
                                  })
                                : (0, r.jsx)("div", {
                                      className: Z.Rh,
                                      children: $,
                                  }),
                            (0, r.jsx)(es, {
                                canVideo: B,
                                channel: h,
                                numVideoDevices: N,
                            }),
                            B && !O
                                ? (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: Z.jc,
                                      children: (0, r.jsx)(c.Button, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: z.intl.string(z.t["8B0UDr"]),
                                          fullWidth: !0,
                                          onClick: () => v(!0),
                                      }),
                                  })
                                : null,
                        ],
                    }),
            }),
        }),
    });
}
