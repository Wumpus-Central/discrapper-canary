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
    w = n(477782),
    m = n(687966),
    E = n(404778),
    A = n(793574),
    v = n(688810),
    y = n(206828),
    T = n(486610),
    C = n(531913),
    I = n(417270),
    b = n(7437),
    R = n(375708),
    O = n(429913),
    N = n(5960),
    S = n(409626),
    P = n(692969),
    x = n(569926),
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
            B = (function (e) {
                let { trackUserProfileAction: t } = (0, M.NJ)(),
                    { user: n, widget: l, cta: o } = e,
                    s = (0, d.bG)([k.default], () => k.default.getId()) === n.id,
                    h = (0, O.h)(l.applicationId),
                    p = h?.getIconURL(16),
                    g = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, x.I)(t);
                        return n;
                    })(h),
                    _ = (0, P.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: g?.id,
                        source: S.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: w,
                        hasAlreadyLinked: m,
                        canStartAuthorization: E,
                        startAuthorization: T,
                        token: C,
                    } = (0, y.RD)(h),
                    { analyticsLocations: I } = (0, v.Ay)(A.A.USER_PROFILE_APPLICATION_WIDGET),
                    b = r.useCallback(() => {
                        E &&
                            (t({
                                action: m
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: l.applicationId,
                            }),
                            T({ analyticsLocations: I }));
                    }, [E, m, T, t, l.applicationId, I]),
                    R = null == o && w && !m && E,
                    N =
                        null == o &&
                        w &&
                        m &&
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
                    handleConnect: b,
                    showConnectCta: R,
                    showReconnectCta: N,
                    headerTitle: D,
                };
            })(e),
            G = (0, C.A)(t.id, n.applicationId),
            q = e.rendererProps ?? G,
            $ = (0, N.A)(n.applicationId, B.isCurrentUser),
            V = (function (e, t) {
                let { pending: n, refresh: r } = (0, b.A)(e);
                return t
                    ? (0, i.jsx)(w.Dr, {
                          id: "application-widget-refresh",
                          label: R.intl.string(R.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: I.RetryIcon },
                          disabled: n,
                          action: r,
                      })
                    : null;
            })(n.applicationId, !0 === $ && !0 !== J),
            z =
                H ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? T.hO
                    : void 0,
            K = q.surfaceConfigs[s.m.WIDGET_TOP],
            Y = q.surfaceConfigs[s.m.WIDGET_BOTTOM];
        return null == K || null == Y
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
                          null != B.game
                              ? (0, i.jsx)(w.Dr, {
                                    id: "view-game-profile",
                                    label: "View Game Profile",
                                    leadingAccessory: { type: "icon", icon: m.GameControllerIcon },
                                    action: B.openGameProfileModal,
                                })
                              : null,
                          V,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(o.kH, {
                          ...q,
                          surface: s.m.WIDGET_TOP,
                          surfaceConfig: K,
                          header: B.headerTitle,
                          renderText: z,
                      }),
                      (0, i.jsx)(E.c, {}),
                      (0, i.jsx)(o.kH, { ...q, surface: s.m.WIDGET_BOTTOM, surfaceConfig: Y, renderText: z }),
                      (0, i.jsx)(D, {
                          isCurrentUser: B.isCurrentUser,
                          isLoading: q.isLoading,
                          hasData: q.hasIdentity,
                          showConnectCta: B.showConnectCta,
                          showReconnectCta: B.showReconnectCta,
                          handleConnect: B.handleConnect,
                          disableCTA: l,
                          disableCTAActions: !0 === h || !1 !== $,
                          cta: p,
                      }),
                  ],
              });
    },
    { Cta: L },
);
