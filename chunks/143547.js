n.d(i, { default: () => v });
var e = n(627968),
    s = n(64700),
    r = n(562708),
    l = n(862482),
    a = n(628284),
    c = n(885574),
    o = n(640238),
    d = n(97808),
    x = n(778712),
    u = n(952270),
    m = n(534514),
    E = n(834730),
    I = n(192308),
    N = n(717398),
    g = n(754302),
    A = n(632738),
    j = n(174459),
    h = n(975571),
    _ = n(562153),
    f = n(262797),
    C = n(235627),
    R = n(652215),
    T = n(375708),
    O = n(261369);
function p() {
    return (0, e.jsxs)(g.q, {
        children: [
            (0, e.jsx)(g.B, { title: T.intl.string(T.t.ruhGkg), description: T.intl.string(T.t["/FWKKC"]), icon: a.y }),
            (0, e.jsx)(g.B, { title: T.intl.string(T.t.N9v3eq), description: T.intl.string(T.t.ddpuJg), icon: a.y }),
            (0, e.jsx)(g.B, {
                title: T.intl.string(T.t["4ycGE0"]),
                description: T.intl.string(T.t["5yfN+o"]),
                icon: c.m,
            }),
        ],
    });
}
function v(t) {
    let { user: i, guildId: n, channelId: a, onIgnore: c, onBlock: g, location: v = "ContextMenu", ...S } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                j.default.track(R.HAw.USER_REMEDIATION_ACTION, { action: C.p.DISMISS_IGNORE, location: v });
            },
            [v],
        ),
        (0, e.jsx)(o.a, {
            confirmText: T.intl.string(T.t.ytCpKs),
            cancelText: T.intl.string(T.t["ETE/oC"]),
            onConfirm: () => {
                c?.(), N.A.ignoreUser(i.id, v, a ?? void 0), j.default.track(R.HAw.IGNORE_USER_CONFIRMED);
            },
            onCancel: () => {
                j.default.track(R.HAw.USER_REMEDIATION_ACTION, { action: C.p.CANCEL_IGNORE, location: v });
            },
            impression: { impressionName: r.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: l.$n.Colors.BRAND,
            ...S,
            children: (0, e.jsxs)("div", {
                className: O.kL,
                children: [
                    (0, e.jsxs)("div", {
                        className: O.RS,
                        children: [
                            (0, e.jsxs)("div", {
                                className: O.zc,
                                children: [
                                    (0, e.jsx)(d.eu, {
                                        size: x._3.SIZE_56,
                                        src: i.getAvatarURL(void 0, 64),
                                        "aria-hidden": !0,
                                    }),
                                    (0, e.jsx)("div", { className: O.Kk, children: (0, e.jsx)(u.G, {}) }),
                                ],
                            }),
                            (0, e.jsxs)("div", {
                                children: [
                                    (0, e.jsx)(m.D, {
                                        variant: "heading-xl/bold",
                                        color: "text-strong",
                                        children: T.intl.format(T.t["WrQD/Y"], { username: _.Ay.getName(n, a, i) }),
                                    }),
                                    (0, e.jsx)(E.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: T.intl.string(T.t.JKL1u1),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, e.jsx)(p, {}),
                    (0, e.jsxs)("div", {
                        className: O.l_,
                        children: [
                            (0, e.jsx)(A.Y0, {
                                title: T.intl.string(T.t["1v01gh"]),
                                children: (0, e.jsx)(A.PQ, {
                                    title: T.intl.string(T.t.bwxY30),
                                    description: T.intl.string(T.t.NTnf1T),
                                    titleVariant: "text-md/medium",
                                    descriptionVariant: "text-xs/medium",
                                    buttonText: T.intl.string(T.t.QdfUHE),
                                    onButtonPress: () => {
                                        j.default.track(R.HAw.USER_REMEDIATION_ACTION, {
                                            action: C.p.GOTO_BLOCK,
                                            location: v,
                                        }),
                                            (0, I.closeAllModals)(),
                                            (0, I.openModal)((t) =>
                                                (0, e.jsx)(f.default, {
                                                    ...t,
                                                    user: i,
                                                    guildId: n,
                                                    channelId: a,
                                                    onBlock: g,
                                                    onIgnore: c,
                                                    location: v,
                                                }),
                                            );
                                    },
                                }),
                            }),
                            (0, e.jsx)(E.E, {
                                variant: "text-sm/medium",
                                className: O.FV,
                                children: T.intl.format(T.t.Hjvqr6, {
                                    articleLink: h.A.getArticleURL(R.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
