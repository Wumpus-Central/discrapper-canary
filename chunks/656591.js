n.d(t, { g: () => A });
var o = n(627968),
    i = n(64700),
    r = n(983851),
    s = n(687966),
    a = n(975571),
    l = n(305881),
    c = n(652215),
    d = n(985018),
    _ = n(547166);
function A(e) {
    let { platformType: t, onContinue: n, onClose: A } = e,
        T = i.useMemo(
            () => [
                { label: d.intl.string(d.t["+eJP7o"]), subLabel: d.intl.string(d.t["+0VIUh"]), icon: r.H },
                { label: d.intl.string(d.t.ZH4QFa), icon: s._ },
            ],
            [],
        ),
        p = a.A.getArticleURL(c.MVz.PS_CONNECTION),
        b = d.intl.format(d.t.kqZQNe, { helpdeskArticleUrl: p });
    return (0, o.jsx)(l.B, {
        platformType: t,
        headerConnect: d.intl.string(d.t.xAWHOy),
        headerReconnect: d.intl.string(d.t["ZJ/vBh"]),
        body: b,
        onClose: A,
        onContinue: n,
        img: (0, o.jsx)("img", { src: _.A, width: 230, height: 160, alt: "" }),
        valueProps: T,
    });
}
