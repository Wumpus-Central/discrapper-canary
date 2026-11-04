let a = (0, o(196765).v)((t) => ({ toastType: null, showToast: (s) => t({ toastType: s }) }));
o.d(
    s,
    {},
    {
        XA: function (t) {
            a.getState().showToast(t);
        },
        fu: function () {
            return a((t) => t.toastType);
        },
    },
);
