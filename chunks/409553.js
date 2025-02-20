n.d(t, { Z: () => u });
var o = n(200651),
    r = n(192379),
    i = n(481060),
    s = n(63063),
    a = n(921869),
    c = n(981631),
    l = n(388032),
    d = n(493358);
function u(e) {
    let { onContinue: t, onClose: n } = e,
        u = s.Z.getArticleURL(c.BhN.XBOX_CONNECTION),
        f = l.NW.format(l.t.CIc3IC, { helpdeskArticleUrl: u }),
        p = r.useMemo(
            () => [
                {
                    label: l.NW.string(l.t.ihQXsb),
                    icon: i.gj8
                },
                {
                    label: l.NW.string(l.t.Xt1n4O),
                    icon: i.m3e
                },
                {
                    label: l.NW.string(l.t.xqVY3t),
                    icon: i.BFJ
                },
                {
                    label: l.NW.string(l.t.iQsKVV),
                    icon: i.iWm
                }
            ],
            []
        );
    return (0, o.jsx)(a.m, {
        platformType: c.ABu.XBOX,
        headerConnect: l.NW.string(l.t.m8aaho),
        headerReconnect: l.NW.string(l.t.z3rAho),
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
