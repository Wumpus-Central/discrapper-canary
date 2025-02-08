n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(481060),
    u = n(230711),
    m = n(497321),
    g = n(100527),
    h = n(43015),
    x = n(136097),
    _ = n(605236),
    p = n(246946),
    E = n(594174),
    C = n(460562),
    f = n(823379),
    T = n(981631),
    N = n(921944),
    I = n(388032),
    S = n(791474);
function b() {
    let e;
    let { currentSession: t, otherSessions: n } = (0, x.h)(),
        r = (0, a.e7)([p.Z], () => p.Z.hidePersonalInformation),
        l = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        [u, g] = s.useState(!1);
    s.useEffect(() => {
        (0, _.EW)(c.z.AUTH_SESSIONS_NEW, { dismissAction: N.L.AUTO }), (0, h.fw)();
        let e = setTimeout(() => g(!0), 500);
        return () => {
            clearTimeout(e), (0, h.$Z)();
        };
    }, []);
    let C = () => {
            o.tn.post({
                url: T.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0
            });
        },
        [f, b] = s.useState(new Set());
    return r
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
                                        title: I.intl.string(I.t.LLS19v),
                                        titleClassName: S.groupTitle,
                                        children:
                                            null != t
                                                ? (0, i.jsx)(v, {
                                                      session: t,
                                                      current: !0
                                                  })
                                                : null
                                    }),
                                    !(n.length > 0) && (null == l ? void 0 : l.mfaEnabled)
                                        ? null
                                        : (0, i.jsxs)(d.hjN, {
                                              tag: d.RB0.H5,
                                              title: I.intl.string(I.t.xx1MWV),
                                              titleClassName: S.groupTitle,
                                              className: S.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, i.jsx)(
                                                          v,
                                                          {
                                                              session: e,
                                                              useChecks: f.size > 0,
                                                              checked: f.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(f);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), b(n);
                                                              }
                                                          },
                                                          e.id_hash
                                                      )
                                                  ),
                                                  (null == l ? void 0 : l.mfaEnabled) ? null : (0, i.jsx)(j, {})
                                              ]
                                          })
                                ]
                            }),
                            n.length > 0
                                ? (0, i.jsxs)(d.hjN, {
                                      tag: d.RB0.H5,
                                      title: f.size > 0 ? I.intl.string(I.t.mMEmRE) : I.intl.string(I.t.Vij32N),
                                      children: [
                                          (0, i.jsx)(d.R94, {
                                              type: d.geA.DESCRIPTION,
                                              children: I.intl.string(I.t.OTXyaW)
                                          }),
                                          (0, i.jsx)(d.zxk, {
                                              look: d.zxk.Looks.OUTLINED,
                                              color: d.zxk.Colors.RED,
                                              size: d.zxk.Sizes.SMALL,
                                              className: S.logOutAllButton,
                                              onClick: () => {
                                                  f.size > 0 ? (0, h.L$)(Array.from(f)) : (0, h.L$)(n.map((e) => e.id_hash));
                                              },
                                              children: f.size > 0 ? I.intl.formatToPlainString(I.t['83CPLi'], { count: f.size }) : I.intl.string(I.t.cLmmeX)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })),
          (0, i.jsxs)(d.hjN, {
              tag: d.RB0.H1,
              title: I.intl.string(I.t['+1h0k5']),
              children: [
                  (0, i.jsx)(d.R94, {
                      type: d.geA.DESCRIPTION,
                      className: S.description,
                      children: I.intl.string(I.t.zZp619)
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
                                            onClick: C,
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
function v(e) {
    var t, n, s, r, a;
    let { session: o, current: c, setChecked: u, checked: m, useChecks: g } = e,
        _ = null !== (a = null === (t = o.client_info) || void 0 === t ? void 0 : t.location) && void 0 !== a ? a : null === (n = o.client_info) || void 0 === n ? void 0 : n.ip,
        p = null === (s = o.client_info) || void 0 === s ? void 0 : s.platform,
        { text: E, icon: C } = (function (e) {
            switch (null == e ? void 0 : e.toLowerCase().trim()) {
                case null:
                case void 0:
                case '':
                    return {
                        text: I.intl.string(I.t.cDHCNT),
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
        })(null === (r = o.client_info) || void 0 === r ? void 0 : r.os),
        T = c ? null : (0, x.p)(o.approx_last_used_time),
        N = [E, p].filter(f.lm),
        b = [_, T].filter(f.lm);
    return (0, i.jsxs)(
        'div',
        {
            className: l()(S.session, c ? S.currentSession : null),
            children: [
                (0, i.jsx)('div', {
                    className: S.sessionIcon,
                    children: (0, i.jsx)(C, {
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
                                (0, i.jsx)('span', { children: N[0] }),
                                N.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: N[1] })]
                                    })
                            ]
                        }),
                        (0, i.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            className: S.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: b[0] }),
                                b.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: b[1] })]
                                    })
                            ]
                        })
                    ]
                }),
                c
                    ? null
                    : g
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
                                e.shiftKey ? null == u || u(!0) : (0, h.L$)(o.id_hash);
                            },
                            'aria-label': I.intl.string(I.t.E4MJNj),
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
function j() {
    return (0, i.jsxs)('div', {
        className: l()(S.session, S.legacySession),
        children: [
            (0, i.jsx)('div', {
                className: S.sessionIcon,
                children: (0, i.jsx)(C.Z, {
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
                        children: (0, i.jsx)('span', { children: I.intl.string(I.t.iUa0sr) })
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        className: S.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: I.intl.format(I.t['044+8v'], { onClick: () => u.Z.setSection(T.oAB.ACCOUNT, null, { analyticsLocations: [g.Z.USER_SETTINGS_SESSIONS] }) }) })
                    })
                ]
            })
        ]
    });
}
