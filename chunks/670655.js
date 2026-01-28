n.d(t, {
    A: () => I,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(158954),
    l = n(311907),
    c = n(697744),
    u = n(795816),
    d = n(211401),
    f = n(989837),
    p = n(500049),
    _ = n(598071),
    h = n(60809),
    m = n(985018),
    g = n(816695);

function E(e, t, n) {
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

function y(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}

function b(e, t) {
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

function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = i.forwardRef(function (e, t) {
    let { type: n, channelId: a } = e,
        E = (0, l.bG)([f.A], () => f.A.shouldShowPopup() && f.A.activeViewType() === n && f.A.activeChannelId() === a),
        { Component: b, events: v, play: A } = (0, c.c)(),
        I = i.useContext(_.Ay);
    i.useEffect(() => {
        let e = () => {
            v.onMouseEnter();
        };
        return (
            I.on("command-sentinel-typed", e),
            () => {
                I.off("command-sentinel-typed", e);
            }
        );
    }, [I, v]);
    let S = i.useCallback(() => {
            E ? d.k(p.Se.DISMISSED) : (d.R(p.s4.TEXT, n, void 0, a), u.LK()), A();
        }, [E, n, a, A]),
        T = (0, r.jsx)(b, {
            size: "refresh_sm",
            color: "currentColor",
        });
    return (0, r.jsx)("div", {
        className: o()(g.UD, h.KG),
        ref: t,
        children: (0, r.jsx)(
            s.DUT,
            O(
                y(
                    {
                        tabIndex: 0,
                        className: o()(g.x6, {
                            [g.rK]: E,
                        }),
                        onClick: S,
                        "aria-label": m.intl.string(m.t.erHFxI),
                        "aria-expanded": E,
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
                    v,
                ),
                {
                    children: T,
                },
            ),
        ),
    });
});

function A(e) {
    let { type: t, channelId: n } = e;
    return (0, r.jsx)(v, {
        type: t,
        channelId: n,
    });
}
let I = i.memo(A);
