n(321073);
var i = n(229977),
    r = n(121894);
let a = 1,
    s = (0, i.v)(() => ({ currentToastMap: new Map(), queuedToastsMap: new Map() }));
n.d(
    t,
    {},
    {
        P0: function (e) {
            let t = e?.surface ?? "app",
                n = { toast: e, key: a++ };
            (0, r.r)(() => {
                s.setState((i) => {
                    let r = i.currentToastMap.get(t);
                    if (null == r || (null != e.toastKey && r.toast.toastKey === e.toastKey)) {
                        let e = new Map(i.currentToastMap);
                        return (e.set(t, n), { ...i, currentToastMap: e });
                    }
                    let a = new Map(i.queuedToastsMap),
                        s = [...(a.get(t) ?? [])],
                        l = null != e.toastKey ? s.findIndex((t) => t.toast.toastKey === e.toastKey) : -1;
                    return (-1 === l ? s.push(n) : (s[l] = n), a.set(t, s), { ...i, queuedToastsMap: a });
                });
            });
        },
        VD: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "app";
            (0, r.r)(() => {
                s.setState((t) => {
                    if (0 === (t.queuedToastsMap.get(e) ?? []).length) {
                        let n = new Map(t.currentToastMap);
                        return (n.delete(e), { ...t, currentToastMap: n });
                    }
                    let n = new Map(t.currentToastMap),
                        i = new Map(t.queuedToastsMap),
                        r = i.get(e) ?? [],
                        a = r[0];
                    return (n.set(e, a), i.set(e, r.slice(1)), { ...t, currentToastMap: n, queuedToastsMap: i });
                });
            });
        },
        WE: s,
    },
);
