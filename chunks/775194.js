n.d(t, { Z: () => p }), n(653041), n(47120);
var r = n(200651);
n(192379);
var a = n(392711),
    i = n.n(a),
    o = n(481060),
    l = n(481250),
    s = n(513547),
    d = n(388032),
    c = n(316095),
    u = n(483938);
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
    if (null == t) return (0, r.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE });
    let n = i().map(t, (e, t) => {
        if (void 0 !== e && 'buffers' !== t)
            return (0, r.jsx)(
                s.ck,
                {
                    label: t,
                    value: e
                },
                t
            );
    });
    return (
        n.push(
            (0, r.jsx)(
                s.ck,
                {
                    label: 'Frames Per Second',
                    value: t.recentEncodedFrames / (t.recentDurationMs / 1000)
                },
                'framerate'
            )
        ),
        (0, r.jsxs)(o.hjN, {
            tag: o.RB0.H2,
            title: d.intl.string(d.t.MKrFKC),
            children: [
                (0, l.a)(n),
                (function (e) {
                    if (null != e.buffers)
                        return e.buffers.map((e) => {
                            let t = [];
                            for (let n of Object.keys(e).sort((e, t) => {
                                let n = m[e],
                                    r = m[t];
                                return n !== r ? (void 0 === n ? 1 : void 0 === r ? -1 : n - r) : e > t ? 1 : -1;
                            })) {
                                let a = e[n];
                                null !== a &&
                                    'key' !== n &&
                                    t.push(
                                        (0, r.jsx)(
                                            s.ck,
                                            {
                                                label: n,
                                                value: a
                                            },
                                            n
                                        )
                                    );
                            }
                            return (0, r.jsx)(
                                o.hjN,
                                {
                                    className: u.marginBottom40,
                                    title: 'Buffer: '.concat(e.key),
                                    titleClassName: c.title,
                                    children: (0, l.a)(t)
                                },
                                'Buffer: '.concat(e.key)
                            );
                        });
                })(t)
            ]
        })
    );
}
