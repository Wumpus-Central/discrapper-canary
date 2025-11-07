n.d(t, { Z: () => A });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(566620),
    u = n(499254),
    d = n(541099),
    f = n(827498),
    _ = n(663924),
    p = n(562129),
    h = n(570220),
    m = n(61356),
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
let S = i.forwardRef(function (e, t) {
    let { type: n } = e,
        a = (0, l.e7)([d.Z], () => d.Z.shouldShowPopup() && d.Z.activeViewType() === n),
        { Component: _, events: m, play: y } = (0, p.Z)("ChannelAppLauncherButton"),
        v = i.useContext(h.ZP);
    i.useEffect(() => {
        let e = () => {
            m.onMouseEnter();
        };
        return (
            v.on("command-sentinel-typed", e),
            () => {
                v.off("command-sentinel-typed", e);
            }
        );
    }, [v, m]);
    let S = i.useCallback(() => {
            a ? u.y(f.ti.DISMISSED) : (u._(f._b.TEXT, n), c.ux()), y();
        }, [a, n, y]),
        T = (0, r.jsx)(_, {
            size: "refresh_sm",
            color: "currentColor",
        });
    return (0, r.jsx)("div", {
        className: o()(b.buttonContainer, g.t4),
        ref: t,
        children: (0, r.jsx)(
            s.P3F,
            I(
                O(
                    {
                        tabIndex: 0,
                        className: o()(b.button, { [b.buttonActive]: a }),
                        onClick: S,
                        "aria-label": E.intl.string(E.t.erHFxI),
                        "aria-expanded": a,
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
                    m,
                ),
                { children: T },
            ),
        ),
    });
});
function T(e) {
    let { channel: t, type: n } = e,
        a = i.useRef(null),
        o = (0, m.Z)({ type: n });
    return (0, r.jsxs)("div", {
        className: b.channelAppLauncher,
        children: [
            (0, r.jsx)(S, {
                type: n,
                ref: a,
            }),
            o
                ? (0, r.jsx)(_.Z, {
                      positionTargetRef: a,
                      channel: t,
                  })
                : null,
        ],
    });
}
let A = i.memo(T);
