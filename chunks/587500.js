"use strict";
n.d(t, { A: () => ea });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(382222),
    l = n(311907),
    u = n(397927),
    c = n(387755),
    d = n(517499),
    _ = n(956793),
    f = n(712960),
    p = n(793574),
    h = n(58149),
    m = n(688810),
    E = n(571694),
    g = n(47167),
    A = n(573435),
    I = n(976860),
    T = n(329551),
    S = n(413339),
    y = n(952572),
    v = n(151476),
    N = n(704877),
    C = n(222692),
    R = n(404355),
    O = n(496841),
    b = n(970636),
    D = n(164891),
    L = n(260509),
    w = n(71393),
    M = n(430452),
    P = n(287809),
    x = n(531685),
    k = n(954571),
    U = n(486020),
    G = n(313961),
    F = n(85448),
    V = n(436416),
    B = n(750765),
    H = n(384059),
    j = n(480890),
    Y = n(806931),
    W = n(652215),
    K = n(650583),
    $ = n(731854),
    z = n(985018),
    q = n(963101),
    Z = n(673243),
    X = n(778437);
let Q = { width: 232, height: 315 },
    J = { width: 232, height: 267 },
    ee = 475,
    et = 267,
    en = 128;
function er(e) {
    let { header: t } = e,
        n = M.Ay.getCameraComponent(),
        s = (0, l.bG)([M.Ay], () => M.Ay.getVideoDeviceId()),
        a = (0, y.A)();
    return (
        i.useEffect(() => {
            let e = P.default.getCurrentUser();
            if (a && null != e) {
                let t = (0, T.i)(e);
                (0, S.S1)(t, s, { track: !1 }).catch(W.tEg);
            }
        }, [a, s]),
        (0, r.jsxs)("div", {
            className: Z.Tg,
            children: [
                (0, r.jsx)(u.y$y, {}),
                (0, r.jsx)("div", {
                    className: Z.VH,
                    children: (0, r.jsx)(n, { disabled: !1, deviceId: s, width: ee, height: et }),
                }),
                (0, r.jsx)("div", { className: Z.dB, children: t }),
            ],
        })
    );
}
function ei(e) {
    let { canVideo: t, channel: n, numVideoDevices: s } = e,
        { parentAnalyticsLocation: o } = (0, m.Ay)(),
        { cameraUnavailable: l, enabled: d } = (0, v.A)(),
        f = (0, N.A)(n),
        p = i.useRef(null),
        E = s > 1;
    return (0, r.jsxs)("div", {
        className: a()(Z.iE, Z.o1),
        children: [
            (0, r.jsx)(R.A, {
                iconComponent: u.PGe,
                label: z.intl.string(z.t.WAI6xu),
                className: Z.hP,
                onClick: () => {
                    (0, H.X)(o, H.O.DISCONNECT),
                        k.default.track(W.HAw.RING_CALL_DECLINED, {
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
                        return (0, r.jsx)(B.A, {
                            onClose: t,
                            onInteraction: (0, j.s)("VideoDeviceMenu", o, { entrypoint: Y.GK.CARET }),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: u.YNO.Animation.FADE,
                    children: (e, t) => {
                        let { onClick: i } = e,
                            { isShown: s } = t;
                        return (0, r.jsx)(b.A, {
                            buttonRef: p,
                            join: !0,
                            enabled: d,
                            className: a()(Z.hP, { [Z.$j]: E }),
                            color: "green",
                            centerButton: !0,
                            hasPermission: f,
                            cameraUnavailable: l,
                            channel: n,
                            onPopoutClick: E ? i : null,
                            popoutOpen: s,
                            onCameraUnavailable: C.A,
                            onChange: () => {
                                (0, H.X)(o, H.O.JOIN_VIDEO_CALL),
                                    k.default.track(W.HAw.RING_CALL_ACCEPTED, {
                                        location: o,
                                        guild_id: n.guild_id,
                                        ...(0, h.dI)(n),
                                    }),
                                    _.default.selectVoiceChannel(n.id, !0),
                                    (0, I.uh)(n.guild_id ?? W.ME, n.id);
                            },
                        });
                    },
                }),
            (0, r.jsx)(O.A, {
                channel: n,
                color: "join",
                centerButton: !0,
                onCallJoined: () =>
                    k.default.track(W.HAw.RING_CALL_ACCEPTED, { location: o, guild_id: n.guild_id, ...(0, h.dI)(n) }),
                className: Z.hP,
            }),
        ],
    });
}
function es(e) {
    let { animatedStyle: t, y: n, x: s, channel: _ } = e,
        { analyticsLocations: h } = (0, m.Ay)(p.A.INCOMING_CALL_MODAL),
        [I, T] = i.useState(!1),
        S = (0, l.bG)([w.A], () => w.A.getGuild(_.guild_id)),
        y = null != S ? U.Ay.getGuildIconURL({ id: S.id, icon: S.icon, size: en }) : null,
        v = (0, E.Y)(_, en, !0) ?? y,
        N = (0, g.Ay)(_),
        [C, R] = (0, l.yK)([M.Ay], () => [M.Ay.supports($.O5.VIDEO), Object.keys(M.Ay.getVideoDevices()).length]),
        O = null != S ? `${N}, ${S.name}` : N,
        b = (0, l.bG)([x.A], () => x.A.isFocused()),
        P = (0, l.bG)([G.A], () => G.A.getMode(_.id)),
        k = i.useCallback((e) => {
            null != e.top && null != e.left && d.A.move(e.left, e.top);
        }, []),
        V = (0, u.zhh)({ value: +!!I, config: { ...o.config.stiff, clamp: !0 } }, "animate-always");
    i.useEffect(() => {
        let e = (e) => {
            e.key === K.dh.ESCAPE && c.A.stopRinging(_.id);
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [_]);
    let B = P === W._Of.VIDEO && C && R > 0,
        { enabled: H } = D.A.useExperiment({ guildId: _?.guild_id, location: "IncomingCallModal" }),
        j =
            P === W._Of.VOICE || (H && _.type === W.rbe.GUILD_VOICE)
                ? z.intl.string(z.t.Js8cK3)
                : z.intl.string(z.t.KcnWCO),
        Y = (0, r.jsxs)(r.Fragment, {
            children: [
                null != S && null == y
                    ? (0, r.jsx)("div", {
                          className: a()(Z.Kk, q.iE, q.hs),
                          children: (0, r.jsx)(A.Ay, {
                              className: Z.dK,
                              mask: A.hW.AVATAR_DEFAULT,
                              width: I ? 40 : 80,
                              height: I ? 40 : 80,
                              children: (0, r.jsx)("div", {
                                  className: a()(Z.$f, Z.Gc),
                                  children: (0, r.jsx)("div", { className: Z.Hj, children: (0, L.Rb)(S) }),
                              }),
                          }),
                      })
                    : (0, r.jsx)(F.A, {
                          className: Z.Kk,
                          ringing: b,
                          src: v ?? "",
                          ringingType: F.A.RingingType.INCOMING,
                          size: I ? u._3J.SIZE_40 : u._3J.SIZE_80,
                      }),
                (0, r.jsxs)("div", {
                    className: Z.i8,
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: Z.DD,
                            color: "text-strong",
                            variant: I ? "text-md/semibold" : "text-lg/semibold",
                            children: O,
                        }),
                        (0, r.jsx)(u.Text, {
                            color: "text-default",
                            className: Z.VA,
                            variant: I ? "text-sm/normal" : "text-md/normal",
                            children: j,
                        }),
                    ],
                }),
            ],
        }),
        es = B ? Q : J,
        ea = (0, l.bG)([x.A], () => x.A.windowSize());
    return (0, r.jsx)(m.f5, {
        value: h,
        children: (0, r.jsx)(f.A, {
            className: Z.iE,
            selector: `.${Z.zr}`,
            initialPosition: { left: s, top: n },
            maxX: ea.width,
            maxY: ea.height,
            onDragEnd: k,
            dragAnywhere: !0,
            children: (0, r.jsx)(u.NPJ, {
                theme: I ? W.NJ8.DARK : void 0,
                children: (e) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: a()(Z.zr, X.a8, { [Z.mY]: I }, e),
                        style: {
                            ...t,
                            minWidth: V.value.interpolate([0, 1], [es.width, ee]),
                            minHeight: V.value.interpolate([0, 1], [es.height, et]),
                            translateX: V.value.interpolate([0, 1], [0, (-1 * Math.abs(ee - es.width)) / 2]),
                        },
                        children: [
                            I ? (0, r.jsx)(er, { header: Y }) : (0, r.jsx)("div", { className: Z.Rh, children: Y }),
                            (0, r.jsx)(ei, { canVideo: B, channel: _, numVideoDevices: R }),
                            B && !I
                                ? (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: Z.jc,
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
function ea(e) {
    let { enabled: t } = D.A.useExperiment({ guildId: e.channel.guild_id, location: "IncomingCallModal" });
    return t && null != e.channel.guild_id ? (0, r.jsx)(V.A, { ...e }) : (0, r.jsx)(es, { ...e });
}
