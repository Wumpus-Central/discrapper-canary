n.d(t, {
    Kr: () => w,
});
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
    c = function (e, t, n) {
        if (o(e)) return [];
        var i = Array.prototype.slice.apply(e.querySelectorAll(r));
        return t && a.call(e, r) && i.unshift(e), (i = i.filter(n));
    },
    u = function e(t, n, i) {
        for (var s = [], l = Array.from(t); l.length; ) {
            var c = l.shift();
            if (!o(c, !1))
                if ("SLOT" === c.tagName) {
                    var u = c.assignedElements(),
                        d = e(u.length ? u : c.children, !0, i);
                    i.flatten
                        ? s.push.apply(s, d)
                        : s.push({
                              scopeParent: c,
                              candidates: d,
                          });
                } else {
                    a.call(c, r) && i.filter(c) && (n || !t.includes(c)) && s.push(c);
                    var f = c.shadowRoot || ("function" == typeof i.getShadowRoot && i.getShadowRoot(c)),
                        p = !o(f, !1) && (!i.shadowRootFilter || i.shadowRootFilter(c));
                    if (f && p) {
                        var _ = e(!0 === f ? c.children : f.children, !0, i);
                        i.flatten
                            ? s.push.apply(s, _)
                            : s.push({
                                  scopeParent: c,
                                  candidates: _,
                              });
                    } else l.unshift.apply(l, c.children);
                }
        }
        return s;
    },
    d = function (e) {
        return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
    },
    f = function (e) {
        if (!e) throw Error("No node provided");
        return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || l(e)) && !d(e) ? 0 : e.tabIndex;
    },
    p = function (e, t) {
        var n = f(e);
        return n < 0 && t && !d(e) ? 0 : n;
    },
    _ = function (e, t) {
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
    b = function (e) {
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
    y = function (e) {
        return h(e) && "radio" === e.type;
    },
    O = function (e) {
        return y(e) && !b(e);
    },
    A = function (e) {
        var t,
            n,
            r,
            i,
            a,
            o,
            l,
            c = e && s(e),
            u = null == (t = c) ? void 0 : t.host,
            d = !1;
        if (c && c !== e)
            for (
                d = !!(
                    (null != (n = u) && null != (r = n.ownerDocument) && r.contains(u)) ||
                    (null != e && null != (i = e.ownerDocument) && i.contains(e))
                );
                !d && u;
            )
                d = !!(
                    null != (o = u = null == (a = c = s(u)) ? void 0 : a.host) &&
                    null != (l = o.ownerDocument) &&
                    l.contains(u)
                );
        return d;
    },
    v = function (e) {
        var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
        return 0 === n && 0 === r;
    },
    S = function (e, t) {
        var n = t.displayCheck,
            r = t.getShadowRoot;
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        var i = a.call(e, "details>summary:first-of-type") ? e.parentElement : e;
        if (a.call(i, "details:not([open]) *")) return !0;
        if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return v(e);
        } else {
            if ("function" == typeof r) {
                for (var o = e; e; ) {
                    var l = e.parentElement,
                        c = s(e);
                    if (l && !l.shadowRoot && !0 === r(l)) return v(e);
                    e = e.assignedSlot ? e.assignedSlot : l || c === e.ownerDocument ? l : c.host;
                }
                e = o;
            }
            if (A(e)) return !e.getClientRects().length;
            if ("legacy-full" !== n) return !0;
        }
        return !1;
    },
    I = function (e) {
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
    T = function (e, t) {
        return !(t.disabled || o(t) || m(t) || S(t, e) || g(t) || I(t));
    },
    C = function (e, t) {
        return !(O(t) || 0 > f(t)) && !!T(e, t);
    },
    N = function (e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return !!isNaN(t) || !!(t >= 0);
    },
    R = function e(t) {
        var n = [],
            r = [];
        return (
            t.forEach(function (t, i) {
                var a = !!t.scopeParent,
                    s = a ? t.scopeParent : t,
                    o = p(s, a),
                    l = a ? e(t.candidates) : s;
                0 === o
                    ? a
                        ? n.push.apply(n, l)
                        : n.push(s)
                    : r.push({
                          documentOrder: i,
                          tabIndex: o,
                          item: t,
                          isScope: a,
                          content: l,
                      });
            }),
            r
                .sort(_)
                .reduce(function (e, t) {
                    return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
                }, [])
                .concat(n)
        );
    },
    w = function (e, t) {
        var n;
        return R(
            (n = (t = t || {}).getShadowRoot
                ? u([e], t.includeContainer, {
                      filter: C.bind(null, t),
                      flatten: !1,
                      getShadowRoot: t.getShadowRoot,
                      shadowRootFilter: N,
                  })
                : c(e, t.includeContainer, C.bind(null, t))),
        );
    };
