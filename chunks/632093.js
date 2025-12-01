n.d(t, { Z: () => m }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(710845),
    o = n(9156),
    s = n(287328);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = new a.Z("ReadStates"),
    p = "dm-sentinel";
class _ {
    async getAll(e) {
        let t = performance.now(),
            n = await s.Z.userGuildSettings(e).getMany(),
            r = performance.now();
        return f.log("asynchronously loaded in ".concat(r - t, "ms (userGuildSettings: ").concat(n.length, ")")), n;
    }
    resetInMemoryState() {}
    handleConnectionOpen(e, t) {
        e.userGuildSettings.partial || s.Z.userGuildSettingsTransaction(t).delete(),
            this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t);
    }
    handleUserGuildSettingsUpdate(e, t) {
        let n = i().max(
            e.userGuildSettings.map((e) => {
                var t;
                return null != (t = e.version) ? t : -1;
            }),
        );
        null != n && this.write(e.userGuildSettings, n, t);
    }
    write(e, t, n) {
        let r = s.Z.userGuildSettingsTransaction(n);
        for (let t of e) {
            var i;
            let e = d(c({}, (0, o.wL)(t.guild_id), t), { channel_overrides: (0, o.U2)(t.channel_overrides) });
            r.put(null != (i = t.guild_id) ? i : p, e);
        }
        s.Z.nonGuildVersionsTransaction(n).put({
            id: "user_guild_settings_version",
            version: t,
        });
    }
    constructor() {
        l(this, "actions", {
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t),
        });
    }
}
let m = new _();
