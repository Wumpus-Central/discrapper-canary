"use strict";
i.d(t, { A: () => v });
var n = i(627968),
    r = i(64700),
    a = i(503698),
    l = i.n(a),
    s = i(91871),
    o = i.n(s),
    c = i(735438),
    d = i.n(c),
    u = i(44482),
    _ = i(311907),
    p = i(545442),
    h = i(305866),
    f = i(389723),
    A = i(676608),
    g = i(317525),
    m = i(652215),
    E = i(985018),
    b = i(3097);
let v = function (e) {
    let { className: t, guild: i, roleStyle: a, roleFilter: s, onSelect: c, onClose: v } = e,
        I = (0, _.bG)([g.A], () => g.A.getSortedRoles(i.id)),
        T = (0, A.Ay)(i.id, null),
        C = r.useMemo(
            () =>
                d()(I)
                    .filter(s)
                    .map((e) => ({
                        id: e.id,
                        value: e.id,
                        label: e.name,
                        leading:
                            "dot" === a
                                ? (0, n.jsx)(p.W, {
                                      className: b.b8,
                                      color: e.colorString ?? m.TpD,
                                      colors: T ? e.colorStrings : null,
                                      background: !1,
                                      tooltip: !1,
                                  })
                                : (0, n.jsx)(p.R, {
                                      className: b.kb,
                                      color: e.colorString ?? m.TpD,
                                      colors: T ? e.colorStrings : null,
                                  }),
                    }))
                    .value(),
            [I, s, a, T],
        ),
        S = r.useCallback(
            (e, t) => ("" === t.trim() ? e : e.filter((e) => o()(t.toLowerCase(), e.label.toLowerCase()))),
            [],
        );
    return (0, n.jsx)(h.l, {
        className: l()(b.kL, t),
        "aria-label": E.intl.string(E.t.ljnBlo),
        children: (0, n.jsxs)(f.iS, {
            selectionMode: "single",
            value: void 0,
            onSelectionChange: (e) => {
                null != e && (c(e), v());
            },
            options: C,
            customMatchSorter: S,
            children: [
                (0, n.jsx)(f.a3, {
                    label: E.intl.string(E.t.ljnBlo),
                    hideLabel: !0,
                    placeholder: E.intl.string(E.t.XPGZXP),
                    autoFocus: !0,
                }),
                (0, n.jsx)(f.X2, { renderListItem: (e) => (0, n.jsx)(u.c, { ...e }) }),
            ],
        }),
    });
};
