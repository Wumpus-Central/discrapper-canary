n.d(t, {
    EB: () => o,
    Je: () => a,
    cf: () => s,
    mh: () => u
});
var i = n(570140),
    r = n(881052),
    l = n(824389);
let o = async (e) => {
        i.Z.dispatch({
            type: 'GUILD_PRODUCTS_FETCH',
            guildId: e
        });
        try {
            let t = await l.uV(e);
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
    s = async (e, t) => {
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_FETCH',
            productId: t
        });
        try {
            let n = await l.p9(e, t);
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
                    error: new r.Hx(e)
                }),
                e)
            );
        }
    };
async function a(e, t, n) {
    let r = await l.Je(e, t, n);
    return (
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_UPDATE',
            product: r
        }),
        r
    );
}
async function u(e, t) {
    return (
        await l.mh(e, t),
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_DELETE',
            productId: t
        }),
        !0
    );
}
