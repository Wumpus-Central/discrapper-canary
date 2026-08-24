"use strict";
r.r(t), r.d(t, { Manager: () => a, usePopper: () => y, Reference: () => E, Popper: () => _ });
var n = r(582128),
    i = n.createContext(),
    o = n.createContext();
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
    return n.createElement(i.Provider, { value: a }, n.createElement(o.Provider, { value: u }, t));
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
    d = r(333007),
    p = r(888767),
    h = r(412700),
    m = r.n(h),
    v = [],
    y = function (e, t, r) {
        void 0 === r && (r = {});
        var i = n.useRef(null),
            o = {
                onFirstUpdate: r.onFirstUpdate,
                placement: r.placement || "bottom",
                strategy: r.strategy || "absolute",
                modifiers: r.modifiers || v,
            },
            a = n.useState({
                styles: { popper: { position: o.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } },
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
                        d.flushSync(function () {
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
                        onFirstUpdate: o.onFirstUpdate,
                        placement: o.placement,
                        strategy: o.strategy,
                        modifiers: [].concat(o.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
                    };
                    return m()(i.current, e) ? i.current || e : ((i.current = e), e);
                },
                [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, u],
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
                        var n = (r.createPopper || p.n)(e, t, h);
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
        o = e.strategy,
        a = void 0 === o ? "absolute" : o,
        l = e.modifiers,
        c = void 0 === l ? w : l,
        f = e.referenceElement,
        d = e.onFirstUpdate,
        p = e.innerRef,
        h = e.children,
        m = n.useContext(i),
        v = n.useState(null),
        _ = v[0],
        S = v[1],
        x = n.useState(null),
        E = x[0],
        k = x[1];
    n.useEffect(
        function () {
            u(p, _);
        },
        [p, _],
    );
    var C = y(
            f || m,
            _,
            n.useMemo(
                function () {
                    return {
                        placement: r,
                        strategy: a,
                        onFirstUpdate: d,
                        modifiers: [].concat(c, [{ name: "arrow", enabled: null != E, options: { element: E } }]),
                    };
                },
                [r, a, d, c, E],
            ),
        ),
        T = C.state,
        M = C.styles,
        P = C.forceUpdate,
        A = C.update,
        I = n.useMemo(
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
    return s(h)(I);
}
var S = r(916822),
    x = r.n(S);
function E(e) {
    var t = e.children,
        r = e.innerRef,
        i = n.useContext(o),
        a = n.useCallback(
            function (e) {
                u(r, e), l(i, e);
            },
            [r, i],
        );
    return (
        n.useEffect(function () {
            return function () {
                return u(r, null);
            };
        }, []),
        n.useEffect(
            function () {
                x()(!!i, "`Reference` should not be used outside of a `Manager` component.");
            },
            [i],
        ),
        s(t)({ ref: a })
    );
}
