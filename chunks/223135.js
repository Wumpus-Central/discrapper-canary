n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(584973),
    a = n(833858),
    o = n(505905);
let s = (e) => {
    var t;
    let { className: n, hangStatusActivity: s, size: l, animate: c = !0, fallbackVariant: u = "original" } = e;
    if ((0, a.Fe)(null == s ? void 0 : s.state)[0] === o.tN.CUSTOM && null != s)
        return null != s.emoji
            ? (0, r.jsx)(i.Z, {
                  emoji: s.emoji,
                  className: n,
                  hideTooltip: !0,
                  animate: c,
              })
            : null;
    let d = null == (t = (0, a.tV)(s, u)) ? void 0 : t.icon;
    if (null == d) return null;
    if ("string" == typeof d)
        return null != d
            ? (0, r.jsx)("img", {
                  src: d,
                  alt: "",
                  className: null != n ? n : void 0,
              })
            : null;
    let f = d;
    return (0, r.jsx)(f, {
        size: l,
        className: n,
    });
};
