n.d(t, { Z: () => w }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(658722),
    o = n.n(a),
    c = n(442837),
    d = n(524437),
    u = n(780384),
    m = n(481060),
    h = n(457330),
    g = n(410030),
    _ = n(726542),
    x = n(316496),
    p = n(295377),
    E = n(921801),
    C = n(553795),
    f = n(430824),
    T = n(63063),
    N = n(358085),
    S = n(709054),
    I = n(362352),
    b = n(413182),
    v = n(695346),
    j = n(726985),
    A = n(981631),
    O = n(388032),
    R = n(147522),
    P = n(232186);
function D(e) {
    let t = () => {
        v.SE.updateSetting(e ? S.default.keys(f.Z.getGuilds()) : []);
    };
    (0, m.h7j)((e) =>
        (0, i.jsx)(m.ConfirmModal, {
            header: O.intl.string(O.t['uUr+GR']),
            confirmText: O.intl.string(O.t.gm1Ven),
            cancelText: O.intl.string(O.t.p89ACg),
            onCancel: t,
            confirmButtonColor: m.zxk.Colors.BRAND,
            ...e,
            children: (0, i.jsx)(m.Text, {
                variant: 'text-md/normal',
                children: O.intl.string(O.t.EFu2Ki)
            })
        })
    );
}
function y() {
    let e = v.G6.useSetting(),
        t = v.Wz.useSetting(),
        n = (0, I.Yd)('activity privacy tab'),
        s = N.isPlatformEmbedded ? O.intl.string(O.t.MznbeH) : O.intl.string(O.t.oKqC4u),
        r = (e) => {
            v.Wz.updateSetting(e ? d.E5.ON_FOR_LARGE_GUILDS : d.E5.OFF), D(e);
        },
        a = (e) => {
            v.Wz.updateSetting(e), D(e !== d.E5.OFF);
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
        setting: j.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(m.hjN, {
            children: [
                (0, i.jsx)(m.vwX, {
                    tag: m.RB0.H5,
                    className: P.marginBottom8,
                    children: O.intl.string(O.t['8ka8lp'])
                }),
                (0, i.jsx)(m.j7V, {
                    value: e,
                    onChange: (e) => v.G6.updateSetting(e),
                    note: s,
                    children: O.intl.string(O.t['4q/Ewc'])
                }),
                n
                    ? (0, i.jsxs)(m.xJW, {
                          tag: m.RB0.H3,
                          title: O.intl.string(O.t.ffGYGx),
                          children: [
                              (0, i.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: P.marginBottom8,
                                  children: O.intl.format(O.t.aUxRra, { helpdeskArticle: T.Z.getArticleURL(A.BhN.ACTIVITY_STATUS_SETTINGS) })
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
                          note: O.intl.format(O.t['+5/xu7'], { helpdeskArticle: T.Z.getArticleURL(A.BhN.ACTIVITY_STATUS_SETTINGS) }),
                          onChange: (e) => r(!e),
                          children: O.intl.string(O.t.D5GXTU)
                      }),
                (0, i.jsx)(m.$i$, { className: l()(P.marginBottom20, P.marginTop20) })
            ]
        })
    });
}
function Z() {
    let e = v.cP.useSetting(),
        t = v.Ou.useSetting();
    return (0, i.jsx)(E.F, {
        setting: j.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(m.hjN, {
            className: P.marginBottom40,
            children: [
                (0, i.jsx)(m.vwX, {
                    tag: m.RB0.H5,
                    className: P.marginBottom8,
                    children: O.intl.string(O.t.VOszPD)
                }),
                (0, i.jsx)(m.j7V, {
                    value: e,
                    note: O.intl.string(O.t.Hdh7sb),
                    onChange: (e) => v.cP.updateSetting(e),
                    children: O.intl.string(O.t.WEWQQk)
                }),
                (0, i.jsx)(m.j7V, {
                    value: t,
                    note: O.intl.string(O.t.Czr3Bg),
                    onChange: (e) => v.Ou.updateSetting(e),
                    children: O.intl.string(O.t.UUvJVl)
                })
            ]
        })
    });
}
function k() {
    return (0, i.jsx)(E.F, {
        setting: j.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(m.hjN, {
            className: P.marginBottom40,
            children: (0, i.jsx)(m.ToO, {
                type: m.ToO.Types.PRIMARY,
                body: O.intl.format(O.t.xvCsx8, {
                    termsLink: A.EYA.TERMS,
                    privacyLink: A.EYA.PRIVACY
                })
            })
        })
    });
}
let L = (e) => {
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
        [n, r] = s.useState(t.showActivity),
        l = (0, g.ZP)();
    s.useEffect(() => {
        r(t.showActivity);
    }, [t]);
    let a = _.Z.get(t.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.j7V, {
                className: R.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    r(e), h.Z.setShowActivity(t.type, t.id, e);
                },
                children: (0, i.jsxs)('div', {
                    className: R.activitySwitchRow,
                    children: [
                        (0, i.jsx)('img', {
                            alt: a.name,
                            className: R.connectionIcon,
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
                                    children: ['"', L(a), '"']
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
        t = s.useMemo(() => e.filter((e) => _.Z.isSupported(e.type) && A.vbS.has(e.type)), [e]),
        [n, r] = s.useState(''),
        l = s.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => o()(e, _.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, i.jsx)(E.F, {
              setting: j.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, i.jsxs)(m.hjN, {
                  className: P.marginBottom40,
                  children: [
                      (0, i.jsx)(m.vwX, {
                          tag: m.RB0.H5,
                          className: P.marginBottom8,
                          children: O.intl.string(O.t['4F2KoK'])
                      }),
                      (0, i.jsx)(m.oil, {
                          className: R.searchInput,
                          value: n,
                          onChange: r,
                          placeholder: O.intl.string(O.t.WPrtoa)
                      }),
                      l.map((e) => (0, i.jsx)(B, { account: e }, e.id))
                  ]
              })
          });
}
function w(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: s } = b.b.useExperiment({ location: 'activity privacy tab' }),
        { updatedSettingsPageEnabled: r } = (0, x.S)('UserSettingsActivityPrivacy');
    return r
        ? (0, i.jsx)(p.Z, {})
        : (0, i.jsxs)(m.hjN, {
              className: t,
              tag: m.RB0.H1,
              title: n ? O.intl.string(O.t.Cq98yM) : null,
              children: [(0, i.jsx)(y, {}), (0, i.jsx)(Z, {}), (0, i.jsx)(k, {}), s && (0, i.jsx)(M, {})]
          });
}
