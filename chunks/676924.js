t.d(l, { A: () => u });
var n = t(477900),
    a = t(582128),
    i = t(696292),
    s = t(617986),
    r = t(318346),
    c = t(70926),
    o = t(652215),
    d = t(375708);
function u(e) {
    let { location: l, onNavigate: t, variant: u } = e,
        A = a.useCallback(() => {
            ((0, r.Y)({ pageType: l, sectionType: o.JJy.ORBS_BALANCE_MENU, ctaObject: o.ZSU.CTA_TO_QUEST_HOME }),
                null != t && t(),
                (0, s.mA)({ fromContent: i.u.ORBS_BALANCE_MENU }));
        }, [l, t]);
    return (0, n.jsx)(c.SS, {
        analyticsPage: l,
        cardAlignment: c.SS.CardAlignment.END,
        ctaText: d.intl.string(d.t.VC4Mq0),
        ctaOnClick: A,
        onNavigate: t,
        pillVariant: u,
    });
}
