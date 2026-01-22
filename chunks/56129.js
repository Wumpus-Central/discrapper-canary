n.d(t, {
    Mp: () => k,
    gE: () => M,
    ll: () => U,
    tM: () => G,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(827343),
    c = n(688810),
    u = n(429913),
    d = n(525788),
    f = n(384059),
    p = n(235986),
    _ = n(267102),
    h = n(574172),
    m = n(927258),
    g = n(222692),
    E = n(447404),
    b = n(271195),
    y = n(709562),
    O = n(383831),
    A = n(128286),
    v = n(80051),
    S = n(970636),
    I = n(430452),
    T = n(646865),
    C = n(795816),
    N = n(104171),
    R = n(47294),
    w = n(652215),
    P = n(818348),
    D = n(985018),
    x = n(31545),
    L = n(319567);
function j(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(y.A, {
        iconClassName: a()(x.D6, { [x.S7]: n }),
        onClick: t,
        iconComponent: o.abt,
        label: n ? D.intl.string(D.t["2TiKgS"]) : D.intl.string(D.t.oN8bqe),
    });
}
function M(e) {
    var t, n, i;
    let {
            channel: a,
            applicationId: o,
            onMouseDown: y,
            onMouseMove: v,
            onMouseLeave: N,
            onJumpToChannel: D,
            idle: j,
            selectedParticipant: M,
            embeddedActivity: k,
        } = e,
        U = (0, _.Us)() === w.BRT.POPOUT,
        G = (0, s.bG)([I.A], () => I.A.isVideoEnabled()),
        V = (0, s.bG)([I.A], () => Object.values(I.A.getVideoDevices())[0]),
        F = !1 === (null == (t = null == V ? void 0 : V.disabled) || t),
        B = (0, u.A)([o])[0],
        H = (0, m.A)(a),
        { parentAnalyticsLocation: Y } = (0, c.Ay)(),
        W = (e) => {
            (0, f.X)(Y, f.O.CAMERA, e), l.A.setVideoEnabled(e);
        },
        K = () => {
            F ? W(!0) : (0, g.A)();
        },
        z = () => {
            (0, f.X)(Y, f.O.POPOUT, !0),
                null != a &&
                    (0, R.A)({
                        onConfirm: async () => {
                            await (0, C.od)(o, a.id), h.openChannelCallPopout(a);
                        },
                    });
        };
    return (0, r.jsxs)("div", {
        className: L._v,
        onMouseMove: v,
        onMouseDown: y,
        onMouseLeave: N,
        children: [
            (0, r.jsx)("div", {
                className: L.K1,
                children: (0, r.jsx)(b.X, {
                    idle: j,
                    title:
                        null != (n = null != (i = null == B ? void 0 : B.name) ? i : null == a ? void 0 : a.name)
                            ? n
                            : "",
                    onJumpToChannel: D,
                    preventIdleComponent: E.A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: L.q6,
                children: [
                    (0, r.jsxs)(p.A, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: p.A.Align.CENTER,
                        children: [
                            (0, r.jsx)(S.A, {
                                className: x.Oc,
                                enabled: G,
                                cameraUnavailable: !F,
                                hasPermission: H,
                                onChange: W,
                                onCameraUnavailable: K,
                            }),
                            null != a &&
                                (0, r.jsx)(E.A, {
                                    children: (0, r.jsx)(d.A, {
                                        channelId: a.id,
                                        guildId: a.getGuildId(),
                                        className: L.__invalid_leftTrayIcon,
                                        participant: M,
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
                            U || (0, T.f)()
                                ? null
                                : (0, r.jsx)(A.A, {
                                      className: x.BD,
                                      popoutOpen: !1,
                                      onOpenPopout: z,
                                      onClosePopout: P.FX,
                                  }),
                            (0, r.jsx)(O.A, {
                                applicationId: o,
                                location: k.location,
                                className: x.BD,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function k(e) {
    var t, n;
    let {
            channel: i,
            applicationId: s,
            onMouseDown: l,
            onMouseMove: c,
            onMouseLeave: d,
            onJumpToChannel: f,
            idle: p,
            users: _,
            embeddedActivity: h,
        } = e,
        m = (0, u.A)([s])[0];
    return (0, r.jsxs)(o.DUT, {
        className: a()(L._v, L.ob),
        onMouseMove: c,
        onMouseDown: l,
        onMouseLeave: d,
        onDoubleClick: f,
        children: [
            (0, r.jsx)("div", {
                className: L.K1,
                children: (0, r.jsx)(b.X, {
                    idle: p,
                    title:
                        null != (t = null != (n = null == m ? void 0 : m.name) ? n : null == i ? void 0 : i.name)
                            ? t
                            : "",
                    onJumpToChannel: f,
                    preventIdleComponent: E.A,
                }),
            }),
            (0, r.jsxs)("div", {
                className: L.q6,
                children: [
                    (0, r.jsx)(N.Ay, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: x.__invalid_userSummaryContainer,
                    }),
                    (0, r.jsx)(O.A, {
                        applicationId: s,
                        location: h.location,
                        iconClassName: x.Gu,
                        isActive: !0,
                    }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i
        ? (0, r.jsx)(v.A, {
              channelId: t,
              isParticipantsOpen: n,
              className: x.N9,
          })
        : null;
}
function G(e) {
    var t, n;
    let {
            onMouseDown: i,
            onMouseMove: s,
            onMouseLeave: l,
            showControls: c,
            applicationId: d,
            channel: f,
            onJumpToChannel: p,
            onToggleHeight: _,
            isExpanded: h,
            hideExpandedButton: m,
            embeddedActivity: g,
        } = e,
        y = (0, u.A)([d])[0];
    return (0, r.jsx)("div", {
        className: x.LO,
        onMouseMove: s,
        onMouseDown: i,
        onMouseLeave: l,
        children: (0, r.jsxs)("div", {
            className: a()(L.K1, x.eA, { [x.eo]: c }),
            children: [
                !c &&
                    (0, r.jsx)(o.jNK, {
                        size: "xxs",
                        color: "currentColor",
                        className: x.ro,
                    }),
                c &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(b.X, {
                                idle: !c,
                                title:
                                    null !=
                                    (t = null != (n = null == y ? void 0 : y.name) ? n : null == f ? void 0 : f.name)
                                        ? t
                                        : "",
                                onJumpToChannel: p,
                                preventIdleComponent: E.A,
                            }),
                            (0, r.jsxs)("div", {
                                className: x.QS,
                                children: [
                                    m
                                        ? null
                                        : (0, r.jsx)(j, {
                                              isExpanded: h,
                                              onClick: _,
                                          }),
                                    (0, r.jsx)(O.A, {
                                        applicationId: d,
                                        location: g.location,
                                        iconClassName: x.Gu,
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
