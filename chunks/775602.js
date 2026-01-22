n.d(t, {
    A: () => J,
    _: () => y,
});
var r,
    i = n(311907),
    a = n(506774),
    s = n(582754),
    o = n(73153),
    l = n(802124),
    c = n(253932),
    u = n(617617),
    d = n(353835),
    f = n(652215),
    p = n(381941);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var y = (function (e) {
    return (e.DEFAULT = "default"), (e.HIGH = "high"), e;
})({});
let O = {
        fontSize: f.hH7.FONT_SIZE_DEFAULT,
        zoom: f.hH7.ZOOM_DEFAULT,
        keyboardModeEnabled: !1,
        contrastMode: "default",
        colorblindMode: !1,
        lowContrastMode: !1,
        saturation: 1,
        contrast: 1,
        desaturateUserColors: !1,
        forcedColorsModalSeen: !1,
        keyboardNavigationExplainerModalSeen: !1,
        messageGroupSpacing: null,
        systemPrefersReducedMotion: "no-preference",
        systemPrefersCrossfades: !1,
        prefersReducedMotion: "auto",
        systemForcedColors: "none",
        syncForcedColors: !0,
        systemPrefersContrast: "no-preference",
        alwaysShowLinkDecorations: !1,
        roleStyle: "username",
        displayNameStylesEnabled: !0,
        submitButtonEnabled: !1,
        syncProfileThemeWithUserTheme: !1,
        enableCustomCursor: !0,
        switchIconsEnabled: !1,
    },
    A = O,
    v = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };

function S(e) {
    return f.hH7.FONT_SIZES.indexOf(e) >= 0 ? e : f.hH7.FONT_SIZE_DEFAULT;
}

function I(e) {
    let t = S(e.fontSize);
    if (t > f.hH7.FONT_SIZE_MAX || t < f.hH7.FONT_SIZE_MIN || A.fontSize === t) return !1;
    (A = h({}, A)).fontSize = t;
}

function T(e) {
    if (e.zoom < f.hH7.ZOOM_MIN || e.zoom > f.hH7.ZOOM_MAX || A.zoom === e.zoom) return !1;
    ((A = h({}, A)).zoom = e.zoom), d.A.setZoomFactor(A.zoom);
}

function C() {
    let e = A.fontSize !== f.hH7.FONT_SIZE_DEFAULT,
        t = A.zoom !== f.hH7.ZOOM_DEFAULT;
    if (!e && !t) return !1;
    (A = h({}, A)).fontSize !== f.hH7.FONT_SIZE_DEFAULT && (A.fontSize = f.hH7.FONT_SIZE_DEFAULT),
        A.zoom !== f.hH7.ZOOM_DEFAULT && ((A.zoom = f.hH7.ZOOM_DEFAULT), d.A.setZoomFactor(A.zoom));
}

function N() {
    if (A.keyboardModeEnabled) return !1;
    (A = h({}, A)).keyboardModeEnabled = !0;
}

function R() {
    if (!A.keyboardModeEnabled) return !1;
    (A = h({}, A)).keyboardModeEnabled = !1;
}

function w() {
    (A = h({}, A)).colorblindMode = !A.colorblindMode;
}

function P() {
    (A = h({}, A)).lowContrastMode = !A.lowContrastMode;
}

function D(e) {
    A.syncForcedColors = e.syncForcedColors;
}

function x(e) {
    (A = h({}, A)).saturation = e.saturation;
}

function L() {
    (A = h({}, A)).desaturateUserColors = !A.desaturateUserColors;
}

function j(e) {
    A.roleStyle = e.roleStyle;
}

function M(e) {
    A.displayNameStylesEnabled = e.enabled;
}

function k() {
    (A = h({}, A)).submitButtonEnabled = !A.submitButtonEnabled;
}

function U() {
    (A = h({}, A)).syncProfileThemeWithUserTheme = !A.syncProfileThemeWithUserTheme;
}

function G(e) {
    if (A.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
    A = g(h({}, A), {
        systemPrefersReducedMotion: e.systemPrefersReducedMotion,
    });
}

function V(e) {
    if (A.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
    A = g(h({}, A), {
        systemPrefersCrossfades: e.systemPrefersCrossfades,
    });
}

function F(e) {
    if (A.prefersReducedMotion === e.prefersReducedMotion) return !1;
    A = g(h({}, A), {
        prefersReducedMotion: e.prefersReducedMotion,
    });
}

function B(e) {
    if (A.systemPrefersContrast === e.systemPrefersContrast) return !1;
    A = g(h({}, A), {
        systemPrefersContrast: e.systemPrefersContrast,
    });
}

function H(e) {
    A = g(h({}, A), {
        alwaysShowLinkDecorations: e.alwaysShowLinkDecorations,
    });
}

function Y(e) {
    A = g(h({}, A), {
        enableCustomCursor: e.enableCustomCursor,
    });
}

function W(e) {
    var t;
    return (
        (A = g(h({}, A), {
            systemForcedColors: null != (t = e.systemForcedColors) ? t : "none",
        })),
        !0
    );
}

function K() {
    A.forcedColorsModalSeen = !0;
}

function z() {
    A = g(h({}, A), {
        keyboardNavigationExplainerModalSeen: !0,
    });
}

function q(e) {
    let { messageGroupSpacing: t } = e;
    A = g(h({}, A), {
        messageGroupSpacing: t,
    });
}

function X(e) {
    let { contrast: t } = e;
    A = g(h({}, A), {
        contrast: t,
    });
}

function Z(e) {
    let { contrastMode: t } = e;
    A = g(h({}, A), {
        contrastMode: t,
    });
}

function Q(e) {
    A = g(h({}, A), {
        switchIconsEnabled: e.switchIconsEnabled,
    });
}
class $ extends (r = i.Ay.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(u.A),
            this.waitFor(l.A),
            isNaN((A = h({}, O, null != e ? e : null)).fontSize) && (A.fontSize = f.hH7.FONT_SIZE_DEFAULT),
            0 > p.qh.indexOf(null != A.messageGroupSpacing ? A.messageGroupSpacing : -1) &&
                (A.messageGroupSpacing = null);
    }
    get fontScale() {
        return (A.fontSize / f.hH7.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return A.fontSize;
    }
    get isFontScaledUp() {
        return A.fontSize > f.hH7.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return A.fontSize < f.hH7.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        var e;
        let t = null != (e = v[this.fontSize]) ? e : "";
        return this.isFontScaledUp
            ? "a11y-font-scaled-up ".concat(t)
            : this.isFontScaledDown
              ? "a11y-font-scaled-down ".concat(t)
              : "".concat(t);
    }
    get zoom() {
        return A.zoom;
    }
    get isZoomedIn() {
        return A.zoom > f.hH7.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return A.zoom < f.hH7.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return A.keyboardModeEnabled;
    }
    get colorblindMode() {
        return A.colorblindMode;
    }
    get lowContrastMode() {
        return A.lowContrastMode;
    }
    get saturation() {
        return A.saturation;
    }
    get contrast() {
        return A.contrast;
    }
    get desaturateUserColors() {
        return A.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return A.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return A.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != A.messageGroupSpacing ? A.messageGroupSpacing : c.hH.getSetting() ? p.y5 : p.ES;
    }
    get isMessageGroupSpacingIncreased() {
        let e = c.hH.getSetting() ? p.y5 : p.ES;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = c.hH.getSetting() ? p.y5 : p.ES;
        return this.messageGroupSpacing < e;
    }
    get isSubmitButtonEnabled() {
        return A.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return A.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return A.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return A.prefersReducedMotion;
    }
    get useReducedMotion() {
        if (l.A.active) return !0;
        switch (A.prefersReducedMotion) {
            case "no-preference":
                return !1;
            case "reduce":
                return !0;
            default:
                return "reduce" === A.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return A.systemForcedColors;
    }
    get syncForcedColors() {
        return A.syncForcedColors;
    }
    get useForcedColors() {
        return !!A.syncForcedColors && "active" === A.systemForcedColors;
    }
    get systemPrefersContrast() {
        return A.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return A.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return A.alwaysShowLinkDecorations;
    }
    get enableCustomCursor() {
        return A.enableCustomCursor;
    }
    get roleStyle() {
        return A.roleStyle;
    }
    get displayNameStylesEnabled() {
        return A.displayNameStylesEnabled;
    }
    get isHighContrastModeEnabled() {
        return "high" === A.contrastMode;
    }
    get isSwitchIconsEnabled() {
        return A.switchIconsEnabled;
    }
    getUserAgnosticState() {
        return A;
    }
}
_($, "displayName", "AccessibilityStore"),
    _($, "persistKey", "AccessibilityStore"),
    _($, "migrations", [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                r = a.w.get(e) || 100,
                i = a.w.get(t) || f.hH7.ZOOM_DEFAULT,
                s = a.w.get(n) || !1;
            return (
                a.w.remove(e),
                a.w.remove(t),
                a.w.remove(n),
                {
                    fontScale: r,
                    zoom: i,
                    colorblindMode: s,
                    keyboardModeEnabled: !1,
                }
            );
        },
        (e) => {
            let { fontScale: t } = e,
                n = E(e, ["fontScale"]),
                r = 16;
            switch (t) {
                case 82:
                    r = 12;
                    break;
                case 92:
                    r = 15;
                    break;
                case 100:
                    r = 16;
                    break;
                case 110:
                    r = 18;
                    break;
                case 125:
                    r = 20;
                    break;
                case 150:
                    r = 24;
            }
            return g(h({}, n), {
                fontSize: r,
            });
        },
        (e) =>
            g(h({}, e), {
                darkSidebar: !1,
            }),
        (e) =>
            g(h({}, e), {
                messageGroupSpacing: null,
            }),
        (e) =>
            g(h({}, e), {
                systemPrefersReducedMotion: "no-preference",
                prefersReducedMotion: "auto",
            }),
        (e) =>
            g(h({}, e), {
                alwaysShowLinkDecorations: e.saturation <= s.yv,
            }),
        (e) =>
            g(h({}, e), {
                disableVoiceBackgrounds: !1,
            }),
        (e) => {
            try {
                delete e.disableVoiceBackgrounds;
            } catch (e) {}
            return e;
        },
        (e) => {
            try {
                delete e.hideGuildTags;
            } catch (e) {}
            return e;
        },
        (e) =>
            g(h({}, e), {
                enableCustomCursor: !0,
            }),
    ]);
let J = new $(o.h, {
    ACCESSIBILITY_SET_FONT_SIZE: I,
    ACCESSIBILITY_SET_ZOOM: T,
    ACCESSIBILITY_RESET_TO_DEFAULT: C,
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: N,
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: R,
    ACCESSIBILITY_COLORBLIND_TOGGLE: w,
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: P,
    ACCESSIBILITY_SET_SATURATION: x,
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: L,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: W,
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: B,
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: G,
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: V,
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: F,
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: D,
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: H,
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: Y,
    ACCESSIBILITY_SET_ROLE_STYLE: j,
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: M,
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: K,
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: z,
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: q,
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: k,
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: U,
    ACCESSIBILITY_SET_CONTRAST: X,
    ACCESSIBILITY_SET_CONTRAST_MODE: Z,
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: Q,
});
