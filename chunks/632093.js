n(47120);
var i = n(392711),
    r = n.n(i),
    s = n(710845),
    a = n(9156),
    l = n(287328);
let o = new s.Z('ReadStates');
t.Z = new (class e {
    async getAll(e) {
        let t = performance.now(),
            n = await l.Z.userGuildSettings(e).getMany(),
            i = performance.now();
        return o.log('asynchronously loaded in '.concat(i - t, 'ms (userGuildSettings: ').concat(n.length, ')')), n;
    }
    resetInMemoryState() {}
    handleConnectionOpen(e, t) {
        !e.userGuildSettings.partial && l.Z.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t);
    }
    handleUserGuildSettingsUpdate(e, t) {
        let n = r().max(
            e.userGuildSettings.map((e) => {
                var t;
                return null !== (t = e.version) && void 0 !== t ? t : -1;
            })
        );
        null != n && this.write(e.userGuildSettings, n, t);
    }
    write(e, t, n) {
        let i = l.Z.userGuildSettingsTransaction(n);
        for (let t of e) {
            var r;
            let e = {
                ...(0, a.wL)(t.guild_id),
                ...t,
                channel_overrides: (0, a.U2)(t.channel_overrides)
            };
            i.put(null !== (r = t.guild_id) && void 0 !== r ? r : 'dm-sentinel', e);
        }
        l.Z.nonGuildVersionsTransaction(n).put({
            id: 'user_guild_settings_version',
            version: t
        });
    }
    constructor() {
        var e, t, n;
        (e = this),
            (t = 'actions'),
            (n = {
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t)
            }),
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n);
    }
})();
