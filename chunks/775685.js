n.d(t, { Z: () => A });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(681715),
    u = n(566620),
    d = n(499254),
    f = n(541099),
    _ = n(827498),
    p = n(562129),
    h = n(713913),
    m = n(570220),
    g = n(314734),
    E = n(388032),
    b = n(393620);
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
let S = i.forwardRef(function (e, t) {
    let { type: n } = e,
        { tooltipsWithKeybinds: a } = h.n.useConfig({ location: "ChannelAppLauncherButton" }),
        y = (0, l.e7)([f.Z], () => f.Z.shouldShowPopup() && f.Z.activeViewType() === n),
        { Component: v, events: S, play: T } = (0, p.Z)("ChannelAppLauncherButton"),
        A = i.useContext(m.ZP);
    i.useEffect(() => {
        let e = () => {
            S.onMouseEnter();
        };
        return (
            A.on("command-sentinel-typed", e),
            () => {
                A.off("command-sentinel-typed", e);
            }
        );
    }, [A, S]);
    let C = i.useCallback(() => {
            y ? d.y(_.ti.DISMISSED) : (d._(_._b.TEXT, n), u.ux()), T();
        }, [y, n, T]),
        N = (0, r.jsx)(v, {
            size: "refresh_sm",
            color: "currentColor",
        });
    return (0, r.jsx)("div", {
        className: o()(b.buttonContainer, g.t4),
        ref: t,
        children: (0, r.jsx)(c.u, {
            text: E.intl.string(E.t.dHDxOF),
            shouldShow: a,
            children: (0, r.jsx)(
                s.P3F,
                I(
                    O(
                        {
                            tabIndex: 0,
                            className: o()(b.button, { [b.buttonActive]: y }),
                            onClick: C,
                            "aria-label": E.intl.string(E.t.erHFxI),
                            "aria-expanded": y,
                            "aria-haspopup": "dialog",
                            focusProps: {
                                offset: {
                                    top: 4,
                                    bottom: 4,
                                    left: -4,
                                    right: -4,
                                },
                            },
                        },
                        S,
                    ),
                    { children: N },
                ),
            ),
        }),
    });
});
function T(e) {
    let { type: t } = e;
    return (0, r.jsx)(S, { type: t });
}
let A = i.memo(T);
