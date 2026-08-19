e.d(n, { Oo: () => s, P0: () => u, Qm: () => o, bq: () => h, oG: () => l });
var r = e(636537),
    a = e(913122),
    i = e(371794),
    c = e(652215);
async function o(t, n, e) {
    let { priceTier: i, imageName: o, createNewRole: s, unlinkRole: l, ...h } = e;
    try {
        return (
            await r.Bo.patch({
                url: c.Rsh.GUILD_PRODUCT_LISTINGS(t, n),
                body: { ...h, image_name: o, price_tier: i, create_new_role: s, unlink_role: l },
                rejectWithError: (0, r.fT)(),
            })
        ).body;
    } catch (t) {
        throw new a.LG(t);
    }
}
async function s(t, n) {
    try {
        await r.Bo.del({ url: c.Rsh.GUILD_PRODUCT_LISTINGS(t, n), rejectWithError: (0, r.fT)() });
    } catch (t) {
        throw new a.LG(t);
    }
}
async function l(t) {
    try {
        return (await (0, i.aP)({ url: c.Rsh.GUILD_PRODUCT_LISTINGS(t), rejectWithError: (0, r.fT)() })).body.listings;
    } catch (t) {
        throw new a.LG(t);
    }
}
async function h(t, n) {
    try {
        return (await (0, i.aP)({ url: c.Rsh.GUILD_PRODUCT_LISTINGS(t, n), rejectWithError: (0, r.fT)() })).body;
    } catch (t) {
        throw new a.LG(t);
    }
}
async function u(t) {
    let { guildId: n, productId: e, attachmentId: i } = t;
    try {
        return (
            await r.Bo.post({ url: c.Rsh.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, e, i), rejectWithError: (0, r.fT)() })
        ).body;
    } catch (t) {
        throw new a.LG(t);
    }
}
