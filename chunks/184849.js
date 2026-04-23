"use strict";
n.d(t, { A: () => i });
var r = n(200330);
function i(e) {
    let t = e?.get("client_id"),
        n = e?.get("scope")?.split(" "),
        i = e?.get("state"),
        s = e?.get("redirect_uri"),
        a = e?.get("response_type"),
        o = e?.get("nonce") ?? void 0,
        l = e?.get("code_challenge") ?? void 0,
        u = e?.get("code_challenge_method") ?? void 0;
    return (
        null == t ||
        null == n ||
        null == s ||
        null == a ||
        ((0, r.openOAuth2Modal)({
            clientId: t,
            scopes: n,
            redirectUri: s,
            state: i ?? void 0,
            responseType: a,
            nonce: o,
            codeChallenge: l,
            codeChallengeMethod: u,
        }),
        !0)
    );
}
