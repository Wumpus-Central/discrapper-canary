n.d(t, { e: () => c });
var r = n(473749),
    o = n(63063),
    l = n(509212),
    i = n(939389),
    a = n(324805),
    s = n(981631);
function c(e) {
    let { quest: t, onClose: n, sourceQuestContent: c, impressionId: u } = e;
    return r.useCallback(
        async (e, r) => {
            if (t.id === a.V6) return void window.open(o.Z.getArticleURL(s.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, l.zo)(t.config);
                (await (0, i.PW)(e)) && n();
            }
            (0, l.nc)(t, {
                content: e,
                ctaContent: r,
                impressionId: u,
                sourceQuestContent: c,
            });
        },
        [t, n, c, u],
    );
}
