n.d(t, {
    Ds: () => j,
    YB: () => M,
    of: () => U,
    q5: () => k
});
var r = n(255367);
n(73800);
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
    S = n(25827),
    T = n(131951),
    A = n(636449),
    N = n(884338),
    C = n(349619),
    R = n(981631),
    P = n(231338),
    w = n(388032),
    D = n(816083),
    L = n(992955);
function x(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(y.Z, {
        iconClassName: a()(D.arrowIcon, { [D.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: s.CJ0,
        label: n ? w.intl.string(w.t['2TiKgY']) : w.intl.string(w.t.oN8bqa)
    });
}
function M(e) {
    var t, n, i;
    let { channel: a, applicationId: s, onMouseDown: y, onMouseMove: I, onMouseLeave: N, onJumpToChannel: w, idle: x, selectedParticipant: M, embeddedActivity: k } = e,
        j = (0, c.bp)() === R.IlC.POPOUT,
        U = (0, o.e7)([T.Z], () => T.Z.isVideoEnabled()),
        G = (0, o.e7)([T.Z], () => Object.values(T.Z.getVideoDevices())[0]),
        B = !1 === (null == (t = null == G ? void 0 : G.disabled) || t),
        V = (0, d.Z)([s])[0],
        F = (0, m.Z)(a),
        { parentAnalyticsLocation: Z } = (0, u.ZP)(),
        H = (e) => {
            (0, _.v)(Z, _.d.CAMERA, e), l.Z.setVideoEnabled(e);
        },
        Y = () => {
            B ? H(!0) : (0, g.Z)();
        },
        W = () => {
            (0, _.v)(Z, _.d.POPOUT, !0), null != a && (0, C.Z)(() => h.hP(a));
        };
    return (0, r.jsxs)('div', {
        className: L.videoControls,
        onMouseMove: I,
        onMouseDown: y,
        onMouseLeave: N,
        children: [
            (0, r.jsx)('div', {
                className: L.topControls,
                children: (0, r.jsx)(b.r, {
                    idle: x,
                    title: null != (i = null != (n = null == V ? void 0 : V.name) ? n : null == a ? void 0 : a.name) ? i : '',
                    onJumpToChannel: w,
                    preventIdleComponent: E.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, r.jsxs)(p.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: '50%',
                        align: p.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(S.C, {
                                className: D.leftPipIcon,
                                enabled: U,
                                cameraUnavailable: !B,
                                hasPermission: F,
                                onChange: H,
                                onCameraUnavailable: Y
                            }),
                            null != a &&
                                (0, r.jsx)(E.Z, {
                                    children: (0, r.jsx)(f.Z, {
                                        channelId: a.id,
                                        guildId: a.getGuildId(),
                                        className: L.__invalid_leftTrayIcon,
                                        participant: M,
                                        compact: !0
                                    })
                                })
                        ]
                    }),
                    (0, r.jsxs)(p.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: p.Z.Justify.END,
                        basis: '50%',
                        align: p.Z.Align.CENTER,
                        children: [
                            j || (0, A.R)()
                                ? null
                                : (0, r.jsx)(v.Z, {
                                      className: D.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: W,
                                      onClosePopout: P.Vq
                                  }),
                            (0, r.jsx)(O.Z, {
                                applicationId: s,
                                location: k.location,
                                className: D.rightPipIcon
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function k(e) {
    var t, n;
    let { channel: i, applicationId: o, onMouseDown: l, onMouseMove: c, onMouseLeave: u, onJumpToChannel: f, idle: _, users: p, embeddedActivity: h } = e,
        m = (0, d.Z)([o])[0];
    return (0, r.jsxs)(s.P3F, {
        className: a()(L.videoControls, L.videoControlsTextActivity),
        onMouseMove: c,
        onMouseDown: l,
        onMouseLeave: u,
        onDoubleClick: f,
        children: [
            (0, r.jsx)('div', {
                className: L.topControls,
                children: (0, r.jsx)(b.r, {
                    idle: _,
                    title: null != (n = null != (t = null == m ? void 0 : m.name) ? t : null == i ? void 0 : i.name) ? n : '',
                    onJumpToChannel: f,
                    preventIdleComponent: E.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, r.jsx)(N.Z, {
                        renderIcon: !1,
                        users: p,
                        size: 24,
                        max: 3,
                        className: D.__invalid_userSummaryContainer
                    }),
                    (0, r.jsx)(O.Z, {
                        applicationId: o,
                        location: h.location,
                        iconClassName: D.leaveActivityIcon,
                        isActive: !0
                    })
                ]
            })
        ]
    });
}
function j(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i
        ? (0, r.jsx)(I.Z, {
              channelId: t,
              isParticipantsOpen: n,
              className: D.participantsButton
          })
        : null;
}
function U(e) {
    var t, n;
    let { onMouseDown: i, onMouseMove: o, onMouseLeave: l, showControls: c, applicationId: u, channel: f, onJumpToChannel: _, onToggleHeight: p, isExpanded: h, hideExpandedButton: m, embeddedActivity: g } = e,
        y = (0, d.Z)([u])[0];
    return (0, r.jsx)('div', {
        className: D.pipHeader,
        onMouseMove: o,
        onMouseDown: i,
        onMouseLeave: l,
        children: (0, r.jsxs)('div', {
            className: a()(L.topControls, D.pipHeaderContent, { [D.pipHeaderContentOpen]: c }),
            children: [
                !c &&
                    (0, r.jsx)(s.xhG, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: D.menuIcon
                    }),
                c &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(b.r, {
                                idle: !c,
                                title: null != (n = null != (t = null == y ? void 0 : y.name) ? t : null == f ? void 0 : f.name) ? n : '',
                                onJumpToChannel: _,
                                preventIdleComponent: E.Z
                            }),
                            (0, r.jsxs)('div', {
                                className: D.pipHeaderButtonsRight,
                                children: [
                                    m
                                        ? null
                                        : (0, r.jsx)(x, {
                                              isExpanded: h,
                                              onClick: p
                                          }),
                                    (0, r.jsx)(O.Z, {
                                        applicationId: u,
                                        location: g.location,
                                        iconClassName: D.leaveActivityIcon
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
