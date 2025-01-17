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
    s = r.n(a),
    o = r(442837),
    l = r(481060),
    u = r(846027),
    c = r(40851),
    d = r(835473),
    f = r(221888),
    _ = r(600164),
    h = r(788983),
    p = r(189771),
    m = r(560688),
    g = r(618158),
    E = r(922745),
    v = r(871499),
    I = r(402113),
    T = r(800965),
    b = r(157813),
    y = r(25827),
    S = r(131951),
    A = r(636449),
    N = r(884338),
    C = r(349619),
    R = r(981631),
    O = r(231338),
    D = r(388032),
    L = r(953518),
    x = r(880397);
function w(e) {
    let { onClick: n, isExpanded: r } = e;
    return (0, i.jsx)(v.Z, {
        iconClassName: s()(L.arrowIcon, { [L.arrowIconExpanded]: r }),
        onClick: n,
        iconComponent: l.ChevronSmallDownIcon,
        label: r ? D.intl.string(D.t['2TiKgY']) : D.intl.string(D.t.oN8bqa)
    });
}
function P(e) {
    var n, r;
    let { channel: a, applicationId: s, onMouseDown: l, onMouseMove: v, onMouseLeave: b, onJumpToChannel: N, idle: D, selectedParticipant: w, embeddedActivity: P } = e,
        M = (0, c.bp)() === R.IlC.POPOUT,
        k = (0, o.e7)([S.Z], () => S.Z.isVideoEnabled()),
        U = (0, o.e7)([S.Z], () => Object.values(S.Z.getVideoDevices())[0]),
        B = !1 === (null === (n = null == U ? void 0 : U.disabled) || void 0 === n || n),
        G = (0, d.Z)([s])[0],
        Z = (0, p.Z)(a),
        F = (e) => {
            u.Z.setVideoEnabled(e);
        },
        V = () => {
            B ? F(!0) : (0, m.Z)();
        },
        j = () => {
            (0, C.Z)(() => h.hP(a));
        };
    return (0, i.jsxs)('div', {
        className: x.videoControls,
        onMouseMove: v,
        onMouseDown: l,
        onMouseLeave: b,
        children: [
            (0, i.jsx)('div', {
                className: x.topControls,
                children: (0, i.jsx)(E.r, {
                    idle: D,
                    title: null !== (r = null == G ? void 0 : G.name) && void 0 !== r ? r : a.name,
                    onJumpToChannel: N,
                    preventIdleComponent: g.Z
                })
            }),
            (0, i.jsxs)('div', {
                className: x.bottomControls,
                children: [
                    (0, i.jsxs)(_.Z, {
                        grow: 0,
                        shrink: 1,
                        basis: '50%',
                        align: _.Z.Align.CENTER,
                        children: [
                            (0, i.jsx)(y.C, {
                                className: L.leftPipIcon,
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
                                    className: x.__invalid_leftTrayIcon,
                                    participant: w,
                                    compact: !0
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(_.Z, {
                        grow: 0,
                        shrink: 1,
                        justify: _.Z.Justify.END,
                        basis: '50%',
                        align: _.Z.Align.CENTER,
                        children: [
                            M || (0, A.R)()
                                ? null
                                : (0, i.jsx)(T.Z, {
                                      className: L.rightPipIcon,
                                      popoutOpen: !1,
                                      onOpenPopout: j,
                                      onClosePopout: O.Vq
                                  }),
                            (0, i.jsx)(I.Z, {
                                applicationId: s,
                                location: P.location,
                                className: L.rightPipIcon
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
    let { channel: r, applicationId: a, onMouseDown: o, onMouseMove: u, onMouseLeave: c, onJumpToChannel: f, idle: _, users: h, embeddedActivity: p } = e,
        m = (0, d.Z)([a])[0];
    return (0, i.jsxs)(l.Clickable, {
        className: s()(x.videoControls, x.videoControlsTextActivity),
        onMouseMove: u,
        onMouseDown: o,
        onMouseLeave: c,
        onDoubleClick: f,
        children: [
            (0, i.jsx)('div', {
                className: s()(x.topControls),
                children: (0, i.jsx)(E.r, {
                    idle: _,
                    title: null !== (n = null == m ? void 0 : m.name) && void 0 !== n ? n : r.name,
                    onJumpToChannel: f,
                    preventIdleComponent: g.Z
                })
            }),
            (0, i.jsxs)('div', {
                className: x.bottomControls,
                children: [
                    (0, i.jsx)(N.Z, {
                        renderIcon: !1,
                        users: h,
                        size: 24,
                        max: 3,
                        className: L.__invalid_userSummaryContainer
                    }),
                    (0, i.jsx)(I.Z, {
                        applicationId: a,
                        location: p.location,
                        iconClassName: L.leaveActivityIcon,
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
        ? (0, i.jsx)(b.Z, {
              channelId: n,
              isParticipantsOpen: r,
              className: L.participantsButton
          })
        : null;
}
function U(e) {
    var n;
    let { onMouseDown: r, onMouseMove: a, onMouseLeave: o, showControls: u, applicationId: c, channel: f, onJumpToChannel: _, onToggleHeight: h, isExpanded: p, hideExpandedButton: m, embeddedActivity: v } = e,
        T = (0, d.Z)([c])[0];
    return (0, i.jsx)('div', {
        className: L.pipHeader,
        onMouseMove: a,
        onMouseDown: r,
        onMouseLeave: o,
        children: (0, i.jsxs)('div', {
            className: s()(x.topControls, L.pipHeaderContent, { [L.pipHeaderContentOpen]: u }),
            children: [
                !u &&
                    (0, i.jsx)(l.MoreHorizontalIcon, {
                        size: 'xxs',
                        color: 'currentColor',
                        className: L.menuIcon
                    }),
                u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(E.r, {
                                idle: !u,
                                title: null !== (n = null == T ? void 0 : T.name) && void 0 !== n ? n : f.name,
                                onJumpToChannel: _,
                                preventIdleComponent: g.Z
                            }),
                            (0, i.jsxs)('div', {
                                className: L.pipHeaderButtonsRight,
                                children: [
                                    m
                                        ? null
                                        : (0, i.jsx)(w, {
                                              isExpanded: p,
                                              onClick: h
                                          }),
                                    (0, i.jsx)(I.Z, {
                                        applicationId: c,
                                        location: v.location,
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
