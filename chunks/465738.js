"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(91871),
    o = n.n(a),
    d = n(735438),
    c = n.n(d),
    u = n(44482),
    _ = n(17928),
    h = n(545442),
    p = n(305866),
    m = n(732771),
    g = n(676608),
    x = n(317525),
    f = n(652215),
    A = n(985018),
    E = n(673753);
let I = function (e) {
    let { className: t, guild: n, roleStyle: l, roleFilter: a, onSelect: d, onClose: I } = e,
        v = (0, _.bG)([x.A], () => x.A.getSortedRoles(n.id)),
        j = (0, g.Ay)(n.id, null),
        C = s.useMemo(
            () =>
                c()(v)
                    .filter(a)
                    .map((e) => ({
                        id: e.id,
                        value: e.id,
                        label: e.name,
                        leading:
                            "dot" === l
                                ? (0, i.jsx)(h.W, {
                                      className: E.b8,
                                      color: e.colorString ?? f.TpD,
                                      colors: j ? e.colorStrings : null,
                                      background: !1,
                                      tooltip: !1,
                                  })
                                : (0, i.jsx)(h.R, {
                                      className: E.kb,
                                      color: e.colorString ?? f.TpD,
                                      colors: j ? e.colorStrings : null,
                                  }),
                    }))
                    .value(),
            [v, a, l, j],
        ),
        N = s.useCallback(
            (e, t) => ("" === t.trim() ? e : e.filter((e) => o()(t.toLowerCase(), e.label.toLowerCase()))),
            [],
        );
    return (0, i.jsx)(p.l, {
        className: r()(E.kL, t),
        "aria-label": A.intl.string(A.t.ljnBlo),
        children: (0, i.jsxs)(m.iS, {
            selectionMode: "single",
            value: void 0,
            onSelectionChange: (e) => {
                null != e && (d(e), I());
            },
            options: C,
            customMatchSorter: N,
            children: [
                (0, i.jsx)(m.a3, {
                    label: A.intl.string(A.t.ljnBlo),
                    hideLabel: !0,
                    placeholder: A.intl.string(A.t.XPGZXP),
                    autoFocus: !0,
                }),
                (0, i.jsx)(m.X2, { renderListItem: (e) => (0, i.jsx)(u.c, { ...e }) }),
            ],
        }),
    });
};
