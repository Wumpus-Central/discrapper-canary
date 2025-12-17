n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(681715),
    s = n(682288);
function c(e) {
    let {
            children: t,
            text: n,
            disableWrapper: l = !1,
            disabled: c = !1,
            hideOnClick: u = !0,
            shouldShow: d,
            forceOpen: f,
            selected: h = !1,
        } = e,
        p = i.useMemo(
            () =>
                null == n || c
                    ? null
                    : (0, r.jsx)("div", {
                          className: s.listItemTooltipContent,
                          children: n,
                      }),
            [n, c],
        ),
        g = l
            ? t
            : (0, r.jsx)("div", {
                  className: a()(s.listItemWrapper, { [s.selected]: h }),
                  children: t,
              });
    return (0, r.jsx)(o.u, {
        __unsupportedReactNodeAsText: p,
        position: "right",
        spacing: 12,
        hideOnClick: u,
        shouldShow: d,
        forceOpen: f,
        ariaHidden: !0,
        asContainer: !l,
        children: g,
    });
}
