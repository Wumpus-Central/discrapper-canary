var l = a(477900),
    s = a(582128),
    n = a(696292),
    i = a(321538),
    r = a(318346),
    c = a(32163),
    o = a(652215),
    A = a(792996);
a.d(
    t,
    {},
    {
        A: function (e) {
            let { location: t, onNavigate: a, variant: E, themeOverride: p } = e,
                d = s.useCallback(() => {
                    ((0, r.Y)({
                        pageType: t,
                        sectionType: o.JJy.ORBS_BALANCE_MENU,
                        ctaObject: o.ZSU.CTA_TO_QUEST_HOME,
                    }),
                        null != a && a(),
                        (0, i.mA)({ fromContent: n.u.ORBS_BALANCE_MENU }));
                }, [t, a]);
            return (0, l.jsx)(c.SS, {
                analyticsPage: t,
                cardAlignment: c.SS.CardAlignment.END,
                ctaText: A.intl.string(A.t.VC4Mq0),
                ctaOnClick: d,
                onNavigate: a,
                pillVariant: E,
                themeOverride: p,
            });
        },
    },
);
