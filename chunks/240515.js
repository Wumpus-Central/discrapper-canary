n.d(t, { Z: () => v });
var i = n(200651),
    r = n(192379),
    a = n(990547),
    s = n(481060),
    o = n(194359),
    l = n(819557),
    u = n(138201),
    c = n(626135),
    d = n(63063),
    f = n(5192),
    _ = n(478923),
    p = n(858380),
    h = n(981631),
    m = n(388032),
    g = n(294794);
function E() {
    return (0, i.jsxs)(l.z, {
        children: [
            (0, i.jsx)(l.q, {
                title: m.intl.string(m.t.ruhGkp),
                description: m.intl.string(m.t['/FWKKC']),
                icon: s.owK
            }),
            (0, i.jsx)(l.q, {
                title: m.intl.string(m.t.N9v3en),
                description: m.intl.string(m.t.ddpuJi),
                icon: s.owK
            }),
            (0, i.jsx)(l.q, {
                title: m.intl.string(m.t['4ycGEx']),
                description: m.intl.string(m.t['5yfN+v']),
                icon: s.d3s
            })
        ]
    });
}
function v(e) {
    let { user: t, guildId: n, channelId: l, onIgnore: v, onBlock: y, location: I = 'ContextMenu', ...b } = e,
        T = () => {
            c.default.track(h.rMx.USER_REMEDIATION_ACTION, {
                action: p.l.CANCEL_IGNORE,
                location: I
            });
        };
    return (
        r.useLayoutEffect(
            () => () => {
                c.default.track(h.rMx.USER_REMEDIATION_ACTION, {
                    action: p.l.DISMISS_IGNORE,
                    location: I
                });
            },
            [I]
        ),
        (0, i.jsx)(s.ConfirmModal, {
            confirmText: m.intl.string(m.t.ytCpKi),
            cancelText: m.intl.string(m.t['ETE/oK']),
            onConfirm: () => {
                null == v || v(), o.Z.ignoreUser(t.id, I, null != l ? l : void 0), c.default.track(h.rMx.IGNORE_USER_CONFIRMED);
            },
            onCancel: T,
            impression: { impressionName: a.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: s.zxk.Colors.BRAND,
            ...b,
            children: (0, i.jsxs)('div', {
                className: g.container,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.confirmationHeader,
                        children: [
                            (0, i.jsxs)('div', {
                                className: g.iconContainer,
                                children: [
                                    (0, i.jsx)(s.qEK, {
                                        size: s.EFr.SIZE_56,
                                        src: t.getAvatarURL(void 0, 64),
                                        'aria-hidden': !0
                                    }),
                                    (0, i.jsx)('div', {
                                        className: g.icon,
                                        children: (0, i.jsx)(s.kZF, {})
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(s.X6q, {
                                        variant: 'heading-xl/bold',
                                        color: 'header-primary',
                                        children: m.intl.format(m.t['WrQD/f'], { username: f.ZP.getName(n, l, t) })
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'header-secondary',
                                        children: m.intl.string(m.t.JKL1u7)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(E, {}),
                    (0, i.jsxs)('div', {
                        className: g.otherOptions,
                        children: [
                            (0, i.jsx)(u.rT, {
                                title: m.intl.string(m.t['1v01go']),
                                children: (0, i.jsx)(u.ZP, {
                                    title: m.intl.string(m.t.bwxY39),
                                    description: m.intl.string(m.t.NTnf1d),
                                    titleVariant: 'text-md/medium',
                                    descriptionVariant: 'text-xs/medium',
                                    buttonText: m.intl.string(m.t.QdfUHB),
                                    buttonColor: s.Ttl.PRIMARY,
                                    onButtonPress: () => {
                                        c.default.track(h.rMx.USER_REMEDIATION_ACTION, {
                                            action: p.l.GOTO_BLOCK,
                                            location: I
                                        }),
                                            (0, s.pTH)(),
                                            (0, s.h7j)((e) =>
                                                (0, i.jsx)(_.Z, {
                                                    ...e,
                                                    user: t,
                                                    guildId: n,
                                                    channelId: l,
                                                    onBlock: y,
                                                    onIgnore: v,
                                                    location: I
                                                })
                                            );
                                    }
                                })
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                className: g.featureGuide,
                                children: m.intl.format(m.t.Hjvqr6, { articleLink: d.Z.getArticleURL(h.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
