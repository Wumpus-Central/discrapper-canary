n.d(t, {
    Z: function () {
        return M;
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
    x = n(921801),
    f = n(553795),
    _ = n(430824),
    E = n(63063),
    C = n(358085),
    T = n(709054),
    S = n(362352),
    b = n(413182),
    I = n(695346),
    N = n(726985),
    v = n(981631),
    A = n(388032),
    j = n(147522),
    O = n(232186);
function R(e) {
    let t = () => {
        I.SE.updateSetting(e ? T.default.keys(_.Z.getGuilds()) : []);
    };
    (0, m.openModal)((e) =>
        (0, i.jsx)(m.ConfirmModal, {
            header: A.intl.string(A.t['uUr+GR']),
            confirmText: A.intl.string(A.t.gm1Ven),
            cancelText: A.intl.string(A.t.p89ACg),
            onCancel: t,
            confirmButtonColor: m.Button.Colors.BRAND,
            ...e,
            children: (0, i.jsx)(m.Text, {
                variant: 'text-md/normal',
                children: A.intl.string(A.t.EFu2Ki)
            })
        })
    );
}
function P() {
    let e = I.G6.useSetting(),
        t = I.Wz.useSetting(),
        n = S.l.useExperiment({ location: 'activity privacy tab' }, { autoTrackExposure: !1 }),
        r = C.isPlatformEmbedded ? A.intl.string(A.t.MznbeH) : A.intl.string(A.t.oKqC4u),
        s = (e) => {
            I.Wz.updateSetting(e ? d.E5.ON_FOR_LARGE_GUILDS : d.E5.OFF), R(e);
        },
        l = (e) => {
            I.Wz.updateSetting(e), R(e !== d.E5.OFF);
        },
        o = [
            {
                value: d.E5.ON,
                label: A.intl.string(A.t.UzGMHx)
            },
            {
                value: d.E5.ON_FOR_LARGE_GUILDS,
                label: A.intl.string(A.t.OFqxQU)
            },
            {
                value: d.E5.OFF,
                label: A.intl.string(A.t.MIgNPD)
            }
        ];
    return (0, i.jsx)(x.F, {
        setting: N.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(m.FormSection, {
            children: [
                (0, i.jsx)(m.FormTitle, {
                    tag: m.FormTitleTags.H5,
                    className: O.marginBottom8,
                    children: A.intl.string(A.t['8ka8lp'])
                }),
                (0, i.jsx)(m.FormSwitch, {
                    value: e,
                    onChange: (e) => I.G6.updateSetting(e),
                    note: r,
                    children: A.intl.string(A.t['4q/Ewc'])
                }),
                n.enabled
                    ? (0, i.jsxs)(m.FormItem, {
                          tag: m.FormTitleTags.H3,
                          title: A.intl.string(A.t.ffGYGx),
                          children: [
                              (0, i.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  className: O.marginBottom8,
                                  children: A.intl.format(A.t.aUxRra, { helpdeskArticle: E.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS) })
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
                          note: A.intl.format(A.t['+5/xu7'], { helpdeskArticle: E.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS) }),
                          onChange: (e) => s(!e),
                          children: A.intl.string(A.t.D5GXTU)
                      }),
                (0, i.jsx)(m.FormDivider, { className: a()(O.marginBottom20, O.marginTop20) })
            ]
        })
    });
}
function y() {
    let e = I.cP.useSetting(),
        t = I.Ou.useSetting();
    return (0, i.jsx)(x.F, {
        setting: N.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(m.FormSection, {
            className: O.marginBottom40,
            children: [
                (0, i.jsx)(m.FormTitle, {
                    tag: m.FormTitleTags.H5,
                    className: O.marginBottom8,
                    children: A.intl.string(A.t.VOszPD)
                }),
                (0, i.jsx)(m.FormSwitch, {
                    value: e,
                    note: A.intl.string(A.t.Hdh7sb),
                    onChange: (e) => I.cP.updateSetting(e),
                    children: A.intl.string(A.t.WEWQQk)
                }),
                (0, i.jsx)(m.FormSwitch, {
                    value: t,
                    note: A.intl.string(A.t.Czr3Bg),
                    onChange: (e) => I.Ou.updateSetting(e),
                    children: A.intl.string(A.t.UUvJVl)
                })
            ]
        })
    });
}
function B() {
    return (0, i.jsx)(x.F, {
        setting: N.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(m.FormSection, {
            className: O.marginBottom40,
            children: (0, i.jsx)(m.FormNotice, {
                type: m.FormNotice.Types.PRIMARY,
                body: A.intl.format(A.t.xvCsx8, {
                    termsLink: v.EYA.TERMS,
                    privacyLink: v.EYA.PRIVACY
                })
            })
        })
    });
}
let D = (e) => {
    switch (e.type) {
        case v.ABu.SPOTIFY:
            return A.intl.format(A.t['5sYPnp'], { name: e.name });
        case v.ABu.CRUNCHYROLL:
            return A.intl.format(A.t.Ge29Z2, { name: e.name });
        default:
            return A.intl.format(A.t.nmMsys, { game: e.name });
    }
};
function Z(e) {
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
                className: j.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    s(e), g.Z.setShowActivity(t.type, t.id, e);
                },
                children: (0, i.jsxs)('div', {
                    className: j.activitySwitchRow,
                    children: [
                        (0, i.jsx)('img', {
                            alt: l.name,
                            className: j.connectionIcon,
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
                                    children: ['"', D(l), '"']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', { className: j.divider })
        ]
    });
}
function L() {
    let e = (0, c.e7)([f.Z], () => f.Z.getAccounts()),
        t = r.useMemo(() => e.filter((e) => p.Z.isSupported(e.type) && v.vbS.has(e.type)), [e]),
        [n, s] = r.useState(''),
        a = r.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => o()(e, p.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, i.jsx)(x.F, {
              setting: N.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, i.jsxs)(m.FormSection, {
                  className: O.marginBottom40,
                  children: [
                      (0, i.jsx)(m.FormTitle, {
                          tag: m.FormTitleTags.H5,
                          className: O.marginBottom8,
                          children: A.intl.string(A.t['4F2KoK'])
                      }),
                      (0, i.jsx)(m.TextInput, {
                          className: j.searchInput,
                          value: n,
                          onChange: s,
                          placeholder: A.intl.string(A.t.WPrtoa)
                      }),
                      a.map((e) => (0, i.jsx)(Z, { account: e }, e.id))
                  ]
              })
          });
}
function M(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: r } = b.b.useExperiment({ location: 'activity privacy tab' });
    return (0, i.jsxs)(m.FormSection, {
        className: t,
        tag: m.FormTitleTags.H1,
        title: n ? A.intl.string(A.t.Cq98yM) : null,
        children: [(0, i.jsx)(P, {}), (0, i.jsx)(y, {}), (0, i.jsx)(B, {}), r && (0, i.jsx)(L, {})]
    });
}
