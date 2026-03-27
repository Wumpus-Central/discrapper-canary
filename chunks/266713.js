n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(183555),
    r = n(725386),
    o = n(624160),
    d = n(985018),
    c = n(4839);
function u() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, s.NJ)(),
        n = l.useRef(!1),
        u = (0, r.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            n.current || (e({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (n.current = !0));
        }, [e]),
        (0, i.jsxs)("div", {
            className: c.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: c.FS,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: d.intl.string(d.t["oqalC+"]),
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: d.intl.string(d.t.O9SQ1c),
                        }),
                    ],
                }),
                (0, i.jsx)("ul", {
                    className: c.ZW,
                    "aria-label": d.intl.string(d.t["+EIBSA"]),
                    children: u.map((e) =>
                        (0, i.jsx)(
                            "li",
                            { children: (0, i.jsx)(o.A, { widget: e, size: "small", trackUserProfileEditAction: t }) },
                            e.getUniqueKey(),
                        ),
                    ),
                }),
            ],
        })
    );
}
