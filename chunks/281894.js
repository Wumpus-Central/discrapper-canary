a.d(e, { O1: () => s });
var r = a(349812),
    n = a(617726),
    o = a(387486);
function _(t) {
    return new Promise((e, a) => {
        (t.oncomplete = t.onsuccess = () => e(t.result)), (t.onabort = t.onerror = () => a(t.error));
    });
}
function i(t) {
    return _(t.getAllKeys());
}
function c(t) {
    let e;
    function a() {
        return (
            void 0 == e &&
                (e = (function (t, e) {
                    let a = indexedDB.open(t);
                    a.onupgradeneeded = () => a.result.createObjectStore(e);
                    let r = _(a);
                    return (t) => r.then((a) => t(a.transaction(e, 'readwrite').objectStore(e)));
                })(t.dbName || 'sentry-offline', t.storeName || 'queue')),
            e
        );
    }
    return {
        push: async (e) => {
            try {
                var r, o;
                let c = await (0, n.V$)(e);
                await ((r = a()),
                (o = t.maxQueueSize || 30),
                r((t) =>
                    i(t).then((e) => {
                        if (!(e.length >= o)) return t.put(c, Math.max(...e, 0) + 1), _(t.transaction);
                    })
                ));
            } catch (t) {}
        },
        unshift: async (e) => {
            try {
                var r, o;
                let c = await (0, n.V$)(e);
                await ((r = a()),
                (o = t.maxQueueSize || 30),
                r((t) =>
                    i(t).then((e) => {
                        if (!(e.length >= o)) return t.put(c, Math.min(...e, 0) - 1), _(t.transaction);
                    })
                ));
            } catch (t) {}
        },
        shift: async () => {
            try {
                let t = await a()((t) =>
                    i(t).then((e) => {
                        let a = e[0];
                        if (null != a) return _(t.get(a)).then((e) => (t.delete(a), _(t.transaction).then(() => e)));
                    })
                );
                if (t) return (0, n.f4)(t);
            } catch (t) {}
        }
    };
}
function s(t = o.f) {
    var e;
    return (
        (e = (0, r.Pd)(t)),
        (t) =>
            e({
                ...t,
                createStore: c
            })
    );
}
