"use strict";
n.d(t, { A: () => u });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(506774),
    l = n(228366),
    o = n(652215);
let d = {};
class c extends a.Ay.PersistedStore {
    static displayName = "SelectivelySyncedUserSettingsStore";
    static persistKey = "SelectivelySyncedUserSettingsStore";
    static migrations = [
        () => {
            let e = s.w.get("UserSettingsSync") ?? {},
                t = s.w.get("UserSettingsStore") ?? {};
            s.w.remove("UserSettingsSync");
            let n = {};
            return (
                !1 === e[o.nc_.TEXT] &&
                    (n.text = {
                        shouldSync: !1,
                        settings: r().pick(t, [
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
                !1 === e[o.nc_.APPEARANCE] &&
                    (n.appearance = {
                        shouldSync: !1,
                        settings: r().pick(t, ["theme", "clientThemeSettings", "developerMode"]),
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
        d = e ?? {};
    }
    getState() {
        return d;
    }
    shouldSync(e) {
        return d[e]?.shouldSync !== !1;
    }
    getTextSettings() {
        return d.text?.settings;
    }
    getAppearanceSettings() {
        return d.appearance?.settings;
    }
}
let u = new c(l.h, {
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function (e) {
        let { changes: t } = e;
        for (let e in t) {
            let { shouldSync: n, settings: i } = t[e];
            if (!0 === n) {
                delete d[e];
                continue;
            }
            if ((!1 === n && (d[e] = { shouldSync: n, settings: {} }), d[e]?.shouldSync === !1))
                for (let t in i) d[e].settings[t] = i[t];
        }
    },
    LOGOUT: function () {
        d = {};
    },
});
