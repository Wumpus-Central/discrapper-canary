"use strict";
n.d(t, { E: () => d });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(636920),
    o = n(889599),
    c = n(248789);
function d(e) {
    let { hangStatusActivity: t, channel: n, userId: l, setPopoutRef: d } = e,
        u = s.useRef(null);
    return (
        s.useEffect(() => {
            d?.(u?.current);
        }, [u, d]),
        (0, i.jsx)("div", {
            ref: u,
            className: r()(c.popover, o.kL),
            children: (0, i.jsx)(a.Z, {
                hangStatusActivity: t,
                channel: n,
                userId: l,
                analyticsSource: "HangStatusPopout",
                iconClassName: o.Kk,
                textClassName: o.qS,
            }),
        })
    );
}
