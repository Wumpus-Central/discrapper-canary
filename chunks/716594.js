a.d(t, { c: () => r, x: () => n });
var i = a(688954);
class n extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function r(e, t) {
    let a = await (0, i.h)(e, "/agent/export", { query: { name: t } });
    if (!a.ok) throw new n(a.status);
    return await a.blob();
}
