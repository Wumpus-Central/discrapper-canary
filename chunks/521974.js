l.d(t, { A: () => m });
var s = l(627968),
    i = l(64700),
    a = l(503698),
    n = l.n(a),
    r = l(939249),
    o = l(7689),
    c = l(661531),
    d = l(892547),
    u = l(488995),
    h = l(206293);
function m(e) {
    let {
            state: t,
            query: l,
            placeholder: a,
            onTextChange: m,
            onCollapsedClick: p,
            onClear: g,
            onBlur: x,
            onSubmit: A,
        } = e,
        j = i.useRef(null),
        v = i.useCallback(
            (e) => {
                "Enter" === e.key && A();
            },
            [A],
        ),
        C = i.useCallback(() => {
            p(), setTimeout(() => j.current?.focus());
        }, [p]);
    return t === u.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, s.jsx)(r.D, {
              className: h.qc,
              onClick: C,
              children: (0, s.jsx)(o.$, { size: "sm", color: c.A.colors.ICON_STRONG }),
          })
        : (0, s.jsx)("div", {
              className: n()(h.ON, { [h.Nz]: t === u.GlobalDiscoverySearchBarState.FLOATING }),
              children: (0, s.jsx)(d.I, {
                  size: "sm",
                  ref: j,
                  query: l,
                  placeholder: a,
                  onChange: m,
                  onClear: g,
                  onKeyDown: v,
                  onBlur: x,
              }),
          });
}
