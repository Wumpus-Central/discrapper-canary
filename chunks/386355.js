"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(191986),
    s = n(382341);
class a extends r.A {
    actions = { AUTHENTICATOR_DELETE: this.handleAuthenticatorDelete };
    handleAuthenticatorDelete(e) {
        let { credential: t } = e;
        i.V.getConfig({ location: "manager" }).enabled && s.A.signalUnknownCredential(t);
    }
}
let o = new a();
