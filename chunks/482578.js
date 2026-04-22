"use strict";
n.d(t, { A: () => u });
var a = n(627968),
    i = n(64700),
    r = n(935462),
    l = n(825484),
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
            canNavigateBack: p,
            onBackClicked: h,
            isModeratorReport: g,
            className: f,
        } = e,
        b = i.useRef(null),
        A = null != n && "cancel" !== n.type,
        x = p && n?.type !== "done",
        v = A || x;
    if (
        (i.useEffect(() => {
            (n?.type === "submit" || n?.type === "done") && b.current?.focus();
        }, [n?.type]),
        !v)
    )
        return null;
    let E = o.intl.string(o.t.i4jeWR);
    return (
        n?.type === "submit"
            ? ((t = "critical-primary"), (E = g ? o.intl.string(c.default.ZUyreS) : o.intl.string(o.t["G+vU89"])))
            : n?.type === "next"
              ? (E = o.intl.string(o.t.PDTjLN))
              : n?.type === "cancel" && ((E = o.intl.string(o.t["ETE/oC"])), (t = "secondary")),
        (0, a.jsx)(r.jl, {
            "data-migration-pending": !0,
            direction: d.A.Direction.HORIZONTAL,
            className: f,
            children: (0, a.jsxs)(l.e, {
                fullWidth: !0,
                children: [
                    x &&
                        (0, a.jsx)(s.$, {
                            onClick: h,
                            variant: "secondary",
                            disabled: u,
                            text: o.intl.string(o.t["13/7kX"]),
                        }),
                    A &&
                        (0, a.jsx)(s.$, {
                            onClick: () => {
                                null != n && m(n);
                            },
                            variant: t,
                            disabled: u || _,
                            buttonRef: b,
                            text: E,
                        }),
                ],
            }),
        })
    );
};
