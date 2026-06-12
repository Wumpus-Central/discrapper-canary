"use strict";
n.d(t, { _: () => _, e: () => d }), n(321073);
var i = n(492462),
    r = n(179771),
    s = n(136722),
    a = n(734057),
    o = n(967198),
    l = n(488926),
    u = n(647053),
    c = n(652215);
function d(e) {
    let t = e.filter((e) => !u.A8.includes(e));
    return t.includes(r.F.BOT) && !t.includes(r.F.APPLICATIONS_COMMANDS) && t.push(r.F.APPLICATIONS_COMMANDS), t;
}
function _(e) {
    let t = (0, i.parse)(e, { arrayFormat: "bracket" }),
        n = l.x3;
    try {
        n = s.iu(null != t.permissions && "" !== t.permissions ? t.permissions : "0");
    } catch (e) {}
    let r = t.channel_id,
        u = (function (e) {
            if (![c.ME, c.YYv, c.c$g].includes(e)) return e ?? void 0;
        })(t.guild_id ?? a.A.getChannel(r)?.guild_id ?? o.A.getGuildId());
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
        channelId: r,
        guildId: u,
        prompt: t.prompt,
        disableGuildSelect: "true" === t.disable_guild_select,
        integrationType: null == t.integration_type ? void 0 : Number(t.integration_type),
        nonce: t.nonce,
    };
}
