"use strict";
n.d(t, { XA: () => i, fu: () => r });
let a = (0, n(353640).v)((e) => ({ toastType: null, showToast: (t) => e({ toastType: t }) })),
    r = () => a((e) => e.toastType),
    i = (e) => {
        a.getState().showToast(e);
    };
