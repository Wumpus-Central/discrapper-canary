"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(35033),
    s = n(73153),
    a = n(961350),
    o = n(989950);
i.CV.KvCache, i.CV.KvCache;
class l extends r.Ay.Store {
    database = (e) => o.A.database(e ?? a.default.getId());
    channels = u((e) => new i.Be("guild_channels", i.CV.KvCache, e));
    channelsTemp = u((e) => new i.iW("guild_channels_temp", i.CV.KvCache, e));
    basicChannels = u((e) => new i.Ls("basic_channels", i.CV.KvCache, e));
    syncedBasicChannels = u((e) => new i.Ls("basic_channels_synced", i.CV.KvCache, e));
    cache = u((e) => new i.Ls("cache", i.CV.KvCache, e));
    forceResyncVersion = u((e) => new i.Ls("force_resync_version", i.CV.KvCache, e));
    emojis = u((e) => new i.Be("guild_emojis", i.CV.KvCache, e));
    guilds = u((e) => new i.uh("guilds", i.CV.KvCache, e));
    guildsRequiringDeletedIdsSync = u((e) => new i.uh("guilds_requiring_deleted_ids_sync", i.CV.KvCache, e));
    guildsRequiringChannelSync = u((e) => new i.uh("guilds_requiring_channel_sync", i.CV.KvCache, e));
    messages = u((e) => new i.AR("messages", i.CV.Messages, e));
    stickers = u((e) => new i.Be("guild_stickers", i.CV.KvCache, e));
    guildVersions = u((e) => new i.uh("guild_versions", i.CV.KvCache, e));
    nonGuildVersions = u((e) => new i.uh("non_guild_versions", i.CV.KvCache, e));
    userSettings = u((e) => new i.uh("user_settings", i.CV.KvCache, e));
    readStates = u((e) => new i.Ls("read_states", i.CV.KvCache, e));
    userGuildSettings = u((e) => new i.Ls("user_guild_settings", i.CV.KvCache, e));
    userSearchItems = u((e) => new i.uh("user_search_items", i.CV.KvCache, e));
    channelsTransaction = (e) => this.channels(e.database).upgradeTransaction(e);
    channelsTempTransaction = (e) => this.channelsTemp(e.database).upgradeTransaction(e);
    basicChannelsTransaction = (e) => this.basicChannels(e.database).upgradeTransaction(e);
    syncedBasicChannelsTransaction = (e) => this.syncedBasicChannels(e.database).upgradeTransaction(e);
    cacheTransaction = (e) => this.cache(e.database).upgradeTransaction(e);
    forceResyncVersionTransaction = (e) => this.forceResyncVersion(e.database).upgradeTransaction(e);
    emojisTransaction = (e) => this.emojis(e.database).upgradeTransaction(e);
    guildsTransaction = (e) => this.guilds(e.database).upgradeTransaction(e);
    messagesTransaction = (e) => this.messages(e.database).upgradeTransaction(e);
    stickersTransaction = (e) => this.stickers(e.database).upgradeTransaction(e);
    guildVersionsTransaction = (e) => this.guildVersions(e.database).upgradeTransaction(e);
    nonGuildVersionsTransaction = (e) => this.nonGuildVersions(e.database).upgradeTransaction(e);
    userSettingsTransaction = (e) => this.userSettings(e.database).upgradeTransaction(e);
    readStatesTransaction = (e) => this.readStates(e.database).upgradeTransaction(e);
    userGuildSettingsTransaction = (e) => this.userGuildSettings(e.database).upgradeTransaction(e);
    guildsRequiringDeletedIdsSyncTransaction = (e) =>
        this.guildsRequiringDeletedIdsSync(e.database).upgradeTransaction(e);
    guildsRequiringChannelSyncTransaction = (e) => this.guildsRequiringChannelSync(e.database).upgradeTransaction(e);
    userSearchItemsTransaction = (e) => this.userSearchItems(e.database).upgradeTransaction(e);
    initialize() {
        this.waitFor(a.default);
    }
}
function u(e) {
    return function (t) {
        let n = t ?? o.A.database(a.default.getId());
        return null == n ? null : e(n);
    };
}
let c = new l(s.h, {});
