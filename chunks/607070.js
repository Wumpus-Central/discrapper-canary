n.d(t, { Z: () => j });
var i,
    r = n(442837),
    a = n(433517),
    s = n(780384),
    o = n(570140),
    l = n(695346),
    u = n(581883),
    c = n(12647),
    d = n(981631),
    f = n(959517);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = {
        fontSize: d.yqN.FONT_SIZE_DEFAULT,
        zoom: d.yqN.ZOOM_DEFAULT,
        keyboardModeEnabled: !1,
        colorblindMode: !1,
        lowContrastMode: !1,
        saturation: 1,
        contrast: 1,
        desaturateUserColors: !1,
        forcedColorsModalSeen: !1,
        keyboardNavigationExplainerModalSeen: !1,
        messageGroupSpacing: null,
        systemPrefersReducedMotion: 'no-preference',
        systemPrefersCrossfades: !1,
        prefersReducedMotion: 'auto',
        systemForcedColors: 'none',
        syncForcedColors: !0,
        systemPrefersContrast: 'no-preference',
        alwaysShowLinkDecorations: !1,
        roleStyle: 'username',
        submitButtonEnabled: !1,
        syncProfileThemeWithUserTheme: !1,
        hideGuildTags: !1
    },
    h = p,
    m = {
        12: 'font-size-12',
        14: 'font-size-14',
        15: 'font-size-15',
        16: 'font-size-16',
        18: 'font-size-18',
        20: 'font-size-20',
        24: 'font-size-24'
    };
function g(e) {
    return d.yqN.FONT_SIZES.indexOf(e) >= 0 ? e : d.yqN.FONT_SIZE_DEFAULT;
}
function E(e) {
    let t = g(e.fontSize);
    if (t > d.yqN.FONT_SIZE_MAX || t < d.yqN.FONT_SIZE_MIN || h.fontSize === t) return !1;
    (h = { ...h }).fontSize = t;
}
function v(e) {
    if (e.zoom < d.yqN.ZOOM_MIN || e.zoom > d.yqN.ZOOM_MAX || h.zoom === e.zoom) return !1;
    ((h = { ...h }).zoom = e.zoom), c.Z.setZoomFactor(h.zoom);
}
function y() {
    let e = h.fontSize !== d.yqN.FONT_SIZE_DEFAULT,
        t = h.zoom !== d.yqN.ZOOM_DEFAULT;
    if (!e && !t) return !1;
    (h = { ...h }).fontSize !== d.yqN.FONT_SIZE_DEFAULT && (h.fontSize = d.yqN.FONT_SIZE_DEFAULT), h.zoom !== d.yqN.ZOOM_DEFAULT && ((h.zoom = d.yqN.ZOOM_DEFAULT), c.Z.setZoomFactor(h.zoom));
}
function I() {
    if (h.keyboardModeEnabled) return !1;
    (h = { ...h }).keyboardModeEnabled = !0;
}
function T() {
    if (!h.keyboardModeEnabled) return !1;
    (h = { ...h }).keyboardModeEnabled = !1;
}
function b() {
    (h = { ...h }).colorblindMode = !h.colorblindMode;
}
function S() {
    (h = { ...h }).lowContrastMode = !h.lowContrastMode;
}
function A(e) {
    h.syncForcedColors = e.syncForcedColors;
}
function N(e) {
    (h = { ...h }).saturation = e.saturation;
}
function C() {
    (h = { ...h }).desaturateUserColors = !h.desaturateUserColors;
}
function R(e) {
    h.roleStyle = e.roleStyle;
}
function O() {
    (h = { ...h }).submitButtonEnabled = !h.submitButtonEnabled;
}
function D() {
    (h = { ...h }).syncProfileThemeWithUserTheme = !h.syncProfileThemeWithUserTheme;
}
function L(e) {
    if (h.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
    h = {
        ...h,
        systemPrefersReducedMotion: e.systemPrefersReducedMotion
    };
}
function x(e) {
    if (h.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
    h = {
        ...h,
        systemPrefersCrossfades: e.systemPrefersCrossfades
    };
}
function P(e) {
    if (h.prefersReducedMotion === e.prefersReducedMotion) return !1;
    h = {
        ...h,
        prefersReducedMotion: e.prefersReducedMotion
    };
}
function w(e) {
    if (h.systemPrefersContrast === e.systemPrefersContrast) return !1;
    h = {
        ...h,
        systemPrefersContrast: e.systemPrefersContrast
    };
}
function M(e) {
    h = {
        ...h,
        alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
    };
}
function k(e) {
    var t;
    return (
        (h = {
            ...h,
            systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : 'none'
        }),
        !0
    );
}
function U() {
    h.forcedColorsModalSeen = !0;
}
function G() {
    h = {
        ...h,
        keyboardNavigationExplainerModalSeen: !0
    };
}
function B(e) {
    let { messageGroupSpacing: t } = e;
    h = {
        ...h,
        messageGroupSpacing: t
    };
}
function Z(e) {
    let { contrast: t } = e;
    h = {
        ...h,
        contrast: t
    };
}
function F(e) {
    let { hideTags: t } = e;
    h = {
        ...h,
        hideGuildTags: t
    };
}
class V extends (i = r.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(u.Z),
            isNaN(
                (h = {
                    ...p,
                    ...(null != e ? e : null)
                }).fontSize
            ) && (h.fontSize = d.yqN.FONT_SIZE_DEFAULT),
            0 > f.fP.indexOf(null != h.messageGroupSpacing ? h.messageGroupSpacing : -1) && (h.messageGroupSpacing = null);
    }
    get fontScale() {
        return (h.fontSize / d.yqN.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return h.fontSize;
    }
    get isFontScaledUp() {
        return h.fontSize > d.yqN.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return h.fontSize < d.yqN.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        var e;
        let t = null !== (e = m[this.fontSize]) && void 0 !== e ? e : '';
        return this.isFontScaledUp ? 'a11y-font-scaled-up '.concat(t) : this.isFontScaledDown ? 'a11y-font-scaled-down '.concat(t) : ''.concat(t);
    }
    get zoom() {
        return h.zoom;
    }
    get isZoomedIn() {
        return h.zoom > d.yqN.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return h.zoom < d.yqN.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return h.keyboardModeEnabled;
    }
    get colorblindMode() {
        return h.colorblindMode;
    }
    get lowContrastMode() {
        return h.lowContrastMode;
    }
    get saturation() {
        return h.saturation;
    }
    get contrast() {
        return h.contrast;
    }
    get desaturateUserColors() {
        return h.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return h.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return h.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != h.messageGroupSpacing ? h.messageGroupSpacing : l.jU.getSetting() ? f.c8 : f.pq;
    }
    get isMessageGroupSpacingIncreased() {
        let e = l.jU.getSetting() ? f.c8 : f.pq;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = l.jU.getSetting() ? f.c8 : f.pq;
        return this.messageGroupSpacing < e;
    }
    get isSubmitButtonEnabled() {
        return h.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return h.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return h.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return h.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (h.prefersReducedMotion) {
            case 'no-preference':
                return !1;
            case 'reduce':
                return !0;
            default:
                return 'reduce' === h.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return h.systemForcedColors;
    }
    get syncForcedColors() {
        return h.syncForcedColors;
    }
    get useForcedColors() {
        return !!h.syncForcedColors && 'active' === h.systemForcedColors;
    }
    get systemPrefersContrast() {
        return h.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return h.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return h.alwaysShowLinkDecorations;
    }
    get roleStyle() {
        return h.roleStyle;
    }
    get hideTags() {
        return h.hideGuildTags;
    }
    getUserAgnosticState() {
        return h;
    }
}
_(V, 'displayName', 'AccessibilityStore'),
    _(V, 'persistKey', 'AccessibilityStore'),
    _(V, 'migrations', [
        () => {
            let e = 'a11yFontScale',
                t = 'a11yZoom',
                n = 'a11yColorblindMode',
                i = a.K.get(e) || 100,
                r = a.K.get(t) || d.yqN.ZOOM_DEFAULT,
                s = a.K.get(n) || !1;
            return (
                a.K.remove(e),
                a.K.remove(t),
                a.K.remove(n),
                {
                    fontScale: i,
                    zoom: r,
                    colorblindMode: s,
                    keyboardModeEnabled: !1
                }
            );
        },
        (e) => {
            let { fontScale: t, ...n } = e,
                i = 16;
            switch (t) {
                case 82:
                    i = 12;
                    break;
                case 92:
                    i = 15;
                    break;
                case 100:
                    i = 16;
                    break;
                case 110:
                    i = 18;
                    break;
                case 125:
                    i = 20;
                    break;
                case 150:
                    i = 24;
            }
            return {
                ...n,
                fontSize: i
            };
        },
        (e) => ({
            ...e,
            darkSidebar: !1
        }),
        (e) => ({
            ...e,
            messageGroupSpacing: null
        }),
        (e) => ({
            ...e,
            systemPrefersReducedMotion: 'no-preference',
            prefersReducedMotion: 'auto'
        }),
        (e) => ({
            ...e,
            alwaysShowLinkDecorations: e.saturation <= s.AE
        }),
        (e) => ({
            ...e,
            disableVoiceBackgrounds: !1
        }),
        (e) => {
            try {
                delete e.disableVoiceBackgrounds;
            } catch (e) {}
            return e;
        }
    ]);
let j = new V(o.Z, {
    ACCESSIBILITY_SET_FONT_SIZE: E,
    ACCESSIBILITY_SET_ZOOM: v,
    ACCESSIBILITY_RESET_TO_DEFAULT: y,
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: I,
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: T,
    ACCESSIBILITY_COLORBLIND_TOGGLE: b,
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: S,
    ACCESSIBILITY_SET_SATURATION: N,
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: C,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: k,
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: w,
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: L,
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: x,
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: P,
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: A,
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: M,
    ACCESSIBILITY_SET_ROLE_STYLE: R,
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: U,
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: G,
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: B,
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: O,
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: D,
    ACCESSIBILITY_SET_CONTRAST: Z,
    ACCESSIBILITY_SET_HIDE_TAGS: F
});
