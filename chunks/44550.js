n.d(t, { Z: () => p });
var r,
    i,
    s,
    a = n(442837),
    l = n(570140);
let o = null,
    c = 0,
    d = null,
    u = null,
    m = !1;
class g extends (s = a.ZP.Store) {
    hasChanges() {
        return o !== d;
    }
    showNotice() {
        return this.hasChanges();
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
let p = new g(l.Z, {
    GUILD_SETTINGS_SET_VANITY_URL: function (e) {
        var t, n;
        (d = o = null != (t = e.code) ? t : ''), (c = e.uses), (u = null != (n = e.error) ? n : null), (m = !0);
    },
    GUILD_SETTINGS_CLOSE: function () {
        (d = o = null), (c = 0), (u = null), (m = !1);
    },
    GUILD_SETTINGS_VANITY_URL_RESET: function () {
        (o = d), (c = 0), (u = null);
    },
    GUILD_SETTINGS_VANITY_URL_SET: function (e) {
        (o = e.code), (c = 0);
    },
    GUILD_SETTINGS_VANITY_URL_ERROR: function (e) {
        u = e.error;
    }
});
