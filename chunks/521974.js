var i = l(477900),
    n = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(939249),
    o = l(7689),
    c = l(646514),
    d = l(683438),
    u = l(488995),
    h = l(449378);
l.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    state: t,
                    query: l,
                    placeholder: s,
                    onTextChange: m,
                    onCollapsedClick: p,
                    onClear: g,
                    onBlur: x,
                    onSubmit: v,
                    onKeyDown: j,
                    inputProps: A,
                } = e,
                C = n.useRef(null),
                I = n.useCallback(
                    (e) => {
                        (j?.(e), "Enter" !== e.key || e.defaultPrevented || v());
                    },
                    [j, v],
                ),
                f = n.useCallback(() => {
                    (p(), setTimeout(() => C.current?.focus()));
                }, [p]);
            return t === u.Um.COLLAPSED
                ? (0, i.jsx)(r.D, {
                      className: h.qc,
                      onClick: f,
                      children: (0, i.jsx)(o.MagnifyingGlassIcon, { size: "sm", color: c.A.colors.ICON_STRONG }),
                  })
                : (0, i.jsx)("div", {
                      className: a()(h.ON, { [h.Nz]: t === u.Um.FLOATING }),
                      children: (0, i.jsx)(d.I, {
                          size: "sm",
                          ref: C,
                          query: l,
                          placeholder: s,
                          onChange: m,
                          onClear: g,
                          onKeyDown: I,
                          onBlur: x,
                          inputProps: A,
                      }),
                  });
        },
    },
);
