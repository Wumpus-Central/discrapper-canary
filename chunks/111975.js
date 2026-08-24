"use strict";
r.d(t, { AO: () => P, Kr: () => T, nq: () => M });
var n =
        'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
    i = "u" < typeof Element,
    o = i
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
    s = function e(t, r) {
        void 0 === r && (r = !0);
        var n,
            i = null == t || null == (n = t.getAttribute) ? void 0 : n.call(t, "inert");
        return "" === i || "true" === i || (r && t && e(t.parentNode));
    },
    l = function (e) {
        var t,
            r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, "contenteditable");
        return "" === r || "true" === r;
    },
    u = function (e, t, r) {
        if (s(e)) return [];
        var i = Array.prototype.slice.apply(e.querySelectorAll(n));
        return t && o.call(e, n) && i.unshift(e), (i = i.filter(r));
    },
    c = function e(t, r, i) {
        for (var a = [], l = Array.from(t); l.length; ) {
            var u = l.shift();
            if (!s(u, !1))
                if ("SLOT" === u.tagName) {
                    var c = u.assignedElements(),
                        f = e(c.length ? c : u.children, !0, i);
                    i.flatten ? a.push.apply(a, f) : a.push({ scopeParent: u, candidates: f });
                } else {
                    o.call(u, n) && i.filter(u) && (r || !t.includes(u)) && a.push(u);
                    var d = u.shadowRoot || ("function" == typeof i.getShadowRoot && i.getShadowRoot(u)),
                        p = !s(d, !1) && (!i.shadowRootFilter || i.shadowRootFilter(u));
                    if (d && p) {
                        var h = e(!0 === d ? u.children : d.children, !0, i);
                        i.flatten ? a.push.apply(a, h) : a.push({ scopeParent: u, candidates: h });
                    } else l.unshift.apply(l, u.children);
                }
        }
        return a;
    },
    f = function (e) {
        return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
    },
    d = function (e) {
        if (!e) throw Error("No node provided");
        return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || l(e)) && !f(e) ? 0 : e.tabIndex;
    },
    p = function (e, t) {
        var r = d(e);
        return r < 0 && t && !f(e) ? 0 : r;
    },
    h = function (e, t) {
        return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
    },
    m = function (e) {
        return "INPUT" === e.tagName;
    },
    v = function (e, t) {
        for (var r = 0; r < e.length; r++) if (e[r].checked && e[r].form === t) return e[r];
    },
    y = function (e) {
        if (!e.name) return !0;
        var t,
            r = e.form || a(e),
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
        var i = v(t, e.form);
        return !i || i === e;
    },
    g = function (e) {
        return m(e) && "radio" === e.type && !y(e);
    },
    b = function (e) {
        var t,
            r,
            n,
            i,
            o,
            s,
            l,
            u = e && a(e),
            c = null == (t = u) ? void 0 : t.host,
            f = !1;
        if (u && u !== e)
            for (
                f = !!(
                    (null != (r = c) && null != (n = r.ownerDocument) && n.contains(c)) ||
                    (null != e && null != (i = e.ownerDocument) && i.contains(e))
                );
                !f && c;
            )
                f = !!(
                    null != (s = c = null == (o = u = a(c)) ? void 0 : o.host) &&
                    null != (l = s.ownerDocument) &&
                    l.contains(c)
                );
        return f;
    },
    w = function (e) {
        var t = e.getBoundingClientRect(),
            r = t.width,
            n = t.height;
        return 0 === r && 0 === n;
    },
    _ = function (e, t) {
        var r = t.displayCheck,
            n = t.getShadowRoot;
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        var i = o.call(e, "details>summary:first-of-type") ? e.parentElement : e;
        if (o.call(i, "details:not([open]) *")) return !0;
        if (r && "full" !== r && "legacy-full" !== r) {
            if ("non-zero-area" === r) return w(e);
        } else {
            if ("function" == typeof n) {
                for (var s = e; e; ) {
                    var l = e.parentElement,
                        u = a(e);
                    if (l && !l.shadowRoot && !0 === n(l)) return w(e);
                    e = e.assignedSlot ? e.assignedSlot : l || u === e.ownerDocument ? l : u.host;
                }
                e = s;
            }
            if (b(e)) return !e.getClientRects().length;
            if ("legacy-full" !== r) return !0;
        }
        return !1;
    },
    S = function (e) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
            for (var t = e.parentElement; t; ) {
                if ("FIELDSET" === t.tagName && t.disabled) {
                    for (var r = 0; r < t.children.length; r++) {
                        var n = t.children.item(r);
                        if ("LEGEND" === n.tagName) return !!o.call(t, "fieldset[disabled] *") || !n.contains(e);
                    }
                    return !0;
                }
                t = t.parentElement;
            }
        return !1;
    },
    x = function (e, t) {
        return !(
            t.disabled ||
            s(t) ||
            (m(t) && "hidden" === t.type) ||
            _(t, e) ||
            ("DETAILS" === t.tagName &&
                Array.prototype.slice.apply(t.children).some(function (e) {
                    return "SUMMARY" === e.tagName;
                })) ||
            S(t)
        );
    },
    E = function (e, t) {
        return !(g(t) || 0 > d(t)) && !!x(e, t);
    },
    k = function (e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return !!isNaN(t) || !!(t >= 0);
    },
    C = function e(t) {
        var r = [],
            n = [];
        return (
            t.forEach(function (t, i) {
                var o = !!t.scopeParent,
                    a = o ? t.scopeParent : t,
                    s = p(a, o),
                    l = o ? e(t.candidates) : a;
                0 === s
                    ? o
                        ? r.push.apply(r, l)
                        : r.push(a)
                    : n.push({ documentOrder: i, tabIndex: s, item: t, isScope: o, content: l });
            }),
            n
                .sort(h)
                .reduce(function (e, t) {
                    return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
                }, [])
                .concat(r)
        );
    },
    T = function (e, t) {
        return C(
            (t = t || {}).getShadowRoot
                ? c([e], t.includeContainer, {
                      filter: E.bind(null, t),
                      flatten: !1,
                      getShadowRoot: t.getShadowRoot,
                      shadowRootFilter: k,
                  })
                : u(e, t.includeContainer, E.bind(null, t)),
        );
    },
    M = function (e, t) {
        return (t = t || {}).getShadowRoot
            ? c([e], t.includeContainer, { filter: x.bind(null, t), flatten: !0, getShadowRoot: t.getShadowRoot })
            : u(e, t.includeContainer, x.bind(null, t));
    },
    P = function (e, t) {
        if (((t = t || {}), !e)) throw Error("No node provided");
        return !1 !== o.call(e, n) && E(t, e);
    };
