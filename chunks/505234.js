s.d(t, { A: () => i });
var n = s(627968);
s(64700);
var l = s(621466),
    a = s(442433);
let i = (e) => {
    let { facepileRef: t, goToThread: i, channel: r } = e;
    return {
        handleLeftClick: (e) => {
            ((0, l.vq)(e.target) && t.current?.contains(e.target)) || i(r, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, a.L3)(e, async () => {
                let { default: e } = await Promise.all([s.e("94989"), s.e("1798")]).then(s.bind(s, 44536));
                return (t) => (0, n.jsx)(e, { ...t, channel: r });
            }),
    };
};
