n.r(t),
    n.d(t, {
        contextMenuCallbackNative: () => u,
        contextMenuCallbackWeb: () => d,
        getSelectionText: () => c
    });
var r = n(200651);
n(192379);
var i = n(239091);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c() {
    let e;
    if (null != window.getSelection) {
        var t;
        e = null == (t = window.getSelection()) ? void 0 : t.toString();
    } else null != document.selection && 'Control' !== document.selection.type && (e = document.selection.createRange().text);
    return null != e ? e : '';
}
function u(e) {
    let t = c(),
        o = e.target;
    if ((null == o ? void 0 : o.tagName) === 'TEXTAREA' || (null == o ? void 0 : o.tagName) === 'INPUT') {
        if ((null == o ? void 0 : o.type) !== 'checkbox')
            return (0, i.jW)(
                e,
                async () => {
                    let { default: e } = await n.e('99989').then(n.bind(n, 889662));
                    return (n) => (0, r.jsx)(e, l(a({}, n), { text: t }));
                },
                { enableSpellCheck: !0 }
            );
    } else {
        if ('none' === window.getComputedStyle(o).getPropertyValue('-webkit-user-select')) return void e.preventDefault();
        let s,
            c,
            u,
            d = e.target;
        for (; null != d; ) 'src' in d && null != d.src && (c = d.src), 'href' in d && null != d.href && ((s = d.href), (u = d.textContent)), (d = null == d ? void 0 : d.parentNode);
        if (null != c)
            return (0, i.jW)(e, async () => {
                let { default: e } = await n.e('12241').then(n.bind(n, 115512));
                return (t) => (0, r.jsx)(e, l(a({}, t), { src: null != c ? c : '' }));
            });
        if (null != s)
            return (0, i.jW)(e, async () => {
                let { default: e } = await n.e('96473').then(n.bind(n, 805362));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        l(a({}, t), {
                            href: s,
                            textContent: u
                        })
                    );
            });
        if (null != t && '' !== t)
            return (0, i.jW)(e, async () => {
                let { default: e } = await n.e('3865').then(n.bind(n, 745763));
                return (n) => (0, r.jsx)(e, l(a({}, n), { text: t }));
            });
    }
    return e.preventDefault(), null;
}
function d(e) {
    let t = !1,
        n = e.target;
    if ((null == n ? void 0 : n.tagName) === 'INPUT' || (null == n ? void 0 : n.tagName) === 'TEXTAREA') t = !0;
    else if ((null == n ? void 0 : n.closest) != null && (null == n ? void 0 : n.closest('[contenteditable=true]')) != null) t = !0;
    else if (null != c() && '' !== c()) t = !0;
    else {
        let n,
            r,
            i = e.target;
        for (; null != i; ) 'src' in i && null != i.src && (r = i.src), 'href' in i && null != i.href && (n = i.href), (i = null == i ? void 0 : i.parentNode);
        (null != n || null != r) && (t = !0);
    }
    t || e.preventDefault();
}
