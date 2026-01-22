n.d(t, { A: () => h }), n(896048), n(638769);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(311907),
    c = n(397927),
    o = n(773669),
    d = n(985018),
    u = n(873523);
let p = (0, d.getAvailableLocales)();
function h(e) {
    let { application: t, className: n } = e,
        r = (0, s.bG)([o.default], () => o.default.locale),
        { supportedLanguages: h, usersLanguageIsFirst: m } = a.useMemo(() => {
            var e;
            if ((null == (e = t.directory_entry) ? void 0 : e.supported_locales) != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    n = e.has(r),
                    l = p.filter((t) => e.has(t.value));
                return (
                    n && l.sort((e, t) => (e.value === r ? -1 : +(t.value === r))),
                    {
                        supportedLanguages: l.map((e) => d.intl.string(e.localizedName)),
                        usersLanguageIsFirst: n,
                    }
                );
            }
            return {
                supportedLanguages: [],
                usersLanguageIsFirst: !1,
            };
        }, [t.directory_entry, r]);
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsx)(c.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: d.intl.string(d.t.Fbjlu3),
            }),
            (0, l.jsx)("ul", {
                className: u.nw,
                children: h.map((e, t) =>
                    (0, l.jsx)(
                        "li",
                        {
                            className: i()(u.WH, u.O6),
                            children: (0, l.jsx)(c.Text, {
                                variant: 0 === t && m ? "text-sm/bold" : "text-sm/normal",
                                children: e,
                            }),
                        },
                        e,
                    ),
                ),
            }),
            " ",
        ],
    });
}
