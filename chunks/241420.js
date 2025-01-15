n.r(t),
    n.d(t, {
        ConnectedPrivacySettings: function () {
            return C;
        },
        PrivacySettingSurfaces: function () {
            return i;
        },
        PrivacySettings: function () {
            return _;
        },
        default: function () {
            return E;
        }
    }),
    n(47120);
var i,
    s,
    r = n(200651),
    a = n(192379),
    l = n(481060),
    o = n(921801),
    c = n(695346),
    d = n(626135),
    u = n(63063),
    m = n(88658),
    g = n(981631),
    h = n(703115),
    p = n(726985),
    x = n(388032),
    f = n(916442);
function _(e) {
    let { isGuildRestricted: t, handleRestrictedGuildChange: n, isGuildActivityRestricted: i, handleActivityRestrictedGuildChange: s, isGuildActivityJoiningRestricted: a, handleActivityJoiningRestrictedGuildChange: c, isGuildMessageRequestRestricted: d, handleMessageRequestRestrictedGuildChange: m, guild: h } = e,
        _ = h.hasFeature(g.oNc.HUB);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.F, {
                setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS,
                children: [
                    (0, r.jsx)(l.FormItem, {
                        children: (0, r.jsx)(l.FormSwitch, {
                            value: !t,
                            note: _ ? x.intl.string(x.t['kZ+urq']) : x.intl.string(x.t.AZjdKS),
                            onChange: n,
                            hideBorder: !0,
                            children: x.intl.string(x.t.LoKBGB)
                        })
                    }),
                    (0, r.jsx)(l.FormDivider, { className: f.divider })
                ]
            }),
            (0, r.jsx)(o.F, {
                setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.FormItem, {
                            children: (0, r.jsx)(l.FormSwitch, {
                                value: !d,
                                note: _ ? x.intl.format(x.t.qTey8v, { helpdeskArticle: u.Z.getArticleURL(g.BhN.MESSAGE_REQUESTS) }) : x.intl.format(x.t['+Jjgi4'], { helpdeskArticle: u.Z.getArticleURL(g.BhN.MESSAGE_REQUESTS) }),
                                onChange: m,
                                disabled: t,
                                hideBorder: !0,
                                children: x.intl.string(x.t['5IN9wc'])
                            })
                        }),
                        (0, r.jsx)(l.FormDivider, { className: f.divider })
                    ]
                })
            }),
            (0, r.jsx)(o.F, {
                setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.FormItem, {
                            children: (0, r.jsx)(l.FormSwitch, {
                                value: !i,
                                onChange: s,
                                hideBorder: !0,
                                note: x.intl.format(x.t['+Tbfen'], { helpdeskArticle: u.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS) }),
                                children: x.intl.string(x.t.OLwZDQ)
                            })
                        }),
                        (0, r.jsx)(l.FormDivider, { className: f.divider })
                    ]
                })
            }),
            (0, r.jsxs)(o.F, {
                setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING,
                children: [
                    (0, r.jsx)(l.FormItem, {
                        children: (0, r.jsx)(l.FormSwitch, {
                            value: !a,
                            onChange: c,
                            hideBorder: !0,
                            note: x.intl.format(x.t.vZmjuL, { helpdeskArticle: u.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS) }),
                            children: x.intl.string(x.t.wBkwu7)
                        })
                    }),
                    (0, r.jsx)(l.FormDivider, { className: f.divider })
                ]
            }),
            (0, r.jsx)(l.FormItem, {
                className: f.disclaimer,
                children: (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: x.intl.format(x.t.LNsV09, { policyLink: 'https://discord.com/safety/360043709612-our-policies' })
                })
            })
        ]
    });
}
function E(e) {
    let { guild: t, transitionState: n, onClose: i } = e,
        s = ''.concat(x.intl.string(x.t.BayiAg), '\u2014').concat(null != t ? t.toString() : '??');
    return (0, r.jsxs)(l.ModalRoot, {
        transitionState: n,
        size: l.ModalSize.SMALL,
        'aria-label': s,
        children: [
            (0, r.jsx)(l.ModalHeader, {
                children: (0, r.jsx)(l.Heading, {
                    variant: 'heading-lg/semibold',
                    children: s
                })
            }),
            (0, r.jsx)(l.ModalContent, {
                className: f.content,
                children: (0, r.jsx)(C, {
                    guild: t,
                    ingress: 'server_privacy_modal'
                })
            }),
            (0, r.jsx)(l.ModalFooter, {
                children: (0, r.jsx)(l.Button, {
                    onClick: () => i(),
                    children: x.intl.string(x.t.i4jeWV)
                })
            })
        ]
    });
}
function C(e) {
    let { guild: t, ingress: n = 'server_privacy_modal' } = e,
        i = t.id,
        s = c.h2.useSetting().includes(i),
        l = c.zA.useSetting().includes(i),
        o = c.SE.useSetting().includes(i),
        u = c.iH.useSetting().includes(i),
        p = a.useCallback(
            (e) => {
                let t = (0, m.YK)();
                e ? t.delete(i) : t.add(i),
                    c.h2.updateSetting(Array.from(t)),
                    d.default.track(g.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: h.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: n,
                        guild_id: i
                    });
            },
            [i, n]
        ),
        x = a.useCallback(
            (e) => {
                let t = (0, m._o)();
                e ? t.delete(i) : t.add(i),
                    c.SE.updateSetting([...t]),
                    d.default.track(g.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: h.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: n,
                        guild_id: i
                    });
            },
            [i, n]
        ),
        f = a.useCallback(
            (e) => {
                let t = (0, m.rr)();
                e ? t.delete(i) : t.add(i),
                    c.iH.updateSetting([...t]),
                    d.default.track(g.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: h.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: n,
                        guild_id: i
                    });
            },
            [i, n]
        ),
        E = a.useCallback(
            (e) => {
                let t = (0, m.gl)();
                e ? t.delete(i) : t.add(i),
                    c.zA.updateSetting(Array.from(t)),
                    d.default.track(g.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: h.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: n,
                        guild_id: i
                    });
            },
            [i, n]
        );
    return (0, r.jsx)(_, {
        isGuildRestricted: s,
        handleRestrictedGuildChange: p,
        isGuildActivityRestricted: o,
        handleActivityRestrictedGuildChange: x,
        isGuildActivityJoiningRestricted: u,
        handleActivityJoiningRestrictedGuildChange: f,
        isGuildMessageRequestRestricted: l,
        handleMessageRequestRestrictedGuildChange: E,
        guild: t
    });
}
((s = i || (i = {})).USER_SETTINGS_PRIVACY_SAFETY = 'user_settings_privacy_safety'), (s.SERVER_PRIVACY_MODAL = 'server_privacy_modal');
