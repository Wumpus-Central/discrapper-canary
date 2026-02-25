"use strict";
n.d(t, { A: () => c });
var r = n(439372),
    i = n(961350),
    s = n(881253),
    a = n(173953),
    o = n(191986),
    l = n(382341);
class u extends r.A {
    actions = {
        AUTHENTICATOR_DELETE: this.handleAuthenticatorDelete,
        MFA_WEBAUTHN_CREDENTIALS_LOADED: this.handleWebAuthnCredentialsLoaded,
        CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
    };
    handleAuthenticatorDelete(e) {
        let { credential: t } = e;
        o.V.getConfig({ location: "manager" }).enabled && l.A.signalUnknownCredential(t);
    }
    handleWebAuthnCredentialsLoaded(e) {
        let { credentials: t } = e;
        if (s.k.getConfig({ location: "manager" }).enabled) {
            let e = i.default.getId();
            l.A.signalAllAcceptedCredentials(t, e);
        }
    }
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        a.u.getConfig({ location: "manager" }).enabled && l.A.signalCurrentUserDetails(t);
    }
}
let c = new u();
