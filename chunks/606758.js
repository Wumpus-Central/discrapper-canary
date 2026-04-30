"use strict";
n.d(t, { XA: () => s, fu: () => r });
let i = (0, n(353640).v)((e) => ({ toastType: null, showToast: (t) => e({ toastType: t }) })),
    r = () => i((e) => e.toastType),
    s = (e) => {
        i.getState().showToast(e);
    };
