t.d(n, { A: () => L });
var i = t(477900),
    l = t(582128),
    r = t(503698),
    a = t.n(r),
    s = t(886100),
    o = t(598748),
    d = t(179771),
    c = t(855986),
    u = t(834730),
    g = t(939249),
    m = t(339350),
    h = t(821609),
    x = t(331322),
    f = t(534514),
    p = t(477782),
    j = t(687966),
    I = t(404778),
    E = t(793574),
    b = t(688810),
    A = t(724302),
    C = t(284460),
    v = t(531913),
    y = t(417270),
    N = t(872344),
    D = t(792996),
    T = t(429913),
    P = t(5960),
    R = t(409626),
    k = t(692969),
    _ = t(454908),
    w = t(46653),
    W = t(183555),
    O = t(40989),
    S = t(58266);
function M(e) {
    let {
        isCurrentUser: n,
        isLoading: t,
        hasData: l,
        showConnectCta: r,
        showReconnectCta: a,
        handleConnect: s,
        disableCTA: o,
        disableCTAActions: d,
        cta: c,
    } = e;
    return !n || o
        ? null
        : (d && ((r = !1), (a = !1), (c = void 0)),
          (0, i.jsxs)("div", {
              className: S.qr,
              children: [
                  t || l || r || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: S.o8,
                            children: [
                                (0, i.jsx)(m.HourglassIcon, { size: "xxs" }),
                                (0, i.jsx)(u.E, {
                                    variant: "body-sm/medium",
                                    color: "text-subtle",
                                    children: D.intl.string(D.t.z5K4Uv),
                                }),
                            ],
                        }),
                  r
                      ? (0, i.jsx)(G, {
                            heading: D.intl.string(D.t.UDPRLO),
                            content: D.intl.string(D.t["OW/2al"]),
                            buttons: (0, i.jsx)(h.$, { text: D.intl.string(D.t.S0W8Z5), onClick: s }),
                        })
                      : a
                        ? (0, i.jsx)(G, {
                              heading: D.intl.string(D.t["9WarGY"]),
                              content: D.intl.string(D.t.qgxnKe),
                              buttons: (0, i.jsx)(h.$, { text: D.intl.string(D.t.vD60Pv), onClick: s }),
                          })
                        : c,
              ],
          }));
}
function G(e) {
    let n = (0, i.jsxs)(x.B, {
        gap: 4,
        children: [
            e.showSuggestedForYou &&
                (0, i.jsx)(u.E, {
                    variant: "body-xs/medium",
                    color: "text-default",
                    children: D.intl.string(D.t.zMUr6Z),
                }),
            (0, i.jsx)(f.D, { variant: "heading-xs/medium", color: "text-default", children: e.heading }),
            (0, i.jsx)(u.E, { variant: "body-xs/normal", color: "text-subtle", children: e.content }),
            e.attribution,
        ],
    });
    return null != e.icon
        ? (0, i.jsxs)(x.B, {
              gap: 12,
              padding: 12,
              fullWidth: !1,
              className: S.lO,
              children: [
                  (0, i.jsxs)(x.B, { direction: "horizontal", gap: 12, align: "start", children: [e.icon, n] }),
                  (0, i.jsx)(x.B, {
                      direction: "horizontal",
                      gap: 12,
                      align: "center",
                      justify: "end",
                      children: e.buttons,
                  }),
              ],
          })
        : (0, i.jsxs)(x.B, {
              direction: "horizontal",
              gap: 24,
              padding: 12,
              fullWidth: !1,
              className: S.lO,
              children: [
                  n,
                  (0, i.jsx)(x.B, {
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
                user: n,
                widget: t,
                disableCTA: r,
                disableCTAActions: m,
                exclusiveCTA: h = !1,
                cta: x,
                subtle: f = !1,
                embedded: G = !1,
                allowEditing: L,
                disableInteraction: F,
                index: U,
                trailingContent: z,
                interactiveLinks: H = !1,
            } = e,
            B = (function (e) {
                let { trackUserProfileAction: n } = (0, W.NJ)(),
                    { user: t, widget: r, cta: s } = e,
                    o = (0, c.bG)([w.default], () => w.default.getId()) === t.id,
                    m = (0, T.h)(r.applicationId),
                    h = m?.getIconURL(16),
                    x = (function (e) {
                        let n = e?.getCanonicalGameId(),
                            { data: t } = (0, _.I)(n);
                        return t;
                    })(m),
                    f = (0, k.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: x?.id,
                        source: R.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: t.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: p,
                        hasAlreadyLinked: j,
                        canStartAuthorization: I,
                        startAuthorization: C,
                        token: v,
                    } = (0, A.RD)(m),
                    { analyticsLocations: y } = (0, b.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    N = l.useCallback(() => {
                        I &&
                            (n({
                                action: j
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: r.applicationId,
                            }),
                            C({ analyticsLocations: y }));
                    }, [I, j, C, n, r.applicationId, y]),
                    D = null == s && p && !j && I,
                    P =
                        null == s &&
                        p &&
                        j &&
                        I &&
                        null != v &&
                        !Array.from(d._.APPLICATION_IDENTITIES_SCOPES).some((e) => v.scopes.includes(e)) &&
                        !v.scopes.includes(d.F.SDK_SOCIAL_LAYER) &&
                        !v.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE),
                    O = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != h
                                ? (0, i.jsx)("img", { className: S.Z2, src: h, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: S.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "body-sm/medium",
                                children: m?.name != null ? m.name : (0, i.jsx)("div", { className: S.jC }),
                            }),
                        ],
                    }),
                    M =
                        null == x
                            ? (0, i.jsx)("div", { className: S.qd, children: O })
                            : (0, i.jsx)(g.D, { className: a()(S.qd, S.vk), onClick: f, children: O });
                return {
                    isCurrentUser: o,
                    game: x,
                    openGameProfileModal: f,
                    handleConnect: N,
                    showConnectCta: D,
                    showReconnectCta: P,
                    headerTitle: M,
                };
            })(e),
            q = (0, v.A)(n.id, t.applicationId),
            K = e.rendererProps ?? q,
            Y = (0, P.A)(t.applicationId, B.isCurrentUser),
            J = (function (e, n) {
                let { pending: t, refresh: l } = (0, N.A)(e);
                return n
                    ? (0, i.jsx)(p.Dr, {
                          id: "application-widget-refresh",
                          label: D.intl.string(D.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: y.RetryIcon },
                          disabled: t,
                          action: l,
                      })
                    : null;
            })(t.applicationId, !0 === Y && !0 !== F),
            V =
                H ||
                (function (e) {
                    let { disableInteraction: n } = e;
                    return !0 !== n;
                })(e)
                    ? C.hO
                    : void 0,
            X = K.surfaceConfigs[o.m.WIDGET_TOP],
            Z = K.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == X || null == Z
            ? null
            : (0, i.jsxs)(O.A, {
                  userId: n.id,
                  widget: t,
                  allowEditing: L,
                  disableInteraction: F,
                  index: U,
                  trailingContent: z,
                  className: a()(S.Y5, { [S.aK]: f, [S.F9]: G }),
                  headerClassName: S.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != B.game
                              ? (0, i.jsx)(p.Dr, {
                                    id: "view-game-profile",
                                    label: D.intl.string(D.t.ajHoOr),
                                    leadingAccessory: { type: "icon", icon: j.GameControllerIcon },
                                    action: B.openGameProfileModal,
                                })
                              : null,
                          J,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(s.kH, {
                          ...K,
                          surface: o.m.WIDGET_TOP,
                          surfaceConfig: X,
                          header: B.headerTitle,
                          renderText: V,
                      }),
                      (0, i.jsx)(I.c, {}),
                      (0, i.jsx)(s.kH, { ...K, surface: o.m.WIDGET_BOTTOM, surfaceConfig: Z, renderText: V }),
                      (0, i.jsx)(M, {
                          isCurrentUser: B.isCurrentUser,
                          isLoading: K.isLoading,
                          hasData: K.hasIdentity,
                          showConnectCta: !h && B.showConnectCta,
                          showReconnectCta: !h && B.showReconnectCta,
                          handleConnect: B.handleConnect,
                          disableCTA: r,
                          disableCTAActions: !h && (!0 === m || !1 !== Y),
                          cta: x,
                      }),
                  ],
              });
    },
    { Cta: G },
);
