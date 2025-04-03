n.d(e, { A: () => u });
var o = n(200651),
    i = n(192379),
    r = n(481060),
    s = n(63063),
    c = n(921869),
    a = n(981631),
    d = n(388032),
    l = n(660025);
function u(t) {
    let { platformType: e, onContinue: n, onClose: u } = t,
        p = i.useMemo(
            () => [
                {
                    label: d.NW.string(d.t['+eJP7u']),
                    subLabel: d.NW.string(d.t['+0VIUl']),
                    icon: r.gj8
                },
                {
                    label: d.NW.string(d.t.ZH4QFR),
                    icon: r.iWm
                }
            ],
            []
        ),
        _ = s.Z.getArticleURL(a.BhN.PS_CONNECTION),
        b = d.NW.format(d.t.kqZQNT, { helpdeskArticleUrl: _ });
    return (0, o.jsx)(c.m, {
        platformType: e,
        headerConnect: d.NW.string(d.t.xAWHOz),
        headerReconnect: d.NW.string(d.t['ZJ/vBg']),
        body: b,
        onClose: u,
        onContinue: n,
        img: (0, o.jsx)('img', {
            src: l.Z,
            width: 230,
            height: 160,
            alt: ''
        }),
        valueProps: p
    });
}
