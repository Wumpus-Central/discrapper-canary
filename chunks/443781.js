i.d(t, { t: () => s });
var r = i(248702),
    n = i(517e3),
    o = i(542075),
    a = { small: 24, medium: 48, large: 64 },
    s = ({ title: e, subtitle: t, size: i = "medium", fullScreen: s = !0, className: l }) => {
        let c = a[i],
            d = (0, r.l)(null);
        return (
            (0, r._)(() => {
                e && d.current?.focus();
            }, [e]),
            (0, r.v)("div", {
                class: (0, n.n)("IncodeSpinner", s && "IncodeSpinnerFullScreen", l),
                "data-testid": "spinner",
                "data-title": e,
                "data-subtitle": t,
                "data-size": i,
                role: "status",
                "aria-live": "polite",
                children: (0, r.v)("div", {
                    class: "IncodeSpinnerContent",
                    children: [
                        (0, r.v)(n.t, { size: c }),
                        (e || t) &&
                            (0, r.v)(r.S, {
                                children: [
                                    (0, r.v)(n.r, { size: 16 }),
                                    (0, r.v)("div", {
                                        class: "IncodeSpinnerText",
                                        children: [
                                            e &&
                                                (0, r.v)(o.t, {
                                                    ref: d,
                                                    tabIndex: -1,
                                                    className: "IncodeSpinnerTitle",
                                                    children: e,
                                                }),
                                            t &&
                                                (0, r.v)(r.S, {
                                                    children: [
                                                        e && (0, r.v)(n.r, { size: 12 }),
                                                        (0, r.v)("p", { class: "IncodeSpinnerSubtitle", children: t }),
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
