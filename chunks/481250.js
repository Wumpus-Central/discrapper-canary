r.d(t, {
    V: () => N,
    a: () => v
}),
    r(653041),
    r(230036),
    r(47120);
var n = r(200651);
r(192379);
var a = r(120356),
    i = r.n(a),
    s = r(481060),
    l = r(304680),
    o = r(763520),
    c = r(600164),
    d = r(352978),
    u = r(131951),
    m = r(226961),
    p = r(513547),
    h = r(65154),
    y = r(687366),
    g = r(455812);
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
function N(e, t, r, a, N) {
    return e.map((b, E) => {
        let j = [];
        for (let e of Object.keys(b).sort((e, t) => {
            let r = D[e],
                n = D[t];
            return r !== n ? (void 0 === r ? 1 : void 0 === n ? -1 : r - n) : m.Pz[e] !== m.Pz[t] ? (m.Pz[e] ? 1 : -1) : e > t ? 1 : -1;
        })) {
            let t = b[e];
            !p.al[e] &&
                void 0 !== t &&
                j.push(
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
            s.hjN,
            {
                className: g.marginBottom40,
                title: b.type,
                titleClassName: y.sectionHeader,
                children: [
                    'video' === b.type &&
                        null != r &&
                        null != a &&
                        null != N &&
                        (function (e, t, r, a) {
                            let s = a.get(t, r, e.ssrc);
                            return null != s
                                ? (0, n.jsx)('div', {
                                      className: i()(y.videoWrapper, g.marginBottom40),
                                      children: (0, n.jsx)(d.Z, {
                                          streamId: s,
                                          videoComponent: u.Z.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: o.m.REPLAY_VIDEO_STREAM,
                                          userId: r
                                      })
                                  })
                                : null;
                        })(b, r, a, N),
                    v(j),
                    'video' === b.type &&
                        E === e.length - 1 &&
                        null != r &&
                        null != a &&
                        null != N &&
                        (0, n.jsx)(c.Z, {
                            className: g.marginBottom20,
                            children: (0, n.jsxs)(c.Z.Child, {
                                basis: '100%',
                                children: [
                                    (0, n.jsx)(s.vwX, {
                                        tag: s.RB0.H5,
                                        className: g.marginBottom8,
                                        children: 'Simulcast Override'
                                    }),
                                    (0, n.jsx)(s.q4e, {
                                        value: m.ZP.getSimulcastDebugOverride(a, t),
                                        onChange: (e) => {
                                            l.MS(a, t, e);
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
            ''.concat(b.type, ' + ').concat(b.ssrc)
        );
    });
}
