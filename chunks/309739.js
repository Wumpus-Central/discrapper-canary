n.d(t, { Z: () => V }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(658722),
    o = n.n(a),
    c = n(442837),
    d = n(524437),
    u = n(780384),
    h = n(481060),
    m = n(457330),
    g = n(410030),
    x = n(726542),
    _ = n(316496),
    p = n(295377),
    E = n(921801),
    C = n(553795),
    N = n(430824),
    f = n(63063),
    I = n(358085),
    T = n(709054),
    S = n(362352),
    j = n(413182),
    v = n(695346),
    b = n(726985),
    A = n(981631),
    O = n(388032),
    R = n(837889),
    D = n(814632);
function P(e) {
    let t = () => {
        v.SE.updateSetting(e ? T.default.keys(N.Z.getGuilds()) : []);
    };
    (0, h.h7j)((e) =>
        (0, i.jsx)(h.ConfirmModal, {
            header: O.intl.string(O.t['uUr+GR']),
            confirmText: O.intl.string(O.t.gm1Ven),
            cancelText: O.intl.string(O.t.p89ACg),
            onCancel: t,
            confirmButtonColor: h.zxk.Colors.BRAND,
            ...e,
            children: (0, i.jsx)(h.Text, {
                variant: 'text-md/normal',
                children: O.intl.string(O.t.EFu2Ki)
            })
        })
    );
}
function y() {
    let e = v.G6.useSetting(),
        t = v.Wz.useSetting(),
        n = (0, S.Yd)('activity privacy tab'),
        s = I.isPlatformEmbedded ? O.intl.string(O.t.MznbeH) : O.intl.string(O.t.oKqC4u),
        l = (e) => {
            v.Wz.updateSetting(e ? d.E5.ON_FOR_LARGE_GUILDS : d.E5.OFF), P(e);
        },
        a = (e) => {
            v.Wz.updateSetting(e), P(e !== d.E5.OFF);
        },
        o = [
            {
                value: d.E5.ON,
                label: O.intl.string(O.t.UzGMHx)
            },
            {
                value: d.E5.ON_FOR_LARGE_GUILDS,
                label: O.intl.string(O.t.OFqxQU)
            },
            {
                value: d.E5.OFF,
                label: O.intl.string(O.t.MIgNPD)
            }
        ];
    return (0, i.jsx)(E.F, {
        setting: b.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(h.hjN, {
            children: [
                (0, i.jsx)(h.vwX, {
                    tag: h.RB0.H5,
                    className: D.marginBottom8,
                    children: O.intl.string(O.t['8ka8lp'])
                }),
                (0, i.jsx)(h.j7V, {
                    value: e,
                    onChange: (e) => v.G6.updateSetting(e),
                    note: s,
                    children: O.intl.string(O.t['4q/Ewc'])
                }),
                n
                    ? (0, i.jsxs)(h.xJW, {
                          tag: h.RB0.H3,
                          title: O.intl.string(O.t.ffGYGx),
                          children: [
                              (0, i.jsx)(h.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: D.marginBottom8,
                                  children: O.intl.format(O.t.aUxRra, { helpdeskArticle: f.Z.getArticleURL(A.BhN.ACTIVITY_STATUS_SETTINGS) })
                              }),
                              (0, i.jsx)(h.q4e, {
                                  options: o,
                                  value: t,
                                  onChange: (e) => a(e)
                              })
                          ]
                      })
                    : (0, i.jsx)(h.j7V, {
                          value: t === d.E5.OFF,
                          note: O.intl.format(O.t['+5/xu7'], { helpdeskArticle: f.Z.getArticleURL(A.BhN.ACTIVITY_STATUS_SETTINGS) }),
                          onChange: (e) => l(!e),
                          children: O.intl.string(O.t.D5GXTU)
                      }),
                (0, i.jsx)(h.$i$, { className: r()(D.marginBottom20, D.marginTop20) })
            ]
        })
    });
}
function Z() {
    let e = v.cP.useSetting(),
        t = v.Ou.useSetting();
    return (0, i.jsx)(E.F, {
        setting: b.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(h.hjN, {
            className: D.marginBottom40,
            children: [
                (0, i.jsx)(h.vwX, {
                    tag: h.RB0.H5,
                    className: D.marginBottom8,
                    children: O.intl.string(O.t.VOszPD)
                }),
                (0, i.jsx)(h.j7V, {
                    value: e,
                    note: O.intl.string(O.t.Hdh7sb),
                    onChange: (e) => v.cP.updateSetting(e),
                    children: O.intl.string(O.t.WEWQQk)
                }),
                (0, i.jsx)(h.j7V, {
                    value: t,
                    note: O.intl.string(O.t.Czr3Bg),
                    onChange: (e) => v.Ou.updateSetting(e),
                    children: O.intl.string(O.t.UUvJVl)
                })
            ]
        })
    });
}
function L() {
    return (0, i.jsx)(E.F, {
        setting: b.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(h.hjN, {
            className: D.marginBottom40,
            children: (0, i.jsx)(h.ToO, {
                type: h.ToO.Types.PRIMARY,
                body: O.intl.format(O.t.xvCsx8, {
                    termsLink: A.EYA.TERMS,
                    privacyLink: A.EYA.PRIVACY
                })
            })
        })
    });
}
let k = (e) => {
    switch (e.type) {
        case A.ABu.SPOTIFY:
            return O.intl.format(O.t['5sYPnp'], { name: e.name });
        case A.ABu.CRUNCHYROLL:
            return O.intl.format(O.t.Ge29Z2, { name: e.name });
        default:
            return O.intl.format(O.t.nmMsys, { game: e.name });
    }
};
function B(e) {
    let { account: t } = e,
        [n, l] = s.useState(t.showActivity),
        r = (0, g.ZP)();
    s.useEffect(() => {
        l(t.showActivity);
    }, [t]);
    let a = x.Z.get(t.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.j7V, {
                className: R.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    l(e), m.Z.setShowActivity(t.type, t.id, e);
                },
                children: (0, i.jsxs)('div', {
                    className: R.activitySwitchRow,
                    children: [
                        (0, i.jsx)('img', {
                            alt: a.name,
                            className: R.connectionIcon,
                            src: (0, u.wj)(r) ? a.icon.darkSVG : a.icon.lightSVG
                        }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-md/semibold',
                                    children: a.name
                                }),
                                (0, i.jsxs)(h.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: ['"', k(a), '"']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', { className: R.divider })
        ]
    });
}
function M() {
    let e = (0, c.e7)([C.Z], () => C.Z.getAccounts()),
        t = s.useMemo(() => e.filter((e) => x.Z.isSupported(e.type) && A.vbS.has(e.type)), [e]),
        [n, l] = s.useState(''),
        r = s.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => o()(e, x.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, i.jsx)(E.F, {
              setting: b.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, i.jsxs)(h.hjN, {
                  className: D.marginBottom40,
                  children: [
                      (0, i.jsx)(h.vwX, {
                          tag: h.RB0.H5,
                          className: D.marginBottom8,
                          children: O.intl.string(O.t['4F2KoK'])
                      }),
                      (0, i.jsx)(h.oil, {
                          className: R.searchInput,
                          value: n,
                          onChange: l,
                          placeholder: O.intl.string(O.t.WPrtoa)
                      }),
                      r.map((e) => (0, i.jsx)(B, { account: e }, e.id))
                  ]
              })
          });
}
function V(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: s } = j.b.useExperiment({ location: 'activity privacy tab' }),
        { updatedSettingsPageEnabled: l } = (0, _.S)('UserSettingsActivityPrivacy');
    return l
        ? (0, i.jsx)(p.Z, {})
        : (0, i.jsxs)(h.hjN, {
              className: t,
              tag: h.RB0.H1,
              title: n ? O.intl.string(O.t.Cq98yM) : null,
              children: [(0, i.jsx)(y, {}), (0, i.jsx)(Z, {}), (0, i.jsx)(L, {}), s && (0, i.jsx)(M, {})]
          });
}
