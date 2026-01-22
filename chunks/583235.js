n.d(t, { H: () => u });
var r = n(64700),
    l = n(975571),
    o = n(651892),
    i = n(901406),
    s = n(457775),
    a = n(654487),
    c = n(652215);
function u(e) {
    let { quest: t, onClose: n, sourceQuestContent: u, impressionId: d } = e;
    return r.useCallback(
        async (e, r) => {
            if (t.id === a.Fw) return void window.open(l.A.getArticleURL(c.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, o.Jx)(t.config);
                (await (0, s.f7)(e)) && n();
            }
            (0, i.pu)(t, {
                content: e,
                ctaContent: r,
                impressionId: d,
                sourceQuestContent: u,
            });
        },
        [t, n, u, d],
    );
}
