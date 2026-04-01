"use strict";
n.d(t, { A: () => h, Q: () => f });
var r = n(627968),
    i = n(64700),
    s = n(430111),
    a = n(598748),
    o = n(286043),
    l = n(659936),
    u = n(179856),
    c = n(169935),
    d = n(705880);
let _ = i.createContext(null);
function f() {
    let e = i.useContext(_);
    if (null == e) throw Error("useLayoutRendererContext must be used within a LayoutRenderer");
    return e;
}
let p = {
    [a.m.WIDGET_TOP]: { hero_overview_widget_top: () => (0, r.jsx)(d.A, {}) },
    [a.m.WIDGET_BOTTOM]: { stats_grid_3x2_widget_bottom: () => (0, r.jsx)(c.A, {}) },
    [a.m.MINI_PROFILE]: { hero_stat_preview_mini_profile: () => (0, r.jsx)(u.A, {}) },
    [a.m.ACTIVITY_ACCESSORY]: { text_with_icon_activity_accessory: () => (0, r.jsx)(o.A, {}) },
    [a.m.ADD_WIDGET_PREVIEW]: { hero_preview_add_widget_preview: (e) => (0, r.jsx)(l.A, { ...e }) },
};
function h(e) {
    let { surface: t, surfaceConfig: n, data: a, locale: o, header: l, onClick: u, layoutProps: c } = e,
        d = i.useMemo(
            () => new Intl.NumberFormat(o, { notation: "compact", compactDisplay: "short", roundingMode: "floor" }),
            [o],
        ),
        f = i.useMemo(() => new s.Y(o, { style: "narrow" }), [o]);
    if (null == n) return null;
    let h = p[t]?.[n.layout];
    return null == h
        ? null
        : (0, r.jsx)(_.Provider, {
              value: {
                  surfaceConfig: n,
                  data: a,
                  locale: o,
                  numberFormat: d,
                  durationFormat: f,
                  header: l,
                  onClick: u,
              },
              children: h(c),
          });
}
