n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(668826),
    c = n(359013),
    l = n(284539),
    u = n(26141),
    d = n(18582),
    f = n(477839),
    p = n(173719),
    m = n(91776),
    g = n(276626),
    b = n(874641),
    y = n(884994),
    h = n(930961),
    x = n(732513),
    N = n(391291),
    v = n(895401),
    O = n(191351),
    j = n(40050),
    Z = n(236954);
let _ = {
        0: [n(617627), n(200445), n(714530), n(9997), n(550796)],
        1: [n(731544), n(904194), n(96599), n(590881)],
        2: [h, x, N, v],
        3: [O, j, Z],
        4: [m, g, b, y]
    },
    P = { state: 2 };
function C(e) {
    var t;
    let { isPaused: n } = e,
        [o, m] = (0, l.Z)(f.yN.PET_WUMPUS),
        g = null != (t = o.state) ? t : P.state,
        b = c.Mq[f.yN.PET_WUMPUS],
        y = _[g],
        h = (0, s.useCallback)(() => {
            0 === g && m({ state: 1 });
        }, [m, g]),
        x = (0, s.useCallback)(() => {
            2 === g ? ((0, i.KH)(f.yN.PET_WUMPUS, b.points), m({ state: 3 })) : 3 === g ? (0.2 > Math.random() ? m({ state: 4 }) : m({ state: 2 })) : 1 === g ? m({ state: 2 }) : 4 === g && m({ state: 0 });
        }, [b.points, m, g]);
    return (0, r.jsx)(d.Z, {
        className: a()(p.outer, { [p.clickable]: 0 === g }),
        onClick: h,
        children: (0, r.jsx)(u.Z, {
            className: p.image,
            sources: y,
            interval: 500,
            isPaused: n,
            onLoopEnd: x
        })
    });
}
