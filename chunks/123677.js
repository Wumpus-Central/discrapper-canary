"use strict";
n.d(t, { _: () => f, e: () => d }), n(321073);
var r = n(492462),
    i = n(179771),
    a = n(136722),
    s = n(734057),
    o = n(967198),
    l = n(488926),
    u = n(647053),
    c = n(652215);
function d(e) {
    let t = e.filter((e) => !u.A8.includes(e));
    return t.includes(i.F.BOT) && !t.includes(i.F.APPLICATIONS_COMMANDS) && t.push(i.F.APPLICATIONS_COMMANDS), t;
}
function _(e) {
    if (![c.ME, c.YYv, c.c$g].includes(e)) return e ?? void 0;
}
function f(e) {
    let t = (0, r.parse)(e, { arrayFormat: "bracket" }),
        n = l.x3;
    try {
        n = a.iu(null != t.permissions && "" !== t.permissions ? t.permissions : "0");
    } catch (e) {}
    let i = t.channel_id,
        u = _(t.guild_id ?? s.A.getChannel(i)?.guild_id ?? o.A.getGuildId());
    return {
        clientId: t.client_id ?? "",
        scopes: (t.scope ?? "")
            .replace(/\+/g, " ")
            .split(" ")
            .filter((e) => e.length > 0),
        responseType: t.response_type,
        redirectUri: t.redirect_uri,
        codeChallenge: t.code_challenge,
        codeChallengeMethod: t.code_challenge_method,
        state: t.state,
        permissions: n,
        channelId: i,
        guildId: u,
        prompt: t.prompt,
        disableGuildSelect: "true" === t.disable_guild_select,
        integrationType: null == t.integration_type ? void 0 : Number(t.integration_type),
        nonce: t.nonce,
    };
}
