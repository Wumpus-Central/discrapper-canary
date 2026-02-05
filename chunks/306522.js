n.d(t, { Oo: () => o, P0: () => u, Qm: () => s, bq: () => c, oG: () => d });
var i = n(562465),
    l = n(198982),
    a = n(371794),
    r = n(652215);
let s = async (e, t, n) => {
        let { priceTier: a, imageName: s, createNewRole: o, unlinkRole: d, ...c } = n;
        try {
            return (
                await i.Bo.patch({
                    url: r.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
                    body: { ...c, image_name: s, price_tier: a, create_new_role: o, unlink_role: d },
                    rejectWithError: !1,
                })
            ).body;
        } catch (e) {
            throw new l.LG(e);
        }
    },
    o = async (e, t) => {
        try {
            await i.Bo.del({ url: r.Rsh.GUILD_PRODUCT_LISTINGS(e, t), rejectWithError: !1 });
        } catch (e) {
            throw new l.LG(e);
        }
    },
    d = async (e) => {
        try {
            return (await (0, a.aP)({ url: r.Rsh.GUILD_PRODUCT_LISTINGS(e), rejectWithError: !1 })).body.listings;
        } catch (e) {
            throw new l.LG(e);
        }
    },
    c = async (e, t) => {
        try {
            return (await (0, a.aP)({ url: r.Rsh.GUILD_PRODUCT_LISTINGS(e, t), rejectWithError: !1 })).body;
        } catch (e) {
            throw new l.LG(e);
        }
    },
    u = async (e) => {
        let { guildId: t, productId: n, attachmentId: a } = e;
        try {
            return (await i.Bo.post({ url: r.Rsh.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, a), rejectWithError: !1 }))
                .body;
        } catch (e) {
            throw new l.LG(e);
        }
    };
