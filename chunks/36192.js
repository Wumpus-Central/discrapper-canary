n.d(t, {
    Z: function () {
        return I;
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
    g = n(43015),
    h = n(136097),
    p = n(605236),
    x = n(246946),
    f = n(594174),
    _ = n(460562),
    E = n(823379),
    C = n(981631),
    T = n(921944),
    S = n(388032),
    b = n(575817);
function I() {
    let e;
    let { currentSession: t, otherSessions: n } = (0, h.h)(),
        s = (0, l.e7)([x.Z], () => x.Z.hidePersonalInformation),
        a = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        [u, _] = r.useState(!1);
    r.useEffect(() => {
        (0, p.EW)(c.z.AUTH_SESSIONS_NEW, { dismissAction: T.L.AUTO }), (0, g.fw)();
        let e = setTimeout(() => _(!0), 500);
        return () => {
            clearTimeout(e), (0, g.$Z)();
        };
    }, []);
    let E = () => {
            o.tn.post({
                url: C.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0
            });
        },
        [I, A] = r.useState(new Set());
    return s
        ? (0, i.jsx)(m.Z, {})
        : ((e =
              null == t && 0 === n.length
                  ? u
                      ? (0, i.jsx)('div', {
                            className: b.loading,
                            children: (0, i.jsx)(d.Spinner, {})
                        })
                      : null
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)('div', {
                                className: b.sessions,
                                children: [
                                    (0, i.jsx)(d.FormSection, {
                                        tag: d.FormTitleTags.H5,
                                        title: S.intl.string(S.t.LLS19v),
                                        titleClassName: b.groupTitle,
                                        children:
                                            null != t
                                                ? (0, i.jsx)(N, {
                                                      session: t,
                                                      current: !0
                                                  })
                                                : null
                                    }),
                                    !(n.length > 0) && (null == a ? void 0 : a.mfaEnabled)
                                        ? null
                                        : (0, i.jsxs)(d.FormSection, {
                                              tag: d.FormTitleTags.H5,
                                              title: S.intl.string(S.t.xx1MWV),
                                              titleClassName: b.groupTitle,
                                              className: b.otherSessions,
                                              children: [
                                                  n.map((e) =>
                                                      (0, i.jsx)(
                                                          N,
                                                          {
                                                              session: e,
                                                              useChecks: I.size > 0,
                                                              checked: I.has(e.id_hash),
                                                              setChecked: (t) => {
                                                                  let n = new Set(I);
                                                                  t ? n.add(e.id_hash) : n.delete(e.id_hash), A(n);
                                                              }
                                                          },
                                                          e.id_hash
                                                      )
                                                  ),
                                                  (null == a ? void 0 : a.mfaEnabled) ? null : (0, i.jsx)(v, {})
                                              ]
                                          })
                                ]
                            }),
                            n.length > 0
                                ? (0, i.jsxs)(d.FormSection, {
                                      tag: d.FormTitleTags.H5,
                                      title: I.size > 0 ? S.intl.string(S.t.mMEmRE) : S.intl.string(S.t.Vij32N),
                                      children: [
                                          (0, i.jsx)(d.FormText, {
                                              type: d.FormTextTypes.DESCRIPTION,
                                              children: S.intl.string(S.t.OTXyaW)
                                          }),
                                          (0, i.jsx)(d.Button, {
                                              look: d.Button.Looks.OUTLINED,
                                              color: d.Button.Colors.RED,
                                              size: d.Button.Sizes.SMALL,
                                              className: b.logOutAllButton,
                                              onClick: () => {
                                                  I.size > 0 ? (0, g.L$)(Array.from(I)) : (0, g.L$)(n.map((e) => e.id_hash));
                                              },
                                              children: I.size > 0 ? S.intl.formatToPlainString(S.t['83CPLi'], { count: I.size }) : S.intl.string(S.t.cLmmeX)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })),
          (0, i.jsxs)(d.FormSection, {
              tag: d.FormTitleTags.H1,
              title: S.intl.string(S.t['+1h0k5']),
              children: [
                  (0, i.jsx)(d.FormText, {
                      type: d.FormTextTypes.DESCRIPTION,
                      className: b.description,
                      children: S.intl.string(S.t.zZp619)
                  }),
                  (null == a ? void 0 : a.isStaff())
                      ? (0, i.jsxs)('div', {
                            className: b.tools,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    className: b.toolsTitle,
                                    variant: 'text-md/bold',
                                    children: 'DEV TOOLS'
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: b.toolsTitle,
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
                                            onClick: E,
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
function N(e) {
    var t, n, r, s, l;
    let { session: o, current: c, setChecked: u, checked: m, useChecks: p } = e,
        x = null !== (l = null === (t = o.client_info) || void 0 === t ? void 0 : t.location) && void 0 !== l ? l : null === (n = o.client_info) || void 0 === n ? void 0 : n.ip,
        f = null === (r = o.client_info) || void 0 === r ? void 0 : r.platform,
        { text: _, icon: C } = (function (e) {
            switch (null == e ? void 0 : e.toLowerCase().trim()) {
                case null:
                case void 0:
                case '':
                    return {
                        text: S.intl.string(S.t.cDHCNT),
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
        T = c ? null : (0, h.p)(o.approx_last_used_time),
        I = [_, f].filter(E.lm),
        N = [x, T].filter(E.lm);
    return (0, i.jsxs)(
        'div',
        {
            className: a()(b.session, c ? b.currentSession : null),
            children: [
                (0, i.jsx)('div', {
                    className: b.sessionIcon,
                    children: (0, i.jsx)(C, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }),
                (0, i.jsxs)('div', {
                    className: b.sessionInfo,
                    children: [
                        (0, i.jsxs)(d.Text, {
                            variant: 'eyebrow',
                            className: b.sessionInfoRow,
                            children: [
                                (0, i.jsx)('span', { children: I[0] }),
                                I.length > 1 &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('span', { children: '\xB7' }), (0, i.jsx)('span', { children: I[1] })]
                                    })
                            ]
                        }),
                        (0, i.jsxs)(d.Text, {
                            variant: 'text-sm/medium',
                            className: b.sessionInfoRow,
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
                    : p
                      ? (0, i.jsx)('div', {
                            className: b.sessionCheckbox,
                            children: (0, i.jsx)(d.Checkbox, {
                                onChange: (e, t) => {
                                    null == u || u(t);
                                },
                                value: m
                            })
                        })
                      : (0, i.jsx)(d.Clickable, {
                            className: b.sessionMoreButton,
                            onClick: (e) => {
                                e.shiftKey ? null == u || u(!0) : (0, g.L$)(o.id_hash);
                            },
                            'aria-label': S.intl.string(S.t.E4MJNj),
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
function v() {
    return (0, i.jsxs)('div', {
        className: a()(b.session, b.legacySession),
        children: [
            (0, i.jsx)('div', {
                className: b.sessionIcon,
                children: (0, i.jsx)(_.Z, {
                    width: '32',
                    height: '32'
                })
            }),
            (0, i.jsxs)('div', {
                className: b.sessionInfo,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: 'eyebrow',
                        className: b.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: S.intl.string(S.t.iUa0sr) })
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        className: b.sessionInfoRow,
                        color: 'text-muted',
                        children: (0, i.jsx)('span', { children: S.intl.format(S.t['044+8v'], { onClick: () => u.Z.setSection(C.oAB.ACCOUNT) }) })
                    })
                ]
            })
        ]
    });
}
