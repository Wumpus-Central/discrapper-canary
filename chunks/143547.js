n.d(i, { default: () => A });
var e = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(421380),
    a = n(397927),
    o = n(49229),
    c = n(754302),
    d = n(632738),
    u = n(954571),
    x = n(975571),
    m = n(562153),
    I = n(994288),
    E = n(235627),
    N = n(652215),
    g = n(985018),
    f = n(261369);
function _() {
    return (0, e.jsxs)(c.q, {
        children: [
            (0, e.jsx)(c.B, {
                title: g.intl.string(g.t.ruhGkg),
                description: g.intl.string(g.t["/FWKKC"]),
                icon: a.yr3,
            }),
            (0, e.jsx)(c.B, { title: g.intl.string(g.t.N9v3eq), description: g.intl.string(g.t.ddpuJg), icon: a.yr3 }),
            (0, e.jsx)(c.B, {
                title: g.intl.string(g.t["4ycGE0"]),
                description: g.intl.string(g.t["5yfN+o"]),
                icon: a.mir,
            }),
        ],
    });
}
function A(t) {
    let { user: i, guildId: n, channelId: c, onIgnore: A, onBlock: j, location: C = "ContextMenu", ...h } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                u.default.track(N.HAw.USER_REMEDIATION_ACTION, { action: E.p.DISMISS_IGNORE, location: C });
            },
            [C],
        ),
        (0, e.jsx)(a.VoidConfirmModal, {
            confirmText: g.intl.string(g.t.ytCpKs),
            cancelText: g.intl.string(g.t["ETE/oC"]),
            onConfirm: () => {
                A?.(), o.A.ignoreUser(i.id, C, c ?? void 0), u.default.track(N.HAw.IGNORE_USER_CONFIRMED);
            },
            onCancel: () => {
                u.default.track(N.HAw.USER_REMEDIATION_ACTION, { action: E.p.CANCEL_IGNORE, location: C });
            },
            impression: { impressionName: r.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: l.$n.Colors.BRAND,
            ...h,
            children: (0, e.jsxs)("div", {
                className: f.kL,
                children: [
                    (0, e.jsxs)("div", {
                        className: f.RS,
                        children: [
                            (0, e.jsxs)("div", {
                                className: f.zc,
                                children: [
                                    (0, e.jsx)(a.euF, {
                                        size: a._3J.SIZE_56,
                                        src: i.getAvatarURL(void 0, 64),
                                        "aria-hidden": !0,
                                    }),
                                    (0, e.jsx)("div", { className: f.Kk, children: (0, e.jsx)(a.G3N, {}) }),
                                ],
                            }),
                            (0, e.jsxs)("div", {
                                children: [
                                    (0, e.jsx)(a.Heading, {
                                        variant: "heading-xl/bold",
                                        color: "text-strong",
                                        children: g.intl.format(g.t["WrQD/Y"], { username: m.Ay.getName(n, c, i) }),
                                    }),
                                    (0, e.jsx)(a.Text, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: g.intl.string(g.t.JKL1u1),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, e.jsx)(_, {}),
                    (0, e.jsxs)("div", {
                        className: f.l_,
                        children: [
                            (0, e.jsx)(d.Y0, {
                                title: g.intl.string(g.t["1v01gh"]),
                                children: (0, e.jsx)(d.PQ, {
                                    title: g.intl.string(g.t.bwxY30),
                                    description: g.intl.string(g.t.NTnf1T),
                                    titleVariant: "text-md/medium",
                                    descriptionVariant: "text-xs/medium",
                                    buttonText: g.intl.string(g.t.QdfUHE),
                                    onButtonPress: () => {
                                        u.default.track(N.HAw.USER_REMEDIATION_ACTION, {
                                            action: E.p.GOTO_BLOCK,
                                            location: C,
                                        }),
                                            (0, a.s7G)(),
                                            (0, a.qfG)((t) =>
                                                (0, e.jsx)(I.default, {
                                                    ...t,
                                                    user: i,
                                                    guildId: n,
                                                    channelId: c,
                                                    onBlock: j,
                                                    onIgnore: A,
                                                    location: C,
                                                }),
                                            );
                                    },
                                }),
                            }),
                            (0, e.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                className: f.FV,
                                children: g.intl.format(g.t.Hjvqr6, {
                                    articleLink: x.A.getArticleURL(N.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
