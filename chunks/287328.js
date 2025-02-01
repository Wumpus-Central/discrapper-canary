n.d(t, { Z: () => d }), n(47120);
var i = n(442837),
    r = n(348326),
    a = n(570140),
    s = n(314897),
    o = n(261875);
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
r.Ds.KvCache, r.Ds.KvCache;
class u extends i.ZP.Store {
    initialize() {
        this.waitFor(s.default);
    }
    constructor(...e) {
        super(...e),
            l(this, 'database', (e) => o.Z.database(null != e ? e : s.default.getId())),
            l(
                this,
                'channels',
                c((e) => new r.Np('guild_channels', r.Ds.KvCache, e))
            ),
            l(
                this,
                'channelsTemp',
                c((e) => new r.Bx('guild_channels_temp', r.Ds.KvCache, e))
            ),
            l(
                this,
                'basicChannels',
                c((e) => new r.Nq('basic_channels', r.Ds.KvCache, e))
            ),
            l(
                this,
                'syncedBasicChannels',
                c((e) => new r.Nq('basic_channels_synced', r.Ds.KvCache, e))
            ),
            l(
                this,
                'cache',
                c((e) => new r.Nq('cache', r.Ds.KvCache, e))
            ),
            l(
                this,
                'forceResyncVersion',
                c((e) => new r.Nq('force_resync_version', r.Ds.KvCache, e))
            ),
            l(
                this,
                'emojis',
                c((e) => new r.Np('guild_emojis', r.Ds.KvCache, e))
            ),
            l(
                this,
                'guilds',
                c((e) => new r.L5('guilds', r.Ds.KvCache, e))
            ),
            l(
                this,
                'guildsRequiringDeletedIdsSync',
                c((e) => new r.L5('guilds_requiring_deleted_ids_sync', r.Ds.KvCache, e))
            ),
            l(
                this,
                'guildsRequiringChannelSync',
                c((e) => new r.L5('guilds_requiring_channel_sync', r.Ds.KvCache, e))
            ),
            l(
                this,
                'messages',
                c((e) => new r.uC('messages', r.Ds.Messages, e))
            ),
            l(
                this,
                'stickers',
                c((e) => new r.Np('guild_stickers', r.Ds.KvCache, e))
            ),
            l(
                this,
                'guildVersions',
                c((e) => new r.L5('guild_versions', r.Ds.KvCache, e))
            ),
            l(
                this,
                'nonGuildVersions',
                c((e) => new r.L5('non_guild_versions', r.Ds.KvCache, e))
            ),
            l(
                this,
                'userSettings',
                c((e) => new r.L5('user_settings', r.Ds.KvCache, e))
            ),
            l(
                this,
                'readStates',
                c((e) => new r.Nq('read_states', r.Ds.KvCache, e))
            ),
            l(
                this,
                'userGuildSettings',
                c((e) => new r.Nq('user_guild_settings', r.Ds.KvCache, e))
            ),
            l(
                this,
                'userSearchItems',
                c((e) => new r.L5('user_search_items', r.Ds.KvCache, e))
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
function c(e) {
    return function (t) {
        let n = null != t ? t : o.Z.database(s.default.getId());
        return null == n ? null : e(n);
    };
}
let d = new u(a.Z, {});
