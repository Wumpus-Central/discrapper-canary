n.d(t, { A: () => m });
var r = n(477900),
    i = n(582128),
    s = n(632296),
    o = n(621466),
    l = n(17928),
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
        n = (0, l.cf)([d.Ay], () => ({ enabled: d.Ay.useReducedMotion, rawValue: d.Ay.rawPrefersReducedMotion })),
        o = (0, l.cf)([d.Ay], () => ({ enabled: d.Ay.useForcedColors, rawValue: d.Ay.systemForcedColors })),
        c = (0, l.bG)([d.Ay], () => d.Ay.isHighContrastModeEnabled),
        h = (0, l.bG)([d.Ay], () => d.Ay.alwaysShowLinkDecorations),
        f = (0, l.bG)([d.Ay], () => d.Ay.keyboardModeEnabled),
        m = (0, l.bG)([d.Ay], () => d.Ay.isSwitchIconsEnabled),
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
