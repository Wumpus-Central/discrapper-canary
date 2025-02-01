n.d(t, { Z: () => h });
var i,
    r,
    l,
    s = n(442837),
    a = n(570140);
let o = null,
    c = 0,
    d = null,
    u = null;
class m extends (l = s.ZP.Store) {
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
(r = 'GuildSettingsVanityURLStore'),
    (i = 'displayName') in m
        ? Object.defineProperty(m, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[i] = r);
let h = new m(a.Z, {
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
