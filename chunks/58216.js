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
    h = n(821609),
    x = n(331322),
    m = n(297264),
    p = n(477782),
    I = n(687966),
    j = n(404778),
    E = n(793574),
    A = n(688810),
    C = n(206828),
    v = n(11099),
    b = n(531913),
    N = n(417270),
    y = n(7437),
    D = n(660183),
    T = n(429913),
    _ = n(5960),
    P = n(409626),
    R = n(692969),
    w = n(569926),
    k = n(280450),
    S = n(183555),
    W = n(644346),
    G = n(58266);
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
              className: G.qr,
              children: [
                  n || r || l || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: G.o8,
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
                      ? (0, i.jsx)(O, {
                            heading: D.intl.string(D.t.UDPRLO),
                            content: D.intl.string(D.t["OW/2al"]),
                            buttons: (0, i.jsx)(h.$, { text: D.intl.string(D.t.S0W8Z5), onClick: s }),
                        })
                      : a
                        ? (0, i.jsx)(O, {
                              heading: D.intl.string(D.t["9WarGY"]),
                              content: D.intl.string(D.t.qgxnKe),
                              buttons: (0, i.jsx)(h.$, { text: D.intl.string(D.t.vD60Pv), onClick: s }),
                          })
                        : d,
              ],
          }));
}
function O(e) {
    return (0, i.jsxs)(x.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: G.lO,
        children: [
            (0, i.jsxs)(x.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: D.intl.string(D.t.zMUr6Z),
                        }),
                    (0, i.jsx)(m.D, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
                    (0, i.jsx)(u.E, { variant: "text-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
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
                user: t,
                widget: n,
                disableCTA: l,
                disableCTAActions: f,
                cta: h,
                subtle: x = !1,
                embedded: m = !1,
                allowEditing: O,
                disableInteraction: L,
                index: U,
                trailingContent: F,
                interactiveLinks: z = !1,
            } = e,
            H = (function (e) {
                let { trackUserProfileAction: t } = (0, S.NJ)(),
                    { user: n, widget: l, cta: s } = e,
                    o = (0, d.bG)([k.default], () => k.default.getId()) === n.id,
                    f = (0, T.h)(l.applicationId),
                    h = f?.getIconURL(16),
                    x = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, w.I)(t);
                        return n;
                    })(f),
                    m = (0, R.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: x?.id,
                        source: P.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: p,
                        hasAlreadyLinked: I,
                        canStartAuthorization: j,
                        startAuthorization: v,
                        token: b,
                    } = (0, C.RD)(f),
                    { analyticsLocations: N } = (0, A.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    y = r.useCallback(() => {
                        j &&
                            (t({
                                action: I
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: l.applicationId,
                            }),
                            v({ analyticsLocations: N }));
                    }, [j, I, v, t, l.applicationId, N]),
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
                    W = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != h
                                ? (0, i.jsx)("img", { className: G.Z2, src: h, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: G.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: f?.name != null ? f.name : (0, i.jsx)("div", { className: G.jC }),
                            }),
                        ],
                    }),
                    M =
                        null == x
                            ? (0, i.jsx)("div", { className: G.qd, children: W })
                            : (0, i.jsx)(g.D, { className: a()(G.qd, G.vk), onClick: m, children: W });
                return {
                    isCurrentUser: o,
                    game: x,
                    openGameProfileModal: m,
                    handleConnect: y,
                    showConnectCta: D,
                    showReconnectCta: _,
                    headerTitle: M,
                };
            })(e),
            B = (0, b.A)(t.id, n.applicationId),
            K = e.rendererProps ?? B,
            Y = (0, _.A)(n.applicationId, H.isCurrentUser),
            q = (function (e, t) {
                let { pending: n, refresh: r } = (0, y.A)(e);
                return t
                    ? (0, i.jsx)(p.Dr, {
                          id: "application-widget-refresh",
                          label: D.intl.string(D.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: N.RetryIcon },
                          disabled: n,
                          action: r,
                      })
                    : null;
            })(n.applicationId, !0 === Y && !0 !== L),
            J =
                z ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? v.hO
                    : void 0,
            Z = K.surfaceConfigs[o.m.WIDGET_TOP],
            V = K.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == Z || null == V
            ? null
            : (0, i.jsxs)(W.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: O,
                  disableInteraction: L,
                  index: U,
                  trailingContent: F,
                  className: a()(G.Y5, { [G.aK]: x, [G.F9]: m }),
                  headerClassName: G.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != H.game
                              ? (0, i.jsx)(p.Dr, {
                                    id: "view-game-profile",
                                    label: "View Game Profile",
                                    leadingAccessory: { type: "icon", icon: I.GameControllerIcon },
                                    action: H.openGameProfileModal,
                                })
                              : null,
                          q,
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
                      (0, i.jsx)(j.c, {}),
                      (0, i.jsx)(s.kH, { ...K, surface: o.m.WIDGET_BOTTOM, surfaceConfig: V, renderText: J }),
                      (0, i.jsx)(M, {
                          isCurrentUser: H.isCurrentUser,
                          isLoading: K.isLoading,
                          hasData: K.hasIdentity,
                          showConnectCta: H.showConnectCta,
                          showReconnectCta: H.showReconnectCta,
                          handleConnect: H.handleConnect,
                          disableCTA: l,
                          disableCTAActions: !0 === f || !1 !== Y,
                          cta: h,
                      }),
                  ],
              });
    },
    { Cta: O },
);
