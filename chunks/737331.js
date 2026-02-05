"use strict";
n.d(t, { A: () => u });
var i = n(311907),
    s = n(73153);
let l = null,
    r = 0,
    a = null,
    o = null,
    d = !1;
class c extends i.Ay.Store {
    static displayName = "GuildSettingsVanityURLStore";
    hasChanges() {
        return l !== a;
    }
    showNotice() {
        return this.hasChanges();
    }
    get vanityURLCode() {
        return l;
    }
    get originalVanityURLCode() {
        return a;
    }
    get vanityURLUses() {
        return r;
    }
    hasError() {
        return null != o;
    }
    get errorDetails() {
        return o;
    }
    get fetchedVanityURL() {
        return d;
    }
}
let u = new c(s.h, {
    GUILD_SETTINGS_SET_VANITY_URL: function (e) {
        (a = l = e.code ?? ""), (r = e.uses), (o = e.error ?? null), (d = !0);
    },
    GUILD_SETTINGS_CLOSE: function () {
        (a = l = null), (r = 0), (o = null), (d = !1);
    },
    GUILD_SETTINGS_VANITY_URL_RESET: function () {
        (l = a), (r = 0), (o = null);
    },
    GUILD_SETTINGS_VANITY_URL_SET: function (e) {
        (l = e.code), (r = 0);
    },
    GUILD_SETTINGS_VANITY_URL_ERROR: function (e) {
        o = e.error;
    },
});
