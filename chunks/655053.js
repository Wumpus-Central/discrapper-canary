"use strict";
n.d(t, { i: () => o });
var r = n(627968),
    i = n(64700),
    a = n(683071),
    s = n(22789);
function o(e) {
    let { message: t, type: n } = e,
        o = null == t || 0 === t.length || null == n,
        [l, u] = i.useState(n ?? "info"),
        [c, d] = i.useState(t ?? "");
    return (
        i.useEffect(() => {
            null != n && u(n), null != t && d(t);
        }, [n, t]),
        (0, r.jsx)("div", {
            className: o ? s.sectionHidden : s.section,
            children: (0, r.jsx)(a.w, { type: l, hidden: o, children: c }),
        })
    );
}
