n.d(t, { Z: () => W }), n(47120), n(566702);
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
    f = n(921801),
    b = n(553795),
    N = n(430824),
    x = n(63063),
    _ = n(358085),
    E = n(709054),
    j = n(362352),
    C = n(413182),
    O = n(695346),
    v = n(726985),
    S = n(981631),
    T = n(388032),
    I = n(820946),
    y = n(455812);
function A(e) {
    let t = () => {
        O.SE.updateSetting(e ? E.default.keys(N.Z.getGuilds()) : []);
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
                    header: T.NW.string(T.t['uUr+GR']),
                    confirmText: T.NW.string(T.t.gm1Ven),
                    cancelText: T.NW.string(T.t.p89ACg),
                    onCancel: t,
                    confirmButtonColor: m.zxk.Colors.BRAND
                },
                e
            )),
            (i = i =
                {
                    children: (0, r.jsx)(m.Text, {
                        variant: 'text-md/normal',
                        children: T.NW.string(T.t.EFu2Ki)
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
function P() {
    let e = O.G6.useSetting(),
        t = O.Wz.useSetting(),
        n = (0, j.Yd)('activity privacy tab'),
        i = _.isPlatformEmbedded ? T.NW.string(T.t.MznbeH) : T.NW.string(T.t.oKqC4u),
        s = (e) => {
            O.Wz.updateSetting(e ? d.E5.ON_FOR_LARGE_GUILDS : d.E5.OFF), A(e);
        },
        l = (e) => {
            O.Wz.updateSetting(e), A(e !== d.E5.OFF);
        },
        o = [
            {
                value: d.E5.ON,
                label: T.NW.string(T.t.UzGMHx)
            },
            {
                value: d.E5.ON_FOR_LARGE_GUILDS,
                label: T.NW.string(T.t.OFqxQU)
            },
            {
                value: d.E5.OFF,
                label: T.NW.string(T.t.MIgNPD)
            }
        ];
    return (0, r.jsx)(f.F, {
        setting: v.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(m.hjN, {
            children: [
                (0, r.jsx)(m.vwX, {
                    tag: m.RB0.H5,
                    className: y.marginBottom8,
                    children: T.NW.string(T.t['8ka8lp'])
                }),
                (0, r.jsx)(m.j7V, {
                    value: e,
                    onChange: (e) => O.G6.updateSetting(e),
                    note: i,
                    children: T.NW.string(T.t['4q/Ewc'])
                }),
                n
                    ? (0, r.jsxs)(m.xJW, {
                          tag: m.RB0.H3,
                          title: T.NW.string(T.t.ffGYGx),
                          children: [
                              (0, r.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: y.marginBottom8,
                                  children: T.NW.format(T.t.aUxRra, { helpdeskArticle: x.Z.getArticleURL(S.BhN.ACTIVITY_STATUS_SETTINGS) })
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
                          note: T.NW.format(T.t['+5/xu7'], { helpdeskArticle: x.Z.getArticleURL(S.BhN.ACTIVITY_STATUS_SETTINGS) }),
                          onChange: (e) => s(!e),
                          children: T.NW.string(T.t.D5GXTU)
                      }),
                (0, r.jsx)(m.$i$, { className: a()(y.marginBottom20, y.marginTop20) })
            ]
        })
    });
}
function R() {
    let e = O.cP.useSetting(),
        t = O.Ou.useSetting();
    return (0, r.jsx)(f.F, {
        setting: v.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(m.hjN, {
            className: y.marginBottom40,
            children: [
                (0, r.jsx)(m.vwX, {
                    tag: m.RB0.H5,
                    className: y.marginBottom8,
                    children: T.NW.string(T.t.VOszPD)
                }),
                (0, r.jsx)(m.j7V, {
                    value: e,
                    note: T.NW.string(T.t.Hdh7sb),
                    onChange: (e) => O.cP.updateSetting(e),
                    children: T.NW.string(T.t.WEWQQk)
                }),
                (0, r.jsx)(m.j7V, {
                    value: t,
                    note: T.NW.string(T.t.Czr3Bg),
                    onChange: (e) => O.Ou.updateSetting(e),
                    children: T.NW.string(T.t.UUvJVl)
                })
            ]
        })
    });
}
function D() {
    return (0, r.jsx)(f.F, {
        setting: v.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(m.hjN, {
            className: y.marginBottom40,
            children: (0, r.jsx)(m.ToO, {
                type: m.ToO.Types.PRIMARY,
                body: T.NW.format(T.t.xvCsx8, {
                    termsLink: S.EYA.TERMS,
                    privacyLink: S.EYA.PRIVACY
                })
            })
        })
    });
}
let Z = (e) => {
    switch (e.type) {
        case S.ABu.SPOTIFY:
            return T.NW.format(T.t['5sYPnp'], { name: e.name });
        case S.ABu.CRUNCHYROLL:
            return T.NW.format(T.t.Ge29Z2, { name: e.name });
        default:
            return T.NW.format(T.t.nmMsys, { game: e.name });
    }
};
function w(e) {
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
                className: I.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    s(e), g.Z.setShowActivity(t.type, t.id, e);
                },
                children: (0, r.jsxs)('div', {
                    className: I.activitySwitchRow,
                    children: [
                        (0, r.jsx)('img', {
                            alt: l.name,
                            className: I.connectionIcon,
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
                                    children: ['"', Z(l), '"']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsx)('div', { className: I.divider })
        ]
    });
}
function k() {
    let e = (0, c.e7)([b.Z], () => b.Z.getAccounts()),
        t = i.useMemo(() => e.filter((e) => h.Z.isSupported(e.type) && S.vbS.has(e.type)), [e]),
        [n, s] = i.useState(''),
        a = i.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => o()(e, h.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, r.jsx)(f.F, {
              setting: v.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, r.jsxs)(m.hjN, {
                  className: y.marginBottom40,
                  children: [
                      (0, r.jsx)(m.vwX, {
                          tag: m.RB0.H5,
                          className: y.marginBottom8,
                          children: T.NW.string(T.t['4F2KoK'])
                      }),
                      (0, r.jsx)(m.oil, {
                          className: I.searchInput,
                          value: n,
                          onChange: s,
                          placeholder: T.NW.string(T.t.WPrtoa)
                      }),
                      a.map((e) => (0, r.jsx)(w, { account: e }, e.id))
                  ]
              })
          });
}
function W(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: i } = C.b.useExperiment({ location: 'activity privacy tab' });
    return (0, r.jsxs)(m.hjN, {
        className: t,
        tag: m.RB0.H1,
        title: n ? T.NW.string(T.t.Cq98yM) : null,
        children: [(0, r.jsx)(P, {}), (0, r.jsx)(R, {}), (0, r.jsx)(D, {}), i && (0, r.jsx)(k, {})]
    });
}
