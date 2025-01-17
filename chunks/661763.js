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
        return x;
    },
    Zj: function () {
        return eg;
    },
    a9: function () {
        return eo;
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
        return o;
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
        return es;
    },
    rf: function () {
        return en;
    },
    tS: function () {
        return p;
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
        return eI;
    },
    yU: function () {
        return ei;
    },
    zL: function () {
        return y;
    },
    zT: function () {
        return eh;
    },
    zX: function () {
        return e_;
    }
});
var i = r(192379),
    a = r(198453),
    s = r(867330);
let o = 'undefined' != typeof document ? i.useLayoutEffect : () => {};
function l(e) {
    let n = (0, i.useRef)(null);
    return (
        o(() => {
            n.current = e;
        }, [e]),
        (0, i.useCallback)((...e) => (0, n.current)(...e), [])
    );
}
function u(e) {
    let [n, r] = (0, i.useState)(e),
        a = (0, i.useRef)(null),
        s = l(() => {
            let e = a.current.next();
            if (e.done) {
                a.current = null;
                return;
            }
            n === e.value ? s() : r(e.value);
        });
    o(() => {
        a.current && s();
    });
    let u = l((e) => {
        (a.current = e(n)), s();
    });
    return [n, u];
}
let c = !!('undefined' != typeof window && window.document && window.document.createElement),
    d = new Map();
function f(e) {
    let [n, r] = (0, i.useState)(e),
        s = (0, i.useRef)(null),
        l = (0, a.gP)(n),
        u = (0, i.useCallback)((e) => {
            s.current = e;
        }, []);
    return (
        c && d.set(l, u),
        o(() => {
            let e = l;
            return () => {
                d.delete(e);
            };
        }, [l]),
        (0, i.useEffect)(() => {
            let e = s.current;
            e && ((s.current = null), r(e));
        }),
        l
    );
}
function _(e, n) {
    if (e === n) return e;
    let r = d.get(e);
    if (r) return r(n), n;
    let i = d.get(n);
    return i ? (i(e), e) : n;
}
function h(e = []) {
    let n = f(),
        [r, a] = u(n),
        s = (0, i.useCallback)(() => {
            a(function* () {
                yield n, yield document.getElementById(n) ? n : void 0;
            });
        }, [n, a]);
    return o(s, [n, s, ...e]), r;
}
function p(...e) {
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
            'function' == typeof r && 'function' == typeof a && 'o' === e[0] && 'n' === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? (n[e] = p(r, a)) : ('className' === e || 'UNSAFE_className' === e) && 'string' == typeof r && 'string' == typeof a ? (n[e] = (0, s.Z)(r, a)) : 'id' === e && r && a ? (n.id = _(r, a)) : (n[e] = void 0 !== a ? a : r);
        }
    }
    return n;
}
let v = new Set(['id']),
    I = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
    T = new Set(['href', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
    b = /^(data-.*)$/;
function y(e, n = {}) {
    let { labelable: r, isLink: i, propNames: a } = n,
        s = {};
    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (v.has(n) || (r && I.has(n)) || (i && T.has(n)) || (null == a ? void 0 : a.has(n)) || b.test(n)) && (s[n] = e[n]);
    return s;
}
function S(e) {
    if (N()) e.focus({ preventScroll: !0 });
    else {
        let n = C(e);
        e.focus(), R(n);
    }
}
let A = null;
function N() {
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
function C(e) {
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
function L(e) {
    var n;
    return 'undefined' != typeof window && null != window.navigator && e.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform);
}
function x() {
    return L(/^Mac/i);
}
function w() {
    return L(/^iPhone/i);
}
function P() {
    return L(/^iPad/i) || (x() && navigator.maxTouchPoints > 1);
}
function M() {
    return w() || P();
}
function k() {
    return x() || M();
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
    let { metaKey: s, ctrlKey: o, altKey: l, shiftKey: u } = n;
    Z() && (null === (a = window.event) || void 0 === a ? void 0 : null === (i = a.type) || void 0 === i ? void 0 : i.startsWith('key')) && '_blank' === e.target && (x() ? (s = !0) : (o = !0));
    let c =
        U() && x() && !P()
            ? new KeyboardEvent('keydown', {
                  keyIdentifier: 'Enter',
                  metaKey: s,
                  ctrlKey: o,
                  altKey: l,
                  shiftKey: u
              })
            : new MouseEvent('click', {
                  metaKey: s,
                  ctrlKey: o,
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
            let s = (null == a ? void 0 : a.once)
                ? (...n) => {
                      e.current.delete(i), i(...n);
                  }
                : i;
            e.current.set(i, {
                type: r,
                eventTarget: n,
                fn: s,
                options: a
            }),
                n.addEventListener(r, i, a);
        }, []),
        r = (0, i.useCallback)((n, r, i, a) => {
            var s;
            let o = (null === (s = e.current.get(i)) || void 0 === s ? void 0 : s.fn) || i;
            n.removeEventListener(r, o, a), e.current.delete(i);
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
    o(() => {
        if (e && e.ref && n)
            return (
                (e.ref.current = n.current),
                () => {
                    e.ref.current = null;
                }
            );
    });
}
function es(e, n) {
    for (eo(e, n) && (e = e.parentElement); e && !eo(e, n); ) e = e.parentElement;
    return e || document.scrollingElement || document.documentElement;
}
function eo(e, n) {
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
        o(() => {
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
function e_(e, n, r, a) {
    let s = l(r),
        o = null == r;
    (0, i.useEffect)(() => {
        if (o) return;
        let r = e.current;
        return (
            r.addEventListener(n, s, a),
            () => {
                r.removeEventListener(n, s, a);
            }
        );
    }, [e, n, a, o, s]);
}
function eh(e, n) {
    let r = ep(e, n, 'left'),
        i = ep(e, n, 'top'),
        a = n.offsetWidth,
        s = n.offsetHeight,
        o = e.scrollLeft,
        l = e.scrollTop,
        { borderTopWidth: u, borderLeftWidth: c } = getComputedStyle(e),
        d = e.scrollLeft + parseInt(c, 10),
        f = e.scrollTop + parseInt(u, 10),
        _ = d + e.clientWidth,
        h = f + e.clientHeight;
    r <= o ? (o = r - parseInt(c, 10)) : r + a > _ && (o += r + a - _), i <= f ? (l = i - parseInt(u, 10)) : i + s > h && (l += i + s - h), (e.scrollLeft = o), (e.scrollTop = l);
}
function ep(e, n, r) {
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
        let o = document.scrollingElement || document.documentElement;
        if ('hidden' === window.getComputedStyle(o).overflow) {
            let n = es(e);
            for (; e && n && e !== o && n !== o; ) eh(n, e), (n = es((e = n)));
        } else {
            var r, i, a, s;
            let { left: o, top: l } = e.getBoundingClientRect();
            null == e || null === (r = e.scrollIntoView) || void 0 === r || r.call(e, { block: 'nearest' });
            let { left: u, top: c } = e.getBoundingClientRect();
            (Math.abs(o - u) > 1 || Math.abs(l - c) > 1) &&
                (null == n ||
                    null === (a = n.containingElement) ||
                    void 0 === a ||
                    null === (i = a.scrollIntoView) ||
                    void 0 === i ||
                    i.call(a, {
                        block: 'center',
                        inline: 'center'
                    }),
                null === (s = e.scrollIntoView) || void 0 === s || s.call(e, { block: 'nearest' }));
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
function eI(e, n, r) {
    let a = (0, i.useRef)(n),
        s = l(() => {
            r && r(a.current);
        });
    (0, i.useEffect)(() => {
        var n;
        let r = null == e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : n.form;
        return (
            null == r || r.addEventListener('reset', s),
            () => {
                null == r || r.removeEventListener('reset', s);
            }
        );
    }, [e, s]);
}
