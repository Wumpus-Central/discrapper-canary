n.d(t, { A: () => i });
var s = n(627968);
n(64700);
var l = n(621466),
    a = n(442433);
let i = (e) => {
    let { facepileRef: t, goToThread: i, channel: r } = e;
    return {
        handleLeftClick: (e) => {
            ((0, l.vq)(e.target) && t.current?.contains(e.target)) || i(r, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, a.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("2271"), n.e("94989"), n.e("22600")]).then(
                    n.bind(n, 44536),
                );
                return (t) => (0, s.jsx)(e, { ...t, channel: r });
            }),
    };
};
