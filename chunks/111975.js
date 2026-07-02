"use strict";
n.d(t, { AO: () => b, Kr: () => R, nq: () => O });
var i =
        'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
    r = "u" < typeof Element,
    s = r
        ? function () {}
        : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    a =
        !r && Element.prototype.getRootNode
            ? function (e) {
                  var t;
                  return null == e || null == (t = e.getRootNode) ? void 0 : t.call(e);
              }
            : function (e) {
                  return null == e ? void 0 : e.ownerDocument;
              },
    o = function e(t, n) {
        void 0 === n && (n = !0);
        var i,
            r = null == t || null == (i = t.getAttribute) ? void 0 : i.call(t, "inert");
        return "" === r || "true" === r || (n && t && e(t.parentNode));
    },
    l = function (e) {
        var t,
            n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, "contenteditable");
        return "" === n || "true" === n;
    },
    u = function (e, t, n) {
        if (o(e)) return [];
        var r = Array.prototype.slice.apply(e.querySelectorAll(i));
        return t && s.call(e, i) && r.unshift(e), (r = r.filter(n));
    },
    d = function e(t, n, r) {
        for (var a = [], l = Array.from(t); l.length; ) {
            var u = l.shift();
            if (!o(u, !1))
                if ("SLOT" === u.tagName) {
                    var d = u.assignedElements(),
                        c = e(d.length ? d : u.children, !0, r);
                    r.flatten ? a.push.apply(a, c) : a.push({ scopeParent: u, candidates: c });
                } else {
                    s.call(u, i) && r.filter(u) && (n || !t.includes(u)) && a.push(u);
                    var _ = u.shadowRoot || ("function" == typeof r.getShadowRoot && r.getShadowRoot(u)),
                        h = !o(_, !1) && (!r.shadowRootFilter || r.shadowRootFilter(u));
                    if (_ && h) {
                        var f = e(!0 === _ ? u.children : _.children, !0, r);
                        r.flatten ? a.push.apply(a, f) : a.push({ scopeParent: u, candidates: f });
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
    h = function (e, t) {
        var n = _(e);
        return n < 0 && t && !c(e) ? 0 : n;
    },
    f = function (e, t) {
        return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
    },
    E = function (e) {
        return "INPUT" === e.tagName;
    },
    p = function (e, t) {
        for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
    },
    m = function (e) {
        if (!e.name) return !0;
        var t,
            n = e.form || a(e),
            i = function (e) {
                return n.querySelectorAll('input[type="radio"][name="' + e + '"]');
            };
        if ("u" > typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape)
            t = i(window.CSS.escape(e.name));
        else
            try {
                t = i(e.name);
            } catch (e) {
                return (
                    console.error(
                        "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                        e.message,
                    ),
                    !1
                );
            }
        var r = p(t, e.form);
        return !r || r === e;
    },
    g = function (e) {
        return E(e) && "radio" === e.type && !m(e);
    },
    A = function (e) {
        var t,
            n,
            i,
            r,
            s,
            o,
            l,
            u = e && a(e),
            d = null == (t = u) ? void 0 : t.host,
            c = !1;
        if (u && u !== e)
            for (
                c = !!(
                    (null != (n = d) && null != (i = n.ownerDocument) && i.contains(d)) ||
                    (null != e && null != (r = e.ownerDocument) && r.contains(e))
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
            i = t.height;
        return 0 === n && 0 === i;
    },
    T = function (e, t) {
        var n = t.displayCheck,
            i = t.getShadowRoot;
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        var r = s.call(e, "details>summary:first-of-type") ? e.parentElement : e;
        if (s.call(r, "details:not([open]) *")) return !0;
        if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return I(e);
        } else {
            if ("function" == typeof i) {
                for (var o = e; e; ) {
                    var l = e.parentElement,
                        u = a(e);
                    if (l && !l.shadowRoot && !0 === i(l)) return I(e);
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
                        var i = t.children.item(n);
                        if ("LEGEND" === i.tagName) return !!s.call(t, "fieldset[disabled] *") || !i.contains(e);
                    }
                    return !0;
                }
                t = t.parentElement;
            }
        return !1;
    },
    N = function (e, t) {
        return !(
            t.disabled ||
            o(t) ||
            (E(t) && "hidden" === t.type) ||
            T(t, e) ||
            ("DETAILS" === t.tagName &&
                Array.prototype.slice.apply(t.children).some(function (e) {
                    return "SUMMARY" === e.tagName;
                })) ||
            S(t)
        );
    },
    C = function (e, t) {
        return !(g(t) || 0 > _(t)) && !!N(e, t);
    },
    y = function (e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return !!isNaN(t) || !!(t >= 0);
    },
    v = function e(t) {
        var n = [],
            i = [];
        return (
            t.forEach(function (t, r) {
                var s = !!t.scopeParent,
                    a = s ? t.scopeParent : t,
                    o = h(a, s),
                    l = s ? e(t.candidates) : a;
                0 === o
                    ? s
                        ? n.push.apply(n, l)
                        : n.push(a)
                    : i.push({ documentOrder: r, tabIndex: o, item: t, isScope: s, content: l });
            }),
            i
                .sort(f)
                .reduce(function (e, t) {
                    return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
                }, [])
                .concat(n)
        );
    },
    R = function (e, t) {
        return v(
            (t = t || {}).getShadowRoot
                ? d([e], t.includeContainer, {
                      filter: C.bind(null, t),
                      flatten: !1,
                      getShadowRoot: t.getShadowRoot,
                      shadowRootFilter: y,
                  })
                : u(e, t.includeContainer, C.bind(null, t)),
        );
    },
    O = function (e, t) {
        return (t = t || {}).getShadowRoot
            ? d([e], t.includeContainer, { filter: N.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot })
            : u(e, t.includeContainer, N.bind(null, t));
    },
    b = function (e, t) {
        if (((t = t || {}), !e)) throw Error("No node provided");
        return !1 !== s.call(e, i) && C(t, e);
    };
