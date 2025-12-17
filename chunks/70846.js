e.d(r, { default: () => l });
var s = e(54381),
    i = e(473749),
    n = e(159691),
    a = e(426642),
    o = e(388032),
    c = e(778565);
let l = (t) => {
    let { transitionState: r, errors: e, onClose: l } = t,
        d = i.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: o.intl.string(o.t["NX+WJN"]),
                    onClick: l,
                },
            ],
            [l],
        );
    return (0, s.jsx)(n.u_l, {
        title: o.intl.string(o.t.AUIsQU),
        transitionState: r,
        onClose: l,
        actions: d,
        children: (0, s.jsx)("div", {
            className: c.errors,
            children: e.map((t) => (0, s.jsx)(a.Z, { error: t }, t.filename)),
        }),
    });
};
