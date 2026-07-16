n.d(e, { Oo: () => s, P0: () => u, Qm: () => o, bq: () => h, oG: () => l });
var r = n(636537),
    a = n(913122),
    i = n(371794),
    c = n(652215);
async function o(t, e, n) {
    let { priceTier: i, imageName: o, createNewRole: s, unlinkRole: l, ...h } = n;
    try {
        return (
            await r.Bo.patch({
                url: c.Rsh.GUILD_PRODUCT_LISTINGS(t, e),
                body: { ...h, image_name: o, price_tier: i, create_new_role: s, unlink_role: l },
                rejectWithError: (0, r.fT)(),
            })
        ).body;
    } catch (t) {
        throw new a.LG(t);
    }
}
async function s(t, e) {
    try {
        await r.Bo.del({ url: c.Rsh.GUILD_PRODUCT_LISTINGS(t, e), rejectWithError: (0, r.fT)() });
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
async function h(t, e) {
    try {
        return (await (0, i.aP)({ url: c.Rsh.GUILD_PRODUCT_LISTINGS(t, e), rejectWithError: (0, r.fT)() })).body;
    } catch (t) {
        throw new a.LG(t);
    }
}
async function u(t) {
    let { guildId: e, productId: n, attachmentId: i } = t;
    try {
        return (
            await r.Bo.post({ url: c.Rsh.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, n, i), rejectWithError: (0, r.fT)() })
        ).body;
    } catch (t) {
        throw new a.LG(t);
    }
}
