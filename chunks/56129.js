"use strict";
n.d(t, { Mp: () => U, gE: () => k, ll: () => G, tM: () => V });
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
    p = n(267102),
    h = n(574172),
    m = n(704877),
    g = n(222692),
    E = n(447404),
    A = n(271195),
    I = n(709562),
    T = n(383831),
    y = n(128286),
    S = n(80051),
    v = n(970636),
    C = n(430452),
    b = n(646865),
    N = n(795816),
    R = n(104171),
    O = n(47294),
    D = n(652215),
    L = n(818348),
    w = n(985018),
    x = n(31545),
    P = n(319567);
function M(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(I.A, {
        iconClassName: a()(x.D6, { [x.S7]: n }),
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
            onMouseMove: a,
            onMouseLeave: o,
            onJumpToChannel: I,
            idle: S,
            selectedParticipant: R,
            embeddedActivity: w,
        } = e,
        M = (0, p.Us)() === D.BRT.POPOUT,
        k = (0, s.bG)([C.A], () => C.A.isVideoEnabled()),
        U = (0, s.bG)([C.A], () => Object.values(C.A.getVideoDevices())[0]),
        G = !1 === (U?.disabled ?? !0),
        V = (0, c.A)([n])[0],
        F = (0, m.A)(t),
        { parentAnalyticsLocation: B } = (0, u.Ay)(),
        j = (e) => {
            (0, _.X)(B, _.O.CAMERA, e), l.A.setVideoEnabled(e);
        },
        H = () => {
            G ? j(!0) : (0, g.A)();
        },
        Y = () => {
            (0, _.X)(B, _.O.POPOUT, !0),
                null != t &&
                    (0, O.A)({
                        onConfirm: async () => {
                            await (0, N.od)(n, t.id), h.openChannelCallPopout(t);
                        },
                    });
        };
    return (0, r.jsxs)("div", {
        className: P._v,
        onMouseMove: a,
        onMouseDown: i,
        onMouseLeave: o,
        children: [
            (0, r.jsx)("div", {
                className: P.K1,
                children: (0, r.jsx)(A.X, {
                    idle: S,
                    title: V?.name ?? t?.name ?? "",
                    onJumpToChannel: I,
                    preventIdleComponent: E.A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: P.q6,
                children: [
                    (0, r.jsxs)(f.A, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: f.A.Align.CENTER,
                        children: [
                            (0, r.jsx)(v.A, {
                                className: x.Oc,
                                enabled: k,
                                cameraUnavailable: !G,
                                hasPermission: F,
                                onChange: j,
                                onCameraUnavailable: H,
                            }),
                            null != t &&
                                (0, r.jsx)(E.A, {
                                    children: (0, r.jsx)(d.A, {
                                        channelId: t.id,
                                        guildId: t.getGuildId(),
                                        className: P.__invalid_leftTrayIcon,
                                        participant: R,
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
                            M || (0, b.f)()
                                ? null
                                : (0, r.jsx)(y.A, {
                                      className: x.BD,
                                      popoutOpen: !1,
                                      onOpenPopout: Y,
                                      onClosePopout: L.FX,
                                  }),
                            (0, r.jsx)(T.A, { applicationId: n, location: w.location, className: x.BD }),
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
            onMouseMove: s,
            onMouseLeave: l,
            onJumpToChannel: u,
            idle: d,
            users: _,
            embeddedActivity: f,
        } = e,
        p = (0, c.A)([n])[0];
    return (0, r.jsxs)(o.DUT, {
        className: a()(P._v, P.ob),
        onMouseMove: s,
        onMouseDown: i,
        onMouseLeave: l,
        onDoubleClick: u,
        children: [
            (0, r.jsx)("div", {
                className: P.K1,
                children: (0, r.jsx)(A.X, {
                    idle: d,
                    title: p?.name ?? t?.name ?? "",
                    onJumpToChannel: u,
                    preventIdleComponent: E.A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: P.q6,
                children: [
                    (0, r.jsx)(R.Ay, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: x.__invalid_userSummaryContainer,
                    }),
                    (0, r.jsx)(T.A, { applicationId: n, location: f.location, iconClassName: x.Gu, isActive: !0 }),
                ],
            }),
        ],
    });
}
function G(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i ? (0, r.jsx)(S.A, { channelId: t, isParticipantsOpen: n, className: x.N9 }) : null;
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
            hideExpandedButton: p,
            embeddedActivity: h,
        } = e,
        m = (0, c.A)([l])[0];
    return (0, r.jsx)("div", {
        className: x.LO,
        onMouseMove: n,
        onMouseDown: t,
        onMouseLeave: i,
        children: (0, r.jsxs)("div", {
            className: a()(P.K1, x.eA, { [x.eo]: s }),
            children: [
                !s && (0, r.jsx)(o.jNK, { size: "xxs", color: "currentColor", className: x.ro }),
                s &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(A.X, {
                                idle: !s,
                                title: m?.name ?? u?.name ?? "",
                                onJumpToChannel: d,
                                preventIdleComponent: E.A,
                            }),
                            (0, r.jsxs)("div", {
                                className: x.QS,
                                children: [
                                    p ? null : (0, r.jsx)(M, { isExpanded: f, onClick: _ }),
                                    (0, r.jsx)(T.A, { applicationId: l, location: h.location, iconClassName: x.Gu }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
