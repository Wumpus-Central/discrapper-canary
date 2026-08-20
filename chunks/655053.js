"use strict";
n.d(t, { i: () => l });
var i = n(477900),
    r = n(582128),
    a = n(683071),
    s = n(592551);
function l(e) {
    let { message: t, type: n } = e,
        l = null == t || 0 === t.length || null == n,
        [o, d] = r.useState(n ?? "info"),
        [c, u] = r.useState(t ?? "");
    return (
        r.useEffect(() => {
            null != n && d(n), null != t && u(t);
        }, [n, t]),
        (0, i.jsx)("div", {
            className: l ? s.sectionHidden : s.section,
            children: (0, i.jsx)(a.w, { type: o, hidden: l, children: c }),
        })
    );
}
