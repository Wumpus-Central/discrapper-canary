r.d(n, {
    Ep: function () {
        return h;
    },
    Hp: function () {
        return m;
    },
    PP: function () {
        return k;
    },
    lX: function () {
        return C;
    },
    ob: function () {
        return p;
    },
    q_: function () {
        return P;
    }
});
var i = r(910974),
    a = r(634450),
    s = r(115953),
    o = r(568895);
function l(e) {
    return '/' === e.charAt(0) ? e : '/' + e;
}
function u(e) {
    return '/' === e.charAt(0) ? e.substr(1) : e;
}
function c(e, n) {
    return 0 === e.toLowerCase().indexOf(n.toLowerCase()) && -1 !== '/?#'.indexOf(e.charAt(n.length));
}
function d(e, n) {
    return c(e, n) ? e.substr(n.length) : e;
}
function f(e) {
    return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function _(e) {
    var n = e || '/',
        r = '',
        i = '',
        a = n.indexOf('#');
    -1 !== a && ((i = n.substr(a)), (n = n.substr(0, a)));
    var s = n.indexOf('?');
    return (
        -1 !== s && ((r = n.substr(s)), (n = n.substr(0, s))),
        {
            pathname: n,
            search: '?' === r ? '' : r,
            hash: '#' === i ? '' : i
        }
    );
}
function h(e) {
    var n = e.pathname,
        r = e.search,
        i = e.hash,
        a = n || '/';
    return r && '?' !== r && (a += '?' === r.charAt(0) ? r : '?' + r), i && '#' !== i && (a += '#' === i.charAt(0) ? i : '#' + i), a;
}
function p(e, n, r, s) {
    var o;
    'string' == typeof e ? ((o = _(e)).state = n) : (void 0 === (o = (0, i.Z)({}, e)).pathname && (o.pathname = ''), o.search ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search) : (o.search = ''), o.hash ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash) : (o.hash = ''), void 0 !== n && void 0 === o.state && (o.state = n));
    try {
        o.pathname = decodeURI(o.pathname);
    } catch (e) {
        if (e instanceof URIError) throw URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
        throw e;
    }
    return r && (o.key = r), s ? (o.pathname ? '/' !== o.pathname.charAt(0) && (o.pathname = (0, a.Z)(o.pathname, s.pathname)) : (o.pathname = s.pathname)) : !o.pathname && (o.pathname = '/'), o;
}
function m(e, n) {
    return e.pathname === n.pathname && e.search === n.search && e.hash === n.hash && e.key === n.key && (0, s.Z)(e.state, n.state);
}
function g() {
    var e = null,
        n = [];
    return {
        setPrompt: function n(n) {
            return (
                (e = n),
                function () {
                    e === n && (e = null);
                }
            );
        },
        confirmTransitionTo: function n(n, r, i, a) {
            if (null != e) {
                var s = 'function' == typeof e ? e(n, r) : e;
                'string' == typeof s ? ('function' == typeof i ? i(s, a) : a(!0)) : a(!1 !== s);
            } else a(!0);
        },
        appendListener: function e(e) {
            var r = !0;
            function i() {
                r && e.apply(void 0, arguments);
            }
            return (
                n.push(i),
                function () {
                    (r = !1),
                        (n = n.filter(function (e) {
                            return e !== i;
                        }));
                }
            );
        },
        notifyListeners: function e() {
            for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
            n.forEach(function (e) {
                return e.apply(void 0, r);
            });
        }
    };
}
var E = !!('undefined' != typeof window && window.document && window.document.createElement);
function v(e, n) {
    n(window.confirm(e));
}
function I() {
    var e = window.navigator.userAgent;
    return ((-1 === e.indexOf('Android 2.') && -1 === e.indexOf('Android 4.0')) || -1 === e.indexOf('Mobile Safari') || -1 !== e.indexOf('Chrome') || -1 !== e.indexOf('Windows Phone')) && window.history && 'pushState' in window.history;
}
function T() {
    return -1 === window.navigator.userAgent.indexOf('Trident');
}
function b() {
    return -1 === window.navigator.userAgent.indexOf('Firefox');
}
function y(e) {
    return void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS');
}
var S = 'popstate',
    A = 'hashchange';
function N() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function C(e) {
    void 0 === e && (e = {}), E || (0, o.Z)(!1);
    var n = window.history,
        r = I(),
        a = !T(),
        s = e,
        u = s.forceRefresh,
        c = void 0 !== u && u,
        _ = s.getUserConfirmation,
        m = void 0 === _ ? v : _,
        b = s.keyLength,
        C = void 0 === b ? 6 : b,
        R = e.basename ? f(l(e.basename)) : '';
    function O(e) {
        var n = e || {},
            r = n.key,
            i = n.state,
            a = window.location,
            s = a.pathname + a.search + a.hash;
        return R && (s = d(s, R)), p(s, i, r);
    }
    function D() {
        return Math.random().toString(36).substr(2, C);
    }
    var L = g();
    function x(e) {
        (0, i.Z)(X, e), (X.length = n.length), L.notifyListeners(X.location, X.action);
    }
    function w(e) {
        !y(e) && k(O(e.state));
    }
    function P() {
        k(O(N()));
    }
    var M = !1;
    function k(e) {
        if (M) (M = !1), x();
        else {
            var n = 'POP';
            L.confirmTransitionTo(e, n, m, function (r) {
                r
                    ? x({
                          action: n,
                          location: e
                      })
                    : U(e);
            });
        }
    }
    function U(e) {
        var n = X.location,
            r = G.indexOf(n.key);
        -1 === r && (r = 0);
        var i = G.indexOf(e.key);
        -1 === i && (i = 0);
        var a = r - i;
        a && ((M = !0), j(a));
    }
    var B = O(N()),
        G = [B.key];
    function Z(e) {
        return R + h(e);
    }
    function F(e, i) {
        var a = 'PUSH',
            s = p(e, i, D(), X.location);
        L.confirmTransitionTo(s, a, m, function (e) {
            if (e) {
                var i = Z(s),
                    o = s.key,
                    l = s.state;
                if (r) {
                    if (
                        (n.pushState(
                            {
                                key: o,
                                state: l
                            },
                            null,
                            i
                        ),
                        c)
                    )
                        window.location.href = i;
                    else {
                        var u = G.indexOf(X.location.key),
                            d = G.slice(0, u + 1);
                        d.push(s.key),
                            (G = d),
                            x({
                                action: a,
                                location: s
                            });
                    }
                } else window.location.href = i;
            }
        });
    }
    function V(e, i) {
        var a = 'REPLACE',
            s = p(e, i, D(), X.location);
        L.confirmTransitionTo(s, a, m, function (e) {
            if (e) {
                var i = Z(s),
                    o = s.key,
                    l = s.state;
                if (r) {
                    if (
                        (n.replaceState(
                            {
                                key: o,
                                state: l
                            },
                            null,
                            i
                        ),
                        c)
                    )
                        window.location.replace(i);
                    else {
                        var u = G.indexOf(X.location.key);
                        -1 !== u && (G[u] = s.key),
                            x({
                                action: a,
                                location: s
                            });
                    }
                } else window.location.replace(i);
            }
        });
    }
    function j(e) {
        n.go(e);
    }
    function H() {
        j(-1);
    }
    function Y() {
        j(1);
    }
    var W = 0;
    function K(e) {
        1 === (W += e) && 1 === e ? (window.addEventListener(S, w), a && window.addEventListener(A, P)) : 0 === W && (window.removeEventListener(S, w), a && window.removeEventListener(A, P));
    }
    var z = !1;
    function q(e) {
        void 0 === e && (e = !1);
        var n = L.setPrompt(e);
        return (
            !z && (K(1), (z = !0)),
            function () {
                return z && ((z = !1), K(-1)), n();
            }
        );
    }
    function Q(e) {
        var n = L.appendListener(e);
        return (
            K(1),
            function () {
                K(-1), n();
            }
        );
    }
    var X = {
        length: n.length,
        action: 'POP',
        location: B,
        createHref: Z,
        push: F,
        replace: V,
        go: j,
        goBack: H,
        goForward: Y,
        block: q,
        listen: Q
    };
    return X;
}
var R = 'hashchange',
    O = {
        hashbang: {
            encodePath: function (e) {
                return '!' === e.charAt(0) ? e : '!/' + u(e);
            },
            decodePath: function (e) {
                return '!' === e.charAt(0) ? e.substr(1) : e;
            }
        },
        noslash: {
            encodePath: u,
            decodePath: l
        },
        slash: {
            encodePath: l,
            decodePath: l
        }
    };
function D(e) {
    var n = e.indexOf('#');
    return -1 === n ? e : e.slice(0, n);
}
function L() {
    var e = window.location.href,
        n = e.indexOf('#');
    return -1 === n ? '' : e.substring(n + 1);
}
function x(e) {
    window.location.hash = e;
}
function w(e) {
    window.location.replace(D(window.location.href) + '#' + e);
}
function P(e) {
    void 0 === e && (e = {}), E || (0, o.Z)(!1);
    var n = window.history;
    b();
    var r = e,
        a = r.getUserConfirmation,
        s = void 0 === a ? v : a,
        u = r.hashType,
        c = void 0 === u ? 'slash' : u,
        _ = e.basename ? f(l(e.basename)) : '',
        m = O[c],
        I = m.encodePath,
        T = m.decodePath;
    function y() {
        var e = T(L());
        return _ && (e = d(e, _)), p(e);
    }
    var S = g();
    function A(e) {
        (0, i.Z)($, e), ($.length = n.length), S.notifyListeners($.location, $.action);
    }
    var N = !1,
        C = null;
    function P(e, n) {
        return e.pathname === n.pathname && e.search === n.search && e.hash === n.hash;
    }
    function M() {
        var e = L(),
            n = I(e);
        if (e !== n) w(n);
        else {
            var r = y(),
                i = $.location;
            if ((!N && P(i, r)) || C === h(r)) return;
            (C = null), k(r);
        }
    }
    function k(e) {
        if (N) (N = !1), A();
        else {
            var n = 'POP';
            S.confirmTransitionTo(e, n, s, function (r) {
                r
                    ? A({
                          action: n,
                          location: e
                      })
                    : U(e);
            });
        }
    }
    function U(e) {
        var n = $.location,
            r = F.lastIndexOf(h(n));
        -1 === r && (r = 0);
        var i = F.lastIndexOf(h(e));
        -1 === i && (i = 0);
        var a = r - i;
        a && ((N = !0), Y(a));
    }
    var B = L(),
        G = I(B);
    B !== G && w(G);
    var Z = y(),
        F = [h(Z)];
    function V(e) {
        var n = document.querySelector('base'),
            r = '';
        return n && n.getAttribute('href') && (r = D(window.location.href)), r + '#' + I(_ + h(e));
    }
    function j(e, n) {
        var r = 'PUSH',
            i = p(e, void 0, void 0, $.location);
        S.confirmTransitionTo(i, r, s, function (e) {
            if (e) {
                var n = h(i),
                    a = I(_ + n),
                    s = L() !== a;
                if (s) {
                    (C = n), x(a);
                    var o = F.lastIndexOf(h($.location)),
                        l = F.slice(0, o + 1);
                    l.push(n),
                        (F = l),
                        A({
                            action: r,
                            location: i
                        });
                } else A();
            }
        });
    }
    function H(e, n) {
        var r = 'REPLACE',
            i = p(e, void 0, void 0, $.location);
        S.confirmTransitionTo(i, r, s, function (e) {
            if (e) {
                var n = h(i),
                    a = I(_ + n),
                    s = L() !== a;
                s && ((C = n), w(a));
                var o = F.indexOf(h($.location));
                -1 !== o && (F[o] = n),
                    A({
                        action: r,
                        location: i
                    });
            }
        });
    }
    function Y(e) {
        n.go(e);
    }
    function W() {
        Y(-1);
    }
    function K() {
        Y(1);
    }
    var z = 0;
    function q(e) {
        1 === (z += e) && 1 === e ? window.addEventListener(R, M) : 0 === z && window.removeEventListener(R, M);
    }
    var Q = !1;
    function X(e) {
        void 0 === e && (e = !1);
        var n = S.setPrompt(e);
        return (
            !Q && (q(1), (Q = !0)),
            function () {
                return Q && ((Q = !1), q(-1)), n();
            }
        );
    }
    function J(e) {
        var n = S.appendListener(e);
        return (
            q(1),
            function () {
                q(-1), n();
            }
        );
    }
    var $ = {
        length: n.length,
        action: 'POP',
        location: Z,
        createHref: V,
        push: j,
        replace: H,
        go: Y,
        goBack: W,
        goForward: K,
        block: X,
        listen: J
    };
    return $;
}
function M(e, n, r) {
    return Math.min(Math.max(e, n), r);
}
function k(e) {
    void 0 === e && (e = {});
    var n = e,
        r = n.getUserConfirmation,
        a = n.initialEntries,
        s = void 0 === a ? ['/'] : a,
        o = n.initialIndex,
        l = void 0 === o ? 0 : o,
        u = n.keyLength,
        c = void 0 === u ? 6 : u,
        d = g();
    function f(e) {
        (0, i.Z)(R, e), (R.length = R.entries.length), d.notifyListeners(R.location, R.action);
    }
    function _() {
        return Math.random().toString(36).substr(2, c);
    }
    var m = M(l, 0, s.length - 1),
        E = s.map(function (e) {
            return 'string' == typeof e ? p(e, void 0, _()) : p(e, void 0, e.key || _());
        }),
        v = h;
    function I(e, n) {
        var i = 'PUSH',
            a = p(e, n, _(), R.location);
        d.confirmTransitionTo(a, i, r, function (e) {
            if (e) {
                var n = R.index,
                    r = n + 1,
                    s = R.entries.slice(0);
                s.length > r ? s.splice(r, s.length - r, a) : s.push(a),
                    f({
                        action: i,
                        location: a,
                        index: r,
                        entries: s
                    });
            }
        });
    }
    function T(e, n) {
        var i = 'REPLACE',
            a = p(e, n, _(), R.location);
        d.confirmTransitionTo(a, i, r, function (e) {
            e &&
                ((R.entries[R.index] = a),
                f({
                    action: i,
                    location: a
                }));
        });
    }
    function b(e) {
        var n = M(R.index + e, 0, R.entries.length - 1),
            i = 'POP',
            a = R.entries[n];
        d.confirmTransitionTo(a, i, r, function (e) {
            e
                ? f({
                      action: i,
                      location: a,
                      index: n
                  })
                : f();
        });
    }
    function y() {
        b(-1);
    }
    function S() {
        b(1);
    }
    function A(e) {
        var n = R.index + e;
        return n >= 0 && n < R.entries.length;
    }
    function N(e) {
        return void 0 === e && (e = !1), d.setPrompt(e);
    }
    function C(e) {
        return d.appendListener(e);
    }
    var R = {
        length: E.length,
        action: 'POP',
        location: E[m],
        index: m,
        entries: E,
        createHref: v,
        push: I,
        replace: T,
        go: b,
        goBack: y,
        goForward: S,
        canGo: A,
        block: N,
        listen: C
    };
    return R;
}
