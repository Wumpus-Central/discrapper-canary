n.d(t, { A: () => u });
var l = n(627968),
    a = n(64700),
    i = n(935462),
    r = n(825484),
    s = n(821609),
    d = n(235986),
    o = n(985018),
    c = n(221314);
let u = (e) => {
    let t,
        {
            button: n,
            submitting: u,
            disableNext: _,
            onClick: m,
            canNavigateBack: h,
            onBackClicked: g,
            isModeratorReport: p,
            className: x,
        } = e,
        A = a.useRef(null),
        f = null != n && "cancel" !== n.type,
        v = h && n?.type !== "done",
        b = f || v;
    if (
        (a.useEffect(() => {
            (n?.type === "submit" || n?.type === "done") && A.current?.focus();
        }, [n?.type]),
        !b)
    )
        return null;
    let N = o.intl.string(o.t.i4jeWR);
    return (
        n?.type === "submit"
            ? ((t = "critical-primary"), (N = p ? o.intl.string(c.default.ZUyreS) : o.intl.string(o.t["G+vU89"])))
            : n?.type === "next"
              ? (N = o.intl.string(o.t.PDTjLN))
              : n?.type === "cancel" && ((N = o.intl.string(o.t["ETE/oC"])), (t = "secondary")),
        (0, l.jsx)(i.jl, {
            "data-migration-pending": !0,
            direction: d.A.Direction.HORIZONTAL,
            className: x,
            children: (0, l.jsxs)(r.e, {
                fullWidth: !0,
                children: [
                    v &&
                        (0, l.jsx)(s.$, {
                            onClick: g,
                            variant: "secondary",
                            disabled: u,
                            text: o.intl.string(o.t["13/7kX"]),
                        }),
                    f &&
                        (0, l.jsx)(s.$, {
                            onClick: () => {
                                null != n && m(n);
                            },
                            variant: t,
                            disabled: u || _,
                            buttonRef: A,
                            text: N,
                        }),
                ],
            }),
        })
    );
};
