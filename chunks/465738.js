n.d(t, {
    A: () => O,
}),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(91871),
    l = n.n(s),
    c = n(735438),
    u = n.n(c),
    d = n(158954),
    f = n(311907),
    p = n(397927),
    _ = n(676608),
    h = n(317525),
    m = n(652215),
    g = n(985018),
    E = n(836836);

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

function b(e) {
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
let O = function (e) {
    let { className: t, guild: n, roleStyle: a, roleFilter: s, onSelect: c, onClose: y } = e,
        O = (0, f.bG)([h.A], () => h.A.getSortedRoles(n.id)),
        v = (0, _.Ay)(n.id, null),
        A = i.useMemo(
            () =>
                u()(O)
                    .filter(s)
                    .map((e) => {
                        var t, n;
                        return {
                            id: e.id,
                            value: e.id,
                            label: e.name,
                            leading:
                                "dot" === a
                                    ? (0, r.jsx)(p.WYI, {
                                          className: E.b8,
                                          color: null != (t = e.colorString) ? t : m.TpD,
                                          colors: v ? e.colorStrings : null,
                                          background: !1,
                                          tooltip: !1,
                                      })
                                    : (0, r.jsx)(p.RYH, {
                                          className: E.kb,
                                          color: null != (n = e.colorString) ? n : m.TpD,
                                          colors: v ? e.colorStrings : null,
                                      }),
                        };
                    })
                    .value(),
            [O, s, a, v],
        ),
        I = i.useCallback(
            (e, t) => ("" === t.trim() ? e : e.filter((e) => l()(t.toLowerCase(), e.label.toLowerCase()))),
            [],
        );
    return (0, r.jsx)(p.lGe, {
        className: o()(E.kL, t),
        "aria-label": g.intl.string(g.t.ljnBlo),
        children: (0, r.jsxs)(p.iS7, {
            selectionMode: "single",
            value: void 0,
            onSelectionChange: (e) => {
                null != e && (c(e), y());
            },
            options: A,
            customMatchSorter: I,
            children: [
                (0, r.jsx)(p.a32, {
                    label: g.intl.string(g.t.ljnBlo),
                    hideLabel: !0,
                    placeholder: g.intl.string(g.t.XPGZXP),
                    autoFocus: !0,
                }),
                (0, r.jsx)(p.X2W, {
                    renderListItem: (e) => (0, r.jsx)(d.c$x, b({}, e)),
                }),
            ],
        }),
    });
};
