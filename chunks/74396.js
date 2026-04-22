"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    s = n(728458),
    a = n(185928);
let o = [],
    l = 0;
function u(e) {
    try {
        let t = a.dP[e.base_theme];
        return e.colors.length > 0 && "number" == typeof e.gradient_angle && "number" == typeof e.base_mix && null != t;
    } catch (e) {
        return (
            s.A.captureMessage("Invalid saved custom theme: " + e, { tags: { app_context: "SavedCustomThemeStore" } }),
            !1
        );
    }
}
class d extends r.Ay.PersistedStore {
    static displayName = "SavedCustomThemeStore";
    static persistKey = "SavedCustomThemeStore";
    initialize(e) {
        null != e && (o = e.savedCustomThemes), (l = 0);
    }
    getState() {
        return { savedCustomThemes: o ?? [] };
    }
    getSavedCustomTheme() {
        return o?.length > 0 && o[0].colors.length > 0 ? o[0] : null;
    }
    getFetchState() {
        return l;
    }
    hasSavedCustomThemes() {
        return o?.length > 0;
    }
    isFetching() {
        return 1 === l;
    }
    hasFetched() {
        return 2 === l;
    }
    hasError() {
        return 3 === l;
    }
}
let c = new d(i.h, {
    SAVED_CUSTOM_THEMES_FETCH_START: function () {
        l = 1;
    },
    SAVED_CUSTOM_THEMES_FETCH_SUCCESS: (e) => {
        let { themes: t } = e;
        (l = 2),
            (o = t.filter(u).map((e) => {
                let t = a.dP;
                return {
                    colors: e.colors,
                    gradient_angle: e.gradient_angle,
                    base_mix: e.base_mix,
                    base_theme: t[e.base_theme],
                };
            }));
    },
    SAVED_CUSTOM_THEMES_FETCH_FAILURE: (e) => {
        let { error: t } = e;
        (l = 3), s.A.captureException(t, { tags: { app_context: "SavedCustomThemeStore" } });
    },
});
