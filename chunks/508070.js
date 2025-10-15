n.d(t, { Z: () => p }), n(388685);
var r = n(951288);
n(647438);
var i = n(913527),
    a = n.n(i),
    o = n(481060),
    s = n(774078),
    l = n(388032),
    c = n(195623);
let u = 1000;
function d(e) {
    let t = e.toString();
    return 1 === t.length ? ["0", t[0]] : [t[0], t[1]];
}
function f(e) {
    switch (e) {
        case "days":
            return l.intl.string(l.t.ixASa2);
        case "hours":
            return l.intl.string(l.t["8sNvNn"]);
        case "minutes":
            return l.intl.string(l.t["Gv6kP/"]);
        case "seconds":
            return l.intl.string(l.t.JhaiLW);
        default:
            return "";
    }
}
function _(e, t) {
    let [n, i] = d(e.unitValue);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(
                "div",
                {
                    className: c.timeUnitInnerContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: c.time,
                            children: [
                                (0, r.jsx)("div", {
                                    className: c.timeBoxOutline,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        color: "always-white",
                                        children: n,
                                    }),
                                }),
                                (0, r.jsx)("div", {
                                    className: c.timeBoxOutline,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        color: "always-white",
                                        children: i,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "always-white",
                            children: f(e.unitType),
                        }),
                    ],
                },
                e.unitType,
            ),
            !t &&
                (0, r.jsx)(o.Text, {
                    className: c.unitDivider,
                    variant: "text-lg/normal",
                    color: "always-white",
                    children: ":",
                }),
        ],
    });
}
let p = (e) => {
    let { expiresAt: t } = e,
        n = (0, s.Z)(a()(t).toDate(), u);
    if (null == n) return null;
    let { days: i, hours: d, minutes: f, seconds: p } = n,
        h = [
            {
                unitValue: i,
                unitType: "days",
            },
            {
                unitValue: d,
                unitType: "hours",
            },
            {
                unitValue: f,
                unitType: "minutes",
            },
            {
                unitValue: p,
                unitType: "seconds",
            },
        ];
    return (0, r.jsxs)("div", {
        className: c.timerContainer,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: l.intl.string(l.t["/ARFVE"]),
            }),
            (0, r.jsx)("div", {
                className: c.timeUnitsOuterContainer,
                children: h.map((e, t) => _(e, t === h.length - 1)),
            }),
        ],
    });
};
