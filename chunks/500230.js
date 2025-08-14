n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(866442),
    o = n(481060),
    c = n(499513),
    d = n(229190),
    u = n(510918),
    m = n(434404),
    g = n(131085),
    p = n(899926),
    h = n(388032),
    f = n(616397);
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
function x(e, t) {
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
function j(e) {
    let { palette: t, badge: n, isSelected: i, onClick: l } = e,
        s = (0, o.xUy)({
            isSelected: i,
            label: (0, c.Z)(t.primary, t.secondary),
        });
    return (0, r.jsx)(
        o.P3F,
        x(b({}, s), {
            className: a()(f.pickerItem, { [f.pickerItemSelected]: i }),
            onClick: l,
            children: (0, r.jsx)(u.v, {
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
            showColorPopout: c,
            setShowColorPopout: u,
            palettePopoutTargetRef: m,
            handleChange: p,
        } = e,
        j = (0, o.xUy)({
            isSelected: l,
            label: h.intl.formatToPlainString(h.t.hr4D2d, {
                primaryColor: n,
                secondaryColor: i,
            }),
        });
    return (0, r.jsx)(d.Z, {
        popoutTargetRef: m,
        showSecondaryColor: g.ER[t] >= 2,
        palette: {
            primary: n,
            secondary: i,
        },
        onPrimaryColorChange: (e) => {
            p({ primary: (0, s.Rf)(e) });
        },
        onSecondaryColorChange: (e) => {
            p({ secondary: (0, s.Rf)(e) });
        },
        shouldShow: c,
        onRequestClose: () => u(!1),
        children: (e) =>
            (0, r.jsx)(
                o.P3F,
                x(b({}, e, j), {
                    innerRef: m,
                    onClick: () => {
                        u((e) => !e);
                    },
                    className: a()(f.pickerItem, { [f.pickerItemSelected]: l }),
                    children: (0, r.jsx)(o.ilE, {
                        size: "custom",
                        width: 20,
                        height: 20,
                    }),
                }),
            ),
    });
}
let _ = function (e) {
    let { className: t, guildId: n, badge: l, primaryColor: a, secondaryColor: s } = e,
        [c, d] = i.useState(!1),
        u = i.useRef(null),
        _ = i.useId(),
        O = i.useId(),
        y = i.useMemo(() => g.Ek.every((e) => e.primary !== a || e.secondary !== s), [a, s]),
        C = (0, o.arW)({
            orientation: "horizontal",
            isDisabled: !1,
            labelledBy: _,
        });
    function N(e) {
        let t = {};
        void 0 !== e.primary && (t.badgeColorPrimary = e.primary),
            void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary),
            m.Z.updateGuildProfile(n, t);
    }
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(o.vwX, {
                id: _,
                className: f.sectionTitle,
                children: h.intl.string(p.default.zSbMdX),
            }),
            (0, r.jsx)(o.nn4, {
                id: O,
                children: h.intl.string(h.t.ovbW0d),
            }),
            (0, r.jsxs)(
                "div",
                x(b({}, C), {
                    "aria-describedby": O,
                    className: f.pickerGrid,
                    children: [
                        g.Ek.map((e) =>
                            (0, r.jsx)(
                                j,
                                {
                                    palette: e,
                                    badge: l,
                                    isSelected: e.primary === a && e.secondary === s,
                                    onClick: () => N(e),
                                },
                                "".concat(e.primary).concat(e.secondary),
                            ),
                        ),
                        (0, r.jsx)(v, {
                            badge: l,
                            primary: a,
                            secondary: s,
                            isSelected: y,
                            showColorPopout: c,
                            setShowColorPopout: d,
                            palettePopoutTargetRef: u,
                            handleChange: N,
                        }),
                    ],
                }),
            ),
        ],
    });
};
