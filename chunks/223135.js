n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(584973),
    a = n(833858),
    o = n(981631);
let s = (e) => {
    var t;
    let { className: n, hangStatusActivity: s, animate: l = !0 } = e;
    if ((null == s ? void 0 : s.state) === o.tNA.CUSTOM)
        return null != s.emoji
            ? (0, r.jsx)(i.Z, {
                  emoji: s.emoji,
                  className: n,
                  hideTooltip: !0,
                  animate: l
              })
            : null;
    let c = null == (t = (0, a.tV)(s)) ? void 0 : t.icon;
    return null != c
        ? (0, r.jsx)('img', {
              src: c,
              alt: '',
              className: null != n ? n : void 0
          })
        : null;
};
