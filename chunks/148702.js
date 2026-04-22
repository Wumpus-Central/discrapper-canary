"use strict";
a.d(t, { A: () => c });
var r = a(627968),
    l = a(64700),
    n = a(503698),
    i = a.n(n),
    s = a(157941),
    o = a(752238),
    d = a(585289);
function c(e) {
    let { value: t, onChange: a } = e,
        n = "json",
        c = l.useRef(null),
        [u, h] = l.useState("");
    return (
        l.useEffect(() => {
            if (null != t && o.default.hasLanguage(n)) {
                let e = o.default.highlight(n, t, !0);
                null != e ? h(e.value + "\n") : h(t + "\n");
            } else h(t + "\n");
        }, [t, n]),
        (0, r.jsxs)("div", {
            className: d.t,
            children: [
                (0, r.jsx)("pre", {
                    className: d.c5,
                    "aria-hidden": "true",
                    children: (0, r.jsx)(s.l, {
                        location: "LayoutEditor",
                        code: t,
                        lang: "json",
                        className: "hljs",
                        children: (0, r.jsx)("code", {
                            className: i()("hljs", n),
                            dangerouslySetInnerHTML: { __html: u ?? "" },
                        }),
                    }),
                }),
                (0, r.jsx)("textarea", {
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
                            let r = e.target,
                                l = r.selectionStart,
                                n = r.selectionEnd;
                            if (e.shiftKey) {
                                let e = t.lastIndexOf("\n", l - 1) + 1,
                                    r = t.indexOf("\n", l),
                                    n = t.substring(e, -1 === r ? t.length : r),
                                    i = 0;
                                for (let e = 0; e < Math.min(2, n.length); e++)
                                    if (" " === n[e]) i++;
                                    else break;
                                i > 0 &&
                                    (a(t.substring(0, e) + t.substring(e + i)),
                                    setTimeout(() => {
                                        if (null != c.current) {
                                            let t = Math.max(e, l - i);
                                            c.current.selectionStart = c.current.selectionEnd = t;
                                        }
                                    }, 0));
                            } else
                                a(t.substring(0, l) + "  " + t.substring(n)),
                                    setTimeout(() => {
                                        null != c.current &&
                                            (c.current.selectionStart = c.current.selectionEnd = l + 2);
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
