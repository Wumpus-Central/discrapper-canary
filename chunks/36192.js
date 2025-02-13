n.d(t, { Z: () => j }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(481060),
    u = n(230711),
    h = n(497321),
    m = n(100527),
    g = n(43015),
    x = n(136097),
    _ = n(605236),
    p = n(246946),
    E = n(594174),
    C = n(460562),
    N = n(823379),
    I = n(981631),
    f = n(921944),
    T = n(388032),
    S = n(913229);
function j() {
    let e;
    let { currentSession: t, otherSessions: n } = (0, x.h)(),
        l = (0, a.e7)([p.Z], () => p.Z.hidePersonalInformation),
        r = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        [u, m] = s.useState(!1);
    s.useEffect(() => {
        (0, _.EW)(c.z.AUTH_SESSIONS_NEW, { dismissAction: f.L.AUTO }), (0, g.fw)();
        let e = setTimeout(() => m(!0), 500);
        return () => {
            clearTimeout(e), (0, g.$Z)();
        };
    }, []);
    let C = () => {
            o.tn.post({
                url: I.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0
            });
        },
        [N, j] = s.useState(new Set());
    return l
        ? (0, i.jsx)(h.Z, {})
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
                                        title: T.intl.string(T.t.LLS19v),
                                        titleClassName: S.groupTitle,
                                        children:
                                            null != t
                                                ? (0, i.jsx)(v, {
                                                      session: t,
                                                      current: !0
                                                  })
                                                : null
                                    }),
                                    !(n.length > 0) && (null == r ? void 0 : r.mfaEnabled)
                                        ? null
                                        : (0, i.jsxs)(d.hjN, {
                                              tag: d.RB0.H5,
                                              title: T.intl.string(T.t.xx1MWV),
                                              titleClassName: S.groupTitle,
                                              className: S.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, i.jsx)(
                                                          v,
                                                          {
                                                              session: e,
                                                              useChecks: N.size > 0,
                                                              checked: N.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(N);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), j(n);
                                                              }
                                                          },
                                                          e.id_hash
                                                      )
                                                  ),
                                                  (null == r ? void 0 : r.mfaEnabled) ? null : (0, i.jsx)(b, {})
                                              ]
                                          })
                                ]
                            }),
                            n.length > 0
                                ? (0, i.jsxs)(d.hjN, {
                                      tag: d.RB0.H5,
                                      title: N.size > 0 ? T.intl.string(T.t.mMEmRE) : T.intl.string(T.t.Vij32N),
                                      children: [
                                          (0, i.jsx)(d.R94, {
                                              type: d.geA.DESCRIPTION,
                                              children: T.intl.string(T.t.OTXyaW)
                                          }),
                                          (0, i.jsx)(d.zxk, {
                                              look: d.zxk.Looks.OUTLINED,
                                              color: d.zxk.Colors.RED,
                                              size: d.zxk.Sizes.SMALL,
                                              className: S.logOutAllButton,
                                              onClick: () => {
                                                  N.size > 0 ? (0, g.L$)(Array.from(N)) : (0, g.L$)(n.map((e) => e.id_hash));
                                              },
                                              children: N.size > 0 ? T.intl.formatToPlainString(T.t['83CPLi'], { count: N.size }) : T.intl.string(T.t.cLmmeX)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })),
          (0, i.jsxs)(d.hjN, {
              tag: d.RB0.H1,
              title: T.intl.string(T.t['+1h0k5']),
              children: [
                  (0, i.jsx)(d.R94, {
                      type: d.geA.DESCRIPTION,
                      className: S.description,
                      children: T.intl.string(T.t.zZp619)
                  }),
                  (null == r ? void 0 : r.isStaff())
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
    var t, n, s, l, a;
    let { session: o, current: c, setChecked: u, checked: h, useChecks: m } = e,
        _ = null !== (a = null === (t = o.client_info) || void 0 === t ? void 0 : t.location) && void 0 !== a ? a : null === (n = o.client_info) || void 0 === n ? void 0 : n.ip,
        p = null === (s = o.client_info) || void 0 === s ? void 0 : s.platform,
        { text: E, icon: C } = (function (e) {
            switch (null == e ? void 0 : e.toLowerCase().trim()) {
                case null:
                case void 0:
                case '':
                    return {
                        text: T.intl.string(T.t.cDHCNT),
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
        })(null === (l = o.client_info) || void 0 === l ? void 0 : l.os),
        I = c ? null : (0, x.p)(o.approx_last_used_time),
        f = [E, p].filter(N.lm),
        j = [_, I].filter(N.lm);
    return (0, i.jsxs)(
        'div',
        {
            className: r()(S.session, c ? S.currentSession : null),
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
                                (0, i.jsx)('span', { children: f[0] }),
                                f.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: f[1] })]
                                    })
                            ]
                        }),
                        (0, i.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            className: S.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: j[0] }),
                                j.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: j[1] })]
                                    })
                            ]
                        })
                    ]
                }),
                c
                    ? null
                    : m
                      ? (0, i.jsx)('div', {
                            className: S.sessionCheckbox,
                            children: (0, i.jsx)(d.XZJ, {
                                onChange: (e, t) => {
                                    null == u || u(t);
                                },
                                value: h
                            })
                        })
                      : (0, i.jsx)(d.P3F, {
                            className: S.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == u || u(!0) : (0, g.L$)(o.id_hash);
                            },
                            'aria-label': T.intl.string(T.t.E4MJNj),
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
function b() {
    return (0, i.jsxs)('div', {
        className: r()(S.session, S.legacySession),
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
                        children: (0, i.jsx)('span', { children: T.intl.string(T.t.iUa0sr) })
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        className: S.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: T.intl.format(T.t['044+8v'], { onClick: () => u.Z.setSection(I.oAB.ACCOUNT, null, { analyticsLocations: [m.Z.USER_SETTINGS_SESSIONS] }) }) })
                    })
                ]
            })
        ]
    });
}
