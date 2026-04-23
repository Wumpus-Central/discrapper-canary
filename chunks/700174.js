n.d(t, { Zt: () => M, yo: () => G });
var l = n(627968),
    i = n(64700),
    r = n(365199),
    a = n(922016),
    s = n(550079),
    o = n(477782),
    c = n(793574),
    u = n(688810),
    d = n(239211),
    m = n(284009),
    f = n.n(m),
    x = n(50268),
    g = n(486503),
    A = n(999291),
    p = n(253932),
    E = n(957565),
    h = n(652215),
    N = n(985018),
    R = n(399476),
    b = n(889460),
    v = n(17928),
    j = n(865116),
    I = n(928658);
let _ = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var y = n(495544),
    C = n(287809),
    P = n(183555),
    T = n(993401),
    S = n(518477);
function O(e) {
    let { user: t, guildId: n, viewProfileItem: m, appContext: T, popoutTargetRef: O, children: M } = e,
        { trackUserProfileAction: G } = (0, P.NJ)(),
        { analyticsLocations: U, newestAnalyticsLocation: k } = (0, u.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU),
        D = {
            action: S.pt.PRESS_OPTIONS,
            icon: r.j,
            tooltipText: N.intl.string(N.t["UKOtz+"]),
            "aria-label": N.intl.string(N.t["UKOtz+"]),
        },
        L = (0, b.A)({
            user: t,
            guildId: n,
            onAction: () => G({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: U }),
        }),
        F = (0, d.A)({
            user: t,
            guildId: n,
            location: k,
            appContext: T,
            onBlock: () => G({ action: "BLOCK", analyticsLocations: U }),
            onIgnore: () => G({ action: "IGNORE", analyticsLocations: U }),
            onUnblock: () => G({ action: "UNBLOCK", analyticsLocations: U }),
        }),
        w = (0, R.A)({
            user: t,
            guildId: n,
            location: k,
            appContext: T,
            onBlock: () => G({ action: "BLOCK", analyticsLocations: U }),
            onIgnore: () => G({ action: "IGNORE", analyticsLocations: U }),
            onUnignore: () => G({ action: "UNIGNORE", analyticsLocations: U }),
        }),
        V = (function (e) {
            let { user: t, guildId: n, color: i, onAction: r, location: a = c.A.CONTEXT_MENU, appContext: s } = e,
                u = _.useExperiment({ location: a }, { autoTrackExposure: !0 }).enabled,
                d = (0, v.bG)([y.default], () => y.default.getId() === t.id);
            return !u || d || t.isNonUserBot()
                ? null
                : (0, l.jsx)(o.Dr, {
                      id: "report-user",
                      color: i,
                      label: N.intl.string(N.t.A1MM3D),
                      action: () => (0, I.NW)(t, n === h.ME ? void 0 : n, r, s),
                  });
        })({
            user: t,
            guildId: n,
            location: k,
            appContext: T,
            color: "danger",
            onAction: () => G({ action: "REPORT", analyticsLocations: U }),
        }),
        X = (function (e) {
            let { user: t, guildId: n, color: i, onAction: r, appContext: a } = e,
                s = (0, v.bG)([j.Ay], () => j.Ay.get("iar_testing")),
                c = (0, v.bG)([C.default], () => C.default.getCurrentUser());
            return null != c && (t.id === c.id || t.isNonUserBot() || !c.isStaff() || !s)
                ? null
                : (0, l.jsx)(o.Dr, {
                      id: "staff-test-report-user",
                      color: i,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, I.RR)(t, n === h.ME ? void 0 : n, r, a),
                  });
        })({
            user: t,
            guildId: n,
            location: k,
            appContext: T,
            color: "danger",
            onAction: () => G({ action: "REPORT", analyticsLocations: U }),
        }),
        Q = [
            [m, L],
            [w, F, V, X],
            [
                (function (e) {
                    let { user: t, guildId: n, onSuccess: r } = e,
                        a = (0, A.Ay)(t.id, n ?? void 0),
                        s = p.Q_.useSetting(),
                        { tidaWebformEnabled: c } = g.A.useExperiment(
                            { location: "useCopyUserInfoItem" },
                            { autoTrackExposure: !1 },
                        ),
                        u = (0, x.A)({ id: t.id, label: N.intl.string(N.t["/AXYnE"]), onSuccess: r }),
                        d = i.useMemo(() => (null == a ? null : a.getBannerURL({ canAnimate: !0, size: h.XAf })), [a]),
                        m = i.useCallback(() => {
                            (0, E.C)(t.id), r?.();
                        }, [t.id, r]),
                        R = i.useCallback(() => {
                            let e = t.getAvatarURL(n, h.XAf, !0);
                            f()(null != e, "cannot copy null avatar URL"), (0, E.C)(e), r?.();
                        }, [t, n, r]),
                        b = i.useCallback(() => {
                            f()(null != d, "cannot copy null banner URL"), (0, E.C)(d), r?.();
                        }, [d, r]);
                    return !__OVERLAY__ && s && E.p5 && null != t.id
                        ? c
                            ? (0, l.jsxs)(o.Dr, {
                                  id: "copy-user-info",
                                  label: N.intl.string(N.t.QvQeLv),
                                  children: [
                                      (0, l.jsx)(o.Dr, {
                                          id: "copy-user-id",
                                          label: N.intl.string(N.t["/AXYnE"]),
                                          action: m,
                                      }),
                                      (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                          (0, l.jsx)(o.Dr, {
                                              id: "copy-user-avatar-link",
                                              label: N.intl.string(N.t.gERDvM),
                                              action: R,
                                          }),
                                      null != d &&
                                          (0, l.jsx)(o.Dr, {
                                              id: "copy-user-banner-link",
                                              label: N.intl.string(N.t.hsNv0R),
                                              action: b,
                                          }),
                                  ],
                              })
                            : u
                        : null;
                })({ user: t, guildId: n, onSuccess: () => G({ action: "COPY_USER_ID", analyticsLocations: U }) }),
            ],
        ];
    return Q.every((e) => e.every((e) => null == e))
        ? null
        : (0, l.jsx)(u.f5, {
              value: U,
              children: (0, l.jsx)(a.Y, {
                  targetElementRef: O,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, l.jsx)(s.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": N.intl.string(N.t.AXIHpV),
                          children: Q.map((e, t) => (0, l.jsx)(o.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => M({ ...e, ...D }),
              }),
          });
}
function M(e) {
    let t = i.useRef(null);
    return (0, l.jsx)(O, { ...e, popoutTargetRef: t, children: (e) => (0, l.jsx)(T.q3, { buttonRef: t, ...e }) });
}
function G(e) {
    let t = i.useRef(null);
    return (0, l.jsx)(O, { ...e, popoutTargetRef: t, children: (e) => (0, l.jsx)(T.br, { buttonRef: t, ...e }) });
}
