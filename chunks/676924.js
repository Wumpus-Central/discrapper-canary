a.d(n, { A: () => p });
var i = a(477900),
    c = a(582128),
    r = a(696292),
    e = a(617986),
    s = a(70926),
    l = a(375708);
function p(t) {
    let { onNavigateToQuestHome: n, variant: a } = t,
        p = c.useCallback(() => {
            (n?.(), (0, e.mA)({ fromContent: r.u.ORBS_BALANCE_MENU }));
        }, [n]);
    return (0, i.jsx)(s.SS, {
        cardAlignment: s.SS.CardAlignment.END,
        ctaText: l.intl.string(l.t.VC4Mq0),
        ctaOnClick: p,
        pillVariant: a,
    });
}
