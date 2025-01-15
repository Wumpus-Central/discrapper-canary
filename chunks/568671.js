n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(626135),
    a = n(503899),
    l = n(292352),
    o = n(981631),
    c = n(388032),
    d = n(877396);
function u() {
    return (0, i.jsxs)(s.Button, {
        innerClassName: d.qrCodeButtonContent,
        size: s.Button.Sizes.LARGE,
        onClick: () => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('57830'), n.e('90688')]).then(n.bind(n, 978305));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
                r.default.track(o.rMx.FAMILY_CENTER_ACTION, { action: l.YC.ShowQRCodeModal });
        },
        children: [(0, i.jsx)(a.Z, {}), c.intl.string(c.t.Ta9byc)]
    });
}
