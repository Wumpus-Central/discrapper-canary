t.d(n, { Z: () => u });
var o = t(200651),
    i = t(192379),
    r = t(481060),
    s = t(63063),
    a = t(921869),
    l = t(981631),
    c = t(388032),
    d = t(233820);
function u(e) {
    let { onContinue: n, onClose: t } = e,
        u = s.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION),
        C = i.useMemo(
            () => [
                {
                    label: c.NW.string(c.t['2TXHQU']),
                    icon: r.ARS
                }
            ],
            []
        );
    return (0, o.jsx)(a.m, {
        platformType: l.ABu.CRUNCHYROLL,
        headerConnect: c.NW.string(c.t['Da+3ND']),
        body: c.NW.string(c.t.MaPpPD),
        learnMoreLink: u,
        onClose: t,
        onContinue: n,
        img: (0, o.jsx)('img', {
            src: d,
            width: 234,
            height: 152,
            alt: ''
        }),
        valueProps: C
    });
}
