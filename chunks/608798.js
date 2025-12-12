n.d(t, { Z: () => v }), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(658722),
    l = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(442837),
    f = n(496600),
    p = n(713072),
    _ = n(481060),
    m = n(402235),
    h = n(485386),
    g = n(981631),
    E = n(388032),
    b = n(640856);
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
let v = function (e) {
    let { className: t, guild: n, roleStyle: a, roleFilter: s, onSelect: c, onClose: y } = e,
        v = (0, d.e7)([h.Z], () => h.Z.getSortedRoles(n.id)),
        S = (0, m.ZP)(n.id, null),
        I = i.useMemo(
            () =>
                u()(v)
                    .filter(s)
                    .map((e) => {
                        var t, n;
                        return {
                            id: e.id,
                            value: e.id,
                            label: e.name,
                            leading:
                                "dot" === a
                                    ? (0, r.jsx)(_.FhE, {
                                          className: b.popoutRoleDot,
                                          color: null != (t = e.colorString) ? t : g.Pbq,
                                          colors: S ? e.colorStrings : null,
                                          background: !1,
                                          tooltip: !1,
                                      })
                                    : (0, r.jsx)(_.xko, {
                                          className: b.popoutRoleCircle,
                                          color: null != (n = e.colorString) ? n : g.Pbq,
                                          colors: S ? e.colorStrings : null,
                                      }),
                        };
                    })
                    .value(),
            [v, s, a, S],
        ),
        T = i.useCallback(
            (e, t) => ("" === t.trim() ? e : e.filter((e) => l()(t.toLowerCase(), e.label.toLowerCase()))),
            [],
        );
    return (0, r.jsx)(_.VqE, {
        className: o()(b.container, t),
        "aria-label": E.intl.string(E.t.ljnBlo),
        children: (0, r.jsxs)(f.uz, {
            selectionMode: "single",
            value: null,
            onSelectionChange: (e) => {
                null != e && (c(e), y());
            },
            options: I,
            customMatchSorter: T,
            children: [
                (0, r.jsx)(f.Ct, {
                    label: E.intl.string(E.t.ljnBlo),
                    hideLabel: !0,
                    placeholder: E.intl.string(E.t.XPGZXP),
                    autoFocus: !0,
                }),
                (0, r.jsx)(f.px, { renderListItem: (e) => (0, r.jsx)(p.W, O({}, e)) }),
            ],
        }),
    });
};
