(n.d(t, { Z: () => S }), n(388685), n(953529), n(781311));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(481060),
    u = n(230711),
    m = n(497321),
    p = n(100527),
    g = n(43015),
    h = n(136097),
    f = n(266454),
    b = n(246946),
    x = n(594174),
    _ = n(460562),
    j = n(823379),
    C = n(981631),
    O = n(921944),
    E = n(388032),
    v = n(232696);
function S() {
    let e,
        { currentSession: t, otherSessions: n } = (0, h.h)(),
        s = (0, l.e7)([b.Z], () => b.Z.hidePersonalInformation),
        a = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
        [u, p] = r.useState(!1);
    r.useEffect(() => {
        ((0, f.Q3)(c.z.AUTH_SESSIONS_NEW, { dismissAction: O.L.AUTO }), (0, g.fw)());
        let e = setTimeout(() => p(!0), 500);
        return () => {
            (clearTimeout(e), (0, g.$Z)());
        };
    }, []);
    let _ = () => {
            o.tn.post({
                url: C.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0
            });
        },
        [j, S] = r.useState(new Set());
    return s
        ? (0, i.jsx)(m.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? u
                      ? (0, i.jsx)('div', {
                            className: v.loading,
                            children: (0, i.jsx)(d.$jN, {})
                        })
                      : null
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)('div', {
                                className: v.sessions,
                                children: [
                                    (0, i.jsx)(d.hjN, {
                                        tag: d.RB0.H5,
                                        title: E.intl.string(E.t.LLS19v),
                                        titleClassName: v.groupTitle,
                                        children:
                                            null != t
                                                ? (0, i.jsx)(T, {
                                                      session: t,
                                                      current: !0
                                                  })
                                                : null
                                    }),
                                    !(n.length > 0) && (null == a ? void 0 : a.mfaEnabled)
                                        ? null
                                        : (0, i.jsxs)(d.hjN, {
                                              tag: d.RB0.H5,
                                              title: E.intl.string(E.t.xx1MWV),
                                              titleClassName: v.groupTitle,
                                              className: v.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, i.jsx)(
                                                          T,
                                                          {
                                                              session: e,
                                                              useChecks: j.size > 0,
                                                              checked: j.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(j);
                                                                  (t ? n.add(e.id_hash) : n.delete(e.id_hash), S(n));
                                                              }
                                                          },
                                                          e.id_hash
                                                      )
                                                  ),
                                                  (null == a ? void 0 : a.mfaEnabled) ? null : (0, i.jsx)(N, {})
                                              ]
                                          })
                                ]
                            }),
                            n.length > 0
                                ? (0, i.jsxs)(d.hjN, {
                                      tag: d.RB0.H5,
                                      title: j.size > 0 ? E.intl.string(E.t.mMEmRE) : E.intl.string(E.t.Vij32N),
                                      children: [
                                          (0, i.jsx)(d.R94, {
                                              type: d.geA.DESCRIPTION,
                                              children: E.intl.string(E.t.OTXyaW)
                                          }),
                                          (0, i.jsx)('div', {
                                              'data-button-hoisted-classname-wrapper': !0,
                                              className: v.logOutAllButton,
                                              children: (0, i.jsx)(d.zxk, {
                                                  variant: 'critical-secondary',
                                                  size: 'sm',
                                                  text: j.size > 0 ? E.intl.formatToPlainString(E.t['83CPLi'], { count: j.size }) : E.intl.string(E.t.cLmmeX),
                                                  onClick: () => {
                                                      j.size > 0 ? (0, g.L$)(Array.from(j)) : (0, g.L$)(n.map((e) => e.id_hash));
                                                  }
                                              })
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })),
          (0, i.jsxs)(d.hjN, {
              tag: d.RB0.H1,
              title: E.intl.string(E.t['+1h0k5']),
              children: [
                  (0, i.jsx)(d.R94, {
                      type: d.geA.DESCRIPTION,
                      className: v.description,
                      children: E.intl.string(E.t.zZp619)
                  }),
                  (null == a ? void 0 : a.isStaff())
                      ? (0, i.jsxs)('div', {
                            className: v.tools,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    className: v.toolsTitle,
                                    variant: 'text-md/bold',
                                    children: 'DEV TOOLS'
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: v.toolsTitle,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: 'These tools are only shown to staff users.'
                                }),
                                (0, i.jsx)(d.ua7, {
                                    text: 'Triggers mobile and email suspicious session notifications for the current user',
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, i.jsx)(d.zxk, {
                                            variant: 'secondary',
                                            size: 'sm',
                                            text: 'Trigger Suspicious Sessions Notification',
                                            onClick: _,
                                            onMouseEnter: t,
                                            onMouseLeave: n
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
    var t, n, r, s, l;
    let { session: o, current: c, setChecked: u, checked: m, useChecks: p } = e,
        f = null != (l = null == (t = o.client_info) ? void 0 : t.location) ? l : null == (n = o.client_info) ? void 0 : n.ip,
        b = null == (r = o.client_info) ? void 0 : r.platform,
        { text: x, icon: _ } = (function (e) {
            switch (null == e ? void 0 : e.toLowerCase().trim()) {
                case null:
                case void 0:
                case '':
                    return {
                        text: E.intl.string(E.t.cDHCNT),
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
        O = [x, b].filter(j.lm),
        S = [f, C].filter(j.lm);
    return (0, i.jsxs)(
        'div',
        {
            className: a()(v.session, c ? v.currentSession : null),
            children: [
                (0, i.jsx)('div', {
                    className: v.sessionIcon,
                    children: (0, i.jsx)(_, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }),
                (0, i.jsxs)('div', {
                    className: v.sessionInfo,
                    children: [
                        (0, i.jsxs)(d.Text, {
                            variant: 'eyebrow',
                            className: v.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: O[0] }),
                                O.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: O[1] })]
                                    })
                            ]
                        }),
                        (0, i.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            className: v.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: S[0] }),
                                S.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: S[1] })]
                                    })
                            ]
                        })
                    ]
                }),
                c
                    ? null
                    : p
                      ? (0, i.jsx)('div', {
                            className: v.sessionCheckbox,
                            children: (0, i.jsx)(d.XZJ, {
                                onChange: (e, t) => {
                                    null == u || u(t);
                                },
                                value: m
                            })
                        })
                      : (0, i.jsx)(d.P3F, {
                            className: v.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == u || u(!0) : (0, g.L$)(o.id_hash);
                            },
                            'aria-label': E.intl.string(E.t.E4MJNj),
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
function N() {
    return (0, i.jsxs)('div', {
        className: a()(v.session, v.legacySession),
        children: [
            (0, i.jsx)('div', {
                className: v.sessionIcon,
                children: (0, i.jsx)(_.Z, {
                    width: '32',
                    height: '32'
                })
            }),
            (0, i.jsxs)('div', {
                className: v.sessionInfo,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: 'eyebrow',
                        className: v.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: E.intl.string(E.t.iUa0sr) })
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        className: v.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: E.intl.format(E.t['044+8v'], { onClick: () => u.Z.setSection(C.oAB.ACCOUNT, null, { analyticsLocations: [p.Z.USER_SETTINGS_SESSIONS] }) }) })
                    })
                ]
            })
        ]
    });
}
