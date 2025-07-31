n.d(t, {
    V1: () => h,
    ZI: () => E,
    ZP: () => b
});
var r = n(524437),
    i = n(381499),
    a = n(780384),
    o = n(570140),
    s = n(514361),
    l = n(238514),
    c = n(781391),
    u = n(210887),
    d = n(695346),
    _ = n(675478),
    f = n(981631),
    p = n(874893);
function h(e) {
    return _.hW.updateAsync(
        'guildFolders',
        (t) => {
            t.folders = e.map((e) => {
                let t = r.yX.create({ guildIds: e.guildIds });
                return (null != e.folderId && (t.id = i.r1.create({ value: String(e.folderId) })), null != e.folderColor && (t.color = i.wA.create({ value: String(e.folderColor) })), null != e.folderName && '' !== e.folderName && (t.name = i.Gm.create({ value: String(e.folderName) })), t);
            });
        },
        _.fy.FREQUENT_USER_ACTION
    );
}
function m(e) {
    switch (e) {
        case f.BRd.DARK:
            return r.Q2.DARK;
        case f.BRd.LIGHT:
            return r.Q2.LIGHT;
        case f.BRd.DARKER:
            return r.Q2.DARKER;
        case f.BRd.MIDNIGHT:
            return r.Q2.MIDNIGHT;
        default:
            return r.Q2.DARK;
    }
}
function g(e) {
    return {
        backgroundGradientPresetId: null != e.backgroundGradientPresetId ? i.yC.create({ value: e.backgroundGradientPresetId }) : void 0,
        customUserThemeSettings:
            null != e.customUserThemeSettings
                ? {
                      colors: e.customUserThemeSettings.colors,
                      gradientColorStops: e.customUserThemeSettings.gradientColorStops,
                      gradientAngle: e.customUserThemeSettings.gradientAngle,
                      baseMix: e.customUserThemeSettings.baseMix
                  }
                : void 0
    };
}
function E(e) {
    let { backgroundGradientPresetId: t, customUserThemeSettings: n, theme: r, useSystemTheme: i } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.fy.INFREQUENT_USER_ACTION,
        u = 'system' === r ? p.KW.ON : p.KW.OFF,
        d = null != i ? i : u;
    if (
        (o.Z.dispatch({
            type: 'UNSYNCED_USER_SETTINGS_UPDATE',
            settings: { useSystemTheme: d }
        }),
        null == t && 'system' !== r && (0, a.wj)(r) && (0, c.Ag)({ [p.zd.DARK]: r }),
        o.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: {
                appearance: {
                    settings: {
                        clientThemeSettings: {
                            backgroundGradientPresetId: t,
                            customUserThemeSettings: n
                        },
                        theme: 'system' === r ? void 0 : r
                    }
                }
            }
        }),
        l.Z.shouldSync('appearance'))
    )
        return _.hW.updateAsync(
            'appearance',
            (e) => {
                ((e.theme = m(r)),
                    (e.clientThemeSettings = g({
                        backgroundGradientPresetId: t,
                        customUserThemeSettings: n
                    })));
            },
            s
        );
}
let b = {
    overrideLocale(e) {
        o.Z.dispatch({
            type: 'USER_SETTINGS_LOCALE_OVERRIDE',
            locale: e
        });
    },
    updatedUnsyncedSettings(e) {
        o.Z.dispatch({
            type: 'UNSYNCED_USER_SETTINGS_UPDATE',
            settings: e
        });
    },
    setShouldSyncTextSettings(e) {
        o.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: {
                text: {
                    shouldSync: e,
                    settings: e
                        ? {}
                        : {
                              inlineAttachmentMedia: d.x4.getSetting(),
                              inlineEmbedMedia: d.RS.getSetting(),
                              renderEmbeds: d.NA.getSetting(),
                              renderReactions: d.nc.getSetting(),
                              animateEmoji: d.Yk.getSetting(),
                              animateStickers: d.Wp.getSetting(),
                              gifAutoPlay: d.QK.getSetting()
                          }
                }
            }
        });
    },
    setShouldSyncAppearanceSettings(e) {
        var t;
        o.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: {
                appearance: {
                    shouldSync: e,
                    settings: e
                        ? {}
                        : {
                              theme: u.Z.theme,
                              clientThemeSettings: { backgroundGradientPresetId: null == (t = s.Z.gradientPreset) ? void 0 : t.id },
                              developerMode: d.Sb.getSetting()
                          }
                }
            }
        });
    },
    applySettingsOverride(e) {
        o.Z.dispatch({
            type: 'USER_SETTINGS_OVERRIDE_APPLY',
            settings: e
        });
    },
    clearSettingsOverride() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        o.Z.dispatch({
            type: 'USER_SETTINGS_OVERRIDE_CLEAR',
            settings: t
        });
    },
    updateLocale: (e) =>
        _.hW.updateAsync(
            'localization',
            (t) => {
                t.locale = i.Gm.create({ value: e });
            },
            _.fy.INFREQUENT_USER_ACTION
        ),
    updateTheme(e) {
        (o.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: { appearance: { settings: { theme: e } } }
        }),
            l.Z.shouldSync('appearance') &&
                _.hW.updateAsync(
                    'appearance',
                    (t) => {
                        t.theme = m(e);
                    },
                    _.fy.INFREQUENT_USER_ACTION
                ));
    }
};
