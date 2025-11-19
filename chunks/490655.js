n.d(t, { Z: () => P }), n(388685), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(139387),
    d = n(503089),
    u = n(231757),
    p = n(600164),
    m = n(106976),
    b = n(488915),
    g = n(984933),
    f = n(496675),
    h = n(585483),
    x = n(63063),
    j = n(919196),
    v = n(731072),
    O = n(494118),
    y = n(37607),
    _ = n(351644),
    C = n(720764),
    N = n(981631),
    S = n(388032),
    E = n(134850);
function I(e, t) {
    switch (e) {
        case N.b4C.APPLICATION:
            var n;
            return null != (n = null == t ? void 0 : t.application.name) ? n : "";
        case N.b4C.OVERVIEW:
            return S.intl.string(S.t.s69NLF);
        case N.b4C.CHANNEL_FOLLOWING:
            return S.intl.string(S.t.OrV60r);
        case N.b4C.TWITCH:
            return S.intl.string(S.t.q4pBG3);
        case N.b4C.WEBHOOKS:
            return S.intl.string(S.t.xOg4SP);
        case N.b4C.YOUTUBE:
            return S.intl.string(S.t.aS6cK4);
        case N.b4C.LOBBIES_LINKED:
            return S.intl.string(S.t.tqtDXC);
        default:
            return "";
    }
}
let P = r.memo(function (e) {
    let {
            section: t,
            sectionId: n,
            guild: l,
            channel: P,
            integrations: w,
            editedIntegration: T,
            webhooks: Z,
            editedWebhook: k,
            isFetchingWebhooks: A,
            refToScroller: D,
            errors: R,
            hasChanges: L,
        } = e,
        M = (0, o.e7)([g.ZP], () => (null != l ? g.ZP.getDefaultChannel(l.id) : null)),
        U = (0, o.cj)([g.ZP], () => g.ZP.getChannels(null == l ? void 0 : l.id)),
        B = (0, o.cj)([f.Z], () =>
            a().keyBy(
                U.SELECTABLE.map((e) => e.channel).filter((e) => f.Z.can(N.Plq.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        W = (0, o.cj)([f.Z], () =>
            a().keyBy(
                U.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && f.Z.can(N.Plq.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        H = null != P ? P : M,
        G = t === N.b4C.APPLICATION ? n : null,
        [F, K] = r.useState(d.$x),
        z = r.useCallback(
            () =>
                L()
                    ? (h.S.dispatch(N.CkL.SHAKE_APP, {
                          duration: 300,
                          intensity: F,
                      }),
                      K(Math.min(F + d.d7, d.w6)),
                      h.S.dispatch(N.CkL.EMPHASIZE_NOTICE),
                      !1)
                    : (K(d.$x), !0),
            [L, F],
        ),
        V = r.useCallback((e) => !!z() && (c.Z.setSection(e), !0), [z]),
        {
            applicationIntegrations: q,
            applicationBotIds: Y,
            builtInIntegrations: J,
            customWebhooks: Q,
            followedChannelWebhooks: X,
        } = r.useMemo(() => {
            let e = {},
                t = {},
                n = {},
                i = [],
                r = [];
            if (null != w)
                for (let i of w)
                    if ("discord" === i.type) {
                        if (null != i.application) {
                            var l;
                            (e[i.application.id] = {
                                application: i.application,
                                integration: i,
                                webhooks: [],
                            }),
                                (null == (l = i.application.bot) ? void 0 : l.id) !== void 0 &&
                                    (t[i.application.bot.id] = i.application.id);
                        }
                    } else i.type in n || (n[i.type] = []), n[i.type].push(i);
            for (let t of Z)
                (t.channel_id in B || t.channel_id in W) &&
                    (null != t.application_id && t.application_id in e
                        ? e[t.application_id].webhooks.push(t)
                        : t.type === N.ylB.CHANNEL_FOLLOWER
                          ? r.push(t)
                          : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: r,
            };
        }, [w, B, W, Z]);
    r.useEffect(() => {
        if (!A)
            switch (t) {
                case N.b4C.TWITCH:
                    null == J[N.ABu.TWITCH] && c.Z.setSection(N.b4C.OVERVIEW);
                    break;
                case N.b4C.YOUTUBE:
                    null == J[N.ABu.YOUTUBE] && c.Z.setSection(N.b4C.OVERVIEW);
                    break;
                case N.b4C.APPLICATION:
                    (null != G && (G in Y || G in q)) || c.Z.setSection(N.b4C.OVERVIEW);
            }
    }, [q, Y, J, G, t, A]),
        r.useEffect(() => {
            (null == l ? void 0 : l.id) != null &&
                b.Z.getEntitlementsForGuildFetchState(l.id) === b.M.NOT_FETCHED &&
                m.i1(l.id);
        }, [null == l ? void 0 : l.id]),
        r.useEffect(
            () => () => {
                c.Z.setSection(N.b4C.OVERVIEW, null);
            },
            [],
        );
    let $ = null;
    switch (t) {
        case N.b4C.TWITCH:
            null != J[N.ABu.TWITCH] &&
                ($ = (0, i.jsx)(v.Z, {
                    guild: l,
                    integrations: J[N.ABu.TWITCH],
                    editedIntegration: T,
                    labelText: S.intl.string(S.t.q4pBG3),
                    platformType: N.ABu.TWITCH,
                    descriptionText: S.intl.string(S.t.V9kNqt),
                    helpText: S.intl.format(S.t.ro1jEN, {
                        connectAction: () =>
                            (0, u.Z)({
                                platformType: N.ABu.TWITCH,
                                location: "Integration Settings",
                            }),
                        helpdeskArticle: x.Z.getArticleURL(N.BhN.TWITCH_INTEGRATION),
                    }),
                    errors: R,
                    canNavigate: z,
                }));
            break;
        case N.b4C.YOUTUBE:
            null != J[N.ABu.YOUTUBE] &&
                ($ = (0, i.jsx)(v.Z, {
                    guild: l,
                    integrations: J[N.ABu.YOUTUBE],
                    editedIntegration: T,
                    labelText: S.intl.string(S.t.aS6cK4),
                    platformType: N.ABu.YOUTUBE,
                    descriptionText: S.intl.string(S.t["7Tv7JK"]),
                    helpText: S.intl.format(S.t["4OSAQ9"], {
                        connectAction: () => (0, u.Z)({ platformType: N.ABu.YOUTUBE }),
                        helpdeskArticle: x.Z.getArticleURL(N.BhN.YOUTUBE_INTEGRATION),
                    }),
                    errors: R,
                    canNavigate: z,
                }));
            break;
        case N.b4C.APPLICATION:
            var ee;
            let et = null != G ? (null != (ee = q[Y[G]]) ? ee : q[G]) : null;
            null != et &&
                ($ = (0, i.jsx)(j.Z, {
                    guild: l,
                    applicationIntegration: et,
                    editedWebhook: k,
                    selectableWebhookChannels: B,
                    errors: R,
                    canNavigate: z,
                }));
            break;
        case N.b4C.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(O.Z, {
                followedChannelWebhooks: X,
                editedWebhook: k,
                selectableWebhookChannels: B,
                canNavigate: z,
                errors: R,
            });
            break;
        case N.b4C.WEBHOOKS:
            $ = (0, i.jsx)(C.Z, {
                guild: l,
                channel: P,
                customWebhooks: Q,
                editedWebhook: k,
                selectableWebhookChannels: (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, B, W),
                canNavigate: z,
                refToScroller: D,
                errors: R,
            });
            break;
        case N.b4C.LOBBIES_LINKED:
            $ = (0, i.jsx)(y.Z, { guild: l });
            break;
        default:
            $ = (0, i.jsx)(_.Z, {
                guild: l,
                channel: P,
                applicationIntegrations: q,
                builtInIntegrations: J,
                customWebhooks: Q,
                followedChannelWebhooks: X,
                isLoadingWebhooks: A || null == l,
                canCreateWebhook: null != H,
                onManageCustomWebhooks: () => {
                    c.Z.setSection(N.b4C.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    c.Z.setSection(N.b4C.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    c.Z.setSection(N.b4C.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case N.ABu.TWITCH:
                            c.Z.setSection(N.b4C.TWITCH);
                            break;
                        case N.ABu.YOUTUBE:
                            c.Z.setSection(N.b4C.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    c.Z.setSection(N.b4C.LOBBIES_LINKED);
                },
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.Z, {
                align: p.Z.Align.CENTER,
                className: E.breadcrumbs,
                children:
                    t === N.b4C.OVERVIEW
                        ? (0, i.jsx)(s.Heading, {
                              variant: "heading-lg/semibold",
                              children: I(N.b4C.OVERVIEW),
                          })
                        : (0, i.jsx)(s.OoM, {
                              activeId: t.toString(),
                              breadcrumbs: [N.b4C.OVERVIEW, t].map((e) => ({
                                  id: e.toString(),
                                  label: I(e, q[G]),
                              })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && V(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, i.jsx)(s.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: t ? E.breadcrumbActive : E.breadcrumbInactive,
                                      children: e.label,
                                  }),
                          }),
            }),
            $,
        ],
    });
});
