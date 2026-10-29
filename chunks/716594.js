i.d(e, { c: () => r, x: () => n });
var a = i(688954);
class n extends Error {
    status;
    constructor(t) {
        (super(`export failed (${t})`), (this.status = t));
    }
}
async function r(t, e) {
    let i = await (0, a.h)(t, "/agent/export", { query: { name: e } });
    if (!i.ok) throw new n(i.status);
    return await i.blob();
}
