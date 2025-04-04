n.d(t, {
    Ds: () => U,
    YB: () => k,
    of: () => G,
    q5: () => j
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(252258),
    s = n(442837),
    l = n(481060),
    c = n(846027),
    u = n(40851),
    d = n(906732),
    f = n(835473),
    _ = n(221888),
    p = n(522651),
    h = n(600164),
    m = n(788983),
    g = n(189771),
    E = n(560688),
    b = n(618158),
    y = n(922745),
    v = n(871499),
    O = n(402113),
    I = n(800965),
    S = n(157813),
    T = n(25827),
    N = n(131951),
    A = n(636449),
    C = n(884338),
    R = n(349619),
    P = n(981631),
    w = n(231338),
    D = n(388032),
    L = n(816083),
    x = n(992955);
function M(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, r.jsx)(v.Z, {
        iconClassName: o()(L.arrowIcon, { [L.arrowIconExpanded]: n }),
        onClick: t,
        iconComponent: l.CJ0,
        label: n ? D.NW.string(D.t['2TiKgY']) : D.NW.string(D.t.oN8bqa)
    });
}
function k(e) {
    var t, n;
    let { channel: i, applicationId: o, onMouseDown: l, onMouseMove: v, onMouseLeave: S, onJumpToChannel: C, idle: D, selectedParticipant: M, embeddedActivity: k } = e,
        j = (0, u.bp)() === P.IlC.POPOUT,
        U = (0, s.e7)([N.Z], () => N.Z.isVideoEnabled()),
        G = (0, s.e7)([N.Z], () => Object.values(N.Z.getVideoDevices())[0]),
        B = !1 === (null == (t = null == G ? void 0 : G.disabled) || t),
        F = (0, f.Z)([o])[0],
        V = (0, g.Z)(i),
        { parentAnalyticsLocation: Z } = (0, d.ZP)(),
        H = (e) => {
            (0, p.v)(Z, p.d.CAMERA, e), c.Z.setVideoEnabled(e);
        },
        W = () => {
            B ? H(!0) : (0, E.Z)();
        },
        Y = () => {
            (0, p.v)(Z, p.d.POPOUT, !0), (0, R.Z)(() => m.hP(i));
        };
    return (0, r.jsxs)('div', {
        className: x.videoControls,
        onMouseMove: v,
        onMouseDown: l,
        onMouseLeave: S,
        children: [
            (0, r.jsx)('div', {
                className: x.topControls,
                children: (0, r.jsx)(y.r, {
                    idle: D,
                    title: null != (n = null == F ? void 0 : F.name) ? n : i.name,
                    onJumpToChannel: C,
                    preventIdleComponent: b.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: x.bottomControls,
                children: [
                    (0, r.jsxs)(h.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: '50%',
                        align: h.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(T.C, {
                                className: L.leftPipIcon,
                                enabled: U,
                                cameraUnavailable: !B,
                                hasPermission: V,
                                onChange: H,
                                onCameraUnavailable: W
                            }),
                            (0, r.jsx)(b.Z, {
                                children: (0, r.jsx)(_.Z, {
                                    channelId: i.id,
                                    guildId: i.getGuildId(),
                                    className: x.__invalid_leftTrayIcon,
                                    participant: M,
                                    compact: !0
                                })
                            })
                        ]
                    }),
                    (0, r.jsxs)(h.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: h.Z.Justify.END,
                        basis: '50%',
                        align: h.Z.Align.CENTER,
                        children: [
                            j || (0, A.R)({ isContextless: k.location.kind === a.E.CONTEXTLESS })
                                ? null
                                : (0, r.jsx)(I.Z, {
                                      className: L.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: Y,
                                      onClosePopout: w.Vq
                                  }),
                            (0, r.jsx)(O.Z, {
                                applicationId: o,
                                location: k.location,
                                className: L.rightPipIcon
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function j(e) {
    var t;
    let { channel: n, applicationId: i, onMouseDown: a, onMouseMove: s, onMouseLeave: c, onJumpToChannel: u, idle: d, users: _, embeddedActivity: p } = e,
        h = (0, f.Z)([i])[0];
    return (0, r.jsxs)(l.P3F, {
        className: o()(x.videoControls, x.videoControlsTextActivity),
        onMouseMove: s,
        onMouseDown: a,
        onMouseLeave: c,
        onDoubleClick: u,
        children: [
            (0, r.jsx)('div', {
                className: x.topControls,
                children: (0, r.jsx)(y.r, {
                    idle: d,
                    title: null != (t = null == h ? void 0 : h.name) ? t : n.name,
                    onJumpToChannel: u,
                    preventIdleComponent: b.Z
                })
            }),
            (0, r.jsxs)('div', {
                className: x.bottomControls,
                children: [
                    (0, r.jsx)(C.Z, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: L.__invalid_userSummaryContainer
                    }),
                    (0, r.jsx)(O.Z, {
                        applicationId: i,
                        location: p.location,
                        iconClassName: L.leaveActivityIcon,
                        isActive: !0
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i
        ? (0, r.jsx)(S.Z, {
              channelId: t,
              isParticipantsOpen: n,
              className: L.participantsButton
          })
        : null;
}
function G(e) {
    var t;
    let { onMouseDown: n, onMouseMove: i, onMouseLeave: a, showControls: s, applicationId: c, channel: u, onJumpToChannel: d, onToggleHeight: _, isExpanded: p, hideExpandedButton: h, embeddedActivity: m } = e,
        g = (0, f.Z)([c])[0];
    return (0, r.jsx)('div', {
        className: L.pipHeader,
        onMouseMove: i,
        onMouseDown: n,
        onMouseLeave: a,
        children: (0, r.jsxs)('div', {
            className: o()(x.topControls, L.pipHeaderContent, { [L.pipHeaderContentOpen]: s }),
            children: [
                !s &&
                    (0, r.jsx)(l.xhG, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: L.menuIcon
                    }),
                s &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(y.r, {
                                idle: !s,
                                title: null != (t = null == g ? void 0 : g.name) ? t : u.name,
                                onJumpToChannel: d,
                                preventIdleComponent: b.Z
                            }),
                            (0, r.jsxs)('div', {
                                className: L.pipHeaderButtonsRight,
                                children: [
                                    h
                                        ? null
                                        : (0, r.jsx)(M, {
                                              isExpanded: p,
                                              onClick: _
                                          }),
                                    (0, r.jsx)(O.Z, {
                                        applicationId: c,
                                        location: m.location,
                                        iconClassName: L.leaveActivityIcon
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
