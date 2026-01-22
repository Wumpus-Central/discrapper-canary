t.d(e, { A: () => C });
var i = t(627968),
    o = t(64700),
    r = t(397927),
    s = t(975571),
    a = t(210139),
    d = t(652215),
    l = t(985018),
    c = t(630552);
function C(n) {
    let { onContinue: e, onClose: t } = n,
        C = s.A.getArticleURL(d.MVz.CRUNCHYROLL_CONNECTION),
        b = o.useMemo(
            () => [
                {
                    label: l.intl.string(l.t["2TXHQd"]),
                    icon: r.Uk3,
                },
            ],
            [],
        );
    return (0, i.jsx)(a.B, {
        platformType: d.fg2.CRUNCHYROLL,
        headerConnect: l.intl.string(l.t["Da+3NJ"]),
        body: l.intl.string(l.t.MaPpPL),
        learnMoreLink: C,
        onClose: t,
        onContinue: e,
        img: (0, i.jsx)("img", {
            src: c,
            width: 234,
            height: 152,
            alt: "",
        }),
        valueProps: b,
    });
}
