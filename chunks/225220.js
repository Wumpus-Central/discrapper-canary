r.d(
    t,
    {},
    {
        n: function (e, t) {
            try {
                return new URL(e).searchParams.get(t);
            } catch {
                return null;
            }
        },
        t: function (e, t) {
            let r = new URL(e);
            for (let [e, n] of Object.entries(t)) void 0 !== n && r.searchParams.set(e, n);
            return r.href;
        },
    },
);
