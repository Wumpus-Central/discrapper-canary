var i = r(47120);
var a = r(757143);
var o = r(653041);
var s = r(627494);
var l = r(710845),
    u = r(287328);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = new l.Z('GuildEmojis');
class f {
    async getAsync(e) {
        let n = performance.now(),
            r = await u.Z.emojis(e).getMapEntries(),
            i = performance.now();
        return d.log('asynchronously loaded in '.concat(i - n, 'ms (guilds: ').concat(r.length, ')')), r;
    }
    handleConnectionOpen(e, n) {
        for (let r of e.guilds) this.handleOneGuildCreate(r, n);
    }
    handleGuildCreate(e, n) {
        this.handleOneGuildCreate(e.guild, n);
    }
    handleGuildUpdate(e, n) {
        this.replace(e.guild.id, e.guild.emojis, n);
    }
    handleGuildDelete(e, n) {
        this.delete(e.guild.id, n);
    }
    handleGuildEmojisUpdate(e, n) {
        this.replace(e.guildId, e.emojis, n);
    }
    handleBackgroundSync(e, n) {
        e.promisesForBackgroundSyncToWaitOn.push(
            Promise.all(
                e.emojis.map((e) => {
                    if ('unavailable' === e.dataMode) return Promise.resolve();
                    'full' === e.dataMode ? (d.verbose('Replacing '.concat(e.entities.length, ' emojis for ').concat(e.guildId)), this.replace(e.guildId, e.entities, n)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (d.verbose('Updating '.concat(e.updatedEntities.length, ' and deleting ').concat(e.deletedEntityIds.length, ' emojis for ').concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, n));
                })
            )
        );
    }
    handleOneGuildCreate(e, n) {
        null != e.emojiUpdates ? this.update(e.id, e.emojiUpdates.writes, e.emojiUpdates.deletes, n) : null != e.emojis && this.replace(e.id, e.emojis, n);
    }
    resetInMemoryState() {}
    replace(e, n, r) {
        u.Z.emojisTransaction(r).replaceAll(e, n);
    }
    delete(e, n) {
        u.Z.emojisTransaction(n).delete(e);
    }
    update(e, n, r, i) {
        let a = u.Z.emojisTransaction(i);
        for (let i of (a.putAll(e, n), r)) a.delete(e, i);
    }
    constructor() {
        c(this, 'actions', {
            BACKGROUND_SYNC: (e, n) => this.handleBackgroundSync(e, n),
            CONNECTION_OPEN: (e, n) => this.handleConnectionOpen(e, n),
            GUILD_CREATE: (e, n) => this.handleGuildCreate(e, n),
            GUILD_DELETE: (e, n) => this.handleGuildDelete(e, n),
            GUILD_EMOJIS_UPDATE: (e, n) => this.handleGuildEmojisUpdate(e, n),
            GUILD_UPDATE: (e, n) => this.handleGuildUpdate(e, n)
        });
    }
}
n.Z = new f();
