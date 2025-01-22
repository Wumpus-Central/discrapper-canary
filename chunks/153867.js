r.d(n, {
    V1: function () {
        return h;
    },
    ZI: function () {
        return g;
    }
});
var i = r(524437),
    a = r(381499),
    o = r(570140),
    s = r(514361),
    l = r(238514),
    u = r(210887),
    c = r(695346),
    d = r(675478),
    f = r(981631),
    p = r(874893);
function h(e) {
    return d.hW.updateAsync(
        'guildFolders',
        (n) => {
            n.folders = e.map((e) => {
                let n = i.yX.create({ guildIds: e.guildIds });
                return null != e.folderId && (n.id = a.r1.create({ value: String(e.folderId) })), null != e.folderColor && (n.color = a.wA.create({ value: String(e.folderColor) })), null != e.folderName && '' !== e.folderName && (n.name = a.Gm.create({ value: String(e.folderName) })), n;
            });
        },
        d.fy.FREQUENT_USER_ACTION
    );
}
function _(e) {
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
    return { backgroundGradientPresetId: null != e.backgroundGradientPresetId ? a.yC.create({ value: e.backgroundGradientPresetId }) : void 0 };
}
function g(e) {
    let { backgroundGradientPresetId: n, theme: r, useSystemTheme: i } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.fy.INFREQUENT_USER_ACTION,
        s = 'system' === r ? p.K.ON : p.K.OFF,
        u = null != i ? i : s;
    if (
        (o.Z.dispatch({
            type: 'UNSYNCED_USER_SETTINGS_UPDATE',
            settings: { useSystemTheme: u }
        }),
        o.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: {
                appearance: {
                    settings: {
                        clientThemeSettings: { backgroundGradientPresetId: n },
                        theme: 'system' === r ? void 0 : r
                    }
                }
            }
        }),
        l.Z.shouldSync('appearance'))
    )
        return d.hW.updateAsync(
            'appearance',
            (e) => {
                (e.theme = _(r)), (e.clientThemeSettings = m({ backgroundGradientPresetId: n }));
            },
            a
        );
}
n.ZP = {
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
        var n;
        o.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: {
                appearance: {
                    shouldSync: e,
                    settings: e
                        ? {}
                        : {
                              theme: u.Z.theme,
                              clientThemeSettings: { backgroundGradientPresetId: null === (n = s.Z.gradientPreset) || void 0 === n ? void 0 : n.id },
                              developerMode: c.Sb.getSetting()
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
        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        o.Z.dispatch({
            type: 'USER_SETTINGS_OVERRIDE_CLEAR',
            settings: n
        });
    },
    updateLocale: (e) =>
        d.hW.updateAsync(
            'localization',
            (n) => {
                n.locale = a.Gm.create({ value: e });
            },
            d.fy.INFREQUENT_USER_ACTION
        ),
    updateTheme(e) {
        o.Z.dispatch({
            type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
            changes: { appearance: { settings: { theme: e } } }
        }),
            l.Z.shouldSync('appearance') &&
                d.hW.updateAsync(
                    'appearance',
                    (n) => {
                        n.theme = _(e);
                    },
                    d.fy.INFREQUENT_USER_ACTION
                );
    }
};
