n.d(t, { B: () => A });
var l = n(627968),
    i = n(64700),
    r = n(808380),
    s = n(397927),
    a = n(429913),
    u = n(263577),
    o = n(769015),
    d = n(790381),
    c = n(266080),
    h = n(243612),
    g = n(70191);
let I = { [r.Y.XBOX]: c.A, [r.Y.PLAYSTATION]: d.A };
function A(e) {
    let { activities: t, gameProfileEntry: n, gameIconSize: r, platformIconSizePx: d } = e,
        c = (0, h.b4)(),
        A = i.useMemo(() => {
            let e = t.find(g.A);
            if (null != c) {
                let n = c.altId ?? c.id;
                return t.find((e) => e.application_id === n) ?? e;
            }
            return e;
        }, [t, c]),
        f = (0, a.h)(A?.application_id);
    return null == A
        ? null
        : (function (e) {
              let { gameProfileEntry: t, gameApplication: n, gameIconSize: i, platformIconSizePx: r } = e,
                  a = t?.extra?.platform,
                  d = null != a ? I[a] : null,
                  c =
                      null != d
                          ? (0, l.jsx)(d, { width: r, height: r, color: s.LU0.colors.INTERACTIVE_ICON_DEFAULT })
                          : null,
                  h = n?.getIconURL(r),
                  g = null != h ? (0, l.jsx)(u.V, { src: h, alt: n?.name, size: r }) : null;
              return (0, l.jsx)(o.A, { game: n, size: i, unknownGameIconFallback: c ?? g });
          })({ gameProfileEntry: n, gameApplication: f, gameIconSize: r, platformIconSizePx: d });
}
