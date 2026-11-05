var e = n(477900),
    s = n(582128),
    r = n(613412),
    l = n(862482),
    c = n(628284),
    a = n(885574),
    o = n(640238),
    d = n(97808),
    u = n(778712),
    m = n(952270),
    E = n(534514),
    I = n(834730),
    x = n(192308),
    N = n(49229),
    h = n(754302),
    g = n(632738),
    C = n(129230),
    f = n(975571),
    j = n(562153),
    A = n(235627),
    _ = n(652215),
    p = n(792996),
    R = n(490930);
function T() {
    return (0, e.jsxs)(h.q, {
        children: [
            (0, e.jsx)(h.B, {
                title: p.intl.string(p.t.ruhGkg),
                description: p.intl.string(p.t["/FWKKC"]),
                icon: c.CircleCheckIcon,
            }),
            (0, e.jsx)(h.B, {
                title: p.intl.string(p.t.N9v3eq),
                description: p.intl.string(p.t.ddpuJg),
                icon: c.CircleCheckIcon,
            }),
            (0, e.jsx)(h.B, {
                title: p.intl.string(p.t["4ycGE0"]),
                description: p.intl.string(p.t["5yfN+o"]),
                icon: a.CircleInformationIcon,
            }),
        ],
    });
}
n.d(
    i,
    {},
    {
        default: function (t) {
            let { user: i, guildId: c, channelId: a, onIgnore: h, onBlock: O, location: v = "ContextMenu", ...k } = t;
            return (
                s.useLayoutEffect(
                    () => () => {
                        C.default.track(_.HAw.USER_REMEDIATION_ACTION, { action: A.p.DISMISS_IGNORE, location: v });
                    },
                    [v],
                ),
                (0, e.jsx)(o.a, {
                    confirmText: p.intl.string(p.t.ytCpKs),
                    cancelText: p.intl.string(p.t["ETE/oC"]),
                    onConfirm: () => {
                        (h?.(), N.A.ignoreUser(i.id, v, a ?? void 0), C.default.track(_.HAw.IGNORE_USER_CONFIRMED));
                    },
                    onCancel: function () {
                        C.default.track(_.HAw.USER_REMEDIATION_ACTION, { action: A.p.CANCEL_IGNORE, location: v });
                    },
                    impression: { impressionName: r.ImpressionNames.IGNORE_USER_CONFIRMATION },
                    confirmButtonColor: l.$n.Colors.BRAND,
                    ...k,
                    children: (0, e.jsxs)("div", {
                        className: R.kL,
                        children: [
                            (0, e.jsxs)("div", {
                                className: R.RS,
                                children: [
                                    (0, e.jsxs)("div", {
                                        className: R.zc,
                                        children: [
                                            (0, e.jsx)(d.eu, {
                                                size: u._3.SIZE_56,
                                                src: i.getAvatarURL(void 0, 64),
                                                "aria-hidden": !0,
                                            }),
                                            (0, e.jsx)("div", {
                                                className: R.Kk,
                                                children: (0, e.jsx)(m.EyeSlashIcon, {}),
                                            }),
                                        ],
                                    }),
                                    (0, e.jsxs)("div", {
                                        children: [
                                            (0, e.jsx)(E.D, {
                                                variant: "heading-xl/semibold",
                                                color: "text-strong",
                                                children: p.intl.format(p.t["WrQD/Y"], {
                                                    username: j.Ay.getName(c, a, i),
                                                }),
                                            }),
                                            (0, e.jsx)(I.E, {
                                                variant: "body-md/medium",
                                                color: "text-default",
                                                children: p.intl.string(p.t.JKL1u1),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, e.jsx)(T, {}),
                            (0, e.jsxs)("div", {
                                className: R.l_,
                                children: [
                                    (0, e.jsx)(g.Y0, {
                                        title: p.intl.string(p.t["1v01gh"]),
                                        children: (0, e.jsx)(g.PQ, {
                                            title: p.intl.string(p.t.bwxY30),
                                            description: p.intl.string(p.t.NTnf1T),
                                            titleVariant: "body-md/medium",
                                            descriptionVariant: "body-xs/medium",
                                            buttonText: p.intl.string(p.t.QdfUHE),
                                            onButtonPress: () => {
                                                (C.default.track(_.HAw.USER_REMEDIATION_ACTION, {
                                                    action: A.p.GOTO_BLOCK,
                                                    location: v,
                                                }),
                                                    (0, x.s7)(),
                                                    (0, x.mM)(async () => {
                                                        let { default: t } = await Promise.all([
                                                            n.e(820683),
                                                            n.e(164501),
                                                        ]).then(n.bind(n, 796788));
                                                        return (n) =>
                                                            (0, e.jsx)(t, {
                                                                ...n,
                                                                user: i,
                                                                guildId: c,
                                                                channelId: a,
                                                                onBlock: O,
                                                                onIgnore: h,
                                                                location: v,
                                                            });
                                                    }));
                                            },
                                        }),
                                    }),
                                    (0, e.jsx)(I.E, {
                                        variant: "body-sm/medium",
                                        className: R.FV,
                                        children: p.intl.format(p.t.Hjvqr6, {
                                            articleLink: f.A.getArticleURL(_.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                })
            );
        },
    },
);
