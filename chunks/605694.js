n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(794248),
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
    N = n(531913),
    b = n(429913),
    A = n(409626),
    D = n(692969),
    P = n(569926),
    _ = n(280450),
    T = n(183555),
    R = n(623280),
    w = n(375708),
    W = n(887579);
function y(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: l,
        showConnectCta: s,
        showReconnectCta: a,
        handleConnect: r,
        disableCTA: o,
        cta: d,
    } = e;
    return !t || o
        ? null
        : (0, i.jsxs)("div", {
              className: W.qr,
              children: [
                  n || l || s || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: W.o8,
                            children: [
                                (0, i.jsx)(x.Q, { size: "xxs" }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: w.intl.string(w.t.z5K4Uv),
                                }),
                            ],
                        }),
                  s
                      ? (0, i.jsx)(S, {
                            heading: w.intl.string(w.t.UDPRLO),
                            content: w.intl.string(w.t["OW/2al"]),
                            buttons: (0, i.jsx)(m.$, { text: w.intl.string(w.t.S0W8Z5), onClick: r }),
                        })
                      : a
                        ? (0, i.jsx)(S, {
                              heading: w.intl.string(w.t["9WarGY"]),
                              content: w.intl.string(w.t.qgxnKe),
                              buttons: (0, i.jsx)(m.$, { text: w.intl.string(w.t.vD60Pv), onClick: r }),
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
                disableCTA: s,
                cta: x,
                subtle: m = !1,
                embedded: h = !1,
                allowEditing: f,
                disableInteraction: w,
                index: S,
                trailingContent: k,
            } = e,
            M = (function (e) {
                let { trackUserProfileAction: t } = (0, T.NJ)(),
                    { user: n, widget: s, cta: r } = e,
                    o = (0, c.bG)([_.default], () => _.default.getId()) === n.id,
                    x = (0, b.h)(s.applicationId),
                    m = x?.getIconURL(16),
                    h = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, P.I)(t);
                        return n;
                    })(x),
                    f = (0, D.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: h?.id,
                        source: A.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: j,
                        hasAlreadyLinked: p,
                        canStartAuthorization: I,
                        startAuthorization: N,
                        token: R,
                    } = (0, v.RD)(x),
                    { analyticsLocations: w } = (0, C.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    y = l.useCallback(() => {
                        I &&
                            (t({
                                action: p
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: s.applicationId,
                            }),
                            N({ analyticsLocations: w }));
                    }, [I, p, N, t, s.applicationId, w]),
                    S = null == r && j && !p && I,
                    k =
                        null == r &&
                        j &&
                        p &&
                        I &&
                        null != R &&
                        !Array.from(d._.APPLICATION_IDENTITIES_SCOPES).some((e) => R.scopes.includes(e)) &&
                        !R.scopes.includes(d.F.SDK_SOCIAL_LAYER) &&
                        !R.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE),
                    M = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != m
                                ? (0, i.jsx)("img", { className: W.Z2, src: m, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: W.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: x?.name != null ? x.name : (0, i.jsx)("div", { className: W.jC }),
                            }),
                        ],
                    }),
                    O =
                        null == h
                            ? (0, i.jsx)("div", { className: W.qd, children: M })
                            : (0, i.jsx)(g.D, { className: a()(W.qd, W.vk), onClick: f, children: M });
                return {
                    isCurrentUser: o,
                    game: h,
                    openGameProfileModal: f,
                    handleConnect: y,
                    showConnectCta: S,
                    showReconnectCta: k,
                    headerTitle: O,
                };
            })(e),
            O = (0, N.A)(t.id, n.applicationId),
            G = O.surfaceConfigs[o.m.WIDGET_TOP],
            L = O.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == G || null == L
            ? null
            : (0, i.jsxs)(R.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: f,
                  disableInteraction: w,
                  index: S,
                  trailingContent: k,
                  className: a()(W.Y5, { [W.aK]: m, [W.F9]: h }),
                  headerClassName: W.JE,
                  additionalManageWidgetMenuItems:
                      null != M.game
                          ? (0, i.jsx)(j.Dr, {
                                id: "view-game-profile",
                                label: "View Game Profile",
                                leadingAccessory: { type: "icon", icon: p._ },
                                action: M.openGameProfileModal,
                            })
                          : null,
                  children: [
                      (0, i.jsx)(r.kH, { ...O, surface: o.m.WIDGET_TOP, surfaceConfig: G, header: M.headerTitle }),
                      (0, i.jsx)(I.c, {}),
                      (0, i.jsx)(r.kH, { ...O, surface: o.m.WIDGET_BOTTOM, surfaceConfig: L }),
                      (0, i.jsx)(y, {
                          isCurrentUser: M.isCurrentUser,
                          isLoading: O.isLoading,
                          hasData: O.hasIdentity,
                          showConnectCta: M.showConnectCta,
                          showReconnectCta: M.showReconnectCta,
                          handleConnect: M.handleConnect,
                          disableCTA: s,
                          cta: x,
                      }),
                  ],
              });
    },
    { Cta: S },
);
