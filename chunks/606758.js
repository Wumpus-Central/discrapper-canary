"use strict";
n.d(t, { XA: () => r, fu: () => i });
let a = (0, n(353640).v)((e) => ({ toastType: null, showToast: (t) => e({ toastType: t }) })),
    i = () => a((e) => e.toastType),
    r = (e) => {
        a.getState().showToast(e);
    };
