n.d(t, { A: () => J });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    o = n(589812),
    s = n(598748),
    u = n(179771),
    d = n(17928),
    c = n(834730),
    f = n(939249),
    h = n(339350),
    p = n(821609),
    g = n(331322),
    _ = n(297264),
    m = n(477782),
    w = n(687966),
    E = n(404778),
    A = n(793574),
    v = n(688810),
    y = n(206828),
    T = n(486610),
    C = n(531913),
    b = n(417270),
    I = n(7437),
    R = n(375708),
    O = n(429913),
    N = n(5960),
    S = n(409626),
    x = n(692969),
    P = n(569926),
    k = n(280450),
    M = n(183555),
    U = n(644346),
    j = n(58266);
function D(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: r,
        showConnectCta: l,
        showReconnectCta: a,
        handleConnect: o,
        disableCTA: s,
        disableCTAActions: u,
        cta: d,
    } = e;
    return !t || s
        ? null
        : (u && ((l = !1), (a = !1), (d = void 0)),
          (0, i.jsxs)("div", {
              className: j.qr,
              children: [
                  n || r || l || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: j.o8,
                            children: [
                                (0, i.jsx)(h.Q, { size: "xxs" }),
                                (0, i.jsx)(c.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: R.intl.string(R.t.z5K4Uv),
                                }),
                            ],
                        }),
                  l
                      ? (0, i.jsx)(L, {
                            heading: R.intl.string(R.t.UDPRLO),
                            content: R.intl.string(R.t["OW/2al"]),
                            buttons: (0, i.jsx)(p.$, { text: R.intl.string(R.t.S0W8Z5), onClick: o }),
                        })
                      : a
                        ? (0, i.jsx)(L, {
                              heading: R.intl.string(R.t["9WarGY"]),
                              content: R.intl.string(R.t.qgxnKe),
                              buttons: (0, i.jsx)(p.$, { text: R.intl.string(R.t.vD60Pv), onClick: o }),
                          })
                        : d,
              ],
          }));
}
function L(e) {
    return (0, i.jsxs)(g.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: j.lO,
        children: [
            (0, i.jsxs)(g.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(c.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: R.intl.string(R.t.zMUr6Z),
                        }),
                    (0, i.jsx)(_.D, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
                    (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
            (0, i.jsx)(g.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                justify: "end",
                fullWidth: !1,
                children: e.buttons,
            }),
        ],
    });
}
let J = Object.assign(
    function (e) {
        let {
                user: t,
                widget: n,
                disableCTA: l,
                disableCTAActions: h,
                cta: p,
                subtle: g = !1,
                embedded: _ = !1,
                allowEditing: L,
                disableInteraction: J,
                index: W,
                trailingContent: F,
                interactiveLinks: H = !1,
            } = e,
            G = (function (e) {
                let { trackUserProfileAction: t } = (0, M.NJ)(),
                    { user: n, widget: l, cta: o } = e,
                    s = (0, d.bG)([k.default], () => k.default.getId()) === n.id,
                    h = (0, O.h)(l.applicationId),
                    p = h?.getIconURL(16),
                    g = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, P.I)(t);
                        return n;
                    })(h),
                    _ = (0, x.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: g?.id,
                        source: S.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: m,
                        hasAlreadyLinked: w,
                        canStartAuthorization: E,
                        startAuthorization: T,
                        token: C,
                    } = (0, y.RD)(h),
                    { analyticsLocations: b } = (0, v.Ay)(A.A.USER_PROFILE_APPLICATION_WIDGET),
                    I = r.useCallback(() => {
                        E &&
                            (t({
                                action: w
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: l.applicationId,
                            }),
                            T({ analyticsLocations: b }));
                    }, [E, w, T, t, l.applicationId, b]),
                    R = null == o && m && !w && E,
                    N =
                        null == o &&
                        m &&
                        w &&
                        E &&
                        null != C &&
                        !Array.from(u._.APPLICATION_IDENTITIES_SCOPES).some((e) => C.scopes.includes(e)) &&
                        !C.scopes.includes(u.F.SDK_SOCIAL_LAYER) &&
                        !C.scopes.includes(u.F.SDK_SOCIAL_LAYER_PRESENCE),
                    U = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != p
                                ? (0, i.jsx)("img", { className: j.Z2, src: p, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: j.qP }),
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/medium",
                                children: h?.name != null ? h.name : (0, i.jsx)("div", { className: j.jC }),
                            }),
                        ],
                    }),
                    D =
                        null == g
                            ? (0, i.jsx)("div", { className: j.qd, children: U })
                            : (0, i.jsx)(f.D, { className: a()(j.qd, j.vk), onClick: _, children: U });
                return {
                    isCurrentUser: s,
                    game: g,
                    openGameProfileModal: _,
                    handleConnect: I,
                    showConnectCta: R,
                    showReconnectCta: N,
                    headerTitle: D,
                };
            })(e),
            B = (0, C.A)(t.id, n.applicationId),
            q = (0, N.A)(n.applicationId, G.isCurrentUser),
            $ = (function (e, t) {
                let { pending: n, refresh: r } = (0, I.A)(e);
                return t
                    ? (0, i.jsx)(m.Dr, {
                          id: "application-widget-refresh",
                          label: R.intl.string(R.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: b.RetryIcon },
                          disabled: n,
                          action: r,
                      })
                    : null;
            })(n.applicationId, !0 === q && !0 !== J),
            V =
                H ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? T.hO
                    : void 0,
            z = B.surfaceConfigs[s.m.WIDGET_TOP],
            K = B.surfaceConfigs[s.m.WIDGET_BOTTOM];
        return null == z || null == K
            ? null
            : (0, i.jsxs)(U.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: L,
                  disableInteraction: J,
                  index: W,
                  trailingContent: F,
                  className: a()(j.Y5, { [j.aK]: g, [j.F9]: _ }),
                  headerClassName: j.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != G.game
                              ? (0, i.jsx)(m.Dr, {
                                    id: "view-game-profile",
                                    label: "View Game Profile",
                                    leadingAccessory: { type: "icon", icon: w.GameControllerIcon },
                                    action: G.openGameProfileModal,
                                })
                              : null,
                          $,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(o.kH, {
                          ...B,
                          surface: s.m.WIDGET_TOP,
                          surfaceConfig: z,
                          header: G.headerTitle,
                          renderText: V,
                      }),
                      (0, i.jsx)(E.c, {}),
                      (0, i.jsx)(o.kH, { ...B, surface: s.m.WIDGET_BOTTOM, surfaceConfig: K, renderText: V }),
                      (0, i.jsx)(D, {
                          isCurrentUser: G.isCurrentUser,
                          isLoading: B.isLoading,
                          hasData: B.hasIdentity,
                          showConnectCta: G.showConnectCta,
                          showReconnectCta: G.showReconnectCta,
                          handleConnect: G.handleConnect,
                          disableCTA: l,
                          disableCTAActions: !0 === h || !1 !== q,
                          cta: p,
                      }),
                  ],
              });
    },
    { Cta: L },
);
