n.d(a, { A: () => A });
var e = n(477900),
    c = n(582128),
    i = n(696292),
    s = n(617986),
    p = n(318346),
    r = n(70926),
    l = n(652215),
    C = n(375708);
function A(t) {
    let { location: a, onNavigateToQuestHome: n, variant: A } = t,
        _ = c.useCallback(() => {
            ((0, p.Y)({ pageType: a, sectionType: l.JJy.ORBS_BALANCE_MENU, ctaObject: l.ZSU.CTA_TO_QUEST_HOME }),
                n?.(),
                (0, s.mA)({ fromContent: i.u.ORBS_BALANCE_MENU }));
        }, [a, n]);
    return (0, e.jsx)(r.SS, {
        analyticsPage: a,
        cardAlignment: r.SS.CardAlignment.END,
        ctaText: C.intl.string(C.t.VC4Mq0),
        ctaOnClick: _,
        pillVariant: A,
    });
}
