n.d(t, { A: () => M });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    s = n(589812),
    o = n(598748),
    c = n(179771),
    d = n(17928),
    u = n(834730),
    g = n(939249),
    f = n(339350),
    h = n(821609),
    m = n(331322),
    x = n(297264),
    p = n(477782),
    I = n(687966),
    j = n(404778),
    E = n(793574),
    A = n(688810),
    v = n(206828),
    C = n(486610),
    b = n(531913),
    y = n(417270),
    N = n(7437),
    D = n(105292),
    T = n(429913),
    _ = n(5960),
    P = n(409626),
    R = n(692969),
    k = n(454908),
    w = n(280450),
    W = n(183555),
    S = n(644346),
    O = n(58266);
function G(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: r,
        showConnectCta: l,
        showReconnectCta: a,
        handleConnect: s,
        disableCTA: o,
        disableCTAActions: c,
        cta: d,
    } = e;
    return !t || o
        ? null
        : (c && ((l = !1), (a = !1), (d = void 0)),
          (0, i.jsxs)("div", {
              className: O.qr,
              children: [
                  n || r || l || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: O.o8,
                            children: [
                                (0, i.jsx)(f.Q, { size: "xxs" }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: D.intl.string(D.t.z5K4Uv),
                                }),
                            ],
                        }),
                  l
                      ? (0, i.jsx)(L, {
                            heading: D.intl.string(D.t.UDPRLO),
                            content: D.intl.string(D.t["OW/2al"]),
                            buttons: (0, i.jsx)(h.$, { text: D.intl.string(D.t.S0W8Z5), onClick: s }),
                        })
                      : a
                        ? (0, i.jsx)(L, {
                              heading: D.intl.string(D.t["9WarGY"]),
                              content: D.intl.string(D.t.qgxnKe),
                              buttons: (0, i.jsx)(h.$, { text: D.intl.string(D.t.vD60Pv), onClick: s }),
                          })
                        : d,
              ],
          }));
}
function L(e) {
    return (0, i.jsxs)(m.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: O.lO,
        children: [
            (0, i.jsxs)(m.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: D.intl.string(D.t.zMUr6Z),
                        }),
                    (0, i.jsx)(x.D, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
                    (0, i.jsx)(u.E, { variant: "text-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
            (0, i.jsx)(m.B, {
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
let M = Object.assign(
    function (e) {
        let {
                user: t,
                widget: n,
                disableCTA: l,
                disableCTAActions: f,
                cta: h,
                subtle: m = !1,
                embedded: x = !1,
                allowEditing: L,
                disableInteraction: M,
                index: U,
                trailingContent: F,
                interactiveLinks: z = !1,
            } = e,
            B = (function (e) {
                let { trackUserProfileAction: t } = (0, W.NJ)(),
                    { user: n, widget: l, cta: s } = e,
                    o = (0, d.bG)([w.default], () => w.default.getId()) === n.id,
                    f = (0, T.h)(l.applicationId),
                    h = f?.getIconURL(16),
                    m = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, k.I)(t);
                        return n;
                    })(f),
                    x = (0, R.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: m?.id,
                        source: P.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: p,
                        hasAlreadyLinked: I,
                        canStartAuthorization: j,
                        startAuthorization: C,
                        token: b,
                    } = (0, v.RD)(f),
                    { analyticsLocations: y } = (0, A.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    N = r.useCallback(() => {
                        j &&
                            (t({
                                action: I
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: l.applicationId,
                            }),
                            C({ analyticsLocations: y }));
                    }, [j, I, C, t, l.applicationId, y]),
                    D = null == s && p && !I && j,
                    _ =
                        null == s &&
                        p &&
                        I &&
                        j &&
                        null != b &&
                        !Array.from(c._.APPLICATION_IDENTITIES_SCOPES).some((e) => b.scopes.includes(e)) &&
                        !b.scopes.includes(c.F.SDK_SOCIAL_LAYER) &&
                        !b.scopes.includes(c.F.SDK_SOCIAL_LAYER_PRESENCE),
                    S = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != h
                                ? (0, i.jsx)("img", { className: O.Z2, src: h, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: O.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: f?.name != null ? f.name : (0, i.jsx)("div", { className: O.jC }),
                            }),
                        ],
                    }),
                    G =
                        null == m
                            ? (0, i.jsx)("div", { className: O.qd, children: S })
                            : (0, i.jsx)(g.D, { className: a()(O.qd, O.vk), onClick: x, children: S });
                return {
                    isCurrentUser: o,
                    game: m,
                    openGameProfileModal: x,
                    handleConnect: N,
                    showConnectCta: D,
                    showReconnectCta: _,
                    headerTitle: G,
                };
            })(e),
            H = (0, b.A)(t.id, n.applicationId),
            K = e.rendererProps ?? H,
            Y = (0, _.A)(n.applicationId, B.isCurrentUser),
            q = (function (e, t) {
                let { pending: n, refresh: r } = (0, N.A)(e);
                return t
                    ? (0, i.jsx)(p.Dr, {
                          id: "application-widget-refresh",
                          label: D.intl.string(D.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: y.RetryIcon },
                          disabled: n,
                          action: r,
                      })
                    : null;
            })(n.applicationId, !0 === Y && !0 !== M),
            J =
                z ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? C.hO
                    : void 0,
            V = K.surfaceConfigs[o.m.WIDGET_TOP],
            Z = K.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == V || null == Z
            ? null
            : (0, i.jsxs)(S.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: L,
                  disableInteraction: M,
                  index: U,
                  trailingContent: F,
                  className: a()(O.Y5, { [O.aK]: m, [O.F9]: x }),
                  headerClassName: O.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != B.game
                              ? (0, i.jsx)(p.Dr, {
                                    id: "view-game-profile",
                                    label: "View Game Profile",
                                    leadingAccessory: { type: "icon", icon: I.GameControllerIcon },
                                    action: B.openGameProfileModal,
                                })
                              : null,
                          q,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(s.kH, {
                          ...K,
                          surface: o.m.WIDGET_TOP,
                          surfaceConfig: V,
                          header: B.headerTitle,
                          renderText: J,
                      }),
                      (0, i.jsx)(j.c, {}),
                      (0, i.jsx)(s.kH, { ...K, surface: o.m.WIDGET_BOTTOM, surfaceConfig: Z, renderText: J }),
                      (0, i.jsx)(G, {
                          isCurrentUser: B.isCurrentUser,
                          isLoading: K.isLoading,
                          hasData: K.hasIdentity,
                          showConnectCta: B.showConnectCta,
                          showReconnectCta: B.showReconnectCta,
                          handleConnect: B.handleConnect,
                          disableCTA: l,
                          disableCTAActions: !0 === f || !1 !== Y,
                          cta: h,
                      }),
                  ],
              });
    },
    { Cta: L },
);
