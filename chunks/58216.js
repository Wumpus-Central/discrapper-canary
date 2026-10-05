n.d(t, { A: () => W });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    o = n(589812),
    u = n(598748),
    s = n(179771),
    d = n(17928),
    c = n(834730),
    f = n(939249),
    h = n(339350),
    p = n(821609),
    g = n(331322),
    m = n(297264),
    w = n(477782),
    _ = n(687966),
    E = n(404778),
    y = n(793574),
    b = n(688810),
    v = n(206828),
    I = n(486610),
    A = n(531913),
    T = n(417270),
    R = n(7437),
    C = n(375708),
    x = n(429913),
    O = n(5960),
    P = n(409626),
    N = n(692969),
    S = n(569926),
    M = n(280450),
    j = n(183555),
    k = n(644346),
    D = n(58266);
function U(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: r,
        showConnectCta: l,
        showReconnectCta: a,
        handleConnect: o,
        disableCTA: u,
        disableCTAActions: s,
        cta: d,
    } = e;
    return !t || u
        ? null
        : (s && ((l = !1), (a = !1), (d = void 0)),
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
                                    children: C.intl.string(C.t.z5K4Uv),
                                }),
                            ],
                        }),
                  l
                      ? (0, i.jsx)(L, {
                            heading: C.intl.string(C.t.UDPRLO),
                            content: C.intl.string(C.t["OW/2al"]),
                            buttons: (0, i.jsx)(p.$, { text: C.intl.string(C.t.S0W8Z5), onClick: o }),
                        })
                      : a
                        ? (0, i.jsx)(L, {
                              heading: C.intl.string(C.t["9WarGY"]),
                              content: C.intl.string(C.t.qgxnKe),
                              buttons: (0, i.jsx)(p.$, { text: C.intl.string(C.t.vD60Pv), onClick: o }),
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
        className: D.lO,
        children: [
            (0, i.jsxs)(g.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(c.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: C.intl.string(C.t.zMUr6Z),
                        }),
                    (0, i.jsx)(m.D, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
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
let W = Object.assign(
    function (e) {
        let {
                user: t,
                widget: n,
                disableCTA: l,
                disableCTAActions: h,
                cta: p,
                subtle: g = !1,
                embedded: m = !1,
                allowEditing: L,
                disableInteraction: W,
                index: J,
                trailingContent: F,
                interactiveLinks: G = !1,
            } = e,
            B = (function (e) {
                let { trackUserProfileAction: t } = (0, j.NJ)(),
                    { user: n, widget: l, cta: o } = e,
                    u = (0, d.bG)([M.default], () => M.default.getId()) === n.id,
                    h = (0, x.h)(l.applicationId),
                    p = h?.getIconURL(16),
                    g = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, S.I)(t);
                        return n;
                    })(h),
                    m = (0, N.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: g?.id,
                        source: P.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: w,
                        hasAlreadyLinked: _,
                        canStartAuthorization: E,
                        startAuthorization: I,
                        token: A,
                    } = (0, v.RD)(h),
                    { analyticsLocations: T } = (0, b.Ay)(y.A.USER_PROFILE_APPLICATION_WIDGET),
                    R = r.useCallback(() => {
                        E &&
                            (t({
                                action: _
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: l.applicationId,
                            }),
                            I({ analyticsLocations: T }));
                    }, [E, _, I, t, l.applicationId, T]),
                    C = null == o && w && !_ && E,
                    O =
                        null == o &&
                        w &&
                        _ &&
                        E &&
                        null != A &&
                        !Array.from(s._.APPLICATION_IDENTITIES_SCOPES).some((e) => A.scopes.includes(e)) &&
                        !A.scopes.includes(s.F.SDK_SOCIAL_LAYER) &&
                        !A.scopes.includes(s.F.SDK_SOCIAL_LAYER_PRESENCE),
                    k = (0, i.jsxs)(i.Fragment, {
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
                    U =
                        null == g
                            ? (0, i.jsx)("div", { className: D.qd, children: k })
                            : (0, i.jsx)(f.D, { className: a()(D.qd, D.vk), onClick: m, children: k });
                return {
                    isCurrentUser: u,
                    game: g,
                    openGameProfileModal: m,
                    handleConnect: R,
                    showConnectCta: C,
                    showReconnectCta: O,
                    headerTitle: U,
                };
            })(e),
            H = (0, A.A)(t.id, n.applicationId),
            $ = e.rendererProps ?? H,
            V = (0, O.A)(n.applicationId, B.isCurrentUser),
            z = (function (e, t) {
                let { pending: n, refresh: r } = (0, R.A)(e);
                return t
                    ? (0, i.jsx)(w.Dr, {
                          id: "application-widget-refresh",
                          label: C.intl.string(C.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: T.RetryIcon },
                          disabled: n,
                          action: r,
                      })
                    : null;
            })(n.applicationId, !0 === V && !0 !== W),
            K =
                G ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? I.hO
                    : void 0,
            q = $.surfaceConfigs[u.m.WIDGET_TOP],
            X = $.surfaceConfigs[u.m.WIDGET_BOTTOM];
        return null == q || null == X
            ? null
            : (0, i.jsxs)(k.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: L,
                  disableInteraction: W,
                  index: J,
                  trailingContent: F,
                  className: a()(D.Y5, { [D.aK]: g, [D.F9]: m }),
                  headerClassName: D.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != B.game
                              ? (0, i.jsx)(w.Dr, {
                                    id: "view-game-profile",
                                    label: "View Game Profile",
                                    leadingAccessory: { type: "icon", icon: _.GameControllerIcon },
                                    action: B.openGameProfileModal,
                                })
                              : null,
                          z,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(o.kH, {
                          ...$,
                          surface: u.m.WIDGET_TOP,
                          surfaceConfig: q,
                          header: B.headerTitle,
                          renderText: K,
                      }),
                      (0, i.jsx)(E.c, {}),
                      (0, i.jsx)(o.kH, { ...$, surface: u.m.WIDGET_BOTTOM, surfaceConfig: X, renderText: K }),
                      (0, i.jsx)(U, {
                          isCurrentUser: B.isCurrentUser,
                          isLoading: $.isLoading,
                          hasData: $.hasIdentity,
                          showConnectCta: B.showConnectCta,
                          showReconnectCta: B.showReconnectCta,
                          handleConnect: B.handleConnect,
                          disableCTA: l,
                          disableCTAActions: !0 === h || !1 !== V,
                          cta: p,
                      }),
                  ],
              });
    },
    { Cta: L },
);
