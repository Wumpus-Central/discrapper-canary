function o() {
    return 'undefined' != typeof window;
}
function r(e) {
    return s(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function i(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function a(e) {
    var t;
    return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function s(e) {
    return !!o() && (e instanceof Node || e instanceof i(e).Node);
}
function u(e) {
    return !!o() && (e instanceof Element || e instanceof i(e).Element);
}
function l(e) {
    return !!o() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement);
}
function c(e) {
    return !!o() && 'undefined' != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot);
}
function d(e) {
    let { overflow: t, overflowX: n, overflowY: o, display: r } = f(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !['inline', 'contents'].includes(r);
}
function p() {
    return 'undefined' != typeof CSS && !!CSS.supports && CSS.supports('-webkit-backdrop-filter', 'none');
}
function f(e) {
    return i(e).getComputedStyle(e);
}
function h(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
n.d(t, {
    Dx: () => f,
    Jj: () => i,
    Kx: () =>
        function e(t, n, o) {
            var s;
            void 0 === n && (n = []), void 0 === o && (o = !0);
            let u = (function e(t) {
                    let n = (function (e) {
                        if ('html' === r(e)) return e;
                        let t = e.assignedSlot || e.parentNode || (c(e) && e.host) || a(e);
                        return c(t) ? t.host : t;
                    })(t);
                    return ['html', 'body', '#document'].includes(r(n)) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : l(n) && d(n) ? n : e(n);
                })(t),
                p = u === (null == (s = t.ownerDocument) ? void 0 : s.body),
                f = i(u);
            if (p) {
                let t = h(f);
                return n.concat(f, f.visualViewport || [], d(u) ? u : [], t && o ? e(t) : []);
            }
            return n.concat(u, e(u, [], o));
        },
    Pf: () => p,
    Re: () => l,
    kK: () => u,
    tF: () => a,
    wK: () => h
});
