n.d(t, { Z: () => d }), n(388685);
var i = n(392711),
    r = n.n(i),
    s = n(710845),
    l = n(9156),
    a = n(287328);
function o(e, t, n) {
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
let c = new s.Z('ReadStates'),
    d = new (class {
        async getAll(e) {
            let t = performance.now(),
                n = await a.Z.userGuildSettings(e).getMany(),
                i = performance.now();
            return c.log('asynchronously loaded in '.concat(i - t, 'ms (userGuildSettings: ').concat(n.length, ')')), n;
        }
        resetInMemoryState() {}
        handleConnectionOpen(e, t) {
            e.userGuildSettings.partial || a.Z.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t);
        }
        handleUserGuildSettingsUpdate(e, t) {
            let n = r().max(
                e.userGuildSettings.map((e) => {
                    var t;
                    return null != (t = e.version) ? t : -1;
                })
            );
            null != n && this.write(e.userGuildSettings, n, t);
        }
        write(e, t, n) {
            let i = a.Z.userGuildSettingsTransaction(n);
            for (let t of e) {
                var r;
                let e = (function (e, t) {
                    return (
                        (t = null != t ? t : {}),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(t)).forEach(function (n) {
                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                              }),
                        e
                    );
                })(
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    o(e, t, n[t]);
                                });
                        }
                        return e;
                    })({}, (0, l.wL)(t.guild_id), t),
                    { channel_overrides: (0, l.U2)(t.channel_overrides) }
                );
                i.put(null != (r = t.guild_id) ? r : 'dm-sentinel', e);
            }
            a.Z.nonGuildVersionsTransaction(n).put({
                id: 'user_guild_settings_version',
                version: t
            });
        }
        constructor() {
            o(this, 'actions', {
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t)
            });
        }
    })();
