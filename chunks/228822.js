(n.r(i), n.d(i, { default: () => er }));
var t = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    d = n(941143),
    c = n(17928),
    o = n(289873),
    r = n(789645),
    u = n(265872),
    h = n(717421),
    A = n(778712),
    m = n(834730),
    g = n(43990),
    x = n(821609),
    v = n(387755),
    C = n(73153);
let p = {
    move(e, i) {
        C.h.dispatch({ type: "INCOMING_CALL_MOVE", x: e, y: i });
    },
};
var j = n(730852),
    E = n(712960),
    f = n(793574),
    N = n(666860),
    y = n(688810),
    _ = n(571694),
    b = n(47167),
    I = n(573435),
    w = n(976860),
    D = n(114129),
    O = n(442325),
    k = n(329551),
    L = n(312987),
    V = n(952572),
    G = n(151476),
    R = n(704877),
    P = n(222692),
    T = n(404355),
    M = n(496841),
    K = n(970636),
    z = n(260509),
    S = n(71393),
    U = n(999926),
    H = n(287809),
    $ = n(531685),
    F = n(174459),
    W = n(486020),
    Y = n(198052),
    B = n(85448),
    J = n(329072),
    X = n(384059),
    Z = n(480890),
    q = n(806931),
    Q = n(652215),
    ee = n(650583),
    ei = n(731854),
    en = n(105292),
    et = n(479464),
    el = n(890596),
    ea = n(969426);
let es = { width: 232, height: 315 },
    ed = { width: 232, height: 267 };
function ec(e) {
    let { header: i } = e,
        n = U.Ay.getCameraComponent(),
        a = (0, c.bG)([U.Ay], () => U.Ay.getVideoDeviceId()),
        s = (0, V.A)();
    return (
        l.useEffect(() => {
            let e = H.default.getCurrentUser();
            if (s && null != e) {
                let i = (0, k.i)(e);
                (0, L.S1)(i, a, { track: !1 }).catch(Q.tEg);
            }
        }, [s, a]),
        (0, t.jsxs)("div", {
            className: el.Tg,
            children: [
                (0, t.jsx)(o.y, {}),
                (0, t.jsx)("div", {
                    className: el.VH,
                    children: (0, t.jsx)(n, { disabled: !1, deviceId: a, width: 475, height: 267 }),
                }),
                (0, t.jsx)("div", { className: el.dB, children: i }),
            ],
        })
    );
}
function eo(e) {
    let { canVideo: i, channel: n, numVideoDevices: a } = e,
        { parentAnalyticsLocation: d } = (0, y.Ay)(),
        { cameraUnavailable: c, enabled: o } = (0, G.A)(),
        h = (0, R.A)(n),
        A = l.useRef(null),
        m = a > 1;
    return (0, t.jsxs)("div", {
        className: s()(el.iE, el.o1),
        children: [
            (0, t.jsx)(T.A, {
                iconComponent: r.P,
                label: en.intl.string(en.t.WAI6xu),
                className: el.hP,
                onClick: () => {
                    ((0, X.X)(d, X.O.DISCONNECT),
                        F.default.track(Q.HAw.RING_CALL_DECLINED, {
                            location: d,
                            guild_id: n.guild_id,
                            ...(0, N.dI)(n),
                        }),
                        v.A.stopRinging(n.id));
                },
            }),
            i &&
                (0, t.jsx)(u.Y, {
                    targetElementRef: A,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, t.jsx)(J.A, {
                            onClose: i,
                            onInteraction: (0, Z.s)("VideoDeviceMenu", d, { entrypoint: q.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: u.Y.Animation.FADE,
                    children: (e, i) => {
                        let { onClick: l } = e,
                            { isShown: a } = i;
                        return (0, t.jsx)(K.A, {
                            buttonRef: A,
                            join: !0,
                            enabled: o,
                            className: s()(el.hP, { [el.$j]: m }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: h,
                            cameraUnavailable: c,
                            channel: n,
                            onPopoutClick: m ? l : null,
                            popoutOpen: a,
                            onCameraUnavailable: P.A,
                            onChange: () => {
                                ((0, X.X)(d, X.O.JOIN_VIDEO_CALL),
                                    F.default.track(Q.HAw.RING_CALL_ACCEPTED, {
                                        location: d,
                                        guild_id: n.guild_id,
                                        ...(0, N.dI)(n),
                                    }),
                                    j.default.selectVoiceChannel(n.id, !0));
                                let e = O.A.isEnabled() ? O.A.getTabForChannel(n.id) : null;
                                null != e ? (0, D.ZD)(e.id, !0) : (0, w.uh)(n.guild_id ?? Q.ME, n.id);
                            },
                        });
                    },
                }),
            (0, t.jsx)(M.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    F.default.track(Q.HAw.RING_CALL_ACCEPTED, { location: d, guild_id: n.guild_id, ...(0, N.dI)(n) }),
                className: el.hP,
            }),
        ],
    });
}
function er(e) {
    let { animatedStyle: i, y: n, x: a, channel: o } = e,
        { analyticsLocations: r } = (0, y.Ay)(f.A.INCOMING_CALL_MODAL),
        [u, C] = l.useState(!1),
        j = (0, c.bG)([S.A], () => S.A.getGuild(o.guild_id)),
        N = null != j ? W.Ay.getGuildIconURL({ id: j.id, icon: j.icon, size: 128 }) : null,
        w = (0, _.Y)(o, 128, !0) ?? N,
        D = (0, b.Ay)(o),
        [O, k] = (0, c.yK)([U.Ay], () => [U.Ay.supports(ei.O5.VIDEO), Object.keys(U.Ay.getVideoDevices()).length]),
        L = null != j ? `${D}, ${j.name}` : D,
        V = (0, c.bG)([$.A], () => $.A.isFocused()),
        G = (0, c.bG)([Y.A], () => Y.A.getMode(o.id)),
        R = l.useCallback((e) => {
            null != e.top && null != e.left && p.move(e.left, e.top);
        }, []),
        P = (0, h.z)({ value: +!!u, config: { ...d.config.stiff, clamp: !0 } }, "animate-always");
    l.useEffect(() => {
        function e(e) {
            e.key === ee.dh.ESCAPE && v.A.stopRinging(o.id);
        }
        return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
    }, [o]);
    let T = G === Q._Of.VIDEO && O && k > 0,
        M = G === Q._Of.VOICE ? en.intl.string(en.t.Js8cK3) : en.intl.string(en.t.KcnWCO),
        K = (0, t.jsxs)(t.Fragment, {
            children: [
                null != j && null == N
                    ? (0, t.jsx)("div", {
                          className: s()(el.Kk, et.iE, et.hs),
                          children: (0, t.jsx)(I.Ay, {
                              className: el.dK,
                              mask: I.hW.AVATAR_DEFAULT,
                              width: u ? 40 : 80,
                              height: u ? 40 : 80,
                              children: (0, t.jsx)("div", {
                                  className: s()(el.$f, el.Gc),
                                  children: (0, t.jsx)("div", { className: el.Hj, children: (0, z.Rb)(j) }),
                              }),
                          }),
                      })
                    : (0, t.jsx)(B.Ay, {
                          className: el.Kk,
                          ringing: V,
                          src: w ?? "",
                          ringingType: B.Ay.RingingType.INCOMING,
                          size: u ? A._3.SIZE_40 : A._3.SIZE_80,
                      }),
                (0, t.jsxs)("div", {
                    className: el.i8,
                    children: [
                        (0, t.jsx)(m.E, {
                            className: el.DD,
                            color: "text-strong",
                            variant: u ? "text-md/semibold" : "text-lg/semibold",
                            children: L,
                        }),
                        (0, t.jsx)(m.E, {
                            color: "text-default",
                            className: el.VA,
                            variant: u ? "text-sm/normal" : "text-md/normal",
                            children: M,
                        }),
                    ],
                }),
            ],
        }),
        H = T ? es : ed,
        F = (0, c.bG)([$.A], () => $.A.windowSize());
    return (0, t.jsx)(y.f5, {
        value: r,
        children: (0, t.jsx)(E.A, {
            className: el.iE,
            selector: `.${el.zr}`,
            initialPosition: { left: a, top: n },
            maxX: F.width,
            maxY: F.height,
            onDragEnd: R,
            dragAnywhere: !0,
            children: (0, t.jsx)(g.N, {
                theme: u ? Q.NJ8.DARK : void 0,
                children: (e) =>
                    (0, t.jsxs)(d.animated.div, {
                        className: s()(el.zr, ea.a8, { [el.mY]: u }, e),
                        style: {
                            ...i,
                            minWidth: P.value.interpolate([0, 1], [H.width, 475]),
                            minHeight: P.value.interpolate([0, 1], [H.height, 267]),
                            translateX: P.value.interpolate([0, 1], [0, (-1 * Math.abs(475 - H.width)) / 2]),
                        },
                        children: [
                            u ? (0, t.jsx)(ec, { header: K }) : (0, t.jsx)("div", { className: el.Rh, children: K }),
                            (0, t.jsx)(eo, { canVideo: T, channel: o, numVideoDevices: k }),
                            T && !u
                                ? (0, t.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: el.jc,
                                      children: (0, t.jsx)(x.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: en.intl.string(en.t["8B0UDr"]),
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
