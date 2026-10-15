n.d(i, { default: () => O });
var e = n(477900),
    s = n(582128),
    r = n(562708),
    l = n(862482),
    a = n(628284),
    c = n(885574),
    o = n(640238),
    d = n(97808),
    u = n(778712),
    x = n(952270),
    E = n(297264),
    m = n(834730),
    I = n(192308),
    N = n(49229),
    g = n(754302),
    h = n(632738),
    A = n(174459),
    f = n(975571),
    j = n(562153),
    p = n(235627),
    _ = n(652215),
    R = n(105292),
    C = n(490930);
function T() {
    return (0, e.jsxs)(g.q, {
        children: [
            (0, e.jsx)(g.B, { title: R.intl.string(R.t.ruhGkg), description: R.intl.string(R.t["/FWKKC"]), icon: a.y }),
            (0, e.jsx)(g.B, { title: R.intl.string(R.t.N9v3eq), description: R.intl.string(R.t.ddpuJg), icon: a.y }),
            (0, e.jsx)(g.B, {
                title: R.intl.string(R.t["4ycGE0"]),
                description: R.intl.string(R.t["5yfN+o"]),
                icon: c.CircleInformationIcon,
            }),
        ],
    });
}
function O(t) {
    let { user: i, guildId: a, channelId: c, onIgnore: g, onBlock: O, location: v = "ContextMenu", ...k } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                A.default.track(_.HAw.USER_REMEDIATION_ACTION, { action: p.p.DISMISS_IGNORE, location: v });
            },
            [v],
        ),
        (0, e.jsx)(o.a, {
            confirmText: R.intl.string(R.t.ytCpKs),
            cancelText: R.intl.string(R.t["ETE/oC"]),
            onConfirm: () => {
                (g?.(), N.A.ignoreUser(i.id, v, c ?? void 0), A.default.track(_.HAw.IGNORE_USER_CONFIRMED));
            },
            onCancel: function () {
                A.default.track(_.HAw.USER_REMEDIATION_ACTION, { action: p.p.CANCEL_IGNORE, location: v });
            },
            impression: { impressionName: r.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: l.$n.Colors.BRAND,
            ...k,
            children: (0, e.jsxs)("div", {
                className: C.kL,
                children: [
                    (0, e.jsxs)("div", {
                        className: C.RS,
                        children: [
                            (0, e.jsxs)("div", {
                                className: C.zc,
                                children: [
                                    (0, e.jsx)(d.eu, {
                                        size: u._3.SIZE_56,
                                        src: i.getAvatarURL(void 0, 64),
                                        "aria-hidden": !0,
                                    }),
                                    (0, e.jsx)("div", { className: C.Kk, children: (0, e.jsx)(x.EyeSlashIcon, {}) }),
                                ],
                            }),
                            (0, e.jsxs)("div", {
                                children: [
                                    (0, e.jsx)(E.D, {
                                        variant: "heading-xl/bold",
                                        color: "text-strong",
                                        children: R.intl.format(R.t["WrQD/Y"], { username: j.Ay.getName(a, c, i) }),
                                    }),
                                    (0, e.jsx)(m.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: R.intl.string(R.t.JKL1u1),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, e.jsx)(T, {}),
                    (0, e.jsxs)("div", {
                        className: C.l_,
                        children: [
                            (0, e.jsx)(h.Y0, {
                                title: R.intl.string(R.t["1v01gh"]),
                                children: (0, e.jsx)(h.PQ, {
                                    title: R.intl.string(R.t.bwxY30),
                                    description: R.intl.string(R.t.NTnf1T),
                                    titleVariant: "text-md/medium",
                                    descriptionVariant: "text-xs/medium",
                                    buttonText: R.intl.string(R.t.QdfUHE),
                                    onButtonPress: () => {
                                        (A.default.track(_.HAw.USER_REMEDIATION_ACTION, {
                                            action: p.p.GOTO_BLOCK,
                                            location: v,
                                        }),
                                            (0, I.closeAllModals)(),
                                            (0, I.openModalLazy)(async () => {
                                                let { default: t } = await Promise.all([
                                                    n.e("820683"),
                                                    n.e("670398"),
                                                ]).then(n.bind(n, 262797));
                                                return (n) =>
                                                    (0, e.jsx)(t, {
                                                        ...n,
                                                        user: i,
                                                        guildId: a,
                                                        channelId: c,
                                                        onBlock: O,
                                                        onIgnore: g,
                                                        location: v,
                                                    });
                                            }));
                                    },
                                }),
                            }),
                            (0, e.jsx)(m.E, {
                                variant: "text-sm/medium",
                                className: C.FV,
                                children: R.intl.format(R.t.Hjvqr6, {
                                    articleLink: f.A.getArticleURL(_.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
