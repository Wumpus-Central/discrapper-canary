n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(752238),
    l = n(433904);

function c(e) {
    let { value: t, onChange: n } = e,
        a = "json",
        c = i.useRef(null),
        [u, d] = i.useState("");
    i.useEffect(() => {
        if (null != t && o.default.hasLanguage(a)) {
            let e = o.default.highlight(a, t, !0);
            null != e ? d(e.value + "\n") : d(t + "\n");
        } else d(t + "\n");
    }, [t, a]);
    let f = (e) => {
            n(e.target.value);
        },
        p = (e) => {
            let t = e.target,
                n = t.previousElementSibling;
            null != n && ((n.scrollTop = t.scrollTop), (n.scrollLeft = t.scrollLeft));
        },
        _ = (e) => {
            if ("Tab" === e.key) {
                e.preventDefault();
                let r = e.target,
                    i = r.selectionStart,
                    a = r.selectionEnd;
                if (e.shiftKey) {
                    let e = t.lastIndexOf("\n", i - 1) + 1,
                        r = t.indexOf("\n", i),
                        a = t.substring(e, -1 === r ? t.length : r),
                        s = 0;
                    for (let e = 0; e < Math.min(2, a.length); e++)
                        if (" " === a[e]) s++;
                        else break;
                    s > 0 &&
                        (n(t.substring(0, e) + t.substring(e + s)),
                        setTimeout(() => {
                            if (null != c.current) {
                                let t = Math.max(e, i - s);
                                c.current.selectionStart = c.current.selectionEnd = t;
                            }
                        }, 0));
                } else
                    n(t.substring(0, i) + "  " + t.substring(a)),
                        setTimeout(() => {
                            null != c.current && (c.current.selectionStart = c.current.selectionEnd = i + 2);
                        }, 0);
            }
        };
    return (0, r.jsxs)("div", {
        className: l.tg,
        children: [
            (0, r.jsx)("pre", {
                className: l.c5,
                "aria-hidden": "true",
                children: (0, r.jsx)("code", {
                    className: s()("hljs", a),
                    dangerouslySetInnerHTML: {
                        __html: null != u ? u : "",
                    },
                }),
            }),
            (0, r.jsx)("textarea", {
                ref: c,
                className: l.mW,
                value: t,
                onChange: f,
                onScroll: p,
                onKeyDown: _,
                spellCheck: !1,
                autoCapitalize: "off",
                autoComplete: "off",
                autoCorrect: "off",
                rows: 30,
            }),
        ],
    });
}
