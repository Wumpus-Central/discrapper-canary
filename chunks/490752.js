"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    u = n(165162),
    c = n(578550),
    d = n(50268),
    _ = n(239211),
    f = n(399476),
    p = n(183555),
    h = n(622543),
    m = n(993401),
    g = n(985018);
function E(e) {
    let { user: t, guildId: n, viewProfileItem: E } = e,
        A = i.useRef(null),
        { trackUserProfileAction: I } = (0, p.NJ)(),
        { analyticsLocations: T, newestAnalyticsLocation: y } = (0, l.Ay)(o.A.USER_PROFILE_OVERFLOW_MENU),
        S = (0, a.bG)([h.A], () => h.A.getUserProfile(t.id)),
        v = S?.application,
        C = (0, _.A)({
            user: t,
            guildId: n,
            location: y,
            color: "danger",
            onBlock: () => I({ action: "BLOCK", analyticsLocations: T }),
            onUnblock: () => I({ action: "UNBLOCK", analyticsLocations: T }),
        }),
        b = (0, f.A)({
            user: t,
            guildId: n,
            location: y,
            onIgnore: () => I({ action: "IGNORE", analyticsLocations: T }),
            onUnignore: () => I({ action: "UNIGNORE", analyticsLocations: T }),
        }),
        N = (0, c.A)({
            applicationId: v?.id,
            user: t,
            guildId: n,
            onSubmit: () => I({ action: "REPORT", analyticsLocations: T }),
            color: "danger",
        }),
        R = (0, d.A)({
            id: v?.id,
            label: g.intl.string(g.t["+NP/b2"]),
            onSuccess: () => I({ action: "COPY_APP_ID", analyticsLocations: T }),
        }),
        O = [
            [E],
            [b, C, N],
            [
                (0, u.A)({
                    application: v,
                    label: g.intl.string(g.t.WqhZss),
                    onSuccess: () => I({ action: "COPY_APP_LINK", analyticsLocations: T }),
                }),
                R,
            ],
        ];
    return O.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(s.YNO, {
              targetElementRef: A,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.W1t, {
                      "data-menu-migrated": !0,
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": g.intl.string(g.t.AXIHpV),
                      children: O.map((e, t) => (0, r.jsx)(s.rXV, { children: e.map((e) => e) }, t)),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(m.br, {
                      buttonRef: A,
                      action: "PRESS_OPTIONS",
                      icon: s.jNK,
                      tooltipText: g.intl.string(g.t["UKOtz+"]),
                      ...e,
                  }),
          });
}
