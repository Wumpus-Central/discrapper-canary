r.d(n, {
    Ao: function () {
        return S;
    },
    B3: function () {
        return et;
    },
    Dt: function () {
        return G;
    },
    Gt: function () {
        return em;
    },
    IN: function () {
        return w;
    },
    Me: function () {
        return f;
    },
    PK: function () {
        return ef;
    },
    Pf: function () {
        return U;
    },
    QB: function () {
        return X;
    },
    V5: function () {
        return L;
    },
    Zj: function () {
        return eg;
    },
    a9: function () {
        return es;
    },
    ad: function () {
        return k;
    },
    b0: function () {
        return j;
    },
    bE: function () {
        return ee;
    },
    bt: function () {
        return s;
    },
    cr: function () {
        return eE;
    },
    dG: function () {
        return E;
    },
    gn: function () {
        return M;
    },
    iW: function () {
        return l;
    },
    ib: function () {
        return K;
    },
    kR: function () {
        return g;
    },
    lE: function () {
        return ea;
    },
    mp: function () {
        return h;
    },
    nG: function () {
        return H;
    },
    r3: function () {
        return m;
    },
    rP: function () {
        return eo;
    },
    rf: function () {
        return en;
    },
    tS: function () {
        return _;
    },
    tv: function () {
        return V;
    },
    vE: function () {
        return ev;
    },
    xi: function () {
        return $;
    },
    y$: function () {
        return ey;
    },
    yU: function () {
        return ei;
    },
    zL: function () {
        return T;
    },
    zT: function () {
        return eh;
    },
    zX: function () {
        return ep;
    }
});
var i = r(192379),
    a = r(198453),
    o = r(867330);
let s = 'undefined' != typeof document ? i.useLayoutEffect : () => {};
function l(e) {
    let n = (0, i.useRef)(null);
    return (
        s(() => {
            n.current = e;
        }, [e]),
        (0, i.useCallback)((...e) => (0, n.current)(...e), [])
    );
}
function u(e) {
    let [n, r] = (0, i.useState)(e),
        a = (0, i.useRef)(null),
        o = l(() => {
            let e = a.current.next();
            if (e.done) {
                a.current = null;
                return;
            }
            n === e.value ? o() : r(e.value);
        });
    s(() => {
        a.current && o();
    });
    let u = l((e) => {
        (a.current = e(n)), o();
    });
    return [n, u];
}
let c = !!('undefined' != typeof window && window.document && window.document.createElement),
    d = new Map();
function f(e) {
    let [n, r] = (0, i.useState)(e),
        o = (0, i.useRef)(null),
        l = (0, a.gP)(n),
        u = (0, i.useCallback)((e) => {
            o.current = e;
        }, []);
    return (
        c && d.set(l, u),
        s(() => {
            let e = l;
            return () => {
                d.delete(e);
            };
        }, [l]),
        (0, i.useEffect)(() => {
            let e = o.current;
            e && ((o.current = null), r(e));
        }),
        l
    );
}
function p(e, n) {
    if (e === n) return e;
    let r = d.get(e);
    if (r) return r(n), n;
    let i = d.get(n);
    return i ? (i(e), e) : n;
}
function h(e = []) {
    let n = f(),
        [r, a] = u(n),
        o = (0, i.useCallback)(() => {
            a(function* () {
                yield n, yield document.getElementById(n) ? n : void 0;
            });
        }, [n, a]);
    return s(o, [n, o, ...e]), r;
}
function _(...e) {
    return (...n) => {
        for (let r of e) 'function' == typeof r && r(...n);
    };
}
let m = (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.ownerDocument) && void 0 !== n ? n : document;
    },
    g = (e) => (e && 'window' in e && e.window === e ? e : m(e).defaultView || window);
function E(...e) {
    let n = { ...e[0] };
    for (let r = 1; r < e.length; r++) {
        let i = e[r];
        for (let e in i) {
            let r = n[e],
                a = i[e];
            'function' == typeof r && 'function' == typeof a && 'o' === e[0] && 'n' === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? (n[e] = _(r, a)) : ('className' === e || 'UNSAFE_className' === e) && 'string' == typeof r && 'string' == typeof a ? (n[e] = (0, o.Z)(r, a)) : 'id' === e && r && a ? (n.id = p(r, a)) : (n[e] = void 0 !== a ? a : r);
        }
    }
    return n;
}
let v = new Set(['id']),
    y = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
    b = new Set(['href', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
    I = /^(data-.*)$/;
function T(e, n = {}) {
    let { labelable: r, isLink: i, propNames: a } = n,
        o = {};
    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (v.has(n) || (r && y.has(n)) || (i && b.has(n)) || (null == a ? void 0 : a.has(n)) || I.test(n)) && (o[n] = e[n]);
    return o;
}
function S(e) {
    if (C()) e.focus({ preventScroll: !0 });
    else {
        let n = N(e);
        e.focus(), R(n);
    }
}
let A = null;
function C() {
    if (null == A) {
        A = !1;
        try {
            document.createElement('div').focus({
                get preventScroll() {
                    return (A = !0), !0;
                }
            });
        } catch (e) {}
    }
    return A;
}
function N(e) {
    for (var n = e.parentNode, r = [], i = document.scrollingElement || document.documentElement; n instanceof HTMLElement && n !== i; )
        (n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) &&
            r.push({
                element: n,
                scrollTop: n.scrollTop,
                scrollLeft: n.scrollLeft
            }),
            (n = n.parentNode);
    return (
        i instanceof HTMLElement &&
            r.push({
                element: i,
                scrollTop: i.scrollTop,
                scrollLeft: i.scrollLeft
            }),
        r
    );
}
function R(e) {
    for (let { element: n, scrollTop: r, scrollLeft: i } of e) (n.scrollTop = r), (n.scrollLeft = i);
}
function O(e, n, r = 'horizontal') {
    let i = e.getBoundingClientRect();
    return n ? ('horizontal' === r ? i.right : i.bottom) : 'horizontal' === r ? i.left : i.top;
}
function D(e) {
    var n;
    return 'undefined' != typeof window && null != window.navigator && ((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent));
}
function x(e) {
    var n;
    return 'undefined' != typeof window && null != window.navigator && e.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform);
}
function L() {
    return x(/^Mac/i);
}
function w() {
    return x(/^iPhone/i);
}
function P() {
    return x(/^iPad/i) || (L() && navigator.maxTouchPoints > 1);
}
function M() {
    return w() || P();
}
function k() {
    return L() || M();
}
function U() {
    return D(/AppleWebKit/i) && !B();
}
function B() {
    return D(/Chrome/i);
}
function G() {
    return D(/Android/i);
}
function Z() {
    return D(/Firefox/i);
}
let F = (0, i.createContext)({
    isNative: !0,
    open: W
});
function V() {
    return (0, i.useContext)(F);
}
function j(e, n) {
    let r = e.getAttribute('target');
    return (!r || '_self' === r) && e.origin === location.origin && !e.hasAttribute('download') && !n.metaKey && !n.ctrlKey && !n.altKey && !n.shiftKey;
}
function H(e, n, r = !0) {
    var i, a;
    let { metaKey: o, ctrlKey: s, altKey: l, shiftKey: u } = n;
    Z() && (null === (a = window.event) || void 0 === a ? void 0 : null === (i = a.type) || void 0 === i ? void 0 : i.startsWith('key')) && '_blank' === e.target && (L() ? (o = !0) : (s = !0));
    let c =
        U() && L() && !P()
            ? new KeyboardEvent('keydown', {
                  keyIdentifier: 'Enter',
                  metaKey: o,
                  ctrlKey: s,
                  altKey: l,
                  shiftKey: u
              })
            : new MouseEvent('click', {
                  metaKey: o,
                  ctrlKey: s,
                  altKey: l,
                  shiftKey: u,
                  bubbles: !0,
                  cancelable: !0
              });
    (H.isOpening = r), S(e), e.dispatchEvent(c), (H.isOpening = !1);
}
function Y(e, n) {
    if (e instanceof HTMLAnchorElement) n(e);
    else if (e.hasAttribute('data-href')) {
        let r = document.createElement('a');
        (r.href = e.getAttribute('data-href')), e.hasAttribute('data-target') && (r.target = e.getAttribute('data-target')), e.hasAttribute('data-rel') && (r.rel = e.getAttribute('data-rel')), e.hasAttribute('data-download') && (r.download = e.getAttribute('data-download')), e.hasAttribute('data-ping') && (r.ping = e.getAttribute('data-ping')), e.hasAttribute('data-referrer-policy') && (r.referrerPolicy = e.getAttribute('data-referrer-policy')), e.appendChild(r), n(r), e.removeChild(r);
    }
}
function W(e, n) {
    Y(e, (e) => H(e, n));
}
function K(e) {
    return {
        'data-href': e.href,
        'data-target': e.target,
        'data-rel': e.rel,
        'data-download': e.download,
        'data-ping': e.ping,
        'data-referrer-policy': e.referrerPolicy
    };
}
H.isOpening = !1;
let z = new Map(),
    q = new Set();
function Q() {
    if ('undefined' == typeof window) return;
    let e = (e) => {
            let r = z.get(e.target);
            !r && ((r = new Set()), z.set(e.target, r), e.target.addEventListener('transitioncancel', n)), r.add(e.propertyName);
        },
        n = (e) => {
            let r = z.get(e.target);
            if (r && (r.delete(e.propertyName), 0 === r.size && (e.target.removeEventListener('transitioncancel', n), z.delete(e.target)), 0 === z.size)) {
                for (let e of q) e();
                q.clear();
            }
        };
    document.body.addEventListener('transitionrun', e), document.body.addEventListener('transitionend', n);
}
function X(e) {
    requestAnimationFrame(() => {
        0 === z.size ? e() : q.add(e);
    });
}
'undefined' != typeof document && ('loading' !== document.readyState ? Q() : document.addEventListener('DOMContentLoaded', Q));
let J = null;
function $() {
    let e = (0, i.useRef)(new Map()),
        n = (0, i.useCallback)((n, r, i, a) => {
            let o = (null == a ? void 0 : a.once)
                ? (...n) => {
                      e.current.delete(i), i(...n);
                  }
                : i;
            e.current.set(i, {
                type: r,
                eventTarget: n,
                fn: o,
                options: a
            }),
                n.addEventListener(r, i, a);
        }, []),
        r = (0, i.useCallback)((n, r, i, a) => {
            var o;
            let s = (null === (o = e.current.get(i)) || void 0 === o ? void 0 : o.fn) || i;
            n.removeEventListener(r, s, a), e.current.delete(i);
        }, []),
        a = (0, i.useCallback)(() => {
            e.current.forEach((e, n) => {
                r(e.eventTarget, e.type, n, e.options);
            });
        }, [r]);
    return (
        (0, i.useEffect)(() => a, [a]),
        {
            addGlobalListener: n,
            removeGlobalListener: r,
            removeAllGlobalListeners: a
        }
    );
}
function ee(e, n) {
    let { id: r, 'aria-label': i, 'aria-labelledby': a } = e;
    return (
        (r = f(r)),
        a && i ? (a = [...new Set([r, ...a.trim().split(/\s+/)])].join(' ')) : a && (a = a.trim().split(/\s+/).join(' ')),
        !i && !a && n && (i = n),
        {
            id: r,
            'aria-label': i,
            'aria-labelledby': a
        }
    );
}
function et(e) {
    let n = (0, i.useRef)();
    return (0, i.useMemo)(
        () => ({
            get current() {
                return n.current;
            },
            set current(value) {
                (n.current = value), 'function' == typeof e ? e(value) : e && (e.current = value);
            }
        }),
        [e]
    );
}
function en(e, n) {
    let r = (0, i.useRef)(!0),
        a = (0, i.useRef)(null);
    (0, i.useEffect)(
        () => (
            (r.current = !0),
            () => {
                r.current = !1;
            }
        ),
        []
    ),
        (0, i.useEffect)(() => {
            r.current ? (r.current = !1) : (!a.current || n.some((e, n) => !Object.is(e, a[n]))) && e(), (a.current = n);
        }, n);
}
function er() {
    return void 0 !== window.ResizeObserver;
}
function ei(e) {
    let { ref: n, onResize: r } = e;
    (0, i.useEffect)(() => {
        let e = null == n ? void 0 : n.current;
        if (e) {
            if (!er())
                return (
                    window.addEventListener('resize', r, !1),
                    () => {
                        window.removeEventListener('resize', r, !1);
                    }
                );
            else {
                let n = new window.ResizeObserver((e) => {
                    e.length && r();
                });
                return (
                    n.observe(e),
                    () => {
                        e && n.unobserve(e);
                    }
                );
            }
        }
    }, [r, n]);
}
function ea(e, n) {
    s(() => {
        if (e && e.ref && n)
            return (
                (e.ref.current = n.current),
                () => {
                    e.ref.current = null;
                }
            );
    });
}
function eo(e, n) {
    for (es(e, n) && (e = e.parentElement); e && !es(e, n); ) e = e.parentElement;
    return e || document.scrollingElement || document.documentElement;
}
function es(e, n) {
    let r = window.getComputedStyle(e),
        i = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
    return i && n && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
}
let el = 'undefined' != typeof document && window.visualViewport;
function eu() {
    return {
        width: (null == el ? void 0 : el.width) || window.innerWidth,
        height: (null == el ? void 0 : el.height) || window.innerHeight
    };
}
let ec = 0,
    ed = new Map();
function ef(e) {
    let [n, r] = (0, i.useState)(void 0);
    return (
        s(() => {
            if (!e) return;
            let n = ed.get(e);
            if (n) r(n.element.id);
            else {
                let i = `react-aria-description-${ec++}`;
                r(i);
                let a = document.createElement('div');
                (a.id = i),
                    (a.style.display = 'none'),
                    (a.textContent = e),
                    document.body.appendChild(a),
                    (n = {
                        refCount: 0,
                        element: a
                    }),
                    ed.set(e, n);
            }
            return (
                n.refCount++,
                () => {
                    0 == --n.refCount && (n.element.remove(), ed.delete(e));
                }
            );
        }, [e]),
        { 'aria-describedby': e ? n : void 0 }
    );
}
function ep(e, n, r, a) {
    let o = l(r),
        s = null == r;
    (0, i.useEffect)(() => {
        if (s) return;
        let r = e.current;
        return (
            r.addEventListener(n, o, a),
            () => {
                r.removeEventListener(n, o, a);
            }
        );
    }, [e, n, a, s, o]);
}
function eh(e, n) {
    let r = e_(e, n, 'left'),
        i = e_(e, n, 'top'),
        a = n.offsetWidth,
        o = n.offsetHeight,
        s = e.scrollLeft,
        l = e.scrollTop,
        { borderTopWidth: u, borderLeftWidth: c } = getComputedStyle(e),
        d = e.scrollLeft + parseInt(c, 10),
        f = e.scrollTop + parseInt(u, 10),
        p = d + e.clientWidth,
        h = f + e.clientHeight;
    r <= s ? (s = r - parseInt(c, 10)) : r + a > p && (s += r + a - p), i <= f ? (l = i - parseInt(u, 10)) : i + o > h && (l += i + o - h), (e.scrollLeft = s), (e.scrollTop = l);
}
function e_(e, n, r) {
    let i = 'left' === r ? 'offsetLeft' : 'offsetTop',
        a = 0;
    for (; n.offsetParent && ((a += n[i]), n.offsetParent !== e); ) {
        if (n.offsetParent.contains(e)) {
            a -= e[i];
            break;
        }
        n = n.offsetParent;
    }
    return a;
}
function em(e, n) {
    if (document.contains(e)) {
        let s = document.scrollingElement || document.documentElement;
        if ('hidden' === window.getComputedStyle(s).overflow) {
            let n = eo(e);
            for (; e && n && e !== s && n !== s; ) eh(n, e), (n = eo((e = n)));
        } else {
            var r, i, a, o;
            let { left: s, top: l } = e.getBoundingClientRect();
            null == e || null === (r = e.scrollIntoView) || void 0 === r || r.call(e, { block: 'nearest' });
            let { left: u, top: c } = e.getBoundingClientRect();
            (Math.abs(s - u) > 1 || Math.abs(l - c) > 1) &&
                (null == n ||
                    null === (a = n.containingElement) ||
                    void 0 === a ||
                    null === (i = a.scrollIntoView) ||
                    void 0 === i ||
                    i.call(a, {
                        block: 'center',
                        inline: 'center'
                    }),
                null === (o = e.scrollIntoView) || void 0 === o || o.call(e, { block: 'nearest' }));
        }
    }
}
function eg(e) {
    return (0 === e.mozInputSource && !!e.isTrusted) || (G() && e.pointerType ? 'click' === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
}
function eE(e) {
    return (!G() && 0 === e.width && 0 === e.height) || (1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && 'mouse' === e.pointerType);
}
function ev(e, n) {
    let r = (0, i.useRef)(null);
    return e && r.current && n(e, r.current) && (e = r.current), (r.current = e), e;
}
function ey(e, n, r) {
    let a = (0, i.useRef)(n),
        o = l(() => {
            r && r(a.current);
        });
    (0, i.useEffect)(() => {
        var n;
        let r = null == e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : n.form;
        return (
            null == r || r.addEventListener('reset', o),
            () => {
                null == r || r.removeEventListener('reset', o);
            }
        );
    }, [e, o]);
}
