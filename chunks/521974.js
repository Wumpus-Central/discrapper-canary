l.d(t, { A: () => m });
var i = l(477900),
    s = l(582128),
    n = l(503698),
    a = l.n(n),
    r = l(939249),
    o = l(7689),
    c = l(661531),
    d = l(683438),
    u = l(488995),
    h = l(449378);
function m(e) {
    let {
            state: t,
            query: l,
            placeholder: n,
            onTextChange: m,
            onCollapsedClick: p,
            onClear: g,
            onBlur: x,
            onSubmit: v,
        } = e,
        j = s.useRef(null),
        A = s.useCallback(
            (e) => {
                "Enter" === e.key && v();
            },
            [v],
        ),
        C = s.useCallback(() => {
            (p(), setTimeout(() => j.current?.focus()));
        }, [p]);
    return t === u.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, i.jsx)(r.D, {
              className: h.qc,
              onClick: C,
              children: (0, i.jsx)(o.MagnifyingGlassIcon, { size: "sm", color: c.A.colors.ICON_STRONG }),
          })
        : (0, i.jsx)("div", {
              className: a()(h.ON, { [h.Nz]: t === u.GlobalDiscoverySearchBarState.FLOATING }),
              children: (0, i.jsx)(d.I, {
                  size: "sm",
                  ref: j,
                  query: l,
                  placeholder: n,
                  onChange: m,
                  onClear: g,
                  onKeyDown: A,
                  onBlur: x,
              }),
          });
}
