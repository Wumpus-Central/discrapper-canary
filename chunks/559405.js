n.d(t, {
    A: () => f,
}),
    n(896048),
    n(446912);
var r = n(627968);
n(64700);
var i = n(934551),
    a = n(319354),
    s = n(51183),
    o = n(886019),
    l = n(358957),
    c = n(708455);
let u = new Set([i.MagicDoorIcon.name, i.GameControllerIcon.name, i.EmbedIcon.name, i.ObjectIcon.name]),
    d = Object.fromEntries(
        Object.entries(a.E).map((e) => {
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
                userId: h,
            } = e,
            m = (0, l.e)(h, null == a ? void 0 : a.state),
            g = (0, o.vt)(h, a, _);
        if ((m[0] === c.Kk.CUSTOM || (null == g ? void 0 : g.emoji) != null) && null != a) {
            let e = null != (t = null == g ? void 0 : g.emoji) ? t : a.emoji;
            return null != e
                ? (0, r.jsx)(s.A, {
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
