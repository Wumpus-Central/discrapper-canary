n.d(t, {
    A: () => d,
});
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
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
let o = 6048e5,
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
class u extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        if (null != e) {
            let t = Date.now();
            null != e.installedDate &&
                t - e.installedDate < o &&
                ((l.installedDiscordPrivateBrowsingPerk = e.installedDiscordPrivateBrowsingPerk),
                (l.installedDate = e.installedDate));
        }
    }
    getState() {
        return l;
    }
}
s(u, "displayName", "PrivateBrowsingPerkSettingsStore"), s(u, "persistKey", "PrivateBrowsingPerkSettingsStore");
let d = new u(a.h, {
    PRIVATE_BROWSING_PERK_SETTINGS_INSTALL_DISCORD: c,
});
