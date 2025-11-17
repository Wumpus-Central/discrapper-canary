n.d(t, { Z: () => u });
var o = n(54381),
    r = n(473749),
    i = n(481060),
    s = n(63063),
    a = n(921869),
    c = n(981631),
    l = n(388032),
    d = n(493358);
function u(e) {
    let { onContinue: t, onClose: n } = e,
        u = s.Z.getArticleURL(c.BhN.XBOX_CONNECTION),
        p = l.intl.format(l.t.CIc3IN, { helpdeskArticleUrl: u }),
        f = r.useMemo(
            () => [
                {
                    label: l.intl.string(l.t.ihQXsb),
                    icon: i.gj8,
                },
                {
                    label: l.intl.string(l.t.Xt1n4P),
                    icon: i.m3e,
                },
                {
                    label: l.intl.string(l.t.xqVY3p),
                    icon: i.BFJ,
                },
                {
                    label: l.intl.string(l.t.iQsKVW),
                    icon: i.iWm,
                },
            ],
            [],
        );
    return (0, o.jsx)(a.m, {
        platformType: c.ABu.XBOX,
        headerConnect: l.intl.string(l.t.m8aahn),
        headerReconnect: l.intl.string(l.t.z3rAhq),
        body: p,
        onClose: n,
        onContinue: t,
        img: (0, o.jsx)("img", {
            src: d.Z,
            width: 230,
            height: 160,
            alt: "",
        }),
        valueProps: f,
    });
}
