n.d(t, { A: () => m }), n(638769), n(321073), n(896048);
var r = n(627968);
n(64700);
var a = n(735438),
    i = n.n(a),
    l = n(397927),
    s = n(828904),
    o = n(974175),
    d = n(985018),
    c = n(473169);
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
    if (null == t) return (0, r.jsx)(l.y$y, { type: l.y$y.Type.SPINNING_CIRCLE });
    let n = i().map(t, (e, t) => {
        if (void 0 !== e && "buffers" !== t)
            return (0, r.jsx)(
                o.q7,
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
                o.q7,
                {
                    label: "Frames Per Second",
                    value: t.recentEncodedFrames / (t.recentDurationMs / 1000),
                },
                "framerate",
            ),
        ),
        (0, r.jsxs)(l.BJc, {
            children: [
                (0, r.jsx)(l.Heading, {
                    variant: "heading-md/medium",
                    children: d.intl.string(d.t.MKrFKE),
                }),
                (0, s.C6)(n),
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
                                            o.q7,
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
                                    className: c.C2,
                                    children: [
                                        (0, r.jsx)(l.Heading, {
                                            variant: "heading-md/medium",
                                            children: "Buffer: ".concat(e.key),
                                        }),
                                        (0, s.C6)(t),
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
