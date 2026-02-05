"use strict";
n.d(t, { t: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(555337),
    o = n(658446),
    d = n(946171),
    c = n(716610),
    u = n(985018),
    m = n(840966);
function g(e) {
    let { fetchDiscoveryData: t, settingsView: n, requireTerms: g, rules: x } = e,
        h = (0, l.bG)([a.A], () => a.A.getProps().guild);
    if (
        (s.useEffect(() => {
            null != h && t(h.id);
        }, [t, h]),
        null == h)
    )
        return null;
    switch (n) {
        case c.v.DISQUALIFIED:
            return (0, i.jsx)(o.A, {
                guild: h,
                guildId: h.id,
                headerContent: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: m.w,
                            children: u.intl.format(u.t.n1LDQM, {
                                removedHook: (e, t) => (0, i.jsx)("strong", { className: m.O, children: e }, t),
                            }),
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: u.intl.string(u.t.Qgaw3d),
                        }),
                    ],
                }),
            });
        case c.v.ELIGIBLE_DISABLED:
        case c.v.ELIGIBLE_ENABLED:
            return (0, i.jsx)(d.s, { requireTerms: g, rules: x, settingsView: n });
        case c.v.INELIGIBLE:
            return (0, i.jsx)(o.A, {
                guild: h,
                guildId: h.id,
                headerContent: (0, i.jsx)(r.Heading, {
                    variant: "heading-md/semibold",
                    children: u.intl.format(u.t["+6Hylv"], {
                        doesNotHook: (e, t) => (0, i.jsx)("strong", { className: m.O, children: e }, t),
                    }),
                }),
            });
        default:
            return (0, i.jsx)(r.y$y, {});
    }
}
