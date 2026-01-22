n.d(t, { A: () => A }), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(91871),
    l = n.n(o),
    c = n(735438),
    u = n.n(c),
    d = n(311907),
    f = n(389723),
    p = n(332661),
    _ = n(397927),
    h = n(676608),
    m = n(317525),
    g = n(652215),
    E = n(985018),
    b = n(836836);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
let A = function (e) {
    let { className: t, guild: n, roleStyle: a, roleFilter: o, onSelect: c, onClose: y } = e,
        A = (0, d.bG)([m.A], () => m.A.getSortedRoles(n.id)),
        v = (0, h.Ay)(n.id, null),
        S = i.useMemo(
            () =>
                u()(A)
                    .filter(o)
                    .map((e) => {
                        var t, n;
                        return {
                            id: e.id,
                            value: e.id,
                            label: e.name,
                            leading:
                                "dot" === a
                                    ? (0, r.jsx)(_.WYI, {
                                          className: b.b8,
                                          color: null != (t = e.colorString) ? t : g.TpD,
                                          colors: v ? e.colorStrings : null,
                                          background: !1,
                                          tooltip: !1,
                                      })
                                    : (0, r.jsx)(_.RYH, {
                                          className: b.kb,
                                          color: null != (n = e.colorString) ? n : g.TpD,
                                          colors: v ? e.colorStrings : null,
                                      }),
                        };
                    })
                    .value(),
            [A, o, a, v],
        ),
        I = i.useCallback(
            (e, t) => ("" === t.trim() ? e : e.filter((e) => l()(t.toLowerCase(), e.label.toLowerCase()))),
            [],
        );
    return (0, r.jsx)(_.lGe, {
        className: s()(b.kL, t),
        "aria-label": E.intl.string(E.t.ljnBlo),
        children: (0, r.jsxs)(f.iS, {
            selectionMode: "single",
            value: void 0,
            onSelectionChange: (e) => {
                null != e && (c(e), y());
            },
            options: S,
            customMatchSorter: I,
            children: [
                (0, r.jsx)(f.a3, {
                    label: E.intl.string(E.t.ljnBlo),
                    hideLabel: !0,
                    placeholder: E.intl.string(E.t.XPGZXP),
                    autoFocus: !0,
                }),
                (0, r.jsx)(f.X2, { renderListItem: (e) => (0, r.jsx)(p.c, O({}, e)) }),
            ],
        }),
    });
};
