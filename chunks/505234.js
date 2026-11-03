t.d(n, { A: () => a });
var s = t(477900);
t(582128);
var l = t(621466),
    i = t(442433);
let a = function (e) {
    let { facepileRef: n, goToThread: a, channel: r } = e;
    return {
        handleLeftClick: function (e) {
            ((0, l.vq)(e.target) && n.current?.contains(e.target)) || a(r, e.shiftKey);
        },
        handleRightClick: function (e) {
            return (0, i.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("926132"),
                    t.e("393336"),
                    t.e("391763"),
                    t.e("955557"),
                    t.e("638221"),
                    t.e("591951"),
                    t.e("947502"),
                    t.e("603998"),
                    t.e("343266"),
                    t.e("965789"),
                    t.e("691671"),
                    t.e("412255"),
                    t.e("63340"),
                    t.e("896804"),
                    t.e("275289"),
                    t.e("421060"),
                    t.e("697367"),
                    t.e("703869"),
                    t.e("51212"),
                    t.e("584615"),
                ]).then(t.bind(t, 612826));
                return (n) => (0, s.jsx)(e, { ...n, channel: r });
            });
        },
    };
};
