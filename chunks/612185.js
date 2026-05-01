n.d(t, { A: () => E, Q: () => p });
var r = n(627968),
    u = n(64700),
    a = n(430111),
    l = n(598748),
    o = n(286043),
    i = n(659936),
    s = n(179856),
    c = n(957742),
    d = n(705880),
    _ = n(272852);
let f = u.createContext(null);
function p() {
    let e = u.useContext(f);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let A = {
    [l.m.WIDGET_TOP]: { hero_overview_widget_top: () => (0, r.jsx)(d.A, {}) },
    [l.m.WIDGET_BOTTOM]: { stats_grid_3x2_widget_bottom: () => (0, r.jsx)(c.A, {}) },
    [l.m.MINI_PROFILE]: { hero_stat_preview_mini_profile: () => (0, r.jsx)(s.A, {}) },
    [l.m.ACTIVITY_ACCESSORY]: { text_with_icon_activity_accessory: () => (0, r.jsx)(o.A, {}) },
    [l.m.ADD_WIDGET_PREVIEW]: { hero_preview_add_widget_preview: (e) => (0, r.jsx)(i.A, { ...e }) },
};
function E(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: l, locale: o, header: i, onClick: s, layoutProps: c } = e,
        d = u.useMemo(
            () => new Intl.NumberFormat(o, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [o],
        ),
        p = u.useMemo(() => new a.Y(o, { style: "narrow" }), [o]);
    if (null == n) return null;
    let E = A[t]?.[n.layout];
    return null == E
        ? null
        : (0, r.jsx)(f.Provider, {
              value: {
                  surfaceConfig: n,
                  locale: o,
                  numberFormat: d,
                  durationFormat: p,
                  header: i,
                  onClick: s,
                  resolutionContext: l,
                  resolveFieldValue: (0, _.J)(l),
              },
              children: E(c),
          });
}
