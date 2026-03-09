n.d(t, { H: () => c });
var r = n(64700),
    l = n(975571),
    i = n(651892),
    s = n(901406),
    a = n(545986),
    o = n(654487),
    u = n(652215);
function c(e) {
    let { quest: t, onClose: n, sourceQuestContent: c, impressionId: d } = e;
    return r.useCallback(
        async (e, r) => {
            if (t.id === o.Fw) return void window.open(l.A.getArticleURL(u.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, i.Jx)(t.config);
                (await (0, a.f7)(e)) && n();
            }
            (0, s.pu)(t, { content: e, ctaContent: r, impressionId: d, sourceQuestContent: c });
        },
        [t, n, c, d],
    );
}
