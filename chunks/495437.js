n.d(t, {
    EB: () => s,
    Je: () => o,
    cf: () => a,
    mh: () => d
});
var i = n(570140),
    l = n(881052),
    r = n(824389);
let s = async (e) => {
        i.Z.dispatch({
            type: 'GUILD_PRODUCTS_FETCH',
            guildId: e
        });
        try {
            let t = await r.uV(e);
            i.Z.dispatch({
                type: 'GUILD_PRODUCTS_FETCH_SUCCESS',
                guildId: e,
                products: t
            });
        } catch (t) {
            i.Z.dispatch({
                type: 'GUILD_PRODUCTS_FETCH_FAILURE',
                guildId: e
            });
        }
    },
    a = async (e, t) => {
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_FETCH',
            productId: t
        });
        try {
            let n = await r.p9(e, t);
            return (
                i.Z.dispatch({
                    type: 'GUILD_PRODUCT_FETCH_SUCCESS',
                    product: n
                }),
                n
            );
        } catch (e) {
            throw (
                (i.Z.dispatch({
                    type: 'GUILD_PRODUCT_FETCH_FAILURE',
                    productId: t,
                    error: new l.Hx(e)
                }),
                e)
            );
        }
    };
async function o(e, t, n) {
    let l = await r.Je(e, t, n);
    return (
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_UPDATE',
            product: l
        }),
        l
    );
}
async function d(e, t) {
    return (
        await r.mh(e, t),
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_DELETE',
            productId: t
        }),
        !0
    );
}
