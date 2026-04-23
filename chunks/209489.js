"use strict";
let r;
n.d(t, { A: () => a }), n(321073), (r = n(4472).A);
let i = [],
    s = !1,
    a = {
        ...r,
        awaitOnline: () =>
            new Promise((e) => {
                if (r.isOnline()) return e();
                {
                    if ((i.push(e), s)) return;
                    s = !0;
                    let t = () => {
                        i.forEach((e) => e()), (i.length = 0), (s = !1), r.removeOnlineCallback(t);
                    };
                    r.addOnlineCallback(t);
                }
            }),
    };
