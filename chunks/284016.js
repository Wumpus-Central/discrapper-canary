n.d(t, { A: () => c });
var r = n(735438),
    i = n.n(r),
    a = n(17928),
    l = n(506774),
    s = n(228366),
    o = n(652215);
let u = {};
class d extends a.Ay.PersistedStore {
    static displayName = "SelectivelySyncedUserSettingsStore";
    static persistKey = "SelectivelySyncedUserSettingsStore";
    static migrations = [
        () => {
            let e = l.w.get("UserSettingsSync") ?? {},
                t = l.w.get("UserSettingsStore") ?? {};
            l.w.remove("UserSettingsSync");
            let n = {};
            return (
                !1 === e[o.nc_.TEXT] &&
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
                !1 === e[o.nc_.APPEARANCE] &&
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
let c = new d(s.h, {
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function (e) {
        let { changes: t } = e;
        for (let e in t) {
            let { shouldSync: n, settings: r } = t[e];
            if (!0 === n) {
                delete u[e];
                continue;
            }
            if ((!1 === n && (u[e] = { shouldSync: n, settings: {} }), u[e]?.shouldSync === !1))
                for (let t in r) u[e].settings[t] = r[t];
        }
    },
    LOGOUT: function () {
        u = {};
    },
});
