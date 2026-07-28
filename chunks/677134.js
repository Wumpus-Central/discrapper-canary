"use strict";
n.d(t, { contextMenuCallbackNative: () => s, contextMenuCallbackWeb: () => l, u: () => a });
var i = n(477900);
n(582128);
var r = n(442433);
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
            return (0, r.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("30803"), n.e("42312")]).then(n.bind(n, 438984));
                    return (n) => (0, i.jsx)(e, { ...n, text: t });
                },
                { enableSpellCheck: !0 },
            );
    } else {
        if ("none" === window.getComputedStyle(s).getPropertyValue("-webkit-user-select"))
            return void e.preventDefault();
        let a,
            l,
            o,
            d = e.target;
        for (; null != d; )
            "src" in d && null != d.src && (l = d.src),
                "href" in d && null != d.href && ((a = d.href), (o = d.textContent)),
                (d = d?.parentNode);
        if (null != l)
            return (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("20590"),
                    n.e("61268"),
                    n.e("36149"),
                    n.e("95998"),
                    n.e("78601"),
                    n.e("44801"),
                    n.e("47260"),
                ]).then(n.bind(n, 177079));
                return (t) => (0, i.jsx)(e, { ...t, src: l ?? "" });
            });
        if (null != a)
            return (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("20590"),
                    n.e("61268"),
                    n.e("36149"),
                    n.e("95998"),
                    n.e("44801"),
                    n.e("5905"),
                ]).then(n.bind(n, 945896));
                return (t) => (0, i.jsx)(e, { ...t, href: a, textContent: o });
            });
        if (null != t && "" !== t)
            return (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("81189"), n.e("84264")]).then(n.bind(n, 898811));
                return (n) => (0, i.jsx)(e, { ...n, text: t });
            });
    }
    return e.preventDefault(), null;
}
function l(e) {
    let t = !1,
        n = e.target;
    if (n?.tagName === "INPUT" || n?.tagName === "TEXTAREA") t = !0;
    else if (n?.closest != null && n?.closest("[contenteditable=true]") != null) t = !0;
    else if (null != a() && "" !== a()) t = !0;
    else {
        let n,
            i,
            r = e.target;
        for (; null != r; )
            "src" in r && null != r.src && (i = r.src),
                "href" in r && null != r.href && (n = r.href),
                (r = r?.parentNode);
        (null != n || null != i) && (t = !0);
    }
    t || e.preventDefault();
}
