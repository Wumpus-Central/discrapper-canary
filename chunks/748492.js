n.d(t, {
    Ds: () => j,
    YB: () => M,
    of: () => U,
    q5: () => k
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(846027),
    c = n(40851),
    u = n(906732),
    d = n(835473),
    f = n(221888),
    _ = n(522651),
    p = n(600164),
    h = n(788983),
    g = n(189771),
    m = n(560688),
    E = n(618158),
    v = n(922745),
    b = n(871499),
    y = n(402113),
    O = n(800965),
    S = n(157813),
    I = n(25827),
    T = n(131951),
    N = n(636449),
    A = n(884338),
    C = n(349619),
    R = n(981631),
    P = n(231338),
    D = n(388032),
    w = n(49039),
    L = n(54329);
function x(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(b.Z, {
        iconClassName: o()(w.arrowIcon, { [w.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: s.CJ0,
        label: n ? D.NW.string(D.t['2TiKgY']) : D.NW.string(D.t.oN8bqa)
    });
}
function M(e) {
    var t, n;
    let { channel: i, applicationId: o, onMouseDown: s, onMouseMove: b, onMouseLeave: S, onJumpToChannel: A, idle: D, selectedParticipant: x, embeddedActivity: M } = e,
        k = (0, c.bp)() === R.IlC.POPOUT,
        j = (0, a.e7)([T.Z], () => T.Z.isVideoEnabled()),
        U = (0, a.e7)([T.Z], () => Object.values(T.Z.getVideoDevices())[0]),
        G = !1 === (null === (t = null == U ? void 0 : U.disabled) || void 0 === t || t),
        B = (0, d.Z)([o])[0],
        V = (0, g.Z)(i),
        { parentAnalyticsLocation: F } = (0, u.ZP)(),
        Z = (e) => {
            (0, _.v)(F, _.d.CAMERA, e), l.Z.setVideoEnabled(e);
        },
        H = () => {
            G ? Z(!0) : (0, m.Z)();
        },
        W = () => {
            (0, _.v)(F, _.d.POPOUT, !0), (0, C.Z)(() => h.hP(i));
        };
    return (0, r.jsxs)('div', {
        className: L.videoControls,
        onMouseMove: b,
        onMouseDown: s,
        onMouseLeave: S,
        children: [
            (0, r.jsx)('div', {
                className: L.topControls,
                children: (0, r.jsx)(v.r, {
                    idle: D,
                    title: null !== (n = null == B ? void 0 : B.name) && void 0 !== n ? n : i.name,
                    onJumpToChannel: A,
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
                            (0, r.jsx)(I.C, {
                                className: w.leftPipIcon,
                                enabled: j,
                                cameraUnavailable: !G,
                                hasPermission: V,
                                onChange: Z,
                                onCameraUnavailable: H
                            }),
                            (0, r.jsx)(E.Z, {
                                children: (0, r.jsx)(f.Z, {
                                    channelId: i.id,
                                    guildId: i.getGuildId(),
                                    className: L.__invalid_leftTrayIcon,
                                    participant: x,
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
                            k || (0, N.R)()
                                ? null
                                : (0, r.jsx)(O.Z, {
                                      className: w.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: W,
                                      onClosePopout: P.Vq
                                  }),
                            (0, r.jsx)(y.Z, {
                                applicationId: o,
                                location: M.location,
                                className: w.rightPipIcon
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function k(e) {
    var t;
    let { channel: n, applicationId: i, onMouseDown: a, onMouseMove: l, onMouseLeave: c, onJumpToChannel: u, idle: f, users: _, embeddedActivity: p } = e,
        h = (0, d.Z)([i])[0];
    return (0, r.jsxs)(s.P3F, {
        className: o()(L.videoControls, L.videoControlsTextActivity),
        onMouseMove: l,
        onMouseDown: a,
        onMouseLeave: c,
        onDoubleClick: u,
        children: [
            (0, r.jsx)('div', {
                className: o()(L.topControls),
                children: (0, r.jsx)(v.r, {
                    idle: f,
                    title: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : n.name,
                    onJumpToChannel: u,
                    preventIdleComponent: E.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, r.jsx)(A.Z, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: w.__invalid_userSummaryContainer
                    }),
                    (0, r.jsx)(y.Z, {
                        applicationId: i,
                        location: p.location,
                        iconClassName: w.leaveActivityIcon,
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
        ? (0, r.jsx)(S.Z, {
              channelId: t,
              isParticipantsOpen: n,
              className: w.participantsButton
          })
        : null;
}
function U(e) {
    var t;
    let { onMouseDown: n, onMouseMove: i, onMouseLeave: a, showControls: l, applicationId: c, channel: u, onJumpToChannel: f, onToggleHeight: _, isExpanded: p, hideExpandedButton: h, embeddedActivity: g } = e,
        m = (0, d.Z)([c])[0];
    return (0, r.jsx)('div', {
        className: w.pipHeader,
        onMouseMove: i,
        onMouseDown: n,
        onMouseLeave: a,
        children: (0, r.jsxs)('div', {
            className: o()(L.topControls, w.pipHeaderContent, { [w.pipHeaderContentOpen]: l }),
            children: [
                !l &&
                    (0, r.jsx)(s.xhG, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: w.menuIcon
                    }),
                l &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(v.r, {
                                idle: !l,
                                title: null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : u.name,
                                onJumpToChannel: f,
                                preventIdleComponent: E.Z
                            }),
                            (0, r.jsxs)('div', {
                                className: w.pipHeaderButtonsRight,
                                children: [
                                    h
                                        ? null
                                        : (0, r.jsx)(x, {
                                              isExpanded: p,
                                              onClick: _
                                          }),
                                    (0, r.jsx)(y.Z, {
                                        applicationId: c,
                                        location: g.location,
                                        iconClassName: w.leaveActivityIcon
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
