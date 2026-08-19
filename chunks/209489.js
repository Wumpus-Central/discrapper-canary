"use strict";
let i;
n.d(t, { A: () => s }), n(321073), (i = n(4472).A);
let r = [],
    a = !1,
    s = {
        ...i,
        awaitOnline: () =>
            new Promise((e) => {
                if (i.isOnline()) return e();
                r.push(e),
                    a ||
                        ((a = !0),
                        i.addOnlineCallback(function e() {
                            r.forEach((e) => e()), (r.length = 0), (a = !1), i.removeOnlineCallback(e);
                        }));
            }),
    };
