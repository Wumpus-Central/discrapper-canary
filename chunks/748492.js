n.d(t, {
    Ds: () => M,
    YB: () => P,
    of: () => k,
    q5: () => w
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(846027),
    u = n(40851),
    c = n(835473),
    d = n(221888),
    f = n(600164),
    _ = n(788983),
    p = n(189771),
    h = n(560688),
    m = n(618158),
    g = n(922745),
    E = n(871499),
    v = n(402113),
    y = n(800965),
    I = n(157813),
    T = n(25827),
    b = n(131951),
    S = n(636449),
    A = n(884338),
    N = n(349619),
    C = n(981631),
    R = n(231338),
    O = n(388032),
    D = n(924110),
    L = n(48480);
function x(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, i.jsx)(E.Z, {
        iconClassName: a()(D.arrowIcon, { [D.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: o.CJ0,
        label: n ? O.intl.string(O.t['2TiKgY']) : O.intl.string(O.t.oN8bqa)
    });
}
function P(e) {
    var t, n;
    let { channel: r, applicationId: a, onMouseDown: o, onMouseMove: E, onMouseLeave: I, onJumpToChannel: A, idle: O, selectedParticipant: x, embeddedActivity: P } = e,
        w = (0, u.bp)() === C.IlC.POPOUT,
        M = (0, s.e7)([b.Z], () => b.Z.isVideoEnabled()),
        k = (0, s.e7)([b.Z], () => Object.values(b.Z.getVideoDevices())[0]),
        U = !1 === (null === (t = null == k ? void 0 : k.disabled) || void 0 === t || t),
        G = (0, c.Z)([a])[0],
        B = (0, p.Z)(r),
        Z = (e) => {
            l.Z.setVideoEnabled(e);
        },
        F = () => {
            U ? Z(!0) : (0, h.Z)();
        },
        V = () => {
            (0, N.Z)(() => _.hP(r));
        };
    return (0, i.jsxs)('div', {
        className: L.videoControls,
        onMouseMove: E,
        onMouseDown: o,
        onMouseLeave: I,
        children: [
            (0, i.jsx)('div', {
                className: L.topControls,
                children: (0, i.jsx)(g.r, {
                    idle: O,
                    title: null !== (n = null == G ? void 0 : G.name) && void 0 !== n ? n : r.name,
                    onJumpToChannel: A,
                    preventIdleComponent: m.Z
                })
            }),
            (0, i.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, i.jsxs)(f.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: '50%',
                        align: f.Z.Align.CENTER,
                        children: [
                            (0, i.jsx)(T.C, {
                                className: D.leftPipIcon,
                                enabled: M,
                                cameraUnavailable: !U,
                                hasPermission: B,
                                onChange: Z,
                                onCameraUnavailable: F
                            }),
                            (0, i.jsx)(m.Z, {
                                children: (0, i.jsx)(d.Z, {
                                    channelId: r.id,
                                    guildId: r.getGuildId(),
                                    className: L.__invalid_leftTrayIcon,
                                    participant: x,
                                    compact: !0
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(f.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: f.Z.Justify.END,
                        basis: '50%',
                        align: f.Z.Align.CENTER,
                        children: [
                            w || (0, S.R)()
                                ? null
                                : (0, i.jsx)(y.Z, {
                                      className: D.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: V,
                                      onClosePopout: R.Vq
                                  }),
                            (0, i.jsx)(v.Z, {
                                applicationId: a,
                                location: P.location,
                                className: D.rightPipIcon
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function w(e) {
    var t;
    let { channel: n, applicationId: r, onMouseDown: s, onMouseMove: l, onMouseLeave: u, onJumpToChannel: d, idle: f, users: _, embeddedActivity: p } = e,
        h = (0, c.Z)([r])[0];
    return (0, i.jsxs)(o.P3F, {
        className: a()(L.videoControls, L.videoControlsTextActivity),
        onMouseMove: l,
        onMouseDown: s,
        onMouseLeave: u,
        onDoubleClick: d,
        children: [
            (0, i.jsx)('div', {
                className: a()(L.topControls),
                children: (0, i.jsx)(g.r, {
                    idle: f,
                    title: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : n.name,
                    onJumpToChannel: d,
                    preventIdleComponent: m.Z
                })
            }),
            (0, i.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, i.jsx)(A.Z, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: D.__invalid_userSummaryContainer
                    }),
                    (0, i.jsx)(v.Z, {
                        applicationId: r,
                        location: p.location,
                        iconClassName: D.leaveActivityIcon,
                        isActive: !0
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: r } = e;
    return r
        ? (0, i.jsx)(I.Z, {
              channelId: t,
              isParticipantsOpen: n,
              className: D.participantsButton
          })
        : null;
}
function k(e) {
    var t;
    let { onMouseDown: n, onMouseMove: r, onMouseLeave: s, showControls: l, applicationId: u, channel: d, onJumpToChannel: f, onToggleHeight: _, isExpanded: p, hideExpandedButton: h, embeddedActivity: E } = e,
        y = (0, c.Z)([u])[0];
    return (0, i.jsx)('div', {
        className: D.pipHeader,
        onMouseMove: r,
        onMouseDown: n,
        onMouseLeave: s,
        children: (0, i.jsxs)('div', {
            className: a()(L.topControls, D.pipHeaderContent, { [D.pipHeaderContentOpen]: l }),
            children: [
                !l &&
                    (0, i.jsx)(o.xhG, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: D.menuIcon
                    }),
                l &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(g.r, {
                                idle: !l,
                                title: null !== (t = null == y ? void 0 : y.name) && void 0 !== t ? t : d.name,
                                onJumpToChannel: f,
                                preventIdleComponent: m.Z
                            }),
                            (0, i.jsxs)('div', {
                                className: D.pipHeaderButtonsRight,
                                children: [
                                    h
                                        ? null
                                        : (0, i.jsx)(x, {
                                              isExpanded: p,
                                              onClick: _
                                          }),
                                    (0, i.jsx)(v.Z, {
                                        applicationId: u,
                                        location: E.location,
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
