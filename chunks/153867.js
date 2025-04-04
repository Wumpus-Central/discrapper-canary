n.d(t, {
    V1: () => h,
    ZI: () => E,
    ZP: () => b
});
var r = n(524437),
    i = n(381499),
    o = n(780384),
    a = n(570140),
    s = n(514361),
    l = n(238514),
    c = n(781391),
    u = n(210887),
    d = n(695346),
    f = n(675478),
    _ = n(981631),
    p = n(874893);
function h(e) {
    return f.hW.updateAsync(
        'guildFolders',
        (t) => {
            t.folders = e.map((e) => {
                let t = r.yX.create({ guildIds: e.guildIds });
                return null != e.folderId && (t.id = i.r1.create({ value: String(e.folderId) })), null != e.folderColor && (t.color = i.wA.create({ value: String(e.folderColor) })), null != e.folderName && '' !== e.folderName && (t.name = i.Gm.create({ value: String(e.folderName) })), t;
            });
        },
        f.fy.FREQUENT_USER_ACTION
    );
}
function m(e) {
    switch (e) {
        case _.BRd.DARK:
            return r.Q2.DARK;
        case _.BRd.LIGHT:
            return r.Q2.LIGHT;
        case _.BRd.DARKER:
            return r.Q2.DARKER;
        case _.BRd.MIDNIGHT:
            return r.Q2.MIDNIGHT;
        default:
            return r.Q2.DARK;
    }
}
function g(e) {
    return { backgroundGradientPresetId: null != e.backgroundGradientPresetId ? i.yC.create({ value: e.backgroundGradientPresetId }) : void 0 };
}
function E(e) {
    let { backgroundGradientPresetId: t, theme: n, useSystemTheme: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.fy.INFREQUENT_USER_ACTION,
        s = 'system' === n ? p.KW.ON : p.KW.OFF,
        u = null != r ? r : s;
    if (
        (a.Z.dispatch({
            type: 'UNSYNCED_USER_SETTINGS_UPDATE',
            settings: { useSystemTheme: u }
        }),
        null == t && 'system' !== n && (0, o.wj)(n) && (0, c.Ag)({ [p.zd.DARK]: n }),
        a.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: {
                appearance: {
                    settings: {
                        clientThemeSettings: { backgroundGradientPresetId: t },
                        theme: 'system' === n ? void 0 : n
                    }
                }
            }
        }),
        l.Z.shouldSync('appearance'))
    )
        return f.hW.updateAsync(
            'appearance',
            (e) => {
                (e.theme = m(n)), (e.clientThemeSettings = g({ backgroundGradientPresetId: t }));
            },
            i
        );
}
let b = {
    overrideLocale(e) {
        a.Z.dispatch({
            type: 'USER_SETTINGS_LOCALE_OVERRIDE',
            locale: e
        });
    },
    updatedUnsyncedSettings(e) {
        a.Z.dispatch({
            type: 'UNSYNCED_USER_SETTINGS_UPDATE',
            settings: e
        });
    },
    setShouldSyncTextSettings(e) {
        a.Z.dispatch({
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
        a.Z.dispatch({
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
        a.Z.dispatch({
            type: 'USER_SETTINGS_OVERRIDE_APPLY',
            settings: e
        });
    },
    clearSettingsOverride() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        a.Z.dispatch({
            type: 'USER_SETTINGS_OVERRIDE_CLEAR',
            settings: t
        });
    },
    updateLocale: (e) =>
        f.hW.updateAsync(
            'localization',
            (t) => {
                t.locale = i.Gm.create({ value: e });
            },
            f.fy.INFREQUENT_USER_ACTION
        ),
    updateTheme(e) {
        a.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: { appearance: { settings: { theme: e } } }
        }),
            l.Z.shouldSync('appearance') &&
                f.hW.updateAsync(
                    'appearance',
                    (t) => {
                        t.theme = m(e);
                    },
                    f.fy.INFREQUENT_USER_ACTION
                );
    }
};
