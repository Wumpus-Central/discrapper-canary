(n.r(i), n.d(i, { default: () => er }));
var l = n(477900),
    t = n(582128),
    a = n(503698),
    s = n.n(a),
    d = n(736819),
    o = n(17928),
    c = n(289873),
    r = n(789645),
    u = n(265872),
    h = n(717421),
    A = n(778712),
    m = n(834730),
    g = n(43990),
    v = n(821609),
    C = n(387755),
    p = n(73153);
let j = {
    move(e, i) {
        p.h.dispatch({ type: "INCOMING_CALL_MOVE", x: e, y: i });
    },
};
var x = n(730852),
    y = n(712960),
    E = n(793574),
    f = n(666860),
    N = n(688810),
    b = n(571694),
    _ = n(47167),
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
    U = n(477653),
    H = n(287809),
    $ = n(531685),
    F = n(174459),
    W = n(486020),
    Y = n(198052),
    B = n(85448),
    J = n(329072),
    Z = n(384059),
    X = n(480890),
    q = n(806931),
    Q = n(652215),
    ee = n(650583),
    ei = n(731854),
    en = n(105292),
    el = n(479464),
    et = n(890596),
    ea = n(969426);
let es = { width: 232, height: 315 },
    ed = { width: 232, height: 267 };
function eo(e) {
    let { header: i } = e,
        n = U.Ay.getCameraComponent(),
        a = (0, o.bG)([U.Ay], () => U.Ay.getVideoDeviceId()),
        s = (0, V.A)();
    return (
        t.useEffect(() => {
            let e = H.default.getCurrentUser();
            if (s && null != e) {
                let i = (0, k.i)(e);
                (0, L.S1)(i, a, { track: !1 }).catch(Q.tEg);
            }
        }, [s, a]),
        (0, l.jsxs)("div", {
            className: et.Tg,
            children: [
                (0, l.jsx)(c.y, {}),
                (0, l.jsx)("div", {
                    className: et.VH,
                    children: (0, l.jsx)(n, { disabled: !1, deviceId: a, width: 475, height: 267 }),
                }),
                (0, l.jsx)("div", { className: et.dB, children: i }),
            ],
        })
    );
}
function ec(e) {
    let { canVideo: i, channel: n, numVideoDevices: a } = e,
        { parentAnalyticsLocation: d } = (0, N.Ay)(),
        { cameraUnavailable: o, enabled: c } = (0, G.A)(),
        h = (0, R.A)(n),
        A = t.useRef(null),
        m = a > 1;
    return (0, l.jsxs)("div", {
        className: s()(et.iE, et.o1),
        children: [
            (0, l.jsx)(T.A, {
                iconComponent: r.P,
                label: en.intl.string(en.t.WAI6xu),
                className: et.hP,
                onClick: () => {
                    ((0, Z.lO)(d, Z.OP.DISCONNECT, n.id),
                        F.default.track(Q.HAw.RING_CALL_DECLINED, {
                            location: d,
                            guild_id: n.guild_id,
                            ...(0, f.dI)(n),
                        }),
                        C.A.stopRinging(n.id));
                },
            }),
            i &&
                (0, l.jsx)(u.Y, {
                    targetElementRef: A,
                    renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, l.jsx)(J.A, {
                            onClose: i,
                            onInteraction: (0, X.s)("VideoDeviceMenu", d, { entrypoint: q.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: u.Y.Animation.FADE,
                    children: (e, i) => {
                        let { onClick: t } = e,
                            { isShown: a } = i;
                        return (0, l.jsx)(K.A, {
                            buttonRef: A,
                            join: !0,
                            enabled: c,
                            className: s()(et.hP, { [et.$j]: m }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: h,
                            cameraUnavailable: o,
                            channel: n,
                            onPopoutClick: m ? t : null,
                            popoutOpen: a,
                            onCameraUnavailable: P.A,
                            onChange: () => {
                                ((0, Z.lO)(d, Z.OP.JOIN_VIDEO_CALL, n.id),
                                    F.default.track(Q.HAw.RING_CALL_ACCEPTED, {
                                        location: d,
                                        guild_id: n.guild_id,
                                        ...(0, f.dI)(n),
                                    }),
                                    x.default.selectVoiceChannel(n.id, !0));
                                let e = O.A.isEnabled() ? O.A.getTabForChannel(n.id) : null;
                                null != e ? (0, D.ZD)(e.id, !0) : (0, w.uh)(n.guild_id ?? Q.ME, n.id);
                            },
                        });
                    },
                }),
            (0, l.jsx)(M.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    F.default.track(Q.HAw.RING_CALL_ACCEPTED, { location: d, guild_id: n.guild_id, ...(0, f.dI)(n) }),
                className: et.hP,
            }),
        ],
    });
}
function er(e) {
    let { animatedStyle: i, y: n, x: a, channel: c } = e,
        { analyticsLocations: r } = (0, N.Ay)(E.A.INCOMING_CALL_MODAL),
        [u, p] = t.useState(!1),
        x = (0, o.bG)([S.A], () => S.A.getGuild(c.guild_id)),
        f = null != x ? W.Ay.getGuildIconURL({ id: x.id, icon: x.icon, size: 128 }) : null,
        w = (0, b.Y)(c, 128, !0) ?? f,
        D = (0, _.Ay)(c),
        [O, k] = (0, o.yK)([U.Ay], () => [U.Ay.supports(ei.O5.VIDEO), Object.keys(U.Ay.getVideoDevices()).length]),
        L = null != x ? `${D}, ${x.name}` : D,
        V = (0, o.bG)([$.A], () => $.A.isFocused()),
        G = (0, o.bG)([Y.A], () => Y.A.getMode(c.id)),
        R = t.useCallback((e) => {
            null != e.top && null != e.left && j.move(e.left, e.top);
        }, []),
        P = (0, h.z)({ value: +!!u, config: { ...d.config.stiff, clamp: !0 } }, "animate-always");
    t.useEffect(() => {
        function e(e) {
            e.key === ee.dh.ESCAPE && C.A.stopRinging(c.id);
        }
        return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
    }, [c]);
    let T = G === Q._Of.VIDEO && O && k > 0,
        M = G === Q._Of.VOICE ? en.intl.string(en.t.Js8cK3) : en.intl.string(en.t.KcnWCO),
        K = (0, l.jsxs)(l.Fragment, {
            children: [
                null != x && null == f
                    ? (0, l.jsx)("div", {
                          className: s()(et.Kk, el.iE, el.hs),
                          children: (0, l.jsx)(I.Ay, {
                              className: et.dK,
                              mask: I.hW.AVATAR_DEFAULT,
                              width: u ? 40 : 80,
                              height: u ? 40 : 80,
                              children: (0, l.jsx)("div", {
                                  className: s()(et.$f, et.Gc),
                                  children: (0, l.jsx)("div", { className: et.Hj, children: (0, z.Rb)(x) }),
                              }),
                          }),
                      })
                    : (0, l.jsx)(B.Ay, {
                          className: et.Kk,
                          ringing: V,
                          src: w ?? "",
                          ringingType: B.Ay.RingingType.INCOMING,
                          size: u ? A._3.SIZE_40 : A._3.SIZE_80,
                      }),
                (0, l.jsxs)("div", {
                    className: et.i8,
                    children: [
                        (0, l.jsx)(m.E, {
                            className: et.DD,
                            color: "text-strong",
                            variant: u ? "body-md/semibold" : "body-lg/semibold",
                            children: L,
                        }),
                        (0, l.jsx)(m.E, {
                            color: "text-default",
                            className: et.VA,
                            variant: u ? "body-sm/normal" : "body-md/normal",
                            children: M,
                        }),
                    ],
                }),
            ],
        }),
        H = T ? es : ed,
        F = (0, o.bG)([$.A], () => $.A.windowSize());
    return (0, l.jsx)(N.f5, {
        value: r,
        children: (0, l.jsx)(y.A, {
            className: et.iE,
            selector: `.${et.zr}`,
            initialPosition: { left: a, top: n },
            maxX: F.width,
            maxY: F.height,
            onDragEnd: R,
            dragAnywhere: !0,
            children: (0, l.jsx)(g.N, {
                theme: u ? Q.NJ8.DARK : void 0,
                children: (e) =>
                    (0, l.jsxs)(d.animated.div, {
                        className: s()(et.zr, ea.a8, { [et.mY]: u }, e),
                        style: {
                            ...i,
                            minWidth: P.value.interpolate([0, 1], [H.width, 475]),
                            minHeight: P.value.interpolate([0, 1], [H.height, 267]),
                            translateX: P.value.interpolate([0, 1], [0, (-1 * Math.abs(475 - H.width)) / 2]),
                        },
                        children: [
                            u ? (0, l.jsx)(eo, { header: K }) : (0, l.jsx)("div", { className: et.Rh, children: K }),
                            (0, l.jsx)(ec, { canVideo: T, channel: c, numVideoDevices: k }),
                            T && !u
                                ? (0, l.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: et.jc,
                                      children: (0, l.jsx)(v.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: en.intl.string(en.t["8B0UDr"]),
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
