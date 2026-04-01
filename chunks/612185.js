n.d(t, { A: () => x, Q: () => g });
var i = n(627968),
    a = n(64700),
    l = n(430111),
    s = n(598748),
    r = n(286043),
    o = n(659936),
    c = n(179856),
    d = n(169935),
    u = n(705880);
let m = a.createContext(null);
function g() {
    let e = a.useContext(m);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let p = {
    [s.m.WIDGET_TOP]: { hero_overview_widget_top: () => (0, i.jsx)(u.A, {}) },
    [s.m.WIDGET_BOTTOM]: { stats_grid_3x2_widget_bottom: () => (0, i.jsx)(d.A, {}) },
    [s.m.MINI_PROFILE]: { hero_stat_preview_mini_profile: () => (0, i.jsx)(c.A, {}) },
    [s.m.ACTIVITY_ACCESSORY]: { text_with_icon_activity_accessory: () => (0, i.jsx)(r.A, {}) },
    [s.m.ADD_WIDGET_PREVIEW]: { hero_preview_add_widget_preview: () => (0, i.jsx)(o.A, {}) },
};
function x(e) {
    let { surface: t, surfaceConfig: n, data: s, locale: r, header: o, onClick: c } = e,
        d = a.useMemo(
            () => new Intl.NumberFormat(r, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [r],
        ),
        u = a.useMemo(() => new l.Y(r, { style: "narrow" }), [r]);
    if (null == n) return null;
    let g = p[t]?.[n.layout];
    return null == g
        ? null
        : (0, i.jsx)(m.Provider, {
              value: {
                  surfaceConfig: n,
                  data: s,
                  locale: r,
                  numberFormat: d,
                  durationFormat: u,
                  header: o,
                  onClick: c,
              },
              children: g(),
          });
}
