n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    l = n(534514),
    s = n(834730),
    r = n(183555),
    o = n(725386),
    c = n(624160),
    d = n(985018),
    u = n(215538);
function g() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, r.NJ)(),
        n = a.useRef(!1),
        g = (0, o.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        a.useEffect(() => {
            n.current || (e({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (n.current = !0));
        }, [e]),
        (0, i.jsxs)("div", {
            className: u.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: u.FS,
                    children: [
                        (0, i.jsx)(l.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: d.intl.string(d.t["oqalC+"]),
                        }),
                        (0, i.jsx)(s.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: d.intl.string(d.t.O9SQ1c),
                        }),
                    ],
                }),
                (0, i.jsx)("ul", {
                    className: u.ZW,
                    "aria-label": d.intl.string(d.t["+EIBSA"]),
                    children: g.map((e) =>
                        (0, i.jsx)(
                            "li",
                            { children: (0, i.jsx)(c.A, { widget: e, size: "small", trackUserProfileEditAction: t }) },
                            e.getUniqueKey(),
                        ),
                    ),
                }),
            ],
        })
    );
}
