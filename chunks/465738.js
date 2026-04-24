n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(91871),
    s = n.n(o),
    c = n(735438),
    d = n.n(c),
    u = n(44482),
    _ = n(17928),
    p = n(545442),
    f = n(305866),
    h = n(732771),
    m = n(676608),
    g = n(317525),
    b = n(652215),
    A = n(985018),
    E = n(673753);
let v = function (e) {
    let { className: t, guild: n, roleStyle: l, roleFilter: o, onSelect: c, onClose: v } = e,
        I = (0, _.bG)([g.A], () => g.A.getSortedRoles(n.id)),
        y = (0, m.Ay)(n.id, null),
        S = i.useMemo(
            () =>
                d()(I)
                    .filter(o)
                    .map((e) => ({
                        id: e.id,
                        value: e.id,
                        label: e.name,
                        leading:
                            "dot" === l
                                ? (0, a.jsx)(p.W, {
                                      className: E.b8,
                                      color: e.colorString ?? b.TpD,
                                      colors: y ? e.colorStrings : null,
                                      background: !1,
                                      tooltip: !1,
                                  })
                                : (0, a.jsx)(p.R, {
                                      className: E.kb,
                                      color: e.colorString ?? b.TpD,
                                      colors: y ? e.colorStrings : null,
                                  }),
                    }))
                    .value(),
            [I, o, l, y],
        ),
        C = i.useCallback(
            (e, t) => ("" === t.trim() ? e : e.filter((e) => s()(t.toLowerCase(), e.label.toLowerCase()))),
            [],
        );
    return (0, a.jsx)(f.l, {
        className: r()(E.kL, t),
        "aria-label": A.intl.string(A.t.ljnBlo),
        children: (0, a.jsxs)(h.iS, {
            selectionMode: "single",
            value: void 0,
            onSelectionChange: (e) => {
                null != e && (c(e), v());
            },
            options: S,
            customMatchSorter: C,
            children: [
                (0, a.jsx)(h.a3, {
                    label: A.intl.string(A.t.ljnBlo),
                    hideLabel: !0,
                    placeholder: A.intl.string(A.t.XPGZXP),
                    autoFocus: !0,
                }),
                (0, a.jsx)(h.X2, { renderListItem: (e) => (0, a.jsx)(u.c, { ...e }) }),
            ],
        }),
    });
};
