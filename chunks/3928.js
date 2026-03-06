"use strict";
n.d(t, { A: () => _ });
var r = n(574381),
    i = n(626584),
    s = n(464477),
    a = n(976306);
let o = new i.A("SignalHelpers.web"),
    l = window.GLOBAL_ENV.WEBAUTHN_ORIGIN,
    u = window.PublicKeyCredential;
async function c(e) {
    if (!s.d4 || !(0, r.HZ)()) return !1;
    let t = await PublicKeyCredential.getClientCapabilities?.();
    return void 0 !== t && t[e];
}
class d {
    static async signalAllAcceptedCredentials(e, t) {
        if (!(await c("signalAllAcceptedCredentials"))) return;
        let n = (0, a.M)(t),
            r = e.map((e) => e.cred_id).filter((e) => e);
        o.info("signalAllAcceptedCredentials", { rpId: l, encodedUserId: n, allAcceptedCredentialIds: r }),
            await u.signalAllAcceptedCredentials({ rpId: l, userId: n, allAcceptedCredentialIds: r });
    }
    static async signalCurrentUserDetails(e) {
        if (!(await c("signalCurrentUserDetails"))) return;
        let t = e.email ?? e.global_name ?? e.username,
            n = e.username,
            r = (0, a.M)(e.id);
        o.info("signalCurrentUserDetails", { rpId: l, userId: r, name: t, displayName: n }),
            await u.signalCurrentUserDetails({ rpId: l, userId: r, name: t, displayName: n });
    }
    static async signalUnknownCredential(e) {
        if (!(await c("signalUnknownCredential"))) return;
        let t = "string" == typeof e ? JSON.parse(e).id : e.cred_id;
        o.info("signalUnknownCredential", { rpId: l, credentialId: t }),
            await u.signalUnknownCredential({ rpId: l, credentialId: t });
    }
}
let _ = d;
