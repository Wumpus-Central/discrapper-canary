"use strict";
n.d(t, { P0: () => o, VD: () => l, WE: () => s });
var r = n(353640),
    i = n(121894),
    a = n(652215);
let s = (0, r.v)(() => ({ currentToastMap: new Map(), queuedToastsMap: new Map() }));
function o(e) {
    let t = e.options?.appContext ?? a.BRT.APP;
    (0, i.r)(() => {
        s.setState((n) => {
            if (n.currentToastMap.has(t)) {
                let r = new Map(n.queuedToastsMap),
                    i = r.get(t) ?? [];
                return r.set(t, [...i, e]), { ...n, queuedToastsMap: r };
            }
            {
                let r = new Map(n.currentToastMap);
                return r.set(t, e), { ...n, currentToastMap: r };
            }
        });
    });
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.BRT.APP;
    (0, i.r)(() => {
        s.setState((t) => {
            if (0 === (t.queuedToastsMap.get(e) ?? []).length) {
                let n = new Map(t.currentToastMap);
                return n.delete(e), { ...t, currentToastMap: n };
            }
            let n = new Map(t.currentToastMap),
                r = new Map(t.queuedToastsMap),
                i = r.get(e) ?? [],
                a = i[0];
            return n.set(e, a), r.set(e, i.slice(1)), { ...t, currentToastMap: n, queuedToastsMap: r };
        });
    });
}
