r.r(n),
    r.d(n, {
        contextMenuCallbackNative: function () {
            return s;
        },
        contextMenuCallbackWeb: function () {
            return l;
        },
        getSelectionText: function () {
            return o;
        }
    });
var i = r(200651);
r(192379);
var a = r(239091);
function o() {
    let e;
    if (null != window.getSelection) {
        var n;
        e = null === (n = window.getSelection()) || void 0 === n ? void 0 : n.toString();
    } else null != document.selection && 'Control' !== document.selection.type && (e = document.selection.createRange().text);
    return null != e ? e : '';
}
function s(e) {
    let n = o(),
        s = e.target;
    if ((null == s ? void 0 : s.tagName) === 'TEXTAREA' || (null == s ? void 0 : s.tagName) === 'INPUT') {
        if ((null == s ? void 0 : s.type) !== 'checkbox')
            return (0, a.jW)(
                e,
                async () => {
                    let { default: e } = await r.e('99989').then(r.bind(r, 889662));
                    return (r) =>
                        (0, i.jsx)(e, {
                            ...r,
                            text: n
                        });
                },
                { enableSpellCheck: !0 }
            );
    } else if ('none' === window.getComputedStyle(s).getPropertyValue('-webkit-user-select')) {
        e.preventDefault();
        return;
    } else {
        let o,
            s,
            l,
            u = e.target;
        for (; null != u; ) 'src' in u && null != u.src && (s = u.src), 'href' in u && null != u.href && ((o = u.href), (l = u.textContent)), (u = null == u ? void 0 : u.parentNode);
        if (null != s)
            return (0, a.jW)(e, async () => {
                let { default: e } = await r.e('12241').then(r.bind(r, 115512));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        src: null != s ? s : ''
                    });
            });
        if (null != o)
            return (0, a.jW)(e, async () => {
                let { default: e } = await r.e('96473').then(r.bind(r, 805362));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        href: o,
                        textContent: l
                    });
            });
        else if (null != n && '' !== n)
            return (0, a.jW)(e, async () => {
                let { default: e } = await r.e('3865').then(r.bind(r, 745763));
                return (r) =>
                    (0, i.jsx)(e, {
                        ...r,
                        text: n
                    });
            });
    }
    return e.preventDefault(), null;
}
function l(e) {
    let n = !1,
        r = e.target;
    if ((null == r ? void 0 : r.tagName) === 'INPUT' || (null == r ? void 0 : r.tagName) === 'TEXTAREA') n = !0;
    else if ((null == r ? void 0 : r.closest) != null && (null == r ? void 0 : r.closest('[contenteditable=true]')) != null) n = !0;
    else if (null != o() && '' !== o()) n = !0;
    else {
        let r,
            i,
            a = e.target;
        for (; null != a; ) 'src' in a && null != a.src && (i = a.src), 'href' in a && null != a.href && (r = a.href), (a = null == a ? void 0 : a.parentNode);
        (null != r || null != i) && (n = !0);
    }
    !n && e.preventDefault();
}
