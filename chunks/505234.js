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
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("34971"),
                    n.e("3998"),
                    n.e("43266"),
                    n.e("91671"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("96804"),
                    n.e("21060"),
                    n.e("98725"),
                    n.e("40175"),
                    n.e("43746"),
                    n.e("90554"),
                    n.e("85802"),
                    n.e("65200"),
                    n.e("26250"),
                    n.e("51212"),
                    n.e("84615"),
                ]).then(n.bind(n, 612826));
                return (t) => (0, s.jsx)(e, { ...t, channel: r });
            }),
    };
};
