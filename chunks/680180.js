n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    s = n(49898),
    c = n(149025);
function d(e) {
    let { state: t, query: n, placeholder: r, onTextChange: d, onCollapsedClick: u, onClear: m, onBlur: p, onSubmit: h } = e,
        g = a.useRef(null),
        C = a.useCallback(
            (e) => {
                'Enter' === e.key && h();
            },
            [h]
        ),
        x = a.useCallback(() => {
            u(),
                setTimeout(() => {
                    var e;
                    return null === (e = g.current) || void 0 === e ? void 0 : e.focus();
                });
        }, [u]);
    return t === s.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, i.jsx)(o.Clickable, {
              className: c.searchIcon,
              onClick: x,
              children: (0, i.jsx)(o.MagnifyingGlassIcon, {
                  size: 'md',
                  color: o.tokens.colors.INTERACTIVE_NORMAL
              })
          })
        : (0, i.jsx)(o.SearchBar, {
              ref: g,
              className: l()(c.searchBar, { [c.searchFloating]: t === s.GlobalDiscoverySearchBarState.FLOATING }),
              size: o.SearchBar.Sizes.MEDIUM,
              query: n,
              placeholder: r,
              onChange: d,
              onClear: m,
              onKeyDown: C,
              onBlur: p
          });
}
