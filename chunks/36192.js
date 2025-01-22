n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(481060),
    u = n(230711),
    m = n(497321),
    g = n(100527),
    h = n(43015),
    p = n(136097),
    x = n(605236),
    f = n(246946),
    E = n(594174),
    _ = n(460562),
    C = n(823379),
    T = n(981631),
    S = n(921944),
    b = n(388032),
    I = n(791474);
function N() {
    let e;
    let { currentSession: t, otherSessions: n } = (0, p.h)(),
        s = (0, l.e7)([f.Z], () => f.Z.hidePersonalInformation),
        a = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        [u, g] = r.useState(!1);
    r.useEffect(() => {
        (0, x.EW)(c.z.AUTH_SESSIONS_NEW, { dismissAction: S.L.AUTO }), (0, h.fw)();
        let e = setTimeout(() => g(!0), 500);
        return () => {
            clearTimeout(e), (0, h.$Z)();
        };
    }, []);
    let _ = () => {
            o.tn.post({
                url: T.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0
            });
        },
        [C, N] = r.useState(new Set());
    return s
        ? (0, i.jsx)(m.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? u
                      ? (0, i.jsx)('div', {
                            className: I.loading,
                            children: (0, i.jsx)(d.Spinner, {})
                        })
                      : null
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)('div', {
                                className: I.sessions,
                                children: [
                                    (0, i.jsx)(d.FormSection, {
                                        tag: d.FormTitleTags.H5,
                                        title: b.intl.string(b.t.LLS19v),
                                        titleClassName: I.groupTitle,
                                        children:
                                            null != t
                                                ? (0, i.jsx)(v, {
                                                      session: t,
                                                      current: !0
                                                  })
                                                : null
                                    }),
                                    !(n.length > 0) && (null == a ? void 0 : a.mfaEnabled)
                                        ? null
                                        : (0, i.jsxs)(d.FormSection, {
                                              tag: d.FormTitleTags.H5,
                                              title: b.intl.string(b.t.xx1MWV),
                                              titleClassName: I.groupTitle,
                                              className: I.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, i.jsx)(
                                                          v,
                                                          {
                                                              session: e,
                                                              useChecks: C.size > 0,
                                                              checked: C.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(C);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), N(n);
                                                              }
                                                          },
                                                          e.id_hash
                                                      )
                                                  ),
                                                  (null == a ? void 0 : a.mfaEnabled) ? null : (0, i.jsx)(A, {})
                                              ]
                                          })
                                ]
                            }),
                            n.length > 0
                                ? (0, i.jsxs)(d.FormSection, {
                                      tag: d.FormTitleTags.H5,
                                      title: C.size > 0 ? b.intl.string(b.t.mMEmRE) : b.intl.string(b.t.Vij32N),
                                      children: [
                                          (0, i.jsx)(d.FormText, {
                                              type: d.FormTextTypes.DESCRIPTION,
                                              children: b.intl.string(b.t.OTXyaW)
                                          }),
                                          (0, i.jsx)(d.Button, {
                                              look: d.Button.Looks.OUTLINED,
                                              color: d.Button.Colors.RED,
                                              size: d.Button.Sizes.SMALL,
                                              className: I.logOutAllButton,
                                              onClick: () => {
                                                  C.size > 0 ? (0, h.L$)(Array.from(C)) : (0, h.L$)(n.map((e) => e.id_hash));
                                              },
                                              children: C.size > 0 ? b.intl.formatToPlainString(b.t['83CPLi'], { count: C.size }) : b.intl.string(b.t.cLmmeX)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })),
          (0, i.jsxs)(d.FormSection, {
              tag: d.FormTitleTags.H1,
              title: b.intl.string(b.t['+1h0k5']),
              children: [
                  (0, i.jsx)(d.FormText, {
                      type: d.FormTextTypes.DESCRIPTION,
                      className: I.description,
                      children: b.intl.string(b.t.zZp619)
                  }),
                  (null == a ? void 0 : a.isStaff())
                      ? (0, i.jsxs)('div', {
                            className: I.tools,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    className: I.toolsTitle,
                                    variant: 'text-md/bold',
                                    children: 'DEV TOOLS'
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: I.toolsTitle,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: 'These tools are only shown to staff users.'
                                }),
                                (0, i.jsx)(d.Tooltip, {
                                    text: 'Triggers mobile and email suspicious session notifications for the current user',
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, i.jsx)(d.Button, {
                                            size: d.Button.Sizes.SMALL,
                                            color: d.Button.Colors.PRIMARY,
                                            onClick: _,
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
    var t, n, r, s, l;
    let { session: o, current: c, setChecked: u, checked: m, useChecks: g } = e,
        x = null !== (l = null === (t = o.client_info) || void 0 === t ? void 0 : t.location) && void 0 !== l ? l : null === (n = o.client_info) || void 0 === n ? void 0 : n.ip,
        f = null === (r = o.client_info) || void 0 === r ? void 0 : r.platform,
        { text: E, icon: _ } = (function (e) {
            switch (null == e ? void 0 : e.toLowerCase().trim()) {
                case null:
                case void 0:
                case '':
                    return {
                        text: b.intl.string(b.t.cDHCNT),
                        icon: d.ScreenIcon
                    };
                case 'ios':
                case 'android':
                    return {
                        text: e,
                        icon: d.MobilePhoneIcon
                    };
                default:
                    return {
                        text: e,
                        icon: d.ScreenIcon
                    };
            }
        })(null === (s = o.client_info) || void 0 === s ? void 0 : s.os),
        T = c ? null : (0, p.p)(o.approx_last_used_time),
        S = [E, f].filter(C.lm),
        N = [x, T].filter(C.lm);
    return (0, i.jsxs)(
        'div',
        {
            className: a()(I.session, c ? I.currentSession : null),
            children: [
                (0, i.jsx)('div', {
                    className: I.sessionIcon,
                    children: (0, i.jsx)(_, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }),
                (0, i.jsxs)('div', {
                    className: I.sessionInfo,
                    children: [
                        (0, i.jsxs)(d.Text, {
                            variant: 'eyebrow',
                            className: I.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: S[0] }),
                                S.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: S[1] })]
                                    })
                            ]
                        }),
                        (0, i.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            className: I.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: N[0] }),
                                N.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: N[1] })]
                                    })
                            ]
                        })
                    ]
                }),
                c
                    ? null
                    : g
                      ? (0, i.jsx)('div', {
                            className: I.sessionCheckbox,
                            children: (0, i.jsx)(d.Checkbox, {
                                onChange: (e, t) => {
                                    null == u || u(t);
                                },
                                value: m
                            })
                        })
                      : (0, i.jsx)(d.Clickable, {
                            className: I.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == u || u(!0) : (0, h.L$)(o.id_hash);
                            },
                            'aria-label': b.intl.string(b.t.E4MJNj),
                            children: (0, i.jsx)(d.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
            ]
        },
        o.id_hash
    );
}
function A() {
    return (0, i.jsxs)('div', {
        className: a()(I.session, I.legacySession),
        children: [
            (0, i.jsx)('div', {
                className: I.sessionIcon,
                children: (0, i.jsx)(_.Z, {
                    width: '32',
                    height: '32'
                })
            }),
            (0, i.jsxs)('div', {
                className: I.sessionInfo,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: 'eyebrow',
                        className: I.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: b.intl.string(b.t.iUa0sr) })
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        className: I.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: b.intl.format(b.t['044+8v'], { onClick: () => u.Z.setSection(T.oAB.ACCOUNT, null, { analyticsLocations: [g.Z.USER_SETTINGS_SESSIONS] }) }) })
                    })
                ]
            })
        ]
    });
}
