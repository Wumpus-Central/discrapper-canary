n.d(t, { A: () => E });
var i = n(735438),
    r = n.n(i),
    a = n(17928),
    l = n(506774),
    s = n(228366),
    o = n(652215);
let u = {};
class _ extends a.Ay.PersistedStore {
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
let E = new _(s.h, {
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function (e) {
        let { changes: t } = e;
        for (let e in t) {
            let { shouldSync: n, settings: i } = t[e];
            if (!0 === n) {
                delete u[e];
                continue;
            }
            if ((!1 === n && (u[e] = { shouldSync: n, settings: {} }), u[e]?.shouldSync === !1))
                for (let t in i) u[e].settings[t] = i[t];
        }
    },
    LOGOUT: function () {
        u = {};
    },
});
