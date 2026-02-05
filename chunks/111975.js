"use strict";
n.d(t, { Kr: () => D });
var r =
        'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
    i = "u" < typeof Element,
    a = i
        ? function () {}
        : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    s =
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
        return t && a.call(e, r) && i.unshift(e), (i = i.filter(n));
    },
    c = function e(t, n, i) {
        for (var s = [], l = Array.from(t); l.length; ) {
            var u = l.shift();
            if (!o(u, !1))
                if ("SLOT" === u.tagName) {
                    var c = u.assignedElements(),
                        d = e(c.length ? c : u.children, !0, i);
                    i.flatten ? s.push.apply(s, d) : s.push({ scopeParent: u, candidates: d });
                } else {
                    a.call(u, r) && i.filter(u) && (n || !t.includes(u)) && s.push(u);
                    var _ = u.shadowRoot || ("function" == typeof i.getShadowRoot && i.getShadowRoot(u)),
                        f = !o(_, !1) && (!i.shadowRootFilter || i.shadowRootFilter(u));
                    if (_ && f) {
                        var p = e(!0 === _ ? u.children : _.children, !0, i);
                        i.flatten ? s.push.apply(s, p) : s.push({ scopeParent: u, candidates: p });
                    } else l.unshift.apply(l, u.children);
                }
        }
        return s;
    },
    d = function (e) {
        return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
    },
    _ = function (e) {
        if (!e) throw Error("No node provided");
        return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || l(e)) && !d(e) ? 0 : e.tabIndex;
    },
    f = function (e, t) {
        var n = _(e);
        return n < 0 && t && !d(e) ? 0 : n;
    },
    p = function (e, t) {
        return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
    },
    h = function (e) {
        return "INPUT" === e.tagName;
    },
    m = function (e) {
        return h(e) && "hidden" === e.type;
    },
    g = function (e) {
        return (
            "DETAILS" === e.tagName &&
            Array.prototype.slice.apply(e.children).some(function (e) {
                return "SUMMARY" === e.tagName;
            })
        );
    },
    E = function (e, t) {
        for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
    },
    A = function (e) {
        if (!e.name) return !0;
        var t,
            n = e.form || s(e),
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
        var i = E(t, e.form);
        return !i || i === e;
    },
    I = function (e) {
        return h(e) && "radio" === e.type;
    },
    T = function (e) {
        return I(e) && !A(e);
    },
    y = function (e) {
        var t,
            n,
            r,
            i,
            a,
            o,
            l,
            u = e && s(e),
            c = null == (t = u) ? void 0 : t.host,
            d = !1;
        if (u && u !== e)
            for (
                d = !!(
                    (null != (n = c) && null != (r = n.ownerDocument) && r.contains(c)) ||
                    (null != e && null != (i = e.ownerDocument) && i.contains(e))
                );
                !d && c;
            )
                d = !!(
                    null != (o = c = null == (a = u = s(c)) ? void 0 : a.host) &&
                    null != (l = o.ownerDocument) &&
                    l.contains(c)
                );
        return d;
    },
    S = function (e) {
        var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
        return 0 === n && 0 === r;
    },
    v = function (e, t) {
        var n = t.displayCheck,
            r = t.getShadowRoot;
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        var i = a.call(e, "details>summary:first-of-type") ? e.parentElement : e;
        if (a.call(i, "details:not([open]) *")) return !0;
        if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return S(e);
        } else {
            if ("function" == typeof r) {
                for (var o = e; e; ) {
                    var l = e.parentElement,
                        u = s(e);
                    if (l && !l.shadowRoot && !0 === r(l)) return S(e);
                    e = e.assignedSlot ? e.assignedSlot : l || u === e.ownerDocument ? l : u.host;
                }
                e = o;
            }
            if (y(e)) return !e.getClientRects().length;
            if ("legacy-full" !== n) return !0;
        }
        return !1;
    },
    C = function (e) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
            for (var t = e.parentElement; t; ) {
                if ("FIELDSET" === t.tagName && t.disabled) {
                    for (var n = 0; n < t.children.length; n++) {
                        var r = t.children.item(n);
                        if ("LEGEND" === r.tagName) return !!a.call(t, "fieldset[disabled] *") || !r.contains(e);
                    }
                    return !0;
                }
                t = t.parentElement;
            }
        return !1;
    },
    b = function (e, t) {
        return !(t.disabled || o(t) || m(t) || v(t, e) || g(t) || C(t));
    },
    N = function (e, t) {
        return !(T(t) || 0 > _(t)) && !!b(e, t);
    },
    R = function (e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return !!isNaN(t) || !!(t >= 0);
    },
    O = function e(t) {
        var n = [],
            r = [];
        return (
            t.forEach(function (t, i) {
                var a = !!t.scopeParent,
                    s = a ? t.scopeParent : t,
                    o = f(s, a),
                    l = a ? e(t.candidates) : s;
                0 === o
                    ? a
                        ? n.push.apply(n, l)
                        : n.push(s)
                    : r.push({ documentOrder: i, tabIndex: o, item: t, isScope: a, content: l });
            }),
            r
                .sort(p)
                .reduce(function (e, t) {
                    return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
                }, [])
                .concat(n)
        );
    },
    D = function (e, t) {
        var n;
        return O(
            (n = (t = t || {}).getShadowRoot
                ? c([e], t.includeContainer, {
                      filter: N.bind(null, t),
                      flatten: !1,
                      getShadowRoot: t.getShadowRoot,
                      shadowRootFilter: R,
                  })
                : u(e, t.includeContainer, N.bind(null, t))),
        );
    };
