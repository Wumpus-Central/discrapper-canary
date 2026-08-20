l.d(t, { A: () => x }),
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
var n = l(477900),
    a = l(582128),
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
    x = a.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: x, className: v, alwaysRenderContainer: p = !1 } = e,
            g = a.useRef(null),
            { ref: j, width: b, height: C } = (0, c.Ay)(),
            [y, N] = a.useState(null),
            E = (0, o.r)(r.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (a.useEffect(
            () => (
                (g.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    g.current?.terminate();
                }
            ),
            [],
        ),
        a.useEffect(() => {
            if (0 === b || 0 === i.length || null == g.current) return;
            let e = `${t}-${i.map((e) => e.trackName).join(",")}-${b}`,
                l = f.get(e);
            if (null != l) return void N(l.waveform);
            let n = g.current,
                a = !1;
            function s(t) {
                if (a) return;
                let { waveform: l, error: n } = t.data;
                null != n ? d.nx.error("Failed to load waveform:", n) : (f.set(e, { waveform: l }), N(l));
            }
            return (
                n.addEventListener("message", s),
                (async function () {
                    try {
                        let e = (0, u.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (a) return;
                        let l = [],
                            s = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let n = new Float32Array(e.getChannelData(l));
                                t.push(n), s.push(n.buffer);
                            }
                            l.push(t);
                        }
                        n.postMessage({ trackChannels: l, width: b }, s);
                    } catch (e) {
                        a || d.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (a = !0), n.removeEventListener("message", s);
                }
            );
        }, [i, t, b]),
        a.useEffect(() => {
            if (null == j.current || null == y || (b ?? 0) === 0 || (C ?? 0) === 0) return;
            let e = j.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: n } = e,
                a = l / y.length,
                i = -(a * (m.Jh.waveformBarWidth - 1));
            t.clearRect(0, 0, l, n), (t.fillStyle = E);
            for (let e = 0; e < y.length; e++) {
                let l = y[e] * n,
                    s = e * a + i;
                t.fillRect(s, n, a - i, -l);
            }
        }, [E, b, j, C, y]),
        0 === i.length)
            ? p
                ? (0, n.jsx)("div", { className: s()(h.k, v), onMouseDown: x })
                : null
            : (0, n.jsx)("div", {
                  className: s()(h.k, v),
                  children: (0, n.jsx)("canvas", {
                      className: h.s,
                      ref: j,
                      width: (b ?? 0) * 2,
                      height: (C ?? 0) * 2,
                      onMouseDown: x,
                  }),
              });
    });
