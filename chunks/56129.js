"use strict";
n.d(t, { Mp: () => U, gE: () => k, ll: () => G, tM: () => F });
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
    f = n(235986),
    p = n(267102),
    h = n(574172),
    m = n(704877),
    E = n(222692),
    g = n(447404),
    A = n(271195),
    I = n(709562),
    T = n(383831),
    S = n(128286),
    y = n(80051),
    v = n(970636),
    N = n(430452),
    C = n(646865),
    R = n(795816),
    O = n(104171),
    b = n(47294),
    D = n(652215),
    L = n(818348),
    w = n(985018),
    M = n(700063),
    x = n(299973);
function P(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(I.A, {
        iconClassName: s()(M.D6, { [M.S7]: n }),
        onClick: t,
        iconComponent: o.abt,
        label: n ? w.intl.string(w.t["2TiKgS"]) : w.intl.string(w.t.oN8bqe),
    });
}
function k(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: i,
            onMouseMove: s,
            onMouseLeave: o,
            onJumpToChannel: I,
            idle: y,
            selectedParticipant: O,
            embeddedActivity: w,
        } = e,
        P = (0, p.Us)() === D.BRT.POPOUT,
        k = (0, a.bG)([N.Ay], () => N.Ay.isVideoEnabled()),
        U = (0, a.bG)([N.Ay], () => Object.values(N.Ay.getVideoDevices())[0]),
        G = !1 === (U?.disabled ?? !0),
        F = (0, c.A)([n])[0],
        V = (0, m.A)(t),
        { parentAnalyticsLocation: B } = (0, u.Ay)(),
        H = (e) => {
            (0, _.X)(B, _.O.CAMERA, e), l.A.setVideoEnabled(e);
        },
        j = () => {
            G ? H(!0) : (0, E.A)();
        },
        Y = () => {
            (0, _.X)(B, _.O.POPOUT, !0),
                null != t &&
                    (0, b.A)({
                        onConfirm: async () => {
                            await (0, R.od)(n, t.id), h.openChannelCallPopout(t);
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
                children: (0, r.jsx)(A.X, {
                    idle: y,
                    title: F?.name ?? t?.name ?? "",
                    onJumpToChannel: I,
                    preventIdleComponent: g.A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: x.q6,
                children: [
                    (0, r.jsxs)(f.A, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: f.A.Align.CENTER,
                        children: [
                            (0, r.jsx)(v.A, {
                                className: M.Oc,
                                enabled: k,
                                cameraUnavailable: !G,
                                hasPermission: V,
                                onChange: H,
                                onCameraUnavailable: j,
                            }),
                            null != t &&
                                (0, r.jsx)(g.A, {
                                    children: (0, r.jsx)(d.A, {
                                        channelId: t.id,
                                        guildId: t.getGuildId(),
                                        className: x.__invalid_leftTrayIcon,
                                        participant: O,
                                        compact: !0,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)(f.A, {
                        grow: 0,
                        shrink: 1,
                        justify: f.A.Justify.END,
                        basis: "50%",
                        align: f.A.Align.CENTER,
                        children: [
                            P || (0, C.f)()
                                ? null
                                : (0, r.jsx)(S.A, {
                                      className: M.BD,
                                      popoutOpen: !1,
                                      onOpenPopout: Y,
                                      onClosePopout: L.FX,
                                  }),
                            (0, r.jsx)(T.A, { applicationId: n, location: w.location, className: M.BD }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function U(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: i,
            onMouseMove: a,
            onMouseLeave: l,
            onJumpToChannel: u,
            idle: d,
            users: _,
            embeddedActivity: f,
        } = e,
        p = (0, c.A)([n])[0];
    return (0, r.jsxs)(o.DUT, {
        className: s()(x._v, x.ob),
        onMouseMove: a,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: u,
        children: [
            (0, r.jsx)("div", {
                className: x.K1,
                children: (0, r.jsx)(A.X, {
                    idle: d,
                    title: p?.name ?? t?.name ?? "",
                    onJumpToChannel: u,
                    preventIdleComponent: g.A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: x.q6,
                children: [
                    (0, r.jsx)(O.Ay, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: M.__invalid_userSummaryContainer,
                    }),
                    (0, r.jsx)(T.A, { applicationId: n, location: f.location, iconClassName: M.Gu, isActive: !0 }),
                ],
            }),
        ],
    });
}
function G(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i ? (0, r.jsx)(y.A, { channelId: t, isParticipantsOpen: n, className: M.N9 }) : null;
}
function F(e) {
    let {
            onMouseDown: t,
            onMouseMove: n,
            onMouseLeave: i,
            showControls: a,
            applicationId: l,
            channel: u,
            onJumpToChannel: d,
            onToggleHeight: _,
            isExpanded: f,
            hideExpandedButton: p,
            embeddedActivity: h,
        } = e,
        m = (0, c.A)([l])[0];
    return (0, r.jsx)("div", {
        className: M.LO,
        onMouseMove: n,
        onMouseDown: t,
        onMouseLeave: i,
        children: (0, r.jsxs)("div", {
            className: s()(x.K1, M.eA, { [M.eo]: a }),
            children: [
                !a && (0, r.jsx)(o.jNK, { size: "xxs", color: "currentColor", className: M.ro }),
                a &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(A.X, {
                                idle: !a,
                                title: m?.name ?? u?.name ?? "",
                                onJumpToChannel: d,
                                preventIdleComponent: g.A,
                            }),
                            (0, r.jsxs)("div", {
                                className: M.QS,
                                children: [
                                    p ? null : (0, r.jsx)(P, { isExpanded: f, onClick: _ }),
                                    (0, r.jsx)(T.A, { applicationId: l, location: h.location, iconClassName: M.Gu }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
