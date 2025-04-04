n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(481060),
    u = n(583901),
    d = n(997945),
    f = n(630117),
    _ = n(441319),
    p = n(981631),
    h = n(388032),
    m = n(770580);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = () => [h.NW.string(h.t.EgWTY2), h.NW.string(h.t.umBn5e), h.NW.string(h.t.dG1wDw), h.NW.string(h.t.SesI4e), h.NW.string(h.t.RnMLvr)],
    O = () => {
        var e;
        return null != (e = l().sample(v())) ? e : h.NW.string(h.t.EgWTY2);
    };
function I(e) {
    let { id: t, className: n, onSelect: o, isSelected: s = !1, tabIndex: l, children: f, locked: h = !1 } = e,
        [g, b] = i.useState((0, _.aW)(t).name),
        v = t === d.Ru.PIRATE,
        I = (0, c.xUy)({
            label: g,
            isSelected: s
        });
    return (0, r.jsx)(c.ua7, {
        text: g,
        onTooltipShow: () => v && b(O()),
        children: (e) =>
            (0, r.jsxs)('div', {
                className: m.appIconSelectionContainer,
                children: [
                    (0, r.jsx)(
                        c.P3F,
                        y(E({}, e, I), {
                            tabIndex: null != l ? l : I.tabIndex,
                            className: a()(m.appIconSelection, { [m.selected]: s }, n),
                            onClick: s ? p.dG4 : () => (null == o ? void 0 : o(t)),
                            children: f
                        })
                    ),
                    s && (0, r.jsx)(u.oK, {}),
                    h &&
                        (0, r.jsx)('div', {
                            className: m.lockedBadgeContainer,
                            children: (0, r.jsx)(c.mBM, {
                                className: m.lockedBadge,
                                color: 'currentColor'
                            })
                        })
                ]
            })
    });
}
function S(e) {
    let { icon: t, isSelected: n, disabled: i, tabIndex: o, onSelect: a, locked: s } = e;
    return (0, r.jsx)(I, {
        onSelect: i ? void 0 : a,
        isSelected: n,
        id: t.id,
        className: i ? m.disabled : void 0,
        tabIndex: o,
        locked: s,
        children: (0, r.jsx)(f.Z, {
            id: t.id,
            width: _.M9
        })
    });
}
