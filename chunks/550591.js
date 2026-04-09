n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(435371),
    o = n(278148);
function d(e) {
    let {
            children: t,
            text: n,
            disableWrapper: s = !1,
            disabled: d = !1,
            hideOnClick: c = !0,
            shouldShow: u,
            forceOpen: h,
            selected: A = !1,
        } = e,
        _ = l.useMemo(() => (null == n || d ? null : (0, i.jsx)("div", { className: o.SH, children: n })), [n, d]),
        m = s ? t : (0, i.jsx)("div", { className: a()(o.pm, { [o.wH]: A }), children: t });
    return (0, i.jsx)(r.m_, {
        __unsupportedReactNodeAsText: _,
        position: "right",
        spacing: 12,
        hideOnClick: c,
        shouldShow: u,
        forceOpen: h,
        ariaHidden: !0,
        asContainer: !s,
        children: m,
    });
}
