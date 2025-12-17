n.d(t, { Z: () => f });
var r,
    i,
    l = n(442837),
    a = n(570140);
let s = null,
    o = 0,
    c = null,
    d = null,
    u = !1;
class g extends (i = l.ZP.Store) {
    hasChanges() {
        return s !== c;
    }
    showNotice() {
        return this.hasChanges();
    }
    get vanityURLCode() {
        return s;
    }
    get originalVanityURLCode() {
        return c;
    }
    get vanityURLUses() {
        return o;
    }
    hasError() {
        return null != d;
    }
    get errorDetails() {
        return d;
    }
    get fetchedVanityURL() {
        return u;
    }
}
(r = "displayName") in g
    ? Object.defineProperty(g, r, {
          value: "GuildSettingsVanityURLStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (g[r] = "GuildSettingsVanityURLStore");
let f = new g(a.Z, {
    GUILD_SETTINGS_SET_VANITY_URL: function (e) {
        var t, n;
        (c = s = null != (t = e.code) ? t : ""), (o = e.uses), (d = null != (n = e.error) ? n : null), (u = !0);
    },
    GUILD_SETTINGS_CLOSE: function () {
        (c = s = null), (o = 0), (d = null), (u = !1);
    },
    GUILD_SETTINGS_VANITY_URL_RESET: function () {
        (s = c), (o = 0), (d = null);
    },
    GUILD_SETTINGS_VANITY_URL_SET: function (e) {
        (s = e.code), (o = 0);
    },
    GUILD_SETTINGS_VANITY_URL_ERROR: function (e) {
        d = e.error;
    },
});
