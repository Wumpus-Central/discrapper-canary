"use strict";
n.d(t, { Mp: () => G, gE: () => U, ll: () => F, tM: () => V });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    l = n(827343),
    u = n(688810),
    c = n(429913),
    d = n(525788),
    _ = n(384059),
    f = n(47167),
    p = n(235986),
    h = n(267102),
    m = n(574172),
    E = n(704877),
    g = n(222692),
    A = n(447404),
    I = n(271195),
    T = n(709562),
    S = n(383831),
    y = n(128286),
    v = n(80051),
    N = n(970636),
    C = n(430452),
    R = n(646865),
    O = n(795816),
    b = n(104171),
    D = n(47294),
    L = n(652215),
    w = n(818348),
    M = n(985018),
    P = n(196436),
    x = n(27600);
function k(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(T.A, {
        iconClassName: s()(P.D6, { [P.S7]: n }),
        onClick: t,
        iconComponent: o.abt,
        label: n ? M.intl.string(M.t["2TiKgS"]) : M.intl.string(M.t.oN8bqe),
    });
}
function U(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: i,
            onMouseMove: s,
            onMouseLeave: o,
            onJumpToChannel: T,
            idle: v,
            selectedParticipant: b,
            embeddedActivity: M,
        } = e,
        k = (0, h.Us)() === L.BRT.POPOUT,
        U = (0, a.bG)([C.Ay], () => C.Ay.isVideoEnabled()),
        G = (0, a.bG)([C.Ay], () => Object.values(C.Ay.getVideoDevices())[0]),
        F = !1 === (G?.disabled ?? !0),
        V = (0, c.A)([n])[0],
        B = (0, f.Ay)(t),
        H = (0, E.A)(t),
        { parentAnalyticsLocation: j } = (0, u.Ay)(),
        Y = (e) => {
            (0, _.X)(j, _.O.CAMERA, e), l.A.setVideoEnabled(e);
        },
        W = () => {
            F ? Y(!0) : (0, g.A)();
        },
        K = () => {
            (0, _.X)(j, _.O.POPOUT, !0),
                null != t &&
                    (0, D.A)({
                        onConfirm: async () => {
                            await (0, O.od)(n, t.id), m.openChannelCallPopout(t);
                        },
                    });
        };
    return (0, r.jsxs)("div", {
        className: x._v,
        onMouseMove: s,
        onMouseDown: i,
        onMouseLeave: o,
        children: [
            (0, r.jsx)("div", {
                className: x.K1,
                children: (0, r.jsx)(I.X, {
                    idle: v,
                    title: V?.name ?? B ?? "",
                    onJumpToChannel: T,
                    preventIdleComponent: A.A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: x.q6,
                children: [
                    (0, r.jsxs)(p.A, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: p.A.Align.CENTER,
                        children: [
                            (0, r.jsx)(N.A, {
                                className: P.Oc,
                                enabled: U,
                                cameraUnavailable: !F,
                                hasPermission: H,
                                onChange: Y,
                                onCameraUnavailable: W,
                            }),
                            null != t &&
                                (0, r.jsx)(A.A, {
                                    children: (0, r.jsx)(d.A, {
                                        channelId: t.id,
                                        guildId: t.getGuildId(),
                                        className: x.__invalid_leftTrayIcon,
                                        participant: b,
                                        compact: !0,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)(p.A, {
                        grow: 0,
                        shrink: 1,
                        justify: p.A.Justify.END,
                        basis: "50%",
                        align: p.A.Align.CENTER,
                        children: [
                            k || (0, R.f)()
                                ? null
                                : (0, r.jsx)(y.A, {
                                      className: P.BD,
                                      popoutOpen: !1,
                                      onOpenPopout: K,
                                      onClosePopout: w.FX,
                                  }),
                            (0, r.jsx)(S.A, { applicationId: n, location: M.location, className: P.BD }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function G(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: i,
            onMouseMove: a,
            onMouseLeave: l,
            onJumpToChannel: u,
            idle: d,
            users: _,
            embeddedActivity: p,
        } = e,
        h = (0, c.A)([n])[0],
        m = (0, f.Ay)(t);
    return (0, r.jsxs)(o.DUT, {
        className: s()(x._v, x.ob),
        onMouseMove: a,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: u,
        children: [
            (0, r.jsx)("div", {
                className: x.K1,
                children: (0, r.jsx)(I.X, {
                    idle: d,
                    title: h?.name ?? m ?? "",
                    onJumpToChannel: u,
                    preventIdleComponent: A.A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: x.q6,
                children: [
                    (0, r.jsx)(b.Ay, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: P.__invalid_userSummaryContainer,
                    }),
                    (0, r.jsx)(S.A, { applicationId: n, location: p.location, iconClassName: P.Gu, isActive: !0 }),
                ],
            }),
        ],
    });
}
function F(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i ? (0, r.jsx)(v.A, { channelId: t, isParticipantsOpen: n, className: P.N9 }) : null;
}
function V(e) {
    let {
            onMouseDown: t,
            onMouseMove: n,
            onMouseLeave: i,
            showControls: a,
            applicationId: l,
            channel: u,
            onJumpToChannel: d,
            onToggleHeight: _,
            isExpanded: p,
            hideExpandedButton: h,
            embeddedActivity: m,
        } = e,
        E = (0, c.A)([l])[0],
        g = (0, f.Ay)(u);
    return (0, r.jsx)("div", {
        className: P.LO,
        onMouseMove: n,
        onMouseDown: t,
        onMouseLeave: i,
        children: (0, r.jsxs)("div", {
            className: s()(x.K1, P.eA, { [P.eo]: a }),
            children: [
                !a && (0, r.jsx)(o.jNK, { size: "xxs", color: "currentColor", className: P.ro }),
                a &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(I.X, {
                                idle: !a,
                                title: E?.name ?? g ?? "",
                                onJumpToChannel: d,
                                preventIdleComponent: A.A,
                            }),
                            (0, r.jsxs)("div", {
                                className: P.QS,
                                children: [
                                    h ? null : (0, r.jsx)(k, { isExpanded: p, onClick: _ }),
                                    (0, r.jsx)(S.A, { applicationId: l, location: m.location, iconClassName: P.Gu }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
