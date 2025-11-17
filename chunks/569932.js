e.d(n, { A: () => u });
var o = e(54381),
    i = e(473749),
    r = e(481060),
    s = e(63063),
    a = e(921869),
    c = e(981631),
    l = e(388032),
    d = e(660025);
function u(t) {
    let { platformType: n, onContinue: e, onClose: u } = t,
        p = i.useMemo(
            () => [
                {
                    label: l.intl.string(l.t["+eJP7o"]),
                    subLabel: l.intl.string(l.t["+0VIUh"]),
                    icon: r.gj8,
                },
                {
                    label: l.intl.string(l.t.ZH4QFa),
                    icon: r.iWm,
                },
            ],
            [],
        ),
        _ = s.Z.getArticleURL(c.BhN.PS_CONNECTION),
        b = l.intl.format(l.t.kqZQNe, { helpdeskArticleUrl: _ });
    return (0, o.jsx)(a.m, {
        platformType: n,
        headerConnect: l.intl.string(l.t.xAWHOy),
        headerReconnect: l.intl.string(l.t["ZJ/vBh"]),
        body: b,
        onClose: u,
        onContinue: e,
        img: (0, o.jsx)("img", {
            src: d.Z,
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: p,
    });
}
