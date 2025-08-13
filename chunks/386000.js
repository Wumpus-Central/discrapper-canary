n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(906732),
    s = n(628581),
    l = n(522651),
    c = n(8404),
    u = n(871499);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    var {
            selfMute: t,
            serverMute: n,
            suppress: d,
            centerButton: p = !1,
            awaitingRemote: h,
            onMouseEnter: m,
            onMouseLeave: g,
            onClick: E,
        } = e,
        b = _(e, [
            "selfMute",
            "serverMute",
            "suppress",
            "centerButton",
            "awaitingRemote",
            "onMouseEnter",
            "onMouseLeave",
            "onClick",
        ]);
    let { parentAnalyticsLocation: y } = (0, a.ZP)(),
        O = t || n || d,
        v = p ? u.d : u.Z,
        I = (0, s.Z)(t, n, d, h),
        { events: T, play: S, Component: A } = (0, c.b)(O),
        N = n || d ? o.v0G : A;
    return (
        i.useEffect(() => () => S(), [S, O]),
        (0, r.jsx)(
            v,
            f(
                {
                    iconComponent: N,
                    isTrayButton: !0,
                    caretColor: O ? "red" : "primaryDark",
                    color: O ? "red" : void 0,
                    label: I,
                    onMouseEnter: (e) => {
                        null == m || m(e), T.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == g || g(e), T.onMouseLeave();
                    },
                    onClick: (e) => {
                        null == E || E(e), (0, l.v)(y, l.d.MIC, t);
                    },
                },
                b,
            ),
        )
    );
}
