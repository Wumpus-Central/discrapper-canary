e.d(n, {
    EB: function () {
        return u;
    },
    Je: function () {
        return a;
    },
    cf: function () {
        return o;
    },
    mh: function () {
        return s;
    }
});
var i = e(570140),
    r = e(881052),
    l = e(824389);
let u = async (t) => {
        i.Z.dispatch({
            type: 'GUILD_PRODUCTS_FETCH',
            guildId: t
        });
        try {
            let n = await l.uV(t);
            i.Z.dispatch({
                type: 'GUILD_PRODUCTS_FETCH_SUCCESS',
                guildId: t,
                products: n
            });
        } catch (n) {
            i.Z.dispatch({
                type: 'GUILD_PRODUCTS_FETCH_FAILURE',
                guildId: t
            });
        }
    },
    o = async (t, n) => {
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_FETCH',
            productId: n
        });
        try {
            let e = await l.p9(t, n);
            return (
                i.Z.dispatch({
                    type: 'GUILD_PRODUCT_FETCH_SUCCESS',
                    product: e
                }),
                e
            );
        } catch (t) {
            throw (
                (i.Z.dispatch({
                    type: 'GUILD_PRODUCT_FETCH_FAILURE',
                    productId: n,
                    error: new r.Hx(t)
                }),
                t)
            );
        }
    };
async function a(t, n, e) {
    let r = await l.Je(t, n, e);
    return (
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_UPDATE',
            product: r
        }),
        r
    );
}
async function s(t, n) {
    return (
        await l.mh(t, n),
        i.Z.dispatch({
            type: 'GUILD_PRODUCT_DELETE',
            productId: n
        }),
        !0
    );
}
