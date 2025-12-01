r.d(t, { O1: () => c });
var n = r(349812),
    a = r(617726),
    i = r(387486);
function o(e) {
    return new Promise((t, r) => {
        (e.oncomplete = e.onsuccess = () => t(e.result)), (e.onabort = e.onerror = () => r(e.error));
    });
}
function _(e) {
    return o(e.getAllKeys());
}
function s(e) {
    let t;
    function r() {
        return (
            void 0 == t &&
                (t = (function (e, t) {
                    let r = indexedDB.open(e);
                    r.onupgradeneeded = () => r.result.createObjectStore(t);
                    let n = o(r);
                    return (e) => n.then((r) => e(r.transaction(t, "readwrite").objectStore(t)));
                })(e.dbName || "sentry-offline", e.storeName || "queue")),
            t
        );
    }
    return {
        push: async (t) => {
            try {
                var n, i;
                let s = await (0, a.V$)(t);
                await ((n = r()),
                (i = e.maxQueueSize || 30),
                n((e) =>
                    _(e).then((t) => {
                        if (!(t.length >= i)) return e.put(s, Math.max(...t, 0) + 1), o(e.transaction);
                    }),
                ));
            } catch (e) {}
        },
        unshift: async (t) => {
            try {
                var n, i;
                let s = await (0, a.V$)(t);
                await ((n = r()),
                (i = e.maxQueueSize || 30),
                n((e) =>
                    _(e).then((t) => {
                        if (!(t.length >= i)) return e.put(s, Math.min(...t, 0) - 1), o(e.transaction);
                    }),
                ));
            } catch (e) {}
        },
        shift: async () => {
            try {
                let e = await r()((e) =>
                    _(e).then((t) => {
                        let r = t[0];
                        if (null != r) return o(e.get(r)).then((t) => (e.delete(r), o(e.transaction).then(() => t)));
                    }),
                );
                if (e) return (0, a.f4)(e);
            } catch (e) {}
        },
    };
}
function c(e = i.f) {
    var t;
    return (
        (t = (0, n.Pd)(e)),
        (e) =>
            t({
                ...e,
                createStore: s,
            })
    );
}
