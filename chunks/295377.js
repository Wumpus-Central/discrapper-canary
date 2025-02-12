n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(524437),
    r = n(481060),
    a = n(695346),
    o = n(430824),
    c = n(63063),
    d = n(709054),
    u = n(660243),
    h = n(981631),
    m = n(388032),
    g = n(465904);
function x() {
    return (0, i.jsxs)(r.hjN, {
        tag: r.RB0.H5,
        title: m.intl.string(m.t['iT/e8f']),
        className: g.howItWorksTitle,
        children: [
            (0, i.jsx)(r.R94, {
                type: r.R94.Types.DESCRIPTION,
                className: g.howItWorksDescription,
                children: m.intl.string(m.t.WF4laG)
            }),
            (0, i.jsxs)('div', {
                className: g.howItWorksNotes,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.note,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/medium',
                                children: m.intl.string(m.t.mDJcn5)
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                children: m.intl.string(m.t.JzMvOj)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: g.howItWorksDivider }),
                    (0, i.jsxs)('div', {
                        className: g.note,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/medium',
                                children: m.intl.string(m.t.BzqoHB)
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                children: m.intl.string(m.t.RgzRPD)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: g.howItWorksDivider }),
                    (0, i.jsxs)('div', {
                        className: g.note,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/medium',
                                children: m.intl.string(m.t['C2uz/v'])
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                children: m.intl.string(m.t.VN4Spq)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function _() {
    return (0, i.jsx)(r.hjN, {
        tag: r.RB0.H5,
        title: m.intl.string(m.t['+RndDg']),
        children: (0, i.jsx)(u.r, {})
    });
}
function p() {
    let e = !a.G6.useSetting(),
        t = a.Wz.useSetting(),
        n = (e) => {
            a.Wz.updateSetting(e ? l.E5.ON_FOR_LARGE_GUILDS : l.E5.OFF),
                (function (e) {
                    let t = () => {
                        a.SE.updateSetting(e ? d.default.keys(o.Z.getGuilds()) : []);
                    };
                    (0, r.h7j)((e) =>
                        (0, i.jsx)(r.ConfirmModal, {
                            header: m.intl.string(m.t['uUr+GR']),
                            confirmText: m.intl.string(m.t.gm1Ven),
                            cancelText: m.intl.string(m.t.p89ACg),
                            onCancel: t,
                            confirmButtonColor: r.zxk.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: m.intl.string(m.t.EFu2Ki)
                            })
                        })
                    );
                })(e);
        };
    return (0, i.jsxs)(r.hjN, {
        tag: r.RB0.H5,
        title: m.intl.string(m.t.kJFenZ),
        titleClassName: g.title,
        children: [
            (0, i.jsx)(r.vwX, {
                disabled: e,
                tag: r.RB0.H5,
                children: m.intl.string(m.t.gbo4l5)
            }),
            (0, i.jsx)(r.R94, {
                disabled: e,
                type: r.R94.Types.DESCRIPTION,
                className: g.description,
                children: m.intl.format(m.t.nUsCOj, { helpdeskURL: c.Z.getArticleURL(h.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(r.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => n(!e),
                note: m.intl.format(m.t.dtkj8P, { helpdeskURL: c.Z.getArticleURL(h.BhN.ACTIVITY_STATUS_SETTINGS) }),
                value: t === l.E5.OFF,
                children: m.intl.string(m.t.YldX6O)
            })
        ]
    });
}
function E() {
    let e = !a.G6.useSetting(),
        t = a.cP.useSetting(),
        n = a.Ou.useSetting();
    return (0, i.jsxs)(r.hjN, {
        tag: r.RB0.H5,
        title: m.intl.string(m.t['5gexRU']),
        titleClassName: g.title,
        children: [
            (0, i.jsx)(r.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => a.cP.updateSetting(e),
                note: m.intl.string(m.t.IjucAA),
                value: t,
                children: m.intl.string(m.t.eVdoIy)
            }),
            (0, i.jsx)(r.j7V, {
                disabled: e,
                hideBorder: !0,
                onChange: (e) => a.Ou.updateSetting(e),
                note: m.intl.string(m.t.oCONqK),
                value: n,
                children: m.intl.string(m.t['tuKl+v'])
            })
        ]
    });
}
function C() {
    let e = !a.G6.useSetting();
    return (0, i.jsxs)(r.hjN, {
        tag: r.RB0.H5,
        title: m.intl.string(m.t.Wspazs),
        children: [
            (0, i.jsx)(r.R94, {
                type: r.R94.Types.DESCRIPTION,
                children: m.intl.format(m.t.vfamcX, { helpdeskURL: c.Z.getArticleURL(h.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsxs)('div', {
                className: g.allActivityNotes,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.allActivityNote,
                        children: [
                            (0, i.jsx)(r.QTo, { size: 'sm' }),
                            (0, i.jsx)(r.R94, {
                                type: r.R94.Types.DESCRIPTION,
                                children: m.intl.string(m.t.GlYjeX)
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: g.allActivityNote,
                        children: [
                            (0, i.jsx)(r.kZF, { size: 'sm' }),
                            (0, i.jsx)(r.R94, {
                                type: r.R94.Types.DESCRIPTION,
                                children: m.intl.string(m.t.XXksWl)
                            })
                        ]
                    })
                ]
            }),
            e
                ? (0, i.jsx)(r.zxk, {
                      grow: !1,
                      className: g.disableButton,
                      onClick: () => a.G6.updateSetting(!0),
                      children: m.intl.string(m.t['Ay/Nho'])
                  })
                : (0, i.jsx)(r.zxk, {
                      grow: !1,
                      className: g.disableButton,
                      color: r.Ttl.RED,
                      look: r.iLD.OUTLINED,
                      onClick: () => {
                          (0, r.ZDy)(async () => {
                              let { default: e } = await n.e('83909').then(n.bind(n, 932374));
                              return (t) => (0, i.jsx)(e, { ...t });
                          });
                      },
                      children: m.intl.string(m.t.YjQQjo)
                  })
        ]
    });
}
function f() {
    return (0, i.jsx)(r.hjN, {
        className: g.privacyAndTerms,
        children: (0, i.jsx)(r.ToO, {
            type: r.ToO.Types.PRIMARY,
            body: m.intl.format(m.t.xvCsx8, {
                termsLink: h.EYA.TERMS,
                privacyLink: h.EYA.PRIVACY
            })
        })
    });
}
let N = function (e) {
    let { className: t } = e,
        n = !a.G6.useSetting(),
        l = s.useRef(null);
    return (0, i.jsxs)(r.hjN, {
        className: t,
        tag: r.RB0.H1,
        title: m.intl.string(m.t['6x5uWV']),
        children: [
            n &&
                (0, i.jsxs)(r.P3F, {
                    onClick: () => {
                        null != l.current && l.current.scrollIntoView({ behavior: 'smooth' });
                    },
                    className: g.enableBanner,
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.bannerTitle,
                            children: [
                                (0, i.jsx)(r.aNP, { color: r.TVs.colors.STATUS_WARNING_BACKGROUND }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'interactive-active',
                                    children: m.intl.string(m.t.n6DWMT)
                                })
                            ]
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'interactive-active',
                            children: m.intl.string(m.t.Qyjz8f)
                        })
                    ]
                }),
            (0, i.jsx)(x, {}),
            (0, i.jsx)(r.$i$, { className: g.divider }),
            (0, i.jsx)(_, {}),
            (0, i.jsx)(r.$i$, { className: g.divider }),
            (0, i.jsx)(p, {}),
            (0, i.jsx)(r.$i$, { className: g.divider }),
            (0, i.jsx)(E, {}),
            (0, i.jsx)(r.$i$, { className: g.divider }),
            (0, i.jsx)('div', { ref: l }),
            (0, i.jsx)(C, {}),
            (0, i.jsx)(f, {})
        ]
    });
};
