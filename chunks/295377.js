n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(524437),
    l = n(481060),
    a = n(695346),
    o = n(430824),
    c = n(63063),
    d = n(709054),
    u = n(660243),
    m = n(981631),
    g = n(388032),
    h = n(864331);
function x() {
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H5,
        title: g.intl.string(g.t['iT/e8f']),
        className: h.howItWorksTitle,
        children: [
            (0, i.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                className: h.howItWorksDescription,
                children: g.intl.string(g.t.WF4laG)
            }),
            (0, i.jsxs)('div', {
                className: h.howItWorksNotes,
                children: [
                    (0, i.jsxs)('div', {
                        className: h.note,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                children: g.intl.string(g.t.mDJcn5)
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/medium',
                                children: g.intl.string(g.t.JzMvOj)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: h.howItWorksDivider }),
                    (0, i.jsxs)('div', {
                        className: h.note,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                children: g.intl.string(g.t.BzqoHB)
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/medium',
                                children: g.intl.string(g.t.RgzRPD)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: h.howItWorksDivider }),
                    (0, i.jsxs)('div', {
                        className: h.note,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                children: g.intl.string(g.t['C2uz/v'])
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/medium',
                                children: g.intl.string(g.t.VN4Spq)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function _() {
    return (0, i.jsx)(l.hjN, {
        tag: l.RB0.H5,
        title: g.intl.string(g.t['+RndDg']),
        children: (0, i.jsx)(u.r, {})
    });
}
function p() {
    let e = !a.G6.useSetting(),
        t = a.Wz.useSetting(),
        n = (e) => {
            a.Wz.updateSetting(e ? r.E5.ON_FOR_LARGE_GUILDS : r.E5.OFF),
                (function (e) {
                    let t = () => {
                        a.SE.updateSetting(e ? d.default.keys(o.Z.getGuilds()) : []);
                    };
                    (0, l.h7j)((e) =>
                        (0, i.jsx)(l.ConfirmModal, {
                            header: g.intl.string(g.t['uUr+GR']),
                            confirmText: g.intl.string(g.t.gm1Ven),
                            cancelText: g.intl.string(g.t.p89ACg),
                            onCancel: t,
                            confirmButtonColor: l.zxk.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: g.intl.string(g.t.EFu2Ki)
                            })
                        })
                    );
                })(e);
        };
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H5,
        title: g.intl.string(g.t.kJFenZ),
        titleClassName: h.title,
        children: [
            (0, i.jsx)(l.vwX, {
                disabled: e,
                tag: l.RB0.H5,
                children: g.intl.string(g.t.gbo4l5)
            }),
            (0, i.jsx)(l.R94, {
                disabled: e,
                type: l.R94.Types.DESCRIPTION,
                className: h.description,
                children: g.intl.format(g.t.nUsCOj, { helpdeskURL: c.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(l.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => n(!e),
                note: g.intl.format(g.t.dtkj8P, { helpdeskURL: c.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) }),
                value: t === r.E5.OFF,
                children: g.intl.string(g.t.YldX6O)
            })
        ]
    });
}
function E() {
    let e = !a.G6.useSetting(),
        t = a.cP.useSetting(),
        n = a.Ou.useSetting();
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H5,
        title: g.intl.string(g.t['5gexRU']),
        titleClassName: h.title,
        children: [
            (0, i.jsx)(l.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => a.cP.updateSetting(e),
                note: g.intl.string(g.t.IjucAA),
                value: t,
                children: g.intl.string(g.t.eVdoIy)
            }),
            (0, i.jsx)(l.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => a.Ou.updateSetting(e),
                note: g.intl.string(g.t.oCONqK),
                value: n,
                children: g.intl.string(g.t['tuKl+v'])
            })
        ]
    });
}
function C() {
    let e = !a.G6.useSetting();
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H5,
        title: g.intl.string(g.t.Wspazs),
        children: [
            (0, i.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                children: g.intl.format(g.t.vfamcX, { helpdeskURL: c.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsxs)('div', {
                className: h.allActivityNotes,
                children: [
                    (0, i.jsxs)('div', {
                        className: h.allActivityNote,
                        children: [
                            (0, i.jsx)(l.QTo, { size: 'sm' }),
                            (0, i.jsx)(l.R94, {
                                type: l.R94.Types.DESCRIPTION,
                                children: g.intl.string(g.t.GlYjeX)
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: h.allActivityNote,
                        children: [
                            (0, i.jsx)(l.kZF, { size: 'sm' }),
                            (0, i.jsx)(l.R94, {
                                type: l.R94.Types.DESCRIPTION,
                                children: g.intl.string(g.t.XXksWl)
                            })
                        ]
                    })
                ]
            }),
            e
                ? (0, i.jsx)(l.zxk, {
                      grow: !1,
                      className: h.disableButton,
                      onClick: () => a.G6.updateSetting(!0),
                      children: g.intl.string(g.t['Ay/Nho'])
                  })
                : (0, i.jsx)(l.zxk, {
                      grow: !1,
                      className: h.disableButton,
                      color: l.Ttl.RED,
                      look: l.iLD.OUTLINED,
                      onClick: () => {
                          (0, l.ZDy)(async () => {
                              let { default: e } = await n.e('83909').then(n.bind(n, 932374));
                              return (t) => (0, i.jsx)(e, { ...t });
                          });
                      },
                      children: g.intl.string(g.t.YjQQjo)
                  })
        ]
    });
}
function f() {
    return (0, i.jsx)(l.hjN, {
        className: h.privacyAndTerms,
        children: (0, i.jsx)(l.ToO, {
            type: l.ToO.Types.PRIMARY,
            body: g.intl.format(g.t.xvCsx8, {
                termsLink: m.EYA.TERMS,
                privacyLink: m.EYA.PRIVACY
            })
        })
    });
}
let T = function (e) {
    let { className: t } = e,
        n = !a.G6.useSetting(),
        r = s.useRef(null);
    return (0, i.jsxs)(l.hjN, {
        className: t,
        tag: l.RB0.H1,
        title: g.intl.string(g.t['6x5uWV']),
        children: [
            n &&
                (0, i.jsxs)(l.P3F, {
                    onClick: () => {
                        null != r.current && r.current.scrollIntoView({ behavior: 'smooth' });
                    },
                    className: h.enableBanner,
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.bannerTitle,
                            children: [
                                (0, i.jsx)(l.aNP, { color: l.TVs.colors.STATUS_WARNING_BACKGROUND }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'interactive-active',
                                    children: g.intl.string(g.t.n6DWMT)
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'interactive-active',
                            children: g.intl.string(g.t.Qyjz8f)
                        })
                    ]
                }),
            (0, i.jsx)(x, {}),
            (0, i.jsx)(l.$i$, { className: h.divider }),
            (0, i.jsx)(_, {}),
            (0, i.jsx)(l.$i$, { className: h.divider }),
            (0, i.jsx)(p, {}),
            (0, i.jsx)(l.$i$, { className: h.divider }),
            (0, i.jsx)(E, {}),
            (0, i.jsx)(l.$i$, { className: h.divider }),
            (0, i.jsx)('div', { ref: r }),
            (0, i.jsx)(C, {}),
            (0, i.jsx)(f, {})
        ]
    });
};
