let i = (0, n(196765).v)(() => ({ isApplying: !1 }));
n.d(
    t,
    {},
    {
        Rj: function (e) {
            i.setState({ isApplying: e });
        },
        i: function () {
            return i((e) => e.isApplying);
        },
        rs: function () {
            return i.getState().isApplying;
        },
    },
);
