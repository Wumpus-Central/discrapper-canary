"use strict";
n.d(t, { k: () => l });
var r = n(64700),
    i = n(417597),
    a = n(374994),
    s = n(827734),
    o = n(775602);
function l(e) {
    let t = (0, i.bG)([o.A], () => o.A.saturation);
    return (0, r.useMemo)(() => {
        if (null == e) return null;
        let n = { theme: e, saturation: t };
        return {
            overlaySyncedWithUserTheme: s.A.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(n).hex(),
            overlay: s.A.colors.PROFILE_GRADIENT_OVERLAY.resolve(n).hex(),
            sectionBox: s.A.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(n).hex(),
            dividerOpacity: e === (0, a.$D)().DARK ? 0.24 : 0.12,
            rolePillBackgroundColor: s.A.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(n).hex(),
        };
    }, [e, t]);
}
