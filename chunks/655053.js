n.d(t, {
    i: () => o,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(683071),
    s = n(22789);

function o(e) {
    let { message: t, type: n } = e,
        o = null == t || 0 === t.length || null == n,
        [l, c] = i.useState(null != n ? n : "info"),
        [u, d] = i.useState(null != t ? t : "");
    return (
        i.useEffect(() => {
            null != n && c(n), null != t && d(t);
        }, [n, t]),
        (0, r.jsx)("div", {
            className: o ? s.sectionHidden : s.section,
            children: (0, r.jsx)(a.w, {
                type: l,
                hidden: o,
                children: u,
            }),
        })
    );
}
