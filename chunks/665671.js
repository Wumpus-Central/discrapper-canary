n.d(t, { A: () => c });
var i = n(627968),
    s = n(192308),
    l = n(691540),
    a = n(857250),
    r = n(97483),
    o = n(464477),
    d = n(917136),
    u = n(985018);
async function c() {
    try {
        let { ticket: e, challenge: t } = await d.startRegisterWebAuthnCredential();
        (0, s.openModalLazy)(async () => {
            let { RegisterWebAuthnCredentialModal: s } = await Promise.all([n.e("44667"), n.e("69734")]).then(
                n.bind(n, 359990),
            );
            return (n) => (0, i.jsx)(s, { ...n, ticket: e, challenge: t });
        });
    } catch (e) {
        e.message !== u.intl.string(u.t.N2yb9a) &&
            ((0, o.Os)(e), (0, l.P0)((0, a.o)(u.intl.string(u.t.xSCvBf), r.Ck.FAILURE)));
    }
}
