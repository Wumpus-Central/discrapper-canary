n.d(t, { P0: () => l, VD: () => o, WE: () => s });
var i = n(888633),
    r = n(121894);
let a = 1,
    s = (0, i.v)(() => ({ currentToastMap: new Map(), queuedToastsMap: new Map() }));
function l(e) {
    let t = e?.surface ?? "app",
        n = { toast: e, key: a++ };
    (0, r.r)(() => {
        s.setState((e) => {
            if (e.currentToastMap.has(t)) {
                let i = new Map(e.queuedToastsMap),
                    r = i.get(t) ?? [];
                return (i.set(t, [...r, n]), { ...e, queuedToastsMap: i });
            }
            {
                let i = new Map(e.currentToastMap);
                return (i.set(t, n), { ...e, currentToastMap: i });
            }
        });
    });
}
function o() {
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
}
