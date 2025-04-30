n.d(t, { Z: () => x }), n(388685);
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
    m = n(225893),
    g = n(768675),
    b = n(624868);
let y = n(171665);
function h() {
    return 100 * Math.round((5000 * Math.random()) / 100);
}
function x(e) {
    let { isPaused: t, width: n, height: x } = e,
        v = (0, s.useRef)(null),
        O = (0, s.useRef)(-1),
        [j, N] = (0, s.useState)(!1),
        _ = (0, s.useRef)(h()),
        P = (0, i.eR)(y),
        C = (e) => {
            var t;
            null == (t = v.current) || t.removeDrop(e), (_.current = h()), N(!1), clearTimeout(O.current);
        },
        Z = (e) => {
            N(!0),
                P(),
                (0, o.KH)(u.yN.LOOTBOXES, _.current),
                (O.current = setTimeout(() => {
                    C(e);
                }, 1000));
        };
    (0, s.useEffect)(() => () => clearTimeout(O.current), []);
    let w = (e) =>
        j
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)('div', {
                          className: p.points,
                          children: [
                              (0, r.jsxs)(c.Z, {
                                  variant: 'text-lg/normal',
                                  children: ['+', _.current]
                              }),
                              (0, r.jsx)('img', {
                                  src: m,
                                  alt: f.intl.string(d.default.BropER)
                              })
                          ]
                      }),
                      (0, r.jsx)('img', {
                          src: b,
                          alt: f.intl.string(d.default.CwZfY2),
                          width: 100,
                          height: 100
                      })
                  ]
              })
            : (0, r.jsx)(a.Z, {
                  onClick: () => Z(e),
                  children: (0, r.jsx)('img', {
                      src: g,
                      alt: f.intl.string(d.default.CwZfY2),
                      width: 100,
                      height: 100
                  })
              });
    return (0, r.jsx)(l.Z, {
        ref: v,
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
