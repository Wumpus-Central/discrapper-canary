n.d(t, { Z: () => C });
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
    p = n(533379),
    h = n(562129),
    m = n(570220),
    g = n(61356),
    E = n(314734),
    b = n(388032),
    y = n(124886);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = i.forwardRef(function (e, t) {
    let { type: n } = e,
        a = (0, l.e7)([d.Z], () => d.Z.shouldShowPopup() && d.Z.activeViewType() === n),
        { Component: _, events: p, play: g } = (0, h.Z)("ChannelAppLauncherButton"),
        O = i.useContext(m.ZP);
    i.useEffect(() => {
        let e = () => {
            p.onMouseEnter();
        };
        return (
            O.on("command-sentinel-typed", e),
            () => {
                O.off("command-sentinel-typed", e);
            }
        );
    }, [O, p]);
    let I = i.useCallback(() => {
            a ? u.y(f.ti.DISMISSED) : (u._(f._b.TEXT, n), c.ux()), g();
        }, [a, n, g]),
        T = (0, r.jsx)(_, {
            size: "refresh_sm",
            color: "currentColor",
        });
    return (0, r.jsx)("div", {
        className: o()(y.buttonContainer, E.t4),
        ref: t,
        children: (0, r.jsx)(
            s.P3F,
            S(
                v(
                    {
                        tabIndex: 0,
                        className: o()(y.button, { [y.buttonActive]: a }),
                        onClick: I,
                        "aria-label": b.intl.string(b.t.erHFxI),
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
                    p,
                ),
                { children: T },
            ),
        ),
    });
});
function A(e) {
    let { channel: t, type: n } = e,
        a = i.useRef(null),
        o = (0, p.R)({
            channel: t,
            chatInputType: n,
        }),
        s = (0, g.Z)({ type: n });
    return o
        ? (0, r.jsxs)("div", {
              className: y.channelAppLauncher,
              children: [
                  (0, r.jsx)(T, {
                      type: n,
                      ref: a,
                  }),
                  s
                      ? (0, r.jsx)(_.Z, {
                            positionTargetRef: a,
                            channel: t,
                        })
                      : null,
              ],
          })
        : null;
}
let C = i.memo(A);
