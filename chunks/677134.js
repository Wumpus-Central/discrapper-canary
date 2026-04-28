"use strict";
n.d(t, { contextMenuCallbackNative: () => a, contextMenuCallbackWeb: () => o, u: () => s });
var i = n(627968);
n(64700);
var r = n(442433);
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
function a(e) {
    let t = s(),
        a = e.target;
    if (a?.tagName === "TEXTAREA" || a?.tagName === "INPUT") {
        if (a?.type !== "checkbox")
            return (0, r.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("99593"), n.e("30803"), n.e("42312")]).then(
                        n.bind(n, 216603),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, text: t });
                },
                { enableSpellCheck: !0 },
            );
    } else {
        if ("none" === window.getComputedStyle(a).getPropertyValue("-webkit-user-select"))
            return void e.preventDefault();
        let s,
            o,
            l,
            _ = e.target;
        for (; null != _; )
            "src" in _ && null != _.src && (o = _.src),
                "href" in _ && null != _.href && ((s = _.href), (l = _.textContent)),
                (_ = _?.parentNode);
        if (null != o)
            return (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("48804"),
                    n.e("44265"),
                    n.e("20590"),
                    n.e("61268"),
                    n.e("44801"),
                    n.e("36149"),
                    n.e("95998"),
                    n.e("78601"),
                    n.e("47260"),
                ]).then(n.bind(n, 177079));
                return (t) => (0, i.jsx)(e, { ...t, src: o ?? "" });
            });
        if (null != s)
            return (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("44265"),
                    n.e("20590"),
                    n.e("61268"),
                    n.e("44801"),
                    n.e("36149"),
                    n.e("95998"),
                    n.e("5905"),
                ]).then(n.bind(n, 945896));
                return (t) => (0, i.jsx)(e, { ...t, href: s, textContent: l });
            });
        if (null != t && "" !== t)
            return (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("81189"), n.e("84264")]).then(n.bind(n, 898811));
                return (n) => (0, i.jsx)(e, { ...n, text: t });
            });
    }
    return e.preventDefault(), null;
}
function o(e) {
    let t = !1,
        n = e.target;
    if (n?.tagName === "INPUT" || n?.tagName === "TEXTAREA") t = !0;
    else if (n?.closest != null && n?.closest("[contenteditable=true]") != null) t = !0;
    else if (null != s() && "" !== s()) t = !0;
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
