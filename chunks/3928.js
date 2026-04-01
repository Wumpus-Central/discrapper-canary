"use strict";
n.d(t, { A: () => f });
var r = n(574381),
    i = n(626584),
    s = n(464477),
    a = n(976306);
let o = new i.A("SignalHelpers.web"),
    l = window.GLOBAL_ENV.WEBAUTHN_ORIGIN,
    u = window.PublicKeyCredential;
function c(e) {
    return r.Av && (0, r.cX)() && window.DiscordNative?.webAuthn?.[e] != null;
}
async function d(e, t, n) {
    if (!s.d4) return null;
    if (c(e)) return t;
    let r = await PublicKeyCredential.getClientCapabilities?.();
    return void 0 !== r && r[e] ? n : null;
}
class _ {
    static async signalAllAcceptedCredentials(e, t) {
        let n = await d(
            "signalAllAcceptedCredentials",
            (e, t, n) => window.DiscordNative.webAuthn.signalAllAcceptedCredentials(e, t, n),
            (e, t, n) => u.signalAllAcceptedCredentials({ rpId: e, userId: t, allAcceptedCredentialIds: n }),
        );
        if (null == n) return;
        let r = (0, a.M)(t),
            i = e.map((e) => e.cred_id).filter((e) => e);
        o.info("signalAllAcceptedCredentials", { rpId: l, encodedUserId: r, allAcceptedCredentialIds: i }),
            await n(l, r, i).catch(o.warn);
    }
    static async signalCurrentUserDetails(e) {
        let t = await d(
            "signalCurrentUserDetails",
            (e, t, n, r) => window.DiscordNative.webAuthn.signalCurrentUserDetails(e, t, n, r),
            (e, t, n, r) => u.signalCurrentUserDetails({ rpId: e, userId: t, name: n, displayName: r }),
        );
        if (null == t) return;
        let n = e.email ?? e.global_name ?? e.username,
            r = e.username,
            i = (0, a.M)(e.id);
        o.info("signalCurrentUserDetails", { rpId: l, userId: i, name: n, displayName: r }),
            await t(l, i, n, r).catch(o.warn);
    }
    static async signalUnknownCredential(e) {
        let t = await d(
            "signalUnknownCredential",
            (e, t) => window.DiscordNative.webAuthn.signalUnknownCredential(e, t),
            (e, t) => u.signalUnknownCredential({ rpId: e, credentialId: t }),
        );
        if (null == t) return;
        let n = "string" == typeof e ? JSON.parse(e).id : e.cred_id;
        o.info("signalUnknownCredential", { rpId: l, credentialId: n }), await t(l, n).catch(o.warn);
    }
}
let f = _;
