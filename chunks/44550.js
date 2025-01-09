var i,
    r,
    l,
    s,
    a = n(442837),
    o = n(570140);
let c = null,
    d = 0,
    u = null,
    m = null;
class h extends (s = a.ZP.Store) {
    showNotice() {
        return c !== u;
    }
    get vanityURLCode() {
        return c;
    }
    get originalVanityURLCode() {
        return u;
    }
    get vanityURLUses() {
        return d;
    }
    hasError() {
        return null != m;
    }
    get errorDetails() {
        return m;
    }
}
(l = 'GuildSettingsVanityURLStore'),
    (r = 'displayName') in (i = h)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new h(o.Z, {
        GUILD_SETTINGS_SET_VANITY_URL: function (e) {
            var t, n;
            (u = c = null !== (t = e.code) && void 0 !== t ? t : ''), (d = e.uses), (m = null !== (n = e.error) && void 0 !== n ? n : null);
        },
        GUILD_SETTINGS_VANITY_URL_CLOSE: function () {
            (u = c = null), (d = 0), (m = null);
        },
        GUILD_SETTINGS_VANITY_URL_RESET: function () {
            (c = u), (d = 0);
        },
        GUILD_SETTINGS_VANITY_URL_SET: function (e) {
            (c = e.code), (d = 0);
        },
        GUILD_SETTINGS_VANITY_URL_ERROR: function (e) {
            m = e.error;
        }
    }));
