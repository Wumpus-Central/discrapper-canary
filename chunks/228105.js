r.d(n, { A: () => l });
var e = r(582128),
    a = r(157559),
    i = r(627784),
    c = r(306522),
    o = r(975807),
    s = r(792996);
function l(t, n) {
    let [r, l] = e.useState(!1);
    return {
        isLoading: r,
        downloadAttachment: e.useCallback(
            async (r) => {
                if (null != t && null != n) {
                    l(!0);
                    try {
                        let { url: e } = await c.P0({ guildId: t, productId: n, attachmentId: r });
                        await (0, o.A)(e);
                    } catch (n) {
                        let t = n instanceof i.LG ? n.getAnyErrorMessage() : void 0;
                        a.A.show({ title: s.intl.string(s.t.R0RpRX), body: t ?? s.intl.string(s.t.eAn6z2) });
                    } finally {
                        l(!1);
                    }
                }
            },
            [t, n],
        ),
    };
}
