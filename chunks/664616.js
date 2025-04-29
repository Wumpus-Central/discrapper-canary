n.d(t, { Z: () => Z }), n(388685);
var r = n(255367),
    s = n(73800),
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
    v = n(391291),
    O = n(895401),
    j = n(191351),
    N = n(40050),
    _ = n(236954);
let P = {
        0: [n(617627), n(200445), n(714530), n(9997), n(550796)],
        1: [n(731544), n(904194), n(96599), n(590881)],
        2: [h, x, v, O],
        3: [j, N, _],
        4: [m, g, b, y]
    },
    C = { state: 2 };
function Z(e) {
    var t;
    let { isPaused: n } = e,
        [o, m] = (0, l.Z)(f.yN.PET_WUMPUS),
        g = null != (t = o.state) ? t : C.state,
        b = c.Mq[f.yN.PET_WUMPUS],
        y = P[g],
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
