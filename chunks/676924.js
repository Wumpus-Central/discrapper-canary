n.d(a, { A: () => u });
var e = n(477900),
    i = n(582128),
    c = n(696292),
    l = n(617986),
    s = n(318346),
    p = n(70926),
    r = n(652215),
    C = n(375708);
function u(t) {
    let { location: a, onNavigate: n, variant: u } = t,
        A = i.useCallback(() => {
            ((0, s.Y)({ pageType: a, sectionType: r.JJy.ORBS_BALANCE_MENU, ctaObject: r.ZSU.CTA_TO_QUEST_HOME }),
                null != n && n(),
                (0, l.mA)({ fromContent: c.u.ORBS_BALANCE_MENU }));
        }, [a, n]);
    return (0, e.jsx)(p.SS, {
        analyticsPage: a,
        cardAlignment: p.SS.CardAlignment.END,
        ctaText: C.intl.string(C.t.VC4Mq0),
        ctaOnClick: A,
        onNavigate: n,
        pillVariant: u,
    });
}
