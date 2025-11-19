n.d(t, { Z: () => f }),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(415506),
    n(17294),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(539854);
var l = n(54381),
    a = n(473749),
    i = n(120356),
    r = n.n(i),
    s = n(692547),
    o = n(481060),
    u = n(393238),
    c = n(304809),
    d = n(356659),
    m = n(943351),
    h = n(442242);
let p = new Map(),
    f = a.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: f, className: v } = e,
            g = a.useRef(null),
            { ref: b, width: j, height: x } = (0, u.ZP)(),
            [y, C] = a.useState(null),
            k = (0, o.dQu)(s.Z.colors.BACKGROUND_MOD_STRONG).hex();
        return (a.useEffect(
            () => (
                (g.current = new Worker(new URL("/assets/" + n.u("1088"), n.b))),
                () => {
                    var e;
                    null == (e = g.current) || e.terminate();
                }
            ),
            [],
        ),
        a.useEffect(() => {
            if (0 === j || 0 === i.length || null == g.current) return;
            let e = ""
                    .concat(t, "-")
                    .concat(i.map((e) => e.trackName).join(","), "-")
                    .concat(j),
                n = p.get(e);
            if (null != n) return void C(n.waveform);
            let l = g.current,
                a = !1,
                r = (t) => {
                    if (a) return;
                    let { waveform: n, error: l } = t.data;
                    if (null != l) return void d.jF.error("Failed to load waveform:", l);
                    p.set(e, { waveform: n }), C(n);
                };
            return (
                l.addEventListener("message", r),
                (async () => {
                    try {
                        let e = (0, c.N)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (a) return;
                        let n = [],
                            r = [];
                        for (let e of t) {
                            let t = [];
                            for (let n = 0; n < e.numberOfChannels; n++) {
                                let l = new Float32Array(e.getChannelData(n));
                                t.push(l), r.push(l.buffer);
                            }
                            n.push(t);
                        }
                        if (a) return;
                        l.postMessage(
                            {
                                trackChannels: n,
                                width: j,
                            },
                            r,
                        );
                    } catch (e) {
                        a || d.jF.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    (a = !0), l.removeEventListener("message", r);
                }
            );
        }, [i, t, j]),
        a.useEffect(() => {
            if (null == b.current || null == y || (null != j ? j : 0) === 0 || (null != x ? x : 0) === 0) return;
            let e = b.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: n, height: l } = e,
                a = n / y.length,
                i = -(a * (m.nl.waveformBarWidth - 1));
            t.clearRect(0, 0, n, l), (t.fillStyle = k);
            for (let e = 0; e < y.length; e++) {
                let n = y[e] * l,
                    r = e * a + i;
                t.fillRect(r, l, a - i, -n);
            }
        }, [k, j, b, x, y]),
        0 === i.length)
            ? null
            : (0, l.jsx)("div", {
                  className: r()(h.container, v),
                  children: (0, l.jsx)("canvas", {
                      className: h.waveformCanvas,
                      ref: b,
                      width: (null != j ? j : 0) * 2,
                      height: (null != x ? x : 0) * 2,
                      onMouseDown: f,
                  }),
              });
    });
