n.d(t, { Z: () => c }), n(47120);
var r = n(192379),
    i = n(668781),
    a = n(881052),
    l = n(824389),
    o = n(179838),
    s = n(388032);
function c(e, t) {
    let [n, c] = r.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: r.useCallback(
            async (n) => {
                if (null != e && null != t) {
                    c(!0);
                    try {
                        let { url: r } = await l.gs({
                            guildId: e,
                            productId: t,
                            attachmentId: n
                        });
                        await o.L(r);
                    } catch (t) {
                        let e = t instanceof a.Hx ? t.getAnyErrorMessage() : void 0;
                        i.Z.show({
                            title: s.NW.string(s.t.R0RpRU),
                            body: null != e ? e : s.NW.string(s.t.eAn6z8)
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
