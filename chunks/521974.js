n.d(t, {
    A: () => d,
});
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(397927),
    c = n(488995),
    o = n(51e4);

function d(e) {
    let {
            state: t,
            query: n,
            placeholder: r,
            onTextChange: d,
            onCollapsedClick: u,
            onClear: p,
            onBlur: h,
            onSubmit: m,
        } = e,
        b = a.useRef(null),
        f = a.useCallback(
            (e) => {
                "Enter" === e.key && m();
            },
            [m],
        ),
        g = a.useCallback(() => {
            u(),
                setTimeout(() => {
                    var e;
                    return null == (e = b.current) ? void 0 : e.focus();
                });
        }, [u]);
    return t === c.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, l.jsx)(s.DUT, {
              className: o.qc,
              onClick: g,
              children: (0, l.jsx)(s.$p$, {
                  size: "sm",
                  color: s.LU0.colors.ICON_STRONG,
              }),
          })
        : (0, l.jsx)("div", {
              className: i()(o.ON, {
                  [o.Nz]: t === c.GlobalDiscoverySearchBarState.FLOATING,
              }),
              children: (0, l.jsx)(s.IWV, {
                  size: "sm",
                  ref: b,
                  query: n,
                  placeholder: r,
                  onChange: d,
                  onClear: p,
                  onKeyDown: f,
                  onBlur: h,
              }),
          });
}
