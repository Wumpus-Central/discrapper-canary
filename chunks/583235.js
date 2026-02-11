"use strict";
n.d(t, { H: () => c });
var r = n(64700),
    i = n(975571),
    a = n(651892),
    s = n(901406),
    o = n(457775),
    l = n(654487),
    u = n(652215);
function c(e) {
    let { quest: t, onClose: n, sourceQuestContent: c, impressionId: d } = e;
    return r.useCallback(
        async (e, r) => {
            if (t.id === l.Fw) return void window.open(i.A.getArticleURL(u.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, a.Jx)(t.config);
                (await (0, o.f7)(e)) && n();
            }
            (0, s.pu)(t, { content: e, ctaContent: r, impressionId: d, sourceQuestContent: c });
        },
        [t, n, c, d],
    );
}
