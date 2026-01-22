l.d(t, {
    A: () => v,
}),
    l(896048),
    l(693327),
    l(554719),
    l(680155),
    l(323874),
    l(14289),
    l(35956),
    l(65821),
    l(927092),
    l(212978),
    l(648691),
    l(393431),
    l(752391),
    l(532706),
    l(42231),
    l(232424),
    l(757074),
    l(949626),
    l(767709),
    l(65162),
    l(321073);
var n = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(827734),
    o = l(397927),
    u = l(765671),
    c = l(602674),
    d = l(696016),
    m = l(335416),
    h = l(48912);
let p = new Map(),
    v = a.memo(function (e) {
        let { clipId: t, voiceAudioTracks: r, onMouseDown: v, className: f } = e,
            b = a.useRef(null),
            { ref: g, width: j, height: x } = (0, u.Ay)(),
            [y, C] = a.useState(null),
            k = (0, o.rdh)(s.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (a.useEffect(
            () => (
                (b.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    var e;
                    null == (e = b.current) || e.terminate();
                }
            ),
            [],
        ),
        a.useEffect(() => {
            if (0 === j || 0 === r.length || null == b.current) return;
            let e = ""
                    .concat(t, "-")
                    .concat(r.map((e) => e.trackName).join(","), "-")
                    .concat(j),
                l = p.get(e);
            if (null != l) return void C(l.waveform);
            let n = b.current,
                a = !1,
                i = (t) => {
                    if (a) return;
                    let { waveform: l, error: n } = t.data;
                    null != n
                        ? d.nx.error("Failed to load waveform:", n)
                        : (p.set(e, {
                              waveform: l,
                          }),
                          C(l));
                };
            return (
                n.addEventListener("message", i),
                (async () => {
                    try {
                        let e = (0, c.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(r.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (a) return;
                        let l = [],
                            i = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let n = new Float32Array(e.getChannelData(l));
                                t.push(n), i.push(n.buffer);
                            }
                            l.push(t);
                        }
                        if (a) return;
                        n.postMessage(
                            {
                                trackChannels: l,
                                width: j,
                            },
                            i,
                        );
                    } catch (e) {
                        a || d.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (a = !0), n.removeEventListener("message", i);
                }
            );
        }, [r, t, j]),
        a.useEffect(() => {
            if (null == g.current || null == y || (null != j ? j : 0) === 0 || (null != x ? x : 0) === 0) return;
            let e = g.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: n } = e,
                a = l / y.length,
                r = -(a * (m.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, n), (t.fillStyle = k);
            for (let e = 0; e < y.length; e++) {
                let l = y[e] * n,
                    i = e * a + r;
                t.fillRect(i, n, a - r, -l);
            }
        }, [k, j, g, x, y]),
        0 === r.length)
            ? null
            : (0, n.jsx)("div", {
                  className: i()(h.k, f),
                  children: (0, n.jsx)("canvas", {
                      className: h.s,
                      ref: g,
                      width: (null != j ? j : 0) * 2,
                      height: (null != x ? x : 0) * 2,
                      onMouseDown: v,
                  }),
              });
    });
