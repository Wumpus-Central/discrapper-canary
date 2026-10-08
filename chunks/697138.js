n.d(t, { A: () => p });
var r = n(477900),
    i = n(582128),
    s = n(632296),
    l = n(621466),
    o = n(17928),
    a = n(844222),
    d = n(174459),
    u = n(775602),
    c = n(264927),
    h = n(652215),
    f = n(650583),
    g = n(660183);
function m(e) {
    if (e.ctrlKey || e.altKey || e.metaKey || e.key !== f.dh.TAB || null == e.target) return;
    let { target: t } = e,
        n = (0, l.BF)(e)?.activeElement;
    (0, l.vq)(t) &&
        d.default.track(h.HAw.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: "tab_navigation",
            source_class_list: null != n ? Array.from(n.classList) : [],
            location_object: t.tagName,
        });
}
function p(e) {
    let { children: t } = e,
        n = (0, o.cf)([u.Ay], () => ({ enabled: u.Ay.useReducedMotion, rawValue: u.Ay.rawPrefersReducedMotion })),
        l = (0, o.cf)([u.Ay], () => ({ enabled: u.Ay.useForcedColors, rawValue: u.Ay.systemForcedColors })),
        d = (0, o.bG)([u.Ay], () => u.Ay.isHighContrastModeEnabled),
        h = (0, o.bG)([u.Ay], () => u.Ay.alwaysShowLinkDecorations),
        f = (0, o.bG)([u.Ay], () => u.Ay.keyboardModeEnabled),
        p = (0, o.bG)([u.Ay], () => u.Ay.isSwitchIconsEnabled),
        A = (0, o.bG)([u.Ay], () => u.Ay.minToastDurationMs),
        y = i.useMemo(
            () => ({
                reducedMotion: n,
                prefersCrossfades: !1,
                forcedColors: l,
                alwaysShowLinkDecorations: h,
                highContrastModeEnabled: d,
                keyboardModeEnabled: f,
                switchIconsEnabled: p,
                minToastDurationMs: A,
            }),
            [n, l, h, d, f, p, A],
        );
    return (
        i.useEffect(
            () => (
                (0, s.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, c.Z7)()),
                g.intl.onLocaleChange(() => (0, c.Z7)()),
                window.addEventListener("keydown", m),
                () => window.removeEventListener("keydown", m)
            ),
            [],
        ),
        (0, r.jsx)(a.C.Provider, { value: y, children: t })
    );
}
