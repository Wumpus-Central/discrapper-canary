n.d(t, {
    B: () => f,
});
var i = n(627968),
    r = n(64700),
    l = n(808380),
    a = n(397927),
    s = n(429913),
    o = n(263577),
    u = n(769015),
    c = n(790381),
    d = n(266080),
    h = n(652215);
let p = {
    [l.Y.XBOX]: d.A,
    [l.Y.PLAYSTATION]: c.A,
};

function f(e) {
    let { activities: t, gameProfileEntry: n, gameIconSize: l, platformIconSizePx: c } = e,
        d = r.useMemo(
            () =>
                t.find((e) => {
                    let { type: t } = e;
                    return t === h.$pd.PLAYING;
                }),
            [t],
        ),
        f = (0, s.h)(null == d ? void 0 : d.application_id);
    return null == d
        ? null
        : (function (e) {
              var t;
              let { gameProfileEntry: n, gameApplication: r, gameIconSize: l, platformIconSizePx: s } = e,
                  c = null == n || null == (t = n.extra) ? void 0 : t.platform,
                  d = null != c ? p[c] : null,
                  h =
                      null != d
                          ? (0, i.jsx)(d, {
                                width: s,
                                height: s,
                                color: a.LU0.colors.INTERACTIVE_ICON_DEFAULT,
                            })
                          : null,
                  f = null == r ? void 0 : r.getIconURL(s),
                  g =
                      null != f
                          ? (0, i.jsx)(o.V, {
                                src: f,
                                alt: null == r ? void 0 : r.name,
                                size: s,
                            })
                          : null;
              return (0, i.jsx)(u.A, {
                  game: r,
                  size: l,
                  unknownGameIconFallback: null != h ? h : g,
              });
          })({
              gameProfileEntry: n,
              gameApplication: f,
              gameIconSize: l,
              platformIconSizePx: c,
          });
}
