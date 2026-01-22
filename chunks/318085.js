e.d(n, { g: () => b });
var o = e(627968),
    i = e(64700),
    a = e(397927),
    s = e(975571),
    d = e(210139),
    r = e(652215),
    c = e(985018),
    l = e(547166);
function b(t) {
    let { platformType: n, onContinue: e, onClose: b } = t,
        p = i.useMemo(
            () => [
                {
                    label: c.intl.string(c.t["+eJP7o"]),
                    subLabel: c.intl.string(c.t["+0VIUh"]),
                    icon: a.HKD,
                },
                {
                    label: c.intl.string(c.t.ZH4QFa),
                    icon: a._xR,
                },
            ],
            [],
        ),
        f = s.A.getArticleURL(r.MVz.PS_CONNECTION),
        A = c.intl.format(c.t.kqZQNe, { helpdeskArticleUrl: f });
    return (0, o.jsx)(d.B, {
        platformType: n,
        headerConnect: c.intl.string(c.t.xAWHOy),
        headerReconnect: c.intl.string(c.t["ZJ/vBh"]),
        body: A,
        onClose: b,
        onContinue: e,
        img: (0, o.jsx)("img", {
            src: l.A,
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: p,
    });
}
