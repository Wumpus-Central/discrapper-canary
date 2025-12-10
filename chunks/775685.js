n.d(t, { Z: () => C });
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
    p = n(541099),
    _ = n(827498),
    m = n(713913),
    h = n(570220),
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
function S(e, t) {
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
let I = i.forwardRef(function (e, t) {
    let { type: n, channelId: a } = e,
        { tooltipsWithKeybinds: y } = m.n.useConfig({ location: "ChannelAppLauncherButton" }),
        v = (0, l.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === n && p.Z.activeChannelId() === a),
        { Component: I, events: T, play: C } = (0, c.w)(),
        A = i.useContext(h.ZP);
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
    let N = i.useCallback(() => {
            v ? f.y(_.ti.DISMISSED) : (f._(_._b.TEXT, n, void 0, a), d.ux()), C();
        }, [v, n, a, C]),
        P = (0, r.jsx)(I, {
            size: "refresh_sm",
            color: "currentColor",
        });
    return (0, r.jsx)("div", {
        className: o()(b.buttonContainer, g.t4),
        ref: t,
        children: (0, r.jsx)(u.u, {
            text: E.intl.string(E.t.dHDxOF),
            shouldShow: y,
            children: (0, r.jsx)(
                s.P3F,
                S(
                    O(
                        {
                            tabIndex: 0,
                            className: o()(b.button, { [b.buttonActive]: v }),
                            onClick: N,
                            "aria-label": E.intl.string(E.t.erHFxI),
                            "aria-expanded": v,
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
                    { children: P },
                ),
            ),
        }),
    });
});
function T(e) {
    let { type: t, channelId: n } = e;
    return (0, r.jsx)(I, {
        type: t,
        channelId: n,
    });
}
let C = i.memo(T);
