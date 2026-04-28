n.d(t, { A: () => h });
var a = n(627968),
    i = n(192308),
    l = n(691540),
    s = n(857250),
    o = n(97483),
    d = n(464477),
    r = n(917136),
    p = n(985018);
async function h() {
    try {
        let { ticket: e, challenge: t } = await r.startRegisterWebAuthnCredential();
        (0, i.openModalLazy)(async () => {
            let { RegisterWebAuthnCredentialModal: i } = await Promise.all([
                n.e("90217"),
                n.e("4736"),
                n.e("40114"),
            ]).then(n.bind(n, 328009));
            return (n) => (0, a.jsx)(i, { ...n, ticket: e, challenge: t });
        });
    } catch (e) {
        e.message !== p.intl.string(p.t.N2yb9a) &&
            ((0, d.Os)(e), (0, l.P0)((0, s.o)(p.intl.string(p.t.xSCvBf), o.Ck.FAILURE)));
    }
}
