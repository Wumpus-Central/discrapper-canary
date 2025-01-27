n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(658722),
    o = n.n(l),
    c = n(442837),
    d = n(524437),
    u = n(780384),
    m = n(481060),
    g = n(457330),
    h = n(410030),
    p = n(726542),
    x = n(316496),
    f = n(295377),
    E = n(921801),
    _ = n(553795),
    C = n(430824),
    T = n(63063),
    S = n(358085),
    b = n(709054),
    I = n(362352),
    N = n(413182),
    v = n(695346),
    A = n(726985),
    j = n(981631),
    O = n(388032),
    R = n(147522),
    P = n(232186);
function D(e) {
    let t = () => {
        v.SE.updateSetting(e ? b.default.keys(C.Z.getGuilds()) : []);
    };
    (0, m.openModal)((e) =>
        (0, i.jsx)(m.ConfirmModal, {
            header: O.intl.string(O.t['uUr+GR']),
            confirmText: O.intl.string(O.t.gm1Ven),
            cancelText: O.intl.string(O.t.p89ACg),
            onCancel: t,
            confirmButtonColor: m.Button.Colors.BRAND,
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
        r = S.isPlatformEmbedded ? O.intl.string(O.t.MznbeH) : O.intl.string(O.t.oKqC4u),
        s = (e) => {
            v.Wz.updateSetting(e ? d.E5.ON_FOR_LARGE_GUILDS : d.E5.OFF), D(e);
        },
        l = (e) => {
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
        setting: A.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(m.FormSection, {
            children: [
                (0, i.jsx)(m.FormTitle, {
                    tag: m.FormTitleTags.H5,
                    className: P.marginBottom8,
                    children: O.intl.string(O.t['8ka8lp'])
                }),
                (0, i.jsx)(m.FormSwitch, {
                    value: e,
                    onChange: (e) => v.G6.updateSetting(e),
                    note: r,
                    children: O.intl.string(O.t['4q/Ewc'])
                }),
                n
                    ? (0, i.jsxs)(m.FormItem, {
                          tag: m.FormTitleTags.H3,
                          title: O.intl.string(O.t.ffGYGx),
                          children: [
                              (0, i.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: P.marginBottom8,
                                  children: O.intl.format(O.t.aUxRra, { helpdeskArticle: T.Z.getArticleURL(j.BhN.ACTIVITY_STATUS_SETTINGS) })
                              }),
                              (0, i.jsx)(m.SingleSelect, {
                                  options: o,
                                  value: t,
                                  onChange: (e) => l(e)
                              })
                          ]
                      })
                    : (0, i.jsx)(m.FormSwitch, {
                          value: t === d.E5.OFF,
                          note: O.intl.format(O.t['+5/xu7'], { helpdeskArticle: T.Z.getArticleURL(j.BhN.ACTIVITY_STATUS_SETTINGS) }),
                          onChange: (e) => s(!e),
                          children: O.intl.string(O.t.D5GXTU)
                      }),
                (0, i.jsx)(m.FormDivider, { className: a()(P.marginBottom20, P.marginTop20) })
            ]
        })
    });
}
function B() {
    let e = v.cP.useSetting(),
        t = v.Ou.useSetting();
    return (0, i.jsx)(E.F, {
        setting: A.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(m.FormSection, {
            className: P.marginBottom40,
            children: [
                (0, i.jsx)(m.FormTitle, {
                    tag: m.FormTitleTags.H5,
                    className: P.marginBottom8,
                    children: O.intl.string(O.t.VOszPD)
                }),
                (0, i.jsx)(m.FormSwitch, {
                    value: e,
                    note: O.intl.string(O.t.Hdh7sb),
                    onChange: (e) => v.cP.updateSetting(e),
                    children: O.intl.string(O.t.WEWQQk)
                }),
                (0, i.jsx)(m.FormSwitch, {
                    value: t,
                    note: O.intl.string(O.t.Czr3Bg),
                    onChange: (e) => v.Ou.updateSetting(e),
                    children: O.intl.string(O.t.UUvJVl)
                })
            ]
        })
    });
}
function Z() {
    return (0, i.jsx)(E.F, {
        setting: A.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(m.FormSection, {
            className: P.marginBottom40,
            children: (0, i.jsx)(m.FormNotice, {
                type: m.FormNotice.Types.PRIMARY,
                body: O.intl.format(O.t.xvCsx8, {
                    termsLink: j.EYA.TERMS,
                    privacyLink: j.EYA.PRIVACY
                })
            })
        })
    });
}
let L = (e) => {
    switch (e.type) {
        case j.ABu.SPOTIFY:
            return O.intl.format(O.t['5sYPnp'], { name: e.name });
        case j.ABu.CRUNCHYROLL:
            return O.intl.format(O.t.Ge29Z2, { name: e.name });
        default:
            return O.intl.format(O.t.nmMsys, { game: e.name });
    }
};
function M(e) {
    let { account: t } = e,
        [n, s] = r.useState(t.showActivity),
        a = (0, h.ZP)();
    r.useEffect(() => {
        s(t.showActivity);
    }, [t]);
    let l = p.Z.get(t.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.FormSwitch, {
                className: R.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    s(e), g.Z.setShowActivity(t.type, t.id, e);
                },
                children: (0, i.jsxs)('div', {
                    className: R.activitySwitchRow,
                    children: [
                        (0, i.jsx)('img', {
                            alt: l.name,
                            className: R.connectionIcon,
                            src: (0, u.wj)(a) ? l.icon.darkSVG : l.icon.lightSVG
                        }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-md/semibold',
                                    children: l.name
                                }),
                                (0, i.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: ['"', L(l), '"']
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
function k() {
    let e = (0, c.e7)([_.Z], () => _.Z.getAccounts()),
        t = r.useMemo(() => e.filter((e) => p.Z.isSupported(e.type) && j.vbS.has(e.type)), [e]),
        [n, s] = r.useState(''),
        a = r.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => o()(e, p.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, i.jsx)(E.F, {
              setting: A.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, i.jsxs)(m.FormSection, {
                  className: P.marginBottom40,
                  children: [
                      (0, i.jsx)(m.FormTitle, {
                          tag: m.FormTitleTags.H5,
                          className: P.marginBottom8,
                          children: O.intl.string(O.t['4F2KoK'])
                      }),
                      (0, i.jsx)(m.TextInput, {
                          className: R.searchInput,
                          value: n,
                          onChange: s,
                          placeholder: O.intl.string(O.t.WPrtoa)
                      }),
                      a.map((e) => (0, i.jsx)(M, { account: e }, e.id))
                  ]
              })
          });
}
function w(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: r } = N.b.useExperiment({ location: 'activity privacy tab' }),
        { updatedSettingsPageEnabled: s } = (0, x.S)('UserSettingsActivityPrivacy');
    return s
        ? (0, i.jsx)(f.Z, {})
        : (0, i.jsxs)(m.FormSection, {
              className: t,
              tag: m.FormTitleTags.H1,
              title: n ? O.intl.string(O.t.Cq98yM) : null,
              children: [(0, i.jsx)(y, {}), (0, i.jsx)(B, {}), (0, i.jsx)(Z, {}), r && (0, i.jsx)(k, {})]
          });
}
