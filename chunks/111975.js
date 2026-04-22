"use strict";
n.d(t, { AO: () => b, Kr: () => v, nq: () => C });
var r =
        'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
    i = "u" < typeof Element,
    s = i
        ? function () {}
        : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    a =
        !i && Element.prototype.getRootNode
            ? function (e) {
                  var t;
                  return null == e || null == (t = e.getRootNode) ? void 0 : t.call(e);
              }
            : function (e) {
                  return null == e ? void 0 : e.ownerDocument;
              },
    o = function e(t, n) {
        void 0 === n && (n = !0);
        var r,
            i = null == t || null == (r = t.getAttribute) ? void 0 : r.call(t, "inert");
        return "" === i || "true" === i || (n && t && e(t.parentNode));
    },
    l = function (e) {
        var t,
            n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, "contenteditable");
        return "" === n || "true" === n;
    },
    u = function (e, t, n) {
        if (o(e)) return [];
        var i = Array.prototype.slice.apply(e.querySelectorAll(r));
        return t && s.call(e, r) && i.unshift(e), (i = i.filter(n));
    },
    d = function e(t, n, i) {
        for (var a = [], l = Array.from(t); l.length; ) {
            var u = l.shift();
            if (!o(u, !1))
                if ("SLOT" === u.tagName) {
                    var d = u.assignedElements(),
                        c = e(d.length ? d : u.children, !0, i);
                    i.flatten ? a.push.apply(a, c) : a.push({ scopeParent: u, candidates: c });
                } else {
                    s.call(u, r) && i.filter(u) && (n || !t.includes(u)) && a.push(u);
                    var _ = u.shadowRoot || ("function" == typeof i.getShadowRoot && i.getShadowRoot(u)),
                        f = !o(_, !1) && (!i.shadowRootFilter || i.shadowRootFilter(u));
                    if (_ && f) {
                        var E = e(!0 === _ ? u.children : _.children, !0, i);
                        i.flatten ? a.push.apply(a, E) : a.push({ scopeParent: u, candidates: E });
                    } else l.unshift.apply(l, u.children);
                }
        }
        return a;
    },
    c = function (e) {
        return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
    },
    _ = function (e) {
        if (!e) throw Error("No node provided");
        return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || l(e)) && !c(e) ? 0 : e.tabIndex;
    },
    f = function (e, t) {
        var n = _(e);
        return n < 0 && t && !c(e) ? 0 : n;
    },
    E = function (e, t) {
        return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
    },
    h = function (e) {
        return "INPUT" === e.tagName;
    },
    p = function (e, t) {
        for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
    },
    m = function (e) {
        if (!e.name) return !0;
        var t,
            n = e.form || a(e),
            r = function (e) {
                return n.querySelectorAll('input[type="radio"][name="' + e + '"]');
            };
        if ("u" > typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape)
            t = r(window.CSS.escape(e.name));
        else
            try {
                t = r(e.name);
            } catch (e) {
                return (
                    console.error(
                        "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                        e.message,
                    ),
                    !1
                );
            }
        var i = p(t, e.form);
        return !i || i === e;
    },
    g = function (e) {
        return h(e) && "radio" === e.type && !m(e);
    },
    A = function (e) {
        var t,
            n,
            r,
            i,
            s,
            o,
            l,
            u = e && a(e),
            d = null == (t = u) ? void 0 : t.host,
            c = !1;
        if (u && u !== e)
            for (
                c = !!(
                    (null != (n = d) && null != (r = n.ownerDocument) && r.contains(d)) ||
                    (null != e && null != (i = e.ownerDocument) && i.contains(e))
                );
                !c && d;
            )
                c = !!(
                    null != (o = d = null == (s = u = a(d)) ? void 0 : s.host) &&
                    null != (l = o.ownerDocument) &&
                    l.contains(d)
                );
        return c;
    },
    I = function (e) {
        var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
        return 0 === n && 0 === r;
    },
    T = function (e, t) {
        var n = t.displayCheck,
            r = t.getShadowRoot;
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        var i = s.call(e, "details>summary:first-of-type") ? e.parentElement : e;
        if (s.call(i, "details:not([open]) *")) return !0;
        if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return I(e);
        } else {
            if ("function" == typeof r) {
                for (var o = e; e; ) {
                    var l = e.parentElement,
                        u = a(e);
                    if (l && !l.shadowRoot && !0 === r(l)) return I(e);
                    e = e.assignedSlot ? e.assignedSlot : l || u === e.ownerDocument ? l : u.host;
                }
                e = o;
            }
            if (A(e)) return !e.getClientRects().length;
            if ("legacy-full" !== n) return !0;
        }
        return !1;
    },
    S = function (e) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
            for (var t = e.parentElement; t; ) {
                if ("FIELDSET" === t.tagName && t.disabled) {
                    for (var n = 0; n < t.children.length; n++) {
                        var r = t.children.item(n);
                        if ("LEGEND" === r.tagName) return !!s.call(t, "fieldset[disabled] *") || !r.contains(e);
                    }
                    return !0;
                }
                t = t.parentElement;
            }
        return !1;
    },
    y = function (e, t) {
        return !(
            t.disabled ||
            o(t) ||
            (h(t) && "hidden" === t.type) ||
            T(t, e) ||
            ("DETAILS" === t.tagName &&
                Array.prototype.slice.apply(t.children).some(function (e) {
                    return "SUMMARY" === e.tagName;
                })) ||
            S(t)
        );
    },
    N = function (e, t) {
        return !(g(t) || 0 > _(t)) && !!y(e, t);
    },
    O = function (e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return !!isNaN(t) || !!(t >= 0);
    },
    R = function e(t) {
        var n = [],
            r = [];
        return (
            t.forEach(function (t, i) {
                var s = !!t.scopeParent,
                    a = s ? t.scopeParent : t,
                    o = f(a, s),
                    l = s ? e(t.candidates) : a;
                0 === o
                    ? s
                        ? n.push.apply(n, l)
                        : n.push(a)
                    : r.push({ documentOrder: i, tabIndex: o, item: t, isScope: s, content: l });
            }),
            r
                .sort(E)
                .reduce(function (e, t) {
                    return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
                }, [])
                .concat(n)
        );
    },
    v = function (e, t) {
        return R(
            (t = t || {}).getShadowRoot
                ? d([e], t.includeContainer, {
                      filter: N.bind(null, t),
                      flatten: !1,
                      getShadowRoot: t.getShadowRoot,
                      shadowRootFilter: O,
                  })
                : u(e, t.includeContainer, N.bind(null, t)),
        );
    },
    C = function (e, t) {
        return (t = t || {}).getShadowRoot
            ? d([e], t.includeContainer, { filter: y.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot })
            : u(e, t.includeContainer, y.bind(null, t));
    },
    b = function (e, t) {
        if (((t = t || {}), !e)) throw Error("No node provided");
        return !1 !== s.call(e, r) && N(t, e);
    };
