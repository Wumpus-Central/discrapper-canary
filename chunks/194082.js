r.d(n, {
    OH: function () {
        return f;
    },
    eE: function () {
        return p;
    },
    jZ: function () {
        return i;
    }
});
var i,
    a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(692547),
    u = r(481060),
    c = r(388032),
    d = r(914410);
!(function (e) {
    (e.RED = 'RED'), (e.GRAY = 'GRAY');
})(i || (i = {}));
let f = {
        LARGE: d.liveLarge,
        SMALL: d.liveSmall
    },
    p = {
        [u.BadgeShapes.ROUND]: d.liveShapeRound,
        [u.BadgeShapes.ROUND_LEFT]: d.liveShapeRoundLeft,
        [u.BadgeShapes.ROUND_RIGHT]: d.liveShapeRoundRight,
        [u.BadgeShapes.SQUARE]: ''
    };
function h(e) {
    let { className: n, style: r, shape: i = u.BadgeShapes.ROUND, look: o = 'RED', size: h = f.LARGE } = e;
    return 'RED' === o
        ? (0, a.jsx)(u.TextBadge, {
              text: c.intl.string(c.t.dI3q4u),
              className: s()(n, d.live, h),
              color: l.Z.unsafe_rawColors.RED_400.css,
              shape: p[i],
              style: r
          })
        : (0, a.jsx)(u.TextBadge, {
              text: c.intl.string(c.t.dI3q4u),
              className: s()(n, d.live, h, d.grey),
              disableColor: !0,
              shape: p[i],
              style: r
          });
}
(h.Looks = i), (h.Sizes = f), (n.ZP = h);
