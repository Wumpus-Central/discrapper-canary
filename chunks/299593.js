a.d(t, { A: () => m });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(939249),
    o = a(7689),
    c = a(827734),
    d = a(892547),
    u = a(488995),
    h = a(206293);
function m(e) {
    let {
            state: t,
            query: a,
            placeholder: i,
            onTextChange: m,
            onCollapsedClick: p,
            onClear: _,
            onBlur: g,
            onSubmit: x,
        } = e,
        A = l.useRef(null),
        f = l.useCallback(
            (e) => {
                "Enter" === e.key && x();
            },
            [x],
        ),
        C = l.useCallback(() => {
            p(), setTimeout(() => A.current?.focus());
        }, [p]);
    return t === u.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, n.jsx)(r.D, {
              className: h.qc,
              onClick: C,
              children: (0, n.jsx)(o.$, { size: "sm", color: c.A.colors.ICON_STRONG }),
          })
        : (0, n.jsx)("div", {
              className: s()(h.ON, { [h.Nz]: t === u.GlobalDiscoverySearchBarState.FLOATING }),
              children: (0, n.jsx)(d.I, {
                  size: "sm",
                  ref: A,
                  query: a,
                  placeholder: i,
                  onChange: m,
                  onClear: _,
                  onKeyDown: f,
                  onBlur: g,
              }),
          });
}
