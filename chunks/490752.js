n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(265872),
    r = n(861672),
    o = n(477782),
    d = n(365199),
    c = n(793574),
    u = n(688810),
    h = n(165162),
    A = n(578550),
    _ = n(50268),
    m = n(239211),
    g = n(399476),
    p = n(183555),
    f = n(622543),
    E = n(993401),
    x = n(985018);
function I(e) {
    let { user: t, guildId: n, viewProfileItem: I } = e,
        C = l.useRef(null),
        { trackUserProfileAction: b } = (0, p.NJ)(),
        { analyticsLocations: N, newestAnalyticsLocation: S } = (0, u.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU),
        v = (0, s.bG)([f.A], () => f.A.getUserProfile(t.id)),
        T = v?.application,
        y = (0, m.A)({
            user: t,
            guildId: n,
            location: S,
            onBlock: () => b({ action: "BLOCK", analyticsLocations: N }),
            onUnblock: () => b({ action: "UNBLOCK", analyticsLocations: N }),
        }),
        R = (0, g.A)({
            user: t,
            guildId: n,
            location: S,
            onIgnore: () => b({ action: "IGNORE", analyticsLocations: N }),
            onUnignore: () => b({ action: "UNIGNORE", analyticsLocations: N }),
        }),
        j = (0, A.A)({
            applicationId: T?.id,
            user: t,
            guildId: n,
            onSubmit: () => b({ action: "REPORT", analyticsLocations: N }),
            color: "danger",
        }),
        L = (0, _.A)({
            id: T?.id,
            label: x.intl.string(x.t["+NP/b2"]),
            onSuccess: () => b({ action: "COPY_APP_ID", analyticsLocations: N }),
        }),
        O = [
            [I],
            [R, y, j],
            [
                (0, h.A)({
                    application: T,
                    label: x.intl.string(x.t.WqhZss),
                    onSuccess: () => b({ action: "COPY_APP_LINK", analyticsLocations: N }),
                }),
                L,
            ],
        ];
    return O.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(a.Y, {
              targetElementRef: C,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(r.W, {
                      "data-menu-migrated": !0,
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": x.intl.string(x.t.AXIHpV),
                      children: O.map((e, t) => (0, i.jsx)(o.rX, { children: e.map((e) => e) }, t)),
                  });
              },
              children: (e) =>
                  (0, i.jsx)(E.br, {
                      buttonRef: C,
                      action: "PRESS_OPTIONS",
                      icon: d.j,
                      tooltipText: x.intl.string(x.t["UKOtz+"]),
                      ...e,
                  }),
          });
}
