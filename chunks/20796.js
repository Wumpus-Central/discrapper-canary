n.d(t, { B: () => I });
var l = n(627968),
    i = n(64700),
    s = n(808380),
    r = n(397927),
    a = n(429913),
    u = n(263577),
    o = n(769015),
    d = n(790381),
    c = n(266080),
    h = n(652215);
let g = { [s.Y.XBOX]: c.A, [s.Y.PLAYSTATION]: d.A };
function I(e) {
    let { activities: t, gameProfileEntry: n, gameIconSize: s, platformIconSizePx: d } = e,
        c = i.useMemo(
            () =>
                t.find((e) => {
                    let { type: t } = e;
                    return t === h.$pd.PLAYING;
                }),
            [t],
        ),
        I = (0, a.h)(c?.application_id);
    return null == c
        ? null
        : (function (e) {
              let { gameProfileEntry: t, gameApplication: n, gameIconSize: i, platformIconSizePx: s } = e,
                  a = t?.extra?.platform,
                  d = null != a ? g[a] : null,
                  c =
                      null != d
                          ? (0, l.jsx)(d, { width: s, height: s, color: r.LU0.colors.INTERACTIVE_ICON_DEFAULT })
                          : null,
                  h = n?.getIconURL(s),
                  I = null != h ? (0, l.jsx)(u.V, { src: h, alt: n?.name, size: s }) : null;
              return (0, l.jsx)(o.A, { game: n, size: i, unknownGameIconFallback: c ?? I });
          })({ gameProfileEntry: n, gameApplication: I, gameIconSize: s, platformIconSizePx: d });
}
