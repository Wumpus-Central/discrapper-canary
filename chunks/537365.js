"use strict";
n.r(t), n.d(t, { Manager: () => a, usePopper: () => m, Reference: () => C, Popper: () => T });
var i = n(64700),
    r = i.createContext(),
    s = i.createContext();
function a(e) {
    var t = e.children,
        n = i.useState(null),
        a = n[0],
        o = n[1],
        l = i.useRef(!1);
    i.useEffect(function () {
        return function () {
            l.current = !0;
        };
    }, []);
    var u = i.useCallback(function (e) {
        l.current || o(e);
    }, []);
    return i.createElement(r.Provider, { value: a }, i.createElement(s.Provider, { value: u }, t));
}
var o = function (e) {
        return Array.isArray(e) ? e[0] : e;
    },
    l = function (e) {
        if ("function" == typeof e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return e.apply(void 0, n);
        }
    },
    u = function (e, t) {
        if ("function" == typeof e) return l(e, t);
        null != e && (e.current = t);
    },
    d = function (e) {
        return e.reduce(function (e, t) {
            var n = t[0],
                i = t[1];
            return (e[n] = i), e;
        }, {});
    },
    c = "u" > typeof window && window.document && window.document.createElement ? i.useLayoutEffect : i.useEffect,
    _ = n(340287),
    h = n(888767),
    f = n(412700),
    E = n.n(f),
    p = [],
    m = function (e, t, n) {
        void 0 === n && (n = {});
        var r = i.useRef(null),
            s = {
                onFirstUpdate: n.onFirstUpdate,
                placement: n.placement || "bottom",
                strategy: n.strategy || "absolute",
                modifiers: n.modifiers || p,
            },
            a = i.useState({
                styles: { popper: { position: s.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } },
                attributes: {},
            }),
            o = a[0],
            l = a[1],
            u = i.useMemo(function () {
                return {
                    name: "updateState",
                    enabled: !0,
                    phase: "write",
                    fn: function (e) {
                        var t = e.state,
                            n = Object.keys(t.elements);
                        _.flushSync(function () {
                            l({
                                styles: d(
                                    n.map(function (e) {
                                        return [e, t.styles[e] || {}];
                                    }),
                                ),
                                attributes: d(
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
            f = i.useMemo(
                function () {
                    var e = {
                        onFirstUpdate: s.onFirstUpdate,
                        placement: s.placement,
                        strategy: s.strategy,
                        modifiers: [].concat(s.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
                    };
                    return E()(r.current, e) ? r.current || e : ((r.current = e), e);
                },
                [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, u],
            ),
            m = i.useRef();
        return (
            c(
                function () {
                    m.current && m.current.setOptions(f);
                },
                [f],
            ),
            c(
                function () {
                    if (null != e && null != t) {
                        var i = (n.createPopper || h.n)(e, t, f);
                        return (
                            (m.current = i),
                            function () {
                                i.destroy(), (m.current = null);
                            }
                        );
                    }
                },
                [e, t, n.createPopper],
            ),
            {
                state: m.current ? m.current.state : null,
                styles: o.styles,
                attributes: o.attributes,
                update: m.current ? m.current.update : null,
                forceUpdate: m.current ? m.current.forceUpdate : null,
            }
        );
    },
    g = function () {},
    A = function () {
        return Promise.resolve(null);
    },
    I = [];
function T(e) {
    var t = e.placement,
        n = void 0 === t ? "bottom" : t,
        s = e.strategy,
        a = void 0 === s ? "absolute" : s,
        l = e.modifiers,
        d = void 0 === l ? I : l,
        c = e.referenceElement,
        _ = e.onFirstUpdate,
        h = e.innerRef,
        f = e.children,
        E = i.useContext(r),
        p = i.useState(null),
        T = p[0],
        S = p[1],
        N = i.useState(null),
        C = N[0],
        y = N[1];
    i.useEffect(
        function () {
            u(h, T);
        },
        [h, T],
    );
    var v = m(
            c || E,
            T,
            i.useMemo(
                function () {
                    return {
                        placement: n,
                        strategy: a,
                        onFirstUpdate: _,
                        modifiers: [].concat(d, [{ name: "arrow", enabled: null != C, options: { element: C } }]),
                    };
                },
                [n, a, _, d, C],
            ),
        ),
        R = v.state,
        O = v.styles,
        b = v.forceUpdate,
        L = v.update,
        D = i.useMemo(
            function () {
                return {
                    ref: S,
                    style: O.popper,
                    placement: R ? R.placement : n,
                    hasPopperEscaped: R && R.modifiersData.hide ? R.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: R && R.modifiersData.hide ? R.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: { style: O.arrow, ref: y },
                    forceUpdate: b || g,
                    update: L || A,
                };
            },
            [S, y, n, R, O, L, b],
        );
    return o(f)(D);
}
var S = n(916822),
    N = n.n(S);
function C(e) {
    var t = e.children,
        n = e.innerRef,
        r = i.useContext(s),
        a = i.useCallback(
            function (e) {
                u(n, e), l(r, e);
            },
            [n, r],
        );
    return (
        i.useEffect(function () {
            return function () {
                return u(n, null);
            };
        }, []),
        i.useEffect(
            function () {
                N()(!!r, "`Reference` should not be used outside of a `Manager` component.");
            },
            [r],
        ),
        o(t)({ ref: a })
    );
}
