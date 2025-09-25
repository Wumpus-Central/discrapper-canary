n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(866442),
    o = n(755721),
    c = n(481060),
    d = n(499513),
    u = n(229190),
    m = n(510918),
    g = n(434404),
    p = n(131085),
    f = n(755032),
    h = n(388032),
    b = n(565744);
function x(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { palette: t, badge: n, isSelected: i, onClick: l } = e,
        a = (0, o.jm)({
            isSelected: i,
            label: (0, d.Z)(t.primary, t.secondary),
        });
    return (0, r.jsx)(
        c.P3F,
        j(x({}, a), {
            className: s()(b.pickerItem, { [b.pickerItemSelected]: i }),
            onClick: l,
            children: (0, r.jsx)(m.v, {
                badge: n,
                width: 32,
                height: 32,
                primaryTintColor: t.primary,
                secondaryTintColor: t.secondary,
            }),
        }),
    );
}
function _(e) {
    let {
            badge: t,
            primary: n,
            secondary: i,
            isSelected: l,
            showColorPopout: d,
            setShowColorPopout: m,
            palettePopoutTargetRef: g,
            handleChange: f,
        } = e,
        v = (0, o.jm)({
            isSelected: l,
            label: h.intl.formatToPlainString(h.t.hr4D2d, {
                primaryColor: n,
                secondaryColor: i,
            }),
        });
    return (0, r.jsx)(u.Z, {
        popoutTargetRef: g,
        showSecondaryColor: p.ER[t] >= 2,
        palette: {
            primary: n,
            secondary: i,
        },
        onPrimaryColorChange: (e) => {
            f({ primary: (0, a.Rf)(e) });
        },
        onSecondaryColorChange: (e) => {
            f({ secondary: (0, a.Rf)(e) });
        },
        shouldShow: d,
        onRequestClose: () => m(!1),
        children: (e) =>
            (0, r.jsx)(
                c.P3F,
                j(x({}, e, v), {
                    innerRef: g,
                    onClick: () => {
                        m((e) => !e);
                    },
                    className: s()(b.pickerItem, { [b.pickerItemSelected]: l }),
                    children: (0, r.jsx)(c.ilE, {
                        size: "custom",
                        width: 20,
                        height: 20,
                    }),
                }),
            ),
    });
}
let O = function (e) {
    let { className: t, guildId: n, badge: l, primaryColor: s, secondaryColor: a } = e,
        [d, u] = i.useState(!1),
        m = i.useRef(null),
        O = i.useId(),
        y = i.useId(),
        C = i.useMemo(() => p.Ek.every((e) => e.primary !== s || e.secondary !== a), [s, a]),
        N = (0, o.Jb)({
            orientation: "horizontal",
            isDisabled: !1,
            labelledBy: O,
        });
    function E(e) {
        let t = {};
        void 0 !== e.primary && (t.badgeColorPrimary = e.primary),
            void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary),
            g.Z.updateGuildProfile(n, t);
    }
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(c.vwX, {
                id: O,
                className: b.sectionTitle,
                children: h.intl.string(f.default.zSbMdX),
            }),
            (0, r.jsx)(c.nn4, {
                id: y,
                children: h.intl.string(h.t.ovbW0d),
            }),
            (0, r.jsxs)(
                "div",
                j(x({}, N), {
                    "aria-describedby": y,
                    className: b.pickerGrid,
                    children: [
                        p.Ek.map((e) =>
                            (0, r.jsx)(
                                v,
                                {
                                    palette: e,
                                    badge: l,
                                    isSelected: e.primary === s && e.secondary === a,
                                    onClick: () => E(e),
                                },
                                "".concat(e.primary).concat(e.secondary),
                            ),
                        ),
                        (0, r.jsx)(_, {
                            badge: l,
                            primary: s,
                            secondary: a,
                            isSelected: C,
                            showColorPopout: d,
                            setShowColorPopout: u,
                            palettePopoutTargetRef: m,
                            handleChange: E,
                        }),
                    ],
                }),
            ),
        ],
    });
};
