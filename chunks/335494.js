(l.d(t, { A: () => x }),
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
    l(321073));
var a = l(477900),
    n = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(661531),
    o = l(602853),
    c = l(765671),
    u = l(602674),
    d = l(696016),
    m = l(335416),
    h = l(556250);
let f = new Map(),
    x = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: x, className: v, alwaysRenderContainer: p = !1 } = e,
            g = n.useRef(null),
            { ref: j, width: b, height: C } = (0, c.Ay)(),
            [y, w] = n.useState(null),
            N = (0, o.r)(r.A.colors.BACKGROUND_MOD_STRONG).hex();
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
            if (0 === b || 0 === i.length || null == g.current) return;
            let e = `${t}-${i.map((e) => e.trackName).join(",")}-${b}`,
                l = f.get(e);
            if (null != l) return void w(l.waveform);
            let a = g.current,
                n = !1;
            function s(t) {
                if (n) return;
                let { waveform: l, error: a } = t.data;
                null != a ? d.nx.error("Failed to load waveform:", a) : (f.set(e, { waveform: l }), w(l));
            }
            return (
                a.addEventListener("message", s),
                (async function () {
                    try {
                        let e = (0, u.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (n) return;
                        let l = [],
                            s = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let a = new Float32Array(e.getChannelData(l));
                                (t.push(a), s.push(a.buffer));
                            }
                            l.push(t);
                        }
                        a.postMessage({ trackChannels: l, width: b }, s);
                    } catch (e) {
                        n || d.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    ((n = !0), a.removeEventListener("message", s));
                }
            );
        }, [i, t, b]),
        n.useEffect(() => {
            if (null == j.current || null == y || (b ?? 0) === 0 || (C ?? 0) === 0) return;
            let e = j.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / y.length,
                i = -(n * (m.Jh.waveformBarWidth - 1));
            (t.clearRect(0, 0, l, a), (t.fillStyle = N));
            for (let e = 0; e < y.length; e++) {
                let l = y[e] * a,
                    s = e * n + i;
                t.fillRect(s, a, n - i, -l);
            }
        }, [N, b, j, C, y]),
        0 === i.length)
            ? p
                ? (0, a.jsx)("div", { className: s()(h.k, v), onMouseDown: x })
                : null
            : (0, a.jsx)("div", {
                  className: s()(h.k, v),
                  children: (0, a.jsx)("canvas", {
                      className: h.s,
                      ref: j,
                      width: (b ?? 0) * 2,
                      height: (C ?? 0) * 2,
                      onMouseDown: x,
                  }),
              });
    });
