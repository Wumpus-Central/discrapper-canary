function r(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(t, '__esModule', { value: !0 });
var i = r(n(532825)),
    o = n(550033),
    a = n(995295),
    s = n(179237),
    l = r(n(865481)),
    c = n(857967),
    u = n(698091),
    d = r(n(21217)),
    f = /^--/;
function _(e, t) {
    return null == t || 'boolean' == typeof t || '' === t ? '' : 'number' != typeof t || 0 === t || f.test(e) || (m.hasOwnProperty(e) && m[e]) ? ('' + t).trim() : t + 'px';
}
var p = {};
function h(e, t) {
    if (!e.nodeType || !e.setAttribute) return !1;
    var n = 'filter' === e.nodeName || (e.parentNode && 'filter' === e.parentNode.nodeName),
        r = t,
        o = r.style,
        a = r.children,
        s = r.scrollTop,
        l = r.scrollLeft,
        c = i(r, ['style', 'children', 'scrollTop', 'scrollLeft']),
        d = Object.values(c),
        h = Object.keys(c).map(function (t) {
            return n || e.hasAttribute(t)
                ? t
                : p[t] ||
                      (p[t] = t.replace(/([A-Z])/g, function (e) {
                          return '-' + e.toLowerCase();
                      }));
        });
    u.Globals.frameLoop.onWrite(function () {
        for (var t in (void 0 !== a && (e.textContent = a), o))
            if (o.hasOwnProperty(t)) {
                var n = _(t, o[t]);
                'float' === t ? (t = 'cssFloat') : f.test(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
            }
        h.forEach(function (t, n) {
            e.setAttribute(t, d[n]);
        }),
            void 0 !== s && (e.scrollTop = s),
            void 0 !== l && (e.scrollLeft = l);
    });
}
var m = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    g = function (e, t) {
        return e + t.charAt(0).toUpperCase() + t.substring(1);
    },
    E = ['Webkit', 'Ms', 'Moz', 'O'];
m = Object.keys(m).reduce(function (e, t) {
    return (
        E.forEach(function (n) {
            return (e[g(n, t)] = e[t]);
        }),
        e
    );
}, m);
var b = /^(matrix|translate|scale|rotate|skew)/,
    y = /^(translate)/,
    v = /^(rotate|skew)/,
    O = function (e, t) {
        return u.is.num(e) && 0 !== e ? e + t : e;
    },
    I = function e(t, n) {
        return u.is.arr(t)
            ? t.every(function (t) {
                  return e(t, n);
              })
            : u.is.num(t)
              ? t === n
              : parseFloat(t) === n;
    },
    S = (function (e) {
        function t(t) {
            var n = t.x,
                r = t.y,
                o = t.z,
                a = i(t, ['x', 'y', 'z']),
                s = [],
                l = [];
            return (
                (n || r || o) &&
                    (s.push([n || 0, r || 0, o || 0]),
                    l.push(function (e) {
                        return [
                            'translate3d(' +
                                e
                                    .map(function (e) {
                                        return O(e, 'px');
                                    })
                                    .join(',') +
                                ')',
                            I(e, 0)
                        ];
                    })),
                u.each(a, function (e, t) {
                    if ('transform' === t)
                        s.push([e || '']),
                            l.push(function (e) {
                                return [e, '' === e];
                            });
                    else if (b.test(t)) {
                        if ((delete a[t], u.is.und(e))) return;
                        var n = y.test(t) ? 'px' : v.test(t) ? 'deg' : '';
                        s.push(u.toArray(e)),
                            l.push(
                                'rotate3d' === t
                                    ? function (e) {
                                          var t = e[0],
                                              r = e[1],
                                              i = e[2],
                                              o = e[3];
                                          return ['rotate3d(' + t + ',' + r + ',' + i + ',' + O(o, n) + ')', I(o, 0)];
                                      }
                                    : function (e) {
                                          return [
                                              t +
                                                  '(' +
                                                  e
                                                      .map(function (e) {
                                                          return O(e, n);
                                                      })
                                                      .join(',') +
                                                  ')',
                                              I(e, +!!t.startsWith('scale'))
                                          ];
                                      }
                            );
                    }
                }),
                s.length && (a.transform = new T(s, l)),
                e.call(this, a) || this
            );
        }
        return d(t, e), t;
    })(c.AnimatedObject),
    T = (function (e) {
        function t(t, n) {
            var r;
            return ((r = e.call(this) || this).inputs = t), (r.transforms = n), (r._value = null), (r._children = new Set()), r;
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.get = function () {
                return this._value || (this._value = this._get());
            }),
            (n._get = function () {
                var e = this,
                    t = '',
                    n = !0;
                return (
                    u.each(this.inputs, function (r, i) {
                        var o = u.getFluidValue(r[0]),
                            a = e.transforms[i](u.is.arr(o) ? o : r.map(u.getFluidValue)),
                            s = a[0],
                            l = a[1];
                        (t += ' ' + s), (n = n && l);
                    }),
                    n ? 'none' : t
                );
            }),
            (n.addChild = function (e) {
                var t = this;
                this._children.size ||
                    u.each(this.inputs, function (e) {
                        return u.each(e, function (e) {
                            var n = u.getFluidConfig(e);
                            n && n.addChild(t);
                        });
                    }),
                    this._children.add(e);
            }),
            (n.removeChild = function (e) {
                var t = this;
                this._children.delete(e),
                    this._children.size ||
                        u.each(this.inputs, function (e) {
                            return u.each(e, function (e) {
                                var n = u.getFluidConfig(e);
                                n && n.removeChild(t);
                            });
                        });
            }),
            (n.onParentChange = function (e) {
                'change' == e.type && (this._value = null),
                    u.each(this._children, function (t) {
                        t.onParentChange(e);
                    });
            }),
            t
        );
    })(u.FluidValue),
    N = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
o.Globals.assign({
    colorNames: l,
    createStringInterpolator: s.createStringInterpolator,
    batchedUpdates: a.unstable_batchedUpdates
});
var A = c.createHost(N, {
    applyAnimatedValues: h,
    createAnimatedStyle: function (e) {
        return new S(e);
    },
    getComponentProps: function (e) {
        return e.scrollTop, e.scrollLeft, i(e, ['scrollTop', 'scrollLeft']);
    }
}).animated;
Object.keys(o).forEach(function (e) {
    'default' !== e &&
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
                return o[e];
            }
        });
}),
    (t.a = A),
    (t.animated = A);
