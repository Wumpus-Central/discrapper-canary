n(47120);
var i = n(200651);
n(192379);
var r = n(524437),
    s = n(481060),
    a = n(695346),
    l = n(430824),
    o = n(63063),
    c = n(709054),
    d = n(660243),
    u = n(981631),
    m = n(388032),
    g = n(706527);
function h() {
    return (0, i.jsxs)(s.FormSection, {
        tag: s.FormTitleTags.H5,
        title: m.intl.string(m.t['iT/e8f']),
        className: g.howItWorksTitle,
        children: [
            (0, i.jsx)(s.FormText, {
                type: s.FormText.Types.DESCRIPTION,
                className: g.howItWorksDescription,
                children: m.intl.string(m.t.WF4laG)
            }),
            (0, i.jsxs)('div', {
                className: g.howItWorksNotes,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.note,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                children: m.intl.string(m.t.mDJcn5)
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                children: m.intl.string(m.t.JzMvOj)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: g.howItWorksDivider }),
                    (0, i.jsxs)('div', {
                        className: g.note,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                children: m.intl.string(m.t.BzqoHB)
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                children: m.intl.string(m.t.RgzRPD)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: g.howItWorksDivider }),
                    (0, i.jsxs)('div', {
                        className: g.note,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                children: m.intl.string(m.t['C2uz/v'])
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                children: m.intl.string(m.t.VN4Spq)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function p() {
    return (0, i.jsxs)(s.FormSection, {
        tag: s.FormTitleTags.H5,
        title: m.intl.string(m.t['+RndDg']),
        children: [
            (0, i.jsx)(s.FormText, {
                type: s.FormText.Types.DESCRIPTION,
                className: g.description,
                children: m.intl.string(m.t['DB0R9/'])
            }),
            (0, i.jsx)(d.re, {})
        ]
    });
}
function x() {
    let e = a.Wz.useSetting(),
        t = (e) => {
            a.Wz.updateSetting(e ? r.E5.ON_FOR_LARGE_GUILDS : r.E5.OFF),
                (function (e) {
                    let t = () => {
                        a.SE.updateSetting(e ? c.default.keys(l.Z.getGuilds()) : []);
                    };
                    (0, s.openModal)((e) =>
                        (0, i.jsx)(s.ConfirmModal, {
                            header: m.intl.string(m.t['uUr+GR']),
                            confirmText: m.intl.string(m.t.gm1Ven),
                            cancelText: m.intl.string(m.t.p89ACg),
                            onCancel: t,
                            confirmButtonColor: s.Button.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: m.intl.string(m.t.EFu2Ki)
                            })
                        })
                    );
                })(e);
        };
    return (0, i.jsxs)(s.FormSection, {
        tag: s.FormTitleTags.H5,
        title: m.intl.string(m.t.kJFenZ),
        titleClassName: g.title,
        children: [
            (0, i.jsx)(s.FormTitle, {
                tag: s.FormTitleTags.H5,
                children: m.intl.string(m.t.gbo4l5)
            }),
            (0, i.jsx)(s.FormText, {
                type: s.FormText.Types.DESCRIPTION,
                className: g.description,
                children: m.intl.format(m.t.nUsCOj, { helpdeskURL: o.Z.getArticleURL(u.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(s.FormSwitch, {
                hideBorder: !0,
                onChange: (e) => t(!e),
                note: m.intl.format(m.t.dtkj8P, { helpdeskURL: o.Z.getArticleURL(u.BhN.ACTIVITY_STATUS_SETTINGS) }),
                value: e === r.E5.OFF,
                children: m.intl.string(m.t.YldX6O)
            })
        ]
    });
}
function f() {
    let e = a.cP.useSetting(),
        t = a.Ou.useSetting();
    return (0, i.jsxs)(s.FormSection, {
        tag: s.FormTitleTags.H5,
        title: m.intl.string(m.t['5gexRU']),
        titleClassName: g.title,
        children: [
            (0, i.jsx)(s.FormSwitch, {
                hideBorder: !0,
                onChange: (e) => a.cP.updateSetting(e),
                note: m.intl.string(m.t.IjucAA),
                value: e,
                children: m.intl.string(m.t.eVdoIy)
            }),
            (0, i.jsx)(s.FormSwitch, {
                hideBorder: !0,
                onChange: (e) => a.Ou.updateSetting(e),
                note: m.intl.string(m.t.oCONqK),
                value: t,
                children: m.intl.string(m.t['tuKl+v'])
            })
        ]
    });
}
function E() {
    return (0, i.jsxs)(s.FormSection, {
        tag: s.FormTitleTags.H5,
        title: m.intl.string(m.t.Wspazs),
        children: [
            (0, i.jsx)(s.FormText, {
                type: s.FormText.Types.DESCRIPTION,
                children: m.intl.format(m.t.vfamcX, { helpdeskURL: o.Z.getArticleURL(u.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsxs)('div', {
                className: g.allActivityNotes,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.allActivityNote,
                        children: [
                            (0, i.jsx)(s.ServerIcon, { size: 'sm' }),
                            (0, i.jsx)(s.FormText, {
                                type: s.FormText.Types.DESCRIPTION,
                                children: m.intl.string(m.t.GlYjeX)
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: g.allActivityNote,
                        children: [
                            (0, i.jsx)(s.EyeSlashIcon, { size: 'sm' }),
                            (0, i.jsx)(s.FormText, {
                                type: s.FormText.Types.DESCRIPTION,
                                children: m.intl.string(m.t.XXksWl)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.Button, {
                grow: !1,
                className: g.disableButton,
                color: s.ButtonColors.RED,
                look: s.ButtonLooks.OUTLINED,
                onClick: () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('83909').then(n.bind(n, 932374));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                },
                children: m.intl.string(m.t.YjQQjo)
            })
        ]
    });
}
function _() {
    return (0, i.jsx)(s.FormSection, {
        className: g.privacyAndTerms,
        children: (0, i.jsx)(s.FormNotice, {
            type: s.FormNotice.Types.PRIMARY,
            body: m.intl.format(m.t.xvCsx8, {
                termsLink: u.EYA.TERMS,
                privacyLink: u.EYA.PRIVACY
            })
        })
    });
}
t.Z = function (e) {
    let { className: t } = e;
    return (0, i.jsxs)(s.FormSection, {
        className: t,
        tag: s.FormTitleTags.H1,
        title: m.intl.string(m.t['6x5uWV']),
        children: [(0, i.jsx)(h, {}), (0, i.jsx)(s.FormDivider, { className: g.divider }), (0, i.jsx)(p, {}), (0, i.jsx)(s.FormDivider, { className: g.divider }), (0, i.jsx)(x, {}), (0, i.jsx)(s.FormDivider, { className: g.divider }), (0, i.jsx)(f, {}), (0, i.jsx)(s.FormDivider, { className: g.divider }), (0, i.jsx)(E, {}), (0, i.jsx)(_, {})]
    });
};
