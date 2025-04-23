n.d(t, { Z: () => p });
var r,
    i,
    l,
    s = n(442837),
    a = n(570140);
let o = null,
    c = 0,
    u = null,
    d = null,
    m = !1;
class g extends (l = s.ZP.Store) {
    hasChanges() {
        return o !== u;
    }
    showNotice() {
        return this.hasChanges();
    }
    get vanityURLCode() {
        return o;
    }
    get originalVanityURLCode() {
        return u;
    }
    get vanityURLUses() {
        return c;
    }
    hasError() {
        return null != d;
    }
    get errorDetails() {
        return d;
    }
    get fetchedVanityURL() {
        return m;
    }
}
(i = 'GuildSettingsVanityURLStore'),
    (r = 'displayName') in g
        ? Object.defineProperty(g, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[r] = i);
let p = new g(a.Z, {
    GUILD_SETTINGS_SET_VANITY_URL: function (e) {
        var t, n;
        (u = o = null != (t = e.code) ? t : ''), (c = e.uses), (d = null != (n = e.error) ? n : null), (m = !0);
    },
    GUILD_SETTINGS_CLOSE: function () {
        (u = o = null), (c = 0), (d = null), (m = !1);
    },
    GUILD_SETTINGS_VANITY_URL_RESET: function () {
        (o = u), (c = 0), (d = null);
    },
    GUILD_SETTINGS_VANITY_URL_SET: function (e) {
        (o = e.code), (c = 0);
    },
    GUILD_SETTINGS_VANITY_URL_ERROR: function (e) {
        d = e.error;
    }
});
