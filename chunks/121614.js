r.d(t, { A: () => h }), r(321073);
var n = r(627968);
r(64700);
var i = r(735438),
    a = r.n(i),
    o = r(534514),
    l = r(289873),
    s = r(331322),
    d = r(828904),
    c = r(974175),
    u = r(985018),
    m = r(818050);
let p = {
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
function h(e) {
    let { clips: t } = e;
    if (null == t) return (0, n.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE });
    let r = a().map(t, (e, t) => {
        if (void 0 !== e && "buffers" !== t) return (0, n.jsx)(c.q7, { label: t, value: e }, t);
    });
    return (
        r.push(
            (0, n.jsx)(
                c.q7,
                { label: "Frames Per Second", value: t.recentEncodedFrames / (t.recentDurationMs / 1e3) },
                "framerate",
            ),
        ),
        (0, n.jsxs)(s.B, {
            children: [
                (0, n.jsx)(o.D, { variant: "heading-md/medium", children: u.intl.string(u.t.MKrFKE) }),
                (0, d.C6)(r),
                (function (e) {
                    if (null != e.buffers)
                        return e.buffers.map((e) => {
                            let t = [];
                            for (let r of Object.keys(e).sort((e, t) => {
                                let r = p[e],
                                    n = p[t];
                                return r !== n ? (void 0 === r ? 1 : void 0 === n ? -1 : r - n) : e > t ? 1 : -1;
                            })) {
                                let i = e[r];
                                null !== i && "key" !== r && t.push((0, n.jsx)(c.q7, { label: r, value: i }, r));
                            }
                            return (0, n.jsxs)(
                                "div",
                                {
                                    className: m.C2,
                                    children: [
                                        (0, n.jsx)(o.D, { variant: "heading-md/medium", children: `Buffer: ${e.key}` }),
                                        (0, d.C6)(t),
                                    ],
                                },
                                `Buffer: ${e.key}`,
                            );
                        });
                })(t),
            ],
        })
    );
}
