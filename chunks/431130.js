n.d(t, { p: () => u });
var r = n(647438),
    o = n(63063),
    l = n(509212),
    i = n(566078),
    a = n(604162),
    s = n(46140),
    c = n(981631);
function u(e) {
    let { quest: t, onClose: n, sourceQuestContent: u, impressionId: d } = e;
    return r.useCallback(
        async (e, r) => {
            if (t.id === s.V6) return void window.open(o.Z.getArticleURL(c.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = i.r.build(t.config).ctaLink;
                (await (0, a.PW)(e)) && n();
            }
            (0, l.nc)(t, {
                content: e,
                ctaContent: r,
                impressionId: d,
                sourceQuestContent: u,
            });
        },
        [t, n, u, d],
    );
}
