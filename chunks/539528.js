n.d(t, {
    Ep: () => _,
    Hp: () => h,
    PP: () => M,
    lX: () => N,
    ob: () => p,
    q_: () => P
});
var i = n(910974),
    r = n(634450),
    a = n(115953),
    s = n(568895);
function o(e) {
    return '/' === e.charAt(0) ? e : '/' + e;
}
function l(e) {
    return '/' === e.charAt(0) ? e.substr(1) : e;
}
function u(e, t) {
    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== '/?#'.indexOf(e.charAt(t.length));
}
function c(e, t) {
    return u(e, t) ? e.substr(t.length) : e;
}
function d(e) {
    return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function f(e) {
    var t = e || '/',
        n = '',
        i = '',
        r = t.indexOf('#');
    -1 !== r && ((i = t.substr(r)), (t = t.substr(0, r)));
    var a = t.indexOf('?');
    return (
        -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a))),
        {
            pathname: t,
            search: '?' === n ? '' : n,
            hash: '#' === i ? '' : i
        }
    );
}
function _(e) {
    var t = e.pathname,
        n = e.search,
        i = e.hash,
        r = t || '/';
    return n && '?' !== n && (r += '?' === n.charAt(0) ? n : '?' + n), i && '#' !== i && (r += '#' === i.charAt(0) ? i : '#' + i), r;
}
function p(e, t, n, a) {
    var s;
    'string' == typeof e ? ((s = f(e)).state = t) : (void 0 === (s = (0, i.Z)({}, e)).pathname && (s.pathname = ''), s.search ? '?' !== s.search.charAt(0) && (s.search = '?' + s.search) : (s.search = ''), s.hash ? '#' !== s.hash.charAt(0) && (s.hash = '#' + s.hash) : (s.hash = ''), void 0 !== t && void 0 === s.state && (s.state = t));
    try {
        s.pathname = decodeURI(s.pathname);
    } catch (e) {
        if (e instanceof URIError) throw URIError('Pathname "' + s.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
        throw e;
    }
    return n && (s.key = n), a ? (s.pathname ? '/' !== s.pathname.charAt(0) && (s.pathname = (0, r.Z)(s.pathname, a.pathname)) : (s.pathname = a.pathname)) : s.pathname || (s.pathname = '/'), s;
}
function h(e, t) {
    return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && (0, a.Z)(e.state, t.state);
}
function m() {
    var e = null,
        t = [];
    return {
        setPrompt: function (t) {
            return (
                (e = t),
                function () {
                    e === t && (e = null);
                }
            );
        },
        confirmTransitionTo: function (t, n, i, r) {
            if (null != e) {
                var a = 'function' == typeof e ? e(t, n) : e;
                'string' == typeof a ? ('function' == typeof i ? i(a, r) : r(!0)) : r(!1 !== a);
            } else r(!0);
        },
        appendListener: function (e) {
            var n = !0;
            function i() {
                n && e.apply(void 0, arguments);
            }
            return (
                t.push(i),
                function () {
                    (n = !1),
                        (t = t.filter(function (e) {
                            return e !== i;
                        }));
                }
            );
        },
        notifyListeners: function () {
            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            t.forEach(function (e) {
                return e.apply(void 0, n);
            });
        }
    };
}
var g = !!('undefined' != typeof window && window.document && window.document.createElement);
function E(e, t) {
    t(window.confirm(e));
}
function v() {
    var e = window.navigator.userAgent;
    return ((-1 === e.indexOf('Android 2.') && -1 === e.indexOf('Android 4.0')) || -1 === e.indexOf('Mobile Safari') || -1 !== e.indexOf('Chrome') || -1 !== e.indexOf('Windows Phone')) && window.history && 'pushState' in window.history;
}
function y() {
    return -1 === window.navigator.userAgent.indexOf('Trident');
}
function I() {
    return -1 === window.navigator.userAgent.indexOf('Firefox');
}
function T(e) {
    return void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS');
}
var b = 'popstate',
    S = 'hashchange';
function A() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function N(e) {
    void 0 === e && (e = {}), g || (0, s.Z)(!1);
    var t = window.history,
        n = v(),
        r = !y(),
        a = e,
        l = a.forceRefresh,
        u = void 0 !== l && l,
        f = a.getUserConfirmation,
        h = void 0 === f ? E : f,
        I = a.keyLength,
        N = void 0 === I ? 6 : I,
        C = e.basename ? d(o(e.basename)) : '';
    function R(e) {
        var t = e || {},
            n = t.key,
            i = t.state,
            r = window.location,
            a = r.pathname + r.search + r.hash;
        return C && (a = c(a, C)), p(a, i, n);
    }
    function O() {
        return Math.random().toString(36).substr(2, N);
    }
    var D = m();
    function x(e) {
        (0, i.Z)(Q, e), (Q.length = t.length), D.notifyListeners(Q.location, Q.action);
    }
    function L(e) {
        T(e) || M(R(e.state));
    }
    function P() {
        M(R(A()));
    }
    var w = !1;
    function M(e) {
        if (w) (w = !1), x();
        else {
            var t = 'POP';
            D.confirmTransitionTo(e, t, h, function (n) {
                n
                    ? x({
                          action: t,
                          location: e
                      })
                    : k(e);
            });
        }
    }
    function k(e) {
        var t = Q.location,
            n = G.indexOf(t.key);
        -1 === n && (n = 0);
        var i = G.indexOf(e.key);
        -1 === i && (i = 0);
        var r = n - i;
        r && ((w = !0), V(r));
    }
    var U = R(A()),
        G = [U.key];
    function B(e) {
        return C + _(e);
    }
    function Z(e, i) {
        var r = 'PUSH',
            a = p(e, i, O(), Q.location);
        D.confirmTransitionTo(a, r, h, function (e) {
            if (e) {
                var i = B(a),
                    s = a.key,
                    o = a.state;
                if (n) {
                    if (
                        (t.pushState(
                            {
                                key: s,
                                state: o
                            },
                            null,
                            i
                        ),
                        u)
                    )
                        window.location.href = i;
                    else {
                        var l = G.indexOf(Q.location.key),
                            c = G.slice(0, l + 1);
                        c.push(a.key),
                            (G = c),
                            x({
                                action: r,
                                location: a
                            });
                    }
                } else window.location.href = i;
            }
        });
    }
    function F(e, i) {
        var r = 'REPLACE',
            a = p(e, i, O(), Q.location);
        D.confirmTransitionTo(a, r, h, function (e) {
            if (e) {
                var i = B(a),
                    s = a.key,
                    o = a.state;
                if (n) {
                    if (
                        (t.replaceState(
                            {
                                key: s,
                                state: o
                            },
                            null,
                            i
                        ),
                        u)
                    )
                        window.location.replace(i);
                    else {
                        var l = G.indexOf(Q.location.key);
                        -1 !== l && (G[l] = a.key),
                            x({
                                action: r,
                                location: a
                            });
                    }
                } else window.location.replace(i);
            }
        });
    }
    function V(e) {
        t.go(e);
    }
    function j() {
        V(-1);
    }
    function H() {
        V(1);
    }
    var Y = 0;
    function W(e) {
        1 === (Y += e) && 1 === e ? (window.addEventListener(b, L), r && window.addEventListener(S, P)) : 0 === Y && (window.removeEventListener(b, L), r && window.removeEventListener(S, P));
    }
    var K = !1;
    function z(e) {
        void 0 === e && (e = !1);
        var t = D.setPrompt(e);
        return (
            K || (W(1), (K = !0)),
            function () {
                return K && ((K = !1), W(-1)), t();
            }
        );
    }
    function q(e) {
        var t = D.appendListener(e);
        return (
            W(1),
            function () {
                W(-1), t();
            }
        );
    }
    var Q = {
        length: t.length,
        action: 'POP',
        location: U,
        createHref: B,
        push: Z,
        replace: F,
        go: V,
        goBack: j,
        goForward: H,
        block: z,
        listen: q
    };
    return Q;
}
var C = 'hashchange',
    R = {
        hashbang: {
            encodePath: function (e) {
                return '!' === e.charAt(0) ? e : '!/' + l(e);
            },
            decodePath: function (e) {
                return '!' === e.charAt(0) ? e.substr(1) : e;
            }
        },
        noslash: {
            encodePath: l,
            decodePath: o
        },
        slash: {
            encodePath: o,
            decodePath: o
        }
    };
function O(e) {
    var t = e.indexOf('#');
    return -1 === t ? e : e.slice(0, t);
}
function D() {
    var e = window.location.href,
        t = e.indexOf('#');
    return -1 === t ? '' : e.substring(t + 1);
}
function x(e) {
    window.location.hash = e;
}
function L(e) {
    window.location.replace(O(window.location.href) + '#' + e);
}
function P(e) {
    void 0 === e && (e = {}), g || (0, s.Z)(!1);
    var t = window.history;
    I();
    var n = e,
        r = n.getUserConfirmation,
        a = void 0 === r ? E : r,
        l = n.hashType,
        u = void 0 === l ? 'slash' : l,
        f = e.basename ? d(o(e.basename)) : '',
        h = R[u],
        v = h.encodePath,
        y = h.decodePath;
    function T() {
        var e = y(D());
        return f && (e = c(e, f)), p(e);
    }
    var b = m();
    function S(e) {
        (0, i.Z)(J, e), (J.length = t.length), b.notifyListeners(J.location, J.action);
    }
    var A = !1,
        N = null;
    function P(e, t) {
        return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash;
    }
    function w() {
        var e = D(),
            t = v(e);
        if (e !== t) L(t);
        else {
            var n = T(),
                i = J.location;
            if ((!A && P(i, n)) || N === _(n)) return;
            (N = null), M(n);
        }
    }
    function M(e) {
        if (A) (A = !1), S();
        else {
            var t = 'POP';
            b.confirmTransitionTo(e, t, a, function (n) {
                n
                    ? S({
                          action: t,
                          location: e
                      })
                    : k(e);
            });
        }
    }
    function k(e) {
        var t = J.location,
            n = Z.lastIndexOf(_(t));
        -1 === n && (n = 0);
        var i = Z.lastIndexOf(_(e));
        -1 === i && (i = 0);
        var r = n - i;
        r && ((A = !0), H(r));
    }
    var U = D(),
        G = v(U);
    U !== G && L(G);
    var B = T(),
        Z = [_(B)];
    function F(e) {
        var t = document.querySelector('base'),
            n = '';
        return t && t.getAttribute('href') && (n = O(window.location.href)), n + '#' + v(f + _(e));
    }
    function V(e, t) {
        var n = 'PUSH',
            i = p(e, void 0, void 0, J.location);
        b.confirmTransitionTo(i, n, a, function (e) {
            if (e) {
                var t = _(i),
                    r = v(f + t),
                    a = D() !== r;
                if (a) {
                    (N = t), x(r);
                    var s = Z.lastIndexOf(_(J.location)),
                        o = Z.slice(0, s + 1);
                    o.push(t),
                        (Z = o),
                        S({
                            action: n,
                            location: i
                        });
                } else S();
            }
        });
    }
    function j(e, t) {
        var n = 'REPLACE',
            i = p(e, void 0, void 0, J.location);
        b.confirmTransitionTo(i, n, a, function (e) {
            if (e) {
                var t = _(i),
                    r = v(f + t),
                    a = D() !== r;
                a && ((N = t), L(r));
                var s = Z.indexOf(_(J.location));
                -1 !== s && (Z[s] = t),
                    S({
                        action: n,
                        location: i
                    });
            }
        });
    }
    function H(e) {
        t.go(e);
    }
    function Y() {
        H(-1);
    }
    function W() {
        H(1);
    }
    var K = 0;
    function z(e) {
        1 === (K += e) && 1 === e ? window.addEventListener(C, w) : 0 === K && window.removeEventListener(C, w);
    }
    var q = !1;
    function Q(e) {
        void 0 === e && (e = !1);
        var t = b.setPrompt(e);
        return (
            q || (z(1), (q = !0)),
            function () {
                return q && ((q = !1), z(-1)), t();
            }
        );
    }
    function X(e) {
        var t = b.appendListener(e);
        return (
            z(1),
            function () {
                z(-1), t();
            }
        );
    }
    var J = {
        length: t.length,
        action: 'POP',
        location: B,
        createHref: F,
        push: V,
        replace: j,
        go: H,
        goBack: Y,
        goForward: W,
        block: Q,
        listen: X
    };
    return J;
}
function w(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function M(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.getUserConfirmation,
        r = t.initialEntries,
        a = void 0 === r ? ['/'] : r,
        s = t.initialIndex,
        o = void 0 === s ? 0 : s,
        l = t.keyLength,
        u = void 0 === l ? 6 : l,
        c = m();
    function d(e) {
        (0, i.Z)(C, e), (C.length = C.entries.length), c.notifyListeners(C.location, C.action);
    }
    function f() {
        return Math.random().toString(36).substr(2, u);
    }
    var h = w(o, 0, a.length - 1),
        g = a.map(function (e) {
            return 'string' == typeof e ? p(e, void 0, f()) : p(e, void 0, e.key || f());
        }),
        E = _;
    function v(e, t) {
        var i = 'PUSH',
            r = p(e, t, f(), C.location);
        c.confirmTransitionTo(r, i, n, function (e) {
            if (e) {
                var t = C.index,
                    n = t + 1,
                    a = C.entries.slice(0);
                a.length > n ? a.splice(n, a.length - n, r) : a.push(r),
                    d({
                        action: i,
                        location: r,
                        index: n,
                        entries: a
                    });
            }
        });
    }
    function y(e, t) {
        var i = 'REPLACE',
            r = p(e, t, f(), C.location);
        c.confirmTransitionTo(r, i, n, function (e) {
            e &&
                ((C.entries[C.index] = r),
                d({
                    action: i,
                    location: r
                }));
        });
    }
    function I(e) {
        var t = w(C.index + e, 0, C.entries.length - 1),
            i = 'POP',
            r = C.entries[t];
        c.confirmTransitionTo(r, i, n, function (e) {
            e
                ? d({
                      action: i,
                      location: r,
                      index: t
                  })
                : d();
        });
    }
    function T() {
        I(-1);
    }
    function b() {
        I(1);
    }
    function S(e) {
        var t = C.index + e;
        return t >= 0 && t < C.entries.length;
    }
    function A(e) {
        return void 0 === e && (e = !1), c.setPrompt(e);
    }
    function N(e) {
        return c.appendListener(e);
    }
    var C = {
        length: g.length,
        action: 'POP',
        location: g[h],
        index: h,
        entries: g,
        createHref: E,
        push: v,
        replace: y,
        go: I,
        goBack: T,
        goForward: b,
        canGo: S,
        block: A,
        listen: N
    };
    return C;
}
