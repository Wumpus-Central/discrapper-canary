a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(311907),
    o = a(534514),
    c = a(834730),
    d = a(773669),
    u = a(985018),
    h = a(820764);
let m = (0, u.getAvailableLocales)();
function p(e) {
    let { application: t, className: a } = e,
        i = (0, r.bG)([d.default], () => d.default.locale),
        { supportedLanguages: p, usersLanguageIsFirst: _ } = l.useMemo(() => {
            if (t.directory_entry?.supported_locales != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    a = e.has(i),
                    n = m.filter((t) => e.has(t.value));
                return (
                    a && n.sort((e, t) => (e.value === i ? -1 : +(t.value === i))),
                    { supportedLanguages: n.map((e) => u.intl.string(e.localizedName)), usersLanguageIsFirst: a }
                );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
        }, [t.directory_entry, i]);
    return (0, n.jsxs)("div", {
        className: a,
        children: [
            (0, n.jsx)(o.D, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: u.intl.string(u.t.Fbjlu3),
            }),
            (0, n.jsx)("ul", {
                className: h.nw,
                children: p.map((e, t) =>
                    (0, n.jsx)(
                        "li",
                        {
                            className: s()(h.WH, h.O6),
                            children: (0, n.jsx)(c.E, {
                                variant: 0 === t && _ ? "text-sm/bold" : "text-sm/normal",
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
