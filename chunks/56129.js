"use strict";
n.d(t, { Mp: () => V, gE: () => F, ll: () => B, tM: () => H });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(847374),
    l = n(939249),
    u = n(365199),
    c = n(827343),
    d = n(688810),
    _ = n(429913),
    h = n(525788),
    f = n(384059),
    p = n(47167),
    E = n(235986),
    m = n(267102),
    g = n(574172),
    A = n(704877),
    I = n(222692),
    T = n(447404),
    S = n(271195),
    y = n(204651),
    N = n(383831),
    v = n(128286),
    C = n(80051),
    R = n(970636),
    O = n(890063),
    b = n(646865),
    D = n(795816),
    L = n(104171),
    w = n(47294),
    M = n(652215),
    P = n(818348),
    x = n(375708),
    k = n(196436),
    U = n(27600);
function G(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, i.jsx)(y.A, {
        iconClassName: s()(k.D6, { [k.S7]: n }),
        onClick: t,
        iconComponent: o.a,
        label: n ? x.intl.string(x.t["2TiKgS"]) : x.intl.string(x.t.oN8bqe),
    });
}
function F(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: r,
            onMouseMove: s,
            onMouseLeave: o,
            onJumpToChannel: l,
            idle: u,
            selectedParticipant: y,
            embeddedActivity: C,
        } = e,
        L = (0, m.Us)() === M.BRT.POPOUT,
        x = (0, a.bG)([O.Ay], () => O.Ay.isVideoEnabled()),
        G = (0, a.bG)([O.Ay], () => Object.values(O.Ay.getVideoDevices())[0]),
        F = !1 === (G?.disabled ?? !0),
        V = (0, _.A)([n])[0],
        B = (0, p.Ay)(t),
        H = (0, A.A)(t),
        { parentAnalyticsLocation: j } = (0, d.Ay)(),
        Y = (e) => {
            (0, f.X)(j, f.O.CAMERA, e), c.A.setVideoEnabled(e);
        };
    return (0, i.jsxs)("div", {
        className: U._v,
        onMouseMove: s,
        onMouseDown: r,
        onMouseLeave: o,
        children: [
            (0, i.jsx)("div", {
                className: U.K1,
                children: (0, i.jsx)(S.X, {
                    idle: u,
                    title: V?.name ?? B ?? "",
                    onJumpToChannel: l,
                    preventIdleComponent: T.A,
                }),
            }),
            (0, i.jsxs)("div", {
                className: U.q6,
                children: [
                    (0, i.jsxs)(E.A, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: E.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(R.A, {
                                className: k.Oc,
                                enabled: x,
                                cameraUnavailable: !F,
                                hasPermission: H,
                                onChange: Y,
                                onCameraUnavailable: () => {
                                    F ? Y(!0) : (0, I.A)();
                                },
                            }),
                            null != t &&
                                (0, i.jsx)(T.A, {
                                    children: (0, i.jsx)(h.A, {
                                        channelId: t.id,
                                        guildId: t.getGuildId(),
                                        className: U.__invalid_leftTrayIcon,
                                        participant: y,
                                        compact: !0,
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)(E.A, {
                        grow: 0,
                        shrink: 1,
                        justify: E.A.Justify.END,
                        basis: "50%",
                        align: E.A.Align.CENTER,
                        children: [
                            L || (0, b.f)()
                                ? null
                                : (0, i.jsx)(v.A, {
                                      className: k.BD,
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, f.X)(j, f.O.POPOUT, !0),
                                              null != t &&
                                                  (0, w.A)({
                                                      onConfirm: async () => {
                                                          await (0, D.od)(n, t.id), g.openChannelCallPopout(t);
                                                      },
                                                  });
                                      },
                                      onClosePopout: P.FX,
                                  }),
                            (0, i.jsx)(N.A, { applicationId: n, location: C.location, className: k.BD }),
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
            onMouseMove: a,
            onMouseLeave: o,
            onJumpToChannel: u,
            idle: c,
            users: d,
            embeddedActivity: h,
        } = e,
        f = (0, _.A)([n])[0],
        E = (0, p.Ay)(t);
    return (0, i.jsxs)(l.D, {
        className: s()(U._v, U.ob),
        onMouseMove: a,
        onMouseDown: r,
        onMouseLeave: o,
        onDoubleClick: u,
        children: [
            (0, i.jsx)("div", {
                className: U.K1,
                children: (0, i.jsx)(S.X, {
                    idle: c,
                    title: f?.name ?? E ?? "",
                    onJumpToChannel: u,
                    preventIdleComponent: T.A,
                }),
            }),
            (0, i.jsxs)("div", {
                className: U.q6,
                children: [
                    (0, i.jsx)(L.Ay, {
                        renderIcon: !1,
                        users: d,
                        size: 24,
                        max: 3,
                        className: k.__invalid_userSummaryContainer,
                    }),
                    (0, i.jsx)(N.A, { applicationId: n, location: h.location, iconClassName: k.Gu, isActive: !0 }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: r } = e;
    return r ? (0, i.jsx)(C.A, { channelId: t, isParticipantsOpen: n, className: k.N9 }) : null;
}
function H(e) {
    let {
            onMouseDown: t,
            onMouseMove: n,
            onMouseLeave: r,
            showControls: a,
            applicationId: o,
            channel: l,
            onJumpToChannel: c,
            onToggleHeight: d,
            isExpanded: h,
            hideExpandedButton: f,
            embeddedActivity: E,
        } = e,
        m = (0, _.A)([o])[0],
        g = (0, p.Ay)(l);
    return (0, i.jsx)("div", {
        className: k.LO,
        onMouseMove: n,
        onMouseDown: t,
        onMouseLeave: r,
        children: (0, i.jsxs)("div", {
            className: s()(U.K1, k.eA, { [k.eo]: a }),
            children: [
                !a && (0, i.jsx)(u.j, { size: "xxs", color: "currentColor", className: k.ro }),
                a &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(S.X, {
                                idle: !a,
                                title: m?.name ?? g ?? "",
                                onJumpToChannel: c,
                                preventIdleComponent: T.A,
                            }),
                            (0, i.jsxs)("div", {
                                className: k.QS,
                                children: [
                                    f ? null : (0, i.jsx)(G, { isExpanded: h, onClick: d }),
                                    (0, i.jsx)(N.A, { applicationId: o, location: E.location, iconClassName: k.Gu }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
