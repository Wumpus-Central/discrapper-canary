a.d(t, { A: () => d });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(397927),
    o = a(488995),
    c = a(877110);
function d(e) {
    let {
            state: t,
            query: a,
            placeholder: s,
            onTextChange: d,
            onCollapsedClick: u,
            onClear: h,
            onBlur: m,
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
              className: l()(c.ON, { [c.Nz]: t === o.GlobalDiscoverySearchBarState.FLOATING }),
              children: (0, n.jsx)(r.IWV, {
                  size: "sm",
                  ref: _,
                  query: a,
                  placeholder: s,
                  onChange: d,
                  onClear: h,
                  onKeyDown: g,
                  onBlur: m,
              }),
          });
}
