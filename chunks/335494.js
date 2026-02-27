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
    o = l(397927),
    u = l(765671),
    c = l(602674),
    d = l(696016),
    m = l(335416),
    h = l(48912);
let p = new Map(),
    f = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: s, onMouseDown: f, className: g } = e,
            v = n.useRef(null),
            { ref: x, width: b, height: j } = (0, u.Ay)(),
            [C, N] = n.useState(null),
            k = (0, o.rdh)(r.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (n.useEffect(
            () => (
                (v.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    v.current?.terminate();
                }
            ),
            [],
        ),
        n.useEffect(() => {
            if (0 === b || 0 === s.length || null == v.current) return;
            let e = `${t}-${s.map((e) => e.trackName).join(",")}-${b}`,
                l = p.get(e);
            if (null != l) return void N(l.waveform);
            let a = v.current,
                n = !1,
                i = (t) => {
                    if (n) return;
                    let { waveform: l, error: a } = t.data;
                    null != a ? d.nx.error("Failed to load waveform:", a) : (p.set(e, { waveform: l }), N(l));
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
                        if (n) return;
                        a.postMessage({ trackChannels: l, width: b }, i);
                    } catch (e) {
                        n || d.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (n = !0), a.removeEventListener("message", i);
                }
            );
        }, [s, t, b]),
        n.useEffect(() => {
            if (null == x.current || null == C || (b ?? 0) === 0 || (j ?? 0) === 0) return;
            let e = x.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / C.length,
                s = -(n * (m.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, a), (t.fillStyle = k);
            for (let e = 0; e < C.length; e++) {
                let l = C[e] * a,
                    i = e * n + s;
                t.fillRect(i, a, n - s, -l);
            }
        }, [k, b, x, j, C]),
        0 === s.length)
            ? null
            : (0, a.jsx)("div", {
                  className: i()(h.k, g),
                  children: (0, a.jsx)("canvas", {
                      className: h.s,
                      ref: x,
                      width: (b ?? 0) * 2,
                      height: (j ?? 0) * 2,
                      onMouseDown: f,
                  }),
              });
    });
