n.d(t, {
    Ds: () => U,
    YB: () => M,
    of: () => G,
    q5: () => k,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(846027),
    c = n(906732),
    u = n(835473),
    d = n(221888),
    f = n(522651),
    p = n(600164),
    _ = n(728285),
    m = n(788983),
    h = n(189771),
    g = n(560688),
    E = n(618158),
    b = n(922745),
    y = n(871499),
    O = n(402113),
    v = n(800965),
    S = n(157813),
    I = n(25827),
    T = n(131951),
    C = n(636449),
    A = n(566620),
    N = n(884338),
    P = n(617552),
    R = n(981631),
    w = n(231338),
    D = n(388032),
    x = n(322785),
    L = n(290953);
function j(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(y.Z, {
        iconClassName: a()(x.arrowIcon, { [x.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: s.CJ0,
        label: n ? D.intl.string(D.t["2TiKgS"]) : D.intl.string(D.t.oN8bqe),
    });
}
function M(e) {
    var t, n, i;
    let {
            channel: a,
            applicationId: s,
            onMouseDown: y,
            onMouseMove: S,
            onMouseLeave: N,
            onJumpToChannel: D,
            idle: j,
            selectedParticipant: M,
            embeddedActivity: k,
        } = e,
        U = (0, _.bp)() === R.IlC.POPOUT,
        G = (0, o.e7)([T.Z], () => T.Z.isVideoEnabled()),
        Z = (0, o.e7)([T.Z], () => Object.values(T.Z.getVideoDevices())[0]),
        F = !1 === (null == (t = null == Z ? void 0 : Z.disabled) || t),
        B = (0, u.Z)([s])[0],
        V = (0, h.Z)(a),
        { parentAnalyticsLocation: H } = (0, c.ZP)(),
        Y = (e) => {
            (0, f.v)(H, f.d.CAMERA, e), l.Z.setVideoEnabled(e);
        },
        W = () => {
            F ? Y(!0) : (0, g.Z)();
        },
        K = () => {
            (0, f.v)(H, f.d.POPOUT, !0),
                null != a &&
                    (0, P.Z)({
                        onConfirm: async () => {
                            await (0, A.nJ)(s, a.id), m.openChannelCallPopout(a);
                        },
                    });
        };
    return (0, r.jsxs)("div", {
        className: L.videoControls,
        onMouseMove: S,
        onMouseDown: y,
        onMouseLeave: N,
        children: [
            (0, r.jsx)("div", {
                className: L.topControls,
                children: (0, r.jsx)(b.r, {
                    idle: j,
                    title:
                        null != (i = null != (n = null == B ? void 0 : B.name) ? n : null == a ? void 0 : a.name)
                            ? i
                            : "",
                    onJumpToChannel: D,
                    preventIdleComponent: E.Z,
                }),
            }),
            (0, r.jsxs)("div", {
                className: L.bottomControls,
                children: [
                    (0, r.jsxs)(p.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: p.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(I.C, {
                                className: x.leftPipIcon,
                                enabled: G,
                                cameraUnavailable: !F,
                                hasPermission: V,
                                onChange: Y,
                                onCameraUnavailable: W,
                            }),
                            null != a &&
                                (0, r.jsx)(E.Z, {
                                    children: (0, r.jsx)(d.Z, {
                                        channelId: a.id,
                                        guildId: a.getGuildId(),
                                        className: L.__invalid_leftTrayIcon,
                                        participant: M,
                                        compact: !0,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)(p.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: p.Z.Justify.END,
                        basis: "50%",
                        align: p.Z.Align.CENTER,
                        children: [
                            U || (0, C.R)()
                                ? null
                                : (0, r.jsx)(v.Z, {
                                      className: x.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: K,
                                      onClosePopout: w.Vq,
                                  }),
                            (0, r.jsx)(O.Z, {
                                applicationId: s,
                                location: k.location,
                                className: x.rightPipIcon,
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
            applicationId: o,
            onMouseDown: l,
            onMouseMove: c,
            onMouseLeave: d,
            onJumpToChannel: f,
            idle: p,
            users: _,
            embeddedActivity: m,
        } = e,
        h = (0, u.Z)([o])[0];
    return (0, r.jsxs)(s.P3F, {
        className: a()(L.videoControls, L.videoControlsTextActivity),
        onMouseMove: c,
        onMouseDown: l,
        onMouseLeave: d,
        onDoubleClick: f,
        children: [
            (0, r.jsx)("div", {
                className: L.topControls,
                children: (0, r.jsx)(b.r, {
                    idle: p,
                    title:
                        null != (n = null != (t = null == h ? void 0 : h.name) ? t : null == i ? void 0 : i.name)
                            ? n
                            : "",
                    onJumpToChannel: f,
                    preventIdleComponent: E.Z,
                }),
            }),
            (0, r.jsxs)("div", {
                className: L.bottomControls,
                children: [
                    (0, r.jsx)(N.ZP, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: x.__invalid_userSummaryContainer,
                    }),
                    (0, r.jsx)(O.Z, {
                        applicationId: o,
                        location: m.location,
                        iconClassName: x.leaveActivityIcon,
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
        ? (0, r.jsx)(S.Z, {
              channelId: t,
              isParticipantsOpen: n,
              className: x.participantsButton,
          })
        : null;
}
function G(e) {
    var t, n;
    let {
            onMouseDown: i,
            onMouseMove: o,
            onMouseLeave: l,
            showControls: c,
            applicationId: d,
            channel: f,
            onJumpToChannel: p,
            onToggleHeight: _,
            isExpanded: m,
            hideExpandedButton: h,
            embeddedActivity: g,
        } = e,
        y = (0, u.Z)([d])[0];
    return (0, r.jsx)("div", {
        className: x.pipHeader,
        onMouseMove: o,
        onMouseDown: i,
        onMouseLeave: l,
        children: (0, r.jsxs)("div", {
            className: a()(L.topControls, x.pipHeaderContent, { [x.pipHeaderContentOpen]: c }),
            children: [
                !c &&
                    (0, r.jsx)(s.xhG, {
                        size: "xxs",
                        color: "currentColor",
                        className: x.menuIcon,
                    }),
                c &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(b.r, {
                                idle: !c,
                                title:
                                    null !=
                                    (n = null != (t = null == y ? void 0 : y.name) ? t : null == f ? void 0 : f.name)
                                        ? n
                                        : "",
                                onJumpToChannel: p,
                                preventIdleComponent: E.Z,
                            }),
                            (0, r.jsxs)("div", {
                                className: x.pipHeaderButtonsRight,
                                children: [
                                    h
                                        ? null
                                        : (0, r.jsx)(j, {
                                              isExpanded: m,
                                              onClick: _,
                                          }),
                                    (0, r.jsx)(O.Z, {
                                        applicationId: d,
                                        location: g.location,
                                        iconClassName: x.leaveActivityIcon,
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
