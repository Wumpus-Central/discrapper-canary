"use strict";
n.d(t, { Mp: () => V, gE: () => F, ll: () => B, tM: () => H });
var i = n(627968);
n(64700);
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
    I = n(235986),
    f = n(267102),
    p = n(574172),
    T = n(704877),
    m = n(222692),
    g = n(447404),
    S = n(271195),
    N = n(204651),
    C = n(383831),
    R = n(128286),
    O = n(80051),
    L = n(970636),
    y = n(186295),
    D = n(646865),
    v = n(795816),
    b = n(104171),
    M = n(47294),
    P = n(652215),
    U = n(818348),
    w = n(375708),
    G = n(196436),
    x = n(27600);
function k(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, i.jsx)(N.A, {
        iconClassName: a()(G.D6, { [G.S7]: n }),
        onClick: t,
        iconComponent: l.a,
        label: n ? w.intl.string(w.t["2TiKgS"]) : w.intl.string(w.t.oN8bqe),
    });
}
function F(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: r,
            onMouseMove: a,
            onMouseLeave: l,
            onJumpToChannel: o,
            idle: d,
            selectedParticipant: N,
            embeddedActivity: O,
        } = e,
        b = (0, f.Us)() === P.BRT.POPOUT,
        w = (0, s.bG)([y.Ay], () => y.Ay.isVideoEnabled()),
        k = (0, s.bG)([y.Ay], () => Object.values(y.Ay.getVideoDevices())[0]),
        F = !1 === (k?.disabled ?? !0),
        V = (0, _.A)([n])[0],
        B = (0, h.Ay)(t),
        H = (0, T.A)(t),
        { parentAnalyticsLocation: j } = (0, u.Ay)();
    function W(e) {
        (0, A.X)(j, A.O.CAMERA, e), c.A.setVideoEnabled(e);
    }
    return (0, i.jsxs)("div", {
        className: x._v,
        onMouseMove: a,
        onMouseDown: r,
        onMouseLeave: l,
        children: [
            (0, i.jsx)("div", {
                className: x.K1,
                children: (0, i.jsx)(S.X, {
                    idle: d,
                    title: V?.name ?? B ?? "",
                    onJumpToChannel: o,
                    preventIdleComponent: g.A,
                }),
            }),
            (0, i.jsxs)("div", {
                className: x.q6,
                children: [
                    (0, i.jsxs)(I.A, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: I.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(L.A, {
                                className: G.Oc,
                                enabled: w,
                                cameraUnavailable: !F,
                                hasPermission: H,
                                onChange: W,
                                onCameraUnavailable: function () {
                                    F ? W(!0) : (0, m.A)();
                                },
                            }),
                            null != t &&
                                (0, i.jsx)(g.A, {
                                    children: (0, i.jsx)(E.A, {
                                        channelId: t.id,
                                        guildId: t.getGuildId(),
                                        className: x.__invalid_leftTrayIcon,
                                        participant: N,
                                        compact: !0,
                                    }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)(I.A, {
                        grow: 0,
                        shrink: 1,
                        justify: I.A.Justify.END,
                        basis: "50%",
                        align: I.A.Align.CENTER,
                        children: [
                            b || (0, D.f)()
                                ? null
                                : (0, i.jsx)(R.A, {
                                      className: G.BD,
                                      popoutOpen: !1,
                                      onOpenPopout: function () {
                                          (0, A.X)(j, A.O.POPOUT, !0),
                                              null != t &&
                                                  (0, M.A)({
                                                      onConfirm: async () => {
                                                          await (0, v.od)(n, t.id), p.openChannelCallPopout(t);
                                                      },
                                                  });
                                      },
                                      onClosePopout: U.FX,
                                  }),
                            (0, i.jsx)(C.A, { applicationId: n, location: O.location, className: G.BD }),
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
        I = (0, h.Ay)(t);
    return (0, i.jsxs)(o.D, {
        className: a()(x._v, x.ob),
        onMouseMove: s,
        onMouseDown: r,
        onMouseLeave: l,
        onDoubleClick: d,
        children: [
            (0, i.jsx)("div", {
                className: x.K1,
                children: (0, i.jsx)(S.X, {
                    idle: c,
                    title: A?.name ?? I ?? "",
                    onJumpToChannel: d,
                    preventIdleComponent: g.A,
                }),
            }),
            (0, i.jsxs)("div", {
                className: x.q6,
                children: [
                    (0, i.jsx)(b.Ay, {
                        renderIcon: !1,
                        users: u,
                        size: 24,
                        max: 3,
                        className: G.__invalid_userSummaryContainer,
                    }),
                    (0, i.jsx)(C.A, { applicationId: n, location: E.location, iconClassName: G.Gu, isActive: !0 }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: r } = e;
    return r ? (0, i.jsx)(O.A, { channelId: t, isParticipantsOpen: n, className: G.N9 }) : null;
}
function H(e) {
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
            embeddedActivity: I,
        } = e,
        f = (0, _.A)([l])[0],
        p = (0, h.Ay)(o);
    return (0, i.jsx)("div", {
        className: G.LO,
        onMouseMove: n,
        onMouseDown: t,
        onMouseLeave: r,
        children: (0, i.jsxs)("div", {
            className: a()(x.K1, G.eA, { [G.eo]: s }),
            children: [
                !s && (0, i.jsx)(d.j, { size: "xxs", color: "currentColor", className: G.ro }),
                s &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(S.X, {
                                idle: !s,
                                title: f?.name ?? p ?? "",
                                onJumpToChannel: c,
                                preventIdleComponent: g.A,
                            }),
                            (0, i.jsxs)("div", {
                                className: G.QS,
                                children: [
                                    A ? null : (0, i.jsx)(k, { isExpanded: E, onClick: u }),
                                    (0, i.jsx)(C.A, { applicationId: l, location: I.location, iconClassName: G.Gu }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
