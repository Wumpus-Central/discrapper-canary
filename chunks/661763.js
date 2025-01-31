r.d(e, {
    V5: () => c,
    Zj: () => h,
    bt: () => o,
    dG: () => s,
    iW: () => a
});
var n = r(192379),
    i = r(867330);
let o = 'undefined' != typeof document ? n.useLayoutEffect : () => {};
function a(t) {
    let e = (0, n.useRef)(null);
    return (
        o(() => {
            e.current = t;
        }, [t]),
        (0, n.useCallback)((...t) => (0, e.current)(...t), [])
    );
}
'undefined' != typeof window && window.document && window.document.createElement;
let u = new Map();
function s(...t) {
    let e = { ...t[0] };
    for (let r = 1; r < t.length; r++) {
        let n = t[r];
        for (let t in n) {
            let r = e[t],
                o = n[t];
            'function' == typeof r && 'function' == typeof o && 'o' === t[0] && 'n' === t[1] && t.charCodeAt(2) >= 65 && 90 >= t.charCodeAt(2)
                ? (e[t] = (function (...t) {
                      return (...e) => {
                          for (let r of t) 'function' == typeof r && r(...e);
                      };
                  })(r, o))
                : ('className' === t || 'UNSAFE_className' === t) && 'string' == typeof r && 'string' == typeof o
                  ? (e[t] = (0, i.Z)(r, o))
                  : 'id' === t && r && o
                    ? (e.id = (function (t, e) {
                          if (t === e) return t;
                          let r = u.get(t);
                          if (r) return r(e), e;
                          let n = u.get(e);
                          return n ? (n(t), t) : e;
                      })(r, o))
                    : (e[t] = void 0 !== o ? o : r);
        }
    }
    return e;
}
function c() {
    var t, e;
    return (t = /^Mac/i), 'undefined' != typeof window && null != window.navigator && t.test((null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.platform) || window.navigator.platform);
}
let l = new Map(),
    f = new Set();
function p() {
    if ('undefined' == typeof window) return;
    let t = (e) => {
        let r = l.get(e.target);
        if (r && (r.delete(e.propertyName), 0 === r.size && (e.target.removeEventListener('transitioncancel', t), l.delete(e.target)), 0 === l.size)) {
            for (let t of f) t();
            f.clear();
        }
    };
    document.body.addEventListener('transitionrun', (e) => {
        let r = l.get(e.target);
        r || ((r = new Set()), l.set(e.target, r), e.target.addEventListener('transitioncancel', t)), r.add(e.propertyName);
    }),
        document.body.addEventListener('transitionend', t);
}
function h(t) {
    var e, r;
    return (0 === t.mozInputSource && !!t.isTrusted) || (((e = /Android/i), 'undefined' != typeof window && null != window.navigator && ((null === (r = window.navigator.userAgentData) || void 0 === r ? void 0 : r.brands.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent)) && t.pointerType) ? 'click' === t.type && 1 === t.buttons : 0 === t.detail && !t.pointerType);
}
'undefined' != typeof document && ('loading' !== document.readyState ? p() : document.addEventListener('DOMContentLoaded', p)), 'undefined' != typeof document && window.visualViewport;
