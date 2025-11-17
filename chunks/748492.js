n.d(t, {
    Ds: () => U,
    YB: () => k,
    of: () => G,
    q5: () => j,
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
    _ = n(600164),
    p = n(728285),
    h = n(788983),
    m = n(189771),
    g = n(560688),
    E = n(618158),
    b = n(922745),
    y = n(871499),
    O = n(402113),
    v = n(800965),
    I = n(157813),
    T = n(25827),
    S = n(131951),
    A = n(636449),
    C = n(566620),
    N = n(884338),
    R = n(617552),
    P = n(981631),
    D = n(231338),
    w = n(388032),
    x = n(702952),
    L = n(186880);
function M(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(y.Z, {
        iconClassName: a()(x.arrowIcon, { [x.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: s.CJ0,
        label: n ? w.intl.string(w.t["2TiKgS"]) : w.intl.string(w.t.oN8bqe),
    });
}
function k(e) {
    var t, n, i;
    let {
            channel: a,
            applicationId: s,
            onMouseDown: y,
            onMouseMove: I,
            onMouseLeave: N,
            onJumpToChannel: w,
            idle: M,
            selectedParticipant: k,
            embeddedActivity: j,
        } = e,
        U = (0, p.bp)() === P.IlC.POPOUT,
        G = (0, o.e7)([S.Z], () => S.Z.isVideoEnabled()),
        B = (0, o.e7)([S.Z], () => Object.values(S.Z.getVideoDevices())[0]),
        Z = !1 === (null == (t = null == B ? void 0 : B.disabled) || t),
        F = (0, u.Z)([s])[0],
        V = (0, m.Z)(a),
        { parentAnalyticsLocation: H } = (0, c.ZP)(),
        Y = (e) => {
            (0, f.v)(H, f.d.CAMERA, e), l.Z.setVideoEnabled(e);
        },
        W = () => {
            Z ? Y(!0) : (0, g.Z)();
        },
        K = () => {
            (0, f.v)(H, f.d.POPOUT, !0),
                null != a &&
                    (0, R.Z)({
                        onConfirm: async () => {
                            await (0, C.nJ)(s, a.id), h.hP(a);
                        },
                    });
        };
    return (0, r.jsxs)("div", {
        className: L.videoControls,
        onMouseMove: I,
        onMouseDown: y,
        onMouseLeave: N,
        children: [
            (0, r.jsx)("div", {
                className: L.topControls,
                children: (0, r.jsx)(b.r, {
                    idle: M,
                    title:
                        null != (i = null != (n = null == F ? void 0 : F.name) ? n : null == a ? void 0 : a.name)
                            ? i
                            : "",
                    onJumpToChannel: w,
                    preventIdleComponent: E.Z,
                }),
            }),
            (0, r.jsxs)("div", {
                className: L.bottomControls,
                children: [
                    (0, r.jsxs)(_.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: _.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(T.C, {
                                className: x.leftPipIcon,
                                enabled: G,
                                cameraUnavailable: !Z,
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
                                        participant: k,
                                        compact: !0,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsxs)(_.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: _.Z.Justify.END,
                        basis: "50%",
                        align: _.Z.Align.CENTER,
                        children: [
                            U || (0, A.R)()
                                ? null
                                : (0, r.jsx)(v.Z, {
                                      className: x.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: K,
                                      onClosePopout: D.Vq,
                                  }),
                            (0, r.jsx)(O.Z, {
                                applicationId: s,
                                location: j.location,
                                className: x.rightPipIcon,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function j(e) {
    var t, n;
    let {
            channel: i,
            applicationId: o,
            onMouseDown: l,
            onMouseMove: c,
            onMouseLeave: d,
            onJumpToChannel: f,
            idle: _,
            users: p,
            embeddedActivity: h,
        } = e,
        m = (0, u.Z)([o])[0];
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
                    idle: _,
                    title:
                        null != (n = null != (t = null == m ? void 0 : m.name) ? t : null == i ? void 0 : i.name)
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
                        users: p,
                        size: 24,
                        max: 3,
                        className: x.__invalid_userSummaryContainer,
                    }),
                    (0, r.jsx)(O.Z, {
                        applicationId: o,
                        location: h.location,
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
        ? (0, r.jsx)(I.Z, {
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
            onJumpToChannel: _,
            onToggleHeight: p,
            isExpanded: h,
            hideExpandedButton: m,
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
                                onJumpToChannel: _,
                                preventIdleComponent: E.Z,
                            }),
                            (0, r.jsxs)("div", {
                                className: x.pipHeaderButtonsRight,
                                children: [
                                    m
                                        ? null
                                        : (0, r.jsx)(M, {
                                              isExpanded: h,
                                              onClick: p,
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
