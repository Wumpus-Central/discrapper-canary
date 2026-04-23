n.d(t, { A: () => d });
var i = n(64700),
    l = n(157559),
    a = n(198982),
    s = n(306522),
    r = n(922482),
    o = n(985018);
function d(e, t) {
    let [n, d] = i.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: i.useCallback(
            async (n) => {
                if (null != e && null != t) {
                    d(!0);
                    try {
                        let { url: i } = await s.P0({ guildId: e, productId: t, attachmentId: n });
                        await r.R(i);
                    } catch (t) {
                        let e = t instanceof a.LG ? t.getAnyErrorMessage() : void 0;
                        l.A.show({ title: o.intl.string(o.t.R0RpRX), body: e ?? o.intl.string(o.t.eAn6z2) });
                    } finally {
                        d(!1);
                    }
                }
            },
            [e, t],
        ),
    };
}
