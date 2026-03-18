"use strict";
n.d(t, { XA: () => s, fu: () => i });
let r = (0, n(353640).v)((e) => ({ toastType: null, showToast: (t) => e({ toastType: t }) })),
    i = () => r((e) => e.toastType),
    s = (e) => {
        r.getState().showToast(e);
    };
