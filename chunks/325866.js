i.d(t, { A: () => S });
var n = i(627968),
    s = i(64700),
    a = i(92674),
    r = i(397927),
    l = i(950191),
    o = i(840065),
    d = i(975571),
    u = i(427262),
    c = i(587510),
    m = i(789622),
    E = i(652215),
    g = i(985018),
    h = i(299043);
function S(e) {
    let { userRef: t, usernameSuggestionLoading: i = !1, oneClickFlow: S = !1, ..._ } = e,
        { user: A, editState: f, onClose: N } = _,
        T = (0, l.Ay)(A.id),
        x = (function (e, t, i) {
            switch (e) {
                case m.iv.EDIT_USERNAME:
                    return { header: g.intl.string(g.t["a/zCWh"]), subtitle: g.intl.string(g.t.gGz0se) };
                case m.iv.EDIT_DISPLAY_NAME:
                    return { header: g.intl.string(g.t.SRDNcG), subtitle: g.intl.string(g.t["940AS0"]) };
                case m.iv.PREVIEW:
                    return {
                        header: g.intl.formatToPlainString(g.t.XDHrcj, { displayName: t }),
                        subtitle: g.intl.format(g.t.bWE0ZD, {
                            onClick: () => {
                                i(), (0, o.openUserSettings)();
                            },
                        }),
                    };
                case m.iv.SUGGESTION:
                    return {
                        header: g.intl.string(g.t.F7T4db),
                        subtitle: g.intl.formatToPlainString(g.t.Z8F83a, {}),
                        link: g.intl.format(g.t.i2vB8z, { helpdeskArticle: d.A.getArticleURL(E.MVz.POMELO_FAQ) }),
                    };
                default:
                    return { header: g.intl.string(g.t["a/zCWh"]), subtitle: g.intl.string(g.t.gGz0se) };
            }
        })(f, u.Ay.getName(A), N),
        [v, I] = (0, r.zhh)(() => ({ opacity: 0, y: 10 }));
    return (
        s.useEffect(() => {
            I({ y: 0, opacity: 1, from: { y: 10, opacity: 0 } });
        }, [I, f]),
        (0, n.jsxs)("div", {
            className: h.xm,
            children: [
                (0, n.jsxs)(a.animated.div, {
                    style: { opacity: v.opacity, y: v.y },
                    children: [
                        (0, n.jsx)(r.Heading, {
                            className: h.DD,
                            color: "text-strong",
                            variant: "heading-xl/extrabold",
                            children: x.header,
                        }),
                        (0, n.jsxs)("div", {
                            className: h.VA,
                            children: [
                                (0, n.jsx)(r.Heading, {
                                    color: "text-default",
                                    variant: "heading-sm/medium",
                                    children: x.subtitle,
                                }),
                                null != x.link &&
                                    (0, n.jsx)(r.Text, {
                                        className: h.nf,
                                        color: "text-default",
                                        variant: "text-sm/medium",
                                        children: x.link,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(c.A, { ..._, displayProfile: T, ref: t, usernameSuggestionLoading: i, oneClickFlow: S }),
            ],
        })
    );
}
