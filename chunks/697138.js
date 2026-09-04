n.d(t, { A: () => m });
var r = n(477900),
    i = n(582128),
    s = n(632296),
    l = n(621466),
    o = n(17928),
    a = n(844222),
    c = n(174459),
    d = n(775602),
    u = n(264927),
    h = n(652215),
    f = n(650583),
    g = n(375708);
function p(e) {
    if (e.ctrlKey || e.altKey || e.metaKey || e.key !== f.dh.TAB || null == e.target) return;
    let { target: t } = e,
        n = (0, l.BF)(e)?.activeElement;
    (0, l.vq)(t) &&
        c.default.track(h.HAw.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: "tab_navigation",
            source_class_list: null != n ? Array.from(n.classList) : [],
            location_object: t.tagName,
        });
}
function m(e) {
    let { children: t } = e,
        n = (0, o.cf)([d.Ay], () => ({ enabled: d.Ay.useReducedMotion, rawValue: d.Ay.rawPrefersReducedMotion })),
        l = (0, o.cf)([d.Ay], () => ({ enabled: d.Ay.useForcedColors, rawValue: d.Ay.systemForcedColors })),
        c = (0, o.bG)([d.Ay], () => d.Ay.isHighContrastModeEnabled),
        h = (0, o.bG)([d.Ay], () => d.Ay.alwaysShowLinkDecorations),
        f = (0, o.bG)([d.Ay], () => d.Ay.keyboardModeEnabled),
        m = (0, o.bG)([d.Ay], () => d.Ay.isSwitchIconsEnabled),
        A = i.useMemo(
            () => ({
                reducedMotion: n,
                prefersCrossfades: !1,
                forcedColors: l,
                alwaysShowLinkDecorations: h,
                highContrastModeEnabled: c,
                keyboardModeEnabled: f,
                switchIconsEnabled: m,
            }),
            [n, l, h, c, f, m],
        );
    return (
        i.useEffect(
            () => (
                (0, s.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, u.Z7)()),
                g.intl.onLocaleChange(() => (0, u.Z7)()),
                window.addEventListener("keydown", p),
                () => window.removeEventListener("keydown", p)
            ),
            [],
        ),
        (0, r.jsx)(a.C.Provider, { value: A, children: t })
    );
}
