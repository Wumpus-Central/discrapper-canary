n.d(t, { Z: () => m }), n(642613), n(539854), n(388685);
var r = n(951288);
n(647438);
var a = n(392711),
    i = n.n(a),
    l = n(481060),
    o = n(481250),
    s = n(513547),
    c = n(388032),
    d = n(10198);
let u = {
    userId: 1,
    dataType: 2,
    savedKB: 3,
    numFrames: 4,
    startTimestampMs: 5,
    endTimestampMs: 6,
    width: 7,
    height: 8,
    audioChannels: 9,
    sampleRate: 10,
};
function m(e) {
    let { clips: t } = e;
    if (null == t) return (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE });
    let n = i().map(t, (e, t) => {
        if (void 0 !== e && "buffers" !== t)
            return (0, r.jsx)(
                s.ck,
                {
                    label: t,
                    value: e,
                },
                t,
            );
    });
    return (
        n.push(
            (0, r.jsx)(
                s.ck,
                {
                    label: "Frames Per Second",
                    value: t.recentEncodedFrames / (t.recentDurationMs / 1000),
                },
                "framerate",
            ),
        ),
        (0, r.jsxs)(l.Kqy, {
            children: [
                (0, r.jsx)(l.Heading, {
                    variant: "heading-md/medium",
                    children: c.intl.string(c.t.MKrFKE),
                }),
                (0, o.VE)(n),
                (function (e) {
                    if (null != e.buffers)
                        return e.buffers.map((e) => {
                            let t = [];
                            for (let n of Object.keys(e).sort((e, t) => {
                                let n = u[e],
                                    r = u[t];
                                return n !== r ? (void 0 === n ? 1 : void 0 === r ? -1 : n - r) : e > t ? 1 : -1;
                            })) {
                                let a = e[n];
                                null !== a &&
                                    "key" !== n &&
                                    t.push(
                                        (0, r.jsx)(
                                            s.ck,
                                            {
                                                label: n,
                                                value: a,
                                            },
                                            n,
                                        ),
                                    );
                            }
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: d.marginBottom40,
                                    children: [
                                        (0, r.jsx)(l.Heading, {
                                            variant: "heading-md/medium",
                                            children: "Buffer: ".concat(e.key),
                                        }),
                                        (0, o.VE)(t),
                                    ],
                                },
                                "Buffer: ".concat(e.key),
                            );
                        });
                })(t),
            ],
        })
    );
}
