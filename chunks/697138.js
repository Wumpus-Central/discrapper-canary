"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(932433),
    s = n(621466),
    o = n(311907),
    l = n(397927),
    u = n(954571),
    c = n(775602),
    d = n(264927),
    _ = n(652215),
    f = n(650583),
    p = n(985018);
function h(e) {
    if (e.ctrlKey || e.altKey || e.metaKey || e.key !== f.dh.TAB || null == e.target) return;
    let { target: t } = e,
        n = (0, s.BF)(e)?.activeElement;
    (0, s.vq)(t) &&
        u.default.track(_.HAw.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: "tab_navigation",
            source_class_list: null != n ? Array.from(n.classList) : [],
            location_object: t.tagName,
        });
}
function m(e) {
    let { children: t } = e,
        n = (0, o.cf)([c.A], () => ({ enabled: c.A.useReducedMotion, rawValue: c.A.rawPrefersReducedMotion })),
        s = (0, o.cf)([c.A], () => ({ enabled: c.A.useForcedColors, rawValue: c.A.systemForcedColors })),
        u = (0, o.bG)([c.A], () => c.A.isHighContrastModeEnabled),
        _ = (0, o.bG)([c.A], () => c.A.alwaysShowLinkDecorations),
        f = (0, o.bG)([c.A], () => c.A.keyboardModeEnabled),
        m = (0, o.bG)([c.A], () => c.A.isSwitchIconsEnabled),
        g = i.useMemo(
            () => ({
                reducedMotion: n,
                prefersCrossfades: !1,
                forcedColors: s,
                alwaysShowLinkDecorations: _,
                highContrastModeEnabled: u,
                keyboardModeEnabled: f,
                switchIconsEnabled: m,
            }),
            [n, s, _, u, f, m],
        );
    return (
        i.useEffect(
            () => (
                (0, a.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, d.Z7)()),
                p.intl.onLocaleChange(() => (0, d.Z7)()),
                window.addEventListener("keydown", h),
                () => window.removeEventListener("keydown", h)
            ),
            [],
        ),
        (0, r.jsx)(l.CZY.Provider, { value: g, children: t })
    );
}
