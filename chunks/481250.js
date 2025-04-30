r.d(t, {
    V: () => b,
    a: () => v
}),
    r(539854),
    r(642613),
    r(388685);
var n = r(200651);
r(192379);
var a = r(120356),
    i = r.n(a),
    l = r(481060),
    s = r(304680),
    o = r(763520),
    c = r(600164),
    d = r(352978),
    u = r(131951),
    m = r(226961),
    p = r(513547),
    h = r(65154),
    y = r(442122),
    g = r(20493);
let f = {
    [h.Z.NO_OVERRIDE]: 'None',
    [h.Z.LOW]: 'Low Quality Stream',
    [h.Z.HIGH]: 'High Quality Stream'
};
function v(e) {
    let t = [],
        r = 0;
    for (
        e.length % 2 != 0 &&
        e.push(
            (0, n.jsx)(
                c.Z,
                {
                    basis: '50%',
                    grow: 0
                },
                r++
            )
        );
        e.length > 0;

    )
        t.push(
            (0, n.jsx)(
                c.Z,
                {
                    basis: '50%',
                    grow: 0,
                    children: e.splice(0, 2)
                },
                r++
            )
        );
    return t;
}
let D = {
    ssrc: 1,
    codec: 2
};
function b(e, t, r, a, b) {
    return e.map((E, j) => {
        let C = [];
        for (let e of Object.keys(E).sort((e, t) => {
            let r = D[e],
                n = D[t];
            return r !== n ? (void 0 === r ? 1 : void 0 === n ? -1 : r - n) : m.Pz[e] !== m.Pz[t] ? (m.Pz[e] ? 1 : -1) : e > t ? 1 : -1;
        })) {
            let t = E[e];
            p.al[e] ||
                void 0 === t ||
                C.push(
                    (0, n.jsx)(
                        p.ck,
                        {
                            section: a,
                            label: e,
                            value: t
                        },
                        e
                    )
                );
        }
        return (0, n.jsxs)(
            l.hjN,
            {
                className: g.marginBottom40,
                title: E.type,
                titleClassName: y.sectionHeader,
                children: [
                    'video' === E.type &&
                        null != r &&
                        null != a &&
                        null != b &&
                        (function (e, t, r, a) {
                            let l = a.get(t, r, e.ssrc);
                            return null != l
                                ? (0, n.jsx)('div', {
                                      className: i()(y.videoWrapper, g.marginBottom40),
                                      children: (0, n.jsx)(d.Z, {
                                          streamId: l,
                                          videoComponent: u.Z.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: o.m.REPLAY_VIDEO_STREAM,
                                          userId: r
                                      })
                                  })
                                : null;
                        })(E, r, a, b),
                    v(C),
                    'video' === E.type &&
                        j === e.length - 1 &&
                        null != r &&
                        null != a &&
                        null != b &&
                        (0, n.jsx)(c.Z, {
                            className: g.marginBottom20,
                            children: (0, n.jsxs)(c.Z.Child, {
                                basis: '100%',
                                children: [
                                    (0, n.jsx)(l.vwX, {
                                        tag: l.RB0.H5,
                                        className: g.marginBottom8,
                                        children: 'Simulcast Override'
                                    }),
                                    (0, n.jsx)(l.q4e, {
                                        value: m.ZP.getSimulcastDebugOverride(a, t),
                                        onChange: (e) => {
                                            s.MS(a, t, e);
                                        },
                                        options: Object.values(h.Z).map((e) => ({
                                            value: e,
                                            label: f[e]
                                        }))
                                    })
                                ]
                            })
                        })
                ]
            },
            ''.concat(E.type, ' + ').concat(E.ssrc)
        );
    });
}
