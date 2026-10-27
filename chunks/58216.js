n.d(t, { A: () => L });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(589812),
    o = n(598748),
    c = n(179771),
    d = n(17928),
    u = n(834730),
    g = n(939249),
    m = n(339350),
    x = n(821609),
    h = n(331322),
    f = n(297264),
    p = n(477782),
    j = n(687966),
    I = n(404778),
    E = n(793574),
    A = n(688810),
    C = n(206828),
    v = n(486610),
    b = n(531913),
    N = n(417270),
    y = n(7437),
    D = n(105292),
    T = n(429913),
    P = n(5960),
    R = n(409626),
    k = n(692969),
    _ = n(454908),
    w = n(280450),
    W = n(183555),
    S = n(644346),
    M = n(58266);
function O(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: l,
        showConnectCta: r,
        showReconnectCta: a,
        handleConnect: s,
        disableCTA: o,
        disableCTAActions: c,
        cta: d,
    } = e;
    return !t || o
        ? null
        : (c && ((r = !1), (a = !1), (d = void 0)),
          (0, i.jsxs)("div", {
              className: M.qr,
              children: [
                  n || l || r || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: M.o8,
                            children: [
                                (0, i.jsx)(m.Q, { size: "xxs" }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: D.intl.string(D.t.z5K4Uv),
                                }),
                            ],
                        }),
                  r
                      ? (0, i.jsx)(G, {
                            heading: D.intl.string(D.t.UDPRLO),
                            content: D.intl.string(D.t["OW/2al"]),
                            buttons: (0, i.jsx)(x.$, { text: D.intl.string(D.t.S0W8Z5), onClick: s }),
                        })
                      : a
                        ? (0, i.jsx)(G, {
                              heading: D.intl.string(D.t["9WarGY"]),
                              content: D.intl.string(D.t.qgxnKe),
                              buttons: (0, i.jsx)(x.$, { text: D.intl.string(D.t.vD60Pv), onClick: s }),
                          })
                        : d,
              ],
          }));
}
function G(e) {
    return (0, i.jsxs)(h.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: M.lO,
        children: [
            (0, i.jsxs)(h.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: D.intl.string(D.t.zMUr6Z),
                        }),
                    (0, i.jsx)(f.D, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
                    (0, i.jsx)(u.E, { variant: "text-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
            (0, i.jsx)(h.B, {
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
                disableCTA: r,
                disableCTAActions: m,
                cta: x,
                subtle: h = !1,
                embedded: f = !1,
                allowEditing: G,
                disableInteraction: L,
                index: F,
                trailingContent: U,
                interactiveLinks: z = !1,
            } = e,
            H = (function (e) {
                let { trackUserProfileAction: t } = (0, W.NJ)(),
                    { user: n, widget: r, cta: s } = e,
                    o = (0, d.bG)([w.default], () => w.default.getId()) === n.id,
                    m = (0, T.h)(r.applicationId),
                    x = m?.getIconURL(16),
                    h = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, _.I)(t);
                        return n;
                    })(m),
                    f = (0, k.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: h?.id,
                        source: R.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: p,
                        hasAlreadyLinked: j,
                        canStartAuthorization: I,
                        startAuthorization: v,
                        token: b,
                    } = (0, C.RD)(m),
                    { analyticsLocations: N } = (0, A.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    y = l.useCallback(() => {
                        I &&
                            (t({
                                action: j
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: r.applicationId,
                            }),
                            v({ analyticsLocations: N }));
                    }, [I, j, v, t, r.applicationId, N]),
                    D = null == s && p && !j && I,
                    P =
                        null == s &&
                        p &&
                        j &&
                        I &&
                        null != b &&
                        !Array.from(c._.APPLICATION_IDENTITIES_SCOPES).some((e) => b.scopes.includes(e)) &&
                        !b.scopes.includes(c.F.SDK_SOCIAL_LAYER) &&
                        !b.scopes.includes(c.F.SDK_SOCIAL_LAYER_PRESENCE),
                    S = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != x
                                ? (0, i.jsx)("img", { className: M.Z2, src: x, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: M.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: m?.name != null ? m.name : (0, i.jsx)("div", { className: M.jC }),
                            }),
                        ],
                    }),
                    O =
                        null == h
                            ? (0, i.jsx)("div", { className: M.qd, children: S })
                            : (0, i.jsx)(g.D, { className: a()(M.qd, M.vk), onClick: f, children: S });
                return {
                    isCurrentUser: o,
                    game: h,
                    openGameProfileModal: f,
                    handleConnect: y,
                    showConnectCta: D,
                    showReconnectCta: P,
                    headerTitle: O,
                };
            })(e),
            q = (0, b.A)(t.id, n.applicationId),
            B = e.rendererProps ?? q,
            K = (0, P.A)(n.applicationId, H.isCurrentUser),
            Y = (function (e, t) {
                let { pending: n, refresh: l } = (0, y.A)(e);
                return t
                    ? (0, i.jsx)(p.Dr, {
                          id: "application-widget-refresh",
                          label: D.intl.string(D.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: N.RetryIcon },
                          disabled: n,
                          action: l,
                      })
                    : null;
            })(n.applicationId, !0 === K && !0 !== L),
            J =
                z ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? v.hO
                    : void 0,
            V = B.surfaceConfigs[o.m.WIDGET_TOP],
            X = B.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == V || null == X
            ? null
            : (0, i.jsxs)(S.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: G,
                  disableInteraction: L,
                  index: F,
                  trailingContent: U,
                  className: a()(M.Y5, { [M.aK]: h, [M.F9]: f }),
                  headerClassName: M.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != H.game
                              ? (0, i.jsx)(p.Dr, {
                                    id: "view-game-profile",
                                    label: D.intl.string(D.t.ajHoOr),
                                    leadingAccessory: { type: "icon", icon: j.GameControllerIcon },
                                    action: H.openGameProfileModal,
                                })
                              : null,
                          Y,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(s.kH, {
                          ...B,
                          surface: o.m.WIDGET_TOP,
                          surfaceConfig: V,
                          header: H.headerTitle,
                          renderText: J,
                      }),
                      (0, i.jsx)(I.c, {}),
                      (0, i.jsx)(s.kH, { ...B, surface: o.m.WIDGET_BOTTOM, surfaceConfig: X, renderText: J }),
                      (0, i.jsx)(O, {
                          isCurrentUser: H.isCurrentUser,
                          isLoading: B.isLoading,
                          hasData: B.hasIdentity,
                          showConnectCta: H.showConnectCta,
                          showReconnectCta: H.showReconnectCta,
                          handleConnect: H.handleConnect,
                          disableCTA: r,
                          disableCTAActions: !0 === m || !1 !== K,
                          cta: x,
                      }),
                  ],
              });
    },
    { Cta: G },
);
