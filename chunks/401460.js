n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(704215),
    u = n(755721),
    d = n(481060),
    f = n(583901),
    _ = n(243778),
    p = n(997945),
    h = n(630117),
    m = n(441319),
    g = n(921944),
    E = n(388032),
    b = n(63224);
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
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = () => [
        E.intl.string(E.t["EgWTY+"]),
        E.intl.string(E.t.umBn5f),
        E.intl.string(E.t.dG1wD1),
        E.intl.string(E.t.SesI4S),
        E.intl.string(E.t.RnMLvl),
    ],
    T = () => {
        var e;
        return null != (e = l().sample(S())) ? e : E.intl.string(E.t["EgWTY+"]);
    },
    A = (e, t) => {
        let [n, r] = (0, _.US)([c.z.HALLOWEEN_APP_ICONS_TRICK_ICON_WEB_BADGE]),
            [i, a] = (0, _.US)([c.z.HALLOWEEN_APP_ICONS_TREAT_ICON_WEB_BADGE]);
        return e === p.Ru.TRICK
            ? [!t && n === c.z.HALLOWEEN_APP_ICONS_TRICK_ICON_WEB_BADGE, () => r(g.L.TAKE_ACTION)]
            : e === p.Ru.TREAT
              ? [!t && i === c.z.HALLOWEEN_APP_ICONS_TREAT_ICON_WEB_BADGE, () => a(g.L.TAKE_ACTION)]
              : [!1, () => {}];
    };
function C(e) {
    let { id: t, className: n, onSelect: a, isSelected: s = !1, tabIndex: l, children: c, locked: _ = !1 } = e,
        [h, g] = i.useState((0, m.aW)(t).name),
        E = t === p.Ru.PIRATE,
        [y, v] = A(t, s),
        S = i.useCallback(() => {
            s || (y && v(), null == a || a(t));
        }, [s, y, v, a, t]),
        C = (0, u.jm)({
            label: h,
            isSelected: s,
        });
    return (0, r.jsx)(d.aML, {
        text: h,
        onTooltipShow: () => E && g(T()),
        children: (e) =>
            (0, r.jsxs)("div", {
                className: b.appIconSelectionContainer,
                children: [
                    (0, r.jsx)(
                        d.P3F,
                        I(O({}, e, C), {
                            tabIndex: null != l ? l : C.tabIndex,
                            className: o()(b.appIconSelection, { [b.selected]: s }, n),
                            onClick: S,
                            children: c,
                        }),
                    ),
                    s && (0, r.jsx)(f.oK, {}),
                    y && (0, r.jsx)("div", { className: b.redCircle }),
                    _ &&
                        (0, r.jsx)("div", {
                            className: b.lockedBadgeContainer,
                            children: (0, r.jsx)(d.mBM, {
                                className: b.lockedBadge,
                                color: "currentColor",
                            }),
                        }),
                ],
            }),
    });
}
function N(e) {
    let { icon: t, isSelected: n, disabled: i, tabIndex: a, onSelect: o, locked: s } = e;
    return (0, r.jsx)(C, {
        onSelect: i ? void 0 : o,
        isSelected: n,
        id: t.id,
        className: i ? b.disabled : void 0,
        tabIndex: a,
        locked: s,
        children: (0, r.jsx)(h.Z, {
            id: t.id,
            width: m.M9,
        }),
    });
}
