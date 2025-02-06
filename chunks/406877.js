n.d(e, { Z: () => c }), n(47120);
var a = n(192379),
    i = n(668781),
    l = n(881052),
    o = n(824389),
    s = n(179838),
    r = n(388032);
function c(t, e) {
    let [n, c] = a.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: a.useCallback(
            async (n) => {
                if (null != t && null != e) {
                    c(!0);
                    try {
                        let { url: a } = await o.gs({
                            guildId: t,
                            productId: e,
                            attachmentId: n
                        });
                        await s.L(a);
                    } catch (e) {
                        let t = e instanceof l.Hx ? e.getAnyErrorMessage() : void 0;
                        i.Z.show({
                            title: r.intl.string(r.t.R0RpRU),
                            body: null != t ? t : r.intl.string(r.t.eAn6z8)
                        });
                    } finally {
                        c(!1);
                    }
                }
            },
            [t, e]
        )
    };
}
