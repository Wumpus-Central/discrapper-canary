n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(866442),
    o = n(755721),
    c = n(481060),
    d = n(499513),
    u = n(229190),
    g = n(510918),
    m = n(434404),
    p = n(131085),
    f = n(659854),
    h = n(388032),
    x = n(764009);
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
function _(e) {
    let { palette: t, badge: n, isSelected: i, onClick: l } = e,
        a = (0, o.jm)({
            isSelected: i,
            label: (0, d.Z)(t.primary, t.secondary),
        });
    return (0, r.jsx)(
        c.P3F,
        j(b({}, a), {
            className: s()(x.pickerItem, { [x.pickerItemSelected]: i }),
            onClick: l,
            children: (0, r.jsx)(g.v, {
                badge: n,
                width: 32,
                height: 32,
                primaryTintColor: t.primary,
                secondaryTintColor: t.secondary,
            }),
        }),
    );
}
function v(e) {
    let {
            badge: t,
            primary: n,
            secondary: i,
            isSelected: l,
            showColorPopout: d,
            setShowColorPopout: g,
            palettePopoutTargetRef: m,
            handleChange: f,
        } = e,
        _ = (0, o.jm)({
            isSelected: l,
            label: h.intl.formatToPlainString(h.t.hr4D2d, {
                primaryColor: n,
                secondaryColor: i,
            }),
        });
    return (0, r.jsx)(u.Z, {
        popoutTargetRef: m,
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
        onRequestClose: () => g(!1),
        children: (e) =>
            (0, r.jsx)(
                c.P3F,
                j(b({}, e, _), {
                    innerRef: m,
                    onClick: () => {
                        g((e) => !e);
                    },
                    className: s()(x.pickerItem, { [x.pickerItemSelected]: l }),
                    children: (0, r.jsx)(c.ilE, {
                        size: "custom",
                        width: 20,
                        height: 20,
                    }),
                }),
            ),
    });
}
let C = function (e) {
    let { className: t, guildId: n, badge: l, primaryColor: s, secondaryColor: a } = e,
        [d, u] = i.useState(!1),
        g = i.useRef(null),
        C = i.useId(),
        O = i.useId(),
        y = i.useMemo(() => p.Ek.every((e) => e.primary !== s || e.secondary !== a), [s, a]),
        N = (0, o.Jb)({
            orientation: "horizontal",
            isDisabled: !1,
            labelledBy: C,
        });
    function E(e) {
        let t = {};
        void 0 !== e.primary && (t.badgeColorPrimary = e.primary),
            void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary),
            m.Z.updateGuildProfile(n, t);
    }
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(c.vwX, {
                id: C,
                className: x.sectionTitle,
                children: h.intl.string(f.default.zSbMdX),
            }),
            (0, r.jsx)(c.nn4, {
                id: O,
                children: h.intl.string(h.t.ovbW0d),
            }),
            (0, r.jsxs)(
                "div",
                j(b({}, N), {
                    "aria-describedby": O,
                    className: x.pickerGrid,
                    children: [
                        p.Ek.map((e) =>
                            (0, r.jsx)(
                                _,
                                {
                                    palette: e,
                                    badge: l,
                                    isSelected: e.primary === s && e.secondary === a,
                                    onClick: () => E(e),
                                },
                                "".concat(e.primary).concat(e.secondary),
                            ),
                        ),
                        (0, r.jsx)(v, {
                            badge: l,
                            primary: s,
                            secondary: a,
                            isSelected: y,
                            showColorPopout: d,
                            setShowColorPopout: u,
                            palettePopoutTargetRef: g,
                            handleChange: E,
                        }),
                    ],
                }),
            ),
        ],
    });
};
