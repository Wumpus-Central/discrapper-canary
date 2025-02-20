n.d(t, { Z: () => d }), n(47120);
var r = n(442837),
    i = n(348326),
    o = n(570140),
    a = n(314897),
    s = n(261875);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
i.Ds.KvCache, i.Ds.KvCache;
class c extends r.ZP.Store {
    initialize() {
        this.waitFor(a.default);
    }
    constructor(...e) {
        super(...e),
            l(this, 'database', (e) => s.Z.database(null != e ? e : a.default.getId())),
            l(
                this,
                'channels',
                u((e) => new i.Np('guild_channels', i.Ds.KvCache, e))
            ),
            l(
                this,
                'channelsTemp',
                u((e) => new i.Bx('guild_channels_temp', i.Ds.KvCache, e))
            ),
            l(
                this,
                'basicChannels',
                u((e) => new i.Nq('basic_channels', i.Ds.KvCache, e))
            ),
            l(
                this,
                'syncedBasicChannels',
                u((e) => new i.Nq('basic_channels_synced', i.Ds.KvCache, e))
            ),
            l(
                this,
                'cache',
                u((e) => new i.Nq('cache', i.Ds.KvCache, e))
            ),
            l(
                this,
                'forceResyncVersion',
                u((e) => new i.Nq('force_resync_version', i.Ds.KvCache, e))
            ),
            l(
                this,
                'emojis',
                u((e) => new i.Np('guild_emojis', i.Ds.KvCache, e))
            ),
            l(
                this,
                'guilds',
                u((e) => new i.L5('guilds', i.Ds.KvCache, e))
            ),
            l(
                this,
                'guildsRequiringDeletedIdsSync',
                u((e) => new i.L5('guilds_requiring_deleted_ids_sync', i.Ds.KvCache, e))
            ),
            l(
                this,
                'guildsRequiringChannelSync',
                u((e) => new i.L5('guilds_requiring_channel_sync', i.Ds.KvCache, e))
            ),
            l(
                this,
                'messages',
                u((e) => new i.uC('messages', i.Ds.Messages, e))
            ),
            l(
                this,
                'stickers',
                u((e) => new i.Np('guild_stickers', i.Ds.KvCache, e))
            ),
            l(
                this,
                'guildVersions',
                u((e) => new i.L5('guild_versions', i.Ds.KvCache, e))
            ),
            l(
                this,
                'nonGuildVersions',
                u((e) => new i.L5('non_guild_versions', i.Ds.KvCache, e))
            ),
            l(
                this,
                'userSettings',
                u((e) => new i.L5('user_settings', i.Ds.KvCache, e))
            ),
            l(
                this,
                'readStates',
                u((e) => new i.Nq('read_states', i.Ds.KvCache, e))
            ),
            l(
                this,
                'userGuildSettings',
                u((e) => new i.Nq('user_guild_settings', i.Ds.KvCache, e))
            ),
            l(
                this,
                'userSearchItems',
                u((e) => new i.L5('user_search_items', i.Ds.KvCache, e))
            ),
            l(this, 'channelsTransaction', (e) => this.channels(e.database).upgradeTransaction(e)),
            l(this, 'channelsTempTransaction', (e) => this.channelsTemp(e.database).upgradeTransaction(e)),
            l(this, 'basicChannelsTransaction', (e) => this.basicChannels(e.database).upgradeTransaction(e)),
            l(this, 'syncedBasicChannelsTransaction', (e) => this.syncedBasicChannels(e.database).upgradeTransaction(e)),
            l(this, 'cacheTransaction', (e) => this.cache(e.database).upgradeTransaction(e)),
            l(this, 'forceResyncVersionTransaction', (e) => this.forceResyncVersion(e.database).upgradeTransaction(e)),
            l(this, 'emojisTransaction', (e) => this.emojis(e.database).upgradeTransaction(e)),
            l(this, 'guildsTransaction', (e) => this.guilds(e.database).upgradeTransaction(e)),
            l(this, 'messagesTransaction', (e) => this.messages(e.database).upgradeTransaction(e)),
            l(this, 'stickersTransaction', (e) => this.stickers(e.database).upgradeTransaction(e)),
            l(this, 'guildVersionsTransaction', (e) => this.guildVersions(e.database).upgradeTransaction(e)),
            l(this, 'nonGuildVersionsTransaction', (e) => this.nonGuildVersions(e.database).upgradeTransaction(e)),
            l(this, 'userSettingsTransaction', (e) => this.userSettings(e.database).upgradeTransaction(e)),
            l(this, 'readStatesTransaction', (e) => this.readStates(e.database).upgradeTransaction(e)),
            l(this, 'userGuildSettingsTransaction', (e) => this.userGuildSettings(e.database).upgradeTransaction(e)),
            l(this, 'guildsRequiringDeletedIdsSyncTransaction', (e) => this.guildsRequiringDeletedIdsSync(e.database).upgradeTransaction(e)),
            l(this, 'guildsRequiringChannelSyncTransaction', (e) => this.guildsRequiringChannelSync(e.database).upgradeTransaction(e)),
            l(this, 'userSearchItemsTransaction', (e) => this.userSearchItems(e.database).upgradeTransaction(e));
    }
}
function u(e) {
    return function (t) {
        let n = null != t ? t : s.Z.database(a.default.getId());
        return null == n ? null : e(n);
    };
}
let d = new c(o.Z, {});
