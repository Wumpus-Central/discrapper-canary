var i = e(688954);
class n extends Error {
    status;
    constructor(t) {
        (super(`export failed (${t})`), (this.status = t));
    }
}
e.d(
    a,
    {},
    {
        c: async function (t, a) {
            let e = await (0, i.h)(t, "/agent/export", { query: { name: a } });
            if (!e.ok) throw new n(e.status);
            return await e.blob();
        },
        x: n,
    },
);
