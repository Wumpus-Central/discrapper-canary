n.d(t, { Z: () => B }), n(47120);
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
    g = n(457330),
    h = n(410030),
    x = n(726542),
    _ = n(921801),
    p = n(553795),
    E = n(430824),
    C = n(63063),
    f = n(358085),
    T = n(709054),
    N = n(362352),
    S = n(413182),
    I = n(695346),
    b = n(726985),
    v = n(981631),
    j = n(388032),
    A = n(687575),
    O = n(483938);
function R(e) {
    let t = () => {
        I.SE.updateSetting(e ? T.default.keys(E.Z.getGuilds()) : []);
    };
    (0, m.h7j)((e) =>
        (0, i.jsx)(m.ConfirmModal, {
            header: j.intl.string(j.t['uUr+GR']),
            confirmText: j.intl.string(j.t.gm1Ven),
            cancelText: j.intl.string(j.t.p89ACg),
            onCancel: t,
            confirmButtonColor: m.zxk.Colors.BRAND,
            ...e,
            children: (0, i.jsx)(m.Text, {
                variant: 'text-md/normal',
                children: j.intl.string(j.t.EFu2Ki)
            })
        })
    );
}
function P() {
    let e = I.G6.useSetting(),
        t = I.Wz.useSetting(),
        n = (0, N.Yd)('activity privacy tab'),
        s = f.isPlatformEmbedded ? j.intl.string(j.t.MznbeH) : j.intl.string(j.t.oKqC4u),
        r = (e) => {
            I.Wz.updateSetting(e ? d.E5.ON_FOR_LARGE_GUILDS : d.E5.OFF), R(e);
        },
        a = (e) => {
            I.Wz.updateSetting(e), R(e !== d.E5.OFF);
        },
        o = [
            {
                value: d.E5.ON,
                label: j.intl.string(j.t.UzGMHx)
            },
            {
                value: d.E5.ON_FOR_LARGE_GUILDS,
                label: j.intl.string(j.t.OFqxQU)
            },
            {
                value: d.E5.OFF,
                label: j.intl.string(j.t.MIgNPD)
            }
        ];
    return (0, i.jsx)(_.F, {
        setting: b.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(m.hjN, {
            children: [
                (0, i.jsx)(m.vwX, {
                    tag: m.RB0.H5,
                    className: O.marginBottom8,
                    children: j.intl.string(j.t['8ka8lp'])
                }),
                (0, i.jsx)(m.j7V, {
                    value: e,
                    onChange: (e) => I.G6.updateSetting(e),
                    note: s,
                    children: j.intl.string(j.t['4q/Ewc'])
                }),
                n
                    ? (0, i.jsxs)(m.xJW, {
                          tag: m.RB0.H3,
                          title: j.intl.string(j.t.ffGYGx),
                          children: [
                              (0, i.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: O.marginBottom8,
                                  children: j.intl.format(j.t.aUxRra, { helpdeskArticle: C.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS) })
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
                          note: j.intl.format(j.t['+5/xu7'], { helpdeskArticle: C.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS) }),
                          onChange: (e) => r(!e),
                          children: j.intl.string(j.t.D5GXTU)
                      }),
                (0, i.jsx)(m.$i$, { className: l()(O.marginBottom20, O.marginTop20) })
            ]
        })
    });
}
function D() {
    let e = I.cP.useSetting(),
        t = I.Ou.useSetting();
    return (0, i.jsx)(_.F, {
        setting: b.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(m.hjN, {
            className: O.marginBottom40,
            children: [
                (0, i.jsx)(m.vwX, {
                    tag: m.RB0.H5,
                    className: O.marginBottom8,
                    children: j.intl.string(j.t.VOszPD)
                }),
                (0, i.jsx)(m.j7V, {
                    value: e,
                    note: j.intl.string(j.t.Hdh7sb),
                    onChange: (e) => I.cP.updateSetting(e),
                    children: j.intl.string(j.t.WEWQQk)
                }),
                (0, i.jsx)(m.j7V, {
                    value: t,
                    note: j.intl.string(j.t.Czr3Bg),
                    onChange: (e) => I.Ou.updateSetting(e),
                    children: j.intl.string(j.t.UUvJVl)
                })
            ]
        })
    });
}
function Z() {
    return (0, i.jsx)(_.F, {
        setting: b.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(m.hjN, {
            className: O.marginBottom40,
            children: (0, i.jsx)(m.ToO, {
                type: m.ToO.Types.PRIMARY,
                body: j.intl.format(j.t.xvCsx8, {
                    termsLink: v.EYA.TERMS,
                    privacyLink: v.EYA.PRIVACY
                })
            })
        })
    });
}
let y = (e) => {
    switch (e.type) {
        case v.ABu.SPOTIFY:
            return j.intl.format(j.t['5sYPnp'], { name: e.name });
        case v.ABu.CRUNCHYROLL:
            return j.intl.format(j.t.Ge29Z2, { name: e.name });
        default:
            return j.intl.format(j.t.nmMsys, { game: e.name });
    }
};
function k(e) {
    let { account: t } = e,
        [n, r] = s.useState(t.showActivity),
        l = (0, h.ZP)();
    s.useEffect(() => {
        r(t.showActivity);
    }, [t]);
    let a = x.Z.get(t.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.j7V, {
                className: A.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    r(e), g.Z.setShowActivity(t.type, t.id, e);
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
                                    children: ['"', y(a), '"']
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
function L() {
    let e = (0, c.e7)([p.Z], () => p.Z.getAccounts()),
        t = s.useMemo(() => e.filter((e) => x.Z.isSupported(e.type) && v.vbS.has(e.type)), [e]),
        [n, r] = s.useState(''),
        l = s.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => o()(e, x.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, i.jsx)(_.F, {
              setting: b.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, i.jsxs)(m.hjN, {
                  className: O.marginBottom40,
                  children: [
                      (0, i.jsx)(m.vwX, {
                          tag: m.RB0.H5,
                          className: O.marginBottom8,
                          children: j.intl.string(j.t['4F2KoK'])
                      }),
                      (0, i.jsx)(m.oil, {
                          className: A.searchInput,
                          value: n,
                          onChange: r,
                          placeholder: j.intl.string(j.t.WPrtoa)
                      }),
                      l.map((e) => (0, i.jsx)(k, { account: e }, e.id))
                  ]
              })
          });
}
function B(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: s } = S.b.useExperiment({ location: 'activity privacy tab' });
    return (0, i.jsxs)(m.hjN, {
        className: t,
        tag: m.RB0.H1,
        title: n ? j.intl.string(j.t.Cq98yM) : null,
        children: [(0, i.jsx)(P, {}), (0, i.jsx)(D, {}), (0, i.jsx)(Z, {}), s && (0, i.jsx)(L, {})]
    });
}
