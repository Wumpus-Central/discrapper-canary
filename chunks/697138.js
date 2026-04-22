"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(919523),
    a = n(621466),
    o = n(311907),
    l = n(844222),
    u = n(954571),
    d = n(775602),
    c = n(264927),
    _ = n(652215),
    f = n(650583),
    E = n(985018);
function h(e) {
    if (e.ctrlKey || e.altKey || e.metaKey || e.key !== f.dh.TAB || null == e.target) return;
    let { target: t } = e,
        n = (0, a.BF)(e)?.activeElement;
    (0, a.vq)(t) &&
        u.default.track(_.HAw.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: "tab_navigation",
            source_class_list: null != n ? Array.from(n.classList) : [],
            location_object: t.tagName,
        });
}
function p(e) {
    let { children: t } = e,
        n = (0, o.cf)([d.A], () => ({ enabled: d.A.useReducedMotion, rawValue: d.A.rawPrefersReducedMotion })),
        a = (0, o.cf)([d.A], () => ({ enabled: d.A.useForcedColors, rawValue: d.A.systemForcedColors })),
        u = (0, o.bG)([d.A], () => d.A.isHighContrastModeEnabled),
        _ = (0, o.bG)([d.A], () => d.A.alwaysShowLinkDecorations),
        f = (0, o.bG)([d.A], () => d.A.keyboardModeEnabled),
        p = (0, o.bG)([d.A], () => d.A.isSwitchIconsEnabled),
        m = i.useMemo(
            () => ({
                reducedMotion: n,
                prefersCrossfades: !1,
                forcedColors: a,
                alwaysShowLinkDecorations: _,
                highContrastModeEnabled: u,
                keyboardModeEnabled: f,
                switchIconsEnabled: p,
            }),
            [n, a, _, u, f, p],
        );
    return (
        i.useEffect(
            () => (
                (0, s.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, c.Z7)()),
                E.intl.onLocaleChange(() => (0, c.Z7)()),
                window.addEventListener("keydown", h),
                () => window.removeEventListener("keydown", h)
            ),
            [],
        ),
        (0, r.jsx)(l.C.Provider, { value: m, children: t })
    );
}
