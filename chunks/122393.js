let r = new Map();
n.d(
    t,
    {},
    {
        L: function (e) {
            for (let t of [...(r.get(e) ?? [])]) t();
        },
        v: function (e, t) {
            let n = () => {};
            return {
                published: new Promise((s) => {
                    let i = r.get(e) ?? new Set();
                    r.set(e, i);
                    let o = setTimeout(() => n(!1), t);
                    function l() {
                        n(!0);
                    }
                    ((n = (t) => {
                        (clearTimeout(o), i.delete(l), 0 === i.size && r.get(e) === i && r.delete(e), s(t));
                    }),
                        i.add(l));
                }),
                cancel: () => n(!1),
            };
        },
    },
);
