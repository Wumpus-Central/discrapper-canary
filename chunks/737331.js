n.d(t, { A: () => g });
var r,
    i,
    l = n(311907),
    s = n(73153);
let a = null,
    c = 0,
    o = null,
    d = null,
    u = !1;
class f extends (i = l.Ay.Store) {
    hasChanges() {
        return a !== o;
    }
    showNotice() {
        return this.hasChanges();
    }
    get vanityURLCode() {
        return a;
    }
    get originalVanityURLCode() {
        return o;
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
        return u;
    }
}
(r = "displayName") in f
    ? Object.defineProperty(f, r, {
          value: "GuildSettingsVanityURLStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[r] = "GuildSettingsVanityURLStore");
let g = new f(s.h, {
    GUILD_SETTINGS_SET_VANITY_URL: function (e) {
        var t, n;
        (o = a = null != (t = e.code) ? t : ""), (c = e.uses), (d = null != (n = e.error) ? n : null), (u = !0);
    },
    GUILD_SETTINGS_CLOSE: function () {
        (o = a = null), (c = 0), (d = null), (u = !1);
    },
    GUILD_SETTINGS_VANITY_URL_RESET: function () {
        (a = o), (c = 0), (d = null);
    },
    GUILD_SETTINGS_VANITY_URL_SET: function (e) {
        (a = e.code), (c = 0);
    },
    GUILD_SETTINGS_VANITY_URL_ERROR: function (e) {
        d = e.error;
    },
});
