n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(668826),
    i = n(18582),
    a = n(3072),
    c = n(763283),
    l = n(892689),
    u = n(477839),
    d = n(884479),
    f = n(388032),
    p = n(81781),
    m = n(733),
    g = n(768675),
    b = n(624868);
let y = n(171665);
function h() {
    return 100 * Math.round((5000 * Math.random()) / 100);
}
function v(e) {
    let { isPaused: t, width: n, height: v } = e,
        x = (0, s.useRef)(),
        N = (0, s.useRef)(-1),
        [O, j] = (0, s.useState)(!1),
        Z = (0, s.useRef)(h()),
        _ = (0, a.eR)(y),
        P = (e) => {
            var t;
            null === (t = x.current) || void 0 === t || t.removeDrop(e), (Z.current = h()), j(!1), clearTimeout(N.current);
        },
        C = (e) => {
            j(!0),
                _(),
                (0, o.KH)(u.yN.LOOTBOXES, Z.current),
                (N.current = setTimeout(() => {
                    P(e);
                }, 1000));
        };
    (0, s.useEffect)(() => () => clearTimeout(N.current), []);
    let w = (e) =>
        O
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)('div', {
                          className: p.points,
                          children: [
                              (0, r.jsxs)(c.Z, {
                                  variant: 'text-lg/normal',
                                  children: ['+', Z.current]
                              }),
                              (0, r.jsx)('img', {
                                  src: m,
                                  alt: f.NW.string(d.Z.BropER)
                              })
                          ]
                      }),
                      (0, r.jsx)('img', {
                          src: b,
                          alt: f.NW.string(d.Z.CwZfY2),
                          width: 100,
                          height: 100
                      })
                  ]
              })
            : (0, r.jsx)(i.Z, {
                  onClick: () => C(e),
                  children: (0, r.jsx)('img', {
                      src: g,
                      alt: f.NW.string(d.Z.CwZfY2),
                      width: 100,
                      height: 100
                  })
              });
    return (0, r.jsx)(l.Z, {
        ref: x,
        isPaused: t,
        itemId: u.yN.LOOTBOXES,
        chance: 0.2,
        points: 0,
        width: n,
        height: v,
        dropPadding: 200,
        maxDrops: 1,
        children: (e) =>
            (0, r.jsx)('div', {
                className: p.lootbox,
                children: w(e)
            })
    });
}
