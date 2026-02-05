"use strict";
let r;
n.d(t, { A: () => s }), n(321073), (r = n(4472).A);
let i = [],
    a = !1,
    s = {
        ...r,
        awaitOnline: () =>
            new Promise((e) => {
                if (r.isOnline()) return e();
                {
                    if ((i.push(e), a)) return;
                    a = !0;
                    let t = () => {
                        i.forEach((e) => e()), (i.length = 0), (a = !1), r.removeOnlineCallback(t);
                    };
                    r.addOnlineCallback(t);
                }
            }),
    };
