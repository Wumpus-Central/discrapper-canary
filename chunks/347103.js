t.d(n, { A: () => C });
var o = t(627968),
    i = t(64700),
    r = t(526181),
    s = t(975571),
    l = t(305881),
    a = t(652215),
    d = t(985018),
    c = t(630552);
function C(e) {
    let { onContinue: n, onClose: t } = e,
        C = s.A.getArticleURL(a.MVz.CRUNCHYROLL_CONNECTION),
        _ = i.useMemo(() => [{ label: d.intl.string(d.t["2TXHQd"]), icon: r.U }], []);
    return (0, o.jsx)(l.B, {
        platformType: a.fg2.CRUNCHYROLL,
        headerConnect: d.intl.string(d.t["Da+3NJ"]),
        body: d.intl.string(d.t.MaPpPL),
        learnMoreLink: C,
        onClose: t,
        onContinue: n,
        img: (0, o.jsx)("img", { src: c, width: 234, height: 152, alt: "" }),
        valueProps: _,
    });
}
