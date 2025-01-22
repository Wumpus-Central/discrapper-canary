r.d(n, {
    Ds: function () {
        return k;
    },
    YB: function () {
        return P;
    },
    of: function () {
        return U;
    },
    q5: function () {
        return M;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(846027),
    c = r(40851),
    d = r(835473),
    f = r(221888),
    p = r(600164),
    h = r(788983),
    _ = r(189771),
    m = r(560688),
    g = r(618158),
    E = r(922745),
    v = r(871499),
    y = r(402113),
    b = r(800965),
    I = r(157813),
    T = r(25827),
    S = r(131951),
    A = r(636449),
    C = r(884338),
    N = r(349619),
    R = r(981631),
    O = r(231338),
    D = r(388032),
    x = r(953518),
    L = r(880397);
function w(e) {
    let { onClick: n, isExpanded: r } = e;
    return (0, i.jsx)(v.Z, {
        iconClassName: o()(x.arrowIcon, { [x.arrowIconExpanded]: r }),
        onClick: n,
        iconComponent: l.ChevronSmallDownIcon,
        label: r ? D.intl.string(D.t['2TiKgY']) : D.intl.string(D.t.oN8bqa)
    });
}
function P(e) {
    var n, r;
    let { channel: a, applicationId: o, onMouseDown: l, onMouseMove: v, onMouseLeave: I, onJumpToChannel: C, idle: D, selectedParticipant: w, embeddedActivity: P } = e,
        M = (0, c.bp)() === R.IlC.POPOUT,
        k = (0, s.e7)([S.Z], () => S.Z.isVideoEnabled()),
        U = (0, s.e7)([S.Z], () => Object.values(S.Z.getVideoDevices())[0]),
        B = !1 === (null === (n = null == U ? void 0 : U.disabled) || void 0 === n || n),
        G = (0, d.Z)([o])[0],
        Z = (0, _.Z)(a),
        F = (e) => {
            u.Z.setVideoEnabled(e);
        },
        V = () => {
            B ? F(!0) : (0, m.Z)();
        },
        j = () => {
            (0, N.Z)(() => h.hP(a));
        };
    return (0, i.jsxs)('div', {
        className: L.videoControls,
        onMouseMove: v,
        onMouseDown: l,
        onMouseLeave: I,
        children: [
            (0, i.jsx)('div', {
                className: L.topControls,
                children: (0, i.jsx)(E.r, {
                    idle: D,
                    title: null !== (r = null == G ? void 0 : G.name) && void 0 !== r ? r : a.name,
                    onJumpToChannel: C,
                    preventIdleComponent: g.Z
                })
            }),
            (0, i.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, i.jsxs)(p.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: '50%',
                        align: p.Z.Align.CENTER,
                        children: [
                            (0, i.jsx)(T.C, {
                                className: x.leftPipIcon,
                                enabled: k,
                                cameraUnavailable: !B,
                                hasPermission: Z,
                                onChange: F,
                                onCameraUnavailable: V
                            }),
                            (0, i.jsx)(g.Z, {
                                children: (0, i.jsx)(f.Z, {
                                    channelId: a.id,
                                    guildId: a.getGuildId(),
                                    className: L.__invalid_leftTrayIcon,
                                    participant: w,
                                    compact: !0
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(p.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: p.Z.Justify.END,
                        basis: '50%',
                        align: p.Z.Align.CENTER,
                        children: [
                            M || (0, A.R)()
                                ? null
                                : (0, i.jsx)(b.Z, {
                                      className: x.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: j,
                                      onClosePopout: O.Vq
                                  }),
                            (0, i.jsx)(y.Z, {
                                applicationId: o,
                                location: P.location,
                                className: x.rightPipIcon
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function M(e) {
    var n;
    let { channel: r, applicationId: a, onMouseDown: s, onMouseMove: u, onMouseLeave: c, onJumpToChannel: f, idle: p, users: h, embeddedActivity: _ } = e,
        m = (0, d.Z)([a])[0];
    return (0, i.jsxs)(l.Clickable, {
        className: o()(L.videoControls, L.videoControlsTextActivity),
        onMouseMove: u,
        onMouseDown: s,
        onMouseLeave: c,
        onDoubleClick: f,
        children: [
            (0, i.jsx)('div', {
                className: o()(L.topControls),
                children: (0, i.jsx)(E.r, {
                    idle: p,
                    title: null !== (n = null == m ? void 0 : m.name) && void 0 !== n ? n : r.name,
                    onJumpToChannel: f,
                    preventIdleComponent: g.Z
                })
            }),
            (0, i.jsxs)('div', {
                className: L.bottomControls,
                children: [
                    (0, i.jsx)(C.Z, {
                        renderIcon: !1,
                        users: h,
                        size: 24,
                        max: 3,
                        className: x.__invalid_userSummaryContainer
                    }),
                    (0, i.jsx)(y.Z, {
                        applicationId: a,
                        location: _.location,
                        iconClassName: x.leaveActivityIcon,
                        isActive: !0
                    })
                ]
            })
        ]
    });
}
function k(e) {
    let { channelId: n, participantsOpen: r, showToggleParticipants: a } = e;
    return a
        ? (0, i.jsx)(I.Z, {
              channelId: n,
              isParticipantsOpen: r,
              className: x.participantsButton
          })
        : null;
}
function U(e) {
    var n;
    let { onMouseDown: r, onMouseMove: a, onMouseLeave: s, showControls: u, applicationId: c, channel: f, onJumpToChannel: p, onToggleHeight: h, isExpanded: _, hideExpandedButton: m, embeddedActivity: v } = e,
        b = (0, d.Z)([c])[0];
    return (0, i.jsx)('div', {
        className: x.pipHeader,
        onMouseMove: a,
        onMouseDown: r,
        onMouseLeave: s,
        children: (0, i.jsxs)('div', {
            className: o()(L.topControls, x.pipHeaderContent, { [x.pipHeaderContentOpen]: u }),
            children: [
                !u &&
                    (0, i.jsx)(l.MoreHorizontalIcon, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: x.menuIcon
                    }),
                u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(E.r, {
                                idle: !u,
                                title: null !== (n = null == b ? void 0 : b.name) && void 0 !== n ? n : f.name,
                                onJumpToChannel: p,
                                preventIdleComponent: g.Z
                            }),
                            (0, i.jsxs)('div', {
                                className: x.pipHeaderButtonsRight,
                                children: [
                                    m
                                        ? null
                                        : (0, i.jsx)(w, {
                                              isExpanded: _,
                                              onClick: h
                                          }),
                                    (0, i.jsx)(y.Z, {
                                        applicationId: c,
                                        location: v.location,
                                        iconClassName: x.leaveActivityIcon
                                    })
                                ]
                            })
                        ]
                    })
            ]
        })
    });
}
