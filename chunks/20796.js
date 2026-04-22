n.d(t, { B: () => I });
var l = n(627968),
    i = n(64700),
    r = n(808380),
    s = n(827734),
    a = n(429913),
    u = n(263577),
    o = n(769015),
    d = n(790381),
    c = n(266080),
    h = n(243612),
    g = n(70191);
let m = { [r.Y.XBOX]: c.A, [r.Y.PLAYSTATION]: d.A };
function I(e) {
    let { activities: t, gameProfileEntry: n, gameIconSize: r, platformIconSizePx: d } = e,
        c = (0, h.b4)(),
        I = i.useMemo(() => {
            let e = t.find(g.A);
            if (null != c) {
                let n = c.altId ?? c.id;
                return t.find((e) => e.application_id === n) ?? e;
            }
            return e;
        }, [t, c]),
        E = (0, a.h)(I?.application_id);
    return null == I
        ? null
        : (function (e) {
              let { gameProfileEntry: t, gameApplication: n, gameIconSize: i, platformIconSizePx: r } = e,
                  a = t?.extra?.platform,
                  d = null != a ? m[a] : null,
                  c =
                      null != d
                          ? (0, l.jsx)(d, { width: r, height: r, color: s.A.colors.INTERACTIVE_ICON_DEFAULT })
                          : null,
                  h = n?.getIconURL(r),
                  g = null != h ? (0, l.jsx)(u.V, { src: h, alt: n?.name, size: r }) : null;
              return (0, l.jsx)(o.A, { game: n, size: i, unknownGameIconFallback: c ?? g });
          })({ gameProfileEntry: n, gameApplication: E, gameIconSize: r, platformIconSizePx: d });
}
