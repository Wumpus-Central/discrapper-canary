n.d(t, { Z: () => f }), n(388685), n(467055);
var r = n(54381);
n(473749);
var i = n(657707),
    a = n(212605),
    o = n(584973),
    s = n(833858),
    l = n(797156),
    c = n(505905);
let u = new Set([i.GsA.name, i.iWm.name, i.FLu.name, i.Xbz.name]),
    d = Object.fromEntries(
        Object.entries(a.Z).map((e) => {
            let [t, n] = e;
            return [n, t];
        }),
    ),
    f = (e) => {
        var t, n;
        let {
                className: i,
                hangStatusActivity: a,
                size: f,
                animate: p = !0,
                fallbackVariant: _ = "twemoji",
                userId: m,
            } = e,
            h = (0, l.F)(m, null == a ? void 0 : a.state),
            g = (0, s.tV)(m, a, _);
        if ((h[0] === c.tN.CUSTOM || (null == g ? void 0 : g.emoji) != null) && null != a) {
            let e = null != (t = null == g ? void 0 : g.emoji) ? t : a.emoji;
            return null != e
                ? (0, r.jsx)(o.Z, {
                      emoji: e,
                      className: i,
                      hideTooltip: !0,
                      animate: p,
                  })
                : null;
        }
        let E = null == g ? void 0 : g.icon;
        if (null == E) return null;
        if ("string" == typeof E)
            return null != E
                ? (0, r.jsx)("img", {
                      src: E,
                      alt: "",
                      className: null != i ? i : void 0,
                  })
                : null;
        let b = E;
        return u.has(E.name)
            ? (0, r.jsx)(b, {
                  size: null != (n = d[f]) ? n : void 0,
                  className: i,
              })
            : (0, r.jsx)(b, {
                  size: f,
                  className: i,
              });
    };
