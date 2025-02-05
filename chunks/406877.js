n.d(t, { Z: () => c }), n(47120);
var i = n(192379),
    l = n(668781),
    a = n(881052),
    r = n(824389),
    s = n(179838),
    o = n(388032);
function c(e, t) {
    let [n, c] = i.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: i.useCallback(
            async (n) => {
                if (null != e && null != t) {
                    c(!0);
                    try {
                        let { url: i } = await r.gs({
                            guildId: e,
                            productId: t,
                            attachmentId: n
                        });
                        await s.L(i);
                    } catch (t) {
                        let e = t instanceof a.Hx ? t.getAnyErrorMessage() : void 0;
                        l.Z.show({
                            title: o.intl.string(o.t.R0RpRU),
                            body: null != e ? e : o.intl.string(o.t.eAn6z8)
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
