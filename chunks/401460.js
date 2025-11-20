n.d(t, { Z: () => S }), n(388685);
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
    _ = n(630117),
    p = n(441319),
    h = n(981631),
    m = n(388032),
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
        m.intl.string(m.t["EgWTY+"]),
        m.intl.string(m.t.umBn5f),
        m.intl.string(m.t.dG1wD1),
        m.intl.string(m.t.SesI4S),
        m.intl.string(m.t.RnMLvl),
    ],
    I = () => {
        var e;
        return null != (e = l().sample(v())) ? e : m.intl.string(m.t["EgWTY+"]);
    };
function T(e) {
    let { id: t, className: n, onSelect: a, isSelected: s = !1, tabIndex: l, children: _, locked: m = !1 } = e,
        [E, y] = i.useState((0, p.aW)(t).name),
        v = t === f.Ru.PIRATE,
        T = (0, c.jm)({
            label: E,
            isSelected: s,
        });
    return (0, r.jsx)(u.aML, {
        text: E,
        onTooltipShow: () => v && y(I()),
        children: (e) =>
            (0, r.jsxs)("div", {
                className: g.appIconSelectionContainer,
                children: [
                    (0, r.jsx)(
                        u.P3F,
                        O(b({}, e, T), {
                            tabIndex: null != l ? l : T.tabIndex,
                            className: o()(g.appIconSelection, { [g.selected]: s }, n),
                            onClick: s ? h.dG4 : () => (null == a ? void 0 : a(t)),
                            children: _,
                        }),
                    ),
                    s && (0, r.jsx)(d.oK, {}),
                    m &&
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
function S(e) {
    let { icon: t, isSelected: n, disabled: i, tabIndex: a, onSelect: o, locked: s } = e;
    return (0, r.jsx)(T, {
        onSelect: i ? void 0 : o,
        isSelected: n,
        id: t.id,
        className: i ? g.disabled : void 0,
        tabIndex: a,
        locked: s,
        children: (0, r.jsx)(_.Z, {
            id: t.id,
            width: p.M9,
        }),
    });
}
