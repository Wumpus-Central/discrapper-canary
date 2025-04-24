n.d(t, { Z: () => M }), n(388685), n(781311);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(658722),
    o = n.n(a),
    c = n(442837),
    d = n(524437),
    u = n(780384),
    m = n(481060),
    p = n(457330),
    g = n(410030),
    h = n(726542),
    f = n(116841),
    b = n(295377),
    _ = n(921801),
    x = n(553795),
    E = n(430824),
    C = n(63063),
    j = n(358085),
    O = n(709054),
    S = n(362352),
    v = n(413182),
    T = n(695346),
    I = n(726985),
    N = n(981631),
    y = n(388032),
    A = n(187382),
    P = n(20493);
function R(e) {
    let t = () => {
        T.SE.updateSetting(e ? O.default.keys(E.Z.getGuilds()) : []);
    };
    (0, m.h7j)((e) => {
        var n, r;
        return (0, i.jsx)(
            m.ConfirmModal,
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })(
                {
                    header: y.intl.string(y.t['uUr+GR']),
                    confirmText: y.intl.string(y.t.gm1Ven),
                    cancelText: y.intl.string(y.t.p89ACg),
                    onCancel: t,
                    confirmButtonColor: m.zxk.Colors.BRAND
                },
                e
            )),
            (r = r =
                {
                    children: (0, i.jsx)(m.Text, {
                        variant: 'text-md/normal',
                        children: y.intl.string(y.t.EFu2Ki)
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
function D() {
    let e = T.G6.useSetting(),
        t = T.Wz.useSetting(),
        n = (0, S.Yd)('activity privacy tab'),
        r = j.isPlatformEmbedded ? y.intl.string(y.t.MznbeH) : y.intl.string(y.t.oKqC4u),
        s = (e) => {
            T.Wz.updateSetting(e ? d.E5.ON_FOR_LARGE_GUILDS : d.E5.OFF), R(e);
        },
        a = (e) => {
            T.Wz.updateSetting(e), R(e !== d.E5.OFF);
        },
        o = [
            {
                value: d.E5.ON,
                label: y.intl.string(y.t.UzGMHx)
            },
            {
                value: d.E5.ON_FOR_LARGE_GUILDS,
                label: y.intl.string(y.t.OFqxQU)
            },
            {
                value: d.E5.OFF,
                label: y.intl.string(y.t.MIgNPD)
            }
        ];
    return (0, i.jsx)(_.F, {
        setting: I.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(m.hjN, {
            children: [
                (0, i.jsx)(m.vwX, {
                    tag: m.RB0.H5,
                    className: P.marginBottom8,
                    children: y.intl.string(y.t['8ka8lp'])
                }),
                (0, i.jsx)(m.j7V, {
                    value: e,
                    onChange: (e) => T.G6.updateSetting(e),
                    note: r,
                    children: y.intl.string(y.t['4q/Ewc'])
                }),
                n
                    ? (0, i.jsxs)(m.xJW, {
                          tag: m.RB0.H3,
                          title: y.intl.string(y.t.ffGYGx),
                          children: [
                              (0, i.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: P.marginBottom8,
                                  children: y.intl.format(y.t.aUxRra, { helpdeskArticle: C.Z.getArticleURL(N.BhN.ACTIVITY_STATUS_SETTINGS) })
                              }),
                              (0, i.jsx)(m.q4e, {
                                  options: o,
                                  value: t,
                                  onChange: (e) => a(e)
                              })
                          ]
                      })
                    : (0, i.jsx)(m.j7V, {
                          value: t === d.E5.OFF,
                          note: y.intl.format(y.t['+5/xu7'], { helpdeskArticle: C.Z.getArticleURL(N.BhN.ACTIVITY_STATUS_SETTINGS) }),
                          onChange: (e) => s(!e),
                          children: y.intl.string(y.t.D5GXTU)
                      }),
                (0, i.jsx)(m.$i$, { className: l()(P.marginBottom20, P.marginTop20) })
            ]
        })
    });
}
function Z() {
    let e = T.cP.useSetting(),
        t = T.Ou.useSetting();
    return (0, i.jsx)(_.F, {
        setting: I.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(m.hjN, {
            className: P.marginBottom40,
            children: [
                (0, i.jsx)(m.vwX, {
                    tag: m.RB0.H5,
                    className: P.marginBottom8,
                    children: y.intl.string(y.t.VOszPD)
                }),
                (0, i.jsx)(m.j7V, {
                    value: e,
                    note: y.intl.string(y.t.Hdh7sb),
                    onChange: (e) => T.cP.updateSetting(e),
                    children: y.intl.string(y.t.WEWQQk)
                }),
                (0, i.jsx)(m.j7V, {
                    value: t,
                    note: y.intl.string(y.t.Czr3Bg),
                    onChange: (e) => T.Ou.updateSetting(e),
                    children: y.intl.string(y.t.UUvJVl)
                })
            ]
        })
    });
}
function w() {
    return (0, i.jsx)(_.F, {
        setting: I.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(m.hjN, {
            className: P.marginBottom40,
            children: (0, i.jsx)(m.ToO, {
                type: m.ToO.Types.PRIMARY,
                body: y.intl.format(y.t.xvCsx8, {
                    termsLink: N.EYA.TERMS,
                    privacyLink: N.EYA.PRIVACY
                })
            })
        })
    });
}
let k = (e) => {
    switch (e.type) {
        case N.ABu.SPOTIFY:
            return y.intl.format(y.t['5sYPnp'], { name: e.name });
        case N.ABu.CRUNCHYROLL:
            return y.intl.format(y.t.Ge29Z2, { name: e.name });
        default:
            return y.intl.format(y.t.nmMsys, { game: e.name });
    }
};
function L(e) {
    let { account: t } = e,
        [n, s] = r.useState(t.showActivity),
        l = (0, g.ZP)();
    r.useEffect(() => {
        s(t.showActivity);
    }, [t]);
    let a = h.Z.get(t.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.j7V, {
                className: A.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    s(e), p.Z.setShowActivity(t.type, t.id, e);
                },
                children: (0, i.jsxs)('div', {
                    className: A.activitySwitchRow,
                    children: [
                        (0, i.jsx)('img', {
                            alt: a.name,
                            className: A.connectionIcon,
                            src: (0, u.wj)(l) ? a.icon.darkSVG : a.icon.lightSVG
                        }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-md/semibold',
                                    children: a.name
                                }),
                                (0, i.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: ['"', k(a), '"']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', { className: A.divider })
        ]
    });
}
function B() {
    let e = (0, c.e7)([x.Z], () => x.Z.getAccounts()),
        t = r.useMemo(() => e.filter((e) => h.Z.isSupported(e.type) && N.vbS.has(e.type)), [e]),
        [n, s] = r.useState(''),
        l = r.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => o()(e, h.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, i.jsx)(_.F, {
              setting: I.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, i.jsxs)(m.hjN, {
                  className: P.marginBottom40,
                  children: [
                      (0, i.jsx)(m.vwX, {
                          tag: m.RB0.H5,
                          className: P.marginBottom8,
                          children: y.intl.string(y.t['4F2KoK'])
                      }),
                      (0, i.jsx)(m.oil, {
                          className: A.searchInput,
                          value: n,
                          onChange: s,
                          placeholder: y.intl.string(y.t.WPrtoa)
                      }),
                      l.map((e) => (0, i.jsx)(L, { account: e }, e.id))
                  ]
              })
          });
}
function M(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: r } = v.b.useExperiment({ location: 'activity privacy tab' }),
        { showPerGuildActivityStatusSetting: s } = (0, f.c)('activity privacy tab');
    return s
        ? (0, i.jsx)(b.Z, {})
        : (0, i.jsxs)(m.hjN, {
              className: t,
              tag: m.RB0.H1,
              title: n ? y.intl.string(y.t.Cq98yM) : null,
              children: [(0, i.jsx)(D, {}), (0, i.jsx)(Z, {}), (0, i.jsx)(w, {}), r && (0, i.jsx)(B, {})]
          });
}
