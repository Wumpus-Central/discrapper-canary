n.d(t, { Z: () => d });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = 604800000,
    l = {
        installedDiscordPrivateBrowsingPerk: !1,
        installedDate: null,
    },
    c = (e) => {
        let { installedDiscordPrivateBrowsingPerk: t } = e;
        return (
            (l.installedDiscordPrivateBrowsingPerk = t),
            t ? (l.installedDate = new Date().getTime()) : (l.installedDate = null),
            !0
        );
    };
class u extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            let t = Date.now();
            null != e.installedDate &&
                t - e.installedDate < s &&
                ((l.installedDiscordPrivateBrowsingPerk = e.installedDiscordPrivateBrowsingPerk),
                (l.installedDate = e.installedDate));
        }
    }
    getState() {
        return l;
    }
}
o(u, "displayName", "PrivateBrowsingPerkSettingsStore"), o(u, "persistKey", "PrivateBrowsingPerkSettingsStore");
let d = new u(a.Z, { PRIVATE_BROWSING_PERK_SETTINGS_INSTALL_DISCORD: c });
