(n.r(i), n.d(i, { default: () => ec }));
var t = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    d = n(120692),
    o = n(855986),
    c = n(289873),
    r = n(789645),
    u = n(265872),
    h = n(717421),
    A = n(778712),
    m = n(834730),
    g = n(43990),
    v = n(821609),
    p = n(387755),
    C = n(73153);
let j = {
    move(e, i) {
        C.h.dispatch({ type: "INCOMING_CALL_MOVE", x: e, y: i });
    },
};
var x = n(597798),
    y = n(712960),
    f = n(793574),
    E = n(149468),
    N = n(688810),
    b = n(571694),
    _ = n(47167),
    I = n(573435),
    w = n(976860),
    O = n(114129),
    D = n(329551),
    k = n(854325),
    L = n(952572),
    V = n(151476),
    G = n(704877),
    R = n(222692),
    P = n(404355),
    M = n(496841),
    T = n(970636),
    K = n(260509),
    S = n(71393),
    z = n(754712),
    U = n(287809),
    H = n(531685),
    $ = n(129230),
    W = n(486020),
    Y = n(628983),
    B = n(85448),
    F = n(28499),
    J = n(384059),
    X = n(480890),
    Z = n(806931),
    q = n(652215),
    Q = n(650583),
    ee = n(731854),
    ei = n(792996),
    en = n(479464),
    et = n(890596),
    el = n(969426);
let ea = { width: 232, height: 315 },
    es = { width: 232, height: 267 };
function ed(e) {
    let { header: i } = e,
        n = z.Ay.getCameraComponent(),
        a = (0, o.bG)([z.Ay], () => z.Ay.getVideoDeviceId()),
        s = (0, L.A)();
    return (
        l.useEffect(() => {
            let e = U.default.getCurrentUser();
            if (s && null != e) {
                let i = (0, D.i)(e);
                (0, k.S1)(i, a, { track: !1 }).catch(q.tEg);
            }
        }, [s, a]),
        (0, t.jsxs)("div", {
            className: et.Tg,
            children: [
                (0, t.jsx)(c.y, {}),
                (0, t.jsx)("div", {
                    className: et.VH,
                    children: (0, t.jsx)(n, { disabled: !1, deviceId: a, width: 475, height: 267 }),
                }),
                (0, t.jsx)("div", { className: et.dB, children: i }),
            ],
        })
    );
}
function eo(e) {
    let { canVideo: i, channel: n, numVideoDevices: a } = e,
        { parentAnalyticsLocation: d } = (0, N.Ay)(),
        { cameraUnavailable: o, enabled: c } = (0, V.A)(),
        h = (0, G.A)(n),
        A = l.useRef(null),
        m = a > 1;
    return (0, t.jsxs)("div", {
        className: s()(et.iE, et.o1),
        children: [
            (0, t.jsx)(P.A, {
                iconComponent: r.XSmallIcon,
                label: ei.intl.string(ei.t.WAI6xu),
                className: et.hP,
                onClick: () => {
                    ((0, J.lO)(d, J.OP.DISCONNECT, n.id),
                        $.default.track(q.HAw.RING_CALL_DECLINED, {
                            location: d,
                            guild_id: n.guild_id,
                            ...(0, E.dI)(n),
                        }),
                        p.A.stopRinging(n.id));
                },
            }),
            i &&
                (0, t.jsx)(u.Y, {
                    targetElementRef: A,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, t.jsx)(F.A, {
                            onClose: i,
                            onInteraction: (0, X.s)("VideoDeviceMenu", d, { entrypoint: Z.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: u.Y.Animation.FADE,
                    children: (e, i) => {
                        let { onClick: l } = e,
                            { isShown: a } = i;
                        return (0, t.jsx)(T.A, {
                            buttonRef: A,
                            join: !0,
                            enabled: c,
                            className: s()(et.hP, { [et.$j]: m }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: h,
                            cameraUnavailable: o,
                            channel: n,
                            onPopoutClick: m ? l : null,
                            popoutOpen: a,
                            onCameraUnavailable: R.A,
                            onChange: () => {
                                ((0, J.lO)(d, J.OP.JOIN_VIDEO_CALL, n.id),
                                    $.default.track(q.HAw.RING_CALL_ACCEPTED, {
                                        location: d,
                                        guild_id: n.guild_id,
                                        ...(0, E.dI)(n),
                                    }),
                                    x.default.selectVoiceChannel(n.id, !0),
                                    (0, O.oZ)(n.id),
                                    (0, w.uh)(n.guild_id ?? q.ME, n.id));
                            },
                        });
                    },
                }),
            (0, t.jsx)(M.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    $.default.track(q.HAw.RING_CALL_ACCEPTED, { location: d, guild_id: n.guild_id, ...(0, E.dI)(n) }),
                className: et.hP,
            }),
        ],
    });
}
function ec(e) {
    let { animatedStyle: i, y: n, x: a, channel: c } = e,
        { analyticsLocations: r } = (0, N.Ay)(f.A.INCOMING_CALL_MODAL),
        [u, C] = l.useState(!1),
        x = (0, o.bG)([S.A], () => S.A.getGuild(c.guild_id)),
        E = null != x ? W.Ay.getGuildIconURL({ id: x.id, icon: x.icon, size: 128 }) : null,
        w = (0, b.Y)(c, 128, !0) ?? E,
        O = (0, _.Ay)(c),
        [D, k] = (0, o.yK)([z.Ay], () => [z.Ay.supports(ee.O5.VIDEO), Object.keys(z.Ay.getVideoDevices()).length]),
        L = null != x ? `${O}, ${x.name}` : O,
        V = (0, o.bG)([H.A], () => H.A.isFocused()),
        G = (0, o.bG)([Y.A], () => Y.A.getMode(c.id)),
        R = l.useCallback((e) => {
            null != e.top && null != e.left && j.move(e.left, e.top);
        }, []),
        P = (0, h.z)({ value: +!!u, config: { ...d.config.stiff, clamp: !0 } }, "animate-always");
    l.useEffect(() => {
        function e(e) {
            e.key === Q.dh.ESCAPE && p.A.stopRinging(c.id);
        }
        return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
    }, [c]);
    let M = G === q._Of.VIDEO && D && k > 0,
        T = G === q._Of.VOICE ? ei.intl.string(ei.t.Js8cK3) : ei.intl.string(ei.t.KcnWCO),
        U = (0, t.jsxs)(t.Fragment, {
            children: [
                null != x && null == E
                    ? (0, t.jsx)("div", {
                          className: s()(et.Kk, en.iE, en.hs),
                          children: (0, t.jsx)(I.Ay, {
                              className: et.dK,
                              mask: I.hW.AVATAR_DEFAULT,
                              width: u ? 40 : 80,
                              height: u ? 40 : 80,
                              children: (0, t.jsx)("div", {
                                  className: s()(et.$f, et.Gc),
                                  children: (0, t.jsx)("div", { className: et.Hj, children: (0, K.Rb)(x) }),
                              }),
                          }),
                      })
                    : (0, t.jsx)(B.Ay, {
                          className: et.Kk,
                          ringing: V,
                          src: w ?? "",
                          ringingType: B.Ay.RingingType.INCOMING,
                          size: u ? A._3.SIZE_40 : A._3.SIZE_80,
                      }),
                (0, t.jsxs)("div", {
                    className: et.i8,
                    children: [
                        (0, t.jsx)(m.E, {
                            className: et.DD,
                            color: "text-strong",
                            variant: u ? "body-md/semibold" : "body-lg/semibold",
                            children: L,
                        }),
                        (0, t.jsx)(m.E, {
                            color: "text-default",
                            className: et.VA,
                            variant: u ? "body-sm/normal" : "body-md/normal",
                            children: T,
                        }),
                    ],
                }),
            ],
        }),
        $ = M ? ea : es,
        F = (0, o.bG)([H.A], () => H.A.windowSize());
    return (0, t.jsx)(N.f5, {
        value: r,
        children: (0, t.jsx)(y.A, {
            className: et.iE,
            selector: `.${et.zr}`,
            initialPosition: { left: a, top: n },
            maxX: F.width,
            maxY: F.height,
            onDragEnd: R,
            dragAnywhere: !0,
            children: (0, t.jsx)(g.N, {
                theme: u ? q.NJ8.DARK : void 0,
                children: (e) =>
                    (0, t.jsxs)(d.animated.div, {
                        className: s()(et.zr, el.a8, { [et.mY]: u }, e),
                        style: {
                            ...i,
                            minWidth: P.value.interpolate([0, 1], [$.width, 475]),
                            minHeight: P.value.interpolate([0, 1], [$.height, 267]),
                            translateX: P.value.interpolate([0, 1], [0, (-1 * Math.abs(475 - $.width)) / 2]),
                        },
                        children: [
                            u ? (0, t.jsx)(ed, { header: U }) : (0, t.jsx)("div", { className: et.Rh, children: U }),
                            (0, t.jsx)(eo, { canVideo: M, channel: c, numVideoDevices: k }),
                            M && !u
                                ? (0, t.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: et.jc,
                                      children: (0, t.jsx)(v.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: ei.intl.string(ei.t["8B0UDr"]),
                                          fullWidth: !0,
                                          onClick: () => C(!0),
                                      }),
                                  })
                                : null,
                        ],
                    }),
            }),
        }),
    });
}
