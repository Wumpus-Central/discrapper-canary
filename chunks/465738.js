n.d(t, { A: () => b });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(91871),
    s = n.n(o),
    d = n(735438),
    c = n.n(d),
    u = n(44482),
    _ = n(311907),
    p = n(545442),
    f = n(305866),
    A = n(389723),
    g = n(676608),
    h = n(317525),
    x = n(652215),
    m = n(985018),
    I = n(673753);
let b = function (e) {
    let { className: t, guild: n, roleStyle: l, roleFilter: o, onSelect: d, onClose: b } = e,
        v = (0, _.bG)([h.A], () => h.A.getSortedRoles(n.id)),
        C = (0, g.Ay)(n.id, null),
        y = i.useMemo(
            () =>
                c()(v)
                    .filter(o)
                    .map((e) => ({
                        id: e.id,
                        value: e.id,
                        label: e.name,
                        leading:
                            "dot" === l
                                ? (0, a.jsx)(p.W, {
                                      className: I.b8,
                                      color: e.colorString ?? x.TpD,
                                      colors: C ? e.colorStrings : null,
                                      background: !1,
                                      tooltip: !1,
                                  })
                                : (0, a.jsx)(p.R, {
                                      className: I.kb,
                                      color: e.colorString ?? x.TpD,
                                      colors: C ? e.colorStrings : null,
                                  }),
                    }))
                    .value(),
            [v, o, l, C],
        ),
        P = i.useCallback(
            (e, t) => ("" === t.trim() ? e : e.filter((e) => s()(t.toLowerCase(), e.label.toLowerCase()))),
            [],
        );
    return (0, a.jsx)(f.l, {
        className: r()(I.kL, t),
        "aria-label": m.intl.string(m.t.ljnBlo),
        children: (0, a.jsxs)(A.iS, {
            selectionMode: "single",
            value: void 0,
            onSelectionChange: (e) => {
                null != e && (d(e), b());
            },
            options: y,
            customMatchSorter: P,
            children: [
                (0, a.jsx)(A.a3, {
                    label: m.intl.string(m.t.ljnBlo),
                    hideLabel: !0,
                    placeholder: m.intl.string(m.t.XPGZXP),
                    autoFocus: !0,
                }),
                (0, a.jsx)(A.X2, { renderListItem: (e) => (0, a.jsx)(u.c, { ...e }) }),
            ],
        }),
    });
};
