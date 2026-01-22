n.d(t, { A: () => d });
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(183555),
    s = n(725386),
    o = n(624160),
    c = n(985018),
    u = n(190401);
function d() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, a.NJ)(),
        n = l.useRef(!1),
        d = (0, s.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            n.current || (e({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (n.current = !0));
        }, [e]),
        (0, r.jsxs)("div", {
            className: u.Ie,
            children: [
                (0, r.jsxs)("div", {
                    className: u.FS,
                    children: [
                        (0, r.jsx)(i.Heading, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: c.intl.string(c.t["oqalC+"]),
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c.intl.string(c.t.O9SQ1c),
                        }),
                    ],
                }),
                (0, r.jsx)("ul", {
                    className: u.ZW,
                    "aria-label": c.intl.string(c.t["+EIBSA"]),
                    children: d.map((e) =>
                        (0, r.jsx)(
                            "li",
                            {
                                children: (0, r.jsx)(o.A, {
                                    widget: e,
                                    size: "small",
                                    trackUserProfileEditAction: t,
                                }),
                            },
                            e.getUniqueKey(),
                        ),
                    ),
                }),
            ],
        })
    );
}
