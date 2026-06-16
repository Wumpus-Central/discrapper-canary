"use strict";
n.d(t, { P0: () => o, VD: () => l, WE: () => a });
var i = n(353640),
    r = n(121894),
    s = n(652215);
let a = (0, i.v)(() => ({ currentToastMap: new Map(), queuedToastsMap: new Map() }));
function o(e) {
    let t = e.options?.appContext ?? s.BRT.APP;
    (0, r.r)(() => {
        a.setState((n) => {
            if (n.currentToastMap.has(t)) {
                let i = new Map(n.queuedToastsMap),
                    r = i.get(t) ?? [];
                return i.set(t, [...r, e]), { ...n, queuedToastsMap: i };
            }
            {
                let i = new Map(n.currentToastMap);
                return i.set(t, e), { ...n, currentToastMap: i };
            }
        });
    });
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.BRT.APP;
    (0, r.r)(() => {
        a.setState((t) => {
            if (0 === (t.queuedToastsMap.get(e) ?? []).length) {
                let n = new Map(t.currentToastMap);
                return n.delete(e), { ...t, currentToastMap: n };
            }
            let n = new Map(t.currentToastMap),
                i = new Map(t.queuedToastsMap),
                r = i.get(e) ?? [],
                s = r[0];
            return n.set(e, s), i.set(e, r.slice(1)), { ...t, currentToastMap: n, queuedToastsMap: i };
        });
    });
}
