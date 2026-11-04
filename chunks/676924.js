var a = t(477900),
    n = t(582128),
    s = t(696292),
    i = t(321538),
    r = t(318346),
    c = t(863705),
    o = t(652215),
    A = t(792996);
t.d(
    l,
    {},
    {
        A: function (e) {
            let { location: l, onNavigate: t, variant: u, themeOverride: p } = e,
                d = n.useCallback(() => {
                    ((0, r.Y)({
                        pageType: l,
                        sectionType: o.JJy.ORBS_BALANCE_MENU,
                        ctaObject: o.ZSU.CTA_TO_QUEST_HOME,
                    }),
                        null != t && t(),
                        (0, i.mA)({ fromContent: s.u.ORBS_BALANCE_MENU }));
                }, [l, t]);
            return (0, a.jsx)(c.SS, {
                analyticsPage: l,
                cardAlignment: c.SS.CardAlignment.END,
                ctaText: A.intl.string(A.t.VC4Mq0),
                ctaOnClick: d,
                onNavigate: t,
                pillVariant: u,
                themeOverride: p,
            });
        },
    },
);
