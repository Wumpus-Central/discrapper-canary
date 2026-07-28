"use strict";
n.r(t), n.d(t, { Manager: () => o, usePopper: () => v, Reference: () => S, Popper: () => w });
var r = n(582128),
    i = r.createContext(),
    a = r.createContext();
function o(e) {
    var t = e.children,
        n = r.useState(null),
        o = n[0],
        s = n[1],
        l = r.useRef(!1);
    r.useEffect(function () {
        return function () {
            l.current = !0;
        };
    }, []);
    var u = r.useCallback(function (e) {
        l.current || s(e);
    }, []);
    return r.createElement(i.Provider, { value: o }, r.createElement(a.Provider, { value: u }, t));
}
var s = function (e) {
        return Array.isArray(e) ? e[0] : e;
    },
    l = function (e) {
        if ("function" == typeof e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return e.apply(void 0, n);
        }
    },
    u = function (e, t) {
        if ("function" == typeof e) return l(e, t);
        null != e && (e.current = t);
    },
    c = function (e) {
        return e.reduce(function (e, t) {
            var n = t[0],
                r = t[1];
            return (e[n] = r), e;
        }, {});
    },
    d = "u" > typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
    f = n(333007),
    p = n(888767),
    h = n(412700),
    m = n.n(h),
    g = [],
    v = function (e, t, n) {
        void 0 === n && (n = {});
        var i = r.useRef(null),
            a = {
                onFirstUpdate: n.onFirstUpdate,
                placement: n.placement || "bottom",
                strategy: n.strategy || "absolute",
                modifiers: n.modifiers || g,
            },
            o = r.useState({
                styles: { popper: { position: a.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } },
                attributes: {},
            }),
            s = o[0],
            l = o[1],
            u = r.useMemo(function () {
                return {
                    name: "updateState",
                    enabled: !0,
                    phase: "write",
                    fn: function (e) {
                        var t = e.state,
                            n = Object.keys(t.elements);
                        f.flushSync(function () {
                            l({
                                styles: c(
                                    n.map(function (e) {
                                        return [e, t.styles[e] || {}];
                                    }),
                                ),
                                attributes: c(
                                    n.map(function (e) {
                                        return [e, t.attributes[e]];
                                    }),
                                ),
                            });
                        });
                    },
                    requires: ["computeStyles"],
                };
            }, []),
            h = r.useMemo(
                function () {
                    var e = {
                        onFirstUpdate: a.onFirstUpdate,
                        placement: a.placement,
                        strategy: a.strategy,
                        modifiers: [].concat(a.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
                    };
                    return m()(i.current, e) ? i.current || e : ((i.current = e), e);
                },
                [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, u],
            ),
            v = r.useRef();
        return (
            d(
                function () {
                    v.current && v.current.setOptions(h);
                },
                [h],
            ),
            d(
                function () {
                    if (null != e && null != t) {
                        var r = (n.createPopper || p.n)(e, t, h);
                        return (
                            (v.current = r),
                            function () {
                                r.destroy(), (v.current = null);
                            }
                        );
                    }
                },
                [e, t, n.createPopper],
            ),
            {
                state: v.current ? v.current.state : null,
                styles: s.styles,
                attributes: s.attributes,
                update: v.current ? v.current.update : null,
                forceUpdate: v.current ? v.current.forceUpdate : null,
            }
        );
    },
    y = function () {},
    b = function () {
        return Promise.resolve(null);
    },
    _ = [];
function w(e) {
    var t = e.placement,
        n = void 0 === t ? "bottom" : t,
        a = e.strategy,
        o = void 0 === a ? "absolute" : a,
        l = e.modifiers,
        c = void 0 === l ? _ : l,
        d = e.referenceElement,
        f = e.onFirstUpdate,
        p = e.innerRef,
        h = e.children,
        m = r.useContext(i),
        g = r.useState(null),
        w = g[0],
        x = g[1],
        E = r.useState(null),
        S = E[0],
        k = E[1];
    r.useEffect(
        function () {
            u(p, w);
        },
        [p, w],
    );
    var T = v(
            d || m,
            w,
            r.useMemo(
                function () {
                    return {
                        placement: n,
                        strategy: o,
                        onFirstUpdate: f,
                        modifiers: [].concat(c, [{ name: "arrow", enabled: null != S, options: { element: S } }]),
                    };
                },
                [n, o, f, c, S],
            ),
        ),
        C = T.state,
        P = T.styles,
        A = T.forceUpdate,
        M = T.update,
        R = r.useMemo(
            function () {
                return {
                    ref: x,
                    style: P.popper,
                    placement: C ? C.placement : n,
                    hasPopperEscaped: C && C.modifiersData.hide ? C.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: C && C.modifiersData.hide ? C.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: { style: P.arrow, ref: k },
                    forceUpdate: A || y,
                    update: M || b,
                };
            },
            [x, k, n, C, P, M, A],
        );
    return s(h)(R);
}
var x = n(916822),
    E = n.n(x);
function S(e) {
    var t = e.children,
        n = e.innerRef,
        i = r.useContext(a),
        o = r.useCallback(
            function (e) {
                u(n, e), l(i, e);
            },
            [n, i],
        );
    return (
        r.useEffect(function () {
            return function () {
                return u(n, null);
            };
        }, []),
        r.useEffect(
            function () {
                E()(!!i, "`Reference` should not be used outside of a `Manager` component.");
            },
            [i],
        ),
        s(t)({ ref: o })
    );
}
