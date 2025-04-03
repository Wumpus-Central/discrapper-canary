n.d(t, { Z: () => d }), n(47120);
var r = n(392711),
    i = n.n(r),
    s = n(710845),
    a = n(9156),
    l = n(287328);
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
                n = await l.Z.userGuildSettings(e).getMany(),
                r = performance.now();
            return c.log('asynchronously loaded in '.concat(r - t, 'ms (userGuildSettings: ').concat(n.length, ')')), n;
        }
        resetInMemoryState() {}
        handleConnectionOpen(e, t) {
            e.userGuildSettings.partial || l.Z.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t);
        }
        handleUserGuildSettingsUpdate(e, t) {
            let n = i().max(
                e.userGuildSettings.map((e) => {
                    var t;
                    return null != (t = e.version) ? t : -1;
                })
            );
            null != n && this.write(e.userGuildSettings, n, t);
        }
        write(e, t, n) {
            let r = l.Z.userGuildSettingsTransaction(n);
            for (let t of e) {
                var i;
                let e = (function (e, t) {
                    return (
                        (t = null != t ? t : {}),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
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
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    o(e, t, n[t]);
                                });
                        }
                        return e;
                    })({}, (0, a.wL)(t.guild_id), t),
                    { channel_overrides: (0, a.U2)(t.channel_overrides) }
                );
                r.put(null != (i = t.guild_id) ? i : 'dm-sentinel', e);
            }
            l.Z.nonGuildVersionsTransaction(n).put({
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
