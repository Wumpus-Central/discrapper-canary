r.d(n, {
    B3: function () {
        return R;
    },
    Pf: function () {
        return H;
    },
    bt: function () {
        return s;
    },
    dG: function () {
        return _;
    },
    gn: function () {
        return j;
    },
    lq: function () {
        return h;
    },
    nP: function () {
        return P;
    },
    yU: function () {
        return D;
    },
    zL: function () {
        return E;
    }
});
var i = r(192379),
    a = r(819841);
let s = 'undefined' != typeof document ? i.useLayoutEffect : () => {};
function o(e) {
    let n = $12uGp$useRef(null);
    return (
        s(() => {
            n.current = e;
        }, [e]),
        $12uGp$useCallback((...e) => (0, n.current)(...e), [])
    );
}
function l(e) {
    let [n, r] = $12uGp$useState(e),
        i = $12uGp$useRef(null),
        a = o(() => {
            let e = i.current.next();
            if (e.done) {
                i.current = null;
                return;
            }
            n === e.value ? a() : r(e.value);
        });
    s(() => {
        i.current && a();
    });
    let l = o((e) => {
        (i.current = e(n)), a();
    });
    return [n, l];
}
let u = new Map();
function c(e) {
    let [n, r] = $12uGp$useState(e),
        i = $12uGp$useRef(null),
        a = $12uGp$useSSRSafeId(n),
        o = $12uGp$useCallback((e) => {
            i.current = e;
        }, []);
    return (
        u.set(a, o),
        s(() => {
            let e = a;
            return () => {
                u.delete(e);
            };
        }, [a]),
        $12uGp$useEffect(() => {
            let e = i.current;
            e && ((i.current = null), r(e));
        }),
        a
    );
}
function d(e, n) {
    if (e === n) return e;
    let r = u.get(e);
    if (r) return r(n), n;
    let i = u.get(n);
    return i ? (i(e), e) : n;
}
function f(...e) {
    return (...n) => {
        for (let r of e) 'function' == typeof r && r(...n);
    };
}
function _(...e) {
    let n = { ...e[0] };
    for (let r = 1; r < e.length; r++) {
        let i = e[r];
        for (let e in i) {
            let r = n[e],
                s = i[e];
            'function' == typeof r && 'function' == typeof s && 'o' === e[0] && 'n' === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? (n[e] = f(r, s)) : ('className' === e || 'UNSAFE_className' === e) && 'string' == typeof r && 'string' == typeof s ? (n[e] = (0, a.Z)(r, s)) : 'id' === e && r && s ? (n.id = d(r, s)) : (n[e] = void 0 !== s ? s : r);
        }
    }
    return n;
}
function h(...e) {
    return 1 === e.length
        ? e[0]
        : (n) => {
              for (let r of e) 'function' == typeof r ? r(n) : null != r && (r.current = n);
          };
}
let p = new Set(['id']),
    m = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
    g = /^(data-.*)$/;
function E(e, n = {}) {
    let { labelable: r, propNames: i } = n,
        a = {};
    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (p.has(n) || (r && m.has(n)) || (null == i ? void 0 : i.has(n)) || g.test(n)) && (a[n] = e[n]);
    return a;
}
let v = null;
function I() {
    if (null == v) {
        v = !1;
        try {
            document.createElement('div').focus({
                get preventScroll() {
                    return (v = !0), !0;
                }
            });
        } catch (e) {}
    }
    return v;
}
function T(e) {
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
function b(e) {
    for (let { element: n, scrollTop: r, scrollLeft: i } of e) (n.scrollTop = r), (n.scrollLeft = i);
}
function y(e, n, r = 'horizontal') {
    let i = e.getBoundingClientRect();
    return n ? ('horizontal' === r ? i.right : i.bottom) : 'horizontal' === r ? i.left : i.top;
}
let S = new Map(),
    A = new Set();
function N() {
    if ('undefined' == typeof window) return;
    let e = (e) => {
            let r = S.get(e.target);
            !r && ((r = new Set()), S.set(e.target, r), e.target.addEventListener('transitioncancel', n)), r.add(e.propertyName);
        },
        n = (e) => {
            let r = S.get(e.target);
            if (r && (r.delete(e.propertyName), 0 === r.size && (e.target.removeEventListener('transitioncancel', n), S.delete(e.target)), 0 === S.size)) {
                for (let e of A) e();
                A.clear();
            }
        };
    document.body.addEventListener('transitionrun', e), document.body.addEventListener('transitionend', n);
}
'undefined' != typeof document && ('loading' !== document.readyState ? N() : document.addEventListener('DOMContentLoaded', N));
let C = null;
function R(e) {
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
function O() {
    return void 0 !== window.ResizeObserver;
}
function D(e) {
    let { ref: n, onResize: r } = e;
    (0, i.useEffect)(() => {
        let e = null == n ? void 0 : n.current;
        if (e) {
            if (!O())
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
function L(e) {
    for (x(e) && (e = e.parentElement); e && !x(e); ) e = e.parentElement;
    return e || document.scrollingElement || document.documentElement;
}
function x(e) {
    let n = window.getComputedStyle(e);
    return /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
}
let w = 'undefined' != typeof document && window.visualViewport;
function P() {
    let [e, n] = (0, i.useState)(() => M());
    return (
        (0, i.useEffect)(() => {
            let e = () => {
                n((e) => {
                    let n = M();
                    return n.width === e.width && n.height === e.height ? e : n;
                });
            };
            return (
                w ? w.addEventListener('resize', e) : window.addEventListener('resize', e),
                () => {
                    w ? w.removeEventListener('resize', e) : window.removeEventListener('resize', e);
                }
            );
        }, []),
        e
    );
}
function M() {
    return {
        width: (null == w ? void 0 : w.width) || window.innerWidth,
        height: (null == w ? void 0 : w.height) || window.innerHeight
    };
}
let k = 0,
    U = new Map();
function B(e) {
    var n;
    return 'undefined' != typeof window && null != window.navigator && ((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent));
}
function G(e) {
    var n;
    return 'undefined' != typeof window && null != window.navigator && e.test((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform);
}
function Z() {
    return G(/^Mac/i);
}
function F() {
    return G(/^iPhone/i);
}
function V() {
    return G(/^iPad/i) || (Z() && navigator.maxTouchPoints > 1);
}
function j() {
    return F() || V();
}
function H() {
    return B(/AppleWebKit/i) && !Y();
}
function Y() {
    return B(/Chrome/i);
}
function W() {
    return B(/Android/i);
}
function K(e, n) {
    let r = z(e, n, 'left'),
        i = z(e, n, 'top'),
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
function z(e, n, r) {
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
