n.d(t, { A: () => d });
var a = n(477900),
    i = n(192308),
    l = n(858899),
    s = n(464477),
    o = n(917136),
    r = n(105292);
async function d() {
    try {
        let { ticket: e, challenge: t } = await o.startRegisterWebAuthnCredential();
        (0, i.openModalLazy)(async () => {
            let { RegisterWebAuthnCredentialModal: i } = await Promise.all([
                n.e("113391"),
                n.e("82721"),
                n.e("104736"),
                n.e("840114"),
            ]).then(n.bind(n, 328009));
            return (n) => (0, a.jsx)(i, { ...n, ticket: e, challenge: t });
        });
    } catch (e) {
        e.message !== r.intl.string(r.t.N2yb9a) &&
            ((0, s.Os)(e), (0, l.P0)({ text: r.intl.string(r.t.xSCvBf), variant: "critical" }));
    }
}
