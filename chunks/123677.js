n.d(t, {
    _: () => p,
    e: () => d,
}),
    n(321073),
    n(747238),
    n(812715);
var r = n(492462),
    i = n(179771),
    a = n(136722),
    s = n(734057),
    o = n(967198),
    l = n(488926),
    c = n(647053),
    u = n(652215);

function d(e) {
    let t = e.filter((e) => !c.A8.includes(e));
    return t.includes(i.F.BOT) && !t.includes(i.F.APPLICATIONS_COMMANDS) && t.push(i.F.APPLICATIONS_COMMANDS), t;
}

function f(e) {
    if (![u.ME, u.YYv, u.c$g].includes(e)) return null != e ? e : void 0;
}

function p(e) {
    var t, n, i, c, u;
    let d = (0, r.parse)(e, {
            arrayFormat: "bracket",
        }),
        p = l.x3;
    try {
        p = a.iu(null != d.permissions && "" !== d.permissions ? d.permissions : "0");
    } catch (e) {}
    let _ = d.channel_id,
        h = f(
            null != (t = null != (n = d.guild_id) ? n : null == (u = s.A.getChannel(_)) ? void 0 : u.guild_id)
                ? t
                : o.A.getGuildId(),
        );
    return {
        clientId: null != (i = d.client_id) ? i : "",
        scopes: (null != (c = d.scope) ? c : "")
            .replace(/\+/g, " ")
            .split(" ")
            .filter((e) => e.length > 0),
        responseType: d.response_type,
        redirectUri: d.redirect_uri,
        codeChallenge: d.code_challenge,
        codeChallengeMethod: d.code_challenge_method,
        state: d.state,
        permissions: p,
        channelId: _,
        guildId: h,
        prompt: d.prompt,
        disableGuildSelect: "true" === d.disable_guild_select,
        integrationType: null == d.integration_type ? void 0 : Number(d.integration_type),
        nonce: d.nonce,
    };
}
