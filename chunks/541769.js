n.d(t, { Z: () => x }), n(388685);
var a = n(54381);
n(473749);
var r = n(704215),
    i = n(812055),
    l = n(243778),
    s = n(287647),
    o = n(562511),
    c = n(53891),
    d = n(494424),
    u = n(562705),
    m = n(659302),
    p = n(620799),
    h = n(921944),
    f = n(324805);
function x(e) {
    var t, n, x;
    let { isQuestBarEmpty: b, hasLoadedQuestBar: g } = (0, m.Ws)({ location: f.dr.CONFLICT_CHECKS }),
        v = null != e.targetElementRef.current && b && g,
        [j, y] = (0, o.X)(e.guildId, { shouldShow: v }),
        [C, _] = (0, o.Z)(e.currentUser, { shouldShow: v }),
        [S, E] = (0, i.b)({ shouldShow: v });
    return v
        ? j === r.z.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, a.jsx)(c.$, {
                  guildId: e.guildId,
                  onDismiss: y,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : C === r.z.GUILD_TAG_UPDATED_COACHMARK
              ? (0, a.jsx)(c.f, {
                    guildId:
                        null != (n = null == (t = e.currentUser.primaryGuild) ? void 0 : t.identityGuildId) ? n : null,
                    onDismiss: _,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : S === r.z.DO_NOT_DISTURB_REMINDER_POPOVER
                ? (0, a.jsx)(i.Z, {
                      targetElementRef: e.targetElementRef,
                      onDismiss: E,
                      children: e.children,
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(u.Z, {
                              groupName: h.R.ACCOUNT_NAME_ZONE,
                              targetElementRef: e.targetElementRef,
                          }),
                          (0, a.jsx)(l.ZP, {
                              contentTypes: v && null != (x = e.additionalDCs) ? x : [],
                              groupName: h.R.ACCOUNT_NAME_ZONE,
                              children: (t) => {
                                  let { visibleContent: n, markAsDismissed: i } = t;
                                  switch (n) {
                                      case r.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                          return (0, a.jsx)(p.Z, {
                                              markAsDismissed: i,
                                              targetElementRef: e.targetElementRef,
                                              children: e.children,
                                          });
                                      case r.z.DISPLAY_NAME_STYLES_COACHMARK:
                                          return (0, a.jsx)(s.e, {
                                              markAsDismissed: i,
                                              targetElementRef: e.targetElementRef,
                                              children: e.children,
                                          });
                                      case r.z.TENURE_BADGE_CHURN_REMINDER:
                                          return (0, a.jsx)(d.Z, {
                                              markAsDismissed: i,
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
