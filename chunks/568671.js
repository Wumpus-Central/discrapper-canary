n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(626135),
    s = n(503899),
    l = n(292352),
    o = n(981631),
    c = n(388032),
    d = n(195892);
function u() {
    return (0, i.jsxs)(r.zxk, {
        innerClassName: d.qrCodeButtonContent,
        size: r.zxk.Sizes.LARGE,
        onClick: () => {
            (0, r.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('62729'), n.e('90688')]).then(n.bind(n, 978305));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
                a.default.track(o.rMx.FAMILY_CENTER_ACTION, { action: l.YC.ShowQRCodeModal });
        },
        children: [(0, i.jsx)(s.Z, {}), c.intl.string(c.t.Ta9byc)]
    });
}
