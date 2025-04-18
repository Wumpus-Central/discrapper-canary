n.d(t, {
    Ep: () => _,
    Hp: () => h,
    PP: () => M,
    lX: () => N,
    ob: () => p,
    q_: () => L
});
var r = n(44837),
    i = n(634450),
    a = n(115953),
    o = n(431803);
function s(e) {
    return '/' === e.charAt(0) ? e : '/' + e;
}
function l(e) {
    return '/' === e.charAt(0) ? e.substr(1) : e;
}
function c(e, t) {
    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== '/?#'.indexOf(e.charAt(t.length));
}
function u(e, t) {
    return c(e, t) ? e.substr(t.length) : e;
}
function d(e) {
    return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function f(e) {
    var t = e || '/',
        n = '',
        r = '',
        i = t.indexOf('#');
    -1 !== i && ((r = t.substr(i)), (t = t.substr(0, i)));
    var a = t.indexOf('?');
    return (
        -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a))),
        {
            pathname: t,
            search: '?' === n ? '' : n,
            hash: '#' === r ? '' : r
        }
    );
}
function _(e) {
    var t = e.pathname,
        n = e.search,
        r = e.hash,
        i = t || '/';
    return n && '?' !== n && (i += '?' === n.charAt(0) ? n : '?' + n), r && '#' !== r && (i += '#' === r.charAt(0) ? r : '#' + r), i;
}
function p(e, t, n, a) {
    var o;
    'string' == typeof e ? ((o = f(e)).state = t) : (void 0 === (o = (0, r.Z)({}, e)).pathname && (o.pathname = ''), o.search ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search) : (o.search = ''), o.hash ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash) : (o.hash = ''), void 0 !== t && void 0 === o.state && (o.state = t));
    try {
        o.pathname = decodeURI(o.pathname);
    } catch (e) {
        if (e instanceof URIError) throw URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
        throw e;
    }
    return n && (o.key = n), a ? (o.pathname ? '/' !== o.pathname.charAt(0) && (o.pathname = (0, i.Z)(o.pathname, a.pathname)) : (o.pathname = a.pathname)) : o.pathname || (o.pathname = '/'), o;
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
        confirmTransitionTo: function (t, n, r, i) {
            if (null != e) {
                var a = 'function' == typeof e ? e(t, n) : e;
                'string' == typeof a ? ('function' == typeof r ? r(a, i) : i(!0)) : i(!1 !== a);
            } else i(!0);
        },
        appendListener: function (e) {
            var n = !0;
            function r() {
                n && e.apply(void 0, arguments);
            }
            return (
                t.push(r),
                function () {
                    (n = !1),
                        (t = t.filter(function (e) {
                            return e !== r;
                        }));
                }
            );
        },
        notifyListeners: function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
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
function b() {
    var e = window.navigator.userAgent;
    return ((-1 === e.indexOf('Android 2.') && -1 === e.indexOf('Android 4.0')) || -1 === e.indexOf('Mobile Safari') || -1 !== e.indexOf('Chrome') || -1 !== e.indexOf('Windows Phone')) && window.history && 'pushState' in window.history;
}
function y() {
    return -1 === window.navigator.userAgent.indexOf('Trident');
}
function v() {
    return -1 === window.navigator.userAgent.indexOf('Firefox');
}
function O(e) {
    return void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS');
}
var I = 'popstate',
    S = 'hashchange';
function T() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function N(e) {
    void 0 === e && (e = {}), g || (0, o.Z)(!1);
    var t = window.history,
        n = b(),
        i = !y(),
        a = e,
        l = a.forceRefresh,
        c = void 0 !== l && l,
        f = a.getUserConfirmation,
        h = void 0 === f ? E : f,
        v = a.keyLength,
        N = void 0 === v ? 6 : v,
        A = e.basename ? d(s(e.basename)) : '';
    function C(e) {
        var t = e || {},
            n = t.key,
            r = t.state,
            i = window.location,
            a = i.pathname + i.search + i.hash;
        return A && (a = u(a, A)), p(a, r, n);
    }
    function R() {
        return Math.random().toString(36).substr(2, N);
    }
    var P = m();
    function w(e) {
        (0, r.Z)(Q, e), (Q.length = t.length), P.notifyListeners(Q.location, Q.action);
    }
    function D(e) {
        O(e) || M(C(e.state));
    }
    function L() {
        M(C(T()));
    }
    var x = !1;
    function M(e) {
        if (x) (x = !1), w();
        else {
            var t = 'POP';
            P.confirmTransitionTo(e, t, h, function (n) {
                n
                    ? w({
                          action: t,
                          location: e
                      })
                    : k(e);
            });
        }
    }
    function k(e) {
        var t = Q.location,
            n = U.indexOf(t.key);
        -1 === n && (n = 0);
        var r = U.indexOf(e.key);
        -1 === r && (r = 0);
        var i = n - r;
        i && ((x = !0), V(i));
    }
    var j = C(T()),
        U = [j.key];
    function G(e) {
        return A + _(e);
    }
    function B(e, r) {
        var i = 'PUSH',
            a = p(e, r, R(), Q.location);
        P.confirmTransitionTo(a, i, h, function (e) {
            if (e) {
                var r = G(a),
                    o = a.key,
                    s = a.state;
                if (n)
                    if (
                        (t.pushState(
                            {
                                key: o,
                                state: s
                            },
                            null,
                            r
                        ),
                        c)
                    )
                        window.location.href = r;
                    else {
                        var l = U.indexOf(Q.location.key),
                            u = U.slice(0, l + 1);
                        u.push(a.key),
                            (U = u),
                            w({
                                action: i,
                                location: a
                            });
                    }
                else window.location.href = r;
            }
        });
    }
    function F(e, r) {
        var i = 'REPLACE',
            a = p(e, r, R(), Q.location);
        P.confirmTransitionTo(a, i, h, function (e) {
            if (e) {
                var r = G(a),
                    o = a.key,
                    s = a.state;
                if (n)
                    if (
                        (t.replaceState(
                            {
                                key: o,
                                state: s
                            },
                            null,
                            r
                        ),
                        c)
                    )
                        window.location.replace(r);
                    else {
                        var l = U.indexOf(Q.location.key);
                        -1 !== l && (U[l] = a.key),
                            w({
                                action: i,
                                location: a
                            });
                    }
                else window.location.replace(r);
            }
        });
    }
    function V(e) {
        t.go(e);
    }
    function Z() {
        V(-1);
    }
    function H() {
        V(1);
    }
    var W = 0;
    function Y(e) {
        1 === (W += e) && 1 === e ? (window.addEventListener(I, D), i && window.addEventListener(S, L)) : 0 === W && (window.removeEventListener(I, D), i && window.removeEventListener(S, L));
    }
    var K = !1;
    function z(e) {
        void 0 === e && (e = !1);
        var t = P.setPrompt(e);
        return (
            K || (Y(1), (K = !0)),
            function () {
                return K && ((K = !1), Y(-1)), t();
            }
        );
    }
    function q(e) {
        var t = P.appendListener(e);
        return (
            Y(1),
            function () {
                Y(-1), t();
            }
        );
    }
    var Q = {
        length: t.length,
        action: 'POP',
        location: j,
        createHref: G,
        push: B,
        replace: F,
        go: V,
        goBack: Z,
        goForward: H,
        block: z,
        listen: q
    };
    return Q;
}
var A = 'hashchange',
    C = {
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
            decodePath: s
        },
        slash: {
            encodePath: s,
            decodePath: s
        }
    };
function R(e) {
    var t = e.indexOf('#');
    return -1 === t ? e : e.slice(0, t);
}
function P() {
    var e = window.location.href,
        t = e.indexOf('#');
    return -1 === t ? '' : e.substring(t + 1);
}
function w(e) {
    window.location.hash = e;
}
function D(e) {
    window.location.replace(R(window.location.href) + '#' + e);
}
function L(e) {
    void 0 === e && (e = {}), g || (0, o.Z)(!1);
    var t = window.history;
    v();
    var n = e,
        i = n.getUserConfirmation,
        a = void 0 === i ? E : i,
        l = n.hashType,
        c = void 0 === l ? 'slash' : l,
        f = e.basename ? d(s(e.basename)) : '',
        h = C[c],
        b = h.encodePath,
        y = h.decodePath;
    function O() {
        var e = y(P());
        return f && (e = u(e, f)), p(e);
    }
    var I = m();
    function S(e) {
        (0, r.Z)(J, e), (J.length = t.length), I.notifyListeners(J.location, J.action);
    }
    var T = !1,
        N = null;
    function L(e, t) {
        return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash;
    }
    function x() {
        var e = P(),
            t = b(e);
        if (e !== t) D(t);
        else {
            var n = O(),
                r = J.location;
            if ((!T && L(r, n)) || N === _(n)) return;
            (N = null), M(n);
        }
    }
    function M(e) {
        if (T) (T = !1), S();
        else {
            var t = 'POP';
            I.confirmTransitionTo(e, t, a, function (n) {
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
            n = B.lastIndexOf(_(t));
        -1 === n && (n = 0);
        var r = B.lastIndexOf(_(e));
        -1 === r && (r = 0);
        var i = n - r;
        i && ((T = !0), H(i));
    }
    var j = P(),
        U = b(j);
    j !== U && D(U);
    var G = O(),
        B = [_(G)];
    function F(e) {
        var t = document.querySelector('base'),
            n = '';
        return t && t.getAttribute('href') && (n = R(window.location.href)), n + '#' + b(f + _(e));
    }
    function V(e, t) {
        var n = 'PUSH',
            r = p(e, void 0, void 0, J.location);
        I.confirmTransitionTo(r, n, a, function (e) {
            if (e) {
                var t = _(r),
                    i = b(f + t),
                    a = P() !== i;
                if (a) {
                    (N = t), w(i);
                    var o = B.lastIndexOf(_(J.location)),
                        s = B.slice(0, o + 1);
                    s.push(t),
                        (B = s),
                        S({
                            action: n,
                            location: r
                        });
                } else S();
            }
        });
    }
    function Z(e, t) {
        var n = 'REPLACE',
            r = p(e, void 0, void 0, J.location);
        I.confirmTransitionTo(r, n, a, function (e) {
            if (e) {
                var t = _(r),
                    i = b(f + t),
                    a = P() !== i;
                a && ((N = t), D(i));
                var o = B.indexOf(_(J.location));
                -1 !== o && (B[o] = t),
                    S({
                        action: n,
                        location: r
                    });
            }
        });
    }
    function H(e) {
        t.go(e);
    }
    function W() {
        H(-1);
    }
    function Y() {
        H(1);
    }
    var K = 0;
    function z(e) {
        1 === (K += e) && 1 === e ? window.addEventListener(A, x) : 0 === K && window.removeEventListener(A, x);
    }
    var q = !1;
    function Q(e) {
        void 0 === e && (e = !1);
        var t = I.setPrompt(e);
        return (
            q || (z(1), (q = !0)),
            function () {
                return q && ((q = !1), z(-1)), t();
            }
        );
    }
    function X(e) {
        var t = I.appendListener(e);
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
        location: G,
        createHref: F,
        push: V,
        replace: Z,
        go: H,
        goBack: W,
        goForward: Y,
        block: Q,
        listen: X
    };
    return J;
}
function x(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function M(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.getUserConfirmation,
        i = t.initialEntries,
        a = void 0 === i ? ['/'] : i,
        o = t.initialIndex,
        s = void 0 === o ? 0 : o,
        l = t.keyLength,
        c = void 0 === l ? 6 : l,
        u = m();
    function d(e) {
        (0, r.Z)(A, e), (A.length = A.entries.length), u.notifyListeners(A.location, A.action);
    }
    function f() {
        return Math.random().toString(36).substr(2, c);
    }
    var h = x(s, 0, a.length - 1),
        g = a.map(function (e) {
            return 'string' == typeof e ? p(e, void 0, f()) : p(e, void 0, e.key || f());
        }),
        E = _;
    function b(e, t) {
        var r = 'PUSH',
            i = p(e, t, f(), A.location);
        u.confirmTransitionTo(i, r, n, function (e) {
            if (e) {
                var t = A.index,
                    n = t + 1,
                    a = A.entries.slice(0);
                a.length > n ? a.splice(n, a.length - n, i) : a.push(i),
                    d({
                        action: r,
                        location: i,
                        index: n,
                        entries: a
                    });
            }
        });
    }
    function y(e, t) {
        var r = 'REPLACE',
            i = p(e, t, f(), A.location);
        u.confirmTransitionTo(i, r, n, function (e) {
            e &&
                ((A.entries[A.index] = i),
                d({
                    action: r,
                    location: i
                }));
        });
    }
    function v(e) {
        var t = x(A.index + e, 0, A.entries.length - 1),
            r = 'POP',
            i = A.entries[t];
        u.confirmTransitionTo(i, r, n, function (e) {
            e
                ? d({
                      action: r,
                      location: i,
                      index: t
                  })
                : d();
        });
    }
    function O() {
        v(-1);
    }
    function I() {
        v(1);
    }
    function S(e) {
        var t = A.index + e;
        return t >= 0 && t < A.entries.length;
    }
    function T(e) {
        return void 0 === e && (e = !1), u.setPrompt(e);
    }
    function N(e) {
        return u.appendListener(e);
    }
    var A = {
        length: g.length,
        action: 'POP',
        location: g[h],
        index: h,
        entries: g,
        createHref: E,
        push: b,
        replace: y,
        go: v,
        goBack: O,
        goForward: I,
        canGo: S,
        block: T,
        listen: N
    };
    return A;
}
