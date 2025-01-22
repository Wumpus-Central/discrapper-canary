r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(990547),
    s = r(481060),
    l = r(194359),
    u = r(819557),
    c = r(138201),
    d = r(626135),
    f = r(63063),
    p = r(5192),
    h = r(478923),
    _ = r(858380),
    m = r(981631),
    g = r(388032),
    E = r(294794);
function v() {
    return (0, i.jsxs)(u.z, {
        children: [
            (0, i.jsx)(u.q, {
                title: g.intl.string(g.t.ruhGkp),
                description: g.intl.string(g.t['/FWKKC']),
                icon: s.CircleCheckIcon
            }),
            (0, i.jsx)(u.q, {
                title: g.intl.string(g.t.N9v3en),
                description: g.intl.string(g.t.ddpuJi),
                icon: s.CircleCheckIcon
            }),
            (0, i.jsx)(u.q, {
                title: g.intl.string(g.t['4ycGEx']),
                description: g.intl.string(g.t['5yfN+v']),
                icon: s.CircleInformationIcon
            })
        ]
    });
}
function y(e) {
    let { user: n, guildId: r, channelId: u, onIgnore: y, onBlock: b, location: I = 'ContextMenu', ...T } = e,
        S = () => {
            d.default.track(m.rMx.USER_REMEDIATION_ACTION, {
                action: _.l.CANCEL_IGNORE,
                location: I
            });
        };
    return (
        a.useLayoutEffect(
            () => () => {
                d.default.track(m.rMx.USER_REMEDIATION_ACTION, {
                    action: _.l.DISMISS_IGNORE,
                    location: I
                });
            },
            [I]
        ),
        (0, i.jsx)(s.ConfirmModal, {
            confirmText: g.intl.string(g.t.ytCpKi),
            cancelText: g.intl.string(g.t['ETE/oK']),
            onConfirm: () => {
                null == y || y(), l.Z.ignoreUser(n.id, I, null != u ? u : void 0), d.default.track(m.rMx.IGNORE_USER_CONFIRMED);
            },
            onCancel: S,
            impression: { impressionName: o.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: s.Button.Colors.BRAND,
            ...T,
            children: (0, i.jsxs)('div', {
                className: E.container,
                children: [
                    (0, i.jsxs)('div', {
                        className: E.confirmationHeader,
                        children: [
                            (0, i.jsxs)('div', {
                                className: E.iconContainer,
                                children: [
                                    (0, i.jsx)(s.Avatar, {
                                        size: s.AvatarSizes.SIZE_56,
                                        src: n.getAvatarURL(void 0, 64),
                                        'aria-hidden': !0
                                    }),
                                    (0, i.jsx)('div', {
                                        className: E.icon,
                                        children: (0, i.jsx)(s.EyeSlashIcon, {})
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(s.Heading, {
                                        variant: 'heading-xl/bold',
                                        color: 'header-primary',
                                        children: g.intl.format(g.t['WrQD/f'], { username: p.ZP.getName(r, u, n) })
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'header-secondary',
                                        children: g.intl.string(g.t.JKL1u7)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(v, {}),
                    (0, i.jsxs)('div', {
                        className: E.otherOptions,
                        children: [
                            (0, i.jsx)(c.rT, {
                                title: g.intl.string(g.t['1v01go']),
                                children: (0, i.jsx)(c.ZP, {
                                    title: g.intl.string(g.t.bwxY39),
                                    description: g.intl.string(g.t.NTnf1d),
                                    titleVariant: 'text-md/medium',
                                    descriptionVariant: 'text-xs/medium',
                                    buttonText: g.intl.string(g.t.QdfUHB),
                                    buttonColor: s.ButtonColors.PRIMARY,
                                    onButtonPress: () => {
                                        d.default.track(m.rMx.USER_REMEDIATION_ACTION, {
                                            action: _.l.GOTO_BLOCK,
                                            location: I
                                        }),
                                            (0, s.closeAllModals)(),
                                            (0, s.openModal)((e) =>
                                                (0, i.jsx)(h.Z, {
                                                    ...e,
                                                    user: n,
                                                    guildId: r,
                                                    channelId: u,
                                                    onBlock: b,
                                                    onIgnore: y,
                                                    location: I
                                                })
                                            );
                                    }
                                })
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                className: E.featureGuide,
                                children: g.intl.format(g.t.Hjvqr6, { articleLink: f.Z.getArticleURL(m.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
