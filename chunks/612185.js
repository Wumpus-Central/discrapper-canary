"use strict";
n.d(t, { A: () => m, Q: () => p });
var r = n(627968),
    i = n(64700),
    s = n(430111),
    a = n(598748),
    o = n(286043),
    l = n(659936),
    u = n(179856),
    c = n(169935),
    d = n(705880),
    _ = n(620632);
let f = i.createContext(null);
function p() {
    let e = i.useContext(f);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let h = {
    [a.m.WIDGET_TOP]: { hero_overview_widget_top: () => (0, r.jsx)(d.A, {}) },
    [a.m.WIDGET_BOTTOM]: { stats_grid_3x2_widget_bottom: () => (0, r.jsx)(c.A, {}) },
    [a.m.MINI_PROFILE]: { hero_stat_preview_mini_profile: () => (0, r.jsx)(u.A, {}) },
    [a.m.ACTIVITY_ACCESSORY]: { text_with_icon_activity_accessory: () => (0, r.jsx)(o.A, {}) },
    [a.m.ADD_WIDGET_PREVIEW]: { hero_preview_add_widget_preview: (e) => (0, r.jsx)(l.A, { ...e }) },
};
function m(e) {
    let { surface: t, surfaceConfig: n, resolutionContext: a, locale: o, header: l, onClick: u, layoutProps: c } = e,
        d = i.useMemo(
            () => new Intl.NumberFormat(o, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [o],
        ),
        p = i.useMemo(() => new s.Y(o, { style: "narrow" }), [o]);
    if (null == n) return null;
    let m = h[t]?.[n.layout];
    return null == m
        ? null
        : (0, r.jsx)(f.Provider, {
              value: {
                  surfaceConfig: n,
                  locale: o,
                  numberFormat: d,
                  durationFormat: p,
                  header: l,
                  onClick: u,
                  resolutionContext: a,
                  resolveFieldValue: (0, _.J)(a),
              },
              children: m(c),
          });
}
