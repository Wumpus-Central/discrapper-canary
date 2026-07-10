n.d(e, { Zt: () => L, yo: () => D });
var i = n(627968),
    l = n(64700),
    r = n(365199),
    s = n(922016),
    a = n(980707),
    o = n(477782),
    c = n(793574),
    u = n(688810);
let d = (0, n(945810).mj)({
    name: "2026-07-shop-this-look",
    kind: "user",
    defaultConfig: { shopThisLookEnabled: !1 },
    variations: { 0: { shopThisLookEnabled: !1 }, 1: { shopThisLookEnabled: !0 } },
});
var m = n(834730),
    x = n(375708),
    f = n(35059);
function E() {
    return (0, i.jsx)("div", {
        className: f.n,
        children: (0, i.jsx)(m.E, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: x.intl.string(x.t.yhEY5G),
        }),
    });
}
var g = n(239211),
    p = n(284009),
    h = n.n(p),
    R = n(50268),
    N = n(486503),
    j = n(999291),
    A = n(885386),
    b = n(957565),
    v = n(652215),
    I = n(399476),
    _ = n(889460),
    C = n(17928),
    y = n(865116),
    T = n(928658);
let P = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var G = n(280450),
    O = n(287809),
    k = n(183555),
    S = n(993401),
    U = n(518477);
function M(t) {
    let { user: e, guildId: n, viewProfileItem: m, appContext: f, popoutTargetRef: p, children: S } = t,
        { trackUserProfileAction: M } = (0, k.NJ)(),
        { analyticsLocations: L, newestAnalyticsLocation: D } = (0, u.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU),
        F = {
            action: U.pt.PRESS_OPTIONS,
            icon: r.j,
            tooltipText: x.intl.string(x.t["UKOtz+"]),
            "aria-label": x.intl.string(x.t["UKOtz+"]),
        },
        w = (0, _.A)({
            user: e,
            guildId: n,
            onAction: () => M({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: L }),
        }),
        Q = (0, g.A)({
            user: e,
            guildId: n,
            location: D,
            appContext: f,
            onBlock: () => M({ action: "BLOCK", analyticsLocations: L }),
            onIgnore: () => M({ action: "IGNORE", analyticsLocations: L }),
            onUnblock: () => M({ action: "UNBLOCK", analyticsLocations: L }),
        }),
        X = (0, I.A)({
            user: e,
            guildId: n,
            location: D,
            appContext: f,
            onBlock: () => M({ action: "BLOCK", analyticsLocations: L }),
            onIgnore: () => M({ action: "IGNORE", analyticsLocations: L }),
            onUnignore: () => M({ action: "UNIGNORE", analyticsLocations: L }),
        }),
        Y = (function (t) {
            let { user: e, guildId: n, color: l, onAction: r, location: s = c.A.CONTEXT_MENU, appContext: a } = t,
                u = P.useExperiment({ location: s }, { autoTrackExposure: !0 }).enabled,
                d = (0, C.bG)([G.default], () => G.default.getId() === e.id);
            return !u || d || e.isNonUserBot()
                ? null
                : (0, i.jsx)(o.Dr, {
                      id: "report-user",
                      color: l,
                      label: x.intl.string(x.t.A1MM3D),
                      action: () => (0, T.NW)(e, n === v.ME ? void 0 : n, r, a),
                  });
        })({
            user: e,
            guildId: n,
            location: D,
            appContext: f,
            color: "danger",
            onAction: () => M({ action: "REPORT", analyticsLocations: L }),
        }),
        q = (function (t) {
            let { user: e, guildId: n, color: l, onAction: r, appContext: s } = t,
                a = (0, C.bG)([y.Ay], () => y.Ay.get("iar_testing")),
                c = (0, C.bG)([O.default], () => O.default.getCurrentUser());
            return null != c && (e.id === c.id || e.isNonUserBot() || !c.isStaff() || !a)
                ? null
                : (0, i.jsx)(o.Dr, {
                      id: "staff-test-report-user",
                      color: l,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, T.RR)(e, n === v.ME ? void 0 : n, r, s),
                  });
        })({
            user: e,
            guildId: n,
            location: D,
            appContext: f,
            color: "danger",
            onAction: () => M({ action: "REPORT", analyticsLocations: L }),
        }),
        B = (function (t) {
            let { user: e, guildId: n, onSuccess: r } = t,
                s = (0, j.Ay)(e.id, n ?? void 0),
                a = A.Q_.useSetting(),
                { tidaWebformEnabled: c } = N.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, R.A)({ id: e.id, label: x.intl.string(x.t["/AXYnE"]), onSuccess: r }),
                d = l.useMemo(() => (null == s ? null : s.getBannerURL({ canAnimate: !0, size: v.XAf })), [s]),
                m = l.useCallback(() => {
                    (0, b.C)(e.id), r?.();
                }, [e.id, r]),
                f = l.useCallback(() => {
                    let t = e.getAvatarURL(n, v.XAf, !0);
                    h()(null != t, "cannot copy null avatar URL"), (0, b.C)(t), r?.();
                }, [e, n, r]),
                E = l.useCallback(() => {
                    h()(null != d, "cannot copy null banner URL"), (0, b.C)(d), r?.();
                }, [d, r]);
            return !__OVERLAY__ && a && b.p5 && null != e.id
                ? c
                    ? (0, i.jsxs)(o.Dr, {
                          id: "copy-user-info",
                          label: x.intl.string(x.t.QvQeLv),
                          children: [
                              (0, i.jsx)(o.Dr, { id: "copy-user-id", label: x.intl.string(x.t["/AXYnE"]), action: m }),
                              (null != e.avatar || e.hasAvatarForGuild(n)) &&
                                  (0, i.jsx)(o.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: x.intl.string(x.t.gERDvM),
                                      action: f,
                                  }),
                              null != d &&
                                  (0, i.jsx)(o.Dr, {
                                      id: "copy-user-banner-link",
                                      label: x.intl.string(x.t.hsNv0R),
                                      action: E,
                                  }),
                          ],
                      })
                    : u
                : null;
        })({ user: e, guildId: n, onSuccess: () => M({ action: "COPY_USER_ID", analyticsLocations: L }) }),
        V = [
            [
                m,
                d.useConfig({ location: "UserProfileOverflowMenu" }).shopThisLookEnabled
                    ? (0, i.jsx)(o.Dr, {
                          id: "shop-this-look",
                          label: x.intl.string(x.t.xNdRDO),
                          children: (0, i.jsx)(o.Dr, {
                              id: "shop-this-look-placeholder",
                              navigable: !1,
                              render: () => (0, i.jsx)(E, {}),
                          }),
                      })
                    : null,
                w,
            ],
            [X, Q, Y, q],
            [B],
        ];
    return V.every((t) => t.every((t) => null == t))
        ? null
        : (0, i.jsx)(u.f5, {
              value: L,
              children: (0, i.jsx)(s.Y, {
                  targetElementRef: p,
                  renderPopout: (t) => {
                      let { closePopout: e } = t;
                      return (0, i.jsx)(a.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: e,
                          "aria-label": x.intl.string(x.t.AXIHpV),
                          children: V.map((t, e) => (0, i.jsx)(o.rX, { children: t.map((t) => t) }, e)),
                      });
                  },
                  children: (t) => S({ ...t, ...F }),
              }),
          });
}
function L(t) {
    let e = l.useRef(null);
    return (0, i.jsx)(M, { ...t, popoutTargetRef: e, children: (t) => (0, i.jsx)(S.q3, { buttonRef: e, ...t }) });
}
function D(t) {
    let e = l.useRef(null);
    return (0, i.jsx)(M, { ...t, popoutTargetRef: e, children: (t) => (0, i.jsx)(S.br, { buttonRef: e, ...t }) });
}
