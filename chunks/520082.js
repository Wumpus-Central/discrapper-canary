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
    E = n(793574),
    A = n(688810),
    C = n(206828),
    v = n(486610),
    y = n(531913),
    b = n(417270),
    R = n(770818),
    N = n(375708),
    P = n(429913),
    D = n(409626),
    T = n(692969),
    k = n(569926),
    w = n(158390),
    _ = n(71393),
    S = n(948230),
    W = n(683180),
    L = n(972786);
let G = new w.A(3e4, 3e5);
var O = n(280450),
    F = n(183555),
    M = n(623280),
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
                disableCTAActions: w,
                cta: B,
                subtle: H = !1,
                embedded: K = !1,
                allowEditing: V,
                disableInteraction: Y,
                index: q,
                trailingContent: Z,
                interactiveLinks: J = !1,
            } = e,
            X = (function (e) {
                let { trackUserProfileAction: t } = (0, F.NJ)(),
                    { user: n, widget: l, cta: s } = e,
                    o = (0, d.bG)([O.default], () => O.default.getId()) === n.id,
                    f = (0, P.h)(l.applicationId),
                    h = f?.getIconURL(16),
                    m = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, k.I)(t);
                        return n;
                    })(f),
                    x = (0, T.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: m?.id,
                        source: D.GameProfileSources.UserProfileApplicationWidget,
                        sourceUserId: n.id,
                        trackEntryPointImpression: !0,
                    }),
                    {
                        fetched: p,
                        hasAlreadyLinked: I,
                        canStartAuthorization: j,
                        startAuthorization: v,
                        token: y,
                    } = (0, C.RD)(f),
                    { analyticsLocations: b } = (0, A.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    R = r.useCallback(() => {
                        j &&
                            (t({
                                action: I
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: l.applicationId,
                            }),
                            v({ analyticsLocations: b }));
                    }, [j, I, v, t, l.applicationId, b]),
                    N = null == s && p && !I && j,
                    w =
                        null == s &&
                        p &&
                        I &&
                        j &&
                        null != y &&
                        !Array.from(c._.APPLICATION_IDENTITIES_SCOPES).some((e) => y.scopes.includes(e)) &&
                        !y.scopes.includes(c.F.SDK_SOCIAL_LAYER) &&
                        !y.scopes.includes(c.F.SDK_SOCIAL_LAYER_PRESENCE),
                    _ = (0, i.jsxs)(i.Fragment, {
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
                            ? (0, i.jsx)("div", { className: U.qd, children: _ })
                            : (0, i.jsx)(g.D, { className: a()(U.qd, U.vk), onClick: x, children: _ });
                return {
                    isCurrentUser: o,
                    game: m,
                    openGameProfileModal: x,
                    handleConnect: R,
                    showConnectCta: N,
                    showReconnectCta: w,
                    headerTitle: S,
                };
            })(e),
            Q = (0, y.A)(h.id, m.applicationId),
            $ =
                ((t = m.applicationId),
                (n = X.isCurrentUser),
                (l = (0, d.bG)(
                    [_.A],
                    () =>
                        n &&
                        null != t &&
                        (0, W.RZ)(_.A.getGuildsArray(), "useIsOwnedVibegrationsApplication").length > 0,
                    [n, t],
                )),
                (f = (0, d.bG)([L.Ay], () => L.Ay.getProjectsFetchState()?.type ?? null)),
                r.useEffect(() => {
                    if (("success" === f && G.succeed(), l)) {
                        if (null == f) return void (0, S.hF)();
                        "error" !== f || G.pending || G.fail(() => (0, S.hF)());
                    }
                }, [l, f]),
                (0, d.bG)([L.Ay], () => {
                    if (!l || null == t) return !1;
                    let e = L.Ay.findProjectByApplicationId(t);
                    return !!(null != e && (0, L.PV)(e)) || (L.Ay.getProjectsFetchState()?.type !== "success" && null);
                }, [l, t])),
            ee = (function (e, t) {
                let { pending: n, refresh: r } = (0, R.A)(e);
                return t
                    ? (0, i.jsx)(p.Dr, {
                          id: "application-widget-refresh",
                          label: N.intl.string(N.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: b.RetryIcon },
                          disabled: n,
                          action: r,
                      })
                    : null;
            })(m.applicationId, !0 === $ && !0 !== Y),
            et =
                J ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? v.hO
                    : void 0,
            en = Q.surfaceConfigs[o.m.WIDGET_TOP],
            ei = Q.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == en || null == ei
            ? null
            : (0, i.jsxs)(M.A, {
                  userId: h.id,
                  widget: m,
                  allowEditing: V,
                  disableInteraction: Y,
                  index: q,
                  trailingContent: Z,
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
                          disableCTAActions: !0 === w || !1 !== $,
                          cta: B,
                      }),
                  ],
              });
    },
    { Cta: B },
);
