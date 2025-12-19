n.d(t, { A: () => b });
var o = n(54381),
    i = n(473749),
    a = n(481060),
    r = n(63063),
    d = n(921869),
    s = n(981631),
    c = n(388032),
    l = n(322066);
function b(e) {
    let { platformType: t, onContinue: n, onClose: b } = e,
        u = i.useMemo(
            () => [
                {
                    label: c.intl.string(c.t["+eJP7o"]),
                    subLabel: c.intl.string(c.t["+0VIUh"]),
                    icon: a.gj8,
                },
                {
                    label: c.intl.string(c.t.ZH4QFa),
                    icon: a.iWm,
                },
            ],
            [],
        ),
        p = r.Z.getArticleURL(s.BhN.PS_CONNECTION),
        C = c.intl.format(c.t.kqZQNe, { helpdeskArticleUrl: p });
    return (0, o.jsx)(d.m, {
        platformType: t,
        headerConnect: c.intl.string(c.t.xAWHOy),
        headerReconnect: c.intl.string(c.t["ZJ/vBh"]),
        body: C,
        onClose: b,
        onContinue: n,
        img: (0, o.jsx)("img", {
            src: l.Z,
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: u,
    });
}
