d.d(t, { t: () => s });
var i = d(287822),
    e = d(898369),
    c = d(728718),
    a = { small: 24, medium: 48, large: 64 },
    s = ({
        title: l,
        subtitle: t,
        ariaLabel: d,
        size: s = "medium",
        fullScreen: n = !0,
        className: Z,
        presentational: b = !1,
    }) => {
        let m = a[s],
            o = (0, i.l)(null),
            u = (0, i.l)(null);
        return (
            (0, i._)(() => {
                !b && (d ? u.current?.focus() : l && o.current?.focus());
            }, [l, d, b]),
            (0, i.v)("div", {
                ref: u,
                class: (0, e.n)("IncodeSpinner", n && "IncodeSpinnerFullScreen", Z),
                "data-testid": "spinner",
                "data-title": l,
                "data-subtitle": t,
                "data-size": s,
                role: b ? void 0 : "status",
                "aria-live": b ? void 0 : "polite",
                "aria-label": b ? void 0 : d,
                "aria-hidden": !!b || void 0,
                tabIndex: !b && d ? -1 : void 0,
                children: (0, i.v)("div", {
                    class: "IncodeSpinnerContent",
                    "aria-hidden": !!d || void 0,
                    children: [
                        (0, i.v)(e.t, { size: m }),
                        (l || t) &&
                            (0, i.v)(i.x, {
                                children: [
                                    (0, i.v)(e.r, { size: 16 }),
                                    (0, i.v)("div", {
                                        class: "IncodeSpinnerText",
                                        children: [
                                            l &&
                                                (0, i.v)(c.t, {
                                                    ref: o,
                                                    tabIndex: -1,
                                                    className: "IncodeSpinnerTitle",
                                                    children: l,
                                                }),
                                            t &&
                                                (0, i.v)(i.x, {
                                                    children: [
                                                        l && (0, i.v)(e.r, { size: 12 }),
                                                        (0, i.v)("p", { class: "IncodeSpinnerSubtitle", children: t }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            })
        );
    };
