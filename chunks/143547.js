e.d(i, { default: () => _ });
var n = e(627968),
    s = e(64700),
    r = e(110259),
    l = e(421380),
    a = e(397927),
    c = e(49229),
    o = e(754302),
    d = e(632738),
    x = e(954571),
    m = e(975571),
    u = e(562153),
    N = e(994288),
    I = e(235627),
    f = e(652215),
    j = e(985018),
    g = e(107724);
function E() {
    return (0, n.jsxs)(o.q, {
        children: [
            (0, n.jsx)(o.B, {
                title: j.intl.string(j.t.ruhGkg),
                description: j.intl.string(j.t["/FWKKC"]),
                icon: a.yr3,
            }),
            (0, n.jsx)(o.B, { title: j.intl.string(j.t.N9v3eq), description: j.intl.string(j.t.ddpuJg), icon: a.yr3 }),
            (0, n.jsx)(o.B, {
                title: j.intl.string(j.t["4ycGE0"]),
                description: j.intl.string(j.t["5yfN+o"]),
                icon: a.mir,
            }),
        ],
    });
}
function _(t) {
    let { user: i, guildId: e, channelId: o, onIgnore: _, onBlock: h, location: A = "ContextMenu", ...T } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                x.default.track(f.HAw.USER_REMEDIATION_ACTION, { action: I.p.DISMISS_IGNORE, location: A });
            },
            [A],
        ),
        (0, n.jsx)(a.VoidConfirmModal, {
            confirmText: j.intl.string(j.t.ytCpKs),
            cancelText: j.intl.string(j.t["ETE/oC"]),
            onConfirm: () => {
                _?.(), c.A.ignoreUser(i.id, A, o ?? void 0), x.default.track(f.HAw.IGNORE_USER_CONFIRMED);
            },
            onCancel: () => {
                x.default.track(f.HAw.USER_REMEDIATION_ACTION, { action: I.p.CANCEL_IGNORE, location: A });
            },
            impression: { impressionName: r.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: l.$n.Colors.BRAND,
            ...T,
            children: (0, n.jsxs)("div", {
                className: g.kL,
                children: [
                    (0, n.jsxs)("div", {
                        className: g.RS,
                        children: [
                            (0, n.jsxs)("div", {
                                className: g.zc,
                                children: [
                                    (0, n.jsx)(a.euF, {
                                        size: a._3J.SIZE_56,
                                        src: i.getAvatarURL(void 0, 64),
                                        "aria-hidden": !0,
                                    }),
                                    (0, n.jsx)("div", { className: g.Kk, children: (0, n.jsx)(a.G3N, {}) }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(a.Heading, {
                                        variant: "heading-xl/bold",
                                        color: "text-strong",
                                        children: j.intl.format(j.t["WrQD/Y"], { username: u.Ay.getName(e, o, i) }),
                                    }),
                                    (0, n.jsx)(a.Text, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: j.intl.string(j.t.JKL1u1),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(E, {}),
                    (0, n.jsxs)("div", {
                        className: g.l_,
                        children: [
                            (0, n.jsx)(d.Y0, {
                                title: j.intl.string(j.t["1v01gh"]),
                                children: (0, n.jsx)(d.PQ, {
                                    title: j.intl.string(j.t.bwxY30),
                                    description: j.intl.string(j.t.NTnf1T),
                                    titleVariant: "text-md/medium",
                                    descriptionVariant: "text-xs/medium",
                                    buttonText: j.intl.string(j.t.QdfUHE),
                                    onButtonPress: () => {
                                        x.default.track(f.HAw.USER_REMEDIATION_ACTION, {
                                            action: I.p.GOTO_BLOCK,
                                            location: A,
                                        }),
                                            (0, a.s7G)(),
                                            (0, a.qfG)((t) =>
                                                (0, n.jsx)(N.default, {
                                                    ...t,
                                                    user: i,
                                                    guildId: e,
                                                    channelId: o,
                                                    onBlock: h,
                                                    onIgnore: _,
                                                    location: A,
                                                }),
                                            );
                                    },
                                }),
                            }),
                            (0, n.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                className: g.FV,
                                children: j.intl.format(j.t.Hjvqr6, {
                                    articleLink: m.A.getArticleURL(f.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
