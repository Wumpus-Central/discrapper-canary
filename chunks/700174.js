n.d(e, { Zt: () => O, yo: () => U });
var i = n(627968),
    l = n(64700),
    r = n(365199),
    a = n(922016),
    s = n(980707),
    o = n(477782),
    c = n(793574),
    u = n(688810),
    d = n(239211),
    m = n(284009),
    x = n.n(m),
    f = n(50268),
    E = n(486503),
    g = n(999291),
    p = n(885386),
    R = n(957565),
    N = n(652215),
    A = n(375708),
    j = n(399476),
    h = n(889460),
    b = n(17928),
    I = n(865116),
    v = n(928658);
let _ = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var C = n(495544),
    y = n(287809),
    T = n(183555),
    P = n(993401),
    G = n(518477);
function S(t) {
    let { user: e, guildId: n, viewProfileItem: m, appContext: P, popoutTargetRef: S, children: O } = t,
        { trackUserProfileAction: U } = (0, T.NJ)(),
        { analyticsLocations: M, newestAnalyticsLocation: k } = (0, u.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU),
        L = {
            action: G.pt.PRESS_OPTIONS,
            icon: r.j,
            tooltipText: A.intl.string(A.t["UKOtz+"]),
            "aria-label": A.intl.string(A.t["UKOtz+"]),
        },
        D = (0, h.A)({
            user: e,
            guildId: n,
            onAction: () => U({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: M }),
        }),
        F = (0, d.A)({
            user: e,
            guildId: n,
            location: k,
            appContext: P,
            onBlock: () => U({ action: "BLOCK", analyticsLocations: M }),
            onIgnore: () => U({ action: "IGNORE", analyticsLocations: M }),
            onUnblock: () => U({ action: "UNBLOCK", analyticsLocations: M }),
        }),
        Q = (0, j.A)({
            user: e,
            guildId: n,
            location: k,
            appContext: P,
            onBlock: () => U({ action: "BLOCK", analyticsLocations: M }),
            onIgnore: () => U({ action: "IGNORE", analyticsLocations: M }),
            onUnignore: () => U({ action: "UNIGNORE", analyticsLocations: M }),
        }),
        w = (function (t) {
            let { user: e, guildId: n, color: l, onAction: r, location: a = c.A.CONTEXT_MENU, appContext: s } = t,
                u = _.useExperiment({ location: a }, { autoTrackExposure: !0 }).enabled,
                d = (0, b.bG)([C.default], () => C.default.getId() === e.id);
            return !u || d || e.isNonUserBot()
                ? null
                : (0, i.jsx)(o.Dr, {
                      id: "report-user",
                      color: l,
                      label: A.intl.string(A.t.A1MM3D),
                      action: () => (0, v.NW)(e, n === N.ME ? void 0 : n, r, s),
                  });
        })({
            user: e,
            guildId: n,
            location: k,
            appContext: P,
            color: "danger",
            onAction: () => U({ action: "REPORT", analyticsLocations: M }),
        }),
        X = (function (t) {
            let { user: e, guildId: n, color: l, onAction: r, appContext: a } = t,
                s = (0, b.bG)([I.Ay], () => I.Ay.get("iar_testing")),
                c = (0, b.bG)([y.default], () => y.default.getCurrentUser());
            return null != c && (e.id === c.id || e.isNonUserBot() || !c.isStaff() || !s)
                ? null
                : (0, i.jsx)(o.Dr, {
                      id: "staff-test-report-user",
                      color: l,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, v.RR)(e, n === N.ME ? void 0 : n, r, a),
                  });
        })({
            user: e,
            guildId: n,
            location: k,
            appContext: P,
            color: "danger",
            onAction: () => U({ action: "REPORT", analyticsLocations: M }),
        }),
        q = [
            [m, D],
            [Q, F, w, X],
            [
                (function (t) {
                    let { user: e, guildId: n, onSuccess: r } = t,
                        a = (0, g.Ay)(e.id, n ?? void 0),
                        s = p.Q_.useSetting(),
                        { tidaWebformEnabled: c } = E.A.useExperiment(
                            { location: "useCopyUserInfoItem" },
                            { autoTrackExposure: !1 },
                        ),
                        u = (0, f.A)({ id: e.id, label: A.intl.string(A.t["/AXYnE"]), onSuccess: r }),
                        d = l.useMemo(() => (null == a ? null : a.getBannerURL({ canAnimate: !0, size: N.XAf })), [a]),
                        m = l.useCallback(() => {
                            (0, R.C)(e.id), r?.();
                        }, [e.id, r]),
                        j = l.useCallback(() => {
                            let t = e.getAvatarURL(n, N.XAf, !0);
                            x()(null != t, "cannot copy null avatar URL"), (0, R.C)(t), r?.();
                        }, [e, n, r]),
                        h = l.useCallback(() => {
                            x()(null != d, "cannot copy null banner URL"), (0, R.C)(d), r?.();
                        }, [d, r]);
                    return !__OVERLAY__ && s && R.p5 && null != e.id
                        ? c
                            ? (0, i.jsxs)(o.Dr, {
                                  id: "copy-user-info",
                                  label: A.intl.string(A.t.QvQeLv),
                                  children: [
                                      (0, i.jsx)(o.Dr, {
                                          id: "copy-user-id",
                                          label: A.intl.string(A.t["/AXYnE"]),
                                          action: m,
                                      }),
                                      (null != e.avatar || e.hasAvatarForGuild(n)) &&
                                          (0, i.jsx)(o.Dr, {
                                              id: "copy-user-avatar-link",
                                              label: A.intl.string(A.t.gERDvM),
                                              action: j,
                                          }),
                                      null != d &&
                                          (0, i.jsx)(o.Dr, {
                                              id: "copy-user-banner-link",
                                              label: A.intl.string(A.t.hsNv0R),
                                              action: h,
                                          }),
                                  ],
                              })
                            : u
                        : null;
                })({ user: e, guildId: n, onSuccess: () => U({ action: "COPY_USER_ID", analyticsLocations: M }) }),
            ],
        ];
    return q.every((t) => t.every((t) => null == t))
        ? null
        : (0, i.jsx)(u.f5, {
              value: M,
              children: (0, i.jsx)(a.Y, {
                  targetElementRef: S,
                  renderPopout: (t) => {
                      let { closePopout: e } = t;
                      return (0, i.jsx)(s.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: e,
                          "aria-label": A.intl.string(A.t.AXIHpV),
                          children: q.map((t, e) => (0, i.jsx)(o.rX, { children: t.map((t) => t) }, e)),
                      });
                  },
                  children: (t) => O({ ...t, ...L }),
              }),
          });
}
function O(t) {
    let e = l.useRef(null);
    return (0, i.jsx)(S, { ...t, popoutTargetRef: e, children: (t) => (0, i.jsx)(P.q3, { buttonRef: e, ...t }) });
}
function U(t) {
    let e = l.useRef(null);
    return (0, i.jsx)(S, { ...t, popoutTargetRef: e, children: (t) => (0, i.jsx)(P.br, { buttonRef: e, ...t }) });
}
