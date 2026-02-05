a.d(t, { A: () => m });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(311907),
    o = a(397927),
    c = a(773669),
    d = a(985018),
    u = a(873523);
let h = (0, d.getAvailableLocales)();
function m(e) {
    let { application: t, className: a } = e,
        s = (0, r.bG)([c.default], () => c.default.locale),
        { supportedLanguages: m, usersLanguageIsFirst: p } = i.useMemo(() => {
            if (t.directory_entry?.supported_locales != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    a = e.has(s),
                    n = h.filter((t) => e.has(t.value));
                return (
                    a && n.sort((e, t) => (e.value === s ? -1 : +(t.value === s))),
                    { supportedLanguages: n.map((e) => d.intl.string(e.localizedName)), usersLanguageIsFirst: a }
                );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
        }, [t.directory_entry, s]);
    return (0, n.jsxs)("div", {
        className: a,
        children: [
            (0, n.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: d.intl.string(d.t.Fbjlu3),
            }),
            (0, n.jsx)("ul", {
                className: u.nw,
                children: m.map((e, t) =>
                    (0, n.jsx)(
                        "li",
                        {
                            className: l()(u.WH, u.O6),
                            children: (0, n.jsx)(o.Text, {
                                variant: 0 === t && p ? "text-sm/bold" : "text-sm/normal",
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
