"use strict";
let i;
n.d(t, { A: () => a }), n(321073), (i = n(4472).A);
let r = [],
    s = !1,
    a = {
        ...i,
        awaitOnline: () =>
            new Promise((e) => {
                if (i.isOnline()) return e();
                {
                    if ((r.push(e), s)) return;
                    s = !0;
                    let t = () => {
                        r.forEach((e) => e()), (r.length = 0), (s = !1), i.removeOnlineCallback(t);
                    };
                    i.addOnlineCallback(t);
                }
            }),
    };
