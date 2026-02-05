n.d(t, { A: () => a, x: () => l });
let i = (0, n(839214).D)(() => ({ channelDrafts: {} }));
function l(e, t) {
    i.setState((n) => {
        let i = n.channelDrafts[e];
        return {
            channelDrafts: {
                ...n.channelDrafts,
                [e]: { heroFile: null, title: "", publish: !0, createThread: !0, ...i, ...t },
            },
        };
    });
}
let a = i;
