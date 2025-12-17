n.d(t, { Z: () => h }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(481060),
    c = n(774078),
    u = n(388032),
    d = n(207871);
let f = 1000;
function p(e) {
    let t = e.toString();
    return 1 === t.length ? ["0", t[0]] : [t[0], t[1]];
}
function _(e) {
    switch (e) {
        case "days":
            return u.intl.string(u.t.ixASa2);
        case "hours":
            return u.intl.string(u.t["8sNvNn"]);
        case "minutes":
            return u.intl.string(u.t["Gv6kP/"]);
        case "seconds":
            return u.intl.string(u.t.JhaiLW);
        default:
            return "";
    }
}
function m(e, t) {
    let [n, i] = p(e.unitValue);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(
                "div",
                {
                    className: d.timeUnitInnerContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: d.time,
                            children: [
                                (0, r.jsx)("div", {
                                    className: d.timeBoxOutline,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-md/medium",
                                        color: "always-white",
                                        children: n,
                                    }),
                                }),
                                (0, r.jsx)("div", {
                                    className: d.timeBoxOutline,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-md/medium",
                                        color: "always-white",
                                        children: i,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: _(e.unitType),
                        }),
                    ],
                },
                e.unitType,
            ),
            !t &&
                (0, r.jsx)(l.Text, {
                    className: d.unitDivider,
                    variant: "text-lg/normal",
                    color: "always-white",
                    children: ":",
                }),
        ],
    });
}
let h = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, c.Z)(s()(t).toDate(), f);
    if (null == i) return null;
    let { days: o, hours: p, minutes: _, seconds: h } = i,
        g = [
            {
                unitValue: o,
                unitType: "days",
            },
            {
                unitValue: p,
                unitType: "hours",
            },
            {
                unitValue: _,
                unitType: "minutes",
            },
            {
                unitValue: h,
                unitType: "seconds",
            },
        ];
    return (0, r.jsxs)("div", {
        className: a()(d.timerContainer, n),
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: u.intl.string(u.t["/ARFVE"]),
            }),
            (0, r.jsx)("div", {
                className: d.timeUnitsOuterContainer,
                children: g.map((e, t) => m(e, t === g.length - 1)),
            }),
        ],
    });
};
