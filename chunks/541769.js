n.d(t, { Z: () => x }), n(388685);
var a = n(54381);
n(473749);
var r = n(704215),
    l = n(812055),
    i = n(243778),
    s = n(287647),
    o = n(53891),
    c = n(291533),
    d = n(494424),
    u = n(562705),
    m = n(659302),
    p = n(620799),
    h = n(921944),
    f = n(324805);
function x(e) {
    var t;
    let { isQuestBarEmpty: n, hasLoadedQuestBar: x } = (0, m.Ws)({ location: f.dr.CONFLICT_CHECKS }),
        b = null != e.targetElementRef.current && n && x,
        [g, v] = (0, c.G)(e.guildId),
        [j, y] = (0, l.b)({ shouldShow: b });
    return b
        ? g === r.z.GUILD_TAG_AVAILABLE_COACHMARK
            ? (0, a.jsx)(o.ZP, {
                  guildId: e.guildId,
                  onDismiss: v,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : j === r.z.DO_NOT_DISTURB_REMINDER_POPOVER
              ? (0, a.jsx)(l.Z, {
                    targetElementRef: e.targetElementRef,
                    onDismiss: y,
                    children: e.children,
                })
              : (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(u.Z, {
                            groupName: h.R.ACCOUNT_NAME_ZONE,
                            targetElementRef: e.targetElementRef,
                        }),
                        (0, a.jsx)(i.ZP, {
                            contentTypes: b && null != (t = e.additionalDCs) ? t : [],
                            groupName: h.R.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case r.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                        return (0, a.jsx)(p.Z, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case r.z.DISPLAY_NAME_STYLES_COACHMARK:
                                        return (0, a.jsx)(s.e, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case r.z.TENURE_BADGE_CHURN_REMINDER:
                                        return (0, a.jsx)(d.Z, {
                                            markAsDismissed: l,
                                            mode: "popover",
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    default:
                                        return e.children;
                                }
                            },
                        }),
                    ],
                })
        : e.children;
}
