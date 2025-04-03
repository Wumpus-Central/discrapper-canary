n.d(t, { Z: () => B }), n(47120), n(566702);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(658722),
    o = n.n(l),
    c = n(442837),
    d = n(524437),
    u = n(780384),
    m = n(481060),
    g = n(457330),
    p = n(410030),
    h = n(726542),
    f = n(116841),
    b = n(295377),
    N = n(921801),
    x = n(553795),
    _ = n(430824),
    E = n(63063),
    j = n(358085),
    O = n(709054),
    C = n(362352),
    S = n(413182),
    v = n(695346),
    T = n(726985),
    I = n(981631),
    y = n(388032),
    A = n(187382),
    P = n(20493);
function R(e) {
    let t = () => {
        v.SE.updateSetting(e ? O.default.keys(_.Z.getGuilds()) : []);
    };
    (0, m.h7j)((e) => {
        var n, i;
        return (0, r.jsx)(
            m.ConfirmModal,
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    header: y.NW.string(y.t['uUr+GR']),
                    confirmText: y.NW.string(y.t.gm1Ven),
                    cancelText: y.NW.string(y.t.p89ACg),
                    onCancel: t,
                    confirmButtonColor: m.zxk.Colors.BRAND
                },
                e
            )),
            (i = i =
                {
                    children: (0, r.jsx)(m.Text, {
                        variant: 'text-md/normal',
                        children: y.NW.string(y.t.EFu2Ki)
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            n)
        );
    });
}
function D() {
    let e = v.G6.useSetting(),
        t = v.Wz.useSetting(),
        n = (0, C.Yd)('activity privacy tab'),
        i = j.isPlatformEmbedded ? y.NW.string(y.t.MznbeH) : y.NW.string(y.t.oKqC4u),
        s = (e) => {
            v.Wz.updateSetting(e ? d.E5.ON_FOR_LARGE_GUILDS : d.E5.OFF), R(e);
        },
        l = (e) => {
            v.Wz.updateSetting(e), R(e !== d.E5.OFF);
        },
        o = [
            {
                value: d.E5.ON,
                label: y.NW.string(y.t.UzGMHx)
            },
            {
                value: d.E5.ON_FOR_LARGE_GUILDS,
                label: y.NW.string(y.t.OFqxQU)
            },
            {
                value: d.E5.OFF,
                label: y.NW.string(y.t.MIgNPD)
            }
        ];
    return (0, r.jsx)(N.F, {
        setting: T.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(m.hjN, {
            children: [
                (0, r.jsx)(m.vwX, {
                    tag: m.RB0.H5,
                    className: P.marginBottom8,
                    children: y.NW.string(y.t['8ka8lp'])
                }),
                (0, r.jsx)(m.j7V, {
                    value: e,
                    onChange: (e) => v.G6.updateSetting(e),
                    note: i,
                    children: y.NW.string(y.t['4q/Ewc'])
                }),
                n
                    ? (0, r.jsxs)(m.xJW, {
                          tag: m.RB0.H3,
                          title: y.NW.string(y.t.ffGYGx),
                          children: [
                              (0, r.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: P.marginBottom8,
                                  children: y.NW.format(y.t.aUxRra, { helpdeskArticle: E.Z.getArticleURL(I.BhN.ACTIVITY_STATUS_SETTINGS) })
                              }),
                              (0, r.jsx)(m.q4e, {
                                  options: o,
                                  value: t,
                                  onChange: (e) => l(e)
                              })
                          ]
                      })
                    : (0, r.jsx)(m.j7V, {
                          value: t === d.E5.OFF,
                          note: y.NW.format(y.t['+5/xu7'], { helpdeskArticle: E.Z.getArticleURL(I.BhN.ACTIVITY_STATUS_SETTINGS) }),
                          onChange: (e) => s(!e),
                          children: y.NW.string(y.t.D5GXTU)
                      }),
                (0, r.jsx)(m.$i$, { className: a()(P.marginBottom20, P.marginTop20) })
            ]
        })
    });
}
function Z() {
    let e = v.cP.useSetting(),
        t = v.Ou.useSetting();
    return (0, r.jsx)(N.F, {
        setting: T.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(m.hjN, {
            className: P.marginBottom40,
            children: [
                (0, r.jsx)(m.vwX, {
                    tag: m.RB0.H5,
                    className: P.marginBottom8,
                    children: y.NW.string(y.t.VOszPD)
                }),
                (0, r.jsx)(m.j7V, {
                    value: e,
                    note: y.NW.string(y.t.Hdh7sb),
                    onChange: (e) => v.cP.updateSetting(e),
                    children: y.NW.string(y.t.WEWQQk)
                }),
                (0, r.jsx)(m.j7V, {
                    value: t,
                    note: y.NW.string(y.t.Czr3Bg),
                    onChange: (e) => v.Ou.updateSetting(e),
                    children: y.NW.string(y.t.UUvJVl)
                })
            ]
        })
    });
}
function w() {
    return (0, r.jsx)(N.F, {
        setting: T.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(m.hjN, {
            className: P.marginBottom40,
            children: (0, r.jsx)(m.ToO, {
                type: m.ToO.Types.PRIMARY,
                body: y.NW.format(y.t.xvCsx8, {
                    termsLink: I.EYA.TERMS,
                    privacyLink: I.EYA.PRIVACY
                })
            })
        })
    });
}
let k = (e) => {
    switch (e.type) {
        case I.ABu.SPOTIFY:
            return y.NW.format(y.t['5sYPnp'], { name: e.name });
        case I.ABu.CRUNCHYROLL:
            return y.NW.format(y.t.Ge29Z2, { name: e.name });
        default:
            return y.NW.format(y.t.nmMsys, { game: e.name });
    }
};
function W(e) {
    let { account: t } = e,
        [n, s] = i.useState(t.showActivity),
        a = (0, p.ZP)();
    i.useEffect(() => {
        s(t.showActivity);
    }, [t]);
    let l = h.Z.get(t.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.j7V, {
                className: A.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    s(e), g.Z.setShowActivity(t.type, t.id, e);
                },
                children: (0, r.jsxs)('div', {
                    className: A.activitySwitchRow,
                    children: [
                        (0, r.jsx)('img', {
                            alt: l.name,
                            className: A.connectionIcon,
                            src: (0, u.wj)(a) ? l.icon.darkSVG : l.icon.lightSVG
                        }),
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-md/semibold',
                                    children: l.name
                                }),
                                (0, r.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: ['"', k(l), '"']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsx)('div', { className: A.divider })
        ]
    });
}
function L() {
    let e = (0, c.e7)([x.Z], () => x.Z.getAccounts()),
        t = i.useMemo(() => e.filter((e) => h.Z.isSupported(e.type) && I.vbS.has(e.type)), [e]),
        [n, s] = i.useState(''),
        a = i.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => o()(e, h.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, r.jsx)(N.F, {
              setting: T.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, r.jsxs)(m.hjN, {
                  className: P.marginBottom40,
                  children: [
                      (0, r.jsx)(m.vwX, {
                          tag: m.RB0.H5,
                          className: P.marginBottom8,
                          children: y.NW.string(y.t['4F2KoK'])
                      }),
                      (0, r.jsx)(m.oil, {
                          className: A.searchInput,
                          value: n,
                          onChange: s,
                          placeholder: y.NW.string(y.t.WPrtoa)
                      }),
                      a.map((e) => (0, r.jsx)(W, { account: e }, e.id))
                  ]
              })
          });
}
function B(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: i } = S.b.useExperiment({ location: 'activity privacy tab' }),
        { showPerGuildActivityStatusSetting: s } = (0, f.c)('activity privacy tab');
    return s
        ? (0, r.jsx)(b.Z, {})
        : (0, r.jsxs)(m.hjN, {
              className: t,
              tag: m.RB0.H1,
              title: n ? y.NW.string(y.t.Cq98yM) : null,
              children: [(0, r.jsx)(D, {}), (0, r.jsx)(Z, {}), (0, r.jsx)(w, {}), i && (0, r.jsx)(L, {})]
          });
}
