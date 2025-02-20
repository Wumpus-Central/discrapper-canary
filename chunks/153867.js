n.d(t, {
    V1: () => _,
    ZI: () => g,
    ZP: () => E
});
var r = n(524437),
    i = n(381499),
    o = n(570140),
    a = n(514361),
    s = n(238514),
    l = n(781391),
    c = n(210887),
    u = n(695346),
    d = n(675478),
    f = n(981631),
    p = n(874893);
function _(e) {
    return d.hW.updateAsync(
        'guildFolders',
        (t) => {
            t.folders = e.map((e) => {
                let t = r.yX.create({ guildIds: e.guildIds });
                return null != e.folderId && (t.id = i.r1.create({ value: String(e.folderId) })), null != e.folderColor && (t.color = i.wA.create({ value: String(e.folderColor) })), null != e.folderName && '' !== e.folderName && (t.name = i.Gm.create({ value: String(e.folderName) })), t;
            });
        },
        d.fy.FREQUENT_USER_ACTION
    );
}
function h(e) {
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
function m(e) {
    return { backgroundGradientPresetId: null != e.backgroundGradientPresetId ? i.yC.create({ value: e.backgroundGradientPresetId }) : void 0 };
}
function g(e) {
    let { backgroundGradientPresetId: t, theme: n, useSystemTheme: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.fy.INFREQUENT_USER_ACTION,
        a = 'system' === n ? p.K.ON : p.K.OFF,
        c = null != r ? r : a;
    if (
        (o.Z.dispatch({
            type: 'UNSYNCED_USER_SETTINGS_UPDATE',
            settings: { useSystemTheme: c }
        }),
        null == t && (n === f.BRd.DARK || n === f.BRd.DARKER) && (0, l.F8)(n),
        o.Z.dispatch({
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
        s.Z.shouldSync('appearance'))
    )
        return d.hW.updateAsync(
            'appearance',
            (e) => {
                (e.theme = h(n)), (e.clientThemeSettings = m({ backgroundGradientPresetId: t }));
            },
            i
        );
}
let E = {
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
                              inlineAttachmentMedia: u.x4.getSetting(),
                              inlineEmbedMedia: u.RS.getSetting(),
                              renderEmbeds: u.NA.getSetting(),
                              renderReactions: u.nc.getSetting(),
                              animateEmoji: u.Yk.getSetting(),
                              animateStickers: u.Wp.getSetting(),
                              gifAutoPlay: u.QK.getSetting()
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
                              theme: c.Z.theme,
                              clientThemeSettings: { backgroundGradientPresetId: null === (t = a.Z.gradientPreset) || void 0 === t ? void 0 : t.id },
                              developerMode: u.Sb.getSetting()
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
        d.hW.updateAsync(
            'localization',
            (t) => {
                t.locale = i.Gm.create({ value: e });
            },
            d.fy.INFREQUENT_USER_ACTION
        ),
    updateTheme(e) {
        o.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: { appearance: { settings: { theme: e } } }
        }),
            s.Z.shouldSync('appearance') &&
                d.hW.updateAsync(
                    'appearance',
                    (t) => {
                        t.theme = h(e);
                    },
                    d.fy.INFREQUENT_USER_ACTION
                );
    }
};
