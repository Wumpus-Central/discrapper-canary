n.d(t, { O1: () => c });
var r = n(698664),
    i = n(690889),
    a = n(235387);
function o(e) {
    return new Promise((t, n) => {
        (e.oncomplete = e.onsuccess = () => t(e.result)), (e.onabort = e.onerror = () => n(e.error));
    });
}
function _(e) {
    return o(e.getAllKeys());
}
function s(e) {
    let t;
    function n() {
        return (
            void 0 == t &&
                (t = (function (e, t) {
                    let n = indexedDB.open(e);
                    n.onupgradeneeded = () => n.result.createObjectStore(t);
                    let r = o(n);
                    return (e) => r.then((n) => e(n.transaction(t, "readwrite").objectStore(t)));
                })(e.dbName || "sentry-offline", e.storeName || "queue")),
            t
        );
    }
    return {
        push: async (t) => {
            try {
                var r, a;
                let s = await (0, i.V$)(t);
                await ((r = n()),
                (a = e.maxQueueSize || 30),
                r((e) =>
                    _(e).then((t) => {
                        if (!(t.length >= a)) return e.put(s, Math.max(...t, 0) + 1), o(e.transaction);
                    }),
                ));
            } catch (e) {}
        },
        unshift: async (t) => {
            try {
                var r, a;
                let s = await (0, i.V$)(t);
                await ((r = n()),
                (a = e.maxQueueSize || 30),
                r((e) =>
                    _(e).then((t) => {
                        if (!(t.length >= a)) return e.put(s, Math.min(...t, 0) - 1), o(e.transaction);
                    }),
                ));
            } catch (e) {}
        },
        shift: async () => {
            try {
                let e = await n()((e) =>
                    _(e).then((t) => {
                        let n = t[0];
                        if (null != n) return o(e.get(n)).then((t) => (e.delete(n), o(e.transaction).then(() => t)));
                    }),
                );
                if (e) return (0, i.f4)(e);
            } catch (e) {}
        },
    };
}
function c(e = a.f) {
    var t;
    return (
        (t = (0, r.Pd)(e)),
        (e) =>
            t({
                ...e,
                createStore: s,
            })
    );
}
