n.d(t, {
    OH: () => d,
    ZP: () => p,
    eE: () => _,
    jZ: () => u
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(692547),
    s = n(481060),
    l = n(388032),
    c = n(760858),
    u = (function (e) {
        return ((e.RED = 'RED'), (e.GRAY = 'GRAY'), e);
    })({});
let d = {
        LARGE: c.liveLarge,
        SMALL: c.liveSmall
    },
    _ = {
        [s.Dv2.ROUND]: c.liveShapeRound,
        [s.Dv2.ROUND_LEFT]: c.liveShapeRoundLeft,
        [s.Dv2.ROUND_RIGHT]: c.liveShapeRoundRight,
        [s.Dv2.SQUARE]: ''
    };
function f(e) {
    let { className: t, style: n, shape: i = s.Dv2.ROUND, look: u = 'RED', size: f = d.LARGE } = e;
    return 'RED' === u
        ? (0, r.jsx)(s.IGR, {
              text: l.intl.string(l.t.dI3q4u),
              className: a()(t, c.live, f),
              color: o.Z.unsafe_rawColors.RED_400.css,
              shape: _[i],
              style: n
          })
        : (0, r.jsx)(s.IGR, {
              text: l.intl.string(l.t.dI3q4u),
              className: a()(t, c.live, f, c.grey),
              disableColor: !0,
              shape: _[i],
              style: n
          });
}
((f.Looks = u), (f.Sizes = d));
let p = f;
