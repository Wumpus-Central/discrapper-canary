n.d(t, { A: () => L });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(886100),
    o = n(598748),
    c = n(179771),
    d = n(855986),
    u = n(834730),
    g = n(939249),
    f = n(339350),
    h = n(821609),
    m = n(331322),
    x = n(534514),
    p = n(477782),
    j = n(687966),
    I = n(404778),
    E = n(793574),
    b = n(688810),
    A = n(660298),
    v = n(284460),
    C = n(531913),
    y = n(417270),
    N = n(872344),
    k = n(792996),
    D = n(429913),
    T = n(5960),
    P = n(409626),
    R = n(692969),
    _ = n(454908),
    w = n(46653),
    W = n(183555),
    S = n(40989),
    O = n(58266);
function M(e) {
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
              className: O.qr,
              children: [
                  n || l || r || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: O.o8,
                            children: [
                                (0, i.jsx)(f.HourglassIcon, { size: "xxs" }),
                                (0, i.jsx)(u.E, {
                                    variant: "body-sm/medium",
                                    color: "text-subtle",
                                    children: k.intl.string(k.t.z5K4Uv),
                                }),
                            ],
                        }),
                  r
                      ? (0, i.jsx)(G, {
                            heading: k.intl.string(k.t.UDPRLO),
                            content: k.intl.string(k.t["OW/2al"]),
                            buttons: (0, i.jsx)(h.$, { text: k.intl.string(k.t.S0W8Z5), onClick: s }),
                        })
                      : a
                        ? (0, i.jsx)(G, {
                              heading: k.intl.string(k.t["9WarGY"]),
                              content: k.intl.string(k.t.qgxnKe),
                              buttons: (0, i.jsx)(h.$, { text: k.intl.string(k.t.vD60Pv), onClick: s }),
                          })
                        : d,
              ],
          }));
}
function G(e) {
    let t = (0, i.jsxs)(m.B, {
        gap: 4,
        children: [
            e.showSuggestedForYou &&
                (0, i.jsx)(u.E, {
                    variant: "body-xs/medium",
                    color: "text-default",
                    children: k.intl.string(k.t.zMUr6Z),
                }),
            (0, i.jsx)(x.D, { variant: "heading-xs/medium", color: "text-default", children: e.heading }),
            (0, i.jsx)(u.E, { variant: "body-xs/normal", color: "text-subtle", children: e.content }),
            e.attribution,
        ],
    });
    return null != e.icon
        ? (0, i.jsxs)(m.B, {
              gap: 12,
              padding: 12,
              fullWidth: !1,
              className: O.lO,
              children: [
                  (0, i.jsxs)(m.B, { direction: "horizontal", gap: 12, align: "start", children: [e.icon, t] }),
                  (0, i.jsx)(m.B, {
                      direction: "horizontal",
                      gap: 12,
                      align: "center",
                      justify: "end",
                      children: e.buttons,
                  }),
              ],
          })
        : (0, i.jsxs)(m.B, {
              direction: "horizontal",
              gap: 24,
              padding: 12,
              fullWidth: !1,
              className: O.lO,
              children: [
                  t,
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
let L = Object.assign(
    function (e) {
        let {
                user: t,
                widget: n,
                disableCTA: r,
                disableCTAActions: f,
                exclusiveCTA: h = !1,
                cta: m,
                subtle: x = !1,
                embedded: G = !1,
                allowEditing: L,
                disableInteraction: U,
                index: F,
                trailingContent: z,
                interactiveLinks: B = !1,
            } = e,
            H = (function (e) {
                let { trackUserProfileAction: t } = (0, W.NJ)(),
                    { user: n, widget: r, cta: s } = e,
                    o = (0, d.bG)([w.default], () => w.default.getId()) === n.id,
                    f = (0, D.h)(r.applicationId),
                    h = f?.getIconURL(16),
                    m = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, _.I)(t);
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
                        hasAlreadyLinked: j,
                        canStartAuthorization: I,
                        startAuthorization: v,
                        token: C,
                    } = (0, A.RD)(f),
                    { analyticsLocations: y } = (0, b.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    N = l.useCallback(() => {
                        I &&
                            (t({
                                action: j
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: r.applicationId,
                            }),
                            v({ analyticsLocations: y }));
                    }, [I, j, v, t, r.applicationId, y]),
                    k = null == s && p && !j && I,
                    T =
                        null == s &&
                        p &&
                        j &&
                        I &&
                        null != C &&
                        !Array.from(c._.APPLICATION_IDENTITIES_SCOPES).some((e) => C.scopes.includes(e)) &&
                        !C.scopes.includes(c.F.SDK_SOCIAL_LAYER) &&
                        !C.scopes.includes(c.F.SDK_SOCIAL_LAYER_PRESENCE),
                    S = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != h
                                ? (0, i.jsx)("img", { className: O.Z2, src: h, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: O.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "body-sm/medium",
                                children: f?.name != null ? f.name : (0, i.jsx)("div", { className: O.jC }),
                            }),
                        ],
                    }),
                    M =
                        null == m
                            ? (0, i.jsx)("div", { className: O.qd, children: S })
                            : (0, i.jsx)(g.D, { className: a()(O.qd, O.vk), onClick: x, children: S });
                return {
                    isCurrentUser: o,
                    game: m,
                    openGameProfileModal: x,
                    handleConnect: N,
                    showConnectCta: k,
                    showReconnectCta: T,
                    headerTitle: M,
                };
            })(e),
            K = (0, C.A)(t.id, n.applicationId),
            q = e.rendererProps ?? K,
            Y = (0, T.A)(n.applicationId, H.isCurrentUser),
            J = (function (e, t) {
                let { pending: n, refresh: l } = (0, N.A)(e);
                return t
                    ? (0, i.jsx)(p.Dr, {
                          id: "application-widget-refresh",
                          label: k.intl.string(k.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: y.RetryIcon },
                          disabled: n,
                          action: l,
                      })
                    : null;
            })(n.applicationId, !0 === Y && !0 !== U),
            V =
                B ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? v.hO
                    : void 0,
            X = q.surfaceConfigs[o.m.WIDGET_TOP],
            Z = q.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == X || null == Z
            ? null
            : (0, i.jsxs)(S.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: L,
                  disableInteraction: U,
                  index: F,
                  trailingContent: z,
                  className: a()(O.Y5, { [O.aK]: x, [O.F9]: G }),
                  headerClassName: O.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != H.game
                              ? (0, i.jsx)(p.Dr, {
                                    id: "view-game-profile",
                                    label: k.intl.string(k.t.ajHoOr),
                                    leadingAccessory: { type: "icon", icon: j.GameControllerIcon },
                                    action: H.openGameProfileModal,
                                })
                              : null,
                          J,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(s.kH, {
                          ...q,
                          surface: o.m.WIDGET_TOP,
                          surfaceConfig: X,
                          header: H.headerTitle,
                          renderText: V,
                      }),
                      (0, i.jsx)(I.c, {}),
                      (0, i.jsx)(s.kH, { ...q, surface: o.m.WIDGET_BOTTOM, surfaceConfig: Z, renderText: V }),
                      (0, i.jsx)(M, {
                          isCurrentUser: H.isCurrentUser,
                          isLoading: q.isLoading,
                          hasData: q.hasIdentity,
                          showConnectCta: !h && H.showConnectCta,
                          showReconnectCta: !h && H.showReconnectCta,
                          handleConnect: H.handleConnect,
                          disableCTA: r,
                          disableCTAActions: !h && (!0 === f || !1 !== Y),
                          cta: m,
                      }),
                  ],
              });
    },
    { Cta: G },
);
