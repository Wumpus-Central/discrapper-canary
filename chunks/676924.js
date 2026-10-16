l.d(t, { A: () => E });
var n = l(477900),
    i = l(582128),
    a = l(696292),
    s = l(617986),
    r = l(318346),
    c = l(70926),
    o = l(652215),
    A = l(105292);
function E(e) {
    let { location: t, onNavigate: l, variant: E, themeOverride: I } = e,
        d = i.useCallback(() => {
            ((0, r.Y)({ pageType: t, sectionType: o.JJy.ORBS_BALANCE_MENU, ctaObject: o.ZSU.CTA_TO_QUEST_HOME }),
                null != l && l(),
                (0, s.mA)({ fromContent: a.u.ORBS_BALANCE_MENU }));
        }, [t, l]);
    return (0, n.jsx)(c.SS, {
        analyticsPage: t,
        cardAlignment: c.SS.CardAlignment.END,
        ctaText: A.intl.string(A.t.VC4Mq0),
        ctaOnClick: d,
        onNavigate: l,
        pillVariant: E,
        themeOverride: I,
    });
}
