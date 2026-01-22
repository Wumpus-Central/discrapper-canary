n.d(t, {
    A: () => S,
    l: () => C,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(319354),
    l = n(435371),
    c = n(421380),
    u = n(397927),
    d = n(241524),
    f = n(147925),
    p = n(461782),
    _ = n(447404),
    h = n(722776),
    m = n(985018),
    g = n(35204);

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
                E(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
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
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = v(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function S(e) {
    let {
        label: t,
        onClick: n,
        onKeyDown: i,
        onMouseEnter: a,
        onMouseLeave: u,
        onContextMenu: d,
        className: f,
        wrapperClassName: p,
        iconClassName: h,
        iconColor: m = "currentColor",
        iconComponent: E,
        themeable: b = !1,
        disabled: y = !1,
        isActive: O = !1,
        tooltipPosition: A = "top",
        shouldShowTooltip: v = !0,
        forceTooltipOpen: S = !1,
        buttonRef: I,
        grow: T,
        "aria-label": C,
        look: N,
        buttonText: R,
        size: w,
        color: P,
    } = e;
    return (0, r.jsx)(_.A, {
        children: (0, r.jsx)(l.m_, {
            position: A,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: v,
            forceOpen: S,
            children: (0, r.jsxs)(c.$n, {
                "data-migration-pending": !0,
                look: null != N ? N : c.$n.Looks.BLANK,
                size: null != w ? w : c.$n.Sizes.NONE,
                color: P,
                onKeyDown: (e) => {
                    null == i || i(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: a,
                onMouseLeave: u,
                onContextMenu: null != d ? d : void 0,
                onFocus: (e) => {
                    null == a || a(e);
                },
                onBlur: u,
                disabled: y,
                innerClassName: s()(g.NL, {
                    [g.eq]: null != R,
                }),
                className: s()(
                    {
                        [g.vu]: O,
                    },
                    f,
                ),
                wrapperClassName: p,
                buttonRef: I,
                grow: T,
                "aria-label": C,
                children: [
                    (0, r.jsx)(E, {
                        size: o.E.md,
                        className: s()(h, {
                            [g.pd]: null == R,
                            [g.IW]: b,
                            [g.vu]: O,
                        }),
                        color: m,
                    }),
                    R,
                ],
            }),
        }),
    });
}
let I = {
        disconnect: g.Zf,
        join: g.fj,
        red: g.wv,
        white: g.ON,
        green: g.wL,
        yellow: g.D9,
        primaryDark: g.Zq,
        primaryLight: g.Zq,
        activeLight: g.H3,
        premiumGradient: g.ck,
    },
    T = {
        disconnect: g.Zf,
        join: g.fj,
        red: g.Xr,
        white: g.ON,
        green: g.Vu,
        yellow: g.D9,
        primaryDark: g.Zq,
        primaryLight: g.Zq,
        activeLight: g.H3,
        premiumGradient: g.ck,
    };

function C(e) {
    var t;
    let {
            ref: n,
            color: a,
            caretColor: o,
            isActive: l = !1,
            className: c,
            iconClassName: E,
            onPopoutClick: y,
            popoutOpen: v = !1,
            popoutDisabled: C = !1,
            isTrayButton: N,
            applyStyles: R = !1,
        } = e,
        w = A(e, [
            "ref",
            "color",
            "caretColor",
            "isActive",
            "className",
            "iconClassName",
            "onPopoutClick",
            "popoutOpen",
            "popoutDisabled",
            "isTrayButton",
            "applyStyles",
        ]),
        P = (0, h.A)(a, l),
        D = null != o ? o : P,
        x = (0, d.A)("(max-width: 456px)"),
        L = i.useRef(null),
        j = i.useContext(p.vG);
    i.useEffect(() => {
        null != L.current && (j ? L.current.pause() : L.current.play());
    }, [j]);
    let M = null != (t = w.onContextMenu) ? t : y,
        k = null == y && !N,
        U = null != y && !N,
        G = N && null != y && !x,
        V = (0, r.jsx)(
            S,
            O(b({}, w), {
                grow: !1,
                onContextMenu: M,
                iconClassName: s()(E, g.LF, k && g.Ns),
                className: s()(x || R ? c : null, l && g.vu, g.wh, T[P], k && g.Sy, G && g.hA),
            }),
        );
    return x
        ? V
        : (0, r.jsxs)("div", {
              ref: n,
              className: s()(g.re, v && g.q6, c, U && [g.TD, I[P]]),
              children: [
                  V,
                  null != y
                      ? (0, r.jsx)(_.A, {
                            children: (0, r.jsx)(u.DUT, {
                                "aria-label": m.intl.string(m.t.PdRCRg),
                                onClick: C ? void 0 : y,
                                className: s()(g.cd, N && g.Ml, T[D], v && [g.q6, g.vu], C && g.r9),
                                children: (0, r.jsx)(f.A, {
                                    className: s()(g.gG, v && g.ho, C && g.r9),
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
