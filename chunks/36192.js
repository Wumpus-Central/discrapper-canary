n.d(t, { Z: () => v }), n(388685), n(953529), n(781311);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(481060),
    u = n(230711),
    m = n(497321),
    p = n(100527),
    g = n(43015),
    h = n(136097),
    f = n(605236),
    b = n(246946),
    _ = n(594174),
    x = n(460562),
    E = n(823379),
    C = n(981631),
    j = n(921944),
    O = n(388032),
    S = n(232696);
function v() {
    let e,
        { currentSession: t, otherSessions: n } = (0, h.h)(),
        s = (0, a.e7)([b.Z], () => b.Z.hidePersonalInformation),
        l = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        [u, p] = r.useState(!1);
    r.useEffect(() => {
        (0, f.EW)(c.z.AUTH_SESSIONS_NEW, { dismissAction: j.L.AUTO }), (0, g.fw)();
        let e = setTimeout(() => p(!0), 500);
        return () => {
            clearTimeout(e), (0, g.$Z)();
        };
    }, []);
    let x = () => {
            o.tn.post({
                url: C.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0
            });
        },
        [E, v] = r.useState(new Set());
    return s
        ? (0, i.jsx)(m.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? u
                      ? (0, i.jsx)('div', {
                            className: S.loading,
                            children: (0, i.jsx)(d.$jN, {})
                        })
                      : null
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)('div', {
                                className: S.sessions,
                                children: [
                                    (0, i.jsx)(d.hjN, {
                                        tag: d.RB0.H5,
                                        title: O.intl.string(O.t.LLS19v),
                                        titleClassName: S.groupTitle,
                                        children:
                                            null != t
                                                ? (0, i.jsx)(T, {
                                                      session: t,
                                                      current: !0
                                                  })
                                                : null
                                    }),
                                    !(n.length > 0) && (null == l ? void 0 : l.mfaEnabled)
                                        ? null
                                        : (0, i.jsxs)(d.hjN, {
                                              tag: d.RB0.H5,
                                              title: O.intl.string(O.t.xx1MWV),
                                              titleClassName: S.groupTitle,
                                              className: S.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, i.jsx)(
                                                          T,
                                                          {
                                                              session: e,
                                                              useChecks: E.size > 0,
                                                              checked: E.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(E);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), v(n);
                                                              }
                                                          },
                                                          e.id_hash
                                                      )
                                                  ),
                                                  (null == l ? void 0 : l.mfaEnabled) ? null : (0, i.jsx)(I, {})
                                              ]
                                          })
                                ]
                            }),
                            n.length > 0
                                ? (0, i.jsxs)(d.hjN, {
                                      tag: d.RB0.H5,
                                      title: E.size > 0 ? O.intl.string(O.t.mMEmRE) : O.intl.string(O.t.Vij32N),
                                      children: [
                                          (0, i.jsx)(d.R94, {
                                              type: d.geA.DESCRIPTION,
                                              children: O.intl.string(O.t.OTXyaW)
                                          }),
                                          (0, i.jsx)(d.zxk, {
                                              look: d.zxk.Looks.OUTLINED,
                                              color: d.zxk.Colors.RED,
                                              size: d.zxk.Sizes.SMALL,
                                              className: S.logOutAllButton,
                                              onClick: () => {
                                                  E.size > 0 ? (0, g.L$)(Array.from(E)) : (0, g.L$)(n.map((e) => e.id_hash));
                                              },
                                              children: E.size > 0 ? O.intl.formatToPlainString(O.t['83CPLi'], { count: E.size }) : O.intl.string(O.t.cLmmeX)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })),
          (0, i.jsxs)(d.hjN, {
              tag: d.RB0.H1,
              title: O.intl.string(O.t['+1h0k5']),
              children: [
                  (0, i.jsx)(d.R94, {
                      type: d.geA.DESCRIPTION,
                      className: S.description,
                      children: O.intl.string(O.t.zZp619)
                  }),
                  (null == l ? void 0 : l.isStaff())
                      ? (0, i.jsxs)('div', {
                            className: S.tools,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    className: S.toolsTitle,
                                    variant: 'text-md/bold',
                                    children: 'DEV TOOLS'
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: S.toolsTitle,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: 'These tools are only shown to staff users.'
                                }),
                                (0, i.jsx)(d.ua7, {
                                    text: 'Triggers mobile and email suspicious session notifications for the current user',
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, i.jsx)(d.zxk, {
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
function T(e) {
    var t, n, r, s, a;
    let { session: o, current: c, setChecked: u, checked: m, useChecks: p } = e,
        f = null != (a = null == (t = o.client_info) ? void 0 : t.location) ? a : null == (n = o.client_info) ? void 0 : n.ip,
        b = null == (r = o.client_info) ? void 0 : r.platform,
        { text: _, icon: x } = (function (e) {
            switch (null == e ? void 0 : e.toLowerCase().trim()) {
                case null:
                case void 0:
                case '':
                    return {
                        text: O.intl.string(O.t.cDHCNT),
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
        })(null == (s = o.client_info) ? void 0 : s.os),
        C = c ? null : (0, h.p)(o.approx_last_used_time),
        j = [_, b].filter(E.lm),
        v = [f, C].filter(E.lm);
    return (0, i.jsxs)(
        'div',
        {
            className: l()(S.session, c ? S.currentSession : null),
            children: [
                (0, i.jsx)('div', {
                    className: S.sessionIcon,
                    children: (0, i.jsx)(x, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }),
                (0, i.jsxs)('div', {
                    className: S.sessionInfo,
                    children: [
                        (0, i.jsxs)(d.Text, {
                            variant: 'eyebrow',
                            className: S.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: j[0] }),
                                j.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: j[1] })]
                                    })
                            ]
                        }),
                        (0, i.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            className: S.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: v[0] }),
                                v.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: v[1] })]
                                    })
                            ]
                        })
                    ]
                }),
                c
                    ? null
                    : p
                      ? (0, i.jsx)('div', {
                            className: S.sessionCheckbox,
                            children: (0, i.jsx)(d.XZJ, {
                                onChange: (e, t) => {
                                    null == u || u(t);
                                },
                                value: m
                            })
                        })
                      : (0, i.jsx)(d.P3F, {
                            className: S.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == u || u(!0) : (0, g.L$)(o.id_hash);
                            },
                            'aria-label': O.intl.string(O.t.E4MJNj),
                            children: (0, i.jsx)(d.Dio, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
            ]
        },
        o.id_hash
    );
}
function I() {
    return (0, i.jsxs)('div', {
        className: l()(S.session, S.legacySession),
        children: [
            (0, i.jsx)('div', {
                className: S.sessionIcon,
                children: (0, i.jsx)(x.Z, {
                    width: '32',
                    height: '32'
                })
            }),
            (0, i.jsxs)('div', {
                className: S.sessionInfo,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: 'eyebrow',
                        className: S.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: O.intl.string(O.t.iUa0sr) })
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        className: S.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: O.intl.format(O.t['044+8v'], { onClick: () => u.Z.setSection(C.oAB.ACCOUNT, null, { analyticsLocations: [p.Z.USER_SETTINGS_SESSIONS] }) }) })
                    })
                ]
            })
        ]
    });
}
