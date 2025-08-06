n.d(t, { f: () => l });
var r = n(73800),
    i = n(399606),
    o = n(900089),
    a = n(692547),
    s = n(607070);
function l(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.saturation);
    return (0, r.useMemo)(() => {
        if (null == e) return null;
        let n = {
            theme: e,
            saturation: t,
        };
        return {
            overlaySyncedWithUserTheme: a.Z.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(n).hex(),
            overlay: a.Z.colors.PROFILE_GRADIENT_OVERLAY.resolve(n).hex(),
            sectionBox: a.Z.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(n).hex(),
            dividerOpacity: e === (0, o.RC)().DARK ? 0.24 : 0.12,
            rolePillBackgroundColor: a.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(n).hex(),
        };
    }, [e, t]);
}
