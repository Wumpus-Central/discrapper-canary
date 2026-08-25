n.d(t, { A: () => eo });
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
    v = n(435558),
    b = n.n(v),
    y = n(807081),
    R = n(478676),
    N = n.n(R),
    P = n(182490);
let D = {
    ...N().defaultRules.image,
    order: N().defaultRules.link.order - 0.5,
    requiredFirstCharacters: ["!"],
    parse: (e) => ({ type: P.D.TEXT, content: e[0] }),
};
var T = n(480084),
    k = n(29814);
let w = (0, n(551965).A)([
        b().pick(k.Ay.RULES, ["text", "link"]),
        { image: D },
        (0, T.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0, enableEmojiClick: !1, emojiFocusable: !1 }),
    ]),
    _ = y.aV(w);
function S(e, t) {
    return _(e, !0, { allowLinks: !0, ...t });
}
y.X(w);
var W = n(531913),
    L = n(417270),
    G = n(691540),
    O = n(857250),
    F = n(97483),
    M = n(552609),
    U = n(375708),
    z = n(51906),
    B = n(636537),
    H = n(652215);
let K = new z.Zy();
var Y = n(429913),
    q = n(409626),
    V = n(692969),
    Z = n(569926),
    J = n(158390),
    X = n(71393),
    Q = n(948230),
    $ = n(683180),
    ee = n(972786);
let et = new J.A(3e4, 3e5);
var en = n(280450),
    ei = n(183555),
    er = n(623280),
    el = n(58266);
function ea(e) {
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
              className: el.qr,
              children: [
                  n || r || l || a
                      ? null
                      : (0, i.jsxs)("div", {
                            className: el.o8,
                            children: [
                                (0, i.jsx)(f.Q, { size: "xxs" }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: U.intl.string(U.t.z5K4Uv),
                                }),
                            ],
                        }),
                  l
                      ? (0, i.jsx)(es, {
                            heading: U.intl.string(U.t.UDPRLO),
                            content: U.intl.string(U.t["OW/2al"]),
                            buttons: (0, i.jsx)(h.$, { text: U.intl.string(U.t.S0W8Z5), onClick: s }),
                        })
                      : a
                        ? (0, i.jsx)(es, {
                              heading: U.intl.string(U.t["9WarGY"]),
                              content: U.intl.string(U.t.qgxnKe),
                              buttons: (0, i.jsx)(h.$, { text: U.intl.string(U.t.vD60Pv), onClick: s }),
                          })
                        : d,
              ],
          }));
}
function es(e) {
    return (0, i.jsxs)(m.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: el.lO,
        children: [
            (0, i.jsxs)(m.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: U.intl.string(U.t.zMUr6Z),
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
let eo = Object.assign(
    function (e) {
        var t, n;
        let l,
            f,
            {
                user: h,
                widget: m,
                disableCTA: x,
                disableCTAActions: v,
                cta: b,
                subtle: y = !1,
                embedded: R = !1,
                allowEditing: N,
                disableInteraction: P,
                index: D,
                trailingContent: T,
                interactiveLinks: k = !1,
            } = e,
            w = (function (e) {
                let { trackUserProfileAction: t } = (0, ei.NJ)(),
                    { user: n, widget: l, cta: s } = e,
                    o = (0, d.bG)([en.default], () => en.default.getId()) === n.id,
                    f = (0, Y.h)(l.applicationId),
                    h = f?.getIconURL(16),
                    m = (function (e) {
                        let t = e?.getCanonicalGameId(),
                            { data: n } = (0, Z.I)(t);
                        return n;
                    })(f),
                    x = (0, V.A)({
                        location: "UserProfileApplicationWidget",
                        applicationId: m?.id,
                        source: q.GameProfileSources.UserProfileApplicationWidget,
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
                    { analyticsLocations: y } = (0, A.Ay)(E.A.USER_PROFILE_APPLICATION_WIDGET),
                    R = r.useCallback(() => {
                        j &&
                            (t({
                                action: I
                                    ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                                    : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                                applicationId: l.applicationId,
                            }),
                            v({ analyticsLocations: y }));
                    }, [j, I, v, t, l.applicationId, y]),
                    N = null == s && p && !I && j,
                    P =
                        null == s &&
                        p &&
                        I &&
                        j &&
                        null != b &&
                        !Array.from(c._.APPLICATION_IDENTITIES_SCOPES).some((e) => b.scopes.includes(e)) &&
                        !b.scopes.includes(c.F.SDK_SOCIAL_LAYER) &&
                        !b.scopes.includes(c.F.SDK_SOCIAL_LAYER_PRESENCE),
                    D = (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != h
                                ? (0, i.jsx)("img", { className: el.Z2, src: h, width: 16, height: 16, alt: "" })
                                : (0, i.jsx)("span", { className: el.qP }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                children: f?.name != null ? f.name : (0, i.jsx)("div", { className: el.jC }),
                            }),
                        ],
                    }),
                    T =
                        null == m
                            ? (0, i.jsx)("div", { className: el.qd, children: D })
                            : (0, i.jsx)(g.D, { className: a()(el.qd, el.vk), onClick: x, children: D });
                return {
                    isCurrentUser: o,
                    game: m,
                    openGameProfileModal: x,
                    handleConnect: R,
                    showConnectCta: N,
                    showReconnectCta: P,
                    headerTitle: T,
                };
            })(e),
            _ = (0, W.A)(h.id, m.applicationId),
            z =
                ((t = m.applicationId),
                (n = w.isCurrentUser),
                (l = (0, d.bG)(
                    [X.A],
                    () =>
                        n &&
                        null != t &&
                        (0, $.RZ)(X.A.getGuildsArray(), "useIsOwnedVibegrationsApplication").length > 0,
                    [n, t],
                )),
                (f = (0, d.bG)([ee.A], () => ee.A.getProjectsFetchState()?.type ?? null)),
                r.useEffect(() => {
                    if (("success" === f && et.succeed(), l)) {
                        if (null == f) return void (0, Q.hF)();
                        "error" !== f || et.pending || et.fail(() => (0, Q.hF)());
                    }
                }, [l, f]),
                (0, d.bG)([ee.A], () => {
                    if (!l || null == t) return !1;
                    let e = ee.A.findProjectByApplicationId(t);
                    return !!(null != e && (0, ee.P)(e)) || (ee.A.getProjectsFetchState()?.type !== "success" && null);
                }, [l, t])),
            J = (function (e, t) {
                let { pending: n, refresh: l } = (function (e) {
                    let [t, n] = r.useState(!1),
                        i = r.useRef(!0);
                    r.useEffect(
                        () => (
                            (i.current = !0),
                            () => {
                                i.current = !1;
                            }
                        ),
                        [],
                    );
                    let l = r.useCallback(() => {
                        !t &&
                            null != e &&
                            (n(!0),
                            K.one(e, async () => {
                                try {
                                    return (
                                        await B.Bo.post({
                                            url: H.Rsh.APPLICATION_WIDGET_REFRESH(e),
                                            rejectWithError: !0,
                                            failImmediatelyWhenRateLimited: !0,
                                        }),
                                        "dispatched"
                                    );
                                } catch (e) {
                                    switch (
                                        (function (e) {
                                            if (e instanceof B.oh) return e.status;
                                            let t = e?.status;
                                            return "number" == typeof t ? t : void 0;
                                        })(e)
                                    ) {
                                        case 403:
                                            return "unauthorized";
                                        case 404:
                                            return "no_widget_config";
                                        case 429:
                                            return "rate_limited";
                                        case 503:
                                            return "undeliverable";
                                        default:
                                            return "failed";
                                    }
                                }
                            })
                                .then((e) => {
                                    let t = (function (e) {
                                        switch (e) {
                                            case "dispatched":
                                                return { text: U.intl.string(M.default["um/5Kc"]), type: F.Ck.SUCCESS };
                                            case "rate_limited":
                                                return { text: U.intl.string(M.default.T1n7hc), type: F.Ck.FAILURE };
                                            case "unauthorized":
                                                return { text: U.intl.string(M.default["30UxZU"]), type: F.Ck.FAILURE };
                                            case "no_widget_config":
                                                return { text: U.intl.string(M.default["1UFWet"]), type: F.Ck.FAILURE };
                                            case "undeliverable":
                                                return { text: U.intl.string(M.default.ypKX9A), type: F.Ck.FAILURE };
                                            default:
                                                return { text: U.intl.string(M.default.BLKD4B), type: F.Ck.FAILURE };
                                        }
                                    })(e);
                                    (0, G.P0)((0, O.o)(t.text, t.type));
                                })
                                .finally(() => {
                                    i.current && n(!1);
                                }));
                    }, [e, t]);
                    return { pending: t, refresh: l };
                })(e);
                return t
                    ? (0, i.jsx)(p.Dr, {
                          id: "application-widget-refresh",
                          label: U.intl.string(U.t.wzzjk9),
                          leadingAccessory: { type: "icon", icon: L.RetryIcon },
                          disabled: n,
                          action: l,
                      })
                    : null;
            })(m.applicationId, !0 === z && !0 !== P),
            es =
                k ||
                (function (e) {
                    let { disableInteraction: t } = e;
                    return !0 !== t;
                })(e)
                    ? S
                    : void 0,
            eo = _.surfaceConfigs[o.m.WIDGET_TOP],
            ec = _.surfaceConfigs[o.m.WIDGET_BOTTOM];
        return null == eo || null == ec
            ? null
            : (0, i.jsxs)(er.A, {
                  userId: h.id,
                  widget: m,
                  allowEditing: N,
                  disableInteraction: P,
                  index: D,
                  trailingContent: T,
                  className: a()(el.Y5, { [el.aK]: y, [el.F9]: R }),
                  headerClassName: el.JE,
                  additionalManageWidgetMenuItems: (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != w.game
                              ? (0, i.jsx)(p.Dr, {
                                    id: "view-game-profile",
                                    label: "View Game Profile",
                                    leadingAccessory: { type: "icon", icon: I.GameControllerIcon },
                                    action: w.openGameProfileModal,
                                })
                              : null,
                          J,
                      ],
                  }),
                  children: [
                      (0, i.jsx)(s.kH, {
                          ..._,
                          surface: o.m.WIDGET_TOP,
                          surfaceConfig: eo,
                          header: w.headerTitle,
                          renderText: es,
                      }),
                      (0, i.jsx)(j.c, {}),
                      (0, i.jsx)(s.kH, { ..._, surface: o.m.WIDGET_BOTTOM, surfaceConfig: ec, renderText: es }),
                      (0, i.jsx)(ea, {
                          isCurrentUser: w.isCurrentUser,
                          isLoading: _.isLoading,
                          hasData: _.hasIdentity,
                          showConnectCta: w.showConnectCta,
                          showReconnectCta: w.showReconnectCta,
                          handleConnect: w.handleConnect,
                          disableCTA: x,
                          disableCTAActions: !0 === v || !1 !== z,
                          cta: b,
                      }),
                  ],
              });
    },
    { Cta: es },
);
