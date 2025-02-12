n.d(t, {
    OH: () => d,
    ZP: () => p,
    eE: () => f,
    jZ: () => c
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(692547),
    o = n(481060),
    l = n(388032),
    u = n(834368),
    c = (function (e) {
        return (e.RED = 'RED'), (e.GRAY = 'GRAY'), e;
    })({});
let d = {
        LARGE: u.liveLarge,
        SMALL: u.liveSmall
    },
    f = {
        [o.Dv2.ROUND]: u.liveShapeRound,
        [o.Dv2.ROUND_LEFT]: u.liveShapeRoundLeft,
        [o.Dv2.ROUND_RIGHT]: u.liveShapeRoundRight,
        [o.Dv2.SQUARE]: ''
    };
function _(e) {
    let { className: t, style: n, shape: r = o.Dv2.ROUND, look: c = 'RED', size: _ = d.LARGE } = e;
    return 'RED' === c
        ? (0, i.jsx)(o.IGR, {
              text: l.intl.string(l.t.dI3q4u),
              className: a()(t, u.live, _),
              color: s.Z.unsafe_rawColors.RED_400.css,
              shape: f[r],
              style: n
          })
        : (0, i.jsx)(o.IGR, {
              text: l.intl.string(l.t.dI3q4u),
              className: a()(t, u.live, _, u.grey),
              disableColor: !0,
              shape: f[r],
              style: n
          });
}
(_.Looks = c), (_.Sizes = d);
let p = _;
