let i;
r.d(t, { A: () => a }), r(321073), (i = r(4472).A);
let n = [],
    s = !1,
    a = {
        ...i,
        awaitOnline: () =>
            new Promise((e) => {
                if (i.isOnline()) return e();
                {
                    if ((n.push(e), s)) return;
                    s = !0;
                    let t = () => {
                        n.forEach((e) => e()), (n.length = 0), (s = !1), i.removeOnlineCallback(t);
                    };
                    i.addOnlineCallback(t);
                }
            }),
    };
