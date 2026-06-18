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
                r.push(e),
                    s ||
                        ((s = !0),
                        i.addOnlineCallback(function e() {
                            r.forEach((e) => e()), (r.length = 0), (s = !1), i.removeOnlineCallback(e);
                        }));
            }),
    };
