"use strict";
r.r(t), r.d(t, { Manager: () => a, usePopper: () => y, Reference: () => x, Popper: () => _ });
var n = r(582128),
    o = n.createContext(),
    i = n.createContext();
function a(e) {
    var t = e.children,
        r = n.useState(null),
        a = r[0],
        s = r[1],
        l = n.useRef(!1);
    n.useEffect(function () {
        return function () {
            l.current = !0;
        };
    }, []);
    var u = n.useCallback(function (e) {
        l.current || s(e);
    }, []);
    return n.createElement(o.Provider, { value: a }, n.createElement(i.Provider, { value: u }, t));
}
var s = function (e) {
        return Array.isArray(e) ? e[0] : e;
    },
    l = function (e) {
        if ("function" == typeof e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return e.apply(void 0, r);
        }
    },
    u = function (e, t) {
        if ("function" == typeof e) return l(e, t);
        null != e && (e.current = t);
    },
    c = function (e) {
        return e.reduce(function (e, t) {
            var r = t[0],
                n = t[1];
            return (e[r] = n), e;
        }, {});
    },
    f = "u" > typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
    p = r(333007),
    d = r(888767),
    h = r(412700),
    m = r.n(h),
    v = [],
    y = function (e, t, r) {
        void 0 === r && (r = {});
        var o = n.useRef(null),
            i = {
                onFirstUpdate: r.onFirstUpdate,
                placement: r.placement || "bottom",
                strategy: r.strategy || "absolute",
                modifiers: r.modifiers || v,
            },
            a = n.useState({
                styles: { popper: { position: i.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } },
                attributes: {},
            }),
            s = a[0],
            l = a[1],
            u = n.useMemo(function () {
                return {
                    name: "updateState",
                    enabled: !0,
                    phase: "write",
                    fn: function (e) {
                        var t = e.state,
                            r = Object.keys(t.elements);
                        p.flushSync(function () {
                            l({
                                styles: c(
                                    r.map(function (e) {
                                        return [e, t.styles[e] || {}];
                                    }),
                                ),
                                attributes: c(
                                    r.map(function (e) {
                                        return [e, t.attributes[e]];
                                    }),
                                ),
                            });
                        });
                    },
                    requires: ["computeStyles"],
                };
            }, []),
            h = n.useMemo(
                function () {
                    var e = {
                        onFirstUpdate: i.onFirstUpdate,
                        placement: i.placement,
                        strategy: i.strategy,
                        modifiers: [].concat(i.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
                    };
                    return m()(o.current, e) ? o.current || e : ((o.current = e), e);
                },
                [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, u],
            ),
            y = n.useRef();
        return (
            f(
                function () {
                    y.current && y.current.setOptions(h);
                },
                [h],
            ),
            f(
                function () {
                    if (null != e && null != t) {
                        var n = (r.createPopper || d.n)(e, t, h);
                        return (
                            (y.current = n),
                            function () {
                                n.destroy(), (y.current = null);
                            }
                        );
                    }
                },
                [e, t, r.createPopper],
            ),
            {
                state: y.current ? y.current.state : null,
                styles: s.styles,
                attributes: s.attributes,
                update: y.current ? y.current.update : null,
                forceUpdate: y.current ? y.current.forceUpdate : null,
            }
        );
    },
    g = function () {},
    b = function () {
        return Promise.resolve(null);
    },
    w = [];
function _(e) {
    var t = e.placement,
        r = void 0 === t ? "bottom" : t,
        i = e.strategy,
        a = void 0 === i ? "absolute" : i,
        l = e.modifiers,
        c = void 0 === l ? w : l,
        f = e.referenceElement,
        p = e.onFirstUpdate,
        d = e.innerRef,
        h = e.children,
        m = n.useContext(o),
        v = n.useState(null),
        _ = v[0],
        S = v[1],
        E = n.useState(null),
        x = E[0],
        k = E[1];
    n.useEffect(
        function () {
            u(d, _);
        },
        [d, _],
    );
    var C = y(
            f || m,
            _,
            n.useMemo(
                function () {
                    return {
                        placement: r,
                        strategy: a,
                        onFirstUpdate: p,
                        modifiers: [].concat(c, [{ name: "arrow", enabled: null != x, options: { element: x } }]),
                    };
                },
                [r, a, p, c, x],
            ),
        ),
        T = C.state,
        M = C.styles,
        P = C.forceUpdate,
        A = C.update,
        O = n.useMemo(
            function () {
                return {
                    ref: S,
                    style: M.popper,
                    placement: T ? T.placement : r,
                    hasPopperEscaped: T && T.modifiersData.hide ? T.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: T && T.modifiersData.hide ? T.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: { style: M.arrow, ref: k },
                    forceUpdate: P || g,
                    update: A || b,
                };
            },
            [S, k, r, T, M, A, P],
        );
    return s(h)(O);
}
var S = r(916822),
    E = r.n(S);
function x(e) {
    var t = e.children,
        r = e.innerRef,
        o = n.useContext(i),
        a = n.useCallback(
            function (e) {
                u(r, e), l(o, e);
            },
            [r, o],
        );
    return (
        n.useEffect(function () {
            return function () {
                return u(r, null);
            };
        }, []),
        n.useEffect(
            function () {
                E()(!!o, "`Reference` should not be used outside of a `Manager` component.");
            },
            [o],
        ),
        s(t)({ ref: a })
    );
}
