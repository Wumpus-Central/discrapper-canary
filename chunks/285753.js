t.d(e, { A: () => s }), t(323874), t(14289), t(35956);
var l = t(582128),
    n = t(636537),
    r = t(676279);
function s(a) {
    let e = (0, r.TM)(),
        [t, s] = (0, l.useState)({
            celebrationEntry: void 0,
            celebrationIdle: void 0,
            activationEntry: void 0,
            activationIdle: void 0,
        }),
        [i, c] = (0, l.useState)(!1),
        o = (0, l.useRef)(!1);
    return (
        (0, l.useEffect)(() => {
            if (!a || o.current) return;
            o.current = !0;
            let t = !1;
            return (
                Promise.all([
                    n.Bo.get({
                        url: e
                            ? "https://cdn.discordapp.com/assets/content/4a769c43b3a02520a00fcb782469e485baafbd948bc051e0a2c287df639bfac8.mp4"
                            : "https://cdn.discordapp.com/assets/content/b7785d3a3260d1f754ce5979896641562ac08e5f4f28db068060399524546d5b.webm",
                        binary: !0,
                        rejectWithError: !0,
                    }),
                    n.Bo.get({
                        url: e
                            ? "https://cdn.discordapp.com/assets/content/a474630c022b1935c7aa023ab813ed6771e795cd09e104169eb5493cd97b480b.mp4"
                            : "https://cdn.discordapp.com/assets/content/66cc295163c7250e2d9e7d919a5056518253a0cc15fd6e9d8fc55cd778e89080.webm",
                        binary: !0,
                        rejectWithError: !0,
                    }),
                    n.Bo.get({
                        url: e
                            ? "https://cdn.discordapp.com/assets/content/92c8e0db0f501640be4561aad071382961b2d27697426fedd2a9c2ee066fca9c.mp4"
                            : "https://cdn.discordapp.com/assets/content/f37cc30b34f7d6391a52654ac4c2fdb569add13b5bd86e05305bd2b1fb4e7a5f.webm",
                        binary: !0,
                        rejectWithError: !0,
                    }),
                    n.Bo.get({
                        url: e
                            ? "https://cdn.discordapp.com/assets/content/4f4338e03e1b4ca4252f31224716f4f9f5bfdefc8c057c8a5e7cfabe6309c72d.mp4"
                            : "https://cdn.discordapp.com/assets/content/897d803ad89d1d4ffa07ca77381eaa42c456ce9b2365b1cea51f5c7e3bbe8e59.webm",
                        binary: !0,
                        rejectWithError: !0,
                    }),
                ]).then(
                    (a) => {
                        let [e, l, n, r] = a;
                        t ||
                            (s({
                                celebrationEntry: window.URL.createObjectURL(e.body),
                                celebrationIdle: window.URL.createObjectURL(l.body),
                                activationEntry: window.URL.createObjectURL(n.body),
                                activationIdle: window.URL.createObjectURL(r.body),
                            }),
                            c(!0));
                    },
                    () => {
                        t || (o.current = !1);
                    },
                ),
                () => {
                    (t = !0), (o.current = !1);
                }
            );
        }, [a, e]),
        (0, l.useEffect)(
            () => () => {
                null != t.celebrationEntry && window.URL.revokeObjectURL(t.celebrationEntry),
                    null != t.celebrationIdle && window.URL.revokeObjectURL(t.celebrationIdle),
                    null != t.activationEntry && window.URL.revokeObjectURL(t.activationEntry),
                    null != t.activationIdle && window.URL.revokeObjectURL(t.activationIdle);
            },
            [t.celebrationEntry, t.celebrationIdle, t.activationEntry, t.activationIdle],
        ),
        { mediaUrls: t, isSuccess: i }
    );
}
