(n.d(t, { Z: () => U }), n(388685), n(781311));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(658722),
    o = n.n(l),
    c = n(442837),
    d = n(524437),
    u = n(780384),
    m = n(755721),
    p = n(481060),
    g = n(457330),
    h = n(410030),
    f = n(726542),
    b = n(316496),
    x = n(116841),
    _ = n(335082),
    j = n(921801),
    E = n(553795),
    C = n(430824),
    O = n(63063),
    v = n(358085),
    S = n(362352),
    T = n(413182),
    I = n(695346),
    N = n(726985),
    y = n(981631),
    A = n(388032),
    P = n(187382),
    R = n(20493);
function D(e) {
    let t = () => {
        I.SE.updateSetting(e ? C.Z.getGuildIds() : []);
    };
    (0, p.h7j)((e) => {
        var n, r;
        return (0, i.jsx)(
            p.ConfirmModal,
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            ((i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i));
                        }));
                }
                return e;
            })(
                {
                    header: A.intl.string(A.t['uUr+GR']),
                    confirmText: A.intl.string(A.t.gm1Ven),
                    cancelText: A.intl.string(A.t.p89ACg),
                    onCancel: t,
                    confirmButtonColor: m.zx.Colors.BRAND
                },
                e
            )),
            (r = r =
                {
                    children: (0, i.jsx)(p.Text, {
                        variant: 'text-md/normal',
                        children: A.intl.string(A.t.EFu2Ki)
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            n)
        );
    });
}
function Z() {
    let e = I.G6.useSetting(),
        t = I.no.useSetting(),
        n = (0, S.Yd)('activity privacy tab'),
        r = v.isPlatformEmbedded ? A.intl.string(A.t.MznbeH) : A.intl.string(A.t.oKqC4u),
        s = (e) => {
            (I.no.updateSetting(e ? d.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS : d.GI.ACTIVITY_STATUS_OFF), D(e));
        },
        l = (e) => {
            (I.no.updateSetting(e), D(e !== d.GI.ACTIVITY_STATUS_OFF));
        },
        o = [
            {
                value: d.GI.ACTIVITY_STATUS_ON,
                label: A.intl.string(A.t.UzGMHx)
            },
            {
                value: d.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                label: A.intl.string(A.t.OFqxQU)
            },
            {
                value: d.GI.ACTIVITY_STATUS_OFF,
                label: A.intl.string(A.t.MIgNPD)
            }
        ];
    return (0, i.jsx)(j.F, {
        setting: N.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(p.hjN, {
            children: [
                (0, i.jsx)(p.vwX, {
                    tag: p.RB0.H5,
                    className: R.marginBottom8,
                    children: A.intl.string(A.t['8ka8lp'])
                }),
                (0, i.jsx)(p.j7V, {
                    value: e,
                    onChange: (e) => I.G6.updateSetting(e),
                    note: r,
                    children: A.intl.string(A.t['4q/Ewc'])
                }),
                n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)(p.xJW, {
                                  tag: p.RB0.H3,
                                  title: A.intl.string(A.t.ffGYGx),
                                  children: [
                                      (0, i.jsx)(p.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'header-secondary',
                                          className: R.marginBottom8,
                                          children: A.intl.format(A.t.aUxRra, { helpdeskArticle: O.Z.getArticleURL(y.BhN.ACTIVITY_STATUS_SETTINGS) })
                                      }),
                                      (0, i.jsx)(p.q4e, {
                                          options: o,
                                          value: t,
                                          onChange: (e) => l(e)
                                      })
                                  ]
                              }),
                              (0, i.jsx)(p.$i$, { className: a()(R.marginBottom20, R.marginTop20) })
                          ]
                      })
                    : (0, i.jsx)(p.j7V, {
                          value: t === d.GI.ACTIVITY_STATUS_OFF,
                          note: A.intl.format(A.t['+5/xu7'], { helpdeskArticle: O.Z.getArticleURL(y.BhN.ACTIVITY_STATUS_SETTINGS) }),
                          onChange: (e) => s(!e),
                          children: A.intl.string(A.t.D5GXTU)
                      })
            ]
        })
    });
}
function w() {
    let e = I.cP.useSetting(),
        t = I.Ou.useSetting();
    return (0, i.jsx)(j.F, {
        setting: N.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(p.hjN, {
            className: R.marginBottom40,
            children: [
                (0, i.jsx)(p.vwX, {
                    tag: p.RB0.H5,
                    className: R.marginBottom8,
                    children: A.intl.string(A.t.VOszPD)
                }),
                (0, i.jsx)(p.j7V, {
                    value: e,
                    note: A.intl.string(A.t.Hdh7sb),
                    onChange: (e) => I.cP.updateSetting(e),
                    children: A.intl.string(A.t.WEWQQk)
                }),
                (0, i.jsx)(p.j7V, {
                    value: t,
                    note: A.intl.string(A.t.Czr3Bg),
                    onChange: (e) => I.Ou.updateSetting(e),
                    children: A.intl.string(A.t.UUvJVl)
                })
            ]
        })
    });
}
function k() {
    return (0, i.jsx)(j.F, {
        setting: N.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(p.hjN, {
            className: R.marginBottom40,
            children: (0, i.jsx)(p.ToO, {
                type: p.ToO.Types.PRIMARY,
                body: A.intl.format(A.t.xvCsx8, {
                    termsLink: y.EYA.TERMS,
                    privacyLink: y.EYA.PRIVACY
                })
            })
        })
    });
}
let L = (e) => {
    switch (e.type) {
        case y.ABu.SPOTIFY:
            return A.intl.format(A.t['5sYPnp'], { name: e.name });
        case y.ABu.CRUNCHYROLL:
            return A.intl.format(A.t.Ge29Z2, { name: e.name });
        default:
            return A.intl.format(A.t.nmMsys, { game: e.name });
    }
};
function B(e) {
    let { account: t } = e,
        [n, s] = r.useState(t.showActivity),
        a = (0, h.ZP)();
    r.useEffect(() => {
        s(t.showActivity);
    }, [t]);
    let l = f.Z.get(t.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.j7V, {
                className: P.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    (s(e), g.Z.setShowActivity(t.type, t.id, e));
                },
                children: (0, i.jsxs)('div', {
                    className: P.activitySwitchRow,
                    children: [
                        (0, i.jsx)('img', {
                            alt: l.name,
                            className: P.connectionIcon,
                            src: (0, u.wj)(a) ? l.icon.darkSVG : l.icon.lightSVG
                        }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(p.Text, {
                                    variant: 'text-md/semibold',
                                    children: l.name
                                }),
                                (0, i.jsxs)(p.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: ['"', L(l), '"']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', { className: P.divider })
        ]
    });
}
function M() {
    let e = (0, c.e7)([E.Z], () => E.Z.getAccounts()),
        t = r.useMemo(() => e.filter((e) => f.Z.isSupported(e.type) && y.vbS.has(e.type)), [e]),
        [n, s] = r.useState(''),
        a = r.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => o()(e, f.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, i.jsx)(j.F, {
              setting: N.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, i.jsxs)(p.hjN, {
                  className: R.marginBottom40,
                  children: [
                      (0, i.jsx)(p.vwX, {
                          tag: p.RB0.H5,
                          className: R.marginBottom8,
                          children: A.intl.string(A.t['4F2KoK'])
                      }),
                      (0, i.jsx)(m.Is, {
                          className: P.searchInput,
                          value: n,
                          onChange: s,
                          placeholder: A.intl.string(A.t.WPrtoa)
                      }),
                      a.map((e) => (0, i.jsx)(B, { account: e }, e.id))
                  ]
              })
          });
}
function U(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: r } = T.b.useExperiment({ location: 'activity privacy tab' }),
        { showPerGuildActivityStatusSetting: s } = (0, x.c)('activity privacy tab'),
        { showUpdatedSettingsPage: a } = (0, b.D)('activity privacy tab');
    return s || a
        ? (0, i.jsx)(_.Z, {})
        : (0, i.jsxs)(p.hjN, {
              className: t,
              tag: p.RB0.H1,
              title: n ? A.intl.string(A.t.Cq98yM) : null,
              children: [(0, i.jsx)(Z, {}), (0, i.jsx)(w, {}), (0, i.jsx)(k, {}), r && (0, i.jsx)(M, {})]
          });
}
