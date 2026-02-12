"use strict";
n.d(t, { A: () => eo });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(40153),
    l = n(311907),
    u = n(397927),
    c = n(387755),
    d = n(517499),
    _ = n(956793),
    f = n(712960),
    h = n(793574),
    p = n(58149),
    g = n(688810),
    E = n(571694),
    A = n(47167),
    I = n(573435),
    T = n(976860),
    y = n(329551),
    S = n(413339),
    v = n(952572),
    C = n(151476),
    b = n(704877),
    N = n(222692),
    R = n(404355),
    O = n(496841),
    D = n(970636),
    L = n(164891),
    w = n(260509),
    x = n(71393),
    P = n(430452),
    M = n(287809),
    k = n(531685),
    U = n(954571),
    G = n(486020),
    F = n(313961),
    V = n(85448),
    B = n(436416),
    j = n(750765),
    H = n(384059),
    Y = n(480890),
    W = n(806931),
    K = n(652215),
    $ = n(650583),
    z = n(731854),
    q = n(985018),
    X = n(503434),
    Z = n(424658),
    Q = n(976092);
let J = { width: 232, height: 315 },
    ee = { width: 232, height: 267 },
    et = 475,
    en = 267,
    er = 128;
function ei(e) {
    let { header: t } = e,
        n = P.Ay.getCameraComponent(),
        a = (0, l.bG)([P.Ay], () => P.Ay.getVideoDeviceId()),
        s = (0, v.A)();
    return (
        i.useEffect(() => {
            let e = M.default.getCurrentUser();
            if (s && null != e) {
                let t = (0, y.i)(e);
                (0, S.S1)(t, a, { track: !1 }).catch(K.tEg);
            }
        }, [s, a]),
        (0, r.jsxs)("div", {
            className: Z.Tg,
            children: [
                (0, r.jsx)(u.y$y, {}),
                (0, r.jsx)("div", {
                    className: Z.VH,
                    children: (0, r.jsx)(n, { disabled: !1, deviceId: a, width: et, height: en }),
                }),
                (0, r.jsx)("div", { className: Z.dB, children: t }),
            ],
        })
    );
}
function ea(e) {
    let { canVideo: t, channel: n, numVideoDevices: a } = e,
        { parentAnalyticsLocation: o } = (0, g.Ay)(),
        { cameraUnavailable: l, enabled: d } = (0, C.A)(),
        f = (0, b.A)(n),
        h = i.useRef(null),
        E = a > 1;
    return (0, r.jsxs)("div", {
        className: s()(Z.iE, Z.o1),
        children: [
            (0, r.jsx)(R.A, {
                iconComponent: u.PGe,
                label: q.intl.string(q.t.WAI6xu),
                className: Z.hP,
                onClick: () => {
                    (0, H.X)(o, H.O.DISCONNECT),
                        U.default.track(K.HAw.RING_CALL_DECLINED, {
                            location: o,
                            guild_id: n.guild_id,
                            ...(0, p.dI)(n),
                        }),
                        c.A.stopRinging(n.id);
                },
            }),
            t &&
                (0, r.jsx)(u.YNO, {
                    targetElementRef: h,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(j.A, {
                            onClose: t,
                            onInteraction: (0, Y.s)("VideoDeviceMenu", o, { entrypoint: W.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: u.YNO.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: a } = t;
                        return (0, r.jsx)(D.A, {
                            buttonRef: h,
                            join: !0,
                            enabled: d,
                            className: s()(Z.hP, { [Z.$j]: E }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: f,
                            cameraUnavailable: l,
                            channel: n,
                            onPopoutClick: E ? i : null,
                            popoutOpen: a,
                            onCameraUnavailable: N.A,
                            onChange: () => {
                                (0, H.X)(o, H.O.JOIN_VIDEO_CALL),
                                    U.default.track(K.HAw.RING_CALL_ACCEPTED, {
                                        location: o,
                                        guild_id: n.guild_id,
                                        ...(0, p.dI)(n),
                                    }),
                                    _.default.selectVoiceChannel(n.id, !0),
                                    (0, T.uh)(n.guild_id ?? K.ME, n.id);
                            },
                        });
                    },
                }),
            (0, r.jsx)(O.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    U.default.track(K.HAw.RING_CALL_ACCEPTED, { location: o, guild_id: n.guild_id, ...(0, p.dI)(n) }),
                className: Z.hP,
            }),
        ],
    });
}
function es(e) {
    let { animatedStyle: t, y: n, x: a, channel: _ } = e,
        { analyticsLocations: p } = (0, g.Ay)(h.A.INCOMING_CALL_MODAL),
        [T, y] = i.useState(!1),
        S = (0, l.bG)([x.A], () => x.A.getGuild(_.guild_id)),
        v = null != S ? G.Ay.getGuildIconURL({ id: S.id, icon: S.icon, size: er }) : null,
        C = (0, E.Y)(_, er, !0) ?? v,
        b = (0, A.Ay)(_),
        [N, R] = (0, l.yK)([P.Ay], () => [P.Ay.supports(z.O5.VIDEO), Object.keys(P.Ay.getVideoDevices()).length]),
        O = null != S ? `${b}, ${S.name}` : b,
        D = (0, l.bG)([k.A], () => k.A.isFocused()),
        M = (0, l.bG)([F.A], () => F.A.getMode(_.id)),
        U = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        B = (0, u.zhh)({ value: +!!T, config: { ...o.config.stiff, clamp: !0 } }, "animate-always");
    i.useEffect(() => {
        let e = (e) => {
            e.key === $.dh.ESCAPE && c.A.stopRinging(_.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [_]);
    let j = M === K._Of.VIDEO && N && R > 0,
        { enabled: H } = L.A.useExperiment({ guildId: _?.guild_id, location: "IncomingCallModal" }),
        Y =
            M === K._Of.VOICE || (H && _.type === K.rbe.GUILD_VOICE)
                ? q.intl.string(q.t.Js8cK3)
                : q.intl.string(q.t.KcnWCO),
        W = (0, r.jsxs)(r.Fragment, {
            children: [
                null != S && null == v
                    ? (0, r.jsx)("div", {
                          className: s()(Z.Kk, X.iE, X.hs),
                          children: (0, r.jsx)(I.Ay, {
                              className: Z.dK,
                              mask: I.hW.AVATAR_DEFAULT,
                              width: T ? 40 : 80,
                              height: T ? 40 : 80,
                              children: (0, r.jsx)("div", {
                                  className: s()(Z.$f, Z.Gc),
                                  children: (0, r.jsx)("div", { className: Z.Hj, children: (0, w.Rb)(S) }),
                              }),
                          }),
                      })
                    : (0, r.jsx)(V.A, {
                          className: Z.Kk,
                          ringing: D,
                          src: C ?? "",
                          ringingType: V.A.RingingType.INCOMING,
                          size: T ? u._3J.SIZE_40 : u._3J.SIZE_80,
                      }),
                (0, r.jsxs)("div", {
                    className: Z.i8,
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: Z.DD,
                            color: "text-strong",
                            variant: T ? "text-md/semibold" : "text-lg/semibold",
                            children: O,
                        }),
                        (0, r.jsx)(u.Text, {
                            color: "text-default",
                            className: Z.VA,
                            variant: T ? "text-sm/normal" : "text-md/normal",
                            children: Y,
                        }),
                    ],
                }),
            ],
        }),
        es = j ? J : ee,
        eo = (0, l.bG)([k.A], () => k.A.windowSize());
    return (0, r.jsx)(g.f5, {
        value: p,
        children: (0, r.jsx)(f.A, {
            className: Z.iE,
            selector: `.${Z.zr}`,
            initialPosition: { left: a, top: n },
            maxX: eo.width,
            maxY: eo.height,
            onDragEnd: U,
            dragAnywhere: !0,
            children: (0, r.jsx)(u.NPJ, {
                theme: T ? K.NJ8.DARK : void 0,
                children: (e) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: s()(Z.zr, Q.a8, { [Z.mY]: T }, e),
                        style: {
                            ...t,
                            minWidth: B.value.interpolate([0, 1], [es.width, et]),
                            minHeight: B.value.interpolate([0, 1], [es.height, en]),
                            translateX: B.value.interpolate([0, 1], [0, (-1 * Math.abs(et - es.width)) / 2]),
                        },
                        children: [
                            T ? (0, r.jsx)(ei, { header: W }) : (0, r.jsx)("div", { className: Z.Rh, children: W }),
                            (0, r.jsx)(ea, { canVideo: j, channel: _, numVideoDevices: R }),
                            j && !T
                                ? (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: Z.jc,
                                      children: (0, r.jsx)(u.Button, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: q.intl.string(q.t["8B0UDr"]),
                                          fullWidth: !0,
                                          onClick: () => y(!0),
                                      }),
                                  })
                                : null,
                        ],
                    }),
            }),
        }),
    });
}
function eo(e) {
    let { enabled: t } = L.A.useExperiment({ guildId: e.channel.guild_id, location: "IncomingCallModal" });
    return t && null != e.channel.guild_id ? (0, r.jsx)(B.A, { ...e }) : (0, r.jsx)(es, { ...e });
}
