r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(990547),
    o = r(481060),
    l = r(194359),
    u = r(138201),
    c = r(626135),
    d = r(63063),
    f = r(5192),
    _ = r(478923),
    h = r(858380),
    p = r(981631),
    m = r(388032),
    g = r(294794);
function E() {
    return (0, i.jsxs)('div', {
        className: g.row,
        children: [
            (0, i.jsx)(u.Z, {
                title: m.intl.string(m.t.ruhGkp),
                titleVariant: 'text-md/medium',
                description: m.intl.string(m.t['/FWKKC']),
                icon: o.CircleCheckIcon
            }),
            (0, i.jsx)(u.Z, {
                title: m.intl.string(m.t.N9v3en),
                titleVariant: 'text-md/medium',
                description: m.intl.string(m.t.ddpuJi),
                icon: o.CircleCheckIcon
            }),
            (0, i.jsx)(u.Z, {
                title: m.intl.string(m.t['4ycGEx']),
                titleVariant: 'text-md/medium',
                description: m.intl.string(m.t['5yfN+v']),
                icon: o.CircleInformationIcon
            })
        ]
    });
}
function v(e) {
    let { user: n, guildId: r, channelId: v, onIgnore: I, onBlock: T, location: b = 'ContextMenu', ...y } = e,
        S = () => {
            c.default.track(p.rMx.USER_REMEDIATION_ACTION, {
                action: h.l.CANCEL_IGNORE,
                location: b
            });
        };
    return (
        a.useLayoutEffect(
            () => () => {
                c.default.track(p.rMx.USER_REMEDIATION_ACTION, {
                    action: h.l.DISMISS_IGNORE,
                    location: b
                });
            },
            [b]
        ),
        (0, i.jsx)(o.ConfirmModal, {
            confirmText: m.intl.string(m.t.ytCpKi),
            cancelText: m.intl.string(m.t['ETE/oK']),
            onConfirm: () => {
                null == I || I(), l.Z.ignoreUser(n.id, b, null != v ? v : void 0), c.default.track(p.rMx.IGNORE_USER_CONFIRMED);
            },
            onCancel: S,
            impression: { impressionName: s.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: o.Button.Colors.BRAND,
            ...y,
            children: (0, i.jsxs)('div', {
                className: g.container,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.confirmationHeader,
                        children: [
                            (0, i.jsxs)('div', {
                                className: g.iconContainer,
                                children: [
                                    (0, i.jsx)(o.Avatar, {
                                        size: o.AvatarSizes.SIZE_56,
                                        src: n.getAvatarURL(void 0, 64),
                                        'aria-hidden': !0
                                    }),
                                    (0, i.jsx)('div', {
                                        className: g.icon,
                                        children: (0, i.jsx)(o.EyeSlashIcon, {})
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(o.Heading, {
                                        variant: 'heading-xl/bold',
                                        color: 'header-primary',
                                        children: m.intl.format(m.t['WrQD/f'], { username: f.ZP.getName(r, v, n) })
                                    }),
                                    (0, i.jsx)(o.Text, {
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
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-secondary',
                                children: m.intl.string(m.t['1v01go'])
                            }),
                            (0, i.jsx)('div', {
                                className: g.row,
                                children: (0, i.jsx)(u.Z, {
                                    title: m.intl.string(m.t.bwxY39),
                                    description: m.intl.string(m.t.NTnf1d),
                                    titleVariant: 'text-md/medium',
                                    descriptionVariant: 'text-xs/medium',
                                    buttonText: m.intl.string(m.t.QdfUHB),
                                    buttonColor: o.ButtonColors.PRIMARY,
                                    onButtonPress: () => {
                                        c.default.track(p.rMx.USER_REMEDIATION_ACTION, {
                                            action: h.l.GOTO_BLOCK,
                                            location: b
                                        }),
                                            (0, o.closeAllModals)(),
                                            (0, o.openModal)((e) =>
                                                (0, i.jsx)(_.Z, {
                                                    ...e,
                                                    user: n,
                                                    guildId: r,
                                                    channelId: v,
                                                    onBlock: T,
                                                    onIgnore: I,
                                                    location: b
                                                })
                                            );
                                    }
                                })
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                className: g.featureGuide,
                                children: m.intl.format(m.t.Hjvqr6, { articleLink: d.Z.getArticleURL(p.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
