n.d(t, {
    A: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(317097),
    c = n(421380),
    o = n(397927),
    d = n(130333),
    u = n(953348),
    f = n(81461),
    g = n(997509),
    b = n(743981),
    m = n(583970),
    p = n(985018),
    x = n(175820);

function h(e) {
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

function O(e) {
    let { palette: t, badge: n, isSelected: i, onClick: l } = e,
        a = (0, c.Gx)({
            isSelected: i,
            label: (0, d.A)(t.primary, t.secondary),
        });
    return (0, r.jsx)(
        o.DUT,
        j(h({}, a), {
            className: s()(x.Uh, {
                [x.fT]: i,
            }),
            onClick: l,
            children: (0, r.jsx)(f.J, {
                badge: n,
                width: 32,
                height: 32,
                primaryTintColor: t.primary,
                secondaryTintColor: t.secondary,
            }),
        }),
    );
}

function y(e) {
    let {
            badge: t,
            primary: n,
            secondary: i,
            isSelected: l,
            showColorPopout: d,
            setShowColorPopout: f,
            palettePopoutTargetRef: g,
            handleChange: m,
        } = e,
        O = (0, c.Gx)({
            isSelected: l,
            label: p.intl.formatToPlainString(p.t.hr4D2X, {
                primaryColor: n,
                secondaryColor: i,
            }),
        });
    return (0, r.jsx)(u.A, {
        popoutTargetRef: g,
        showSecondaryColor: b.C9[t] >= 2,
        palette: {
            primary: n,
            secondary: i,
        },
        onPrimaryColorChange: (e) => {
            m({
                primary: (0, a.Hl)(e),
            });
        },
        onSecondaryColorChange: (e) => {
            m({
                secondary: (0, a.Hl)(e),
            });
        },
        shouldShow: d,
        onRequestClose: () => f(!1),
        children: (e) =>
            (0, r.jsx)(
                o.DUT,
                j(h({}, e, O), {
                    innerRef: g,
                    onClick: () => {
                        f((e) => !e);
                    },
                    className: s()(x.Uh, {
                        [x.fT]: l,
                    }),
                    children: (0, r.jsx)(o.dDg, {
                        size: "custom",
                        width: 20,
                        height: 20,
                    }),
                }),
            ),
    });
}
let v = function (e) {
    let { className: t, guildId: n, badge: l, primaryColor: s, secondaryColor: a } = e,
        [d, u] = i.useState(!1),
        f = i.useRef(null),
        v = i.useId(),
        A = i.useId(),
        E = i.useMemo(() => b.Ub.every((e) => e.primary !== s || e.secondary !== a), [s, a]),
        N = (0, c._u)({
            orientation: "horizontal",
            isDisabled: !1,
            labelledBy: v,
        });

    function _(e) {
        let t = {};
        void 0 !== e.primary && (t.badgeColorPrimary = e.primary),
            void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary),
            g.A.updateGuildProfile(n, t);
    }
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(o.D0$, {
                label: p.intl.string(m.default.zSbMdX),
                id: v,
                children: (e) =>
                    (0, r.jsxs)(
                        "div",
                        j(h({}, N), {
                            id: e.controlId,
                            "aria-describedby": A,
                            className: x.p3,
                            children: [
                                b.Ub.map((e) =>
                                    (0, r.jsx)(
                                        O,
                                        {
                                            palette: e,
                                            badge: l,
                                            isSelected: e.primary === s && e.secondary === a,
                                            onClick: () => _(e),
                                        },
                                        "".concat(e.primary).concat(e.secondary),
                                    ),
                                ),
                                (0, r.jsx)(y, {
                                    badge: l,
                                    primary: s,
                                    secondary: a,
                                    isSelected: E,
                                    showColorPopout: d,
                                    setShowColorPopout: u,
                                    palettePopoutTargetRef: f,
                                    handleChange: _,
                                }),
                            ],
                        }),
                    ),
            }),
            (0, r.jsx)(o.AC4, {
                id: A,
                children: p.intl.string(p.t.ovbW0Z),
            }),
        ],
    });
};
