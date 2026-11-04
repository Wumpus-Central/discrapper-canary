var d = e(196765),
    i = e(121894);
let o = (0, d.v)((n) => ({ inDndMode: !1 }));
e.d(
    t,
    {},
    {
        VU: function () {
            return o((n) => n.inDndMode);
        },
        ef: function (n) {
            (0, i.r)(() => o.setState({ inDndMode: n }));
        },
        ny: function () {
            return o.getState().inDndMode;
        },
    },
);
