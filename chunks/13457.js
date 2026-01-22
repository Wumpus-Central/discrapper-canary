n.d(t, { A: () => f });
var r = n(627968),
    s = n(64700),
    i = n(397927),
    o = n(975571),
    a = n(210139),
    c = n(652215),
    l = n(985018),
    d = n(928490);
function f(e) {
    let { onContinue: t, onClose: n } = e,
        f = o.A.getArticleURL(c.MVz.XBOX_CONNECTION),
        b = l.intl.format(l.t.CIc3IN, { helpdeskArticleUrl: f }),
        u = s.useMemo(
            () => [
                {
                    label: l.intl.string(l.t.ihQXsb),
                    icon: i.HKD,
                },
                {
                    label: l.intl.string(l.t.Xt1n4P),
                    icon: i.ofK,
                },
                {
                    label: l.intl.string(l.t.xqVY3p),
                    icon: i.nFg,
                },
                {
                    label: l.intl.string(l.t.iQsKVW),
                    icon: i._xR,
                },
            ],
            [],
        );
    return (0, r.jsx)(a.B, {
        platformType: c.fg2.XBOX,
        headerConnect: l.intl.string(l.t.m8aahn),
        headerReconnect: l.intl.string(l.t.z3rAhq),
        body: b,
        onClose: n,
        onContinue: t,
        img: (0, r.jsx)("img", {
            src: d.A,
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: u,
    });
}
