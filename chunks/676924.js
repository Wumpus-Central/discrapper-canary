l.d(e, { A: () => v });
var s = l(477900),
    i = l(582128),
    a = l(696292),
    n = l(617986),
    h = l(318346),
    c = l(70926),
    r = l(652215),
    o = l(375708);
function v(t) {
    let { location: e, onNavigate: l, variant: v } = t,
        d = i.useCallback(() => {
            ((0, h.Y)({ pageType: e, sectionType: r.JJy.ORBS_BALANCE_MENU, ctaObject: r.ZSU.CTA_TO_QUEST_HOME }),
                null != l && l(),
                (0, n.mA)({ fromContent: a.u.ORBS_BALANCE_MENU }));
        }, [e, l]);
    return (0, s.jsx)(c.SS, {
        analyticsPage: e,
        cardAlignment: c.SS.CardAlignment.END,
        ctaText: o.intl.string(o.t.VC4Mq0),
        ctaOnClick: d,
        onNavigate: l,
        pillVariant: v,
    });
}
