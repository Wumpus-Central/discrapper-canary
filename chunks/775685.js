n.d(t, { Z: () => A });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(749280),
    u = n(681715),
    d = n(566620),
    f = n(499254),
    _ = n(541099),
    p = n(827498),
    h = n(713913),
    m = n(570220),
    g = n(314734),
    E = n(388032),
    b = n(124886);
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
let T = i.forwardRef(function (e, t) {
    let { type: n } = e,
        { tooltipsWithKeybinds: a } = h.n.useConfig({ location: "ChannelAppLauncherButton" }),
        y = (0, l.e7)([_.Z], () => _.Z.shouldShowPopup() && _.Z.activeViewType() === n),
        { Component: v, events: T, play: S } = (0, c.w)(),
        A = i.useContext(m.ZP);
    i.useEffect(() => {
        let e = () => {
            T.onMouseEnter();
        };
        return (
            A.on("command-sentinel-typed", e),
            () => {
                A.off("command-sentinel-typed", e);
            }
        );
    }, [A, T]);
    let C = i.useCallback(() => {
            y ? f.y(p.ti.DISMISSED) : (f._(p._b.TEXT, n), d.ux()), S();
        }, [y, n, S]),
        N = (0, r.jsx)(v, {
            size: "refresh_sm",
            color: "currentColor",
        });
    return (0, r.jsx)("div", {
        className: o()(b.buttonContainer, g.t4),
        ref: t,
        children: (0, r.jsx)(u.u, {
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
                        T,
                    ),
                    { children: N },
                ),
            ),
        }),
    });
});
function S(e) {
    let { type: t } = e;
    return (0, r.jsx)(T, { type: t });
}
let A = i.memo(S);
