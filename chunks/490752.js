n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(793574),
    l = n(688810),
    c = n(165162),
    u = n(578550),
    d = n(50268),
    f = n(239211),
    p = n(399476),
    _ = n(183555),
    h = n(622543),
    m = n(993401),
    g = n(985018);

function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}

function b(e) {
    let { user: t, guildId: n, viewProfileItem: E } = e,
        b = i.useRef(null),
        { trackUserProfileAction: O } = (0, _.NJ)(),
        { analyticsLocations: v, newestAnalyticsLocation: A } = (0, l.Ay)(s.A.USER_PROFILE_OVERFLOW_MENU),
        I = (0, a.bG)([h.A], () => h.A.getUserProfile(t.id)),
        S = null == I ? void 0 : I.application,
        T = (0, f.A)({
            user: t,
            guildId: n,
            location: A,
            color: "danger",
            onBlock: () =>
                O({
                    action: "BLOCK",
                    analyticsLocations: v,
                }),
            onUnblock: () =>
                O({
                    action: "UNBLOCK",
                    analyticsLocations: v,
                }),
        }),
        C = (0, p.A)({
            user: t,
            guildId: n,
            location: A,
            onIgnore: () =>
                O({
                    action: "IGNORE",
                    analyticsLocations: v,
                }),
            onUnignore: () =>
                O({
                    action: "UNIGNORE",
                    analyticsLocations: v,
                }),
        }),
        N = (0, u.A)({
            applicationId: null == S ? void 0 : S.id,
            user: t,
            guildId: n,
            onSubmit: () =>
                O({
                    action: "REPORT",
                    analyticsLocations: v,
                }),
            color: "danger",
        }),
        w = (0, d.A)({
            id: null == S ? void 0 : S.id,
            label: g.intl.string(g.t["+NP/b2"]),
            onSuccess: () =>
                O({
                    action: "COPY_APP_ID",
                    analyticsLocations: v,
                }),
        }),
        R = [
            [E],
            [C, T, N],
            [
                (0, c.A)({
                    application: S,
                    label: g.intl.string(g.t.WqhZss),
                    onSuccess: () =>
                        O({
                            action: "COPY_APP_LINK",
                            analyticsLocations: v,
                        }),
                }),
                w,
            ],
        ];
    return R.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(o.YNO, {
              targetElementRef: b,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.W1t, {
                      "data-menu-migrated": !0,
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": g.intl.string(g.t.AXIHpV),
                      children: R.map((e, t) =>
                          (0, r.jsx)(
                              o.rXV,
                              {
                                  children: e.map((e) => e),
                              },
                              t,
                          ),
                      ),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      m.br,
                      y(
                          {
                              buttonRef: b,
                              action: "PRESS_OPTIONS",
                              icon: o.jNK,
                              tooltipText: g.intl.string(g.t["UKOtz+"]),
                          },
                          e,
                      ),
                  ),
          });
}
