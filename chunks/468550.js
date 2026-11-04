let i = (0, n(196765).v)(() => ({ isOpen: !1, openedAt: null, applicationId: null }));
n.d(
    t,
    {},
    {
        M8: function (e) {
            i.setState({ isOpen: !0, openedAt: Date.now(), applicationId: e });
        },
        kF: function () {
            i.setState({ isOpen: !1, openedAt: null, applicationId: null });
        },
        sY: i,
    },
);
