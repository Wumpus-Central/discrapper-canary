n.d(t, { A: () => L });
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
    I = n(793574),
    A = n(688810),
    T = n(206828),
    v = n(486610),
    y = n(531913),
    b = n(417270),
    R = n(7437),
    S = n(375708),
    O = n(429913),
    C = n(627873),
    N = n(409626),
    x = n(692969),
    P = n(569926),
    k = n(280450),
    M = n(183555),
    j = n(644346),
    D = n(58266);
function B(e) {
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
              className: D.qr,
              children: [
                  n || r || l || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: D.o8,
                            children: [
                                (0, i.jsx)(h.Q, { size: "xxs" }),
                                (0, i.jsx)(c.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: S.intl.string(S.t.z5K4Uv),
                                }),
                            ],
                        }),
                  l
                      ? (0, i.jsx)(G, {
                            heading: S.intl.string(S.t.UDPRLO),
                            content: S.intl.string(S.t["OW/2al"]),
                            buttons: (0, i.jsx)(p.$, { text: S.intl.string(S.t.S0W8Z5), onClick: o }),
                        })
                      : a
                        ? (0, i.jsx)(G, {
                              heading: S.intl.string(S.t["9WarGY"]),
                              content: S.intl.string(S.t.qgxnKe),
                              buttons: (0, i.jsx)(p.$, { text: S.intl.string(S.t.vD60Pv), onClick: o }),
                          })
                        : d,
              ],
          }));
}
function G(e) {
    return (0, i.jsxs)(g.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: D.lO,
        children: [
            (0, i.jsxs)(g.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(c.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: S.intl.string(S.t.zMUr6Z),
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
let L = Object.assign(
    function (e) {
        let {
                user: t,
                widget: n,
                disableCTA: l,
                disableCTAActions: h,
                cta: p,
                subtle: g = !1,
                embedded: _ = !1,
                allowEditing: G,
                disableInteraction: L,
                index: W,
                trailingContent: U,
                interactiveLinks: V = !1,
            } = e,
            F = (function (e) {
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
                        source: N.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: m,
                        hasAlreadyLinked: w,
                        canStartAuthorization: E,
                        startAuthorization: v,
                        token: y,
                    } = (0, T.RD)(h),
                    { analyticsLocations: b } = (0, A.Ay)(I.A.USER_PROFILE_APPLICATION_WIDGET),
                    R = r.useCallback(() => {
                        E &&
                            (t({
                                action: w
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: l.applicationId,
                            }),
                            v({ analyticsLocations: b }));
                    }, [E, w, v, t, l.applicationId, b]),
                    S = null == o && m && !w && E,
                    C =
                        null == o &&
                        m &&
                        w &&
                        E &&
                        null != y &&
                        !Array.from(u._.APPLICATION_IDENTITIES_SCOPES).some((e) => y.scopes.includes(e)) &&
                        !y.scopes.includes(u.F.SDK_SOCIAL_LAYER) &&
                        !y.scopes.includes(u.F.SDK_SOCIAL_LAYER_PRESENCE),
                    j = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != p
                                ? (0, i.jsx)("img", { className: D.Z2, src: p, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: D.qP }),
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/medium",
                                children: h?.name != null ? h.name : (0, i.jsx)("div", { className: D.jC }),
                            }),
                        ],
                    }),
                    B =
                        null == g
                            ? (0, i.jsx)("div", { className: D.qd, children: j })
                            : (0, i.jsx)(f.D, { className: a()(D.qd, D.vk), onClick: _, children: j });
                return {
                    isCurrentUser: s,
                    game: g,
                    openGameProfileModal: _,
                    handleConnect: R,
                    showConnectCta: S,
                    showReconnectCta: C,
                    headerTitle: B,
                };
            })(e),
            H = (0, y.A)(t.id, n.applicationId),
            q = (0, C.A)(n.applicationId, F.isCurrentUser),
            J = (function (e, t) {
                let { pending: n, refresh: r } = (0, R.A)(e);
                return t
                    ? (0, i.jsx)(m.Dr, {
                          id: "application-widget-refresh",
                          label: S.intl.string(S.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: b.RetryIcon },
                          disabled: n,
                          action: r,
                      })
                    : null;
            })(n.applicationId, !0 === q && !0 !== L),
            $ =
                V ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? v.hO
                    : void 0,
            z = H.surfaceConfigs[s.m.WIDGET_TOP],
            K = H.surfaceConfigs[s.m.WIDGET_BOTTOM];
        return null == z || null == K
            ? null
            : (0, i.jsxs)(j.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: G,
                  disableInteraction: L,
                  index: W,
                  trailingContent: U,
                  className: a()(D.Y5, { [D.aK]: g, [D.F9]: _ }),
                  headerClassName: D.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != F.game
                              ? (0, i.jsx)(m.Dr, {
                                    id: "view-game-profile",
                                    label: "View Game Profile",
                                    leadingAccessory: { type: "icon", icon: w.GameControllerIcon },
                                    action: F.openGameProfileModal,
                                })
                              : null,
                          J,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(o.kH, {
                          ...H,
                          surface: s.m.WIDGET_TOP,
                          surfaceConfig: z,
                          header: F.headerTitle,
                          renderText: $,
                      }),
                      (0, i.jsx)(E.c, {}),
                      (0, i.jsx)(o.kH, { ...H, surface: s.m.WIDGET_BOTTOM, surfaceConfig: K, renderText: $ }),
                      (0, i.jsx)(B, {
                          isCurrentUser: F.isCurrentUser,
                          isLoading: H.isLoading,
                          hasData: H.hasIdentity,
                          showConnectCta: F.showConnectCta,
                          showReconnectCta: F.showReconnectCta,
                          handleConnect: F.handleConnect,
                          disableCTA: l,
                          disableCTAActions: !0 === h || !1 !== q,
                          cta: p,
                      }),
                  ],
              });
    },
    { Cta: G },
);
