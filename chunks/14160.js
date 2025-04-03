function a(e) {
    return 1 === e.nodeType;
}
function o(e) {
    let r = e.ownerDocument.defaultView;
    if (!r) throw Error('cannot check visibility of non attached element');
    let t = r.navigator.userAgent.match(/jsdom/i);
    return (function e(o, n = !1) {
        if ('BODY' === o.tagName) return !0;
        if ('OPTION' === o.tagName || 'OPTGROUP' === o.tagName) {
            let r = o.closest('select');
            return !!r && e(r, !0);
        }
        if (('INPUT' === o.tagName && 'hidden' == o.type.toLowerCase()) || 'NOSCRIPT' === o.tagName) return !1;
        let l = r.getComputedStyle(o).visibility;
        if (
            'collapse' == l ||
            'hidden' == l ||
            !(function e(t) {
                if ('none' == r.getComputedStyle(t).display) return !1;
                let a = t.parentElement;
                return !a || e(a);
            })(o) ||
            (!n &&
                0 ==
                    (function e(t) {
                        let a = 1,
                            o = r.getComputedStyle(t).opacity;
                        o && (a = Number(o));
                        let n = t.parentElement;
                        return n && (a *= e(n)), a;
                    })(o))
        )
            return !1;
        function i(e) {
            let t = e.getBoundingClientRect();
            return (t.height > 0 && t.width > 0) || ('hidden' != r.getComputedStyle(e).overflow && Array.from(e.childNodes).some((e) => 3 === e.nodeType || (a(e) && i(e))));
        }
        return (
            (!!t || !!i(o)) &&
            !(
                !t &&
                (function e(t) {
                    return (
                        'hidden' ==
                            (function e(t) {
                                let a,
                                    o = t.getBoundingClientRect(),
                                    n = t.ownerDocument,
                                    l = n.documentElement,
                                    i = n.body,
                                    s = r.getComputedStyle(l).overflow;
                                function u(e) {
                                    let t = r.getComputedStyle(e).position;
                                    if ('fixed' == t) return (a = !0), e == l ? null : l;
                                    {
                                        var o;
                                        let a = e.parentElement;
                                        for (; a && !((o = a) == l || (!r.getComputedStyle(o).display.match(/^inline/) && ('absolute' != t || 'static' != r.getComputedStyle(o).position))); ) a = a.parentElement;
                                        return a;
                                    }
                                }
                                function d(e) {
                                    var r, t;
                                    return 9 === e.nodeType
                                        ? {
                                              x: (null == (r = e.defaultView) ? void 0 : r.pageXOffset) || 0,
                                              y: (null == (t = e.defaultView) ? void 0 : t.pageYOffset) || 0
                                          }
                                        : {
                                              x: e.scrollLeft,
                                              y: e.scrollTop
                                          };
                                }
                                for (let n = u(t); n; n = u(n)) {
                                    let t = (function (e) {
                                        let t = e;
                                        if ('visible' == s) {
                                            if (e == l && i) t = i;
                                            else if (e == i)
                                                return {
                                                    x: 'visible',
                                                    y: 'visible'
                                                };
                                        }
                                        let a = {
                                            x: r.getComputedStyle(t).overflowX,
                                            y: r.getComputedStyle(t).overflowY
                                        };
                                        return e == l && ((a.x = 'visible' == a.x ? 'auto' : a.x), (a.y = 'visible' == a.y ? 'auto' : a.y)), a;
                                    })(n);
                                    if ('visible' == t.x && 'visible' == t.y) continue;
                                    let u = n.getBoundingClientRect();
                                    if (0 == u.width || 0 == u.height) return 'hidden';
                                    let c = o.right < u.left,
                                        p = o.bottom < u.top;
                                    if ((c && 'hidden' == t.x) || (p && 'hidden' == t.y)) return 'hidden';
                                    if ((c && 'visible' != t.x) || (p && 'visible' != t.y)) {
                                        let r = d(n),
                                            a = o.right < u.left - r.x,
                                            l = o.bottom < u.top - r.y;
                                        if ((a && 'visible' != t.x) || (l && 'visible' != t.x)) return 'hidden';
                                        return 'hidden' == e(n) ? 'hidden' : 'scroll';
                                    }
                                    let m = o.left >= u.left + u.width,
                                        f = o.top >= u.top + u.height;
                                    if ((m && 'hidden' == t.x) || (f && 'hidden' == t.y)) return 'hidden';
                                    if ((m && 'visible' != t.x) || (f && 'visible' != t.y)) {
                                        if (a) {
                                            let e = d(n);
                                            if (o.left >= l.scrollWidth - e.x || o.right >= l.scrollHeight - e.y) return 'hidden';
                                        }
                                        return 'hidden' == e(n) ? 'hidden' : 'scroll';
                                    }
                                }
                                return 'none';
                            })(t) &&
                        Array.from(t.childNodes).every(function (r) {
                            return !a(r) || e(r) || !i(r);
                        })
                    );
                })(o)
            )
        );
    })(e);
}
t.d(r, { p: () => o });
