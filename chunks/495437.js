n.d(t, {
    EB: () => o,
    Je: () => l,
    cf: () => s,
    mh: () => c,
});
var r = n(570140),
    i = n(881052),
    a = n(824389);
let o = async (e) => {
        r.Z.dispatch({
            type: "GUILD_PRODUCTS_FETCH",
            guildId: e,
        });
        try {
            let t = await a.uV(e);
            r.Z.dispatch({
                type: "GUILD_PRODUCTS_FETCH_SUCCESS",
                guildId: e,
                products: t,
            });
        } catch (t) {
            r.Z.dispatch({
                type: "GUILD_PRODUCTS_FETCH_FAILURE",
                guildId: e,
            });
        }
    },
    s = async (e, t) => {
        r.Z.dispatch({
            type: "GUILD_PRODUCT_FETCH",
            productId: t,
        });
        try {
            let n = await a.p9(e, t);
            return (
                r.Z.dispatch({
                    type: "GUILD_PRODUCT_FETCH_SUCCESS",
                    product: n,
                }),
                n
            );
        } catch (e) {
            throw (
                (r.Z.dispatch({
                    type: "GUILD_PRODUCT_FETCH_FAILURE",
                    productId: t,
                    error: new i.Hx(e),
                }),
                e)
            );
        }
    };
async function l(e, t, n) {
    let i = await a.Je(e, t, n);
    return (
        r.Z.dispatch({
            type: "GUILD_PRODUCT_UPDATE",
            product: i,
        }),
        i
    );
}
async function c(e, t) {
    return (
        await a.mh(e, t),
        r.Z.dispatch({
            type: "GUILD_PRODUCT_DELETE",
            productId: t,
        }),
        !0
    );
}
