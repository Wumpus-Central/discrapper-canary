"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(91871),
    o = n.n(a),
    c = n(735438),
    d = n.n(c),
    u = n(44482),
    _ = n(17928),
    h = n(545442),
    p = n(305866),
    m = n(732771),
    g = n(676608),
    A = n(317525),
    f = n(652215),
    E = n(985018),
    x = n(673753);
let I = function (e) {
    let { className: t, guild: n, roleStyle: l, roleFilter: a, onSelect: c, onClose: I } = e,
        v = (0, _.bG)([A.A], () => A.A.getSortedRoles(n.id)),
        N = (0, g.Ay)(n.id, null),
        C = s.useMemo(
            () =>
                d()(v)
                    .filter(a)
                    .map((e) => ({
                        id: e.id,
                        value: e.id,
                        label: e.name,
                        leading:
                            "dot" === l
                                ? (0, i.jsx)(h.W, {
                                      className: x.b8,
                                      color: e.colorString ?? f.TpD,
                                      colors: N ? e.colorStrings : null,
                                      background: !1,
                                      tooltip: !1,
                                  })
                                : (0, i.jsx)(h.R, {
                                      className: x.kb,
                                      color: e.colorString ?? f.TpD,
                                      colors: N ? e.colorStrings : null,
                                  }),
                    }))
                    .value(),
            [v, a, l, N],
        ),
        S = s.useCallback(
            (e, t) => ("" === t.trim() ? e : e.filter((e) => o()(t.toLowerCase(), e.label.toLowerCase()))),
            [],
        );
    return (0, i.jsx)(p.l, {
        className: r()(x.kL, t),
        "aria-label": E.intl.string(E.t.ljnBlo),
        children: (0, i.jsxs)(m.iS, {
            selectionMode: "single",
            value: void 0,
            onSelectionChange: (e) => {
                null != e && (c(e), I());
            },
            options: C,
            customMatchSorter: S,
            children: [
                (0, i.jsx)(m.a3, {
                    label: E.intl.string(E.t.ljnBlo),
                    hideLabel: !0,
                    placeholder: E.intl.string(E.t.XPGZXP),
                    autoFocus: !0,
                }),
                (0, i.jsx)(m.X2, { renderListItem: (e) => (0, i.jsx)(u.c, { ...e }) }),
            ],
        }),
    });
};
