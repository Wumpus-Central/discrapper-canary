n.d(e, {
    EB: function () {
        return o;
    },
    Je: function () {
        return a;
    },
    cf: function () {
        return u;
    },
    mh: function () {
        return s;
    }
});
var i = n(570140),
    r = n(881052),
    l = n(824389);
let o = async (t) => {
        i.Z.dispatch({
            type: 'GUILD_PRODUCTS_FETCH',
            guildId: t
        });
        try {
            let e = await l.uV(t);
            i.Z.dispatch({
                type: 'GUILD_PRODUCTS_FETCH_SUCCESS',
                guildId: t,
                products: e
            });
        } catch (e) {
            i.Z.dispatch({
                type: 'GUILD_PRODUCTS_FETCH_FAILURE',
                guildId: t
            });
        }
    },
    u = async (t, e) => {
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_FETCH',
            productId: e
        });
        try {
            let n = await l.p9(t, e);
            return (
                i.Z.dispatch({
                    type: 'GUILD_PRODUCT_FETCH_SUCCESS',
                    product: n
                }),
                n
            );
        } catch (t) {
            throw (
                (i.Z.dispatch({
                    type: 'GUILD_PRODUCT_FETCH_FAILURE',
                    productId: e,
                    error: new r.Hx(t)
                }),
                t)
            );
        }
    };
async function a(t, e, n) {
    let r = await l.Je(t, e, n);
    return (
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_UPDATE',
            product: r
        }),
        r
    );
}
async function s(t, e) {
    return (
        await l.mh(t, e),
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_DELETE',
            productId: e
        }),
        !0
    );
}
