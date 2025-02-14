n.d(t, { Z: () => c }), n(47120);
var i = n(392711),
    s = n.n(i),
    r = n(710845),
    l = n(9156),
    a = n(287328);
let o = new r.Z('ReadStates'),
    c = new (class {
        async getAll(e) {
            let t = performance.now(),
                n = await a.Z.userGuildSettings(e).getMany(),
                i = performance.now();
            return o.log('asynchronously loaded in '.concat(i - t, 'ms (userGuildSettings: ').concat(n.length, ')')), n;
        }
        resetInMemoryState() {}
        handleConnectionOpen(e, t) {
            e.userGuildSettings.partial || a.Z.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t);
        }
        handleUserGuildSettingsUpdate(e, t) {
            let n = s().max(
                e.userGuildSettings.map((e) => {
                    var t;
                    return null !== (t = e.version) && void 0 !== t ? t : -1;
                })
            );
            null != n && this.write(e.userGuildSettings, n, t);
        }
        write(e, t, n) {
            let i = a.Z.userGuildSettingsTransaction(n);
            for (let t of e) {
                var s;
                let e = {
                    ...(0, l.wL)(t.guild_id),
                    ...t,
                    channel_overrides: (0, l.U2)(t.channel_overrides)
                };
                i.put(null !== (s = t.guild_id) && void 0 !== s ? s : 'dm-sentinel', e);
            }
            a.Z.nonGuildVersionsTransaction(n).put({
                id: 'user_guild_settings_version',
                version: t
            });
        }
        constructor() {
            var e, t;
            (e = 'actions'),
                (t = {
                    CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                    USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t)
                }),
                e in this
                    ? Object.defineProperty(this, e, {
                          value: t,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (this[e] = t);
        }
    })();
