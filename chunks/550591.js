n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(866665),
    d = n(785332),
    c = n(728309);
function u(e) {
    let {
            children: t,
            text: n,
            disableWrapper: a = !1,
            disabled: u = !1,
            hideOnClick: _ = !0,
            shouldShow: E,
            forceOpen: A,
            selected: h = !1,
        } = e,
        f = r.useMemo(
            () =>
                null == n || u
                    ? null
                    : (0, i.jsx)(l.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: d.A_,
                          children: n,
                      }),
            [n, u],
        ),
        I = a ? t : (0, i.jsx)("div", { className: s()(c.p, { [c.w]: h }), children: t });
    return (0, i.jsx)(o.m, {
        __unsupportedReactNodeAsText: f,
        position: "right",
        spacing: 12,
        hideOnClick: _,
        shouldShow: E,
        forceOpen: A,
        ariaHidden: !0,
        asContainer: !a,
        children: I,
    });
}
