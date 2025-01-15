r.d(t, {
    V: function () {
        return F;
    },
    a: function () {
        return v;
    }
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
    c = r(600164),
    d = r(352978),
    u = r(131951),
    m = r(226961),
    p = r(513547),
    h = r(65154),
    g = r(378481),
    f = r(232186);
let y = {
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
function F(e, t, r, a, F) {
    return e.map((S, C) => {
        var E, Z;
        let R = [];
        for (let e of Object.keys(S).sort((e, t) => {
            let r = D[e],
                n = D[t];
            if (r !== n) return void 0 === r ? 1 : void 0 === n ? -1 : r - n;
            return m.Pz[e] !== m.Pz[t] ? (m.Pz[e] ? 1 : -1) : e > t ? 1 : -1;
        })) {
            let t = S[e];
            if (!p.al[e] && void 0 !== t)
                R.push(
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
            l.FormSection,
            {
                className: f.marginBottom40,
                title: S.type,
                titleClassName: g.sectionHeader,
                children: [
                    'video' === S.type &&
                        null != r &&
                        null != a &&
                        null != F &&
                        (function (e, t, r, a) {
                            let l = a.get(t, r, e.ssrc);
                            return null != l
                                ? (0, n.jsx)('div', {
                                      className: i()(g.videoWrapper, f.marginBottom40),
                                      children: (0, n.jsx)(d.Z, {
                                          streamId: l,
                                          videoComponent: u.Z.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: o.m.REPLAY_VIDEO_STREAM,
                                          userId: r
                                      })
                                  })
                                : null;
                        })(S, r, a, F),
                    v(R),
                    'video' === S.type &&
                        C === e.length - 1 &&
                        null != r &&
                        null != a &&
                        null != F &&
                        ((E = a),
                        (Z = t),
                        (0, n.jsx)(c.Z, {
                            className: f.marginBottom20,
                            children: (0, n.jsxs)(c.Z.Child, {
                                basis: '100%',
                                children: [
                                    (0, n.jsx)(l.FormTitle, {
                                        tag: l.FormTitleTags.H5,
                                        className: f.marginBottom8,
                                        children: 'Simulcast Override'
                                    }),
                                    (0, n.jsx)(l.SingleSelect, {
                                        value: m.ZP.getSimulcastDebugOverride(E, Z),
                                        onChange: (e) => {
                                            s.MS(E, Z, e);
                                        },
                                        options: Object.values(h.Z).map((e) => ({
                                            value: e,
                                            label: y[e]
                                        }))
                                    })
                                ]
                            })
                        }))
                ]
            },
            ''.concat(S.type, ' + ').concat(S.ssrc)
        );
    });
}
