(n.d(t, { b5: () => _, _S: () => u, LG: () => d, q6: () => c }), n(574381));
var i = n(155718);
n(7584);
var r = n(935208);
let a = (0, n(945810).mj)({
    name: "2026-09-build-a-bear",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n(783465);
var s = n(532294),
    l = n(922704),
    o = n(375708);
function d(e) {
    return {
        version: e.version,
        cardId: e.card_id,
        powerLevel: e.power_level,
        powerLevelPercentile: e.power_level_percentile,
        numMessagesSent: e.num_messages_sent,
        totalVoiceMinutes: e.total_voice_minutes,
        numEmojisSent: e.num_emojis_sent,
        topGuild:
            null != e.top_guild
                ? {
                      guildId: e.top_guild.guild_id,
                      guildName: e.top_guild.guild_name,
                      guildIcon: e.top_guild.guild_icon,
                  }
                : void 0,
        topEmoji:
            null != e.top_emoji
                ? {
                      emojiId: r.default.isProbablyAValidSnowflake(e.top_emoji.emoji_id)
                          ? e.top_emoji.emoji_id
                          : void 0,
                      emojiName: e.top_emoji?.emoji_name,
                  }
                : void 0,
        topGame:
            null != e.top_game
                ? {
                      applicationId: e.top_game.application_id,
                      applicationName: e.top_game.application_name,
                      applicationImageId: e.top_game.application_image_id,
                  }
                : void 0,
    };
}
function c(e) {
    return !(function (e) {
        let { enabled: t } = a.getConfig({ location: e });
        return t;
    })("transformCheckpoint2026CardComponent") || null == e.character
        ? null
        : {
              version: e.version,
              character: {
                  base: e.character.base,
                  shoes: e.character.shoes,
                  outfit: e.character.outfit,
                  face: e.character.face,
                  hat: e.character.hat,
                  wearable: e.character.wearable,
                  aura: e.character.aura,
              },
          };
}
function u(e) {
    let t = e.components[0];
    return null == t || t.type !== i.I5.CHECKPOINT_CARD ? null : t.checkpointData;
}
function _(e) {
    switch (e.version) {
        case s.wk.V2025:
            return o.intl.string(l.default.goiR2u);
        case s.wk.V2026:
        default:
            return null;
    }
}
