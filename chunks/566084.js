n.d(t, { Z: () => g });
var r,
    i,
    l = n(442837),
    s = n(570140);
let a = null,
    o = 0,
    c = null,
    d = null,
    u = !1;
class m extends (i = l.ZP.Store) {
    hasChanges() {
        return a !== c;
    }
    showNotice() {
        return this.hasChanges();
    }
    get vanityURLCode() {
        return a;
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
(r = "displayName") in m
    ? Object.defineProperty(m, r, {
          value: "GuildSettingsVanityURLStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (m[r] = "GuildSettingsVanityURLStore");
let g = new m(s.Z, {
    GUILD_SETTINGS_SET_VANITY_URL: function (e) {
        var t, n;
        (c = a = null != (t = e.code) ? t : ""), (o = e.uses), (d = null != (n = e.error) ? n : null), (u = !0);
    },
    GUILD_SETTINGS_CLOSE: function () {
        (c = a = null), (o = 0), (d = null), (u = !1);
    },
    GUILD_SETTINGS_VANITY_URL_RESET: function () {
        (a = c), (o = 0), (d = null);
    },
    GUILD_SETTINGS_VANITY_URL_SET: function (e) {
        (a = e.code), (o = 0);
    },
    GUILD_SETTINGS_VANITY_URL_ERROR: function (e) {
        d = e.error;
    },
});
