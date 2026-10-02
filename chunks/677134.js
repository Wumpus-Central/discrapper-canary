n.d(t, { contextMenuCallbackNative: () => a, contextMenuCallbackWeb: () => u, u: () => i });
var l = n(477900);
n(582128);
var r = n(442433);
function i() {
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
    let t = i(),
        a = e.target;
    if (a?.tagName === "TEXTAREA" || a?.tagName === "INPUT") {
        if (a?.type !== "checkbox")
            return (0, r.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("230803"), n.e("342312")]).then(n.bind(n, 216603));
                    return (n) => (0, l.jsx)(e, { ...n, text: t });
                },
                { enableSpellCheck: !0 },
            );
    } else {
        if ("none" === window.getComputedStyle(a).getPropertyValue("-webkit-user-select"))
            return void e.preventDefault();
        let i,
            u,
            o,
            s = e.target;
        for (; null != s;)
            ("src" in s && null != s.src && (u = s.src),
                "href" in s && null != s.href && ((i = s.href), (o = s.textContent)),
                (s = s?.parentNode));
        if (null != u)
            return (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("948804"),
                    n.e("344265"),
                    n.e("136149"),
                    n.e("538887"),
                    n.e("720590"),
                    n.e("295998"),
                    n.e("78601"),
                    n.e("944801"),
                    n.e("947260"),
                ]).then(n.bind(n, 177079));
                return (t) => (0, l.jsx)(e, { ...t, src: u ?? "" });
            });
        if (null != i)
            return (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("344265"),
                    n.e("136149"),
                    n.e("538887"),
                    n.e("720590"),
                    n.e("295998"),
                    n.e("944801"),
                    n.e("605905"),
                ]).then(n.bind(n, 945896));
                return (t) => (0, l.jsx)(e, { ...t, href: i, textContent: o });
            });
        if (null != t && "" !== t)
            return (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("81189"), n.e("184264")]).then(n.bind(n, 898811));
                return (n) => (0, l.jsx)(e, { ...n, text: t });
            });
    }
    return (e.preventDefault(), null);
}
function u(e) {
    let t = !1,
        n = e.target;
    if (n?.tagName === "INPUT" || n?.tagName === "TEXTAREA") t = !0;
    else if (n?.closest != null && n?.closest("[contenteditable=true]") != null) t = !0;
    else if (null != i() && "" !== i()) t = !0;
    else {
        let n,
            l,
            r = e.target;
        for (; null != r;)
            ("src" in r && null != r.src && (l = r.src),
                "href" in r && null != r.href && (n = r.href),
                (r = r?.parentNode));
        (null != n || null != l) && (t = !0);
    }
    t || e.preventDefault();
}
