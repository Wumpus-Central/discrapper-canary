t.d(n, { Z: () => u });
var o = t(54381),
    i = t(473749),
    r = t(481060),
    a = t(63063),
    s = t(921869),
    l = t(981631),
    d = t(388032),
    c = t(233820);
function u(e) {
    let { onContinue: n, onClose: t } = e,
        u = a.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION),
        C = i.useMemo(
            () => [
                {
                    label: d.intl.string(d.t["2TXHQd"]),
                    icon: r.ARS,
                },
            ],
            [],
        );
    return (0, o.jsx)(s.m, {
        platformType: l.ABu.CRUNCHYROLL,
        headerConnect: d.intl.string(d.t["Da+3NJ"]),
        body: d.intl.string(d.t.MaPpPL),
        learnMoreLink: u,
        onClose: t,
        onContinue: n,
        img: (0, o.jsx)("img", {
            src: c,
            width: 234,
            height: 152,
            alt: "",
        }),
        valueProps: C,
    });
}
