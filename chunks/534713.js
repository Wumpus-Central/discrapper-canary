n.d(t, { Z: () => i }), n(35282);
var r = n(69580);
function i(e) {
    var t, n, i, a;
    let o = null == e ? void 0 : e.get('client_id'),
        s = null == e || null == (t = e.get('scope')) ? void 0 : t.split(' '),
        l = null == e ? void 0 : e.get('state'),
        c = null == e ? void 0 : e.get('redirect_uri'),
        u = null == e ? void 0 : e.get('response_type'),
        d = null != (n = null == e ? void 0 : e.get('nonce')) ? n : void 0,
        f = null != (i = null == e ? void 0 : e.get('code_challenge')) ? i : void 0,
        _ = null != (a = null == e ? void 0 : e.get('code_challenge_method')) ? a : void 0;
    return (
        null == o ||
        null == s ||
        null == c ||
        null == u ||
        ((0, r.openOAuth2Modal)({
            clientId: o,
            scopes: s,
            redirectUri: c,
            state: null != l ? l : void 0,
            responseType: u,
            nonce: d,
            codeChallenge: f,
            codeChallengeMethod: _
        }),
        !0)
    );
}
