n.d(t, { i: () => l });
var i = n(477900),
    r = n(582128),
    a = n(683071),
    s = n(592551);
function l(e) {
    let { message: t, type: n, role: l } = e,
        o = null == t || 0 === t.length || null == n,
        [d, c] = r.useState(n ?? "info"),
        [u, _] = r.useState(t ?? ""),
        [E, A] = r.useState(l ?? "status");
    return (
        r.useEffect(() => {
            (null != n && c(n), null != t && _(t), null != l && A(l));
        }, [n, t, l]),
        (0, i.jsx)("div", {
            className: o ? s.sectionHidden : s.section,
            children: (0, i.jsx)(a.w, { type: d, hidden: o, message: u, role: E }),
        })
    );
}
