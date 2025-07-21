t.d(e, { Z: () => u });
var o = t(255367),
    i = t(73800),
    r = t(481060),
    s = t(63063),
    l = t(921869),
    a = t(981631),
    c = t(388032),
    d = t(233820);
function u(n) {
    let { onContinue: e, onClose: t } = n,
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
        onClose: t,
        onContinue: e,
        img: (0, o.jsx)('img', {
            src: d,
            width: 234,
            height: 152,
            alt: ''
        }),
        valueProps: C
    });
}
