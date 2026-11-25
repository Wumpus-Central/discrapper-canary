var l = n(582128);
let r = new Set(),
    a = new Set();
function i() {
    for (let e of a) e();
}
function s(e) {
    return (
        a.add(e),
        () => {
            a.delete(e);
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
            (r.add(e), i());
            try {
                return await t();
            } finally {
                (r.delete(e), i());
            }
        },
    },
);
