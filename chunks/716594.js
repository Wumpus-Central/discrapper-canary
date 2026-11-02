a.d(e, { c: () => r, x: () => n });
var i = a(688954);
class n extends Error {
    status;
    constructor(t) {
        (super(`export failed (${t})`), (this.status = t));
    }
}
async function r(t, e) {
    let a = await (0, i.h)(t, "/agent/export", { query: { name: e } });
    if (!a.ok) throw new n(a.status);
    return await a.blob();
}
