n.d(t, { A: () => C });
var o = n(627968),
    i = n(64700),
    r = n(526181),
    s = n(975571),
    l = n(305881),
    a = n(652215),
    d = n(985018),
    c = n(630552);
function C(e) {
    let { onContinue: t, onClose: n } = e,
        C = s.A.getArticleURL(a.MVz.CRUNCHYROLL_CONNECTION),
        h = i.useMemo(() => [{ label: d.intl.string(d.t["2TXHQd"]), icon: r.U }], []);
    return (0, o.jsx)(l.B, {
        platformType: a.fg2.CRUNCHYROLL,
        headerConnect: d.intl.string(d.t["Da+3NJ"]),
        body: d.intl.string(d.t.MaPpPL),
        learnMoreLink: C,
        onClose: n,
        onContinue: t,
        img: (0, o.jsx)("img", { src: c, width: 234, height: 152, alt: "" }),
        valueProps: h,
    });
}
