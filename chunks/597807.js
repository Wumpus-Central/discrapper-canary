function a(e) {
    return 1 === e.nodeType;
}
function l(e) {
    let r = e.ownerDocument.defaultView;
    if (!r) throw Error("cannot check visibility of non attached element");
    let t = r.navigator.userAgent.match(/jsdom/i);
    return (function e(l, o = !1) {
        if ("BODY" === l.tagName) return !0;
        if ("OPTION" === l.tagName || "OPTGROUP" === l.tagName) {
            let r = l.closest("select");
            return !!r && e(r, !0);
        }
        if (("INPUT" === l.tagName && "hidden" == l.type.toLowerCase()) || "NOSCRIPT" === l.tagName) return !1;
        let s = r.getComputedStyle(l).visibility;
        if (
            "collapse" == s ||
            "hidden" == s ||
            !(function e(t) {
                if ("none" == r.getComputedStyle(t).display) return !1;
                let a = t.parentElement;
                return !a || e(a);
            })(l) ||
            (!o &&
                0 ==
                    (function e(t) {
                        let a = 1,
                            l = r.getComputedStyle(t).opacity;
                        l && (a = Number(l));
                        let o = t.parentElement;
                        return o && (a *= e(o)), a;
                    })(l))
        )
            return !1;
        function n(e) {
            let t = e.getBoundingClientRect();
            return (
                (t.height > 0 && t.width > 0) ||
                ("hidden" != r.getComputedStyle(e).overflow &&
                    Array.from(e.childNodes).some((e) => 3 === e.nodeType || (a(e) && n(e))))
            );
        }
        return (
            (!!t || !!n(l)) &&
            !(
                !t &&
                (function e(t) {
                    return (
                        "hidden" ==
                            (function e(t) {
                                let a,
                                    l = t.getBoundingClientRect(),
                                    o = t.ownerDocument,
                                    s = o.documentElement,
                                    n = o.body,
                                    i = r.getComputedStyle(s).overflow;
                                function u(e) {
                                    let t = r.getComputedStyle(e).position;
                                    if ("fixed" == t) return (a = !0), e == s ? null : s;
                                    {
                                        var l;
                                        let a = e.parentElement;
                                        for (
                                            ;
                                            a &&
                                            !(
                                                (l = a) == s ||
                                                (!r.getComputedStyle(l).display.match(/^inline/) &&
                                                    ("absolute" != t || "static" != r.getComputedStyle(l).position))
                                            );
                                        )
                                            a = a.parentElement;
                                        return a;
                                    }
                                }
                                function d(e) {
                                    var r, t;
                                    return 9 === e.nodeType
                                        ? {
                                              x: (null == (r = e.defaultView) ? void 0 : r.pageXOffset) || 0,
                                              y: (null == (t = e.defaultView) ? void 0 : t.pageYOffset) || 0,
                                          }
                                        : {
                                              x: e.scrollLeft,
                                              y: e.scrollTop,
                                          };
                                }
                                for (let o = u(t); o; o = u(o)) {
                                    let t = (function (e) {
                                        let t = e;
                                        if ("visible" == i) {
                                            if (e == s && n) t = n;
                                            else if (e == n)
                                                return {
                                                    x: "visible",
                                                    y: "visible",
                                                };
                                        }
                                        let a = {
                                            x: r.getComputedStyle(t).overflowX,
                                            y: r.getComputedStyle(t).overflowY,
                                        };
                                        return (
                                            e == s &&
                                                ((a.x = "visible" == a.x ? "auto" : a.x),
                                                (a.y = "visible" == a.y ? "auto" : a.y)),
                                            a
                                        );
                                    })(o);
                                    if ("visible" == t.x && "visible" == t.y) continue;
                                    let u = o.getBoundingClientRect();
                                    if (0 == u.width || 0 == u.height) return "hidden";
                                    let c = l.right < u.left,
                                        p = l.bottom < u.top;
                                    if ((c && "hidden" == t.x) || (p && "hidden" == t.y)) return "hidden";
                                    if ((c && "visible" != t.x) || (p && "visible" != t.y)) {
                                        let r = d(o),
                                            a = l.right < u.left - r.x,
                                            s = l.bottom < u.top - r.y;
                                        if ((a && "visible" != t.x) || (s && "visible" != t.x)) return "hidden";
                                        return "hidden" == e(o) ? "hidden" : "scroll";
                                    }
                                    let m = l.left >= u.left + u.width,
                                        b = l.top >= u.top + u.height;
                                    if ((m && "hidden" == t.x) || (b && "hidden" == t.y)) return "hidden";
                                    if ((m && "visible" != t.x) || (b && "visible" != t.y)) {
                                        if (a) {
                                            let e = d(o);
                                            if (l.left >= s.scrollWidth - e.x || l.right >= s.scrollHeight - e.y)
                                                return "hidden";
                                        }
                                        return "hidden" == e(o) ? "hidden" : "scroll";
                                    }
                                }
                                return "none";
                            })(t) &&
                        Array.from(t.childNodes).every(function (r) {
                            return !a(r) || e(r) || !n(r);
                        })
                    );
                })(l)
            )
        );
    })(e);
}
t.d(r, { z: () => l });
