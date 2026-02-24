"use strict";
n.d(t, { A: () => u });
var r = n(439372),
    i = n(961350),
    s = n(881253),
    a = n(191986),
    o = n(382341);
class l extends r.A {
    actions = {
        AUTHENTICATOR_DELETE: this.handleAuthenticatorDelete,
        MFA_WEBAUTHN_CREDENTIALS_LOADED: this.handleWebAuthnCredentialsLoaded,
    };
    handleAuthenticatorDelete(e) {
        let { credential: t } = e;
        a.V.getConfig({ location: "manager" }).enabled && o.A.signalUnknownCredential(t);
    }
    handleWebAuthnCredentialsLoaded(e) {
        let { credentials: t } = e;
        if (s.k.getConfig({ location: "manager" }).enabled) {
            let e = i.default.getId();
            o.A.signalAllAcceptedCredentials(t, e);
        }
    }
}
let u = new l();
