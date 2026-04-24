"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(939249),
    o = n(7689),
    c = n(661531),
    d = n(892547),
    u = n(488995),
    h = n(206293);
function p(e) {
    let {
            state: t,
            query: n,
            placeholder: s,
            onTextChange: p,
            onCollapsedClick: m,
            onClear: _,
            onBlur: g,
            onSubmit: x,
        } = e,
        f = a.useRef(null),
        A = a.useCallback(
            (e) => {
                "Enter" === e.key && x();
            },
            [x],
        ),
        C = a.useCallback(() => {
            m(), setTimeout(() => f.current?.focus());
        }, [m]);
    return t === u.GlobalDiscoverySearchBarState.COLLAPSED
        ? (0, i.jsx)(r.D, {
              className: h.qc,
              onClick: C,
              children: (0, i.jsx)(o.$, { size: "sm", color: c.A.colors.ICON_STRONG }),
          })
        : (0, i.jsx)("div", {
              className: l()(h.ON, { [h.Nz]: t === u.GlobalDiscoverySearchBarState.FLOATING }),
              children: (0, i.jsx)(d.I, {
                  size: "sm",
                  ref: f,
                  query: n,
                  placeholder: s,
                  onChange: p,
                  onClear: _,
                  onKeyDown: A,
                  onBlur: g,
              }),
          });
}
