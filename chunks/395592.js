var l = n(582128);
let r = new Set(),
    i = new Set();
function a() {
    for (let e of i) e();
}
function s(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
n.d(
    t,
    {},
    {
        u: function (e) {
            let t = l.useCallback(() => r.has(e), [e]);
            return l.useSyncExternalStore(s, t);
        },
        x: async function (e, t) {
            if (r.has(e)) return null;
            (r.add(e), a());
            try {
                return await t();
            } finally {
                (r.delete(e), a());
            }
        },
    },
);
