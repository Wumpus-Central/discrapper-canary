n.d(t, { f: () => l });
var r = n(73800),
    i = n(399606),
    a = n(900089),
    o = n(692547),
    s = n(607070);
function l(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.saturation);
    return (0, r.useMemo)(() => {
        if (null == e) return null;
        let n = {
            theme: e,
            saturation: t
        };
        return {
            overlaySyncedWithUserTheme: o.Z.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(n).hex(),
            overlay: o.Z.colors.PROFILE_GRADIENT_OVERLAY.resolve(n).hex(),
            sectionBox: o.Z.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(n).hex(),
            dividerOpacity: e === (0, a.RC)().DARK ? 0.24 : 0.12,
            rolePillBackgroundColor: o.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(n).hex()
        };
    }, [e, t]);
}
