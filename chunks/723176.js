"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(519551),
    s = n(228366),
    a = n(495544),
    o = n(45773);
r.CV.KvCache, r.CV.KvCache;
class l extends i.Ay.Store {
    database = (e) => o.A.database(e ?? a.default.getId());
    channels = d((e) => new r.Be("guild_channels", r.CV.KvCache, e));
    channelsTemp = d((e) => new r.iW("guild_channels_temp", r.CV.KvCache, e));
    basicChannels = d((e) => new r.Ls("basic_channels", r.CV.KvCache, e));
    syncedBasicChannels = d((e) => new r.Ls("basic_channels_synced", r.CV.KvCache, e));
    cache = d((e) => new r.Ls("cache", r.CV.KvCache, e));
    forceResyncVersion = d((e) => new r.Ls("force_resync_version", r.CV.KvCache, e));
    emojis = d((e) => new r.Be("guild_emojis", r.CV.KvCache, e));
    guilds = d((e) => new r.uh("guilds", r.CV.KvCache, e));
    guildsRequiringDeletedIdsSync = d((e) => new r.uh("guilds_requiring_deleted_ids_sync", r.CV.KvCache, e));
    guildsRequiringChannelSync = d((e) => new r.uh("guilds_requiring_channel_sync", r.CV.KvCache, e));
    messages = d((e) => new r.AR("messages", r.CV.Messages, e));
    stickers = d((e) => new r.Be("guild_stickers", r.CV.KvCache, e));
    guildVersions = d((e) => new r.uh("guild_versions", r.CV.KvCache, e));
    nonGuildVersions = d((e) => new r.uh("non_guild_versions", r.CV.KvCache, e));
    userSettings = d((e) => new r.uh("user_settings", r.CV.KvCache, e));
    readStates = d((e) => new r.Ls("read_states", r.CV.KvCache, e));
    userGuildSettings = d((e) => new r.Ls("user_guild_settings", r.CV.KvCache, e));
    userSearchItems = d((e) => new r.uh("user_search_items", r.CV.KvCache, e));
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
function d(e) {
    return function (t) {
        let n = t ?? o.A.database(a.default.getId());
        return null == n ? null : e(n);
    };
}
let _ = new l(s.h, {});
