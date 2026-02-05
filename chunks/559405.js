"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(934551),
    a = n(319354),
    s = n(51183),
    o = n(886019),
    l = n(358957),
    u = n(708455);
let c = new Set([i.MagicDoorIcon.name, i.GameControllerIcon.name, i.EmbedIcon.name, i.ObjectIcon.name]),
    d = Object.fromEntries(
        Object.entries(a.E).map((e) => {
            let [t, n] = e;
            return [n, t];
        }),
    ),
    _ = (e) => {
        let {
                className: t,
                hangStatusActivity: n,
                size: i,
                animate: a = !0,
                fallbackVariant: _ = "twemoji",
                userId: f,
            } = e,
            p = (0, l.e)(f, n?.state),
            h = (0, o.vt)(f, n, _);
        if ((p[0] === u.Kk.CUSTOM || h?.emoji != null) && null != n) {
            let e = h?.emoji ?? n.emoji;
            return null != e ? (0, r.jsx)(s.A, { emoji: e, className: t, hideTooltip: !0, animate: a }) : null;
        }
        let m = h?.icon;
        if (null == m) return null;
        if ("string" == typeof m)
            return null != m ? (0, r.jsx)("img", { src: m, alt: "", className: t ?? void 0 }) : null;
        let g = m;
        return c.has(m.name)
            ? (0, r.jsx)(g, { size: d[i] ?? void 0, className: t })
            : (0, r.jsx)(g, { size: i, className: t });
    };
