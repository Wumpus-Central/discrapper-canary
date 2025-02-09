n.d(t, { Z: () => d });
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(481060),
    o = n(49898),
    c = n(510261);
function d(e) {
    let { state: t, query: n, placeholder: r, onTextChange: d, onCollapsedClick: u, onClear: m, onBlur: h, onSubmit: p } = e,
        g = a.useRef(null),
        _ = a.useCallback(
            (e) => {
                'Enter' === e.key && p();
            },
            [p]
        ),
        x = a.useCallback(() => {
            u(),
                setTimeout(() => {
                    var e;
                    return null === (e = g.current) || void 0 === e ? void 0 : e.focus();
                });
        }, [u]);
    return t === o.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, i.jsx)(s.P3F, {
              className: c.searchIcon,
              onClick: x,
              children: (0, i.jsx)(s._Ve, {
                  size: 'md',
                  color: s.TVs.colors.INTERACTIVE_NORMAL
              })
          })
        : (0, i.jsx)(s.E1j, {
              ref: g,
              className: l()(c.searchBar, { [c.searchFloating]: t === o.GlobalDiscoverySearchBarState.FLOATING }),
              size: s.E1j.Sizes.MEDIUM,
              query: n,
              placeholder: r,
              onChange: d,
              onClear: m,
              onKeyDown: _,
              onBlur: h
          });
}
