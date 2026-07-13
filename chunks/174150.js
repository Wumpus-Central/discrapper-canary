n.d(t, { Zt: () => Q, yo: () => q });
var i = n(627968),
    l = n(64700),
    r = n(365199),
    s = n(922016),
    a = n(980707),
    o = n(477782),
    c = n(793574),
    u = n(688810),
    d = n(17928),
    m = n(540737),
    x = n(999291),
    f = n(287809),
    E = n(259464);
let g = (0, n(945810).mj)({
    name: "2026-07-shop-this-look",
    kind: "user",
    defaultConfig: { shopThisLookEnabled: !1 },
    variations: { 0: { shopThisLookEnabled: !1 }, 1: { shopThisLookEnabled: !0 } },
});
function p(e) {
    return g.useConfig({ location: e }).shopThisLookEnabled;
}
var h = n(449582),
    R = n(834730),
    N = n(375708),
    j = n(848051);
function A() {
    return (0, i.jsx)("div", {
        className: j.n,
        children: (0, i.jsx)(R.E, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: N.intl.string(N.t.yhEY5G),
        }),
    });
}
var b = n(239211),
    v = n(284009),
    I = n.n(v),
    _ = n(50268),
    C = n(486503),
    y = n(885386),
    T = n(957565),
    k = n(652215),
    P = n(399476),
    G = n(889460),
    O = n(865116),
    S = n(928658);
let U = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var M = n(280450),
    L = n(183555),
    D = n(993401),
    F = n(518477);
function w(e) {
    var t;
    let n,
        g,
        R,
        j,
        v,
        D,
        w,
        Q,
        q,
        X,
        { user: Y, guildId: B, viewProfileItem: V, appContext: $, popoutTargetRef: z, children: K } = e,
        { trackUserProfileAction: J } = (0, L.NJ)(),
        { analyticsLocations: W, newestAnalyticsLocation: Z } = (0, u.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU);
    (t = Y.id),
        (n = p("useMaybeFetchEquippedCollectibleProducts")),
        (g = (0, d.bG)([f.default], () => f.default.getUser(t), [t])),
        (R = (0, x.Ay)(t, B)),
        (j = (0, E.Z)(g, B)),
        (v = (0, h.r)({ user: g, guildId: B })),
        (D = j?.skuId),
        (w = v?.skuId),
        (Q = R?.profileEffect?.skuId),
        (q = R?.profileFrame?.skuId),
        (X = l.useMemo(() => [D, w, Q, q].filter((e) => null != e), [D, w, Q, q])),
        l.useEffect(() => {
            n && 0 !== X.length && (0, m.tu)({ skuIds: X });
        }, [n, X]);
    let H = {
            action: F.pt.PRESS_OPTIONS,
            icon: r.j,
            tooltipText: N.intl.string(N.t["UKOtz+"]),
            "aria-label": N.intl.string(N.t["UKOtz+"]),
        },
        ee = (0, G.A)({
            user: Y,
            guildId: B,
            onAction: () => J({ action: "PRESS_INVITE_TO_SERVER", analyticsLocations: W }),
        }),
        et = (0, b.A)({
            user: Y,
            guildId: B,
            location: Z,
            appContext: $,
            onBlock: () => J({ action: "BLOCK", analyticsLocations: W }),
            onIgnore: () => J({ action: "IGNORE", analyticsLocations: W }),
            onUnblock: () => J({ action: "UNBLOCK", analyticsLocations: W }),
        }),
        en = (0, P.A)({
            user: Y,
            guildId: B,
            location: Z,
            appContext: $,
            onBlock: () => J({ action: "BLOCK", analyticsLocations: W }),
            onIgnore: () => J({ action: "IGNORE", analyticsLocations: W }),
            onUnignore: () => J({ action: "UNIGNORE", analyticsLocations: W }),
        }),
        ei = (function (e) {
            let { user: t, guildId: n, color: l, onAction: r, location: s = c.A.CONTEXT_MENU, appContext: a } = e,
                u = U.useExperiment({ location: s }, { autoTrackExposure: !0 }).enabled,
                m = (0, d.bG)([M.default], () => M.default.getId() === t.id);
            return !u || m || t.isNonUserBot()
                ? null
                : (0, i.jsx)(o.Dr, {
                      id: "report-user",
                      color: l,
                      label: N.intl.string(N.t.A1MM3D),
                      action: () => (0, S.NW)(t, n === k.ME ? void 0 : n, r, a),
                  });
        })({
            user: Y,
            guildId: B,
            location: Z,
            appContext: $,
            color: "danger",
            onAction: () => J({ action: "REPORT", analyticsLocations: W }),
        }),
        el = (function (e) {
            let { user: t, guildId: n, color: l, onAction: r, appContext: s } = e,
                a = (0, d.bG)([O.Ay], () => O.Ay.get("iar_testing")),
                c = (0, d.bG)([f.default], () => f.default.getCurrentUser());
            return null != c && (t.id === c.id || t.isNonUserBot() || !c.isStaff() || !a)
                ? null
                : (0, i.jsx)(o.Dr, {
                      id: "staff-test-report-user",
                      color: l,
                      label: "[STAFF] Test Profile Report",
                      action: () => (0, S.RR)(t, n === k.ME ? void 0 : n, r, s),
                  });
        })({
            user: Y,
            guildId: B,
            location: Z,
            appContext: $,
            color: "danger",
            onAction: () => J({ action: "REPORT", analyticsLocations: W }),
        }),
        er = (function (e) {
            let { user: t, guildId: n, onSuccess: r } = e,
                s = (0, x.Ay)(t.id, n ?? void 0),
                a = y.Q_.useSetting(),
                { tidaWebformEnabled: c } = C.A.useExperiment(
                    { location: "useCopyUserInfoItem" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, _.A)({ id: t.id, label: N.intl.string(N.t["/AXYnE"]), onSuccess: r }),
                d = l.useMemo(() => (null == s ? null : s.getBannerURL({ canAnimate: !0, size: k.XAf })), [s]),
                m = l.useCallback(() => {
                    (0, T.C)(t.id), r?.();
                }, [t.id, r]),
                f = l.useCallback(() => {
                    let e = t.getAvatarURL(n, k.XAf, !0);
                    I()(null != e, "cannot copy null avatar URL"), (0, T.C)(e), r?.();
                }, [t, n, r]),
                E = l.useCallback(() => {
                    I()(null != d, "cannot copy null banner URL"), (0, T.C)(d), r?.();
                }, [d, r]);
            return !__OVERLAY__ && a && T.p5 && null != t.id
                ? c
                    ? (0, i.jsxs)(o.Dr, {
                          id: "copy-user-info",
                          label: N.intl.string(N.t.QvQeLv),
                          children: [
                              (0, i.jsx)(o.Dr, { id: "copy-user-id", label: N.intl.string(N.t["/AXYnE"]), action: m }),
                              (null != t.avatar || t.hasAvatarForGuild(n)) &&
                                  (0, i.jsx)(o.Dr, {
                                      id: "copy-user-avatar-link",
                                      label: N.intl.string(N.t.gERDvM),
                                      action: f,
                                  }),
                              null != d &&
                                  (0, i.jsx)(o.Dr, {
                                      id: "copy-user-banner-link",
                                      label: N.intl.string(N.t.hsNv0R),
                                      action: E,
                                  }),
                          ],
                      })
                    : u
                : null;
        })({ user: Y, guildId: B, onSuccess: () => J({ action: "COPY_USER_ID", analyticsLocations: W }) }),
        es = [
            [
                V,
                p("UserProfileOverflowMenu")
                    ? (0, i.jsx)(o.Dr, {
                          id: "shop-this-look",
                          label: N.intl.string(N.t.xNdRDO),
                          children: (0, i.jsx)(o.Dr, {
                              id: "shop-this-look-placeholder",
                              navigable: !1,
                              render: () => (0, i.jsx)(A, {}),
                          }),
                      })
                    : null,
                ee,
            ],
            [en, et, ei, el],
            [er],
        ];
    return es.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(u.f5, {
              value: W,
              children: (0, i.jsx)(s.Y, {
                  targetElementRef: z,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(a.W, {
                          "data-menu-migrated-auto": !0,
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": N.intl.string(N.t.AXIHpV),
                          children: es.map((e, t) => (0, i.jsx)(o.rX, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => K({ ...e, ...H }),
              }),
          });
}
function Q(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(w, { ...e, popoutTargetRef: t, children: (e) => (0, i.jsx)(D.q3, { buttonRef: t, ...e }) });
}
function q(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(w, { ...e, popoutTargetRef: t, children: (e) => (0, i.jsx)(D.br, { buttonRef: t, ...e }) });
}
