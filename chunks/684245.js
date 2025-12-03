n.d(t, { e: () => u });
var r = n(473749),
    o = n(63063),
    l = n(304696),
    i = n(387745),
    a = n(939389),
    s = n(324805),
    c = n(981631);
function u(e) {
    let { quest: t, onClose: n, sourceQuestContent: u, impressionId: d } = e;
    return r.useCallback(
        async (e, r) => {
            if (t.id === s.V6) return void window.open(o.Z.getArticleURL(c.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, l.zo)(t.config);
                (await (0, a.PW)(e)) && n();
            }
            (0, i.nc)(t, {
                content: e,
                ctaContent: r,
                impressionId: d,
                sourceQuestContent: u,
            });
        },
        [t, n, u, d],
    );
}
