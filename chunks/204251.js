n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(873298),
    a = n(331322),
    r = n(534514),
    o = n(834730),
    c = n(692798),
    d = n(253932),
    u = n(985018),
    p = n(578673);
function m() {
    let e = (function (e) {
            switch (e) {
                case s.NS.COMPACT:
                    return "compact";
                case s.NS.COZY:
                    return "spacious";
                default:
                    return "default";
            }
        })(d.Xi.useSetting()),
        t = l.useMemo(
            () => [
                { value: "compact", label: u.intl.string(u.t["1JNcPS"]), proto: s.NS.COMPACT },
                { value: "default", label: u.intl.string(u.t.Jqj4cZ), proto: s.NS.DEFAULT },
                { value: "spacious", label: u.intl.string(u.t["4cuYHx"]), proto: s.NS.COZY },
            ],
            [],
        ),
        n = l.useCallback(
            (e) => {
                let n = t.find((t) => t.value === e);
                null != n && d.Xi.updateSetting(n.proto);
            },
            [t],
        );
    return (0, i.jsxs)(a.B, {
        gap: 20,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(r.D, { variant: "heading-md/semibold", children: u.intl.string(u.t.Ksh3ik) }),
                    (0, i.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: u.intl.string(u.t["mz+/o+"]),
                    }),
                    (0, i.jsx)(c.Ay, {
                        type: c.v0.SETTINGS,
                        children: (0, i.jsx)(a.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 12 },
                            children: (0, i.jsx)(c.t6, { systemSelectorFirst: !1 }),
                        }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(r.D, { variant: "heading-md/semibold", children: u.intl.string(u.t["C/5V0A"]) }),
                    (0, i.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: u.intl.string(u.t.sBENmo),
                    }),
                    (0, i.jsx)(a.B, {
                        direction: "horizontal",
                        gap: 8,
                        style: { marginTop: 12 },
                        children: t.map((t) =>
                            (0, i.jsx)(
                                "button",
                                {
                                    className: p.mj,
                                    "data-selected": e === t.value || void 0,
                                    onClick: () => n(t.value),
                                    "aria-pressed": e === t.value,
                                    type: "button",
                                    children: t.label,
                                },
                                t.value,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
