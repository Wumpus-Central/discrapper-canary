n.d(t, { A: () => k });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(794248),
    o = n(598748),
    d = n(179771),
    c = n(17928),
    u = n(834730),
    g = n(939249),
    m = n(339350),
    x = n(821609),
    h = n(331322),
    f = n(297264),
    I = n(477782),
    j = n(687966),
    p = n(404778),
    E = n(793574),
    C = n(688810),
    v = n(206828),
    N = n(531913),
    b = n(429913),
    A = n(409626),
    D = n(692969),
    P = n(569926),
    T = n(280450),
    _ = n(183555),
    R = n(623280),
    w = n(375708),
    W = n(887579);
function y(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: l,
        showConnectCta: a,
        showReconnectCta: s,
        handleConnect: r,
        disableCTA: o,
        cta: d,
    } = e;
    return !t || o
        ? null
        : (0, i.jsxs)("div", {
              className: W.qr,
              children: [
                  n || l || a || s
                      ? null
                      : (0, i.jsxs)("div", {
                            className: W.o8,
                            children: [
                                (0, i.jsx)(m.Q, { size: "xxs" }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: w.intl.string(w.t.z5K4Uv),
                                }),
                            ],
                        }),
                  a
                      ? (0, i.jsx)(S, {
                            heading: w.intl.string(w.t.UDPRLO),
                            content: w.intl.string(w.t["OW/2al"]),
                            buttons: (0, i.jsx)(x.$, { text: w.intl.string(w.t.S0W8Z5), onClick: r }),
                        })
                      : s
                        ? (0, i.jsx)(S, {
                              heading: w.intl.string(w.t["9WarGY"]),
                              content: w.intl.string(w.t.qgxnKe),
                              buttons: (0, i.jsx)(x.$, { text: w.intl.string(w.t.vD60Pv), onClick: r }),
                          })
                        : d,
              ],
          });
}
function S(e) {
    return (0, i.jsxs)(h.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: W.lO,
        children: [
            (0, i.jsxs)(h.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: w.intl.string(w.t.zMUr6Z),
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
let k = Object.assign(
    function (e) {
        let {
                user: t,
                widget: n,
                disableCTA: a,
                cta: m,
                subtle: x = !1,
                embedded: h = !1,
                allowEditing: f,
                disableInteraction: w,
                index: S,
                trailingContent: k,
            } = e,
            M = (function (e) {
                let { trackUserProfileAction: t } = (0, _.NJ)(),
                    { user: n, widget: a, cta: r } = e,
                    o = (0, c.bG)([T.default], () => T.default.getId()) === n.id,
                    m = (0, b.h)(a.applicationId),
                    x = m?.getIconURL(16),
                    h = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, P.I)(t);
                        return n;
                    })(m),
                    f = (0, D.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: h?.id,
                        source: A.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: I,
                        hasAlreadyLinked: j,
                        canStartAuthorization: p,
                        startAuthorization: N,
                        token: R,
                    } = (0, v.RD)(m),
                    { analyticsLocations: w } = (0, C.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    y = l.useCallback(() => {
                        p &&
                            (t({
                                action: j
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: a.applicationId,
                            }),
                            N({ analyticsLocations: w }));
                    }, [p, j, N, t, a.applicationId, w]),
                    S = null == r && I && !j && p,
                    k =
                        null == r &&
                        I &&
                        j &&
                        p &&
                        null != R &&
                        !Array.from(d._.APPLICATION_IDENTITIES_SCOPES).some((e) => R.scopes.includes(e)) &&
                        !R.scopes.includes(d.F.SDK_SOCIAL_LAYER) &&
                        !R.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE),
                    M = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != x
                                ? (0, i.jsx)("img", { className: W.Z2, src: x, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: W.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: m?.name != null ? m.name : (0, i.jsx)("div", { className: W.jC }),
                            }),
                        ],
                    }),
                    G =
                        null == h
                            ? (0, i.jsx)("div", { className: W.qd, children: M })
                            : (0, i.jsx)(g.D, { className: s()(W.qd, W.vk), onClick: f, children: M });
                return {
                    isCurrentUser: o,
                    game: h,
                    openGameProfileModal: f,
                    handleConnect: y,
                    showConnectCta: S,
                    showReconnectCta: k,
                    headerTitle: G,
                };
            })(e),
            G = (0, N.A)(t.id, n.applicationId),
            O = G.surfaceConfigs[o.m.WIDGET_TOP],
            L = G.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == O || null == L
            ? null
            : (0, i.jsxs)(R.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: f,
                  disableInteraction: w,
                  index: S,
                  trailingContent: k,
                  className: s()(W.Y5, { [W.aK]: x, [W.F9]: h }),
                  headerClassName: W.JE,
                  additionalManageWidgetMenuItems:
                      null != M.game
                          ? (0, i.jsx)(I.Dr, {
                                id: "view-game-profile",
                                label: "View Game Profile",
                                leadingAccessory: { type: "icon", icon: j.GameControllerIcon },
                                action: M.openGameProfileModal,
                            })
                          : null,
                  children: [
                      (0, i.jsx)(r.kH, { ...G, surface: o.m.WIDGET_TOP, surfaceConfig: O, header: M.headerTitle }),
                      (0, i.jsx)(p.c, {}),
                      (0, i.jsx)(r.kH, { ...G, surface: o.m.WIDGET_BOTTOM, surfaceConfig: L }),
                      (0, i.jsx)(y, {
                          isCurrentUser: M.isCurrentUser,
                          isLoading: G.isLoading,
                          hasData: G.hasIdentity,
                          showConnectCta: M.showConnectCta,
                          showReconnectCta: M.showReconnectCta,
                          handleConnect: M.handleConnect,
                          disableCTA: a,
                          cta: m,
                      }),
                  ],
              });
    },
    { Cta: S },
);
