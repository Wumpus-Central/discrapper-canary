e.d(n, { A: () => u });
var o = e(200651),
    i = e(192379),
    r = e(481060),
    s = e(63063),
    c = e(921869),
    a = e(981631),
    l = e(388032),
    d = e(660025);
function u(t) {
    let { platformType: n, onContinue: e, onClose: u } = t,
        p = i.useMemo(
            () => [
                {
                    label: l.intl.string(l.t['+eJP7u']),
                    subLabel: l.intl.string(l.t['+0VIUl']),
                    icon: r.gj8
                },
                {
                    label: l.intl.string(l.t.ZH4QFR),
                    icon: r.iWm
                }
            ],
            []
        ),
        _ = s.Z.getArticleURL(a.BhN.PS_CONNECTION),
        b = l.intl.format(l.t.kqZQNT, { helpdeskArticleUrl: _ });
    return (0, o.jsx)(c.m, {
        platformType: n,
        headerConnect: l.intl.string(l.t.xAWHOz),
        headerReconnect: l.intl.string(l.t['ZJ/vBg']),
        body: b,
        onClose: u,
        onContinue: e,
        img: (0, o.jsx)('img', {
            src: d.Z,
            width: 230,
            height: 160,
            alt: ''
        }),
        valueProps: p
    });
}
