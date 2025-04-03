r.d(e, {
    V5: () => p,
    Zj: () => v,
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
let c = null;
function l(t) {
    var e;
    return 'undefined' != typeof window && null != window.navigator && ((null == (e = window.navigator.userAgentData) ? void 0 : e.brands.some((e) => t.test(e.brand))) || t.test(window.navigator.userAgent));
}
function f(t) {
    var e;
    return 'undefined' != typeof window && null != window.navigator && t.test((null == (e = window.navigator.userAgentData) ? void 0 : e.platform) || window.navigator.platform);
}
function p() {
    return f(/^Mac/i);
}
function h(t, e, r = !0) {
    var n, i;
    let { metaKey: o, ctrlKey: a, altKey: u, shiftKey: s } = e;
    l(/Firefox/i) && (null == (i = window.event) || null == (n = i.type) ? void 0 : n.startsWith('key')) && '_blank' === t.target && (p() ? (o = !0) : (a = !0));
    let d =
        l(/AppleWebKit/i) && !l(/Chrome/i) && p() && !(f(/^iPad/i) || (p() && navigator.maxTouchPoints > 1)) && 1
            ? new KeyboardEvent('keydown', {
                  keyIdentifier: 'Enter',
                  metaKey: o,
                  ctrlKey: a,
                  altKey: u,
                  shiftKey: s
              })
            : new MouseEvent('click', {
                  metaKey: o,
                  ctrlKey: a,
                  altKey: u,
                  shiftKey: s,
                  bubbles: !0,
                  cancelable: !0
              });
    if (
        ((h.isOpening = r),
        (function () {
            if (null == c) {
                c = !1;
                try {
                    document.createElement('div').focus({
                        get preventScroll() {
                            return (c = !0), !0;
                        }
                    });
                } catch (t) {}
            }
            return c;
        })())
    )
        t.focus({ preventScroll: !0 });
    else {
        let e = (function (t) {
            for (var e = t.parentNode, r = [], n = document.scrollingElement || document.documentElement; e instanceof HTMLElement && e !== n; )
                (e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) &&
                    r.push({
                        element: e,
                        scrollTop: e.scrollTop,
                        scrollLeft: e.scrollLeft
                    }),
                    (e = e.parentNode);
            return (
                n instanceof HTMLElement &&
                    r.push({
                        element: n,
                        scrollTop: n.scrollTop,
                        scrollLeft: n.scrollLeft
                    }),
                r
            );
        })(t);
        t.focus(),
            (function (t) {
                for (let { element: e, scrollTop: r, scrollLeft: n } of t) (e.scrollTop = r), (e.scrollLeft = n);
            })(e);
    }
    t.dispatchEvent(d), (h.isOpening = !1);
}
h.isOpening = !1;
let d = new Map(),
    g = new Set();
function y() {
    if ('undefined' == typeof window) return;
    let t = (e) => {
        let r = d.get(e.target);
        if (r && (r.delete(e.propertyName), 0 === r.size && (e.target.removeEventListener('transitioncancel', t), d.delete(e.target)), 0 === d.size)) {
            for (let t of g) t();
            g.clear();
        }
    };
    document.body.addEventListener('transitionrun', (e) => {
        let r = d.get(e.target);
        r || ((r = new Set()), d.set(e.target, r), e.target.addEventListener('transitioncancel', t)), r.add(e.propertyName);
    }),
        document.body.addEventListener('transitionend', t);
}
function v(t) {
    return (0 === t.mozInputSource && !!t.isTrusted) || (l(/Android/i) && t.pointerType ? 'click' === t.type && 1 === t.buttons : 0 === t.detail && !t.pointerType);
}
'undefined' != typeof document && ('loading' !== document.readyState ? y() : document.addEventListener('DOMContentLoaded', y)), 'undefined' != typeof document && window.visualViewport;
