let i;
n.d(t, { A: () => s }), n(321073), (i = n(4472).A);
let r = [],
    l = !1,
    s = {
        ...i,
        awaitOnline: () =>
            new Promise((e) => {
                if (i.isOnline()) return e();
                {
                    if ((r.push(e), l)) return;
                    l = !0;
                    let t = () => {
                        r.forEach((e) => e()), (r.length = 0), (l = !1), i.removeOnlineCallback(t);
                    };
                    i.addOnlineCallback(t);
                }
            }),
    };
