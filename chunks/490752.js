n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(793574),
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
function b(e) {
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
function y(e) {
    let { user: t, guildId: n, viewProfileItem: E } = e,
        y = i.useRef(null),
        { trackUserProfileAction: O } = (0, _.NJ)(),
        { analyticsLocations: A, newestAnalyticsLocation: v } = (0, l.Ay)(o.A.USER_PROFILE_OVERFLOW_MENU),
        S = (0, a.bG)([h.A], () => h.A.getUserProfile(t.id)),
        I = null == S ? void 0 : S.application,
        T = (0, f.A)({
            user: t,
            guildId: n,
            location: v,
            color: "danger",
            onBlock: () =>
                O({
                    action: "BLOCK",
                    analyticsLocations: A,
                }),
            onUnblock: () =>
                O({
                    action: "UNBLOCK",
                    analyticsLocations: A,
                }),
        }),
        C = (0, p.A)({
            user: t,
            guildId: n,
            location: v,
            onIgnore: () =>
                O({
                    action: "IGNORE",
                    analyticsLocations: A,
                }),
            onUnignore: () =>
                O({
                    action: "UNIGNORE",
                    analyticsLocations: A,
                }),
        }),
        N = (0, u.A)({
            applicationId: null == I ? void 0 : I.id,
            user: t,
            guildId: n,
            onSubmit: () =>
                O({
                    action: "REPORT",
                    analyticsLocations: A,
                }),
            color: "danger",
        }),
        R = (0, d.A)({
            id: null == I ? void 0 : I.id,
            label: g.intl.string(g.t["+NP/b2"]),
            onSuccess: () =>
                O({
                    action: "COPY_APP_ID",
                    analyticsLocations: A,
                }),
        }),
        w = [
            [E],
            [C, T, N],
            [
                (0, c.A)({
                    application: I,
                    label: g.intl.string(g.t.WqhZss),
                    onSuccess: () =>
                        O({
                            action: "COPY_APP_LINK",
                            analyticsLocations: A,
                        }),
                }),
                R,
            ],
        ];
    return w.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(s.YNO, {
              targetElementRef: y,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.W1t, {
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": g.intl.string(g.t.AXIHpV),
                      children: w.map((e, t) => (0, r.jsx)(s.rXV, { children: e.map((e) => e) }, t)),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      m.br,
                      b(
                          {
                              buttonRef: y,
                              action: "PRESS_OPTIONS",
                              icon: s.jNK,
                              tooltipText: g.intl.string(g.t["UKOtz+"]),
                          },
                          e,
                      ),
                  ),
          });
}
