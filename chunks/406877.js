(n.d(t, { Z: () => c }), n(388685));
var r = n(73800),
    i = n(668781),
    o = n(881052),
    a = n(824389),
    s = n(179838),
    l = n(388032);
function c(e, t) {
    let [n, c] = r.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: r.useCallback(
            async (n) => {
                if (null != e && null != t) {
                    c(!0);
                    try {
                        let { url: r } = await a.gs({
                            guildId: e,
                            productId: t,
                            attachmentId: n
                        });
                        await s.L(r);
                    } catch (t) {
                        let e = t instanceof o.Hx ? t.getAnyErrorMessage() : void 0;
                        i.Z.show({
                            title: l.intl.string(l.t.R0RpRU),
                            body: null != e ? e : l.intl.string(l.t.eAn6z8)
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
