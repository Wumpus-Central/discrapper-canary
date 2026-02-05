"use strict";
n.d(t, { A: () => ei });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(311907),
    u = n(397927),
    c = n(387755),
    d = n(517499),
    _ = n(956793),
    f = n(712960),
    p = n(793574),
    h = n(58149),
    m = n(688810),
    g = n(571694),
    E = n(47167),
    A = n(573435),
    I = n(976860),
    T = n(329551),
    y = n(413339),
    S = n(952572),
    v = n(151476),
    C = n(704877),
    b = n(222692),
    N = n(404355),
    R = n(496841),
    O = n(970636),
    D = n(164891),
    L = n(260509),
    w = n(71393),
    x = n(430452),
    P = n(287809),
    M = n(531685),
    k = n(954571),
    U = n(486020),
    G = n(313961),
    V = n(85448),
    F = n(750765),
    B = n(384059),
    j = n(480890),
    H = n(806931),
    Y = n(652215),
    W = n(650583),
    K = n(731854),
    z = n(985018),
    $ = n(503434),
    q = n(424658),
    Z = n(976092);
let Q = { width: 232, height: 315 },
    X = { width: 232, height: 267 },
    J = 475,
    ee = 267,
    et = 128;
function en(e) {
    let { header: t } = e,
        n = x.A.getCameraComponent(),
        a = (0, l.bG)([x.A], () => x.A.getVideoDeviceId()),
        s = (0, S.A)();
    return (
        i.useEffect(() => {
            let e = P.default.getCurrentUser();
            if (s && null != e) {
                let t = (0, T.i)(e);
                (0, y.S1)(t, a, { track: !1 }).catch(Y.tEg);
            }
        }, [s, a]),
        (0, r.jsxs)("div", {
            className: q.Tg,
            children: [
                (0, r.jsx)(u.y$y, {}),
                (0, r.jsx)("div", {
                    className: q.VH,
                    children: (0, r.jsx)(n, { disabled: !1, deviceId: a, width: J, height: ee }),
                }),
                (0, r.jsx)("div", { className: q.dB, children: t }),
            ],
        })
    );
}
function er(e) {
    let { canVideo: t, channel: n, numVideoDevices: a } = e,
        { parentAnalyticsLocation: o } = (0, m.Ay)(),
        { cameraUnavailable: l, enabled: d } = (0, v.A)(),
        f = (0, C.A)(n),
        p = i.useRef(null),
        g = a > 1;
    return (0, r.jsxs)("div", {
        className: s()(q.iE, q.o1),
        children: [
            (0, r.jsx)(N.A, {
                iconComponent: u.PGe,
                label: z.intl.string(z.t.WAI6xu),
                className: q.hP,
                onClick: () => {
                    (0, B.X)(o, B.O.DISCONNECT),
                        k.default.track(Y.HAw.RING_CALL_DECLINED, {
                            location: o,
                            guild_id: n.guild_id,
                            ...(0, h.dI)(n),
                        }),
                        c.A.stopRinging(n.id);
                },
            }),
            t &&
                (0, r.jsx)(u.YNO, {
                    targetElementRef: p,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(F.A, {
                            onClose: t,
                            onInteraction: (0, j.s)("VideoDeviceMenu", o, { entrypoint: H.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: u.YNO.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: a } = t;
                        return (0, r.jsx)(O.A, {
                            buttonRef: p,
                            join: !0,
                            enabled: d,
                            className: s()(q.hP, { [q.$j]: g }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: f,
                            cameraUnavailable: l,
                            channel: n,
                            onPopoutClick: g ? i : null,
                            popoutOpen: a,
                            onCameraUnavailable: b.A,
                            onChange: () => {
                                (0, B.X)(o, B.O.JOIN_VIDEO_CALL),
                                    k.default.track(Y.HAw.RING_CALL_ACCEPTED, {
                                        location: o,
                                        guild_id: n.guild_id,
                                        ...(0, h.dI)(n),
                                    }),
                                    _.default.selectVoiceChannel(n.id, !0),
                                    (0, I.uh)(n.guild_id ?? Y.ME, n.id);
                            },
                        });
                    },
                }),
            (0, r.jsx)(R.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    k.default.track(Y.HAw.RING_CALL_ACCEPTED, { location: o, guild_id: n.guild_id, ...(0, h.dI)(n) }),
                className: q.hP,
            }),
        ],
    });
}
function ei(e) {
    let { animatedStyle: t, y: n, x: a, channel: _ } = e,
        { analyticsLocations: h } = (0, m.Ay)(p.A.INCOMING_CALL_MODAL),
        [I, T] = i.useState(!1),
        y = (0, l.bG)([w.A], () => w.A.getGuild(_.guild_id)),
        S = null != y ? U.Ay.getGuildIconURL({ id: y.id, icon: y.icon, size: et }) : null,
        v = (0, g.Y)(_, et, !0) ?? S,
        C = (0, E.Ay)(_),
        [b, N] = (0, l.yK)([x.A], () => [x.A.supports(K.O5.VIDEO), Object.keys(x.A.getVideoDevices()).length]),
        R = null != y ? `${C}, ${y.name}` : C,
        O = (0, l.bG)([M.A], () => M.A.isFocused()),
        P = (0, l.bG)([G.A], () => G.A.getMode(_.id)),
        k = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        F = (0, u.zhh)({ value: +!!I, config: { ...o.config.stiff, clamp: !0 } }, "animate-always");
    i.useEffect(() => {
        let e = (e) => {
            e.key === W.dh.ESCAPE && c.A.stopRinging(_.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [_]);
    let B = P === Y._Of.VIDEO && b && N > 0,
        { enabled: j } = D.A.useExperiment({ guildId: _?.guild_id, location: "IncomingCallModal" }),
        H =
            P === Y._Of.VOICE || (j && _.type === Y.rbe.GUILD_VOICE)
                ? z.intl.string(z.t.Js8cK3)
                : z.intl.string(z.t.KcnWCO),
        ei = (0, r.jsxs)(r.Fragment, {
            children: [
                null != y && null == S
                    ? (0, r.jsx)("div", {
                          className: s()(q.Kk, $.iE, $.hs),
                          children: (0, r.jsx)(A.Ay, {
                              className: q.dK,
                              mask: A.hW.AVATAR_DEFAULT,
                              width: I ? 40 : 80,
                              height: I ? 40 : 80,
                              children: (0, r.jsx)("div", {
                                  className: s()(q.$f, q.Gc),
                                  children: (0, r.jsx)("div", { className: q.Hj, children: (0, L.Rb)(y) }),
                              }),
                          }),
                      })
                    : (0, r.jsx)(V.A, {
                          className: q.Kk,
                          ringing: O,
                          src: v ?? "",
                          ringingType: V.A.RingingType.INCOMING,
                          size: I ? u._3J.SIZE_40 : u._3J.SIZE_80,
                      }),
                (0, r.jsxs)("div", {
                    className: q.i8,
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: q.DD,
                            color: "text-strong",
                            variant: I ? "text-md/semibold" : "text-lg/semibold",
                            children: R,
                        }),
                        (0, r.jsx)(u.Text, {
                            color: "text-default",
                            className: q.VA,
                            variant: I ? "text-sm/normal" : "text-md/normal",
                            children: H,
                        }),
                    ],
                }),
            ],
        }),
        ea = B ? Q : X,
        es = (0, l.bG)([M.A], () => M.A.windowSize());
    return (0, r.jsx)(m.f5, {
        value: h,
        children: (0, r.jsx)(f.A, {
            className: q.iE,
            selector: `.${q.zr}`,
            initialPosition: { left: a, top: n },
            maxX: es.width,
            maxY: es.height,
            onDragEnd: k,
            dragAnywhere: !0,
            children: (0, r.jsx)(u.NPJ, {
                theme: I ? Y.NJ8.DARK : void 0,
                children: (e) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: s()(q.zr, Z.a8, { [q.mY]: I }, e),
                        style: {
                            ...t,
                            minWidth: F.value.interpolate([0, 1], [ea.width, J]),
                            minHeight: F.value.interpolate([0, 1], [ea.height, ee]),
                            translateX: F.value.interpolate([0, 1], [0, (-1 * Math.abs(J - ea.width)) / 2]),
                        },
                        children: [
                            I ? (0, r.jsx)(en, { header: ei }) : (0, r.jsx)("div", { className: q.Rh, children: ei }),
                            (0, r.jsx)(er, { canVideo: B, channel: _, numVideoDevices: N }),
                            B && !I
                                ? (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: q.jc,
                                      children: (0, r.jsx)(u.Button, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: z.intl.string(z.t["8B0UDr"]),
                                          fullWidth: !0,
                                          onClick: () => T(!0),
                                      }),
                                  })
                                : null,
                        ],
                    }),
            }),
        }),
    });
}
