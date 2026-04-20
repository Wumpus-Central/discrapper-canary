n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(873298),
    a = n(397927),
    r = n(692798),
    o = n(253932),
    c = n(985018),
    d = n(578673);
function u() {
    let e = (function (e) {
            switch (e) {
                case s.NS.COMPACT:
                    return "compact";
                case s.NS.COZY:
                    return "spacious";
                default:
                    return "default";
            }
        })(o.Xi.useSetting()),
        t = l.useMemo(
            () => [
                { value: "compact", label: c.intl.string(c.t["1JNcPS"]), proto: s.NS.COMPACT },
                { value: "default", label: c.intl.string(c.t.Jqj4cZ), proto: s.NS.DEFAULT },
                { value: "spacious", label: c.intl.string(c.t["4cuYHx"]), proto: s.NS.COZY },
            ],
            [],
        ),
        n = l.useCallback(
            (e) => {
                let n = t.find((t) => t.value === e);
                null != n && o.Xi.updateSetting(n.proto);
            },
            [t],
        );
    return (0, i.jsxs)(a.BJc, {
        gap: 20,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(a.Heading, { variant: "heading-md/semibold", children: c.intl.string(c.t.Ksh3ik) }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: c.intl.string(c.t["mz+/o+"]),
                    }),
                    (0, i.jsx)(r.Ay, {
                        type: r.v0.SETTINGS,
                        children: (0, i.jsx)(a.BJc, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 12 },
                            children: (0, i.jsx)(r.t6, { systemSelectorFirst: !1 }),
                        }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(a.Heading, { variant: "heading-md/semibold", children: c.intl.string(c.t["C/5V0A"]) }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: c.intl.string(c.t.sBENmo),
                    }),
                    (0, i.jsx)(a.BJc, {
                        direction: "horizontal",
                        gap: 8,
                        style: { marginTop: 12 },
                        children: t.map((t) =>
                            (0, i.jsx)(
                                "button",
                                {
                                    className: d.mj,
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
