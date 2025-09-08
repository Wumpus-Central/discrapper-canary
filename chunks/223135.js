n.d(t, { Z: () => d }), n(388685), n(467055);
var r = n(951288);
n(647438);
var i = n(657707),
    a = n(212605),
    o = n(584973),
    s = n(833858),
    l = n(505905);
let c = new Set([i.GsA.name, i.iWm.name, i.FLu.name, i.Xbz.name]),
    u = Object.fromEntries(
        Object.entries(a.Z).map((e) => {
            let [t, n] = e;
            return [n, t];
        }),
    ),
    d = (e) => {
        var t, n;
        let { className: i, hangStatusActivity: a, size: d, animate: f = !0, fallbackVariant: _ = "original" } = e,
            p = (0, s.Fe)(null == a ? void 0 : a.state),
            h = (0, s.tV)(a, _);
        if ((p[0] === l.tN.CUSTOM || (null == h ? void 0 : h.emoji) != null) && null != a) {
            let e = null != (t = null == h ? void 0 : h.emoji) ? t : a.emoji;
            return null != e
                ? (0, r.jsx)(o.Z, {
                      emoji: e,
                      className: i,
                      hideTooltip: !0,
                      animate: f,
                  })
                : null;
        }
        let m = null == h ? void 0 : h.icon;
        if (null == m) return null;
        if ("string" == typeof m)
            return null != m
                ? (0, r.jsx)("img", {
                      src: m,
                      alt: "",
                      className: null != i ? i : void 0,
                  })
                : null;
        let g = m;
        return c.has(m.name)
            ? (0, r.jsx)(g, {
                  size: null != (n = u[d]) ? n : void 0,
                  className: i,
              })
            : (0, r.jsx)(g, {
                  size: d,
                  className: i,
              });
    };
