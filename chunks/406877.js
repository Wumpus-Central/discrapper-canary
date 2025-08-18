n.d(t, { Z: () => c }), n(388685);
var r = n(647438),
    i = n(668781),
    l = n(881052),
    o = n(824389),
    a = n(179838),
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
                        let { url: r } = await o.gs({
                            guildId: e,
                            productId: t,
                            attachmentId: n,
                        });
                        await a.L(r);
                    } catch (t) {
                        let e = t instanceof l.Hx ? t.getAnyErrorMessage() : void 0;
                        i.Z.show({
                            title: s.intl.string(s.t.R0RpRU),
                            body: null != e ? e : s.intl.string(s.t.eAn6z8),
                        });
                    } finally {
                        c(!1);
                    }
                }
            },
            [e, t],
        ),
    };
}
