n.d(t, { A: () => H });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    s = n(794248),
    o = n(598748),
    c = n(179771),
    d = n(17928),
    u = n(834730),
    g = n(939249),
    f = n(339350),
    h = n(821609),
    m = n(331322),
    x = n(297264),
    p = n(477782),
    I = n(687966),
    j = n(404778),
    A = n(793574),
    E = n(688810),
    v = n(206828),
    C = n(486610),
    b = n(531913),
    y = n(417270),
    P = n(7437),
    N = n(375708),
    R = n(429913),
    k = n(409626),
    D = n(692969),
    T = n(569926),
    _ = n(158390),
    w = n(71393),
    S = n(948230),
    W = n(972786),
    G = n(683180);
let O = new _.A(3e4, 3e5);
var L = n(280450),
    M = n(183555),
    F = n(644346),
    U = n(58266);
function z(e) {
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
              className: U.qr,
              children: [
                  n || r || l || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: U.o8,
                            children: [
                                (0, i.jsx)(f.Q, { size: "xxs" }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: N.intl.string(N.t.z5K4Uv),
                                }),
                            ],
                        }),
                  l
                      ? (0, i.jsx)(B, {
                            heading: N.intl.string(N.t.UDPRLO),
                            content: N.intl.string(N.t["OW/2al"]),
                            buttons: (0, i.jsx)(h.$, { text: N.intl.string(N.t.S0W8Z5), onClick: s }),
                        })
                      : a
                        ? (0, i.jsx)(B, {
                              heading: N.intl.string(N.t["9WarGY"]),
                              content: N.intl.string(N.t.qgxnKe),
                              buttons: (0, i.jsx)(h.$, { text: N.intl.string(N.t.vD60Pv), onClick: s }),
                          })
                        : d,
              ],
          }));
}
function B(e) {
    return (0, i.jsxs)(m.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: U.lO,
        children: [
            (0, i.jsxs)(m.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: N.intl.string(N.t.zMUr6Z),
                        }),
                    (0, i.jsx)(x.D, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
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
let H = Object.assign(
    function (e) {
        var t, n;
        let l,
            f,
            {
                user: h,
                widget: m,
                disableCTA: x,
                disableCTAActions: _,
                cta: B,
                subtle: H = !1,
                embedded: K = !1,
                allowEditing: V,
                disableInteraction: Y,
                index: q,
                trailingContent: J,
                interactiveLinks: Z = !1,
            } = e,
            X = (function (e) {
                let { trackUserProfileAction: t } = (0, M.NJ)(),
                    { user: n, widget: l, cta: s } = e,
                    o = (0, d.bG)([L.default], () => L.default.getId()) === n.id,
                    f = (0, R.h)(l.applicationId),
                    h = f?.getIconURL(16),
                    m = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, T.I)(t);
                        return n;
                    })(f),
                    x = (0, D.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: m?.id,
                        source: k.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: p,
                        hasAlreadyLinked: I,
                        canStartAuthorization: j,
                        startAuthorization: C,
                        token: b,
                    } = (0, v.RD)(f),
                    { analyticsLocations: y } = (0, E.Ay)(A.A.USER_PROFILE_APPLICATION_WIDGET),
                    P = r.useCallback(() => {
                        j &&
                            (t({
                                action: I
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: l.applicationId,
                            }),
                            C({ analyticsLocations: y }));
                    }, [j, I, C, t, l.applicationId, y]),
                    N = null == s && p && !I && j,
                    _ =
                        null == s &&
                        p &&
                        I &&
                        j &&
                        null != b &&
                        !Array.from(c._.APPLICATION_IDENTITIES_SCOPES).some((e) => b.scopes.includes(e)) &&
                        !b.scopes.includes(c.F.SDK_SOCIAL_LAYER) &&
                        !b.scopes.includes(c.F.SDK_SOCIAL_LAYER_PRESENCE),
                    w = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != h
                                ? (0, i.jsx)("img", { className: U.Z2, src: h, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: U.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: f?.name != null ? f.name : (0, i.jsx)("div", { className: U.jC }),
                            }),
                        ],
                    }),
                    S =
                        null == m
                            ? (0, i.jsx)("div", { className: U.qd, children: w })
                            : (0, i.jsx)(g.D, { className: a()(U.qd, U.vk), onClick: x, children: w });
                return {
                    isCurrentUser: o,
                    game: m,
                    openGameProfileModal: x,
                    handleConnect: P,
                    showConnectCta: N,
                    showReconnectCta: _,
                    headerTitle: S,
                };
            })(e),
            Q = (0, b.A)(h.id, m.applicationId),
            $ =
                ((t = m.applicationId),
                (n = X.isCurrentUser),
                (l = (0, d.bG)(
                    [w.A],
                    () =>
                        n &&
                        null != t &&
                        (0, G.RZ)(w.A.getGuildsArray(), "useIsOwnedVibegrationsApplication").length > 0,
                    [n, t],
                )),
                (f = (0, d.bG)([W.Ay], () => W.Ay.getProjectsFetchState()?.type ?? null)),
                r.useEffect(() => {
                    if (("success" === f && O.succeed(), l)) {
                        if (null == f) return void (0, S.hF)();
                        "error" !== f || O.pending || O.fail(() => (0, S.hF)());
                    }
                }, [l, f]),
                (0, d.bG)(
                    [W.Ay],
                    () => {
                        if (!l || null == t) return !1;
                        let e = W.Ay.findProjectByApplicationId(t);
                        return (
                            !!(null != e && (0, W.PV)(e)) || (W.Ay.getProjectsFetchState()?.type !== "success" && null)
                        );
                    },
                    [l, t],
                )),
            ee = (function (e, t) {
                let { pending: n, refresh: r } = (0, P.A)(e);
                return t
                    ? (0, i.jsx)(p.Dr, {
                          id: "application-widget-refresh",
                          label: N.intl.string(N.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: y.RetryIcon },
                          disabled: n,
                          action: r,
                      })
                    : null;
            })(m.applicationId, !0 === $ && !0 !== Y),
            et =
                Z ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? C.hO
                    : void 0,
            en = Q.surfaceConfigs[o.m.WIDGET_TOP],
            ei = Q.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == en || null == ei
            ? null
            : (0, i.jsxs)(F.A, {
                  userId: h.id,
                  widget: m,
                  allowEditing: V,
                  disableInteraction: Y,
                  index: q,
                  trailingContent: J,
                  className: a()(U.Y5, { [U.aK]: H, [U.F9]: K }),
                  headerClassName: U.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != X.game
                              ? (0, i.jsx)(p.Dr, {
                                    id: "view-game-profile",
                                    label: "View Game Profile",
                                    leadingAccessory: { type: "icon", icon: I.GameControllerIcon },
                                    action: X.openGameProfileModal,
                                })
                              : null,
                          ee,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(s.kH, {
                          ...Q,
                          surface: o.m.WIDGET_TOP,
                          surfaceConfig: en,
                          header: X.headerTitle,
                          renderText: et,
                      }),
                      (0, i.jsx)(j.c, {}),
                      (0, i.jsx)(s.kH, { ...Q, surface: o.m.WIDGET_BOTTOM, surfaceConfig: ei, renderText: et }),
                      (0, i.jsx)(z, {
                          isCurrentUser: X.isCurrentUser,
                          isLoading: Q.isLoading,
                          hasData: Q.hasIdentity,
                          showConnectCta: X.showConnectCta,
                          showReconnectCta: X.showReconnectCta,
                          handleConnect: X.handleConnect,
                          disableCTA: x,
                          disableCTAActions: !0 === _ || !1 !== $,
                          cta: B,
                      }),
                  ],
              });
    },
    { Cta: B },
);
