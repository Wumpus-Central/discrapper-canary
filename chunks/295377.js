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
    h = n(388032),
    g = n(706527);
function _() {
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H5,
        title: h.intl.string(h.t['iT/e8f']),
        className: g.howItWorksTitle,
        children: [
            (0, i.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                className: g.howItWorksDescription,
                children: h.intl.string(h.t.WF4laG)
            }),
            (0, i.jsxs)('div', {
                className: g.howItWorksNotes,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.note,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                children: h.intl.string(h.t.mDJcn5)
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                children: h.intl.string(h.t.JzMvOj)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: g.howItWorksDivider }),
                    (0, i.jsxs)('div', {
                        className: g.note,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                children: h.intl.string(h.t.BzqoHB)
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                children: h.intl.string(h.t.RgzRPD)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: g.howItWorksDivider }),
                    (0, i.jsxs)('div', {
                        className: g.note,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                children: h.intl.string(h.t['C2uz/v'])
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                children: h.intl.string(h.t.VN4Spq)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function x() {
    return (0, i.jsx)(l.hjN, {
        tag: l.RB0.H5,
        title: h.intl.string(h.t['+RndDg']),
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
                            header: h.intl.string(h.t['uUr+GR']),
                            confirmText: h.intl.string(h.t.gm1Ven),
                            cancelText: h.intl.string(h.t.p89ACg),
                            onCancel: t,
                            confirmButtonColor: l.zxk.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: h.intl.string(h.t.EFu2Ki)
                            })
                        })
                    );
                })(e);
        };
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H5,
        title: h.intl.string(h.t.kJFenZ),
        titleClassName: g.title,
        children: [
            (0, i.jsx)(l.vwX, {
                disabled: e,
                tag: l.RB0.H5,
                children: h.intl.string(h.t.gbo4l5)
            }),
            (0, i.jsx)(l.R94, {
                disabled: e,
                type: l.R94.Types.DESCRIPTION,
                className: g.description,
                children: h.intl.format(h.t.nUsCOj, { helpdeskURL: c.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(l.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => n(!e),
                note: h.intl.format(h.t.dtkj8P, { helpdeskURL: c.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) }),
                value: t === r.E5.OFF,
                children: h.intl.string(h.t.YldX6O)
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
        title: h.intl.string(h.t['5gexRU']),
        titleClassName: g.title,
        children: [
            (0, i.jsx)(l.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => a.cP.updateSetting(e),
                note: h.intl.string(h.t.IjucAA),
                value: t,
                children: h.intl.string(h.t.eVdoIy)
            }),
            (0, i.jsx)(l.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => a.Ou.updateSetting(e),
                note: h.intl.string(h.t.oCONqK),
                value: n,
                children: h.intl.string(h.t['tuKl+v'])
            })
        ]
    });
}
function C() {
    let e = !a.G6.useSetting();
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H5,
        title: h.intl.string(h.t.Wspazs),
        children: [
            (0, i.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                children: h.intl.format(h.t.vfamcX, { helpdeskURL: c.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsxs)('div', {
                className: g.allActivityNotes,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.allActivityNote,
                        children: [
                            (0, i.jsx)(l.QTo, { size: 'sm' }),
                            (0, i.jsx)(l.R94, {
                                type: l.R94.Types.DESCRIPTION,
                                children: h.intl.string(h.t.GlYjeX)
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: g.allActivityNote,
                        children: [
                            (0, i.jsx)(l.kZF, { size: 'sm' }),
                            (0, i.jsx)(l.R94, {
                                type: l.R94.Types.DESCRIPTION,
                                children: h.intl.string(h.t.XXksWl)
                            })
                        ]
                    })
                ]
            }),
            e
                ? (0, i.jsx)(l.zxk, {
                      grow: !1,
                      className: g.disableButton,
                      onClick: () => a.G6.updateSetting(!0),
                      children: h.intl.string(h.t['Ay/Nho'])
                  })
                : (0, i.jsx)(l.zxk, {
                      grow: !1,
                      className: g.disableButton,
                      color: l.Ttl.RED,
                      look: l.iLD.OUTLINED,
                      onClick: () => {
                          (0, l.ZDy)(async () => {
                              let { default: e } = await n.e('83909').then(n.bind(n, 932374));
                              return (t) => (0, i.jsx)(e, { ...t });
                          });
                      },
                      children: h.intl.string(h.t.YjQQjo)
                  })
        ]
    });
}
function f() {
    return (0, i.jsx)(l.hjN, {
        className: g.privacyAndTerms,
        children: (0, i.jsx)(l.ToO, {
            type: l.ToO.Types.PRIMARY,
            body: h.intl.format(h.t.xvCsx8, {
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
        title: h.intl.string(h.t['6x5uWV']),
        children: [
            n &&
                (0, i.jsxs)(l.P3F, {
                    onClick: () => {
                        null != r.current && r.current.scrollIntoView({ behavior: 'smooth' });
                    },
                    className: g.enableBanner,
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.bannerTitle,
                            children: [
                                (0, i.jsx)(l.aNP, { color: l.TVs.colors.STATUS_WARNING_BACKGROUND }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'interactive-active',
                                    children: h.intl.string(h.t.n6DWMT)
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'interactive-active',
                            children: h.intl.string(h.t.Qyjz8f)
                        })
                    ]
                }),
            (0, i.jsx)(_, {}),
            (0, i.jsx)(l.$i$, { className: g.divider }),
            (0, i.jsx)(x, {}),
            (0, i.jsx)(l.$i$, { className: g.divider }),
            (0, i.jsx)(p, {}),
            (0, i.jsx)(l.$i$, { className: g.divider }),
            (0, i.jsx)(E, {}),
            (0, i.jsx)(l.$i$, { className: g.divider }),
            (0, i.jsx)('div', { ref: r }),
            (0, i.jsx)(C, {}),
            (0, i.jsx)(f, {})
        ]
    });
};
