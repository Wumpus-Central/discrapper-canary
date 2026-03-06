n.d(t, { B: () => I });
var l = n(627968),
    i = n(64700),
    r = n(808380),
    s = n(397927),
    a = n(429913),
    u = n(263577),
    o = n(769015),
    d = n(790381),
    c = n(266080),
    h = n(70191);
let g = { [r.Y.XBOX]: c.A, [r.Y.PLAYSTATION]: d.A };
function I(e) {
    let { activities: t, gameProfileEntry: n, gameIconSize: r, platformIconSizePx: d } = e,
        c = i.useMemo(() => t.find(h.A), [t]),
        I = (0, a.h)(c?.application_id);
    return null == c
        ? null
        : (function (e) {
              let { gameProfileEntry: t, gameApplication: n, gameIconSize: i, platformIconSizePx: r } = e,
                  a = t?.extra?.platform,
                  d = null != a ? g[a] : null,
                  c =
                      null != d
                          ? (0, l.jsx)(d, { width: r, height: r, color: s.LU0.colors.INTERACTIVE_ICON_DEFAULT })
                          : null,
                  h = n?.getIconURL(r),
                  I = null != h ? (0, l.jsx)(u.V, { src: h, alt: n?.name, size: r }) : null;
              return (0, l.jsx)(o.A, { game: n, size: i, unknownGameIconFallback: c ?? I });
          })({ gameProfileEntry: n, gameApplication: I, gameIconSize: r, platformIconSizePx: d });
}
