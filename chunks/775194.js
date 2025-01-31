r.d(t, { Z: () => p }), r(653041), r(47120);
var n = r(200651);
r(192379);
var a = r(392711),
    i = r.n(a),
    l = r(481060),
    s = r(481250),
    o = r(513547),
    d = r(388032),
    c = r(378481),
    u = r(232186);
let m = {
    userId: 1,
    dataType: 2,
    savedKB: 3,
    numFrames: 4,
    startTimestampMs: 5,
    endTimestampMs: 6,
    width: 7,
    height: 8,
    audioChannels: 9,
    sampleRate: 10
};
function p(e) {
    let { clips: t } = e;
    if (null == t) return (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE });
    let r = i().map(t, (e, t) => {
        if (void 0 !== e && 'buffers' !== t)
            return (0, n.jsx)(
                o.ck,
                {
                    label: t,
                    value: e
                },
                t
            );
    });
    return (
        r.push(
            (0, n.jsx)(
                o.ck,
                {
                    label: 'Frames Per Second',
                    value: t.recentEncodedFrames / (t.recentDurationMs / 1000)
                },
                'framerate'
            )
        ),
        (0, n.jsxs)(l.hjN, {
            tag: l.RB0.H2,
            title: d.intl.string(d.t.MKrFKC),
            children: [
                (0, s.a)(r),
                (function (e) {
                    if (null != e.buffers)
                        return e.buffers.map((e) => {
                            let t = [];
                            for (let r of Object.keys(e).sort((e, t) => {
                                let r = m[e],
                                    n = m[t];
                                return r !== n ? (void 0 === r ? 1 : void 0 === n ? -1 : r - n) : e > t ? 1 : -1;
                            })) {
                                let a = e[r];
                                null !== a &&
                                    'key' !== r &&
                                    t.push(
                                        (0, n.jsx)(
                                            o.ck,
                                            {
                                                label: r,
                                                value: a
                                            },
                                            r
                                        )
                                    );
                            }
                            return (0, n.jsx)(
                                l.hjN,
                                {
                                    className: u.marginBottom40,
                                    title: 'Buffer: '.concat(e.key),
                                    titleClassName: c.title,
                                    children: (0, s.a)(t)
                                },
                                'Buffer: '.concat(e.key)
                            );
                        });
                })(t)
            ]
        })
    );
}
