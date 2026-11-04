let i = /input/i,
    r = /textarea/i,
    a = new Set([
        "text",
        "password",
        "number",
        "date",
        "datetime-local",
        "time",
        "week",
        "month",
        "email",
        "search",
        "tel",
        "url",
    ]);
n.d(
    t,
    {},
    {
        BF: function (e) {
            let { target: t } = e;
            return null == t
                ? null
                : "ownerDocument" in t
                  ? t.ownerDocument
                  : "document" in t
                    ? t.document
                    : (console.warn("Unable to get owner document from event", e.type), null);
        },
        Cw: function (e) {
            if (null == e) return !1;
            if ("true" === e.getAttribute("contenteditable") || r.test(e.tagName)) return !0;
            if (i.test(e.tagName)) {
                let t = e.getAttribute("type") ?? "text";
                if (a.has(t)) return !0;
            }
            return !1;
        },
        p3: function (e, t) {
            let n = e.parentElement;
            for (; null != n;) {
                if (n.classList.contains(t)) return n;
                n = n.parentElement;
            }
            return null;
        },
        vq: function (e, t) {
            if (null == e) return !1;
            let n = e?.ownerDocument?.defaultView;
            if (null == n) return (console.warn("Unable to determine render window for element", e), !1);
            let i = t?.name ?? "Element",
                r = n[i];
            return null == r ? (console.warn(`Unable to find element constructor "${i}" in`, n), !1) : e instanceof r;
        },
        wB: function (e, t) {
            let n = e.parentElement;
            for (; null != n;) {
                if (null != n.getAttribute(t)) return n;
                n = n.parentElement;
            }
            return null;
        },
        xI: function (e) {
            let t = parseInt(e, 10);
            return isNaN(t) ? 0 : t;
        },
    },
);
