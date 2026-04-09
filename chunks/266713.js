n.d(t, { A: () => u });
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(183555),
    s = n(725386),
    o = n(624160),
    d = n(985018),
    c = n(465058);
function u() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, l.NJ)(),
        n = a.useRef(!1),
        u = (0, s.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        a.useEffect(() => {
            n.current || (e({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (n.current = !0));
        }, [e]),
        (0, i.jsxs)("div", {
            className: c.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: c.FS,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: d.intl.string(d.t["oqalC+"]),
                        }),
                        (0, i.jsx)(r.Text, {
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
