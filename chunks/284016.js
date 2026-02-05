"use strict";
n.d(t, { A: () => f });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(506774),
    o = n(73153),
    l = n(652215);
let u = {};
function c(e) {
    let { changes: t } = e;
    for (let e in t) {
        let n = e,
            { shouldSync: r, settings: i } = t[n];
        if (!0 === r) {
            delete u[n];
            continue;
        }
        if ((!1 === r && (u[n] = { shouldSync: r, settings: {} }), u[n]?.shouldSync === !1))
            for (let e in i) u[n].settings[e] = i[e];
    }
}
function d() {
    u = {};
}
class _ extends a.Ay.PersistedStore {
    static displayName = "SelectivelySyncedUserSettingsStore";
    static persistKey = "SelectivelySyncedUserSettingsStore";
    static migrations = [
        () => {
            let e = s.w.get("UserSettingsSync") ?? {},
                t = s.w.get("UserSettingsStore") ?? {};
            s.w.remove("UserSettingsSync");
            let n = {};
            return (
                !1 === e[l.nc_.TEXT] &&
                    (n.text = {
                        shouldSync: !1,
                        settings: i().pick(t, [
                            "inlineAttachmentMedia",
                            "inlineEmbedMedia",
                            "renderEmbeds",
                            "renderReactions",
                            "animateEmoji",
                            "animateStickers",
                            "gifAutoPlay",
                            "defaultReactionEmoji",
                        ]),
                    }),
                !1 === e[l.nc_.APPEARANCE] &&
                    (n.appearance = {
                        shouldSync: !1,
                        settings: i().pick(t, ["theme", "clientThemeSettings", "developerMode"]),
                    }),
                n
            );
        },
        (e) => {
            if (e?.appearance?.settings?.theme === "amoled")
                return {
                    ...e,
                    appearance: { ...e.appearance, settings: { ...e.appearance.settings, theme: "midnight" } },
                };
        },
    ];
    initialize(e) {
        u = e ?? {};
    }
    getState() {
        return u;
    }
    shouldSync(e) {
        return u[e]?.shouldSync !== !1;
    }
    getTextSettings() {
        return u.text?.settings;
    }
    getAppearanceSettings() {
        return u.appearance?.settings;
    }
}
let f = new _(o.h, { SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: c, LOGOUT: d });
