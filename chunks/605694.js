n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284513),
    o = n(598748),
    d = n(179771),
    c = n(17928),
    u = n(834730),
    g = n(939249),
    x = n(339350),
    h = n(821609),
    m = n(331322),
    f = n(534514),
    j = n(477782),
    p = n(687966),
    I = n(404778),
    E = n(793574),
    N = n(688810),
    v = n(206828),
    C = n(531913),
    b = n(429913),
    D = n(409626),
    A = n(692969),
    P = n(569926),
    _ = n(280450),
    T = n(183555),
    w = n(623280),
    R = n(375708),
    S = n(439907);
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
              className: S.qr,
              children: [
                  n || l || s || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: S.o8,
                            children: [
                                (0, i.jsx)(x.Q, { size: "xxs" }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: R.intl.string(R.t.z5K4Uv),
                                }),
                            ],
                        }),
                  s
                      ? (0, i.jsx)(W, {
                            heading: R.intl.string(R.t.UDPRLO),
                            content: R.intl.string(R.t["OW/2al"]),
                            buttons: (0, i.jsx)(h.$, { text: R.intl.string(R.t.S0W8Z5), onClick: r }),
                        })
                      : a
                        ? (0, i.jsx)(W, {
                              heading: R.intl.string(R.t["9WarGY"]),
                              content: R.intl.string(R.t.qgxnKe),
                              buttons: (0, i.jsx)(h.$, { text: R.intl.string(R.t.vD60Pv), onClick: r }),
                          })
                        : d,
              ],
          });
}
function W(e) {
    return (0, i.jsxs)(m.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: S.lO,
        children: [
            (0, i.jsxs)(m.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: R.intl.string(R.t.zMUr6Z),
                        }),
                    (0, i.jsx)(f.D, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
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
let k = Object.assign(
    function (e) {
        let {
                user: t,
                widget: n,
                disableCTA: s,
                cta: x,
                subtle: h = !1,
                embedded: m = !1,
                allowEditing: f,
                disableInteraction: R,
                index: W,
                trailingContent: k,
            } = e,
            G = (function (e) {
                let { trackUserProfileAction: t } = (0, T.NJ)(),
                    { user: n, widget: s, cta: r } = e,
                    o = (0, c.bG)([_.default], () => _.default.getId()) === n.id,
                    x = (0, b.h)(s.applicationId),
                    h = x?.getIconURL(16),
                    m = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, P.I)(t);
                        return n;
                    })(x),
                    f = (0, A.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: m?.id,
                        source: D.GameProfileSources.UserProfile,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: j,
                        hasAlreadyLinked: p,
                        canStartAuthorization: I,
                        startAuthorization: C,
                        token: w,
                    } = (0, v.RD)(x),
                    { analyticsLocations: R } = (0, N.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    y = l.useCallback(() => {
                        I &&
                            (t({
                                action: p
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: s.applicationId,
                            }),
                            C({ analyticsLocations: R }));
                    }, [I, p, C, t, s.applicationId, R]),
                    W = null == r && j && !p && I,
                    k =
                        null == r &&
                        j &&
                        p &&
                        I &&
                        null != w &&
                        !Array.from(d._.APPLICATION_IDENTITIES_SCOPES).some((e) => w.scopes.includes(e)) &&
                        !w.scopes.includes(d.F.SDK_SOCIAL_LAYER) &&
                        !w.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE),
                    G = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != h
                                ? (0, i.jsx)("img", { className: S.Z2, src: h, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: S.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: x?.name != null ? x.name : (0, i.jsx)("div", { className: S.jC }),
                            }),
                        ],
                    }),
                    O =
                        null == m
                            ? (0, i.jsx)("div", { className: S.qd, children: G })
                            : (0, i.jsx)(g.D, { className: a()(S.qd, S.vk), onClick: f, children: G });
                return {
                    isCurrentUser: o,
                    game: m,
                    openGameProfileModal: f,
                    handleConnect: y,
                    showConnectCta: W,
                    showReconnectCta: k,
                    headerTitle: O,
                };
            })(e),
            O = (0, C.A)(t.id, n.applicationId),
            L = O.surfaceConfigs[o.m.WIDGET_TOP],
            M = O.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == L || null == M
            ? null
            : (0, i.jsxs)(w.A, {
                  userId: t.id,
                  widget: n,
                  allowEditing: f,
                  disableInteraction: R,
                  index: W,
                  trailingContent: k,
                  className: a()(S.Y5, { [S.aK]: h, [S.F9]: m }),
                  headerClassName: S.JE,
                  additionalManageWidgetMenuItems:
                      null != G.game
                          ? (0, i.jsx)(j.Dr, {
                                id: "view-game-profile",
                                label: "View Game Profile",
                                icon: p._,
                                action: G.openGameProfileModal,
                            })
                          : null,
                  children: [
                      (0, i.jsx)(r.kH, { ...O, surface: o.m.WIDGET_TOP, surfaceConfig: L, header: G.headerTitle }),
                      (0, i.jsx)(I.c, {}),
                      (0, i.jsx)(r.kH, { ...O, surface: o.m.WIDGET_BOTTOM, surfaceConfig: M }),
                      (0, i.jsx)(y, {
                          isCurrentUser: G.isCurrentUser,
                          isLoading: O.isLoading,
                          hasData: O.hasIdentity,
                          showConnectCta: G.showConnectCta,
                          showReconnectCta: G.showReconnectCta,
                          handleConnect: G.handleConnect,
                          disableCTA: s,
                          cta: x,
                      }),
                  ],
              });
    },
    { Cta: W },
);
