var s = o(477900),
    t = o(582128),
    i = o(503698),
    n = o.n(i),
    r = o(91871),
    a = o.n(r),
    c = o(435558),
    d = o.n(c),
    u = o(855986),
    p = o(545442),
    b = o(305866),
    g = o(873200),
    h = o(44482),
    j = o(676608),
    m = o(317525),
    k = o(652215),
    S = o(792996),
    x = o(748118);
o.d(
    e,
    {},
    {
        A: function (l) {
            let { className: e, guild: o, roleStyle: i, roleFilter: r, onSelect: c, onClose: C } = l,
                v = (0, u.bG)([m.A], () => m.A.getSortedRoles(o.id)),
                L = (0, j.Ay)(o.id, null),
                w = t.useMemo(
                    () =>
                        d()(v)
                            .filter(r)
                            .map((l) => ({
                                id: l.id,
                                value: l.id,
                                label: l.name,
                                leading:
                                    "dot" === i
                                        ? (0, s.jsx)(p.W, {
                                              className: x.b8,
                                              color: l.colorString ?? k.TpD,
                                              colors: L ? l.colorStrings : null,
                                              background: !1,
                                              tooltip: !1,
                                          })
                                        : (0, s.jsx)(p.R, {
                                              className: x.kb,
                                              color: l.colorString ?? k.TpD,
                                              colors: L ? l.colorStrings : null,
                                          }),
                            }))
                            .value(),
                    [v, r, i, L],
                ),
                A = t.useCallback(
                    (l, e) => ("" === e.trim() ? l : l.filter((l) => a()(e.toLowerCase(), l.label.toLowerCase()))),
                    [],
                );
            return (0, s.jsx)(b.l, {
                className: n()(x.kL, e),
                "aria-label": S.intl.string(S.t.ljnBlo),
                children: (0, s.jsxs)(g.iS, {
                    selectionMode: "single",
                    value: void 0,
                    onSelectionChange: (l) => {
                        null != l && (c(l), C());
                    },
                    options: w,
                    customMatchSorter: A,
                    children: [
                        (0, s.jsx)(g.a3, {
                            label: S.intl.string(S.t.ljnBlo),
                            hideLabel: !0,
                            placeholder: S.intl.string(S.t.XPGZXP),
                            autoFocus: !0,
                        }),
                        (0, s.jsx)(g.X2, { renderListItem: (l) => (0, s.jsx)(h.c, { ...l }) }),
                    ],
                }),
            });
        },
    },
);
