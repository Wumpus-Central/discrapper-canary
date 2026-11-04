var i = a(688954);
class n extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
a.d(
    t,
    {},
    {
        c: async function (e, t) {
            let a = await (0, i.h)(e, "/agent/export", { query: { name: t } });
            if (!a.ok) throw new n(a.status);
            return await a.blob();
        },
        x: n,
    },
);
