"use strict";
n.d(t, { contextMenuCallbackNative: () => r, contextMenuCallbackWeb: () => a, u: () => s });
var l = n(477900);
n(582128);
var i = n(442433);
function s() {
    let e;
    return (
        null != window.getSelection
            ? (e = window.getSelection()?.toString())
            : null != document.selection &&
              "Control" !== document.selection.type &&
              (e = document.selection.createRange().text),
        e ?? ""
    );
}
function r(e) {
    let t = s(),
        r = e.target;
    if (r?.tagName === "TEXTAREA" || r?.tagName === "INPUT") {
        if (r?.type !== "checkbox")
            return (0, i.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("230803"), n.e("342312")]).then(n.bind(n, 438984));
                    return (n) => (0, l.jsx)(e, { ...n, text: t });
                },
                { enableSpellCheck: !0 },
            );
    } else {
        if ("none" === window.getComputedStyle(r).getPropertyValue("-webkit-user-select"))
            return void e.preventDefault();
        let s,
            a,
            o,
            u = e.target;
        for (; null != u; )
            "src" in u && null != u.src && (a = u.src),
                "href" in u && null != u.href && ((s = u.href), (o = u.textContent)),
                (u = u?.parentNode);
        if (null != a)
            return (0, i.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("720590"),
                    n.e("538887"),
                    n.e("136149"),
                    n.e("295998"),
                    n.e("78601"),
                    n.e("944801"),
                    n.e("947260"),
                ]).then(n.bind(n, 177079));
                return (t) => (0, l.jsx)(e, { ...t, src: a ?? "" });
            });
        if (null != s)
            return (0, i.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("720590"),
                    n.e("538887"),
                    n.e("136149"),
                    n.e("295998"),
                    n.e("944801"),
                    n.e("605905"),
                ]).then(n.bind(n, 945896));
                return (t) => (0, l.jsx)(e, { ...t, href: s, textContent: o });
            });
        if (null != t && "" !== t)
            return (0, i.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("81189"), n.e("184264")]).then(n.bind(n, 898811));
                return (n) => (0, l.jsx)(e, { ...n, text: t });
            });
    }
    return e.preventDefault(), null;
}
function a(e) {
    let t = !1,
        n = e.target;
    if (n?.tagName === "INPUT" || n?.tagName === "TEXTAREA") t = !0;
    else if (n?.closest != null && n?.closest("[contenteditable=true]") != null) t = !0;
    else if (null != s() && "" !== s()) t = !0;
    else {
        let n,
            l,
            i = e.target;
        for (; null != i; )
            "src" in i && null != i.src && (l = i.src),
                "href" in i && null != i.href && (n = i.href),
                (i = i?.parentNode);
        (null != n || null != l) && (t = !0);
    }
    t || e.preventDefault();
}
