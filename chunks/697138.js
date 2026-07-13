"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    a = n(919523),
    s = n(621466),
    l = n(17928),
    o = n(844222),
    d = n(174459),
    c = n(775602),
    u = n(264927),
    _ = n(652215),
    E = n(650583),
    A = n(375708);
function h(e) {
    if (e.ctrlKey || e.altKey || e.metaKey || e.key !== E.dh.TAB || null == e.target) return;
    let { target: t } = e,
        n = (0, s.BF)(e)?.activeElement;
    (0, s.vq)(t) &&
        d.default.track(_.HAw.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: "tab_navigation",
            source_class_list: null != n ? Array.from(n.classList) : [],
            location_object: t.tagName,
        });
}
function I(e) {
    let { children: t } = e,
        n = (0, l.cf)([c.Ay], () => ({ enabled: c.Ay.useReducedMotion, rawValue: c.Ay.rawPrefersReducedMotion })),
        s = (0, l.cf)([c.Ay], () => ({ enabled: c.Ay.useForcedColors, rawValue: c.Ay.systemForcedColors })),
        d = (0, l.bG)([c.Ay], () => c.Ay.isHighContrastModeEnabled),
        _ = (0, l.bG)([c.Ay], () => c.Ay.alwaysShowLinkDecorations),
        E = (0, l.bG)([c.Ay], () => c.Ay.keyboardModeEnabled),
        I = (0, l.bG)([c.Ay], () => c.Ay.isSwitchIconsEnabled),
        f = r.useMemo(
            () => ({
                reducedMotion: n,
                prefersCrossfades: !1,
                forcedColors: s,
                alwaysShowLinkDecorations: _,
                highContrastModeEnabled: d,
                keyboardModeEnabled: E,
                switchIconsEnabled: I,
            }),
            [n, s, _, d, E, I],
        );
    return (
        r.useEffect(
            () => (
                (0, a.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, u.Z7)()),
                A.intl.onLocaleChange(() => (0, u.Z7)()),
                window.addEventListener("keydown", h),
                () => window.removeEventListener("keydown", h)
            ),
            [],
        ),
        (0, i.jsx)(o.C.Provider, { value: f, children: t })
    );
}
