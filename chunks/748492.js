n.d(t, {
    Ds: () => G,
    YB: () => k,
    of: () => B,
    q5: () => U,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(846027),
    c = n(40851),
    u = n(906732),
    d = n(835473),
    f = n(221888),
    _ = n(522651),
    p = n(600164),
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
    N = n(729200),
    R = n(884338),
    P = n(617552),
    w = n(981631),
    D = n(231338),
    x = n(388032),
    L = n(702952),
    j = n(186880);
function M(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(y.Z, {
        iconClassName: a()(L.arrowIcon, { [L.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: s.CJ0,
        label: n ? x.intl.string(x.t["2TiKgY"]) : x.intl.string(x.t.oN8bqa),
    });
}
function k(e) {
    var t, n, i;
    let {
            channel: a,
            applicationId: s,
            onMouseDown: y,
            onMouseMove: I,
            onMouseLeave: R,
            onJumpToChannel: x,
            idle: M,
            selectedParticipant: k,
            embeddedActivity: U,
        } = e,
        G = (0, c.bp)() === w.IlC.POPOUT,
        B = (0, o.e7)([S.Z], () => S.Z.isVideoEnabled()),
        Z = (0, o.e7)([S.Z], () => Object.values(S.Z.getVideoDevices())[0]),
        F = !1 === (null == (t = null == Z ? void 0 : Z.disabled) || t),
        V = (0, d.Z)([s])[0],
        H = (0, m.Z)(a),
        { parentAnalyticsLocation: Y } = (0, u.ZP)(),
        W = (e) => {
            (0, _.v)(Y, _.d.CAMERA, e), l.Z.setVideoEnabled(e);
        },
        K = () => {
            F ? W(!0) : (0, g.Z)();
        },
        z = () => {
            (0, _.v)(Y, _.d.POPOUT, !0),
                null != a &&
                    (0, P.Z)({
                        onConfirm: async () => {
                            (0, N.g)() && (await (0, C.nJ)(s, a.id)), h.hP(a);
                        },
                    });
        };
    return (0, r.jsxs)("div", {
        className: j.videoControls,
        onMouseMove: I,
        onMouseDown: y,
        onMouseLeave: R,
        children: [
            (0, r.jsx)("div", {
                className: j.topControls,
                children: (0, r.jsx)(b.r, {
                    idle: M,
                    title:
                        null != (i = null != (n = null == V ? void 0 : V.name) ? n : null == a ? void 0 : a.name)
                            ? i
                            : "",
                    onJumpToChannel: x,
                    preventIdleComponent: E.Z,
                }),
            }),
            (0, r.jsxs)("div", {
                className: j.bottomControls,
                children: [
                    (0, r.jsxs)(p.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: p.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(T.C, {
                                className: L.leftPipIcon,
                                enabled: B,
                                cameraUnavailable: !F,
                                hasPermission: H,
                                onChange: W,
                                onCameraUnavailable: K,
                            }),
                            null != a &&
                                (0, r.jsx)(E.Z, {
                                    children: (0, r.jsx)(f.Z, {
                                        channelId: a.id,
                                        guildId: a.getGuildId(),
                                        className: j.__invalid_leftTrayIcon,
                                        participant: k,
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
                            G || (0, A.R)()
                                ? null
                                : (0, r.jsx)(v.Z, {
                                      className: L.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: z,
                                      onClosePopout: D.Vq,
                                  }),
                            (0, r.jsx)(O.Z, {
                                applicationId: s,
                                location: U.location,
                                className: L.rightPipIcon,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function U(e) {
    var t, n;
    let {
            channel: i,
            applicationId: o,
            onMouseDown: l,
            onMouseMove: c,
            onMouseLeave: u,
            onJumpToChannel: f,
            idle: _,
            users: p,
            embeddedActivity: h,
        } = e,
        m = (0, d.Z)([o])[0];
    return (0, r.jsxs)(s.P3F, {
        className: a()(j.videoControls, j.videoControlsTextActivity),
        onMouseMove: c,
        onMouseDown: l,
        onMouseLeave: u,
        onDoubleClick: f,
        children: [
            (0, r.jsx)("div", {
                className: j.topControls,
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
                className: j.bottomControls,
                children: [
                    (0, r.jsx)(R.ZP, {
                        renderIcon: !1,
                        users: p,
                        size: 24,
                        max: 3,
                        className: L.__invalid_userSummaryContainer,
                    }),
                    (0, r.jsx)(O.Z, {
                        applicationId: o,
                        location: h.location,
                        iconClassName: L.leaveActivityIcon,
                        isActive: !0,
                    }),
                ],
            }),
        ],
    });
}
function G(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i
        ? (0, r.jsx)(I.Z, {
              channelId: t,
              isParticipantsOpen: n,
              className: L.participantsButton,
          })
        : null;
}
function B(e) {
    var t, n;
    let {
            onMouseDown: i,
            onMouseMove: o,
            onMouseLeave: l,
            showControls: c,
            applicationId: u,
            channel: f,
            onJumpToChannel: _,
            onToggleHeight: p,
            isExpanded: h,
            hideExpandedButton: m,
            embeddedActivity: g,
        } = e,
        y = (0, d.Z)([u])[0];
    return (0, r.jsx)("div", {
        className: L.pipHeader,
        onMouseMove: o,
        onMouseDown: i,
        onMouseLeave: l,
        children: (0, r.jsxs)("div", {
            className: a()(j.topControls, L.pipHeaderContent, { [L.pipHeaderContentOpen]: c }),
            children: [
                !c &&
                    (0, r.jsx)(s.xhG, {
                        size: "xxs",
                        color: "currentColor",
                        className: L.menuIcon,
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
                                className: L.pipHeaderButtonsRight,
                                children: [
                                    m
                                        ? null
                                        : (0, r.jsx)(M, {
                                              isExpanded: h,
                                              onClick: p,
                                          }),
                                    (0, r.jsx)(O.Z, {
                                        applicationId: u,
                                        location: g.location,
                                        iconClassName: L.leaveActivityIcon,
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
