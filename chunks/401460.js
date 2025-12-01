n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(755721),
    u = n(481060),
    d = n(583901),
    f = n(997945),
    p = n(630117),
    _ = n(441319),
    m = n(981631),
    h = n(388032),
    g = n(63224);
function E(e, t, n) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = () => [
        h.intl.string(h.t["EgWTY+"]),
        h.intl.string(h.t.umBn5f),
        h.intl.string(h.t.dG1wD1),
        h.intl.string(h.t.SesI4S),
        h.intl.string(h.t.RnMLvl),
    ],
    S = () => {
        var e;
        return null != (e = l().sample(v())) ? e : h.intl.string(h.t["EgWTY+"]);
    };
function I(e) {
    let { id: t, className: n, onSelect: a, isSelected: s = !1, tabIndex: l, children: p, locked: h = !1 } = e,
        [E, y] = i.useState((0, _.aW)(t).name),
        v = t === f.Ru.PIRATE,
        I = (0, c.jm)({
            label: E,
            isSelected: s,
        });
    return (0, r.jsx)(u.aML, {
        text: E,
        onTooltipShow: () => v && y(S()),
        children: (e) =>
            (0, r.jsxs)("div", {
                className: g.appIconSelectionContainer,
                children: [
                    (0, r.jsx)(
                        u.P3F,
                        O(b({}, e, I), {
                            tabIndex: null != l ? l : I.tabIndex,
                            className: o()(g.appIconSelection, { [g.selected]: s }, n),
                            onClick: s ? m.dG4 : () => (null == a ? void 0 : a(t)),
                            children: p,
                        }),
                    ),
                    s && (0, r.jsx)(d.oK, {}),
                    h &&
                        (0, r.jsx)("div", {
                            className: g.lockedBadgeContainer,
                            children: (0, r.jsx)(u.mBM, {
                                className: g.lockedBadge,
                                color: "currentColor",
                            }),
                        }),
                ],
            }),
    });
}
function T(e) {
    let { icon: t, isSelected: n, disabled: i, tabIndex: a, onSelect: o, locked: s } = e;
    return (0, r.jsx)(I, {
        onSelect: i ? void 0 : o,
        isSelected: n,
        id: t.id,
        className: i ? g.disabled : void 0,
        tabIndex: a,
        locked: s,
        children: (0, r.jsx)(p.Z, {
            id: t.id,
            width: _.M9,
        }),
    });
}
