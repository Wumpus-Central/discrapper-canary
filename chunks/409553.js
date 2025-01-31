n.d(t, { Z: () => u });
var o = n(200651),
    i = n(192379),
    r = n(481060),
    s = n(63063),
    a = n(921869),
    l = n(981631),
    c = n(388032),
    d = n(493358);
function u(e) {
    let { onContinue: t, onClose: n } = e,
        u = s.Z.getArticleURL(l.BhN.XBOX_CONNECTION),
        p = c.intl.format(c.t.CIc3IC, { helpdeskArticleUrl: u }),
        f = i.useMemo(
            () => [
                {
                    label: c.intl.string(c.t.ihQXsb),
                    icon: r.gj8
                },
                {
                    label: c.intl.string(c.t.Xt1n4O),
                    icon: r.m3e
                },
                {
                    label: c.intl.string(c.t.xqVY3t),
                    icon: r.BFJ
                },
                {
                    label: c.intl.string(c.t.iQsKVV),
                    icon: r.iWm
                }
            ],
            []
        );
    return (0, o.jsx)(a.m, {
        platformType: l.ABu.XBOX,
        headerConnect: c.intl.string(c.t.m8aaho),
        headerReconnect: c.intl.string(c.t.z3rAho),
        body: p,
        onClose: n,
        onContinue: t,
        img: (0, o.jsx)('img', {
            src: d.Z,
            width: 230,
            height: 160,
            alt: ''
        }),
        valueProps: f
    });
}
