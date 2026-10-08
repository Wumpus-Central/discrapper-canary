n.d(t, { A: () => d });
var a = n(477900),
    l = n(192308),
    s = n(376357),
    i = n(464477),
    o = n(917136),
    r = n(660183);
async function d() {
    try {
        let { ticket: e, challenge: t } = await o.startRegisterWebAuthnCredential();
        (0, l.openModalLazy)(async () => {
            let { RegisterWebAuthnCredentialModal: l } = await Promise.all([
                n.e("113391"),
                n.e("82721"),
                n.e("104736"),
                n.e("840114"),
            ]).then(n.bind(n, 328009));
            return (n) => (0, a.jsx)(l, { ...n, ticket: e, challenge: t });
        });
    } catch (e) {
        e.message !== r.intl.string(r.t.N2yb9a) &&
            ((0, i.Os)(e), (0, s.P0)((0, s.ox)(r.intl.string(r.t.xSCvBf), s.Ck.FAILURE)));
    }
}
