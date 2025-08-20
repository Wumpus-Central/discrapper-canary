n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(442837),
    a = n(704215),
    o = n(907862),
    s = n(100527),
    l = n(243778),
    c = n(314897),
    u = n(447448),
    d = n(892001),
    f = n(228168),
    _ = n(921944),
    p = n(388032);
let h =
    "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png";
function m(e) {
    let { targetElementRef: t } = e,
        n = (0, u.k)({ location: "GameWidgetsPopover" }),
        [m, g] = (0, l.US)(n ? [a.z.WIDGETS_RTC_UPSELL_COACHMARK] : []),
        E = (0, i.e7)([c.default], () => c.default.getId()),
        b = m === a.z.WIDGETS_RTC_UPSELL_COACHMARK;
    return null != t.current && b
        ? (0, r.jsx)(o.J2, {
              targetElementRef: t,
              title: p.intl.string(p.t.gxcsSk),
              body: p.intl.string(p.t["8L7E5u"]),
              caretConfig: {
                  position: "bottom",
                  align: "start",
              },
              graphic: {
                  type: "image",
                  src: h,
              },
              position: "top",
              align: "left",
              gradientColor: "blue",
              size: "md",
              onRequestClose: () => {
                  g(_.L.USER_DISMISS);
              },
              actions: [
                  {
                      text: p.intl.string(p.t.RzWDqa),
                      variant: "primary",
                      onClick: () => {
                          g(_.L.TAKE_ACTION),
                              (0, d.openUserProfileModal)({
                                  userId: E,
                                  sourceAnalyticsLocations: [s.Z.ACCOUNT],
                                  hideRestrictedProfile: !0,
                                  section: f.oh.WIDGETS,
                              });
                      },
                  },
              ],
          })
        : null;
}
