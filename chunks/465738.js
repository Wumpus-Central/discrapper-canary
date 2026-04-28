o.d(e, { A: () => C });
var t = o(627968),
    s = o(64700),
    i = o(503698),
    n = o.n(i),
    r = o(91871),
    a = o.n(r),
    c = o(735438),
    d = o.n(c),
    u = o(44482),
    p = o(17928),
    b = o(545442),
    g = o(305866),
    h = o(732771),
    j = o(676608),
    m = o(317525),
    k = o(652215),
    S = o(985018),
    x = o(673753);
let C = function (l) {
    let { className: e, guild: o, roleStyle: i, roleFilter: r, onSelect: c, onClose: C } = l,
        v = (0, p.bG)([m.A], () => m.A.getSortedRoles(o.id)),
        L = (0, j.Ay)(o.id, null),
        w = s.useMemo(
            () =>
                d()(v)
                    .filter(r)
                    .map((l) => ({
                        id: l.id,
                        value: l.id,
                        label: l.name,
                        leading:
                            "dot" === i
                                ? (0, t.jsx)(b.W, {
                                      className: x.b8,
                                      color: l.colorString ?? k.TpD,
                                      colors: L ? l.colorStrings : null,
                                      background: !1,
                                      tooltip: !1,
                                  })
                                : (0, t.jsx)(b.R, {
                                      className: x.kb,
                                      color: l.colorString ?? k.TpD,
                                      colors: L ? l.colorStrings : null,
                                  }),
                    }))
                    .value(),
            [v, r, i, L],
        ),
        A = s.useCallback(
            (l, e) => ("" === e.trim() ? l : l.filter((l) => a()(e.toLowerCase(), l.label.toLowerCase()))),
            [],
        );
    return (0, t.jsx)(g.l, {
        className: n()(x.kL, e),
        "aria-label": S.intl.string(S.t.ljnBlo),
        children: (0, t.jsxs)(h.iS, {
            selectionMode: "single",
            value: void 0,
            onSelectionChange: (l) => {
                null != l && (c(l), C());
            },
            options: w,
            customMatchSorter: A,
            children: [
                (0, t.jsx)(h.a3, {
                    label: S.intl.string(S.t.ljnBlo),
                    hideLabel: !0,
                    placeholder: S.intl.string(S.t.XPGZXP),
                    autoFocus: !0,
                }),
                (0, t.jsx)(h.X2, { renderListItem: (l) => (0, t.jsx)(u.c, { ...l }) }),
            ],
        }),
    });
};
