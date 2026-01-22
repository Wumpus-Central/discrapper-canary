n.d(t, { A: () => c }), n(896048);
var r = n(64700),
    i = n(157559),
    a = n(198982),
    s = n(306522),
    o = n(922482),
    l = n(985018);
function c(e, t) {
    let [n, c] = r.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: r.useCallback(
            async (n) => {
                if (null != e && null != t) {
                    c(!0);
                    try {
                        let { url: r } = await s.P0({
                            guildId: e,
                            productId: t,
                            attachmentId: n,
                        });
                        await o.R(r);
                    } catch (t) {
                        let e = t instanceof a.LG ? t.getAnyErrorMessage() : void 0;
                        i.A.show({
                            title: l.intl.string(l.t.R0RpRX),
                            body: null != e ? e : l.intl.string(l.t.eAn6z2),
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
