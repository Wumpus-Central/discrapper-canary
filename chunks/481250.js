r.d(t, {
    V: () => E,
    a: () => v
}),
    r(653041),
    r(47120);
var n = r(200651);
r(192379);
var a = r(120356),
    i = r.n(a),
    l = r(481060),
    s = r(304680),
    o = r(763520),
    d = r(600164),
    c = r(352978),
    u = r(131951),
    m = r(226961),
    p = r(513547),
    h = r(65154),
    y = r(378481),
    g = r(232186);
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
                d.Z,
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
                d.Z,
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
function E(e, t, r, a, E) {
    return e.map((C, Z) => {
        let N = [];
        for (let e of Object.keys(C).sort((e, t) => {
            let r = D[e],
                n = D[t];
            return r !== n ? (void 0 === r ? 1 : void 0 === n ? -1 : r - n) : m.Pz[e] !== m.Pz[t] ? (m.Pz[e] ? 1 : -1) : e > t ? 1 : -1;
        })) {
            let t = C[e];
            !p.al[e] &&
                void 0 !== t &&
                N.push(
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
                title: C.type,
                titleClassName: y.sectionHeader,
                children: [
                    'video' === C.type &&
                        null != r &&
                        null != a &&
                        null != E &&
                        (function (e, t, r, a) {
                            let l = a.get(t, r, e.ssrc);
                            return null != l
                                ? (0, n.jsx)('div', {
                                      className: i()(y.videoWrapper, g.marginBottom40),
                                      children: (0, n.jsx)(c.Z, {
                                          streamId: l,
                                          videoComponent: u.Z.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: o.m.REPLAY_VIDEO_STREAM,
                                          userId: r
                                      })
                                  })
                                : null;
                        })(C, r, a, E),
                    v(N),
                    'video' === C.type &&
                        Z === e.length - 1 &&
                        null != r &&
                        null != a &&
                        null != E &&
                        (0, n.jsx)(d.Z, {
                            className: g.marginBottom20,
                            children: (0, n.jsxs)(d.Z.Child, {
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
            ''.concat(C.type, ' + ').concat(C.ssrc)
        );
    });
}
