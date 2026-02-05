"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153);
let a = 6048e5,
    s = { installedDiscordPrivateBrowsingPerk: !1, installedDate: null },
    o = (e) => {
        let { installedDiscordPrivateBrowsingPerk: t } = e;
        return (
            (s.installedDiscordPrivateBrowsingPerk = t),
            t ? (s.installedDate = new Date().getTime()) : (s.installedDate = null),
            !0
        );
    };
class l extends r.Ay.PersistedStore {
    static displayName = "PrivateBrowsingPerkSettingsStore";
    static persistKey = "PrivateBrowsingPerkSettingsStore";
    initialize(e) {
        if (null != e) {
            let t = Date.now();
            null != e.installedDate &&
                t - e.installedDate < a &&
                ((s.installedDiscordPrivateBrowsingPerk = e.installedDiscordPrivateBrowsingPerk),
                (s.installedDate = e.installedDate));
        }
    }
    getState() {
        return s;
    }
}
let u = new l(i.h, { PRIVATE_BROWSING_PERK_SETTINGS_INSTALL_DISCORD: o });
