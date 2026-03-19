a.d(t, { A: () => d });
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(397927),
    o = a(488995),
    c = a(877110);
function d(e) {
    let {
            state: t,
            query: a,
            placeholder: l,
            onTextChange: d,
            onCollapsedClick: u,
            onClear: m,
            onBlur: h,
            onSubmit: p,
        } = e,
        _ = i.useRef(null),
        g = i.useCallback(
            (e) => {
                "Enter" === e.key && p();
            },
            [p],
        ),
        x = i.useCallback(() => {
            u(), setTimeout(() => _.current?.focus());
        }, [u]);
    return t === o.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, n.jsx)(r.DUT, {
              className: c.qc,
              onClick: x,
              children: (0, n.jsx)(r.$p$, { size: "sm", color: r.LU0.colors.ICON_STRONG }),
          })
        : (0, n.jsx)("div", {
              className: s()(c.ON, { [c.Nz]: t === o.GlobalDiscoverySearchBarState.FLOATING }),
              children: (0, n.jsx)(r.IWV, {
                  size: "sm",
                  ref: _,
                  query: a,
                  placeholder: l,
                  onChange: d,
                  onClear: m,
                  onKeyDown: g,
                  onBlur: h,
              }),
          });
}
