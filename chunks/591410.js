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
    f = t(331322),
    x = t(534514),
    p = t(477782),
    j = t(687966),
    I = t(404778),
    E = t(793574),
    b = t(688810),
    A = t(724302),
    C = t(284460),
    v = t(531913),
    y = t(417270),
    N = t(164163),
    D = t(792996),
    T = t(429913),
    P = t(5960),
    R = t(409626),
    k = t(692969),
    _ = t(454908),
    w = t(46653),
    S = t(183555),
    W = t(40989),
    M = t(58266);
function O(e) {
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
              className: M.qr,
              children: [
                  t || l || r || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: M.o8,
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
    return (0, i.jsxs)(f.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: M.lO,
        children: [
            (0, i.jsxs)(f.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(u.E, {
                            variant: "body-xs/medium",
                            color: "text-default",
                            children: D.intl.string(D.t.zMUr6Z),
                        }),
                    (0, i.jsx)(x.D, { variant: "heading-xs/medium", color: "text-default", children: e.heading }),
                    (0, i.jsx)(u.E, { variant: "body-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
            (0, i.jsx)(f.B, {
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
                cta: h,
                subtle: f = !1,
                embedded: x = !1,
                allowEditing: G,
                disableInteraction: L,
                index: F,
                trailingContent: U,
                interactiveLinks: H = !1,
            } = e,
            z = (function (e) {
                let { trackUserProfileAction: n } = (0, S.NJ)(),
                    { user: t, widget: r, cta: s } = e,
                    o = (0, c.bG)([w.default], () => w.default.getId()) === t.id,
                    m = (0, T.h)(r.applicationId),
                    h = m?.getIconURL(16),
                    f = (function (e) {
                        let n = e?.getCanonicalGameId(),
                            { data: t } = (0, _.I)(n);
                        return t;
                    })(m),
                    x = (0, k.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: f?.id,
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
                    W = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != h
                                ? (0, i.jsx)("img", { className: M.Z2, src: h, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: M.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "body-sm/medium",
                                children: m?.name != null ? m.name : (0, i.jsx)("div", { className: M.jC }),
                            }),
                        ],
                    }),
                    O =
                        null == f
                            ? (0, i.jsx)("div", { className: M.qd, children: W })
                            : (0, i.jsx)(g.D, { className: a()(M.qd, M.vk), onClick: x, children: W });
                return {
                    isCurrentUser: o,
                    game: f,
                    openGameProfileModal: x,
                    handleConnect: N,
                    showConnectCta: D,
                    showReconnectCta: P,
                    headerTitle: O,
                };
            })(e),
            q = (0, v.A)(n.id, t.applicationId),
            B = e.rendererProps ?? q,
            K = (0, P.A)(t.applicationId, z.isCurrentUser),
            Y = (function (e, n) {
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
            })(t.applicationId, !0 === K && !0 !== L),
            J =
                H ||
                (function (e) {
                    let { disableInteraction: n } = e;
                    return !0 !== n;
                })(e)
                    ? C.hO
                    : void 0,
            V = B.surfaceConfigs[o.m.WIDGET_TOP],
            X = B.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == V || null == X
            ? null
            : (0, i.jsxs)(W.A, {
                  userId: n.id,
                  widget: t,
                  allowEditing: G,
                  disableInteraction: L,
                  index: F,
                  trailingContent: U,
                  className: a()(M.Y5, { [M.aK]: f, [M.F9]: x }),
                  headerClassName: M.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != z.game
                              ? (0, i.jsx)(p.Dr, {
                                    id: "view-game-profile",
                                    label: D.intl.string(D.t.ajHoOr),
                                    leadingAccessory: { type: "icon", icon: j.GameControllerIcon },
                                    action: z.openGameProfileModal,
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
                          header: z.headerTitle,
                          renderText: J,
                      }),
                      (0, i.jsx)(I.c, {}),
                      (0, i.jsx)(s.kH, { ...B, surface: o.m.WIDGET_BOTTOM, surfaceConfig: X, renderText: J }),
                      (0, i.jsx)(O, {
                          isCurrentUser: z.isCurrentUser,
                          isLoading: B.isLoading,
                          hasData: B.hasIdentity,
                          showConnectCta: z.showConnectCta,
                          showReconnectCta: z.showReconnectCta,
                          handleConnect: z.handleConnect,
                          disableCTA: r,
                          disableCTAActions: !0 === m || !1 !== K,
                          cta: h,
                      }),
                  ],
              });
    },
    { Cta: G },
);
