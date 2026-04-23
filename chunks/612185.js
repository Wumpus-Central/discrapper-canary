n.d(t, { A: () => T, Q: () => d });
var i = n(627968),
    r = n(64700),
    a = n(430111),
    l = n(598748),
    s = n(286043),
    o = n(659936),
    u = n(179856),
    _ = n(957742),
    E = n(705880),
    A = n(272852);
let c = r.createContext(null);
function d() {
    let e = r.useContext(c);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let I = {
    [l.m.WIDGET_TOP]: { hero_overview_widget_top: () => (0, i.jsx)(E.A, {}) },
    [l.m.WIDGET_BOTTOM]: { stats_grid_3x2_widget_bottom: () => (0, i.jsx)(_.A, {}) },
    [l.m.MINI_PROFILE]: { hero_stat_preview_mini_profile: () => (0, i.jsx)(u.A, {}) },
    [l.m.ACTIVITY_ACCESSORY]: { text_with_icon_activity_accessory: () => (0, i.jsx)(s.A, {}) },
    [l.m.ADD_WIDGET_PREVIEW]: { hero_preview_add_widget_preview: (e) => (0, i.jsx)(o.A, { ...e }) },
};
function T(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: l, locale: s, header: o, onClick: u, layoutProps: _ } = e,
        E = r.useMemo(
            () => new Intl.NumberFormat(s, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [s],
        ),
        d = r.useMemo(() => new a.Y(s, { style: "narrow" }), [s]);
    if (null == n) return null;
    let T = I[t]?.[n.layout];
    return null == T
        ? null
        : (0, i.jsx)(c.Provider, {
              value: {
                  surfaceConfig: n,
                  locale: s,
                  numberFormat: E,
                  durationFormat: d,
                  header: o,
                  onClick: u,
                  resolutionContext: l,
                  resolveFieldValue: (0, A.J)(l),
              },
              children: T(_),
          });
}
