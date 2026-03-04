"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
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
    E = n(985018);
function g(e) {
    let { user: t, guildId: n, viewProfileItem: g } = e,
        A = i.useRef(null),
        { trackUserProfileAction: I } = (0, p.NJ)(),
        { analyticsLocations: T, newestAnalyticsLocation: S } = (0, l.Ay)(o.A.USER_PROFILE_OVERFLOW_MENU),
        y = (0, s.bG)([h.A], () => h.A.getUserProfile(t.id)),
        v = y?.application,
        N = (0, _.A)({
            user: t,
            guildId: n,
            location: S,
            onBlock: () => I({ action: "BLOCK", analyticsLocations: T }),
            onUnblock: () => I({ action: "UNBLOCK", analyticsLocations: T }),
        }),
        C = (0, f.A)({
            user: t,
            guildId: n,
            location: S,
            onIgnore: () => I({ action: "IGNORE", analyticsLocations: T }),
            onUnignore: () => I({ action: "UNIGNORE", analyticsLocations: T }),
        }),
        R = (0, c.A)({
            applicationId: v?.id,
            user: t,
            guildId: n,
            onSubmit: () => I({ action: "REPORT", analyticsLocations: T }),
            color: "danger",
        }),
        O = (0, d.A)({
            id: v?.id,
            label: E.intl.string(E.t["+NP/b2"]),
            onSuccess: () => I({ action: "COPY_APP_ID", analyticsLocations: T }),
        }),
        b = [
            [g],
            [C, N, R],
            [
                (0, u.A)({
                    application: v,
                    label: E.intl.string(E.t.WqhZss),
                    onSuccess: () => I({ action: "COPY_APP_LINK", analyticsLocations: T }),
                }),
                O,
            ],
        ];
    return b.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(a.YNO, {
              targetElementRef: A,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.W1t, {
                      "data-menu-migrated": !0,
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": E.intl.string(E.t.AXIHpV),
                      children: b.map((e, t) => (0, r.jsx)(a.rXV, { children: e.map((e) => e) }, t)),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(m.br, {
                      buttonRef: A,
                      action: "PRESS_OPTIONS",
                      icon: a.jNK,
                      tooltipText: E.intl.string(E.t["UKOtz+"]),
                      ...e,
                  }),
          });
}
