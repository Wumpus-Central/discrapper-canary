n.d(t, {
    A: () => T,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(697744),
    u = n(435371),
    d = n(795816),
    f = n(211401),
    p = n(989837),
    _ = n(500049),
    h = n(184761),
    m = n(598071),
    g = n(60809),
    E = n(985018),
    b = n(816695);

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

function A(e, t) {
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

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = i.forwardRef(function (e, t) {
    let { type: n, channelId: a } = e,
        { tooltipsWithKeybinds: y } = h.C.useConfig({
            location: "ChannelAppLauncherButton",
        }),
        A = (0, l.bG)([p.A], () => p.A.shouldShowPopup() && p.A.activeViewType() === n && p.A.activeChannelId() === a),
        { Component: S, events: I, play: T } = (0, c.c)(),
        C = i.useContext(m.Ay);
    i.useEffect(() => {
        let e = () => {
            I.onMouseEnter();
        };
        return (
            C.on("command-sentinel-typed", e),
            () => {
                C.off("command-sentinel-typed", e);
            }
        );
    }, [C, I]);
    let N = i.useCallback(() => {
            A ? f.k(_.Se.DISMISSED) : (f.R(_.s4.TEXT, n, void 0, a), d.LK()), T();
        }, [A, n, a, T]),
        R = (0, r.jsx)(S, {
            size: "refresh_sm",
            color: "currentColor",
        });
    return (0, r.jsx)("div", {
        className: s()(b.UD, g.KG),
        ref: t,
        children: (0, r.jsx)(u.m_, {
            text: E.intl.string(E.t.dHDxOF),
            shouldShow: y,
            children: (0, r.jsx)(
                o.DUT,
                v(
                    O(
                        {
                            tabIndex: 0,
                            className: s()(b.x6, {
                                [b.rK]: A,
                            }),
                            onClick: N,
                            "aria-label": E.intl.string(E.t.erHFxI),
                            "aria-expanded": A,
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
                        I,
                    ),
                    {
                        children: R,
                    },
                ),
            ),
        }),
    });
});

function I(e) {
    let { type: t, channelId: n } = e;
    return (0, r.jsx)(S, {
        type: t,
        channelId: n,
    });
}
let T = i.memo(I);
