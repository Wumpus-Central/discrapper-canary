"use strict";
r.d(t, {
    Mk: () => eC,
    bv: () => e5,
    s3: () => eK,
    we: () => e4,
    fI: () => ev,
    zR: () => eJ,
    DL: () => e7,
    iB: () => tt,
    s9: () => e3,
    $c: () => eb,
    XF: () => ej,
    P6: () => ey,
    R1: () => eg,
});
var n = r(64700),
    a = r.t(n, 2),
    s = r(84157),
    i =
        'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
    o = "u" < typeof Element,
    l = o
        ? function () {}
        : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    u =
        !o && Element.prototype.getRootNode
            ? function (e) {
                  var t;
                  return null == e || null == (t = e.getRootNode) ? void 0 : t.call(e);
              }
            : function (e) {
                  return null == e ? void 0 : e.ownerDocument;
              },
    c = function e(t, r) {
        void 0 === r && (r = !0);
        var n,
            a = null == t || null == (n = t.getAttribute) ? void 0 : n.call(t, "inert");
        return "" === a || "true" === a || (r && t && e(t.parentNode));
    },
    d = function (e) {
        var t,
            r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, "contenteditable");
        return "" === r || "true" === r;
    },
    f = function (e, t, r) {
        if (c(e)) return [];
        var n = Array.prototype.slice.apply(e.querySelectorAll(i));
        return t && l.call(e, i) && n.unshift(e), (n = n.filter(r));
    },
    p = function e(t, r, n) {
        for (var a = [], s = Array.from(t); s.length; ) {
            var o = s.shift();
            if (!c(o, !1))
                if ("SLOT" === o.tagName) {
                    var u = o.assignedElements(),
                        d = e(u.length ? u : o.children, !0, n);
                    n.flatten ? a.push.apply(a, d) : a.push({ scopeParent: o, candidates: d });
                } else {
                    l.call(o, i) && n.filter(o) && (r || !t.includes(o)) && a.push(o);
                    var f = o.shadowRoot || ("function" == typeof n.getShadowRoot && n.getShadowRoot(o)),
                        p = !c(f, !1) && (!n.shadowRootFilter || n.shadowRootFilter(o));
                    if (f && p) {
                        var h = e(!0 === f ? o.children : f.children, !0, n);
                        n.flatten ? a.push.apply(a, h) : a.push({ scopeParent: o, candidates: h });
                    } else s.unshift.apply(s, o.children);
                }
        }
        return a;
    },
    h = function (e) {
        return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
    },
    m = function (e) {
        if (!e) throw Error("No node provided");
        return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || d(e)) && !h(e) ? 0 : e.tabIndex;
    },
    _ = function (e, t) {
        var r = m(e);
        return r < 0 && t && !h(e) ? 0 : r;
    },
    g = function (e, t) {
        return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
    },
    v = function (e) {
        return "INPUT" === e.tagName;
    },
    b = function (e, t) {
        for (var r = 0; r < e.length; r++) if (e[r].checked && e[r].form === t) return e[r];
    },
    y = function (e) {
        if (!e.name) return !0;
        var t,
            r = e.form || u(e),
            n = function (e) {
                return r.querySelectorAll('input[type="radio"][name="' + e + '"]');
            };
        if ("u" > typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape)
            t = n(window.CSS.escape(e.name));
        else
            try {
                t = n(e.name);
            } catch (e) {
                return (
                    console.error(
                        "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                        e.message,
                    ),
                    !1
                );
            }
        var a = b(t, e.form);
        return !a || a === e;
    },
    E = function (e) {
        return v(e) && "radio" === e.type && !y(e);
    },
    S = function (e) {
        var t,
            r,
            n,
            a,
            s,
            i,
            o,
            l = e && u(e),
            c = null == (t = l) ? void 0 : t.host,
            d = !1;
        if (l && l !== e)
            for (
                d = !!(
                    (null != (r = c) && null != (n = r.ownerDocument) && n.contains(c)) ||
                    (null != e && null != (a = e.ownerDocument) && a.contains(e))
                );
                !d && c;
            )
                d = !!(
                    null != (i = c = null == (s = l = u(c)) ? void 0 : s.host) &&
                    null != (o = i.ownerDocument) &&
                    o.contains(c)
                );
        return d;
    },
    T = function (e) {
        var t = e.getBoundingClientRect(),
            r = t.width,
            n = t.height;
        return 0 === r && 0 === n;
    },
    x = function (e, t) {
        var r = t.displayCheck,
            n = t.getShadowRoot;
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        var a = l.call(e, "details>summary:first-of-type") ? e.parentElement : e;
        if (l.call(a, "details:not([open]) *")) return !0;
        if (r && "full" !== r && "legacy-full" !== r) {
            if ("non-zero-area" === r) return T(e);
        } else {
            if ("function" == typeof n) {
                for (var s = e; e; ) {
                    var i = e.parentElement,
                        o = u(e);
                    if (i && !i.shadowRoot && !0 === n(i)) return T(e);
                    e = e.assignedSlot ? e.assignedSlot : i || o === e.ownerDocument ? i : o.host;
                }
                e = s;
            }
            if (S(e)) return !e.getClientRects().length;
            if ("legacy-full" !== r) return !0;
        }
        return !1;
    },
    w = function (e) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
            for (var t = e.parentElement; t; ) {
                if ("FIELDSET" === t.tagName && t.disabled) {
                    for (var r = 0; r < t.children.length; r++) {
                        var n = t.children.item(r);
                        if ("LEGEND" === n.tagName) return !!l.call(t, "fieldset[disabled] *") || !n.contains(e);
                    }
                    return !0;
                }
                t = t.parentElement;
            }
        return !1;
    },
    C = function (e, t) {
        return !(
            t.disabled ||
            c(t) ||
            (v(t) && "hidden" === t.type) ||
            x(t, e) ||
            ("DETAILS" === t.tagName &&
                Array.prototype.slice.apply(t.children).some(function (e) {
                    return "SUMMARY" === e.tagName;
                })) ||
            w(t)
        );
    },
    D = function (e, t) {
        return !(E(t) || 0 > m(t)) && !!C(e, t);
    },
    O = function (e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return !!isNaN(t) || !!(t >= 0);
    },
    A = function e(t) {
        var r = [],
            n = [];
        return (
            t.forEach(function (t, a) {
                var s = !!t.scopeParent,
                    i = s ? t.scopeParent : t,
                    o = _(i, s),
                    l = s ? e(t.candidates) : i;
                0 === o
                    ? s
                        ? r.push.apply(r, l)
                        : r.push(i)
                    : n.push({ documentOrder: a, tabIndex: o, item: t, isScope: s, content: l });
            }),
            n
                .sort(g)
                .reduce(function (e, t) {
                    return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
                }, [])
                .concat(r)
        );
    },
    M = function (e, t) {
        return A(
            (t = t || {}).getShadowRoot
                ? p([e], t.includeContainer, {
                      filter: D.bind(null, t),
                      flatten: !1,
                      getShadowRoot: t.getShadowRoot,
                      shadowRootFilter: O,
                  })
                : f(e, t.includeContainer, D.bind(null, t)),
        );
    },
    R = function (e, t) {
        return (t = t || {}).getShadowRoot
            ? p([e], t.includeContainer, { filter: C.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot })
            : f(e, t.includeContainer, C.bind(null, t));
    },
    k = function (e, t) {
        if (((t = t || {}), !e)) throw Error("No node provided");
        return !1 !== l.call(e, i) && D(t, e);
    };
function N() {
    let e = navigator.userAgentData;
    return null != e && e.platform ? e.platform : navigator.platform;
}
function L() {
    let e = navigator.userAgentData;
    return e && Array.isArray(e.brands)
        ? e.brands
              .map((e) => {
                  let { brand: t, version: r } = e;
                  return t + "/" + r;
              })
              .join(" ")
        : navigator.userAgent;
}
function I() {
    let e = /android/i;
    return e.test(N()) || e.test(L());
}
let P = "data-floating-ui-focusable";
function F(e) {
    let t = e.activeElement;
    for (; (null == (r = t) || null == (r = r.shadowRoot) ? void 0 : r.activeElement) != null; ) {
        var r;
        t = t.shadowRoot.activeElement;
    }
    return t;
}
function B(e, t) {
    if (!e || !t) return !1;
    let r = null == t.getRootNode ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (r && (0, s.Ng)(r)) {
        let r = t;
        for (; r; ) {
            if (e === r) return !0;
            r = r.parentNode || r.host;
        }
    }
    return !1;
}
function Y(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function U(e, t) {
    return null != t && ("composedPath" in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target));
}
function j(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
function V(e) {
    return (
        !!e &&
        "combobox" === e.getAttribute("role") &&
        (0, s.sb)(e) &&
        e.matches(
            "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
        )
    );
}
function H(e) {
    return e ? (e.hasAttribute(P) ? e : e.querySelector("[" + P + "]") || e) : null;
}
function G(e, t, r) {
    return (
        void 0 === r && (r = !0),
        e
            .filter((e) => {
                var n;
                return e.parentId === t && (!r || (null == (n = e.context) ? void 0 : n.open));
            })
            .flatMap((t) => [t, ...G(e, t.id, r)])
    );
}
function z(e, t) {
    var r;
    let n = [],
        a = null == (r = e.find((e) => e.id === t)) ? void 0 : r.parentId;
    for (; a; ) {
        let t = e.find((e) => e.id === a);
        (a = null == t ? void 0 : t.parentId), t && (n = n.concat(t));
    }
    return n;
}
function W(e) {
    e.preventDefault(), e.stopPropagation();
}
function q(e, t) {
    let r = ["mouse", "pen"];
    return t || r.push("", void 0), r.includes(e);
}
var $ = "u" > typeof document ? n.useLayoutEffect : function () {};
function K(e) {
    let t = n.useRef(e);
    return (
        $(() => {
            t.current = e;
        }),
        t
    );
}
let Q = { ...a }.useInsertionEffect || ((e) => e());
function X(e) {
    let t = n.useRef(() => {});
    return (
        Q(() => {
            t.current = e;
        }),
        n.useCallback(function () {
            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return null == t.current ? void 0 : t.current(...r);
        }, [])
    );
}
let Z = () => ({
    getShadowRoot: !0,
    displayCheck:
        "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none",
});
function J(e, t) {
    let r = M(e, Z()),
        n = r.length;
    if (0 === n) return;
    let a = F(j(e)),
        s = r.indexOf(a);
    return r[-1 === s ? (1 === t ? 0 : n - 1) : s + t];
}
function ee(e) {
    return J(j(e).body, 1) || e;
}
function et(e) {
    return J(j(e).body, -1) || e;
}
function er(e, t) {
    let r = t || e.currentTarget,
        n = e.relatedTarget;
    return !n || !B(r, n);
}
function en(e) {
    e.querySelectorAll("[data-tabindex]").forEach((e) => {
        let t = e.dataset.tabindex;
        delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
    });
}
var ea = r(627968),
    es = r(340287),
    ei = r(879821);
let eo = "active",
    el = "selected",
    eu = { ...a },
    ec = !1,
    ed = 0,
    ef = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + ed++,
    ep =
        eu.useId ||
        function () {
            let [e, t] = n.useState(() => (ec ? ef() : void 0));
            return (
                $(() => {
                    null == e && t(ef());
                }, []),
                n.useEffect(() => {
                    ec = !0;
                }, []),
                e
            );
        };
function eh() {
    let e = new Map();
    return {
        emit(t, r) {
            var n;
            null == (n = e.get(t)) || n.forEach((e) => e(r));
        },
        on(t, r) {
            e.has(t) || e.set(t, new Set()), e.get(t).add(r);
        },
        off(t, r) {
            var n;
            null == (n = e.get(t)) || n.delete(r);
        },
    };
}
let em = n.createContext(null),
    e_ = n.createContext(null),
    eg = () => {
        var e;
        return (null == (e = n.useContext(em)) ? void 0 : e.id) || null;
    };
function ev(e) {
    let t = ep(),
        r = n.useContext(e_),
        a = eg(),
        s = e || a;
    return (
        $(() => {
            if (!t) return;
            let e = { id: t, parentId: s };
            return (
                null == r || r.addNode(e),
                () => {
                    null == r || r.removeNode(e);
                }
            );
        }, [r, t, s]),
        t
    );
}
function eb(e) {
    let { children: t, id: r } = e,
        a = eg();
    return (0, ea.jsx)(em.Provider, { value: n.useMemo(() => ({ id: r, parentId: a }), [r, a]), children: t });
}
function ey(e) {
    let { children: t } = e,
        r = n.useRef([]),
        a = n.useCallback((e) => {
            r.current = [...r.current, e];
        }, []),
        s = n.useCallback((e) => {
            r.current = r.current.filter((t) => t !== e);
        }, []),
        [i] = n.useState(() => eh());
    return (0, ea.jsx)(e_.Provider, {
        value: n.useMemo(() => ({ nodesRef: r, addNode: a, removeNode: s, events: i }), [a, s, i]),
        children: t,
    });
}
function eE(e) {
    return "data-floating-ui-" + e;
}
function eS(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
}
let eT = eE("safe-polygon");
function ex(e, t, r) {
    if (r && !q(r)) return 0;
    if ("number" == typeof e) return e;
    if ("function" == typeof e) {
        let r = e();
        return "number" == typeof r ? r : null == r ? void 0 : r[t];
    }
    return null == e ? void 0 : e[t];
}
function ew(e) {
    return "function" == typeof e ? e() : e;
}
function eC(e, t) {
    void 0 === t && (t = {});
    let { open: r, onOpenChange: a, dataRef: i, events: o, elements: l } = e,
        { enabled: u = !0, delay: c = 0, handleClose: d = null, mouseOnly: f = !1, restMs: p = 0, move: h = !0 } = t,
        m = n.useContext(e_),
        _ = eg(),
        g = K(d),
        v = K(c),
        b = K(r),
        y = K(p),
        E = n.useRef(),
        S = n.useRef(-1),
        T = n.useRef(),
        x = n.useRef(-1),
        w = n.useRef(!0),
        C = n.useRef(!1),
        D = n.useRef(() => {}),
        O = n.useRef(!1),
        A = X(() => {
            var e;
            let t = null == (e = i.current.openEvent) ? void 0 : e.type;
            return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t;
        });
    n.useEffect(() => {
        if (u)
            return (
                o.on("openchange", e),
                () => {
                    o.off("openchange", e);
                }
            );
        function e(e) {
            let { open: t } = e;
            t || (eS(S), eS(x), (w.current = !0), (O.current = !1));
        }
    }, [u, o]),
        n.useEffect(() => {
            if (!u || !g.current || !r) return;
            function e(e) {
                A() && a(!1, e, "hover");
            }
            let t = j(l.floating).documentElement;
            return (
                t.addEventListener("mouseleave", e),
                () => {
                    t.removeEventListener("mouseleave", e);
                }
            );
        }, [l.floating, r, a, u, g, A]);
    let M = n.useCallback(
            function (e, t, r) {
                void 0 === t && (t = !0), void 0 === r && (r = "hover");
                let n = ex(v.current, "close", E.current);
                n && !T.current
                    ? (eS(S), (S.current = window.setTimeout(() => a(!1, e, r), n)))
                    : t && (eS(S), a(!1, e, r));
            },
            [v, a],
        ),
        R = X(() => {
            D.current(), (T.current = void 0);
        }),
        k = X(() => {
            if (C.current) {
                let e = j(l.floating).body;
                (e.style.pointerEvents = ""), e.removeAttribute(eT), (C.current = !1);
            }
        }),
        N = X(() => !!i.current.openEvent && ["click", "mousedown"].includes(i.current.openEvent.type));
    n.useEffect(() => {
        if (u && (0, s.vq)(l.domReference)) {
            let a = l.domReference,
                s = l.floating;
            return (
                r && a.addEventListener("mouseleave", n),
                h && a.addEventListener("mousemove", e, { once: !0 }),
                a.addEventListener("mouseenter", e),
                a.addEventListener("mouseleave", t),
                s &&
                    (s.addEventListener("mouseleave", n),
                    s.addEventListener("mouseenter", o),
                    s.addEventListener("mouseleave", c)),
                () => {
                    r && a.removeEventListener("mouseleave", n),
                        h && a.removeEventListener("mousemove", e),
                        a.removeEventListener("mouseenter", e),
                        a.removeEventListener("mouseleave", t),
                        s &&
                            (s.removeEventListener("mouseleave", n),
                            s.removeEventListener("mouseenter", o),
                            s.removeEventListener("mouseleave", c));
                }
            );
        }
        function e(e) {
            if ((eS(S), (w.current = !1), (f && !q(E.current)) || (ew(y.current) > 0 && !ex(v.current, "open"))))
                return;
            let t = ex(v.current, "open", E.current);
            t
                ? (S.current = window.setTimeout(() => {
                      b.current || a(!0, e, "hover");
                  }, t))
                : r || a(!0, e, "hover");
        }
        function t(e) {
            if (N()) return void k();
            D.current();
            let t = j(l.floating);
            if ((eS(x), (O.current = !1), g.current && i.current.floatingContext)) {
                r || eS(S),
                    (T.current = g.current({
                        ...i.current.floatingContext,
                        tree: m,
                        x: e.clientX,
                        y: e.clientY,
                        onClose() {
                            k(), R(), N() || M(e, !0, "safe-polygon");
                        },
                    }));
                let n = T.current;
                t.addEventListener("mousemove", n),
                    (D.current = () => {
                        t.removeEventListener("mousemove", n);
                    });
                return;
            }
            ("touch" === E.current && B(l.floating, e.relatedTarget)) || M(e);
        }
        function n(e) {
            N() ||
                (i.current.floatingContext &&
                    (null == g.current ||
                        g.current({
                            ...i.current.floatingContext,
                            tree: m,
                            x: e.clientX,
                            y: e.clientY,
                            onClose() {
                                k(), R(), N() || M(e);
                            },
                        })(e)));
        }
        function o() {
            eS(S);
        }
        function c(e) {
            N() || M(e, !1);
        }
    }, [l, u, e, f, h, M, R, k, a, r, b, m, v, g, i, N, y]),
        $(() => {
            var e, t;
            if (u && r && null != (e = g.current) && null != (e = e.__options) && e.blockPointerEvents && A()) {
                C.current = !0;
                let e = l.floating;
                if ((0, s.vq)(l.domReference) && e) {
                    let r = j(l.floating).body;
                    r.setAttribute(eT, "");
                    let n = l.domReference,
                        a =
                            null == m ||
                            null == (t = m.nodesRef.current.find((e) => e.id === _)) ||
                            null == (t = t.context)
                                ? void 0
                                : t.elements.floating;
                    return (
                        a && (a.style.pointerEvents = ""),
                        (r.style.pointerEvents = "none"),
                        (n.style.pointerEvents = "auto"),
                        (e.style.pointerEvents = "auto"),
                        () => {
                            (r.style.pointerEvents = ""), (n.style.pointerEvents = ""), (e.style.pointerEvents = "");
                        }
                    );
                }
            }
        }, [u, r, _, l, m, g, A]),
        $(() => {
            r || ((E.current = void 0), (O.current = !1), R(), k());
        }, [r, R, k]),
        n.useEffect(
            () => () => {
                R(), eS(S), eS(x), k();
            },
            [u, l.domReference, R, k],
        );
    let L = n.useMemo(() => {
        function e(e) {
            E.current = e.pointerType;
        }
        return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove(e) {
                let { nativeEvent: t } = e;
                function n() {
                    w.current || b.current || a(!0, t, "hover");
                }
                (f && !q(E.current)) ||
                    r ||
                    0 === ew(y.current) ||
                    (O.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                    (eS(x),
                    "touch" === E.current
                        ? n()
                        : ((O.current = !0), (x.current = window.setTimeout(n, ew(y.current)))));
            },
        };
    }, [f, a, r, b, y]);
    return n.useMemo(() => (u ? { reference: L } : {}), [u, L]);
}
let eD = 0;
function eO(e, t) {
    void 0 === t && (t = {});
    let { preventScroll: r = !1, cancelPrevious: n = !0, sync: a = !1 } = t;
    n && cancelAnimationFrame(eD);
    let s = () => (null == e ? void 0 : e.focus({ preventScroll: r }));
    a ? s() : (eD = requestAnimationFrame(s));
}
function eA(e, t) {
    if (!e || !t) return !1;
    let r = null == t.getRootNode ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (r && (0, s.Ng)(r)) {
        let r = t;
        for (; r; ) {
            if (e === r) return !0;
            r = r.parentNode || r.host;
        }
    }
    return !1;
}
let eM = { inert: new WeakMap(), "aria-hidden": new WeakMap(), none: new WeakMap() };
function eR(e) {
    return "inert" === e ? eM.inert : "aria-hidden" === e ? eM["aria-hidden"] : eM.none;
}
let ek = new WeakSet(),
    eN = {},
    eL = 0,
    eI = (e) => e && (e.host || eI(e.parentNode));
function eP(e, t, r) {
    var n, a, i;
    let o, l, u, c, d, f, p;
    void 0 === t && (t = !1), void 0 === r && (r = !1);
    let h = ((null == (n = e[0]) ? void 0 : n.ownerDocument) || document).body;
    return (
        (a = e.concat(Array.from(h.querySelectorAll('[aria-live],[role="status"],output')))),
        (i = t),
        (o = "data-floating-ui-inert"),
        (l = r ? "inert" : i ? "aria-hidden" : null),
        (u = a
            .map((e) => {
                if (h.contains(e)) return e;
                let t = eI(e);
                return h.contains(t) ? t : null;
            })
            .filter((e) => null != e)),
        (c = new Set()),
        (d = new Set(u)),
        (f = []),
        eN[o] || (eN[o] = new WeakMap()),
        (p = eN[o]),
        u.forEach(function e(t) {
            !(!t || c.has(t)) && (c.add(t), t.parentNode && e(t.parentNode));
        }),
        (function e(t) {
            !t ||
                d.has(t) ||
                [].forEach.call(t.children, (t) => {
                    if ("script" !== (0, s.mq)(t))
                        if (c.has(t)) e(t);
                        else {
                            let e = l ? t.getAttribute(l) : null,
                                r = null !== e && "false" !== e,
                                n = eR(l),
                                a = (n.get(t) || 0) + 1,
                                s = (p.get(t) || 0) + 1;
                            n.set(t, a),
                                p.set(t, s),
                                f.push(t),
                                1 === a && r && ek.add(t),
                                1 === s && t.setAttribute(o, ""),
                                !r && l && t.setAttribute(l, "inert" === l ? "" : "true");
                        }
                });
        })(h),
        c.clear(),
        eL++,
        () => {
            f.forEach((e) => {
                let t = eR(l),
                    r = (t.get(e) || 0) - 1,
                    n = (p.get(e) || 0) - 1;
                t.set(e, r),
                    p.set(e, n),
                    r || (!ek.has(e) && l && e.removeAttribute(l), ek.delete(e)),
                    n || e.removeAttribute(o);
            }),
                --eL ||
                    ((eM.inert = new WeakMap()),
                    (eM["aria-hidden"] = new WeakMap()),
                    (eM.none = new WeakMap()),
                    (ek = new WeakSet()),
                    (eN = {}));
        }
    );
}
let eF = {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "fixed",
        whiteSpace: "nowrap",
        width: "1px",
        top: 0,
        left: 0,
    },
    eB = n.forwardRef(function (e, t) {
        let [r, a] = n.useState();
        $(() => {
            /apple/i.test(navigator.vendor) && a("button");
        }, []);
        let s = { ref: t, tabIndex: 0, role: r, "aria-hidden": !r || void 0, [eE("focus-guard")]: "", style: eF };
        return (0, ea.jsx)("span", { ...e, ...s });
    }),
    eY = n.createContext(null),
    eU = eE("portal");
function ej(e) {
    let { children: t, id: r, root: a, preserveTabOrder: i = !0 } = e,
        o = (function (e) {
            void 0 === e && (e = {});
            let { id: t, root: r } = e,
                a = ep(),
                i = eV(),
                [o, l] = n.useState(null),
                u = n.useRef(null);
            return (
                $(
                    () => () => {
                        null == o || o.remove(),
                            queueMicrotask(() => {
                                u.current = null;
                            });
                    },
                    [o],
                ),
                $(() => {
                    if (!a || u.current) return;
                    let e = t ? document.getElementById(t) : null;
                    if (!e) return;
                    let r = document.createElement("div");
                    (r.id = a), r.setAttribute(eU, ""), e.appendChild(r), (u.current = r), l(r);
                }, [t, a]),
                $(() => {
                    if (null === r || !a || u.current) return;
                    let e = r || (null == i ? void 0 : i.portalNode);
                    e && !(0, s.Ll)(e) && (e = e.current), (e = e || document.body);
                    let n = null;
                    t && (((n = document.createElement("div")).id = t), e.appendChild(n));
                    let o = document.createElement("div");
                    (o.id = a), o.setAttribute(eU, ""), (e = n || e).appendChild(o), (u.current = o), l(o);
                }, [t, r, a, i]),
                o
            );
        })({ id: r, root: a }),
        [l, u] = n.useState(null),
        c = n.useRef(null),
        d = n.useRef(null),
        f = n.useRef(null),
        p = n.useRef(null),
        h = null == l ? void 0 : l.modal,
        m = null == l ? void 0 : l.open,
        _ = !!l && !l.modal && l.open && i && !!(a || o);
    return (
        n.useEffect(() => {
            if (o && i && !h)
                return (
                    o.addEventListener("focusin", e, !0),
                    o.addEventListener("focusout", e, !0),
                    () => {
                        o.removeEventListener("focusin", e, !0), o.removeEventListener("focusout", e, !0);
                    }
                );
            function e(e) {
                o &&
                    er(e) &&
                    ("focusin" === e.type
                        ? en
                        : function (e) {
                              M(e, Z()).forEach((e) => {
                                  (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                                      e.setAttribute("tabindex", "-1");
                              });
                          })(o);
            }
        }, [o, i, h]),
        n.useEffect(() => {
            !o || m || en(o);
        }, [m, o]),
        (0, ea.jsxs)(eY.Provider, {
            value: n.useMemo(
                () => ({
                    preserveTabOrder: i,
                    beforeOutsideRef: c,
                    afterOutsideRef: d,
                    beforeInsideRef: f,
                    afterInsideRef: p,
                    portalNode: o,
                    setFocusManagerState: u,
                }),
                [i, o],
            ),
            children: [
                _ &&
                    o &&
                    (0, ea.jsx)(eB, {
                        "data-type": "outside",
                        ref: c,
                        onFocus: (e) => {
                            if (er(e, o)) {
                                var t;
                                null == (t = f.current) || t.focus();
                            } else {
                                let e = et(l ? l.domReference : null);
                                null == e || e.focus();
                            }
                        },
                    }),
                _ && o && (0, ea.jsx)("span", { "aria-owns": o.id, style: eF }),
                o && es.createPortal(t, o),
                _ &&
                    o &&
                    (0, ea.jsx)(eB, {
                        "data-type": "outside",
                        ref: d,
                        onFocus: (e) => {
                            if (er(e, o)) {
                                var t;
                                null == (t = p.current) || t.focus();
                            } else {
                                let t = ee(l ? l.domReference : null);
                                null == t || t.focus(),
                                    (null == l ? void 0 : l.closeOnFocusOut) &&
                                        (null == l || l.onOpenChange(!1, e.nativeEvent, "focus-out"));
                            }
                        },
                    }),
            ],
        })
    );
}
let eV = () => n.useContext(eY);
function eH(e) {
    return n.useMemo(
        () => (t) => {
            e.forEach((e) => {
                e && (e.current = t);
            });
        },
        e,
    );
}
let eG = [];
function ez() {
    eG = eG.filter((e) => e.isConnected);
}
function eW() {
    return ez(), eG[eG.length - 1];
}
function eq(e, t) {
    var r;
    if (!t.current.includes("floating") && !(null != (r = e.getAttribute("role")) && r.includes("dialog"))) return;
    let n = Z(),
        a = R(e, n).filter((e) => {
            let t = e.getAttribute("data-tabindex") || "";
            return k(e, n) || (e.hasAttribute("data-tabindex") && !t.startsWith("-"));
        }),
        s = e.getAttribute("tabindex");
    t.current.includes("floating") || 0 === a.length
        ? "0" !== s && e.setAttribute("tabindex", "0")
        : ("-1" !== s || (e.hasAttribute("data-tabindex") && "-1" !== e.getAttribute("data-tabindex"))) &&
          (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
let e$ = n.forwardRef(function (e, t) {
    return (0, ea.jsx)("button", { ...e, type: "button", ref: t, tabIndex: -1, style: eF });
});
function eK(e) {
    let {
            context: t,
            children: r,
            disabled: a = !1,
            order: i = ["content"],
            guards: o = !0,
            initialFocus: l = 0,
            returnFocus: u = !0,
            restoreFocus: c = !1,
            modal: d = !0,
            visuallyHiddenDismiss: f = !1,
            closeOnFocusOut: p = !0,
            outsideElementsInert: h = !1,
            getInsideElements: m = () => [],
        } = e,
        {
            open: _,
            onOpenChange: g,
            events: v,
            dataRef: b,
            elements: { domReference: y, floating: E },
        } = t,
        S = X(() => {
            var e;
            return null == (e = b.current.floatingContext) ? void 0 : e.nodeId;
        }),
        T = X(m),
        x = "number" == typeof l && l < 0,
        w = V(y) && x,
        C = "u" > typeof HTMLElement && "inert" in HTMLElement.prototype,
        D = !C || o,
        O = !D || (C && h),
        A = K(i),
        R = K(l),
        N = K(u),
        P = n.useContext(e_),
        U = eV(),
        q = n.useRef(null),
        Q = n.useRef(null),
        J = n.useRef(!1),
        en = n.useRef(!1),
        es = n.useRef(-1),
        ei = n.useRef(-1),
        eo = null != U,
        el = H(E),
        eu = X(function (e) {
            return void 0 === e && (e = el), e ? M(e, Z()) : [];
        }),
        ec = X((e) => {
            let t = eu(e);
            return A.current
                .map((e) => (y && "reference" === e ? y : el && "floating" === e ? el : t))
                .filter(Boolean)
                .flat();
        });
    n.useEffect(() => {
        if (a || !d) return;
        function e(e) {
            if ("Tab" === e.key) {
                B(el, F(j(el))) && 0 === eu().length && !w && W(e);
                let t = ec(),
                    r = Y(e);
                "reference" === A.current[0] && r === y && (W(e), e.shiftKey ? eO(t[t.length - 1]) : eO(t[1])),
                    "floating" === A.current[1] && r === el && e.shiftKey && (W(e), eO(t[0]));
            }
        }
        let t = j(el);
        return (
            t.addEventListener("keydown", e),
            () => {
                t.removeEventListener("keydown", e);
            }
        );
    }, [a, y, el, d, A, w, eu, ec]),
        n.useEffect(() => {
            if (!a && E)
                return (
                    E.addEventListener("focusin", e),
                    () => {
                        E.removeEventListener("focusin", e);
                    }
                );
            function e(e) {
                let t = Y(e),
                    r = eu().indexOf(t);
                -1 !== r && (es.current = r);
            }
        }, [a, E, eu]),
        n.useEffect(() => {
            if (a || !p) return;
            function e() {
                (en.current = !0),
                    setTimeout(() => {
                        en.current = !1;
                    });
            }
            function t(e) {
                let t = e.relatedTarget,
                    r = e.currentTarget,
                    n = Y(e);
                queueMicrotask(() => {
                    let a = S(),
                        i = !(
                            B(y, t) ||
                            B(E, t) ||
                            B(t, E) ||
                            B(null == U ? void 0 : U.portalNode, t) ||
                            (null != t && t.hasAttribute(eE("focus-guard"))) ||
                            (P &&
                                (G(P.nodesRef.current, a).find((e) => {
                                    var r, n;
                                    return (
                                        B(null == (r = e.context) ? void 0 : r.elements.floating, t) ||
                                        B(null == (n = e.context) ? void 0 : n.elements.domReference, t)
                                    );
                                }) ||
                                    z(P.nodesRef.current, a).find((e) => {
                                        var r, n, a;
                                        return (
                                            [
                                                null == (r = e.context) ? void 0 : r.elements.floating,
                                                H(null == (n = e.context) ? void 0 : n.elements.floating),
                                            ].includes(t) ||
                                            (null == (a = e.context) ? void 0 : a.elements.domReference) === t
                                        );
                                    })))
                        );
                    if (
                        (r === y && el && eq(el, A),
                        c && r !== y && !(null != n && n.isConnected) && F(j(el)) === j(el).body)
                    ) {
                        (0, s.sb)(el) && el.focus();
                        let e = es.current,
                            t = eu(),
                            r = t[e] || t[t.length - 1] || el;
                        (0, s.sb)(r) && r.focus();
                    }
                    if (b.current.insideReactTree) {
                        b.current.insideReactTree = !1;
                        return;
                    }
                    (w || !d) && t && i && !en.current && t !== eW() && ((J.current = !0), g(!1, e, "focus-out"));
                });
            }
            let r = !!(!P && U);
            function n() {
                eS(ei),
                    (b.current.insideReactTree = !0),
                    (ei.current = window.setTimeout(() => {
                        b.current.insideReactTree = !1;
                    }));
            }
            if (E && (0, s.sb)(y))
                return (
                    y.addEventListener("focusout", t),
                    y.addEventListener("pointerdown", e),
                    E.addEventListener("focusout", t),
                    r && E.addEventListener("focusout", n, !0),
                    () => {
                        y.removeEventListener("focusout", t),
                            y.removeEventListener("pointerdown", e),
                            E.removeEventListener("focusout", t),
                            r && E.removeEventListener("focusout", n, !0);
                    }
                );
        }, [a, y, E, el, d, P, U, g, p, c, eu, w, S, A, b]);
    let ed = n.useRef(null),
        ef = n.useRef(null),
        ep = eH([ed, null == U ? void 0 : U.beforeInsideRef]),
        eh = eH([ef, null == U ? void 0 : U.afterInsideRef]);
    function em(e) {
        return !a && f && d
            ? (0, ea.jsx)(e$, {
                  ref: "start" === e ? q : Q,
                  onClick: (e) => g(!1, e.nativeEvent),
                  children: "string" == typeof f ? f : "Dismiss",
              })
            : null;
    }
    n.useEffect(() => {
        var e, t;
        if (a || !E) return;
        let r = Array.from(
                (null == U || null == (e = U.portalNode) ? void 0 : e.querySelectorAll("[" + eE("portal") + "]")) || [],
            ),
            n = [
                E,
                null ==
                    (t = (P ? z(P.nodesRef.current, S()) : []).find((e) => {
                        var t;
                        return V((null == (t = e.context) ? void 0 : t.elements.domReference) || null);
                    })) || null == (t = t.context)
                    ? void 0
                    : t.elements.domReference,
                ...r,
                ...T(),
                q.current,
                Q.current,
                ed.current,
                ef.current,
                null == U ? void 0 : U.beforeOutsideRef.current,
                null == U ? void 0 : U.afterOutsideRef.current,
                A.current.includes("reference") || w ? y : null,
            ].filter((e) => null != e),
            s = d || w ? eP(n, !O, O) : eP(n);
        return () => {
            s();
        };
    }, [a, y, E, d, A, U, w, D, O, P, S, T]),
        $(() => {
            if (a || !(0, s.sb)(el)) return;
            let e = F(j(el));
            queueMicrotask(() => {
                let t = ec(el),
                    r = R.current,
                    n = ("number" == typeof r ? t[r] : r.current) || el,
                    a = B(el, e);
                x || a || !_ || eO(n, { preventScroll: n === el });
            });
        }, [a, _, el, x, ec, R]),
        $(() => {
            var e;
            if (a || !el) return;
            let t = j(el);
            function r(e) {
                let { reason: t, event: r, nested: n } = e;
                if (
                    (["hover", "safe-polygon"].includes(t) && "mouseleave" === r.type && (J.current = !0),
                    "outside-press" === t)
                )
                    if (n) J.current = !1;
                    else if (
                        (0 === r.mozInputSource && r.isTrusted) ||
                        (I() && r.pointerType
                            ? "click" === r.type && 1 === r.buttons
                            : 0 === r.detail && !r.pointerType) ||
                        (!L().includes("jsdom/") &&
                            ((!I() && 0 === r.width && 0 === r.height) ||
                                (I() &&
                                    1 === r.width &&
                                    1 === r.height &&
                                    0 === r.pressure &&
                                    0 === r.detail &&
                                    "mouse" === r.pointerType) ||
                                (r.width < 1 &&
                                    r.height < 1 &&
                                    0 === r.pressure &&
                                    0 === r.detail &&
                                    "touch" === r.pointerType)))
                    )
                        J.current = !1;
                    else {
                        let e = !1;
                        document.createElement("div").focus({
                            get preventScroll() {
                                return (e = !0), !1;
                            },
                        }),
                            e ? (J.current = !1) : (J.current = !0);
                    }
            }
            (e = F(t)),
                ez(),
                e && "body" !== (0, s.mq)(e) && (eG.push(e), eG.length > 20 && (eG = eG.slice(-20))),
                v.on("openchange", r);
            let n = t.createElement("span");
            return (
                n.setAttribute("tabindex", "-1"),
                n.setAttribute("aria-hidden", "true"),
                Object.assign(n.style, eF),
                eo && y && y.insertAdjacentElement("afterend", n),
                () => {
                    v.off("openchange", r);
                    let e = F(t),
                        a =
                            B(E, e) ||
                            (P &&
                                G(P.nodesRef.current, S(), !1).some((t) => {
                                    var r;
                                    return B(null == (r = t.context) ? void 0 : r.elements.floating, e);
                                })),
                        i = (function () {
                            if ("boolean" == typeof N.current) {
                                let e = y || eW();
                                return e && e.isConnected ? e : n;
                            }
                            return N.current.current || n;
                        })();
                    queueMicrotask(() => {
                        let r,
                            o = k(i, (r = Z())) ? i : M(i, r)[0] || i;
                        N.current &&
                            !J.current &&
                            (0, s.sb)(o) &&
                            (o === e || e === t.body || a) &&
                            o.focus({ preventScroll: !0 }),
                            n.remove();
                    });
                }
            );
        }, [a, E, el, N, b, v, P, eo, y, S]),
        n.useEffect(
            () => (
                queueMicrotask(() => {
                    J.current = !1;
                }),
                () => {
                    queueMicrotask(ez);
                }
            ),
            [a],
        ),
        $(() => {
            if (!a && U)
                return (
                    U.setFocusManagerState({ modal: d, closeOnFocusOut: p, open: _, onOpenChange: g, domReference: y }),
                    () => {
                        U.setFocusManagerState(null);
                    }
                );
        }, [a, U, d, _, g, p, y]),
        $(() => {
            a || (el && eq(el, A));
        }, [a, el, A]);
    let eg = !a && D && (!d || !w) && (eo || d);
    return (0, ea.jsxs)(ea.Fragment, {
        children: [
            eg &&
                (0, ea.jsx)(eB, {
                    "data-type": "inside",
                    ref: ep,
                    onFocus: (e) => {
                        if (d) {
                            let e = ec();
                            eO("reference" === i[0] ? e[0] : e[e.length - 1]);
                        } else if (null != U && U.preserveTabOrder && U.portalNode)
                            if (((J.current = !1), er(e, U.portalNode))) {
                                let e = ee(y);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = U.beforeOutsideRef.current) || t.focus();
                            }
                    },
                }),
            !w && em("start"),
            r,
            em("end"),
            eg &&
                (0, ea.jsx)(eB, {
                    "data-type": "inside",
                    ref: eh,
                    onFocus: (e) => {
                        if (d) eO(ec()[0]);
                        else if (null != U && U.preserveTabOrder && U.portalNode)
                            if ((p && (J.current = !0), er(e, U.portalNode))) {
                                let e = et(y);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = U.afterOutsideRef.current) || t.focus();
                            }
                    },
                }),
        ],
    });
}
let eQ = 0,
    eX = "--floating-ui-scrollbar-width",
    eZ = () => {},
    eJ = n.forwardRef(function (e, t) {
        let { lockScroll: r = !1, ...n } = e;
        return (
            $(() => {
                if (r)
                    return (
                        1 == ++eQ &&
                            (eZ = (function () {
                                let e = N(),
                                    t =
                                        /iP(hone|ad|od)|iOS/.test(e) ||
                                        ("MacIntel" === e && navigator.maxTouchPoints > 1),
                                    r = document.body.style,
                                    n =
                                        Math.round(document.documentElement.getBoundingClientRect().left) +
                                        document.documentElement.scrollLeft
                                            ? "paddingLeft"
                                            : "paddingRight",
                                    a = window.innerWidth - document.documentElement.clientWidth,
                                    s = r.left ? parseFloat(r.left) : window.scrollX,
                                    i = r.top ? parseFloat(r.top) : window.scrollY;
                                if (((r.overflow = "hidden"), r.setProperty(eX, a + "px"), a && (r[n] = a + "px"), t)) {
                                    var o, l;
                                    let e = (null == (o = window.visualViewport) ? void 0 : o.offsetLeft) || 0;
                                    Object.assign(r, {
                                        position: "fixed",
                                        top:
                                            -(
                                                i -
                                                Math.floor(
                                                    (null == (l = window.visualViewport) ? void 0 : l.offsetTop) || 0,
                                                )
                                            ) + "px",
                                        left: -(s - Math.floor(e)) + "px",
                                        right: "0",
                                    });
                                }
                                return () => {
                                    Object.assign(r, { overflow: "", [n]: "" }),
                                        r.removeProperty(eX),
                                        t &&
                                            (Object.assign(r, { position: "", top: "", left: "", right: "" }),
                                            window.scrollTo(s, i));
                                };
                            })()),
                        () => {
                            0 == --eQ && eZ();
                        }
                    );
            }, [r]),
            (0, ea.jsx)("div", {
                ref: t,
                ...n,
                style: { position: "fixed", overflow: "auto", top: 0, right: 0, bottom: 0, left: 0, ...n.style },
            })
        );
    }),
    e0 = { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
    e1 = { pointerdown: "onPointerDownCapture", mousedown: "onMouseDownCapture", click: "onClickCapture" },
    e2 = (e) => {
        var t, r;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (r = null == e ? void 0 : e.outsidePress) || r,
        };
    };
function e3(e, t) {
    void 0 === t && (t = {});
    let { open: r, onOpenChange: a, elements: i, dataRef: o } = e,
        {
            enabled: l = !0,
            escapeKey: u = !0,
            outsidePress: c = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: f = !1,
            referencePressEvent: p = "pointerdown",
            ancestorScroll: h = !1,
            bubbles: m,
            capture: _,
        } = t,
        g = n.useContext(e_),
        v = X("function" == typeof c ? c : () => !1),
        b = "function" == typeof c ? v : c,
        y = n.useRef(!1),
        { escapeKey: E, outsidePress: S } = e2(m),
        { escapeKey: T, outsidePress: x } = e2(_),
        w = n.useRef(!1),
        C = X((e) => {
            var t;
            if (!r || !l || !u || "Escape" !== e.key || w.current) return;
            let n = null == (t = o.current.floatingContext) ? void 0 : t.nodeId,
                s = g ? G(g.nodesRef.current, n) : [];
            if (!E && (e.stopPropagation(), s.length > 0)) {
                let e = !0;
                if (
                    (s.forEach((t) => {
                        var r;
                        if (null != (r = t.context) && r.open && !t.context.dataRef.current.__escapeKeyBubbles) {
                            e = !1;
                            return;
                        }
                    }),
                    !e)
                )
                    return;
            }
            a(!1, "nativeEvent" in e ? e.nativeEvent : e, "escape-key");
        }),
        D = X((e) => {
            var t;
            let r = () => {
                var t;
                C(e), null == (t = Y(e)) || t.removeEventListener("keydown", r);
            };
            null == (t = Y(e)) || t.addEventListener("keydown", r);
        }),
        O = X((e) => {
            var t;
            let r = o.current.insideReactTree;
            o.current.insideReactTree = !1;
            let n = y.current;
            if (((y.current = !1), ("click" === d && n) || r || ("function" == typeof b && !b(e)))) return;
            let l = Y(e),
                u = "[" + eE("inert") + "]",
                c = j(i.floating).querySelectorAll(u),
                f = (0, s.vq)(l) ? l : null;
            for (; f && !(0, s.eu)(f); ) {
                let e = (0, s.$4)(f);
                if ((0, s.eu)(e) || !(0, s.vq)(e)) break;
                f = e;
            }
            if (
                c.length &&
                (0, s.vq)(l) &&
                !l.matches("html,body") &&
                !B(l, i.floating) &&
                Array.from(c).every((e) => !B(f, e))
            )
                return;
            if ((0, s.sb)(l) && R) {
                let t = (0, s.eu)(l),
                    r = (0, s.L9)(l),
                    n = /auto|scroll/,
                    a = t || n.test(r.overflowX),
                    i = t || n.test(r.overflowY),
                    o = a && l.clientWidth > 0 && l.scrollWidth > l.clientWidth,
                    u = i && l.clientHeight > 0 && l.scrollHeight > l.clientHeight,
                    c = "rtl" === r.direction,
                    d = u && (c ? e.offsetX <= l.offsetWidth - l.clientWidth : e.offsetX > l.clientWidth),
                    f = o && e.offsetY > l.clientHeight;
                if (d || f) return;
            }
            let p = null == (t = o.current.floatingContext) ? void 0 : t.nodeId,
                h =
                    g &&
                    G(g.nodesRef.current, p).some((t) => {
                        var r;
                        return U(e, null == (r = t.context) ? void 0 : r.elements.floating);
                    });
            if (U(e, i.floating) || U(e, i.domReference) || h) return;
            let m = g ? G(g.nodesRef.current, p) : [];
            if (m.length > 0) {
                let e = !0;
                if (
                    (m.forEach((t) => {
                        var r;
                        if (null != (r = t.context) && r.open && !t.context.dataRef.current.__outsidePressBubbles) {
                            e = !1;
                            return;
                        }
                    }),
                    !e)
                )
                    return;
            }
            a(!1, e, "outside-press");
        }),
        A = X((e) => {
            var t;
            let r = () => {
                var t;
                O(e), null == (t = Y(e)) || t.removeEventListener(d, r);
            };
            null == (t = Y(e)) || t.addEventListener(d, r);
        });
    n.useEffect(() => {
        if (!r || !l) return;
        (o.current.__escapeKeyBubbles = E), (o.current.__outsidePressBubbles = S);
        let e = -1;
        function t(e) {
            a(!1, e, "ancestor-scroll");
        }
        function n() {
            window.clearTimeout(e), (w.current = !0);
        }
        function c() {
            e = window.setTimeout(
                () => {
                    w.current = !1;
                },
                5 * !!(0, s.Tc)(),
            );
        }
        let f = j(i.floating);
        u &&
            (f.addEventListener("keydown", T ? D : C, T),
            f.addEventListener("compositionstart", n),
            f.addEventListener("compositionend", c)),
            b && f.addEventListener(d, x ? A : O, x);
        let p = [];
        return (
            h &&
                ((0, s.vq)(i.domReference) && (p = (0, s.v9)(i.domReference)),
                (0, s.vq)(i.floating) && (p = p.concat((0, s.v9)(i.floating))),
                !(0, s.vq)(i.reference) &&
                    i.reference &&
                    i.reference.contextElement &&
                    (p = p.concat((0, s.v9)(i.reference.contextElement)))),
            (p = p.filter((e) => {
                var t;
                return e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport);
            })).forEach((e) => {
                e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
                u &&
                    (f.removeEventListener("keydown", T ? D : C, T),
                    f.removeEventListener("compositionstart", n),
                    f.removeEventListener("compositionend", c)),
                    b && f.removeEventListener(d, x ? A : O, x),
                    p.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [o, i, u, b, d, r, a, h, l, E, S, C, T, D, O, x, A]),
        n.useEffect(() => {
            o.current.insideReactTree = !1;
        }, [o, b, d]);
    let M = n.useMemo(
            () => ({
                onKeyDown: C,
                ...(f && {
                    [e0[p]]: (e) => {
                        a(!1, e.nativeEvent, "reference-press");
                    },
                    ...("click" !== p && {
                        onClick(e) {
                            a(!1, e.nativeEvent, "reference-press");
                        },
                    }),
                }),
            }),
            [C, a, f, p],
        ),
        R = n.useMemo(
            () => ({
                onKeyDown: C,
                onMouseDown() {
                    y.current = !0;
                },
                onMouseUp() {
                    y.current = !0;
                },
                [e1[d]]: () => {
                    o.current.insideReactTree = !0;
                },
            }),
            [C, d, o],
        );
    return n.useMemo(() => (l ? { reference: M, floating: R } : {}), [l, M, R]);
}
function e4(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        r = (function (e) {
            let { open: t = !1, onOpenChange: r, elements: a } = e,
                s = ep(),
                i = n.useRef({}),
                [o] = n.useState(() => eh()),
                l = null != eg(),
                [u, c] = n.useState(a.reference),
                d = X((e, t, n) => {
                    (i.current.openEvent = e ? t : void 0),
                        o.emit("openchange", { open: e, event: t, reason: n, nested: l }),
                        null == r || r(e, t, n);
                }),
                f = n.useMemo(() => ({ setPositionReference: c }), []),
                p = n.useMemo(
                    () => ({
                        reference: u || a.reference || null,
                        floating: a.floating || null,
                        domReference: a.reference,
                    }),
                    [u, a.reference, a.floating],
                );
            return n.useMemo(
                () => ({ dataRef: i, open: t, onOpenChange: d, elements: p, events: o, floatingId: s, refs: f }),
                [t, d, p, o, s, f],
            );
        })({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
        a = e.rootContext || r,
        i = a.elements,
        [o, l] = n.useState(null),
        [u, c] = n.useState(null),
        d = (null == i ? void 0 : i.domReference) || o,
        f = n.useRef(null),
        p = n.useContext(e_);
    $(() => {
        d && (f.current = d);
    }, [d]);
    let h = (0, ei.we)({ ...e, elements: { ...i, ...(u && { reference: u }) } }),
        m = n.useCallback(
            (e) => {
                let t = (0, s.vq)(e)
                    ? {
                          getBoundingClientRect: () => e.getBoundingClientRect(),
                          getClientRects: () => e.getClientRects(),
                          contextElement: e,
                      }
                    : e;
                c(t), h.refs.setReference(t);
            },
            [h.refs],
        ),
        _ = n.useCallback(
            (e) => {
                ((0, s.vq)(e) || null === e) && ((f.current = e), l(e)),
                    ((0, s.vq)(h.refs.reference.current) ||
                        null === h.refs.reference.current ||
                        (null !== e && !(0, s.vq)(e))) &&
                        h.refs.setReference(e);
            },
            [h.refs],
        ),
        g = n.useMemo(() => ({ ...h.refs, setReference: _, setPositionReference: m, domReference: f }), [h.refs, _, m]),
        v = n.useMemo(() => ({ ...h.elements, domReference: d }), [h.elements, d]),
        b = n.useMemo(() => ({ ...h, ...a, refs: g, elements: v, nodeId: t }), [h, g, v, t, a]);
    return (
        $(() => {
            a.dataRef.current.floatingContext = b;
            let e = null == p ? void 0 : p.nodesRef.current.find((e) => e.id === t);
            e && (e.context = b);
        }),
        n.useMemo(() => ({ ...h, context: b, refs: g, elements: v }), [h, g, v, b])
    );
}
function e6(e, t, r) {
    let n = new Map(),
        a = "item" === r,
        s = e;
    if (a && e) {
        let { [eo]: t, [el]: r, ...n } = e;
        s = n;
    }
    return {
        ...("floating" === r && { tabIndex: -1, "data-floating-ui-focusable": "" }),
        ...s,
        ...t
            .map((t) => {
                let n = t ? t[r] : null;
                return "function" == typeof n ? (e ? n(e) : null) : n;
            })
            .concat(e)
            .reduce(
                (e, t) => (
                    t &&
                        Object.entries(t).forEach((t) => {
                            let [r, s] = t;
                            if (!(a && [eo, el].includes(r)))
                                if (0 === r.indexOf("on")) {
                                    if ((n.has(r) || n.set(r, []), "function" == typeof s)) {
                                        var i;
                                        null == (i = n.get(r)) || i.push(s),
                                            (e[r] = function () {
                                                for (var e, t = arguments.length, a = Array(t), s = 0; s < t; s++)
                                                    a[s] = arguments[s];
                                                return null == (e = n.get(r))
                                                    ? void 0
                                                    : e.map((e) => e(...a)).find((e) => void 0 !== e);
                                            });
                                    }
                                } else e[r] = s;
                        }),
                    e
                ),
                {},
            ),
    };
}
function e5(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        r = e.map((e) => (null == e ? void 0 : e.floating)),
        a = e.map((e) => (null == e ? void 0 : e.item)),
        s = n.useCallback((t) => e6(t, e, "reference"), t),
        i = n.useCallback((t) => e6(t, e, "floating"), r),
        o = n.useCallback((t) => e6(t, e, "item"), a);
    return n.useMemo(() => ({ getReferenceProps: s, getFloatingProps: i, getItemProps: o }), [s, i, o]);
}
let e8 = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function e9(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function e7(e, t) {
    void 0 === t && (t = {});
    let { initial: r = { opacity: 0 }, open: a, close: s, common: i, duration: o = 250 } = t,
        l = e.placement,
        u = l.split("-")[0],
        c = n.useMemo(() => ({ side: u, placement: l }), [u, l]),
        d = "number" == typeof o,
        f = (d ? o : o.open) || 0,
        p = (d ? o : o.close) || 0,
        [h, m] = n.useState(() => ({ ...e9(i, c), ...e9(r, c) })),
        { isMounted: _, status: g } = (function (e, t) {
            void 0 === t && (t = {});
            let {
                    open: r,
                    elements: { floating: a },
                } = e,
                { duration: s = 250 } = t,
                i = ("number" == typeof s ? s : s.close) || 0,
                [o, l] = n.useState("unmounted"),
                u = (function (e, t) {
                    let [r, a] = n.useState(e);
                    return (
                        e && !r && a(!0),
                        n.useEffect(() => {
                            if (!e && r) {
                                let e = setTimeout(() => a(!1), t);
                                return () => clearTimeout(e);
                            }
                        }, [e, r, t]),
                        r
                    );
                })(r, i);
            return (
                u || "close" !== o || l("unmounted"),
                $(() => {
                    if (a) {
                        if (r) {
                            l("initial");
                            let e = requestAnimationFrame(() => {
                                es.flushSync(() => {
                                    l("open");
                                });
                            });
                            return () => {
                                cancelAnimationFrame(e);
                            };
                        }
                        l("close");
                    }
                }, [r, a]),
                { isMounted: u, status: o }
            );
        })(e, { duration: o }),
        v = K(r),
        b = K(a),
        y = K(s),
        E = K(i);
    return (
        $(() => {
            let e = e9(v.current, c),
                t = e9(y.current, c),
                r = e9(E.current, c),
                n = e9(b.current, c) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
            if (
                ("initial" === g && m((t) => ({ transitionProperty: t.transitionProperty, ...r, ...e })),
                "open" === g &&
                    m({
                        transitionProperty: Object.keys(n).map(e8).join(","),
                        transitionDuration: f + "ms",
                        ...r,
                        ...n,
                    }),
                "close" === g)
            ) {
                let n = t || e;
                m({ transitionProperty: Object.keys(n).map(e8).join(","), transitionDuration: p + "ms", ...r, ...n });
            }
        }, [p, y, v, b, E, f, g, c]),
        { isMounted: _, styles: h }
    );
}
function te(e, t) {
    let [r, n] = e,
        a = !1,
        s = t.length;
    for (let e = 0, i = s - 1; e < s; i = e++) {
        let [s, o] = t[e] || [0, 0],
            [l, u] = t[i] || [0, 0];
        o >= n != u >= n && r <= ((l - s) * (n - o)) / (u - o) + s && (a = !a);
    }
    return a;
}
function tt(e) {
    void 0 === e && (e = {});
    let { buffer: t = 0.5, blockPointerEvents: r = !1, requireIntent: n = !0 } = e,
        a = { current: -1 },
        i = !1,
        o = null,
        l = null,
        u = "u" > typeof performance ? performance.now() : 0,
        c = (e) => {
            let { x: r, y: c, placement: d, elements: f, onClose: p, nodeId: h, tree: m } = e;
            return function (e) {
                function _() {
                    eS(a), p();
                }
                if ((eS(a), !f.domReference || !f.floating || null == d || null == r || null == c)) return;
                let { clientX: g, clientY: v } = e,
                    b = [g, v],
                    y = "composedPath" in e ? e.composedPath()[0] : e.target,
                    E = "mouseleave" === e.type,
                    S = eA(f.floating, y),
                    T = eA(f.domReference, y),
                    x = f.domReference.getBoundingClientRect(),
                    w = f.floating.getBoundingClientRect(),
                    C = d.split("-")[0],
                    D = r > w.right - w.width / 2,
                    O = c > w.bottom - w.height / 2,
                    A = b[0] >= x.x && b[0] <= x.x + x.width && b[1] >= x.y && b[1] <= x.y + x.height,
                    M = w.width > x.width,
                    R = w.height > x.height,
                    k = (M ? x : w).left,
                    N = (M ? x : w).right,
                    L = (R ? x : w).top,
                    I = (R ? x : w).bottom;
                if (S && ((i = !0), !E)) return;
                if ((T && (i = !1), T && !E)) {
                    i = !0;
                    return;
                }
                if (
                    (E && (0, s.vq)(e.relatedTarget) && eA(f.floating, e.relatedTarget)) ||
                    (m &&
                        (function e(t, r, n) {
                            return (
                                void 0 === n && (n = !0),
                                t
                                    .filter((e) => {
                                        var t;
                                        return e.parentId === r && (!n || (null == (t = e.context) ? void 0 : t.open));
                                    })
                                    .flatMap((r) => [r, ...e(t, r.id, n)])
                            );
                        })(m.nodesRef.current, h).length)
                )
                    return;
                if (
                    ("top" === C && c >= x.bottom - 1) ||
                    ("bottom" === C && c <= x.top + 1) ||
                    ("left" === C && r >= x.right - 1) ||
                    ("right" === C && r <= x.left + 1)
                )
                    return _();
                let P = [];
                switch (C) {
                    case "top":
                        P = [
                            [k, x.top + 1],
                            [k, w.bottom - 1],
                            [N, w.bottom - 1],
                            [N, x.top + 1],
                        ];
                        break;
                    case "bottom":
                        P = [
                            [k, w.top + 1],
                            [k, x.bottom - 1],
                            [N, x.bottom - 1],
                            [N, w.top + 1],
                        ];
                        break;
                    case "left":
                        P = [
                            [w.right - 1, I],
                            [w.right - 1, L],
                            [x.left + 1, L],
                            [x.left + 1, I],
                        ];
                        break;
                    case "right":
                        P = [
                            [x.right - 1, I],
                            [x.right - 1, L],
                            [w.left + 1, L],
                            [w.left + 1, I],
                        ];
                }
                if (!te([g, v], P)) {
                    if (i && !A) return _();
                    if (!E && n) {
                        let t = (function (e, t) {
                            let r = performance.now(),
                                n = r - u;
                            if (null === o || null === l || 0 === n) return (o = e), (l = t), (u = r), null;
                            let a = e - o,
                                s = t - l,
                                i = Math.sqrt(a * a + s * s);
                            return (o = e), (l = t), (u = r), i / n;
                        })(e.clientX, e.clientY);
                        if (null !== t && t < 0.1) return _();
                    }
                    te(
                        [g, v],
                        (function (e) {
                            let [r, n] = e;
                            switch (C) {
                                case "top": {
                                    let e = [
                                        [w.left, D || M ? w.bottom - t : w.top],
                                        [w.right, D ? (M ? w.bottom - t : w.top) : w.bottom - t],
                                    ];
                                    return [
                                        [M ? r + t / 2 : D ? r + 4 * t : r - 4 * t, n + t + 1],
                                        [M ? r - t / 2 : D ? r + 4 * t : r - 4 * t, n + t + 1],
                                        ...e,
                                    ];
                                }
                                case "bottom": {
                                    let e = [
                                        [w.left, D || M ? w.top + t : w.bottom],
                                        [w.right, D ? (M ? w.top + t : w.bottom) : w.top + t],
                                    ];
                                    return [
                                        [M ? r + t / 2 : D ? r + 4 * t : r - 4 * t, n - t],
                                        [M ? r - t / 2 : D ? r + 4 * t : r - 4 * t, n - t],
                                        ...e,
                                    ];
                                }
                                case "left":
                                    return [
                                        [O || R ? w.right - t : w.left, w.top],
                                        [O ? (R ? w.right - t : w.left) : w.right - t, w.bottom],
                                        [r + t + 1, R ? n + t / 2 : O ? n + 4 * t : n - 4 * t],
                                        [r + t + 1, R ? n - t / 2 : O ? n + 4 * t : n - 4 * t],
                                    ];
                                case "right": {
                                    let e = [
                                        [O || R ? w.left + t : w.right, w.top],
                                        [O ? (R ? w.left + t : w.right) : w.left + t, w.bottom],
                                    ];
                                    return [
                                        [r - t, R ? n + t / 2 : O ? n + 4 * t : n - 4 * t],
                                        [r - t, R ? n - t / 2 : O ? n + 4 * t : n - 4 * t],
                                        ...e,
                                    ];
                                }
                            }
                        })([r, c]),
                    )
                        ? !i && n && (a.current = window.setTimeout(_, 40))
                        : _();
                }
            };
        };
    return (c.__options = { blockPointerEvents: r }), c;
}
