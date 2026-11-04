var e = r(620632),
    a = r(627784),
    i = r(371794),
    c = r(652215);
r.d(
    n,
    {},
    {
        Oo: async function (t, n) {
            try {
                await e.Bo.del({ url: c.Rsh.GUILD_PRODUCT_LISTINGS(t, n), rejectWithError: (0, e.fT)() });
            } catch (t) {
                throw new a.LG(t);
            }
        },
        P0: async function (t) {
            let { guildId: n, productId: r, attachmentId: i } = t;
            try {
                return (
                    await e.Bo.post({
                        url: c.Rsh.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, r, i),
                        rejectWithError: (0, e.fT)(),
                    })
                ).body;
            } catch (t) {
                throw new a.LG(t);
            }
        },
        Qm: async function (t, n, r) {
            let { priceTier: i, imageName: o, createNewRole: s, unlinkRole: l, ...h } = r;
            try {
                return (
                    await e.Bo.patch({
                        url: c.Rsh.GUILD_PRODUCT_LISTINGS(t, n),
                        body: { ...h, image_name: o, price_tier: i, create_new_role: s, unlink_role: l },
                        rejectWithError: (0, e.fT)(),
                    })
                ).body;
            } catch (t) {
                throw new a.LG(t);
            }
        },
        bq: async function (t, n) {
            try {
                return (await (0, i.aP)({ url: c.Rsh.GUILD_PRODUCT_LISTINGS(t, n), rejectWithError: (0, e.fT)() }))
                    .body;
            } catch (t) {
                throw new a.LG(t);
            }
        },
        oG: async function (t) {
            try {
                return (await (0, i.aP)({ url: c.Rsh.GUILD_PRODUCT_LISTINGS(t), rejectWithError: (0, e.fT)() })).body
                    .listings;
            } catch (t) {
                throw new a.LG(t);
            }
        },
    },
);
