n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(192379),
    r = n(668781),
    l = n(881052),
    a = n(824389),
    o = n(179838),
    s = n(388032);
function c(e, t) {
    let [n, c] = i.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: i.useCallback(
            async (n) => {
                if (null != e && null != t) {
                    c(!0);
                    try {
                        let { url: i } = await a.gs({
                            guildId: e,
                            productId: t,
                            attachmentId: n
                        });
                        await o.L(i);
                    } catch (t) {
                        let e = t instanceof l.Hx ? t.getAnyErrorMessage() : void 0;
                        r.Z.show({
                            title: s.intl.string(s.t.R0RpRU),
                            body: null != e ? e : s.intl.string(s.t.eAn6z8)
                        });
                    } finally {
                        c(!1);
                    }
                }
            },
            [e, t]
        )
    };
}
