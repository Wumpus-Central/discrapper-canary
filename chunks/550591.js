n.d(t, {
    A: () => c,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(435371),
    o = n(354071);

function c(e) {
    let {
            children: t,
            text: n,
            disableWrapper: i = !1,
            disabled: c = !1,
            hideOnClick: u = !0,
            shouldShow: d,
            forceOpen: f,
            selected: p = !1,
        } = e,
        h = l.useMemo(
            () =>
                null == n || c
                    ? null
                    : (0, r.jsx)("div", {
                          className: o.SH,
                          children: n,
                      }),
            [n, c],
        ),
        b = i
            ? t
            : (0, r.jsx)("div", {
                  className: a()(o.pm, {
                      [o.wH]: p,
                  }),
                  children: t,
              });
    return (0, r.jsx)(s.m_, {
        __unsupportedReactNodeAsText: h,
        position: "right",
        spacing: 12,
        hideOnClick: u,
        shouldShow: d,
        forceOpen: f,
        ariaHidden: !0,
        asContainer: !i,
        children: b,
    });
}
