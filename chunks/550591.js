n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(435371),
    o = n(278148);
function c(e) {
    let {
            children: t,
            text: n,
            disableWrapper: s = !1,
            disabled: c = !1,
            hideOnClick: d = !0,
            shouldShow: u,
            forceOpen: h,
            selected: A = !1,
        } = e,
        _ = l.useMemo(() => (null == n || c ? null : (0, i.jsx)("div", { className: o.SH, children: n })), [n, c]),
        m = s ? t : (0, i.jsx)("div", { className: a()(o.pm, { [o.wH]: A }), children: t });
    return (0, i.jsx)(r.m_, {
        __unsupportedReactNodeAsText: _,
        position: "right",
        spacing: 12,
        hideOnClick: d,
        shouldShow: u,
        forceOpen: h,
        ariaHidden: !0,
        asContainer: !s,
        children: m,
    });
}
