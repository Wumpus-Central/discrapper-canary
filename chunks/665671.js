n.d(t, { A: () => o });
var i = n(627968),
    s = n(397927),
    l = n(464477),
    r = n(917136),
    a = n(985018);
async function o() {
    try {
        let { ticket: e, challenge: t } = await r.startRegisterWebAuthnCredential();
        (0, s.mMO)(async () => {
            let { RegisterWebAuthnCredentialModal: s } = await Promise.all([n.e("44667"), n.e("6022")]).then(
                n.bind(n, 359990),
            );
            return (n) => (0, i.jsx)(s, { ...n, ticket: e, challenge: t });
        });
    } catch (e) {
        e.message !== a.intl.string(a.t.N2yb9a) &&
            ((0, l.Os)(e), (0, s.showToast)((0, s.createToast)(a.intl.string(a.t.xSCvBf), s.ToastType.FAILURE)));
    }
}
