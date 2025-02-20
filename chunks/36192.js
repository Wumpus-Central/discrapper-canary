n.d(t, { Z: () => v }), n(47120), n(266796), n(566702);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(481060),
    u = n(230711),
    m = n(497321),
    g = n(100527),
    p = n(43015),
    h = n(136097),
    f = n(605236),
    b = n(246946),
    N = n(594174),
    x = n(460562),
    _ = n(823379),
    E = n(981631),
    j = n(921944),
    C = n(388032),
    O = n(351921);
function v() {
    let e;
    let { currentSession: t, otherSessions: n } = (0, h.h)(),
        s = (0, l.e7)([b.Z], () => b.Z.hidePersonalInformation),
        a = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        [u, g] = i.useState(!1);
    i.useEffect(() => {
        (0, f.EW)(c.z.AUTH_SESSIONS_NEW, { dismissAction: j.L.AUTO }), (0, p.fw)();
        let e = setTimeout(() => g(!0), 500);
        return () => {
            clearTimeout(e), (0, p.$Z)();
        };
    }, []);
    let x = () => {
            o.tn.post({
                url: E.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0
            });
        },
        [_, v] = i.useState(new Set());
    return s
        ? (0, r.jsx)(m.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? u
                      ? (0, r.jsx)('div', {
                            className: O.loading,
                            children: (0, r.jsx)(d.$jN, {})
                        })
                      : null
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)('div', {
                                className: O.sessions,
                                children: [
                                    (0, r.jsx)(d.hjN, {
                                        tag: d.RB0.H5,
                                        title: C.NW.string(C.t.LLS19v),
                                        titleClassName: O.groupTitle,
                                        children:
                                            null != t
                                                ? (0, r.jsx)(S, {
                                                      session: t,
                                                      current: !0
                                                  })
                                                : null
                                    }),
                                    !(n.length > 0) && (null == a ? void 0 : a.mfaEnabled)
                                        ? null
                                        : (0, r.jsxs)(d.hjN, {
                                              tag: d.RB0.H5,
                                              title: C.NW.string(C.t.xx1MWV),
                                              titleClassName: O.groupTitle,
                                              className: O.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, r.jsx)(
                                                          S,
                                                          {
                                                              session: e,
                                                              useChecks: _.size > 0,
                                                              checked: _.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(_);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), v(n);
                                                              }
                                                          },
                                                          e.id_hash
                                                      )
                                                  ),
                                                  (null == a ? void 0 : a.mfaEnabled) ? null : (0, r.jsx)(T, {})
                                              ]
                                          })
                                ]
                            }),
                            n.length > 0
                                ? (0, r.jsxs)(d.hjN, {
                                      tag: d.RB0.H5,
                                      title: _.size > 0 ? C.NW.string(C.t.mMEmRE) : C.NW.string(C.t.Vij32N),
                                      children: [
                                          (0, r.jsx)(d.R94, {
                                              type: d.geA.DESCRIPTION,
                                              children: C.NW.string(C.t.OTXyaW)
                                          }),
                                          (0, r.jsx)(d.zxk, {
                                              look: d.zxk.Looks.OUTLINED,
                                              color: d.zxk.Colors.RED,
                                              size: d.zxk.Sizes.SMALL,
                                              className: O.logOutAllButton,
                                              onClick: () => {
                                                  _.size > 0 ? (0, p.L$)(Array.from(_)) : (0, p.L$)(n.map((e) => e.id_hash));
                                              },
                                              children: _.size > 0 ? C.NW.formatToPlainString(C.t['83CPLi'], { count: _.size }) : C.NW.string(C.t.cLmmeX)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })),
          (0, r.jsxs)(d.hjN, {
              tag: d.RB0.H1,
              title: C.NW.string(C.t['+1h0k5']),
              children: [
                  (0, r.jsx)(d.R94, {
                      type: d.geA.DESCRIPTION,
                      className: O.description,
                      children: C.NW.string(C.t.zZp619)
                  }),
                  (null == a ? void 0 : a.isStaff())
                      ? (0, r.jsxs)('div', {
                            className: O.tools,
                            children: [
                                (0, r.jsx)(d.Text, {
                                    className: O.toolsTitle,
                                    variant: 'text-md/bold',
                                    children: 'DEV TOOLS'
                                }),
                                (0, r.jsx)(d.Text, {
                                    className: O.toolsTitle,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: 'These tools are only shown to staff users.'
                                }),
                                (0, r.jsx)(d.ua7, {
                                    text: 'Triggers mobile and email suspicious session notifications for the current user',
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(d.zxk, {
                                            size: d.zxk.Sizes.SMALL,
                                            color: d.zxk.Colors.PRIMARY,
                                            onClick: x,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            children: 'Trigger Suspicious Sessions Notification'
                                        });
                                    }
                                })
                            ]
                        })
                      : null,
                  e
              ]
          }));
}
function S(e) {
    var t, n, i, s, l;
    let { session: o, current: c, setChecked: u, checked: m, useChecks: g } = e,
        f = null !== (l = null === (t = o.client_info) || void 0 === t ? void 0 : t.location) && void 0 !== l ? l : null === (n = o.client_info) || void 0 === n ? void 0 : n.ip,
        b = null === (i = o.client_info) || void 0 === i ? void 0 : i.platform,
        { text: N, icon: x } = (function (e) {
            switch (null == e ? void 0 : e.toLowerCase().trim()) {
                case null:
                case void 0:
                case '':
                    return {
                        text: C.NW.string(C.t.cDHCNT),
                        icon: d.pzj
                    };
                case 'ios':
                case 'android':
                    return {
                        text: e,
                        icon: d.AtH
                    };
                default:
                    return {
                        text: e,
                        icon: d.pzj
                    };
            }
        })(null === (s = o.client_info) || void 0 === s ? void 0 : s.os),
        E = c ? null : (0, h.p)(o.approx_last_used_time),
        j = [N, b].filter(_.lm),
        v = [f, E].filter(_.lm);
    return (0, r.jsxs)(
        'div',
        {
            className: a()(O.session, c ? O.currentSession : null),
            children: [
                (0, r.jsx)('div', {
                    className: O.sessionIcon,
                    children: (0, r.jsx)(x, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsxs)('div', {
                    className: O.sessionInfo,
                    children: [
                        (0, r.jsxs)(d.Text, {
                            variant: 'eyebrow',
                            className: O.sessionInfoRow,
                            children: [
                                (0, r.jsx)('span', { children: j[0] }),
                                j.length > 1 &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)('span', { children: '\xB7' }), (0, r.jsx)('span', { children: j[1] })]
                                    })
                            ]
                        }),
                        (0, r.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            className: O.sessionInfoRow,
                            children: [
                                (0, r.jsx)('span', { children: v[0] }),
                                v.length > 1 &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)('span', { children: '\xB7' }), (0, r.jsx)('span', { children: v[1] })]
                                    })
                            ]
                        })
                    ]
                }),
                c
                    ? null
                    : g
                      ? (0, r.jsx)('div', {
                            className: O.sessionCheckbox,
                            children: (0, r.jsx)(d.XZJ, {
                                onChange: (e, t) => {
                                    null == u || u(t);
                                },
                                value: m
                            })
                        })
                      : (0, r.jsx)(d.P3F, {
                            className: O.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == u || u(!0) : (0, p.L$)(o.id_hash);
                            },
                            'aria-label': C.NW.string(C.t.E4MJNj),
                            children: (0, r.jsx)(d.Dio, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
            ]
        },
        o.id_hash
    );
}
function T() {
    return (0, r.jsxs)('div', {
        className: a()(O.session, O.legacySession),
        children: [
            (0, r.jsx)('div', {
                className: O.sessionIcon,
                children: (0, r.jsx)(x.Z, {
                    width: '32',
                    height: '32'
                })
            }),
            (0, r.jsxs)('div', {
                className: O.sessionInfo,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: 'eyebrow',
                        className: O.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, r.jsx)('span', { children: C.NW.string(C.t.iUa0sr) })
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        className: O.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, r.jsx)('span', { children: C.NW.format(C.t['044+8v'], { onClick: () => u.Z.setSection(E.oAB.ACCOUNT, null, { analyticsLocations: [g.Z.USER_SETTINGS_SESSIONS] }) }) })
                    })
                ]
            })
        ]
    });
}
