n.d(t, { g: () => _ });
var o = n(627968),
    i = n(64700),
    r = n(397927),
    s = n(975571),
    a = n(305881),
    c = n(652215),
    l = n(985018),
    d = n(547166);
function _(e) {
    let { platformType: t, onContinue: n, onClose: _ } = e,
        p = i.useMemo(
            () => [
                { label: l.intl.string(l.t["+eJP7o"]), subLabel: l.intl.string(l.t["+0VIUh"]), icon: r.HKD },
                { label: l.intl.string(l.t.ZH4QFa), icon: r._xR },
            ],
            [],
        ),
        b = s.A.getArticleURL(c.MVz.PS_CONNECTION),
        C = l.intl.format(l.t.kqZQNe, { helpdeskArticleUrl: b });
    return (0, o.jsx)(a.B, {
        platformType: t,
        headerConnect: l.intl.string(l.t.xAWHOy),
        headerReconnect: l.intl.string(l.t["ZJ/vBh"]),
        body: C,
        onClose: _,
        onContinue: n,
        img: (0, o.jsx)("img", { src: d.A, width: 230, height: 160, alt: "" }),
        valueProps: p,
    });
}
