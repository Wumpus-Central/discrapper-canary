n.d(t, { A: () => c });
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(253932),
    o = n(994500),
    l = n(985018);
function c(e) {
    let { userId: t, onClick: n } = e;
    if (!(0, i.bG)([o.A], () => o.A.isIgnored(t))) return null;
    let c = () => {
        s.j0.updateSetting(!0), n();
    };
    return (0, r.jsx)(a.QWc, {
        onClick: c,
        variant: "primary",
        size: "sm",
        textVariant: "text-sm/medium",
        text: l.intl.string(l.t.QbcRCJ),
    });
}
