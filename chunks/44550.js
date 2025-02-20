n.d(t, { Z: () => p });
var r,
    i,
    s,
    a = n(442837),
    l = n(570140);
let o = null,
    c = 0,
    d = null,
    u = null;
class m extends (s = a.ZP.Store) {
    showNotice() {
        return o !== d;
    }
    get vanityURLCode() {
        return o;
    }
    get originalVanityURLCode() {
        return d;
    }
    get vanityURLUses() {
        return c;
    }
    hasError() {
        return null != u;
    }
    get errorDetails() {
        return u;
    }
}
(i = 'GuildSettingsVanityURLStore'),
    (r = 'displayName') in m
        ? Object.defineProperty(m, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[r] = i);
let p = new m(l.Z, {
    GUILD_SETTINGS_SET_VANITY_URL: function (e) {
        var t, n;
        (d = o = null !== (t = e.code) && void 0 !== t ? t : ''), (c = e.uses), (u = null !== (n = e.error) && void 0 !== n ? n : null);
    },
    GUILD_SETTINGS_VANITY_URL_CLOSE: function () {
        (d = o = null), (c = 0), (u = null);
    },
    GUILD_SETTINGS_VANITY_URL_RESET: function () {
        (o = d), (c = 0);
    },
    GUILD_SETTINGS_VANITY_URL_SET: function (e) {
        (o = e.code), (c = 0);
    },
    GUILD_SETTINGS_VANITY_URL_ERROR: function (e) {
        u = e.error;
    }
});
