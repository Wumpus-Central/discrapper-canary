n.d(t, { A: () => o });
var i = n(627968),
    s = n(397927),
    l = n(464477),
    a = n(917136),
    r = n(985018);
async function o() {
    try {
        let { ticket: e, challenge: t } = await a.startRegisterWebAuthnCredential();
        (0, s.mMO)(async () => {
            let { RegisterWebAuthnCredentialModal: s } = await Promise.all([n.e("44667"), n.e("70987")]).then(
                n.bind(n, 359990),
            );
            return (n) => (0, i.jsx)(s, { ...n, ticket: e, challenge: t });
        });
    } catch (e) {
        e.message !== r.intl.string(r.t.N2yb9a) &&
            ((0, l.Os)(e), (0, s.showToast)((0, s.createToast)(r.intl.string(r.t.xSCvBf), s.ToastType.FAILURE)));
    }
}
