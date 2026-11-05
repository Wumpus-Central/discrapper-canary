var n = l(477900),
    s = l(582128),
    i = l(503698),
    a = l.n(i),
    r = l(939249),
    o = l(7689),
    c = l(646514),
    d = l(683438),
    u = l(488995),
    m = l(449378);
l.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    state: t,
                    query: l,
                    placeholder: i,
                    onTextChange: h,
                    onCollapsedClick: p,
                    onClear: g,
                    onBlur: x,
                    onSubmit: v,
                } = e,
                j = s.useRef(null),
                C = s.useCallback(
                    (e) => {
                        "Enter" === e.key && v();
                    },
                    [v],
                ),
                A = s.useCallback(() => {
                    (p(), setTimeout(() => j.current?.focus()));
                }, [p]);
            return t === u.Um.COLLAPSED
                ? (0, n.jsx)(r.D, {
                      className: m.qc,
                      onClick: A,
                      children: (0, n.jsx)(o.MagnifyingGlassIcon, { size: "sm", color: c.A.colors.ICON_STRONG }),
                  })
                : (0, n.jsx)("div", {
                      className: a()(m.ON, { [m.Nz]: t === u.Um.FLOATING }),
                      children: (0, n.jsx)(d.I, {
                          size: "sm",
                          ref: j,
                          query: l,
                          placeholder: i,
                          onChange: h,
                          onClear: g,
                          onKeyDown: C,
                          onBlur: x,
                      }),
                  });
        },
    },
);
