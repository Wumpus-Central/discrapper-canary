l.d(t, { A: () => f }),
    l(323874),
    l(14289),
    l(35956),
    l(393431),
    l(532706),
    l(42231),
    l(232424),
    l(949626),
    l(767709),
    l(65162),
    l(321073);
var a = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(827734),
    d = l(602853),
    o = l(765671),
    c = l(602674),
    u = l(696016),
    m = l(335416),
    h = l(664875);
let p = new Map(),
    f = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: s, onMouseDown: f, className: v } = e,
            g = n.useRef(null),
            { ref: x, width: j, height: b } = (0, o.Ay)(),
            [C, y] = n.useState(null),
            A = (0, d.r)(r.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (n.useEffect(
            () => (
                (g.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    g.current?.terminate();
                }
            ),
            [],
        ),
        n.useEffect(() => {
            if (0 === j || 0 === s.length || null == g.current) return;
            let e = `${t}-${s.map((e) => e.trackName).join(",")}-${j}`,
                l = p.get(e);
            if (null != l) return void y(l.waveform);
            let a = g.current,
                n = !1,
                i = (t) => {
                    if (n) return;
                    let { waveform: l, error: a } = t.data;
                    null != a ? u.nx.error("Failed to load waveform:", a) : (p.set(e, { waveform: l }), y(l));
                };
            return (
                a.addEventListener("message", i),
                (async () => {
                    try {
                        let e = (0, c.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(s.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (n) return;
                        let l = [],
                            i = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let a = new Float32Array(e.getChannelData(l));
                                t.push(a), i.push(a.buffer);
                            }
                            l.push(t);
                        }
                        a.postMessage({ trackChannels: l, width: j }, i);
                    } catch (e) {
                        n || u.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (n = !0), a.removeEventListener("message", i);
                }
            );
        }, [s, t, j]),
        n.useEffect(() => {
            if (null == x.current || null == C || (j ?? 0) === 0 || (b ?? 0) === 0) return;
            let e = x.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / C.length,
                s = -(n * (m.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, a), (t.fillStyle = A);
            for (let e = 0; e < C.length; e++) {
                let l = C[e] * a,
                    i = e * n + s;
                t.fillRect(i, a, n - s, -l);
            }
        }, [A, j, x, b, C]),
        0 === s.length)
            ? null
            : (0, a.jsx)("div", {
                  className: i()(h.k, v),
                  children: (0, a.jsx)("canvas", {
                      className: h.s,
                      ref: x,
                      width: (j ?? 0) * 2,
                      height: (b ?? 0) * 2,
                      onMouseDown: f,
                  }),
              });
    });
