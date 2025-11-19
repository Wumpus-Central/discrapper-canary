_.d(e, { O1: () => c });
var a = _(349812),
    r = _(617726),
    n = _(387486);
function o(t) {
    return new Promise((e, _) => {
        (t.oncomplete = t.onsuccess = () => e(t.result)), (t.onabort = t.onerror = () => _(t.error));
    });
}
function E(t) {
    return o(t.getAllKeys());
}
function i(t) {
    let e;
    function _() {
        return (
            void 0 == e &&
                (e = (function (t, e) {
                    let _ = indexedDB.open(t);
                    _.onupgradeneeded = () => _.result.createObjectStore(e);
                    let a = o(_);
                    return (t) => a.then((_) => t(_.transaction(e, "readwrite").objectStore(e)));
                })(t.dbName || "sentry-offline", t.storeName || "queue")),
            e
        );
    }
    return {
        push: async (e) => {
            try {
                var a, n;
                let i = await (0, r.V$)(e);
                await ((a = _()),
                (n = t.maxQueueSize || 30),
                a((t) =>
                    E(t).then((e) => {
                        if (!(e.length >= n)) return t.put(i, Math.max(...e, 0) + 1), o(t.transaction);
                    }),
                ));
            } catch (t) {}
        },
        unshift: async (e) => {
            try {
                var a, n;
                let i = await (0, r.V$)(e);
                await ((a = _()),
                (n = t.maxQueueSize || 30),
                a((t) =>
                    E(t).then((e) => {
                        if (!(e.length >= n)) return t.put(i, Math.min(...e, 0) - 1), o(t.transaction);
                    }),
                ));
            } catch (t) {}
        },
        shift: async () => {
            try {
                let t = await _()((t) =>
                    E(t).then((e) => {
                        let _ = e[0];
                        if (null != _) return o(t.get(_)).then((e) => (t.delete(_), o(t.transaction).then(() => e)));
                    }),
                );
                if (t) return (0, r.f4)(t);
            } catch (t) {}
        },
    };
}
function c(t = n.f) {
    var e;
    return (
        (e = (0, a.Pd)(t)),
        (t) =>
            e({
                ...t,
                createStore: i,
            })
    );
}
