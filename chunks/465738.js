"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(91871),
    l = n.n(o),
    u = n(735438),
    c = n.n(u),
    d = n(158954),
    _ = n(311907),
    f = n(397927),
    p = n(676608),
    h = n(317525),
    m = n(652215),
    g = n(985018),
    E = n(836836);
let A = function (e) {
    let { className: t, guild: n, roleStyle: a, roleFilter: o, onSelect: u, onClose: A } = e,
        I = (0, _.bG)([h.A], () => h.A.getSortedRoles(n.id)),
        T = (0, p.Ay)(n.id, null),
        y = i.useMemo(
            () =>
                c()(I)
                    .filter(o)
                    .map((e) => ({
                        id: e.id,
                        value: e.id,
                        label: e.name,
                        leading:
                            "dot" === a
                                ? (0, r.jsx)(f.WYI, {
                                      className: E.b8,
                                      color: e.colorString ?? m.TpD,
                                      colors: T ? e.colorStrings : null,
                                      background: !1,
                                      tooltip: !1,
                                  })
                                : (0, r.jsx)(f.RYH, {
                                      className: E.kb,
                                      color: e.colorString ?? m.TpD,
                                      colors: T ? e.colorStrings : null,
                                  }),
                    }))
                    .value(),
            [I, o, a, T],
        ),
        S = i.useCallback(
            (e, t) => ("" === t.trim() ? e : e.filter((e) => l()(t.toLowerCase(), e.label.toLowerCase()))),
            [],
        );
    return (0, r.jsx)(f.lGe, {
        className: s()(E.kL, t),
        "aria-label": g.intl.string(g.t.ljnBlo),
        children: (0, r.jsxs)(f.iS7, {
            selectionMode: "single",
            value: void 0,
            onSelectionChange: (e) => {
                null != e && (u(e), A());
            },
            options: y,
            customMatchSorter: S,
            children: [
                (0, r.jsx)(f.a32, {
                    label: g.intl.string(g.t.ljnBlo),
                    hideLabel: !0,
                    placeholder: g.intl.string(g.t.XPGZXP),
                    autoFocus: !0,
                }),
                (0, r.jsx)(f.X2W, { renderListItem: (e) => (0, r.jsx)(d.c$x, { ...e }) }),
            ],
        }),
    });
};
