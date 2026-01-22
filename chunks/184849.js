n.d(t, {
    A: () => i,
}),
    n(747238);
var r = n(200330);

function i(e) {
    var t, n, i, a;
    let s = null == e ? void 0 : e.get("client_id"),
        o = null == e || null == (a = e.get("scope")) ? void 0 : a.split(" "),
        l = null == e ? void 0 : e.get("state"),
        c = null == e ? void 0 : e.get("redirect_uri"),
        u = null == e ? void 0 : e.get("response_type"),
        d = null != (t = null == e ? void 0 : e.get("nonce")) ? t : void 0,
        f = null != (n = null == e ? void 0 : e.get("code_challenge")) ? n : void 0,
        p = null != (i = null == e ? void 0 : e.get("code_challenge_method")) ? i : void 0;
    return (
        null == s ||
        null == o ||
        null == c ||
        null == u ||
        ((0, r.openOAuth2Modal)({
            clientId: s,
            scopes: o,
            redirectUri: c,
            state: null != l ? l : void 0,
            responseType: u,
            nonce: d,
            codeChallenge: f,
            codeChallengeMethod: p,
        }),
        !0)
    );
}
