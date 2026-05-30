"use strict";
function i(e) {
    return null == e
        ? null
        : {
              presetId: e.presetId,
              customUserThemeSettings: (function (e) {
                  if (null != e)
                      return {
                          colors: [...e.colors],
                          gradientColorStops: [...(e.gradientColorStops ?? [])],
                          gradientAngle: e.gradientAngle,
                          baseMix: e.baseMix,
                      };
              })(e.customUserThemeSettings),
          };
}
function r(e) {
    var t;
    return null == e
        ? { preset_id: null, custom_user_theme_settings: null }
        : {
              preset_id: e.presetId ?? null,
              custom_user_theme_settings:
                  null == (t = e.customUserThemeSettings)
                      ? null
                      : {
                            colors: [...t.colors],
                            gradient_color_stops: null != t.gradientColorStops ? [...t.gradientColorStops] : [],
                            gradient_angle: t.gradientAngle ?? 0,
                            base_mix: t.baseMix ?? 0,
                        },
          };
}
function s(e) {
    return null == e
        ? null
        : {
              enabled: e.enabled,
              themeSettings:
                  null == e || (null == e.preset_id && null == e.custom_user_theme_settings)
                      ? null
                      : {
                            presetId: null == e.preset_id ? void 0 : e.preset_id,
                            customUserThemeSettings: (function (e) {
                                if (null != e)
                                    return {
                                        colors: e.colors,
                                        gradientColorStops: e.gradient_color_stops ?? [],
                                        gradientAngle: e.gradient_angle ?? 0,
                                        baseMix: e.base_mix ?? 0,
                                    };
                            })(e.custom_user_theme_settings),
                        },
          };
}
n.d(t, { QK: () => r, UW: () => s, z_: () => i });
