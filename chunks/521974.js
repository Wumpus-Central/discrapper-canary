var s = l(477900),
    i = l(582128),
    n = l(503698),
    a = l.n(n),
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
                    placeholder: n,
                    onTextChange: h,
                    onCollapsedClick: p,
                    onClear: g,
                    onBlur: x,
                    onSubmit: j,
                } = e,
                v = i.useRef(null),
                A = i.useCallback(
                    (e) => {
                        "Enter" === e.key && j();
                    },
                    [j],
                ),
                C = i.useCallback(() => {
                    (p(), setTimeout(() => v.current?.focus()));
                }, [p]);
            return t === u.Um.COLLAPSED
                ? (0, s.jsx)(r.D, {
                      className: m.qc,
                      onClick: C,
                      children: (0, s.jsx)(o.MagnifyingGlassIcon, { size: "sm", color: c.A.colors.ICON_STRONG }),
                  })
                : (0, s.jsx)("div", {
                      className: a()(m.ON, { [m.Nz]: t === u.Um.FLOATING }),
                      children: (0, s.jsx)(d.I, {
                          size: "sm",
                          ref: v,
                          query: l,
                          placeholder: n,
                          onChange: h,
                          onClear: g,
                          onKeyDown: A,
                          onBlur: x,
                      }),
                  });
        },
    },
);
