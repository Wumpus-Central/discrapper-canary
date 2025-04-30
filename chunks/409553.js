n.d(t, { Z: () => u });
var o = n(200651),
    r = n(192379),
    i = n(481060),
    s = n(63063),
    a = n(921869),
    l = n(981631),
    c = n(388032),
    d = n(493358);
function u(e) {
    let { onContinue: t, onClose: n } = e,
        u = s.Z.getArticleURL(l.BhN.XBOX_CONNECTION),
        f = c.intl.format(c.t.CIc3IC, { helpdeskArticleUrl: u }),
        p = r.useMemo(
            () => [
                {
                    label: c.intl.string(c.t.ihQXsb),
                    icon: i.gj8
                },
                {
                    label: c.intl.string(c.t.Xt1n4O),
                    icon: i.m3e
                },
                {
                    label: c.intl.string(c.t.xqVY3t),
                    icon: i.BFJ
                },
                {
                    label: c.intl.string(c.t.iQsKVV),
                    icon: i.iWm
                }
            ],
            []
        );
    return (0, o.jsx)(a.m, {
        platformType: l.ABu.XBOX,
        headerConnect: c.intl.string(c.t.m8aaho),
        headerReconnect: c.intl.string(c.t.z3rAho),
        body: f,
        onClose: n,
        onContinue: t,
        img: (0, o.jsx)('img', {
            src: d.Z,
            width: 230,
            height: 160,
            alt: ''
        }),
        valueProps: p
    });
}
