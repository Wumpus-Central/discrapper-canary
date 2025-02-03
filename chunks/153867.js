n.d(t, {
    V1: () => p,
    ZI: () => g,
    ZP: () => E
});
var i = n(524437),
    r = n(381499),
    a = n(570140),
    s = n(514361),
    o = n(238514),
    l = n(781391),
    u = n(210887),
    c = n(695346),
    d = n(675478),
    f = n(981631),
    _ = n(874893);
function p(e) {
    return d.hW.updateAsync(
        'guildFolders',
        (t) => {
            t.folders = e.map((e) => {
                let t = i.yX.create({ guildIds: e.guildIds });
                return null != e.folderId && (t.id = r.r1.create({ value: String(e.folderId) })), null != e.folderColor && (t.color = r.wA.create({ value: String(e.folderColor) })), null != e.folderName && '' !== e.folderName && (t.name = r.Gm.create({ value: String(e.folderName) })), t;
            });
        },
        d.fy.FREQUENT_USER_ACTION
    );
}
function h(e) {
    switch (e) {
        case f.BRd.DARK:
            return i.Q2.DARK;
        case f.BRd.LIGHT:
            return i.Q2.LIGHT;
        case f.BRd.DARKER:
            return i.Q2.DARKER;
        case f.BRd.MIDNIGHT:
            return i.Q2.MIDNIGHT;
        default:
            return i.Q2.DARK;
    }
}
function m(e) {
    return { backgroundGradientPresetId: null != e.backgroundGradientPresetId ? r.yC.create({ value: e.backgroundGradientPresetId }) : void 0 };
}
function g(e) {
    let { backgroundGradientPresetId: t, theme: n, useSystemTheme: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.fy.INFREQUENT_USER_ACTION,
        s = 'system' === n ? _.K.ON : _.K.OFF,
        u = null != i ? i : s;
    if (
        (a.Z.dispatch({
            type: 'UNSYNCED_USER_SETTINGS_UPDATE',
            settings: { useSystemTheme: u }
        }),
        null == t && (n === f.BRd.DARK || n === f.BRd.DARKER) && (0, l.F8)(n),
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
        o.Z.shouldSync('appearance'))
    )
        return d.hW.updateAsync(
            'appearance',
            (e) => {
                (e.theme = h(n)), (e.clientThemeSettings = m({ backgroundGradientPresetId: t }));
            },
            r
        );
}
let E = {
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
                              inlineAttachmentMedia: c.x4.getSetting(),
                              inlineEmbedMedia: c.RS.getSetting(),
                              renderEmbeds: c.NA.getSetting(),
                              renderReactions: c.nc.getSetting(),
                              animateEmoji: c.Yk.getSetting(),
                              animateStickers: c.Wp.getSetting(),
                              gifAutoPlay: c.QK.getSetting()
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
                              clientThemeSettings: { backgroundGradientPresetId: null === (t = s.Z.gradientPreset) || void 0 === t ? void 0 : t.id },
                              developerMode: c.Sb.getSetting()
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
        d.hW.updateAsync(
            'localization',
            (t) => {
                t.locale = r.Gm.create({ value: e });
            },
            d.fy.INFREQUENT_USER_ACTION
        ),
    updateTheme(e) {
        a.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: { appearance: { settings: { theme: e } } }
        }),
            o.Z.shouldSync('appearance') &&
                d.hW.updateAsync(
                    'appearance',
                    (t) => {
                        t.theme = h(e);
                    },
                    d.fy.INFREQUENT_USER_ACTION
                );
    }
};
