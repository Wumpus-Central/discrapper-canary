t.d(n, {
    Z: function () {
        return d;
    }
});
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(481060),
    s = t(49898),
    c = t(149025);
function d(e) {
    let { state: n, query: t, placeholder: r, onTextChange: d, onCollapsedClick: u, onClear: m, onBlur: p, onSubmit: _ } = e,
        g = i.useRef(null),
        f = i.useCallback(
            (e) => {
                'Enter' === e.key && _();
            },
            [_]
        ),
        v = i.useCallback(() => {
            u(),
                setTimeout(() => {
                    var e;
                    return null === (e = g.current) || void 0 === e ? void 0 : e.focus();
                });
        }, [u]);
    return n === s.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, a.jsx)(o.Clickable, {
              className: c.searchIcon,
              onClick: v,
              children: (0, a.jsx)(o.MagnifyingGlassIcon, {
                  size: 'md',
                  color: o.tokens.colors.INTERACTIVE_NORMAL
              })
          })
        : (0, a.jsx)(o.SearchBar, {
              ref: g,
              className: l()(c.searchBar, { [c.searchFloating]: n === s.GlobalDiscoverySearchBarState.FLOATING }),
              size: o.SearchBar.Sizes.MEDIUM,
              query: t,
              placeholder: r,
              onChange: d,
              onClear: m,
              onKeyDown: f,
              onBlur: p
          });
}
