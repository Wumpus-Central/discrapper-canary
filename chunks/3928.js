"use strict";
n.d(t, { A: () => d });
var r = n(574381),
    i = n(626584),
    s = n(464477),
    a = n(976306);
let o = new i.A("SignalHelpers.web"),
    l = window.GLOBAL_ENV.WEBAUTHN_ORIGIN,
    u = window.PublicKeyCredential;
async function c(e, t, n) {
    if (!s.d4) return null;
    if (r.Av && (0, r.cX)() && window.DiscordNative?.webAuthn?.[e] != null) return t;
    let i = await PublicKeyCredential.getClientCapabilities?.();
    return void 0 !== i && i[e] ? n : null;
}
let d = class {
    static async signalAllAcceptedCredentials(e, t) {
        let n = await c(
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
        let t = await c(
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
        let t = await c(
            "signalUnknownCredential",
            (e, t) => window.DiscordNative.webAuthn.signalUnknownCredential(e, t),
            (e, t) => u.signalUnknownCredential({ rpId: e, credentialId: t }),
        );
        if (null == t) return;
        let n = "string" == typeof e ? JSON.parse(e).id : e.cred_id;
        o.info("signalUnknownCredential", { rpId: l, credentialId: n }), await t(l, n).catch(o.warn);
    }
};
