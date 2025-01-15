e.d(n, {
    Z: function () {
        return c;
    }
}),
    e(47120);
var a = e(192379),
    o = e(668781),
    i = e(881052),
    r = e(824389),
    l = e(179838),
    s = e(388032);
function c(t, n) {
    let [e, c] = a.useState(!1);
    return {
        isLoading: e,
        downloadAttachment: a.useCallback(
            async (e) => {
                if (null != t && null != n) {
                    c(!0);
                    try {
                        let { url: a } = await r.gs({
                            guildId: t,
                            productId: n,
                            attachmentId: e
                        });
                        await l.L(a);
                    } catch (n) {
                        let t = n instanceof i.Hx ? n.getAnyErrorMessage() : void 0;
                        o.Z.show({
                            title: s.intl.string(s.t.R0RpRU),
                            body: null != t ? t : s.intl.string(s.t.eAn6z8)
                        });
                    } finally {
                        c(!1);
                    }
                }
            },
            [t, n]
        )
    };
}
