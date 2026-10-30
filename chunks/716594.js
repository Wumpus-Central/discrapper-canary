a.d(t, { c: () => r, x: () => i });
var n = a(688954);
class i extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function r(e, t) {
    let a = await (0, n.h)(e, "/agent/export", { query: { name: t } });
    if (!a.ok) throw new i(a.status);
    return await a.blob();
}
