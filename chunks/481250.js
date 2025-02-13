n.d(t, {
    V: () => C,
    a: () => f
}),
    n(653041),
    n(47120);
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(481060),
    l = n(304680),
    s = n(763520),
    d = n(600164),
    c = n(352978),
    u = n(131951),
    m = n(226961),
    p = n(513547),
    h = n(65154),
    g = n(316095),
    b = n(483938);
let y = {
    [h.Z.NO_OVERRIDE]: 'None',
    [h.Z.LOW]: 'Low Quality Stream',
    [h.Z.HIGH]: 'High Quality Stream'
};
function f(e) {
    let t = [],
        n = 0;
    for (
        e.length % 2 != 0 &&
        e.push(
            (0, r.jsx)(
                d.Z,
                {
                    basis: '50%',
                    grow: 0
                },
                n++
            )
        );
        e.length > 0;

    )
        t.push(
            (0, r.jsx)(
                d.Z,
                {
                    basis: '50%',
                    grow: 0,
                    children: e.splice(0, 2)
                },
                n++
            )
        );
    return t;
}
let v = {
    ssrc: 1,
    codec: 2
};
function C(e, t, n, a, C) {
    return e.map((R, D) => {
        let S = [];
        for (let e of Object.keys(R).sort((e, t) => {
            let n = v[e],
                r = v[t];
            return n !== r ? (void 0 === n ? 1 : void 0 === r ? -1 : n - r) : m.Pz[e] !== m.Pz[t] ? (m.Pz[e] ? 1 : -1) : e > t ? 1 : -1;
        })) {
            let t = R[e];
            !p.al[e] &&
                void 0 !== t &&
                S.push(
                    (0, r.jsx)(
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
        return (0, r.jsxs)(
            o.hjN,
            {
                className: b.marginBottom40,
                title: R.type,
                titleClassName: g.sectionHeader,
                children: [
                    'video' === R.type &&
                        null != n &&
                        null != a &&
                        null != C &&
                        (function (e, t, n, a) {
                            let o = a.get(t, n, e.ssrc);
                            return null != o
                                ? (0, r.jsx)('div', {
                                      className: i()(g.videoWrapper, b.marginBottom40),
                                      children: (0, r.jsx)(c.Z, {
                                          streamId: o,
                                          videoComponent: u.Z.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: s.m.REPLAY_VIDEO_STREAM,
                                          userId: n
                                      })
                                  })
                                : null;
                        })(R, n, a, C),
                    f(S),
                    'video' === R.type &&
                        D === e.length - 1 &&
                        null != n &&
                        null != a &&
                        null != C &&
                        (0, r.jsx)(d.Z, {
                            className: b.marginBottom20,
                            children: (0, r.jsxs)(d.Z.Child, {
                                basis: '100%',
                                children: [
                                    (0, r.jsx)(o.vwX, {
                                        tag: o.RB0.H5,
                                        className: b.marginBottom8,
                                        children: 'Simulcast Override'
                                    }),
                                    (0, r.jsx)(o.q4e, {
                                        value: m.ZP.getSimulcastDebugOverride(a, t),
                                        onChange: (e) => {
                                            l.MS(a, t, e);
                                        },
                                        options: Object.values(h.Z).map((e) => ({
                                            value: e,
                                            label: y[e]
                                        }))
                                    })
                                ]
                            })
                        })
                ]
            },
            ''.concat(R.type, ' + ').concat(R.ssrc)
        );
    });
}
