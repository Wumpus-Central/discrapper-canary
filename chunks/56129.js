"use strict";
n.d(t, { Mp: () => G, gE: () => U, ll: () => F, tM: () => V });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(827343),
    u = n(688810),
    c = n(429913),
    d = n(525788),
    _ = n(384059),
    f = n(235986),
    h = n(267102),
    p = n(574172),
    g = n(704877),
    E = n(222692),
    A = n(447404),
    I = n(271195),
    T = n(709562),
    y = n(383831),
    S = n(128286),
    v = n(80051),
    C = n(970636),
    b = n(430452),
    N = n(646865),
    R = n(795816),
    O = n(104171),
    D = n(47294),
    L = n(652215),
    w = n(818348),
    x = n(985018),
    P = n(700063),
    M = n(299973);
function k(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(T.A, {
        iconClassName: a()(P.D6, { [P.S7]: n }),
        onClick: t,
        iconComponent: o.abt,
        label: n ? x.intl.string(x.t["2TiKgS"]) : x.intl.string(x.t.oN8bqe),
    });
}
function U(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: i,
            onMouseMove: a,
            onMouseLeave: o,
            onJumpToChannel: T,
            idle: v,
            selectedParticipant: O,
            embeddedActivity: x,
        } = e,
        k = (0, h.Us)() === L.BRT.POPOUT,
        U = (0, s.bG)([b.Ay], () => b.Ay.isVideoEnabled()),
        G = (0, s.bG)([b.Ay], () => Object.values(b.Ay.getVideoDevices())[0]),
        F = !1 === (G?.disabled ?? !0),
        V = (0, c.A)([n])[0],
        B = (0, g.A)(t),
        { parentAnalyticsLocation: j } = (0, u.Ay)(),
        H = (e) => {
            (0, _.X)(j, _.O.CAMERA, e), l.A.setVideoEnabled(e);
        },
        Y = () => {
            F ? H(!0) : (0, E.A)();
        },
        W = () => {
            (0, _.X)(j, _.O.POPOUT, !0),
                null != t &&
                    (0, D.A)({
                        onConfirm: async () => {
                            await (0, R.od)(n, t.id), p.openChannelCallPopout(t);
                        },
                    });
        };
    return (0, r.jsxs)("div", {
        className: M._v,
        onMouseMove: a,
        onMouseDown: i,
        onMouseLeave: o,
        children: [
            (0, r.jsx)("div", {
                className: M.K1,
                children: (0, r.jsx)(I.X, {
                    idle: v,
                    title: V?.name ?? t?.name ?? "",
                    onJumpToChannel: T,
                    preventIdleComponent: A.A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: M.q6,
                children: [
                    (0, r.jsxs)(f.A, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: f.A.Align.CENTER,
                        children: [
                            (0, r.jsx)(C.A, {
                                className: P.Oc,
                                enabled: U,
                                cameraUnavailable: !F,
                                hasPermission: B,
                                onChange: H,
                                onCameraUnavailable: Y,
                            }),
                            null != t &&
                                (0, r.jsx)(A.A, {
                                    children: (0, r.jsx)(d.A, {
                                        channelId: t.id,
                                        guildId: t.getGuildId(),
                                        className: M.__invalid_leftTrayIcon,
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
                            k || (0, N.f)()
                                ? null
                                : (0, r.jsx)(S.A, {
                                      className: P.BD,
                                      popoutOpen: !1,
                                      onOpenPopout: W,
                                      onClosePopout: w.FX,
                                  }),
                            (0, r.jsx)(y.A, { applicationId: n, location: x.location, className: P.BD }),
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
            onMouseMove: s,
            onMouseLeave: l,
            onJumpToChannel: u,
            idle: d,
            users: _,
            embeddedActivity: f,
        } = e,
        h = (0, c.A)([n])[0];
    return (0, r.jsxs)(o.DUT, {
        className: a()(M._v, M.ob),
        onMouseMove: s,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: u,
        children: [
            (0, r.jsx)("div", {
                className: M.K1,
                children: (0, r.jsx)(I.X, {
                    idle: d,
                    title: h?.name ?? t?.name ?? "",
                    onJumpToChannel: u,
                    preventIdleComponent: A.A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: M.q6,
                children: [
                    (0, r.jsx)(O.Ay, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: P.__invalid_userSummaryContainer,
                    }),
                    (0, r.jsx)(y.A, { applicationId: n, location: f.location, iconClassName: P.Gu, isActive: !0 }),
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
            showControls: s,
            applicationId: l,
            channel: u,
            onJumpToChannel: d,
            onToggleHeight: _,
            isExpanded: f,
            hideExpandedButton: h,
            embeddedActivity: p,
        } = e,
        g = (0, c.A)([l])[0];
    return (0, r.jsx)("div", {
        className: P.LO,
        onMouseMove: n,
        onMouseDown: t,
        onMouseLeave: i,
        children: (0, r.jsxs)("div", {
            className: a()(M.K1, P.eA, { [P.eo]: s }),
            children: [
                !s && (0, r.jsx)(o.jNK, { size: "xxs", color: "currentColor", className: P.ro }),
                s &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(I.X, {
                                idle: !s,
                                title: g?.name ?? u?.name ?? "",
                                onJumpToChannel: d,
                                preventIdleComponent: A.A,
                            }),
                            (0, r.jsxs)("div", {
                                className: P.QS,
                                children: [
                                    h ? null : (0, r.jsx)(k, { isExpanded: f, onClick: _ }),
                                    (0, r.jsx)(y.A, { applicationId: l, location: p.location, iconClassName: P.Gu }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
