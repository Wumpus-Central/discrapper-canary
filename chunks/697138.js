"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(919523),
    a = n(621466),
    o = n(17928),
    l = n(844222),
    d = n(954571),
    _ = n(775602),
    u = n(264927),
    c = n(652215),
    E = n(650583),
    h = n(985018);
function m(e) {
    if (e.ctrlKey || e.altKey || e.metaKey || e.key !== E.dh.TAB || null == e.target) return;
    let { target: t } = e,
        n = (0, a.BF)(e)?.activeElement;
    (0, a.vq)(t) &&
        d.default.track(c.HAw.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: "tab_navigation",
            source_class_list: null != n ? Array.from(n.classList) : [],
            location_object: t.tagName,
        });
}
function f(e) {
    let { children: t } = e,
        n = (0, o.cf)([_.A], () => ({ enabled: _.A.useReducedMotion, rawValue: _.A.rawPrefersReducedMotion })),
        a = (0, o.cf)([_.A], () => ({ enabled: _.A.useForcedColors, rawValue: _.A.systemForcedColors })),
        d = (0, o.bG)([_.A], () => _.A.isHighContrastModeEnabled),
        c = (0, o.bG)([_.A], () => _.A.alwaysShowLinkDecorations),
        E = (0, o.bG)([_.A], () => _.A.keyboardModeEnabled),
        f = (0, o.bG)([_.A], () => _.A.isSwitchIconsEnabled),
        g = r.useMemo(
            () => ({
                reducedMotion: n,
                prefersCrossfades: !1,
                forcedColors: a,
                alwaysShowLinkDecorations: c,
                highContrastModeEnabled: d,
                keyboardModeEnabled: E,
                switchIconsEnabled: f,
            }),
            [n, a, c, d, E, f],
        );
    return (
        r.useEffect(
            () => (
                (0, s.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, u.Z7)()),
                h.intl.onLocaleChange(() => (0, u.Z7)()),
                window.addEventListener("keydown", m),
                () => window.removeEventListener("keydown", m)
            ),
            [],
        ),
        (0, i.jsx)(l.C.Provider, { value: g, children: t })
    );
}
