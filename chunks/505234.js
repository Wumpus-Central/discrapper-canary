n.d(t, { A: () => i });
var s = n(477900);
n(582128);
var l = n(621466),
    a = n(442433);
let i = function (e) {
    let { facepileRef: t, goToThread: i, channel: r } = e;
    return {
        handleLeftClick: function (e) {
            ((0, l.vq)(e.target) && t.current?.contains(e.target)) || i(r, e.shiftKey);
        },
        handleRightClick: function (e) {
            return (0, a.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("391763"),
                    n.e("238730"),
                    n.e("691671"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("896804"),
                    n.e("21106"),
                    n.e("690434"),
                    n.e("421060"),
                    n.e("65200"),
                    n.e("285802"),
                    n.e("703869"),
                    n.e("51212"),
                    n.e("584615"),
                ]).then(n.bind(n, 612826));
                return (t) => (0, s.jsx)(e, { ...t, channel: r });
            });
        },
    };
};
