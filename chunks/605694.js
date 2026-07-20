n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(281411),
    o = n(598748),
    d = n(179771),
    c = n(17928),
    u = n(834730),
    g = n(939249),
    x = n(339350),
    m = n(821609),
    h = n(331322),
    f = n(297264),
    j = n(477782),
    p = n(687966),
    I = n(404778),
    E = n(793574),
    C = n(688810),
    v = n(206828),
    b = n(531913),
    D = n(429913),
    N = n(409626),
    A = n(692969),
    P = n(569926),
    R = n(280450),
    _ = n(183555),
    T = n(623280),
    w = n(375708),
    y = n(439907);
function k(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: l,
        showConnectCta: a,
        showReconnectCta: r,
        handleConnect: s,
        disableCTA: o,
        cta: d,
    } = e;
    return !t || o
        ? null
        : (0, i.jsxs)("div", {
              className: y.qr,
              children: [
                  n || l || a || r
                      ? null
                      : (0, i.jsxs)("div", {
                            className: y.o8,
                            children: [
                                (0, i.jsx)(x.Q, { size: "xxs" }),
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
                            buttons: (0, i.jsx)(m.$, { text: w.intl.string(w.t.S0W8Z5), onClick: s }),
                        })
                      : r
                        ? (0, i.jsx)(S, {
                              heading: w.intl.string(w.t["9WarGY"]),
                              content: w.intl.string(w.t.qgxnKe),
                              buttons: (0, i.jsx)(m.$, { text: w.intl.string(w.t.vD60Pv), onClick: s }),
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
        className: y.lO,
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
let W = Object.assign(
    function (e) {
        let {
                user: t,
                widget: n,
                disableCTA: a,
                cta: x,
                subtle: m = !1,
                embedded: h = !1,
                allowEditing: f,
                disableInteraction: w,
                index: S,
                trailingContent: W,
            } = e,
            O = (function (e) {
                let { trackUserProfileAction: t } = (0, _.NJ)(),
                    { user: n, widget: a, cta: s } = e,
                    o = (0, c.bG)([R.default], () => R.default.getId()) === n.id,
                    x = (0, D.h)(a.applicationId),
                    m = x?.getIconURL(16),
                    h = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, P.I)(t);
                        return n;
                    })(x),
                    f = (0, A.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: h?.id,
                        source: N.GameProfileSources.UserProfile,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: j,
                        hasAlreadyLinked: p,
                        canStartAuthorization: I,
                        startAuthorization: b,
                        token: T,
                    } = (0, v.RD)(x),
                    { analyticsLocations: w } = (0, C.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    k = l.useCallback(() => {
                        I &&
                            (t({
                                action: p
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: a.applicationId,
                            }),
                            b({ analyticsLocations: w }));
                    }, [I, p, b, t, a.applicationId, w]),
                    S = null == s && j && !p && I,
                    W =
                        null == s &&
                        j &&
                        p &&
                        I &&
                        null != T &&
                        !Array.from(d._.APPLICATION_IDENTITIES_SCOPES).some((e) => T.scopes.includes(e)) &&
                        !T.scopes.includes(d.F.SDK_SOCIAL_LAYER) &&
                        !T.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE),
                    O = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != m
                                ? (0, i.jsx)("img", { className: y.Z2, src: m, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: y.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: x?.name != null ? x.name : (0, i.jsx)("div", { className: y.jC }),
                            }),
                        ],
                    }),
                    G =
                        null == h
                            ? (0, i.jsx)("div", { className: y.qd, children: O })
                            : (0, i.jsx)(g.D, { className: r()(y.qd, y.vk), onClick: f, children: O });
                return {
                    isCurrentUser: o,
                    game: h,
                    openGameProfileModal: f,
                    handleConnect: k,
                    showConnectCta: S,
                    showReconnectCta: W,
                    headerTitle: G,
                };
            })(e),
            G = (0, b.A)(t.id, n.applicationId),
            M = G.surfaceConfigs[o.m.WIDGET_TOP],
            L = G.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == M || null == L
            ? null
            : (0, i.jsxs)(T.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: f,
                  disableInteraction: w,
                  index: S,
                  trailingContent: W,
                  className: r()(y.Y5, { [y.aK]: m, [y.F9]: h }),
                  headerClassName: y.JE,
                  additionalManageWidgetMenuItems:
                      null != O.game
                          ? (0, i.jsx)(j.Dr, {
                                id: "view-game-profile",
                                label: "View Game Profile",
                                icon: p._,
                                action: O.openGameProfileModal,
                            })
                          : null,
                  children: [
                      (0, i.jsx)(s.kH, { ...G, surface: o.m.WIDGET_TOP, surfaceConfig: M, header: O.headerTitle }),
                      (0, i.jsx)(I.c, {}),
                      (0, i.jsx)(s.kH, { ...G, surface: o.m.WIDGET_BOTTOM, surfaceConfig: L }),
                      (0, i.jsx)(k, {
                          isCurrentUser: O.isCurrentUser,
                          isLoading: G.isLoading,
                          hasData: G.hasIdentity,
                          showConnectCta: O.showConnectCta,
                          showReconnectCta: O.showReconnectCta,
                          handleConnect: O.handleConnect,
                          disableCTA: a,
                          cta: x,
                      }),
                  ],
              });
    },
    { Cta: S },
);
