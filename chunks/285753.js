n.d(t, { A: () => r }), n(323874), n(14289), n(35956);
var a = n(64700),
    c = n(636537),
    i = n(676279);
function r(e) {
    let t = (0, i.TM)(),
        [n, r] = (0, a.useState)({
            celebrationEntry: void 0,
            celebrationIdle: void 0,
            activationEntry: void 0,
            activationIdle: void 0,
        }),
        [s, d] = (0, a.useState)(!1),
        l = (0, a.useRef)(!1);
    return (
        (0, a.useEffect)(() => {
            if (!e || l.current) return;
            l.current = !0;
            let n = !1;
            return (
                Promise.all([
                    c.Bo.get({
                        url: t
                            ? "https://cdn.discordapp.com/assets/content/4a769c43b3a02520a00fcb782469e485baafbd948bc051e0a2c287df639bfac8.mp4"
                            : "https://cdn.discordapp.com/assets/content/b7785d3a3260d1f754ce5979896641562ac08e5f4f28db068060399524546d5b.webm",
                        binary: !0,
                        rejectWithError: !0,
                    }),
                    c.Bo.get({
                        url: t
                            ? "https://cdn.discordapp.com/assets/content/a474630c022b1935c7aa023ab813ed6771e795cd09e104169eb5493cd97b480b.mp4"
                            : "https://cdn.discordapp.com/assets/content/66cc295163c7250e2d9e7d919a5056518253a0cc15fd6e9d8fc55cd778e89080.webm",
                        binary: !0,
                        rejectWithError: !0,
                    }),
                    c.Bo.get({
                        url: t
                            ? "https://cdn.discordapp.com/assets/content/92c8e0db0f501640be4561aad071382961b2d27697426fedd2a9c2ee066fca9c.mp4"
                            : "https://cdn.discordapp.com/assets/content/f37cc30b34f7d6391a52654ac4c2fdb569add13b5bd86e05305bd2b1fb4e7a5f.webm",
                        binary: !0,
                        rejectWithError: !0,
                    }),
                    c.Bo.get({
                        url: t
                            ? "https://cdn.discordapp.com/assets/content/4f4338e03e1b4ca4252f31224716f4f9f5bfdefc8c057c8a5e7cfabe6309c72d.mp4"
                            : "https://cdn.discordapp.com/assets/content/897d803ad89d1d4ffa07ca77381eaa42c456ce9b2365b1cea51f5c7e3bbe8e59.webm",
                        binary: !0,
                        rejectWithError: !0,
                    }),
                ]).then(
                    (e) => {
                        let [t, a, c, i] = e;
                        n ||
                            (r({
                                celebrationEntry: window.URL.createObjectURL(t.body),
                                celebrationIdle: window.URL.createObjectURL(a.body),
                                activationEntry: window.URL.createObjectURL(c.body),
                                activationIdle: window.URL.createObjectURL(i.body),
                            }),
                            d(!0));
                    },
                    () => {
                        n || (l.current = !1);
                    },
                ),
                () => {
                    (n = !0), (l.current = !1);
                }
            );
        }, [e, t]),
        (0, a.useEffect)(
            () => () => {
                null != n.celebrationEntry && window.URL.revokeObjectURL(n.celebrationEntry),
                    null != n.celebrationIdle && window.URL.revokeObjectURL(n.celebrationIdle),
                    null != n.activationEntry && window.URL.revokeObjectURL(n.activationEntry),
                    null != n.activationIdle && window.URL.revokeObjectURL(n.activationIdle);
            },
            [n.celebrationEntry, n.celebrationIdle, n.activationEntry, n.activationIdle],
        ),
        { mediaUrls: n, isSuccess: s }
    );
}
