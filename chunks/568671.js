n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(626135),
    l = n(503899),
    a = n(292352),
    o = n(981631),
    c = n(388032),
    d = n(877396);
function u() {
    return (0, i.jsxs)(s.zxk, {
        innerClassName: d.qrCodeButtonContent,
        size: s.zxk.Sizes.LARGE,
        onClick: () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('62729'), n.e('90688')]).then(n.bind(n, 978305));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
                r.default.track(o.rMx.FAMILY_CENTER_ACTION, { action: a.YC.ShowQRCodeModal });
        },
        children: [(0, i.jsx)(l.Z, {}), c.intl.string(c.t.Ta9byc)]
    });
}
