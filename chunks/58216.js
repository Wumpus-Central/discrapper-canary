n.d(t, { A: () => L });
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
    m = n(821609),
    h = n(331322),
    x = n(297264),
    p = n(477782),
    j = n(687966),
    I = n(404778),
    E = n(793574),
    A = n(688810),
    v = n(206828),
    C = n(486610),
    b = n(531913),
    y = n(417270),
    N = n(7437),
    k = n(105292),
    D = n(429913),
    R = n(5960),
    T = n(409626),
    _ = n(692969),
    P = n(454908),
    w = n(280450),
    W = n(183555),
    S = n(644346),
    O = n(58266);
function M(e) {
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
                                    children: k.intl.string(k.t.z5K4Uv),
                                }),
                            ],
                        }),
                  l
                      ? (0, i.jsx)(G, {
                            heading: k.intl.string(k.t.UDPRLO),
                            content: k.intl.string(k.t["OW/2al"]),
                            buttons: (0, i.jsx)(m.$, { text: k.intl.string(k.t.S0W8Z5), onClick: s }),
                        })
                      : a
                        ? (0, i.jsx)(G, {
                              heading: k.intl.string(k.t["9WarGY"]),
                              content: k.intl.string(k.t.qgxnKe),
                              buttons: (0, i.jsx)(m.$, { text: k.intl.string(k.t.vD60Pv), onClick: s }),
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
        className: O.lO,
        children: [
            (0, i.jsxs)(h.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: k.intl.string(k.t.zMUr6Z),
                        }),
                    (0, i.jsx)(x.D, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
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
                disableCTA: l,
                disableCTAActions: f,
                cta: m,
                subtle: h = !1,
                embedded: x = !1,
                allowEditing: G,
                disableInteraction: L,
                index: U,
                trailingContent: F,
                interactiveLinks: z = !1,
            } = e,
            H = (function (e) {
                let { trackUserProfileAction: t } = (0, W.NJ)(),
                    { user: n, widget: l, cta: s } = e,
                    o = (0, d.bG)([w.default], () => w.default.getId()) === n.id,
                    f = (0, D.h)(l.applicationId),
                    m = f?.getIconURL(16),
                    h = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, P.I)(t);
                        return n;
                    })(f),
                    x = (0, _.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: h?.id,
                        source: T.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: p,
                        hasAlreadyLinked: j,
                        canStartAuthorization: I,
                        startAuthorization: C,
                        token: b,
                    } = (0, v.RD)(f),
                    { analyticsLocations: y } = (0, A.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    N = r.useCallback(() => {
                        I &&
                            (t({
                                action: j
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: l.applicationId,
                            }),
                            C({ analyticsLocations: y }));
                    }, [I, j, C, t, l.applicationId, y]),
                    k = null == s && p && !j && I,
                    R =
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
                            null != m
                                ? (0, i.jsx)("img", { className: O.Z2, src: m, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: O.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: f?.name != null ? f.name : (0, i.jsx)("div", { className: O.jC }),
                            }),
                        ],
                    }),
                    M =
                        null == h
                            ? (0, i.jsx)("div", { className: O.qd, children: S })
                            : (0, i.jsx)(g.D, { className: a()(O.qd, O.vk), onClick: x, children: S });
                return {
                    isCurrentUser: o,
                    game: h,
                    openGameProfileModal: x,
                    handleConnect: N,
                    showConnectCta: k,
                    showReconnectCta: R,
                    headerTitle: M,
                };
            })(e),
            B = (0, b.A)(t.id, n.applicationId),
            K = e.rendererProps ?? B,
            q = (0, R.A)(n.applicationId, H.isCurrentUser),
            Y = (function (e, t) {
                let { pending: n, refresh: r } = (0, N.A)(e);
                return t
                    ? (0, i.jsx)(p.Dr, {
                          id: "application-widget-refresh",
                          label: k.intl.string(k.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: y.RetryIcon },
                          disabled: n,
                          action: r,
                      })
                    : null;
            })(n.applicationId, !0 === q && !0 !== L),
            J =
                z ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? C.hO
                    : void 0,
            Z = K.surfaceConfigs[o.m.WIDGET_TOP],
            V = K.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == Z || null == V
            ? null
            : (0, i.jsxs)(S.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: G,
                  disableInteraction: L,
                  index: U,
                  trailingContent: F,
                  className: a()(O.Y5, { [O.aK]: h, [O.F9]: x }),
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
                          Y,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(s.kH, {
                          ...K,
                          surface: o.m.WIDGET_TOP,
                          surfaceConfig: Z,
                          header: H.headerTitle,
                          renderText: J,
                      }),
                      (0, i.jsx)(I.c, {}),
                      (0, i.jsx)(s.kH, { ...K, surface: o.m.WIDGET_BOTTOM, surfaceConfig: V, renderText: J }),
                      (0, i.jsx)(M, {
                          isCurrentUser: H.isCurrentUser,
                          isLoading: K.isLoading,
                          hasData: K.hasIdentity,
                          showConnectCta: H.showConnectCta,
                          showReconnectCta: H.showReconnectCta,
                          handleConnect: H.handleConnect,
                          disableCTA: l,
                          disableCTAActions: !0 === f || !1 !== q,
                          cta: m,
                      }),
                  ],
              });
    },
    { Cta: G },
);
