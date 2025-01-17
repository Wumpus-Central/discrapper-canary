var i,
    a = r(442837),
    s = r(433517),
    o = r(780384),
    l = r(570140),
    u = r(695346),
    c = r(581883),
    d = r(12647),
    f = r(981631),
    _ = r(959517);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = {
        fontSize: f.yqN.FONT_SIZE_DEFAULT,
        zoom: f.yqN.ZOOM_DEFAULT,
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
    m = p,
    g = {
        12: 'font-size-12',
        14: 'font-size-14',
        15: 'font-size-15',
        16: 'font-size-16',
        18: 'font-size-18',
        20: 'font-size-20',
        24: 'font-size-24'
    };
function E(e) {
    return f.yqN.FONT_SIZES.indexOf(e) >= 0 ? e : f.yqN.FONT_SIZE_DEFAULT;
}
function v(e) {
    let n = E(e.fontSize);
    if (n > f.yqN.FONT_SIZE_MAX || n < f.yqN.FONT_SIZE_MIN || m.fontSize === n) return !1;
    (m = { ...m }).fontSize = n;
}
function I(e) {
    if (e.zoom < f.yqN.ZOOM_MIN || e.zoom > f.yqN.ZOOM_MAX || m.zoom === e.zoom) return !1;
    ((m = { ...m }).zoom = e.zoom), d.Z.setZoomFactor(m.zoom);
}
function T() {
    let e = m.fontSize !== f.yqN.FONT_SIZE_DEFAULT,
        n = m.zoom !== f.yqN.ZOOM_DEFAULT;
    if (!e && !n) return !1;
    (m = { ...m }).fontSize !== f.yqN.FONT_SIZE_DEFAULT && (m.fontSize = f.yqN.FONT_SIZE_DEFAULT), m.zoom !== f.yqN.ZOOM_DEFAULT && ((m.zoom = f.yqN.ZOOM_DEFAULT), d.Z.setZoomFactor(m.zoom));
}
function b() {
    if (m.keyboardModeEnabled) return !1;
    (m = { ...m }).keyboardModeEnabled = !0;
}
function y() {
    if (!m.keyboardModeEnabled) return !1;
    (m = { ...m }).keyboardModeEnabled = !1;
}
function S() {
    (m = { ...m }).colorblindMode = !m.colorblindMode;
}
function A() {
    (m = { ...m }).lowContrastMode = !m.lowContrastMode;
}
function N(e) {
    m.syncForcedColors = e.syncForcedColors;
}
function C(e) {
    (m = { ...m }).saturation = e.saturation;
}
function R() {
    (m = { ...m }).desaturateUserColors = !m.desaturateUserColors;
}
function O(e) {
    m.roleStyle = e.roleStyle;
}
function D() {
    (m = { ...m }).submitButtonEnabled = !m.submitButtonEnabled;
}
function L() {
    (m = { ...m }).syncProfileThemeWithUserTheme = !m.syncProfileThemeWithUserTheme;
}
function x(e) {
    if (m.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
    m = {
        ...m,
        systemPrefersReducedMotion: e.systemPrefersReducedMotion
    };
}
function w(e) {
    if (m.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
    m = {
        ...m,
        systemPrefersCrossfades: e.systemPrefersCrossfades
    };
}
function P(e) {
    if (m.prefersReducedMotion === e.prefersReducedMotion) return !1;
    m = {
        ...m,
        prefersReducedMotion: e.prefersReducedMotion
    };
}
function M(e) {
    if (m.systemPrefersContrast === e.systemPrefersContrast) return !1;
    m = {
        ...m,
        systemPrefersContrast: e.systemPrefersContrast
    };
}
function k(e) {
    m = {
        ...m,
        alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
    };
}
function U(e) {
    var n;
    return (
        (m = {
            ...m,
            systemForcedColors: null !== (n = e.systemForcedColors) && void 0 !== n ? n : 'none'
        }),
        !0
    );
}
function B() {
    m.forcedColorsModalSeen = !0;
}
function G() {
    m = {
        ...m,
        keyboardNavigationExplainerModalSeen: !0
    };
}
function Z(e) {
    let { messageGroupSpacing: n } = e;
    m = {
        ...m,
        messageGroupSpacing: n
    };
}
function F(e) {
    let { contrast: n } = e;
    m = {
        ...m,
        contrast: n
    };
}
function V(e) {
    let { hideTags: n } = e;
    m = {
        ...m,
        hideGuildTags: n
    };
}
class j extends (i = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(c.Z),
            isNaN(
                (m = {
                    ...p,
                    ...(null != e ? e : null)
                }).fontSize
            ) && (m.fontSize = f.yqN.FONT_SIZE_DEFAULT),
            0 > _.fP.indexOf(null != m.messageGroupSpacing ? m.messageGroupSpacing : -1) && (m.messageGroupSpacing = null);
    }
    get fontScale() {
        return (m.fontSize / f.yqN.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return m.fontSize;
    }
    get isFontScaledUp() {
        return m.fontSize > f.yqN.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return m.fontSize < f.yqN.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        var e;
        let n = null !== (e = g[this.fontSize]) && void 0 !== e ? e : '';
        return this.isFontScaledUp ? 'a11y-font-scaled-up '.concat(n) : this.isFontScaledDown ? 'a11y-font-scaled-down '.concat(n) : ''.concat(n);
    }
    get zoom() {
        return m.zoom;
    }
    get isZoomedIn() {
        return m.zoom > f.yqN.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return m.zoom < f.yqN.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return m.keyboardModeEnabled;
    }
    get colorblindMode() {
        return m.colorblindMode;
    }
    get lowContrastMode() {
        return m.lowContrastMode;
    }
    get saturation() {
        return m.saturation;
    }
    get contrast() {
        return m.contrast;
    }
    get desaturateUserColors() {
        return m.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return m.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return m.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != m.messageGroupSpacing ? m.messageGroupSpacing : u.jU.getSetting() ? _.c8 : _.pq;
    }
    get isMessageGroupSpacingIncreased() {
        let e = u.jU.getSetting() ? _.c8 : _.pq;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = u.jU.getSetting() ? _.c8 : _.pq;
        return this.messageGroupSpacing < e;
    }
    get isSubmitButtonEnabled() {
        return m.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return m.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return m.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return m.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (m.prefersReducedMotion) {
            case 'no-preference':
                return !1;
            case 'reduce':
                return !0;
            default:
                return 'reduce' === m.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return m.systemForcedColors;
    }
    get syncForcedColors() {
        return m.syncForcedColors;
    }
    get useForcedColors() {
        return (!!m.syncForcedColors && 'active' === m.systemForcedColors) || !1;
    }
    get systemPrefersContrast() {
        return m.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return m.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return m.alwaysShowLinkDecorations;
    }
    get roleStyle() {
        return m.roleStyle;
    }
    get hideTags() {
        return m.hideGuildTags;
    }
    getUserAgnosticState() {
        return m;
    }
}
h(j, 'displayName', 'AccessibilityStore'),
    h(j, 'persistKey', 'AccessibilityStore'),
    h(j, 'migrations', [
        () => {
            let e = 'a11yFontScale',
                n = 'a11yZoom',
                r = 'a11yColorblindMode',
                i = s.K.get(e) || 100,
                a = s.K.get(n) || f.yqN.ZOOM_DEFAULT,
                o = s.K.get(r) || !1;
            return (
                s.K.remove(e),
                s.K.remove(n),
                s.K.remove(r),
                {
                    fontScale: i,
                    zoom: a,
                    colorblindMode: o,
                    keyboardModeEnabled: !1
                }
            );
        },
        (e) => {
            let { fontScale: n, ...r } = e,
                i = 16;
            switch (n) {
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
                ...r,
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
            alwaysShowLinkDecorations: e.saturation <= o.AE
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
let H = new j(l.Z, {
    ACCESSIBILITY_SET_FONT_SIZE: v,
    ACCESSIBILITY_SET_ZOOM: I,
    ACCESSIBILITY_RESET_TO_DEFAULT: T,
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: b,
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: y,
    ACCESSIBILITY_COLORBLIND_TOGGLE: S,
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: A,
    ACCESSIBILITY_SET_SATURATION: C,
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: R,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: U,
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: M,
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: x,
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: w,
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: P,
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: N,
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: k,
    ACCESSIBILITY_SET_ROLE_STYLE: O,
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: B,
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: G,
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: Z,
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: D,
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: L,
    ACCESSIBILITY_SET_CONTRAST: F,
    ACCESSIBILITY_SET_HIDE_TAGS: V
});
n.Z = H;
