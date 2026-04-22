n.d(e, { default: () => b });
var i = n(627968),
    l = n(64700),
    s = n(110259),
    r = n(862482),
    a = n(628284),
    c = n(885574),
    o = n(640238),
    d = n(97808),
    x = n(778712),
    m = n(952270),
    u = n(534514),
    h = n(834730),
    j = n(192308),
    N = n(49229),
    f = n(754302),
    _ = n(632738),
    g = n(954571),
    v = n(975571),
    E = n(562153),
    I = n(994288),
    A = n(235627),
    p = n(652215),
    C = n(985018),
    T = n(261369);
function R() {
    return (0, i.jsxs)(f.q, {
        children: [
            (0, i.jsx)(f.B, { title: C.intl.string(C.t.ruhGkg), description: C.intl.string(C.t["/FWKKC"]), icon: a.y }),
            (0, i.jsx)(f.B, { title: C.intl.string(C.t.N9v3eq), description: C.intl.string(C.t.ddpuJg), icon: a.y }),
            (0, i.jsx)(f.B, {
                title: C.intl.string(C.t["4ycGE0"]),
                description: C.intl.string(C.t["5yfN+o"]),
                icon: c.m,
            }),
        ],
    });
}
function b(t) {
    let { user: e, guildId: n, channelId: a, onIgnore: c, onBlock: f, location: b = "ContextMenu", ...k } = t;
    return (
        l.useLayoutEffect(
            () => () => {
                g.default.track(p.HAw.USER_REMEDIATION_ACTION, { action: A.p.DISMISS_IGNORE, location: b });
            },
            [b],
        ),
        (0, i.jsx)(o.a, {
            confirmText: C.intl.string(C.t.ytCpKs),
            cancelText: C.intl.string(C.t["ETE/oC"]),
            onConfirm: () => {
                c?.(), N.A.ignoreUser(e.id, b, a ?? void 0), g.default.track(p.HAw.IGNORE_USER_CONFIRMED);
            },
            onCancel: () => {
                g.default.track(p.HAw.USER_REMEDIATION_ACTION, { action: A.p.CANCEL_IGNORE, location: b });
            },
            impression: { impressionName: s.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: r.$n.Colors.BRAND,
            ...k,
            children: (0, i.jsxs)("div", {
                className: T.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: T.RS,
                        children: [
                            (0, i.jsxs)("div", {
                                className: T.zc,
                                children: [
                                    (0, i.jsx)(d.eu, {
                                        size: x._3.SIZE_56,
                                        src: e.getAvatarURL(void 0, 64),
                                        "aria-hidden": !0,
                                    }),
                                    (0, i.jsx)("div", { className: T.Kk, children: (0, i.jsx)(m.G, {}) }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(u.D, {
                                        variant: "heading-xl/bold",
                                        color: "text-strong",
                                        children: C.intl.format(C.t["WrQD/Y"], { username: E.Ay.getName(n, a, e) }),
                                    }),
                                    (0, i.jsx)(h.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: C.intl.string(C.t.JKL1u1),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(R, {}),
                    (0, i.jsxs)("div", {
                        className: T.l_,
                        children: [
                            (0, i.jsx)(_.Y0, {
                                title: C.intl.string(C.t["1v01gh"]),
                                children: (0, i.jsx)(_.PQ, {
                                    title: C.intl.string(C.t.bwxY30),
                                    description: C.intl.string(C.t.NTnf1T),
                                    titleVariant: "text-md/medium",
                                    descriptionVariant: "text-xs/medium",
                                    buttonText: C.intl.string(C.t.QdfUHE),
                                    onButtonPress: () => {
                                        g.default.track(p.HAw.USER_REMEDIATION_ACTION, {
                                            action: A.p.GOTO_BLOCK,
                                            location: b,
                                        }),
                                            (0, j.closeAllModals)(),
                                            (0, j.openModal)((t) =>
                                                (0, i.jsx)(I.default, {
                                                    ...t,
                                                    user: e,
                                                    guildId: n,
                                                    channelId: a,
                                                    onBlock: f,
                                                    onIgnore: c,
                                                    location: b,
                                                }),
                                            );
                                    },
                                }),
                            }),
                            (0, i.jsx)(h.E, {
                                variant: "text-sm/medium",
                                className: T.FV,
                                children: C.intl.format(C.t.Hjvqr6, {
                                    articleLink: v.A.getArticleURL(p.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
