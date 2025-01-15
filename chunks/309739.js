n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(658722),
    a = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(457330),
    u = n(410030),
    m = n(726542),
    g = n(921801),
    h = n(553795),
    p = n(430824),
    x = n(63063),
    f = n(358085),
    _ = n(709054),
    E = n(413182),
    C = n(695346),
    T = n(726985),
    S = n(981631),
    b = n(388032),
    I = n(594010),
    N = n(275477);
function v() {
    let e = C.G6.useSetting(),
        t = C.Wz.useSetting(),
        n = f.isPlatformEmbedded ? b.intl.string(b.t.MznbeH) : b.intl.string(b.t.oKqC4u),
        r = (e) => {
            C.Wz.updateSetting(e),
                !(function (e) {
                    let t = () => {
                        C.SE.updateSetting(e ? _.default.keys(p.Z.getGuilds()) : []);
                    };
                    (0, c.openModal)((e) =>
                        (0, i.jsx)(c.ConfirmModal, {
                            header: b.intl.string(b.t['uUr+GR']),
                            confirmText: b.intl.string(b.t.gm1Ven),
                            cancelText: b.intl.string(b.t.p89ACg),
                            onCancel: t,
                            confirmButtonColor: c.Button.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-md/normal',
                                children: b.intl.string(b.t.EFu2Ki)
                            })
                        })
                    );
                })(e);
        };
    return (0, i.jsx)(g.F, {
        setting: T.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, i.jsxs)(c.FormSection, {
            className: N.marginBottom40,
            children: [
                (0, i.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H5,
                    className: N.marginBottom8,
                    children: b.intl.string(b.t['8ka8lp'])
                }),
                (0, i.jsx)(c.FormSwitch, {
                    value: e,
                    onChange: (e) => C.G6.updateSetting(e),
                    note: n,
                    children: b.intl.string(b.t['4q/Ewc'])
                }),
                (0, i.jsx)(c.FormSwitch, {
                    value: !t,
                    note: b.intl.format(b.t['+5/xu7'], { helpdeskArticle: x.Z.getArticleURL(S.BhN.ACTIVITY_STATUS_SETTINGS) }),
                    onChange: (e) => r(!e),
                    children: b.intl.string(b.t.D5GXTU)
                })
            ]
        })
    });
}
function A() {
    let e = C.cP.useSetting(),
        t = C.Ou.useSetting();
    return (0, i.jsx)(g.F, {
        setting: T.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, i.jsxs)(c.FormSection, {
            className: N.marginBottom40,
            children: [
                (0, i.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H5,
                    className: N.marginBottom8,
                    children: b.intl.string(b.t.VOszPD)
                }),
                (0, i.jsx)(c.FormSwitch, {
                    value: e,
                    note: b.intl.string(b.t.Hdh7sb),
                    onChange: (e) => C.cP.updateSetting(e),
                    children: b.intl.string(b.t.WEWQQk)
                }),
                (0, i.jsx)(c.FormSwitch, {
                    value: t,
                    note: b.intl.string(b.t.Czr3Bg),
                    onChange: (e) => C.Ou.updateSetting(e),
                    children: b.intl.string(b.t.UUvJVl)
                })
            ]
        })
    });
}
function j() {
    return (0, i.jsx)(g.F, {
        setting: T.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, i.jsx)(c.FormSection, {
            className: N.marginBottom40,
            children: (0, i.jsx)(c.FormNotice, {
                type: c.FormNotice.Types.PRIMARY,
                body: b.intl.format(b.t.xvCsx8, {
                    termsLink: S.EYA.TERMS,
                    privacyLink: S.EYA.PRIVACY
                })
            })
        })
    });
}
let O = (e) => {
    switch (e.type) {
        case S.ABu.SPOTIFY:
            return b.intl.format(b.t['5sYPnp'], { name: e.name });
        case S.ABu.CRUNCHYROLL:
            return b.intl.format(b.t.Ge29Z2, { name: e.name });
        default:
            return b.intl.format(b.t.nmMsys, { game: e.name });
    }
};
function R(e) {
    let { account: t } = e,
        [n, s] = r.useState(t.showActivity),
        a = (0, u.ZP)();
    r.useEffect(() => {
        s(t.showActivity);
    }, [t]);
    let l = m.Z.get(t.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.FormSwitch, {
                className: I.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: function (e) {
                    s(e), d.Z.setShowActivity(t.type, t.id, e);
                },
                children: (0, i.jsxs)('div', {
                    className: I.activitySwitchRow,
                    children: [
                        (0, i.jsx)('img', {
                            alt: l.name,
                            className: I.connectionIcon,
                            src: (0, o.wj)(a) ? l.icon.darkSVG : l.icon.lightSVG
                        }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/semibold',
                                    children: l.name
                                }),
                                (0, i.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: ['"', O(l), '"']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', { className: I.divider })
        ]
    });
}
function P() {
    let e = (0, l.e7)([h.Z], () => h.Z.getAccounts()),
        t = r.useMemo(() => e.filter((e) => m.Z.isSupported(e.type) && S.vbS.has(e.type)), [e]),
        [n, s] = r.useState(''),
        o = r.useMemo(() => {
            let e = n.trim().toLowerCase();
            return '' === e ? t : t.filter((t) => a()(e, m.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, i.jsx)(g.F, {
              setting: T.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, i.jsxs)(c.FormSection, {
                  className: N.marginBottom40,
                  children: [
                      (0, i.jsx)(c.FormTitle, {
                          tag: c.FormTitleTags.H5,
                          className: N.marginBottom8,
                          children: b.intl.string(b.t['4F2KoK'])
                      }),
                      (0, i.jsx)(c.TextInput, {
                          className: I.searchInput,
                          value: n,
                          onChange: s,
                          placeholder: b.intl.string(b.t.WPrtoa)
                      }),
                      o.map((e) => (0, i.jsx)(R, { account: e }, e.id))
                  ]
              })
          });
}
function y(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: r } = E.b.useExperiment({ location: 'activity privacy tab' });
    return (0, i.jsxs)(c.FormSection, {
        className: t,
        tag: c.FormTitleTags.H1,
        title: n ? b.intl.string(b.t.Cq98yM) : null,
        children: [(0, i.jsx)(v, {}), (0, i.jsx)(A, {}), (0, i.jsx)(j, {}), r && (0, i.jsx)(P, {})]
    });
}
