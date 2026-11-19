let n = (0, r(196765).v)((t) => ({ toastType: null, showToast: (e) => t({ toastType: e }) }));
r.d(
    e,
    {},
    {
        XA: function (t) {
            n.getState().showToast(t);
        },
        fu: function () {
            return n((t) => t.toastType);
        },
    },
);
