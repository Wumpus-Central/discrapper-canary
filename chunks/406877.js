e.d(n, {
    Z: function () {
        return s;
    }
}),
    e(47120);
var a = e(192379),
    i = e(668781),
    r = e(881052),
    o = e(824389),
    l = e(179838),
    c = e(388032);
function s(t, n) {
    let [e, s] = a.useState(!1);
    return {
        isLoading: e,
        downloadAttachment: a.useCallback(
            async (e) => {
                if (null != t && null != n) {
                    s(!0);
                    try {
                        let { url: a } = await o.gs({
                            guildId: t,
                            productId: n,
                            attachmentId: e
                        });
                        await l.L(a);
                    } catch (n) {
                        let t = n instanceof r.Hx ? n.getAnyErrorMessage() : void 0;
                        i.Z.show({
                            title: c.intl.string(c.t.R0RpRU),
                            body: null != t ? t : c.intl.string(c.t.eAn6z8)
                        });
                    } finally {
                        s(!1);
                    }
                }
            },
            [t, n]
        )
    };
}
