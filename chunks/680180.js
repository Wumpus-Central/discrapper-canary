n.d(t, { Z: () => d });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(49898),
    c = n(447141);
function d(e) {
    let {
            state: t,
            query: n,
            placeholder: i,
            onTextChange: d,
            onCollapsedClick: u,
            onClear: p,
            onBlur: m,
            onSubmit: h,
        } = e,
        f = r.useRef(null),
        g = r.useCallback(
            (e) => {
                "Enter" === e.key && h();
            },
            [h],
        ),
        b = r.useCallback(() => {
            u(),
                setTimeout(() => {
                    var e;
                    return null == (e = f.current) ? void 0 : e.focus();
                });
        }, [u]);
    return t === o.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, a.jsx)(s.P3F, {
              className: c.searchIcon,
              onClick: b,
              children: (0, a.jsx)(s._Ve, {
                  size: "sm",
                  color: s.TVs.colors.ICON_STRONG,
              }),
          })
        : (0, a.jsx)("div", {
              className: l()(c.searchBar, { [c.searchFloating]: t === o.GlobalDiscoverySearchBarState.FLOATING }),
              children: (0, a.jsx)(s.E1j, {
                  size: "sm",
                  ref: f,
                  query: n,
                  placeholder: i,
                  onChange: d,
                  onClear: p,
                  onKeyDown: g,
                  onBlur: m,
              }),
          });
}
