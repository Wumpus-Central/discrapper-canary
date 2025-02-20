n.d(e, { Z: () => s }), n(47120);
var r = n(192379),
    a = n(668781),
    o = n(881052),
    i = n(824389),
    l = n(179838),
    c = n(388032);
function s(t, e) {
    let [n, s] = r.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: r.useCallback(
            async (n) => {
                if (null != t && null != e) {
                    s(!0);
                    try {
                        let { url: r } = await i.gs({
                            guildId: t,
                            productId: e,
                            attachmentId: n
                        });
                        await l.L(r);
                    } catch (e) {
                        let t = e instanceof o.Hx ? e.getAnyErrorMessage() : void 0;
                        a.Z.show({
                            title: c.NW.string(c.t.R0RpRU),
                            body: null != t ? t : c.NW.string(c.t.eAn6z8)
                        });
                    } finally {
                        s(!1);
                    }
                }
            },
            [t, e]
        )
    };
}
