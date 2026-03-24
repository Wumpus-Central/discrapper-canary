a.d(t, { A: () => c });
var l = a(627968),
    n = a(64700),
    r = a(503698),
    s = a.n(r),
    i = a(157941),
    o = a(752238),
    d = a(781992);
function c(e) {
    let { value: t, onChange: a } = e,
        r = "json",
        c = n.useRef(null),
        [u, x] = n.useState("");
    return (
        n.useEffect(() => {
            if (null != t && o.default.hasLanguage(r)) {
                let e = o.default.highlight(r, t, !0);
                null != e ? x(e.value + "\n") : x(t + "\n");
            } else x(t + "\n");
        }, [t, r]),
        (0, l.jsxs)("div", {
            className: d.t,
            children: [
                (0, l.jsx)("pre", {
                    className: d.c5,
                    "aria-hidden": "true",
                    children: (0, l.jsx)(i.l, {
                        location: "LayoutEditor",
                        code: t,
                        lang: "json",
                        className: "hljs",
                        children: (0, l.jsx)("code", {
                            className: s()("hljs", r),
                            dangerouslySetInnerHTML: { __html: u ?? "" },
                        }),
                    }),
                }),
                (0, l.jsx)("textarea", {
                    ref: c,
                    className: d.mW,
                    value: t,
                    onChange: (e) => {
                        a(e.target.value);
                    },
                    onScroll: (e) => {
                        let t = e.target,
                            a = t.previousElementSibling;
                        null != a && ((a.scrollTop = t.scrollTop), (a.scrollLeft = t.scrollLeft));
                    },
                    onKeyDown: (e) => {
                        if ("Tab" === e.key) {
                            e.preventDefault();
                            let l = e.target,
                                n = l.selectionStart,
                                r = l.selectionEnd;
                            if (e.shiftKey) {
                                let e = t.lastIndexOf("\n", n - 1) + 1,
                                    l = t.indexOf("\n", n),
                                    r = t.substring(e, -1 === l ? t.length : l),
                                    s = 0;
                                for (let e = 0; e < Math.min(2, r.length); e++)
                                    if (" " === r[e]) s++;
                                    else break;
                                s > 0 &&
                                    (a(t.substring(0, e) + t.substring(e + s)),
                                    setTimeout(() => {
                                        if (null != c.current) {
                                            let t = Math.max(e, n - s);
                                            c.current.selectionStart = c.current.selectionEnd = t;
                                        }
                                    }, 0));
                            } else
                                a(t.substring(0, n) + "  " + t.substring(r)),
                                    setTimeout(() => {
                                        null != c.current &&
                                            (c.current.selectionStart = c.current.selectionEnd = n + 2);
                                    }, 0);
                        }
                    },
                    spellCheck: !1,
                    autoCapitalize: "off",
                    autoComplete: "off",
                    autoCorrect: "off",
                    rows: 30,
                }),
            ],
        })
    );
}
