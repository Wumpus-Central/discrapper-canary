e.d(t, { Z: () => u });
var o = e(255367),
    i = e(73800),
    r = e(481060),
    s = e(63063),
    l = e(921869),
    a = e(981631),
    c = e(388032),
    d = e(233820);
function u(n) {
    let { onContinue: t, onClose: e } = n,
        u = s.Z.getArticleURL(a.BhN.CRUNCHYROLL_CONNECTION),
        C = i.useMemo(
            () => [
                {
                    label: c.intl.string(c.t['2TXHQU']),
                    icon: r.ARS
                }
            ],
            []
        );
    return (0, o.jsx)(l.m, {
        platformType: a.ABu.CRUNCHYROLL,
        headerConnect: c.intl.string(c.t['Da+3ND']),
        body: c.intl.string(c.t.MaPpPD),
        learnMoreLink: u,
        onClose: e,
        onContinue: t,
        img: (0, o.jsx)('img', {
            src: d,
            width: 234,
            height: 152,
            alt: ''
        }),
        valueProps: C
    });
}
