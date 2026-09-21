n.d(t, { contextMenuCallbackNative: () => a, contextMenuCallbackWeb: () => i, u: () => u });
var r = n(477900);
n(582128);
var l = n(442433);
function u() {
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
    let t = u(),
        a = e.target;
    if (a?.tagName === "TEXTAREA" || a?.tagName === "INPUT") {
        if (a?.type !== "checkbox")
            return (0, l.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("230803"), n.e("342312")]).then(n.bind(n, 216603));
                    return (n) => (0, r.jsx)(e, { ...n, text: t });
                },
                { enableSpellCheck: !0 },
            );
    } else {
        if ("none" === window.getComputedStyle(a).getPropertyValue("-webkit-user-select"))
            return void e.preventDefault();
        let u,
            i,
            s,
            c = e.target;
        for (; null != c;)
            ("src" in c && null != c.src && (i = c.src),
                "href" in c && null != c.href && ((u = c.href), (s = c.textContent)),
                (c = c?.parentNode));
        if (null != i)
            return (0, l.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("948804"),
                    n.e("720590"),
                    n.e("344265"),
                    n.e("538887"),
                    n.e("295998"),
                    n.e("136149"),
                    n.e("78601"),
                    n.e("944801"),
                    n.e("947260"),
                ]).then(n.bind(n, 177079));
                return (t) => (0, r.jsx)(e, { ...t, src: i ?? "" });
            });
        if (null != u)
            return (0, l.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("720590"),
                    n.e("344265"),
                    n.e("538887"),
                    n.e("295998"),
                    n.e("136149"),
                    n.e("944801"),
                    n.e("605905"),
                ]).then(n.bind(n, 945896));
                return (t) => (0, r.jsx)(e, { ...t, href: u, textContent: s });
            });
        if (null != t && "" !== t)
            return (0, l.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("81189"), n.e("184264")]).then(n.bind(n, 898811));
                return (n) => (0, r.jsx)(e, { ...n, text: t });
            });
    }
    return (e.preventDefault(), null);
}
function i(e) {
    let t = !1,
        n = e.target;
    if (n?.tagName === "INPUT" || n?.tagName === "TEXTAREA") t = !0;
    else if (n?.closest != null && n?.closest("[contenteditable=true]") != null) t = !0;
    else if (null != u() && "" !== u()) t = !0;
    else {
        let n,
            r,
            l = e.target;
        for (; null != l;)
            ("src" in l && null != l.src && (r = l.src),
                "href" in l && null != l.href && (n = l.href),
                (l = l?.parentNode));
        (null != n || null != r) && (t = !0);
    }
    t || e.preventDefault();
}
