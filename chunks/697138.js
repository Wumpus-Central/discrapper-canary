n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(932433),
    s = n(621466),
    o = n(311907),
    l = n(397927),
    c = n(954571),
    u = n(775602),
    d = n(264927),
    f = n(652215),
    p = n(650583),
    _ = n(985018);
function h(e) {
    var t;
    if (e.ctrlKey || e.altKey || e.metaKey || e.key !== p.dh.TAB || null == e.target) return;
    let { target: n } = e,
        r = null == (t = (0, s.BF)(e)) ? void 0 : t.activeElement;
    (0, s.vq)(n) &&
        c.default.track(f.HAw.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: "tab_navigation",
            source_class_list: null != r ? Array.from(r.classList) : [],
            location_object: n.tagName,
        });
}
function m(e) {
    let { children: t } = e,
        n = (0, o.cf)([u.A], () => ({
            enabled: u.A.useReducedMotion,
            rawValue: u.A.rawPrefersReducedMotion,
        })),
        s = (0, o.cf)([u.A], () => ({
            enabled: u.A.useForcedColors,
            rawValue: u.A.systemForcedColors,
        })),
        c = (0, o.bG)([u.A], () => u.A.isHighContrastModeEnabled),
        f = (0, o.bG)([u.A], () => u.A.alwaysShowLinkDecorations),
        p = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled),
        m = (0, o.bG)([u.A], () => u.A.isSwitchIconsEnabled),
        g = i.useMemo(
            () => ({
                reducedMotion: n,
                prefersCrossfades: !1,
                forcedColors: s,
                alwaysShowLinkDecorations: f,
                highContrastModeEnabled: c,
                keyboardModeEnabled: p,
                switchIconsEnabled: m,
            }),
            [n, s, f, c, p, m],
        );
    return (
        i.useEffect(
            () => (
                (0, a.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, d.Z7)()),
                _.intl.onLocaleChange(() => (0, d.Z7)()),
                window.addEventListener("keydown", h),
                () => window.removeEventListener("keydown", h)
            ),
            [],
        ),
        (0, r.jsx)(l.CZY.Provider, {
            value: g,
            children: t,
        })
    );
}
