"use strict";
n.d(t, { contextMenuCallbackNative: () => s, contextMenuCallbackWeb: () => o, u: () => a });
var r = n(627968);
n(64700);
var i = n(442433);
function a() {
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
function s(e) {
    let t = a(),
        s = e.target;
    if (s?.tagName === "TEXTAREA" || s?.tagName === "INPUT") {
        if (s?.type !== "checkbox")
            return (0, i.L3)(
                e,
                async () => {
                    let { default: e } = await n.e("42312").then(n.bind(n, 216603));
                    return (n) => (0, r.jsx)(e, { ...n, text: t });
                },
                { enableSpellCheck: !0 },
            );
    } else {
        if ("none" === window.getComputedStyle(s).getPropertyValue("-webkit-user-select"))
            return void e.preventDefault();
        let a,
            o,
            l,
            u = e.target;
        for (; null != u; )
            "src" in u && null != u.src && (o = u.src),
                "href" in u && null != u.href && ((a = u.href), (l = u.textContent)),
                (u = u?.parentNode);
        if (null != o)
            return (0, i.L3)(e, async () => {
                let { default: e } = await n.e("47260").then(n.bind(n, 177079));
                return (t) => (0, r.jsx)(e, { ...t, src: o ?? "" });
            });
        if (null != a)
            return (0, i.L3)(e, async () => {
                let { default: e } = await n.e("5905").then(n.bind(n, 945896));
                return (t) => (0, r.jsx)(e, { ...t, href: a, textContent: l });
            });
        if (null != t && "" !== t)
            return (0, i.L3)(e, async () => {
                let { default: e } = await n.e("84264").then(n.bind(n, 898811));
                return (n) => (0, r.jsx)(e, { ...n, text: t });
            });
    }
    return e.preventDefault(), null;
}
function o(e) {
    let t = !1,
        n = e.target;
    if (n?.tagName === "INPUT" || n?.tagName === "TEXTAREA") t = !0;
    else if (n?.closest != null && n?.closest("[contenteditable=true]") != null) t = !0;
    else if (null != a() && "" !== a()) t = !0;
    else {
        let n,
            r,
            i = e.target;
        for (; null != i; )
            "src" in i && null != i.src && (r = i.src),
                "href" in i && null != i.href && (n = i.href),
                (i = i?.parentNode);
        (null != n || null != r) && (t = !0);
    }
    t || e.preventDefault();
}
