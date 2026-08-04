n.d(t, { A: () => m });
var r = n(477900),
    i = n(582128),
    s = n(982253),
    o = n(621466),
    l = n(17928),
    a = n(844222),
    c = n(174459),
    u = n(775602),
    d = n(264927),
    h = n(652215),
    f = n(650583),
    p = n(375708);
function g(e) {
    if (e.ctrlKey || e.altKey || e.metaKey || e.key !== f.dh.TAB || null == e.target) return;
    let { target: t } = e,
        n = (0, o.BF)(e)?.activeElement;
    (0, o.vq)(t) &&
        c.default.track(h.HAw.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: "tab_navigation",
            source_class_list: null != n ? Array.from(n.classList) : [],
            location_object: t.tagName,
        });
}
function m(e) {
    let { children: t } = e,
        n = (0, l.cf)([u.Ay], () => ({ enabled: u.Ay.useReducedMotion, rawValue: u.Ay.rawPrefersReducedMotion })),
        o = (0, l.cf)([u.Ay], () => ({ enabled: u.Ay.useForcedColors, rawValue: u.Ay.systemForcedColors })),
        c = (0, l.bG)([u.Ay], () => u.Ay.isHighContrastModeEnabled),
        h = (0, l.bG)([u.Ay], () => u.Ay.alwaysShowLinkDecorations),
        f = (0, l.bG)([u.Ay], () => u.Ay.keyboardModeEnabled),
        m = (0, l.bG)([u.Ay], () => u.Ay.isSwitchIconsEnabled),
        A = i.useMemo(
            () => ({
                reducedMotion: n,
                prefersCrossfades: !1,
                forcedColors: o,
                alwaysShowLinkDecorations: h,
                highContrastModeEnabled: c,
                keyboardModeEnabled: f,
                switchIconsEnabled: m,
            }),
            [n, o, h, c, f, m],
        );
    return (
        i.useEffect(
            () => (
                (0, s.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, d.Z7)()),
                p.intl.onLocaleChange(() => (0, d.Z7)()),
                window.addEventListener("keydown", g),
                () => window.removeEventListener("keydown", g)
            ),
            [],
        ),
        (0, r.jsx)(a.C.Provider, { value: A, children: t })
    );
}
