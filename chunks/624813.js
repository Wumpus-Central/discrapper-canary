n.d(t, { Z: () => v });
var o = n(230371),
    r = n(400361),
    i = n(473452),
    a = n(184826),
    u = n(992278),
    s = n.n(u),
    l = /[A-Z]|^ms/g,
    c = (0, o.Z)(function (e) {
        return e.replace(l, '-$&').toLowerCase();
    }),
    p = function (e, t) {
        return null == t || 'boolean' == typeof t ? '' : 1 === r.Z[e] || 45 === e.charCodeAt(1) || isNaN(t) || 0 === t ? t : t + 'px';
    },
    d = function e(t) {
        for (var n = t.length, o = 0, r = ''; o < n; o++) {
            var i = t[o];
            if (null != i) {
                var a = void 0;
                switch (typeof i) {
                    case 'boolean':
                        break;
                    case 'function':
                        a = e([i()]);
                        break;
                    case 'object':
                        if (Array.isArray(i)) a = e(i);
                        else for (var u in ((a = ''), i)) i[u] && u && (a && (a += ' '), (a += u));
                        break;
                    default:
                        a = i;
                }
                a && (r && (r += ' '), (r += a));
            }
        }
        return r;
    },
    f = 'undefined' != typeof document;
function h(e) {
    var t = document.createElement('style');
    return t.setAttribute('data-emotion', e.key || ''), void 0 !== e.nonce && t.setAttribute('nonce', e.nonce), t.appendChild(document.createTextNode('')), (void 0 !== e.container ? e.container : document.head).appendChild(t), t;
}
var m = (function () {
    function e(e) {
        (this.isSpeedy = !0), (this.tags = []), (this.ctr = 0), (this.opts = e);
    }
    var t = e.prototype;
    return (
        (t.inject = function () {
            if (this.injected) throw Error('already injected!');
            (this.tags[0] = h(this.opts)), (this.injected = !0);
        }),
        (t.speedy = function (e) {
            if (0 !== this.ctr) throw Error('cannot change speedy now');
            this.isSpeedy = !!e;
        }),
        (t.insert = function (e, t) {
            if (this.isSpeedy) {
                var n = (function (e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
                })(this.tags[this.tags.length - 1]);
                try {
                    n.insertRule(e, n.cssRules.length);
                } catch (e) {}
            } else {
                var o = h(this.opts);
                this.tags.push(o), o.appendChild(document.createTextNode(e + (t || '')));
            }
            this.ctr++, this.ctr % 65000 == 0 && this.tags.push(h(this.opts));
        }),
        (t.flush = function () {
            this.tags.forEach(function (e) {
                return e.parentNode.removeChild(e);
            }),
                (this.tags = []),
                (this.ctr = 0),
                (this.injected = !1);
        }),
        e
    );
})();
let v = function (e, t) {
    if (void 0 !== e.__SECRET_EMOTION__) return e.__SECRET_EMOTION__;
    void 0 === t && (t = {});
    var n,
        o,
        r,
        u,
        l = t.key || 'css',
        h = s()(function (e) {
            (n += e), f && g.insert(e, b);
        });
    void 0 !== t.prefix && (o = { prefix: t.prefix });
    var v = {
            registered: {},
            inserted: {},
            nonce: t.nonce,
            key: l
        },
        g = new m(t);
    f && g.inject();
    var E = new a.Z(o);
    E.use(t.stylisPlugins)(h);
    var b = '';
    function y(e, t) {
        if (null == e) return '';
        switch (typeof e) {
            case 'boolean':
                return '';
            case 'function':
                if (void 0 !== e.__emotion_styles) return e.toString();
                return y.call(this, void 0 === this ? e() : e(this.mergedProps, this.context), t);
            case 'object':
                return O.call(this, e);
            default:
                var n = v.registered[e];
                return !1 === t && void 0 !== n ? n : e;
        }
    }
    var C = new WeakMap();
    function O(e) {
        if (C.has(e)) return C.get(e);
        var t = '';
        return (
            Array.isArray(e)
                ? e.forEach(function (e) {
                      t += y.call(this, e, !1);
                  }, this)
                : Object.keys(e).forEach(function (n) {
                      'object' != typeof e[n]
                          ? void 0 !== v.registered[e[n]]
                              ? (t += n + '{' + v.registered[e[n]] + '}')
                              : (t += c(n) + ':' + p(n, e[n]) + ';')
                          : Array.isArray(e[n]) && 'string' == typeof e[n][0] && void 0 === v.registered[e[n][0]]
                            ? e[n].forEach(function (e) {
                                  t += c(n) + ':' + p(n, e) + ';';
                              })
                            : (t += n + '{' + y.call(this, e[n], !1) + '}');
                  }, this),
            C.set(e, t),
            t
        );
    }
    var x = /label:\s*([^\s;\n{]+)\s*;/g,
        A = function (e) {
            var t,
                n,
                o = !0,
                a = '',
                s = '';
            null == e || void 0 === e.raw ? ((o = !1), (a += y.call(this, e, !1))) : (a += e[0]);
            for (var l = arguments.length, c = Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++) c[p - 1] = arguments[p];
            return (
                c.forEach(function (t, n) {
                    (a += y.call(this, t, 46 === a.charCodeAt(a.length - 1))), !0 === o && void 0 !== e[n + 1] && (a += e[n + 1]);
                }, this),
                (u = a),
                (t = a =
                    a.replace(x, function (e, t) {
                        return (s += '-' + t), '';
                    })),
                (n = s),
                (r = (0, i.Z)(t + n) + n),
                a
            );
        };
    function S(e, t) {
        void 0 === v.inserted[r] && ((n = ''), E(e, t), (v.inserted[r] = n));
    }
    var w = function () {
        var e = A.apply(this, arguments),
            t = l + '-' + r;
        return void 0 === v.registered[t] && (v.registered[t] = u), S('.' + t, e), t;
    };
    function k(e, t) {
        var n = '';
        return (
            t.split(' ').forEach(function (t) {
                void 0 !== v.registered[t] ? e.push(t) : (n += t + ' ');
            }),
            n
        );
    }
    function F(e, t) {
        var n = [],
            o = k(n, e);
        return n.length < 2 ? e : o + w(n, t);
    }
    function D(e) {
        v.inserted[e] = !0;
    }
    if (f) {
        var M = document.querySelectorAll('[data-emotion-' + l + ']');
        Array.prototype.forEach.call(M, function (e) {
            g.tags[0].parentNode.insertBefore(e, g.tags[0]),
                e
                    .getAttribute('data-emotion-' + l)
                    .split(' ')
                    .forEach(D);
        });
    }
    var I = {
        flush: function () {
            f && (g.flush(), g.inject()), (v.inserted = {}), (v.registered = {});
        },
        hydrate: function (e) {
            e.forEach(D);
        },
        cx: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return F(d(t));
        },
        merge: F,
        getRegisteredStyles: k,
        injectGlobal: function () {
            var e = A.apply(this, arguments);
            S('', e);
        },
        keyframes: function () {
            var e = A.apply(this, arguments),
                t = 'animation-' + r;
            return S('', '@keyframes ' + t + '{' + e + '}'), t;
        },
        css: w,
        sheet: g,
        caches: v
    };
    return (e.__SECRET_EMOTION__ = I), I;
};
