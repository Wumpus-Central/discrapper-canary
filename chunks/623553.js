n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(668826),
    a = n(18582),
    i = n(3072),
    c = n(763283),
    l = n(892689),
    u = n(477839),
    d = n(622802),
    f = n(388032),
    p = n(416927),
    m = n(733),
    g = n(768675),
    b = n(624868);
let y = n(171665);
function h() {
    return 100 * Math.round((5000 * Math.random()) / 100);
}
function x(e) {
    let { isPaused: t, width: n, height: x } = e,
        N = (0, s.useRef)(),
        v = (0, s.useRef)(-1),
        [O, j] = (0, s.useState)(!1),
        Z = (0, s.useRef)(h()),
        _ = (0, i.eR)(y),
        P = (e) => {
            var t;
            null == (t = N.current) || t.removeDrop(e), (Z.current = h()), j(!1), clearTimeout(v.current);
        },
        C = (e) => {
            j(!0),
                _(),
                (0, o.KH)(u.yN.LOOTBOXES, Z.current),
                (v.current = setTimeout(() => {
                    P(e);
                }, 1000));
        };
    (0, s.useEffect)(() => () => clearTimeout(v.current), []);
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
            : (0, r.jsx)(a.Z, {
                  onClick: () => C(e),
                  children: (0, r.jsx)('img', {
                      src: g,
                      alt: f.NW.string(d.Z.CwZfY2),
                      width: 100,
                      height: 100
                  })
              });
    return (0, r.jsx)(l.Z, {
        ref: N,
        isPaused: t,
        itemId: u.yN.LOOTBOXES,
        chance: 0.2,
        points: 0,
        width: n,
        height: x,
        dropPadding: 200,
        maxDrops: 1,
        children: (e) =>
            (0, r.jsx)('div', {
                className: p.lootbox,
                children: w(e)
            })
    });
}
