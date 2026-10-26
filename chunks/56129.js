n.d(t, { Mp: () => V, gE: () => B, ll: () => H, tM: () => j });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(847374),
    o = n(939249),
    d = n(365199),
    c = n(827343),
    u = n(688810),
    _ = n(429913),
    E = n(525788),
    A = n(384059),
    h = n(47167),
    f = n(235986),
    I = n(267102),
    p = n(574172),
    T = n(704877),
    m = n(222692),
    g = n(447404),
    S = n(271195),
    N = n(204651),
    C = n(383831),
    O = n(128286),
    R = n(80051),
    L = n(970636),
    y = n(360906),
    D = n(646865),
    v = n(795816),
    b = n(104171),
    M = n(47294),
    P = n(735168),
    U = n(652215),
    w = n(818348),
    G = n(105292),
    x = n(977747),
    k = n(967481);
function F(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, i.jsx)(N.A, {
        iconClassName: a()(x.D6, { [x.S7]: n }),
        onClick: t,
        iconComponent: l.a,
        label: n ? G.intl.string(G.t["2TiKgS"]) : G.intl.string(G.t.oN8bqe),
    });
}
function B(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: r,
            onMouseMove: a,
            onMouseLeave: l,
            onJumpToChannel: o,
            idle: d,
            selectedParticipant: N,
            embeddedActivity: R,
        } = e,
        b = (0, I.Us)() === U.BRT.POPOUT,
        G = (0, s.bG)([y.Ay], () => y.Ay.isVideoEnabled()),
        F = (0, s.bG)([y.Ay], () => Object.values(y.Ay.getVideoDevices())[0]),
        B = !1 === (F?.disabled ?? !0),
        V = (0, _.A)([n])[0],
        H = (0, h.Ay)(t),
        j = (0, T.A)(t),
        { parentAnalyticsLocation: W } = (0, u.Ay)();
    function Y(e) {
        ((0, A.X)(W, A.O.CAMERA, e), c.default.setVideoEnabled(e));
    }
    return (0, i.jsxs)("div", {
        className: k._v,
        onMouseMove: a,
        onMouseDown: r,
        onMouseLeave: l,
        children: [
            (0, i.jsx)("div", {
                className: k.K1,
                children: (0, i.jsx)(S.X, {
                    idle: d,
                    title: V?.name ?? H ?? "",
                    onJumpToChannel: o,
                    preventIdleComponent: g.A,
                }),
            }),
            (0, i.jsxs)("div", {
                className: k.q6,
                children: [
                    (0, i.jsxs)(f.A, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: f.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(L.A, {
                                className: x.Oc,
                                enabled: G,
                                cameraUnavailable: !B,
                                hasPermission: j,
                                onChange: Y,
                                onCameraUnavailable: function () {
                                    B ? Y(!0) : (0, m.A)();
                                },
                            }),
                            null != t &&
                                (0, i.jsx)(g.A, {
                                    children: (0, i.jsx)(E.A, {
                                        channelId: t.id,
                                        guildId: t.getGuildId(),
                                        className: k.__invalid_leftTrayIcon,
                                        participant: N,
                                        compact: !0,
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)(f.A, {
                        grow: 0,
                        shrink: 1,
                        justify: f.A.Justify.END,
                        basis: "50%",
                        align: f.A.Align.CENTER,
                        children: [
                            b || (0, D.f)()
                                ? null
                                : (0, i.jsx)(O.A, {
                                      className: x.BD,
                                      popoutOpen: !1,
                                      onOpenPopout: function () {
                                          ((0, A.X)(W, A.O.POPOUT, !0),
                                              null != t &&
                                                  (0, M.A)({
                                                      onConfirm: () =>
                                                          (0, P.A)({
                                                              windowKey: U.MLl.CHANNEL_CALL_POPOUT,
                                                              openWindow: () => p.openChannelCallPopout(t),
                                                              refreshProxyTicket: () => (0, v.od)(n, t.id),
                                                          }),
                                                  }));
                                      },
                                      onClosePopout: w.FX,
                                  }),
                            (0, i.jsx)(C.A, { applicationId: n, location: R.location, className: x.BD }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function V(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: r,
            onMouseMove: s,
            onMouseLeave: l,
            onJumpToChannel: d,
            idle: c,
            users: u,
            embeddedActivity: E,
        } = e,
        A = (0, _.A)([n])[0],
        f = (0, h.Ay)(t);
    return (0, i.jsxs)(o.D, {
        className: a()(k._v, k.ob),
        onMouseMove: s,
        onMouseDown: r,
        onMouseLeave: l,
        onDoubleClick: d,
        children: [
            (0, i.jsx)("div", {
                className: k.K1,
                children: (0, i.jsx)(S.X, {
                    idle: c,
                    title: A?.name ?? f ?? "",
                    onJumpToChannel: d,
                    preventIdleComponent: g.A,
                }),
            }),
            (0, i.jsxs)("div", {
                className: k.q6,
                children: [
                    (0, i.jsx)(b.Ay, {
                        renderIcon: !1,
                        users: u,
                        size: 24,
                        max: 3,
                        className: x.__invalid_userSummaryContainer,
                    }),
                    (0, i.jsx)(C.A, { applicationId: n, location: E.location, iconClassName: x.Gu, isActive: !0 }),
                ],
            }),
        ],
    });
}
function H(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: r } = e;
    return r ? (0, i.jsx)(R.A, { channelId: t, isParticipantsOpen: n, className: x.N9 }) : null;
}
function j(e) {
    let {
            onMouseDown: t,
            onMouseMove: n,
            onMouseLeave: r,
            showControls: s,
            applicationId: l,
            channel: o,
            onJumpToChannel: c,
            onToggleHeight: u,
            isExpanded: E,
            hideExpandedButton: A,
            embeddedActivity: f,
        } = e,
        I = (0, _.A)([l])[0],
        p = (0, h.Ay)(o);
    return (0, i.jsx)("div", {
        className: x.LO,
        onMouseMove: n,
        onMouseDown: t,
        onMouseLeave: r,
        children: (0, i.jsxs)("div", {
            className: a()(k.K1, x.eA, { [x.eo]: s }),
            children: [
                !s && (0, i.jsx)(d.MoreHorizontalIcon, { size: "xxs", color: "currentColor", className: x.ro }),
                s &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(S.X, {
                                idle: !s,
                                title: I?.name ?? p ?? "",
                                onJumpToChannel: c,
                                preventIdleComponent: g.A,
                            }),
                            (0, i.jsxs)("div", {
                                className: x.QS,
                                children: [
                                    A ? null : (0, i.jsx)(F, { isExpanded: E, onClick: u }),
                                    (0, i.jsx)(C.A, { applicationId: l, location: f.location, iconClassName: x.Gu }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
