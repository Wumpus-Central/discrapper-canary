n.d(t, {
    A: () => el,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
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
    b = n(573435),
    y = n(976860),
    O = n(329551),
    A = n(413339),
    v = n(952572),
    S = n(151476),
    I = n(927258),
    T = n(222692),
    C = n(404355),
    N = n(496841),
    R = n(970636),
    w = n(164891),
    P = n(260509),
    D = n(71393),
    x = n(430452),
    L = n(287809),
    j = n(531685),
    M = n(954571),
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
    X = n(424658),
    Z = n(976092);

function Q(e, t, n) {
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

function $(e) {
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
                Q(e, t, n[t]);
            });
    }
    return e;
}

function J(e, t) {
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
            : J(Object(t)).forEach(function (n) {
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

function es(e) {
    let { header: t } = e,
        n = x.A.getCameraComponent(),
        a = (0, l.bG)([x.A], () => x.A.getVideoDeviceId()),
        s = (0, v.A)();
    return (
        i.useEffect(() => {
            let e = L.default.getCurrentUser();
            if (s && null != e) {
                let t = (0, O.i)(e);
                (0, A.S1)(t, a, {
                    track: !1,
                }).catch(Y.tEg);
            }
        }, [s, a]),
        (0, r.jsxs)("div", {
            className: X.Tg,
            children: [
                (0, r.jsx)(c.y$y, {}),
                (0, r.jsx)("div", {
                    className: X.VH,
                    children: (0, r.jsx)(n, {
                        disabled: !1,
                        deviceId: a,
                        width: er,
                        height: ei,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: X.dB,
                    children: t,
                }),
            ],
        })
    );
}

function eo(e) {
    let { canVideo: t, channel: n, numVideoDevices: a } = e,
        { parentAnalyticsLocation: o } = (0, m.Ay)(),
        { cameraUnavailable: l, enabled: d } = (0, S.A)(),
        p = (0, I.A)(n),
        _ = i.useRef(null),
        g = a > 1;
    return (0, r.jsxs)("div", {
        className: s()(X.iE, X.o1),
        children: [
            (0, r.jsx)(C.A, {
                iconComponent: c.PGe,
                label: z.intl.string(z.t.WAI6xu),
                className: X.hP,
                onClick: () => {
                    (0, F.X)(o, F.O.DISCONNECT),
                        M.default.track(
                            Y.HAw.RING_CALL_DECLINED,
                            $(
                                {
                                    location: o,
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
                            onInteraction: (0, B.s)("VideoDeviceMenu", o, {
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
                        return (0, r.jsx)(R.A, {
                            buttonRef: _,
                            join: !0,
                            enabled: d,
                            className: s()(X.hP, {
                                [X.$j]: g,
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
                                (0, F.X)(o, F.O.JOIN_VIDEO_CALL),
                                    M.default.track(
                                        Y.HAw.RING_CALL_ACCEPTED,
                                        $(
                                            {
                                                location: o,
                                                guild_id: n.guild_id,
                                            },
                                            (0, h.dI)(n),
                                        ),
                                    ),
                                    f.default.selectVoiceChannel(n.id, !0),
                                    (0, y.uh)(null != (e = n.guild_id) ? e : Y.ME, n.id);
                            },
                        });
                    },
                }),
            (0, r.jsx)(N.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    M.default.track(
                        Y.HAw.RING_CALL_ACCEPTED,
                        $(
                            {
                                location: o,
                                guild_id: n.guild_id,
                            },
                            (0, h.dI)(n),
                        ),
                    ),
                className: X.hP,
            }),
        ],
    });
}

function el(e) {
    var t;
    let { animatedStyle: n, y: a, x: f, channel: h } = e,
        { analyticsLocations: y } = (0, m.Ay)(_.A.INCOMING_CALL_MODAL),
        [O, A] = i.useState(!1),
        v = (0, l.bG)([D.A], () => D.A.getGuild(h.guild_id)),
        S =
            null != v
                ? k.Ay.getGuildIconURL({
                      id: v.id,
                      icon: v.icon,
                      size: ea,
                  })
                : null,
        I = null != (t = (0, g.Y)(h, ea, !0)) ? t : S,
        T = (0, E.Ay)(h),
        [C, N] = (0, l.yK)([x.A], () => [x.A.supports(K.O5.VIDEO), Object.keys(x.A.getVideoDevices()).length]),
        R = null != v ? "".concat(T, ", ").concat(v.name) : T,
        L = (0, l.bG)([j.A], () => j.A.isFocused()),
        M = (0, l.bG)([U.A], () => U.A.getMode(h.id)),
        V = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        F = (0, c.zhh)(
            {
                value: +!!O,
                config: ee($({}, o.config.stiff), {
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
    let B = M === Y._Of.VIDEO && C && N > 0,
        { enabled: H } = w.A.useExperiment({
            guildId: null == h ? void 0 : h.guild_id,
            location: "IncomingCallModal",
        }),
        Q =
            M === Y._Of.VOICE || (H && h.type === Y.rbe.GUILD_VOICE)
                ? z.intl.string(z.t.Js8cK3)
                : z.intl.string(z.t.KcnWCO),
        J = (0, r.jsxs)(r.Fragment, {
            children: [
                null != v && null == S
                    ? (0, r.jsx)("div", {
                          className: s()(X.Kk, q.iE, q.hs),
                          children: (0, r.jsx)(b.Ay, {
                              className: X.dK,
                              mask: b.hW.AVATAR_DEFAULT,
                              width: O ? 40 : 80,
                              height: O ? 40 : 80,
                              children: (0, r.jsx)("div", {
                                  className: s()(X.$f, X.Gc),
                                  children: (0, r.jsx)("div", {
                                      className: X.Hj,
                                      children: (0, P.Rb)(v),
                                  }),
                              }),
                          }),
                      })
                    : (0, r.jsx)(G.A, {
                          className: X.Kk,
                          ringing: L,
                          src: null != I ? I : "",
                          ringingType: G.A.RingingType.INCOMING,
                          size: O ? c._3J.SIZE_40 : c._3J.SIZE_80,
                      }),
                (0, r.jsxs)("div", {
                    className: X.i8,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: X.DD,
                            color: "text-strong",
                            variant: O ? "text-md/semibold" : "text-lg/semibold",
                            children: R,
                        }),
                        (0, r.jsx)(c.Text, {
                            color: "text-default",
                            className: X.VA,
                            variant: O ? "text-sm/normal" : "text-md/normal",
                            children: Q,
                        }),
                    ],
                }),
            ],
        }),
        el = B ? et : en,
        ec = (0, l.bG)([j.A], () => j.A.windowSize());
    return (0, r.jsx)(m.f5, {
        value: y,
        children: (0, r.jsx)(p.A, {
            className: X.iE,
            selector: ".".concat(X.zr),
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
                    (0, r.jsxs)(o.animated.div, {
                        className: s()(
                            X.zr,
                            Z.a8,
                            {
                                [X.mY]: O,
                            },
                            e,
                        ),
                        style: ee($({}, n), {
                            minWidth: F.value.interpolate([0, 1], [el.width, er]),
                            minHeight: F.value.interpolate([0, 1], [el.height, ei]),
                            translateX: F.value.interpolate([0, 1], [0, (-1 * Math.abs(er - el.width)) / 2]),
                        }),
                        children: [
                            O
                                ? (0, r.jsx)(es, {
                                      header: J,
                                  })
                                : (0, r.jsx)("div", {
                                      className: X.Rh,
                                      children: J,
                                  }),
                            (0, r.jsx)(eo, {
                                canVideo: B,
                                channel: h,
                                numVideoDevices: N,
                            }),
                            B && !O
                                ? (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: X.jc,
                                      children: (0, r.jsx)(c.Button, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: z.intl.string(z.t["8B0UDr"]),
                                          fullWidth: !0,
                                          onClick: () => A(!0),
                                      }),
                                  })
                                : null,
                        ],
                    }),
            }),
        }),
    });
}
