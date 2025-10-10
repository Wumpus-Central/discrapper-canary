n.d(t, { Z: () => I }), n(388685), n(539854);
var i = n(951288),
    r = n(647438),
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
    w = n(134850);
function P(e, t) {
    switch (e) {
        case N.b4C.APPLICATION:
            var n;
            return null != (n = null == t ? void 0 : t.application.name) ? n : "";
        case N.b4C.OVERVIEW:
            return S.intl.string(S.t.s69NLC);
        case N.b4C.CHANNEL_FOLLOWING:
            return S.intl.string(S.t.OrV60t);
        case N.b4C.TWITCH:
            return S.intl.string(S.t.q4pBGx);
        case N.b4C.WEBHOOKS:
            return S.intl.string(S.t.xOg4SE);
        case N.b4C.YOUTUBE:
            return S.intl.string(S.t.aS6cKy);
        case N.b4C.LOBBIES_LINKED:
            return S.intl.string(S.t.tqtDXF);
        default:
            return "";
    }
}
let I = r.memo(function (e) {
    let {
            section: t,
            sectionId: n,
            guild: l,
            channel: I,
            integrations: E,
            editedIntegration: Z,
            webhooks: T,
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
        H = null != I ? I : M,
        G = t === N.b4C.APPLICATION ? n : null,
        [z, F] = r.useState(d.$x),
        K = r.useCallback(
            () =>
                L()
                    ? (h.S.dispatch(N.CkL.SHAKE_APP, {
                          duration: 300,
                          intensity: z,
                      }),
                      F(Math.min(z + d.d7, d.w6)),
                      h.S.dispatch(N.CkL.EMPHASIZE_NOTICE),
                      !1)
                    : (F(d.$x), !0),
            [L, z],
        ),
        q = r.useCallback((e) => !!K() && (c.Z.setSection(e), !0), [K]),
        {
            applicationIntegrations: V,
            applicationBotIds: Y,
            builtInIntegrations: J,
            customWebhooks: X,
            followedChannelWebhooks: Q,
        } = r.useMemo(() => {
            let e = {},
                t = {},
                n = {},
                i = [],
                r = [];
            if (null != E)
                for (let i of E)
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
            for (let t of T)
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
        }, [E, B, W, T]);
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
                    (null != G && (G in Y || G in V)) || c.Z.setSection(N.b4C.OVERVIEW);
            }
    }, [V, Y, J, G, t, A]),
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
                    editedIntegration: Z,
                    labelText: S.intl.string(S.t.q4pBGx),
                    platformType: N.ABu.TWITCH,
                    descriptionText: S.intl.string(S.t.V9kNqq),
                    helpText: S.intl.format(S.t.ro1jEB, {
                        connectAction: () =>
                            (0, u.Z)({
                                platformType: N.ABu.TWITCH,
                                location: "Integration Settings",
                            }),
                        helpdeskArticle: x.Z.getArticleURL(N.BhN.TWITCH_INTEGRATION),
                    }),
                    errors: R,
                    canNavigate: K,
                }));
            break;
        case N.b4C.YOUTUBE:
            null != J[N.ABu.YOUTUBE] &&
                ($ = (0, i.jsx)(v.Z, {
                    guild: l,
                    integrations: J[N.ABu.YOUTUBE],
                    editedIntegration: Z,
                    labelText: S.intl.string(S.t.aS6cKy),
                    platformType: N.ABu.YOUTUBE,
                    descriptionText: S.intl.string(S.t["7Tv7JC"]),
                    helpText: S.intl.format(S.t["4OSAQ0"], {
                        connectAction: () => (0, u.Z)({ platformType: N.ABu.YOUTUBE }),
                        helpdeskArticle: x.Z.getArticleURL(N.BhN.YOUTUBE_INTEGRATION),
                    }),
                    errors: R,
                    canNavigate: K,
                }));
            break;
        case N.b4C.APPLICATION:
            var ee;
            let et = null != G ? (null != (ee = V[Y[G]]) ? ee : V[G]) : null;
            null != et &&
                ($ = (0, i.jsx)(j.Z, {
                    guild: l,
                    applicationIntegration: et,
                    editedWebhook: k,
                    selectableWebhookChannels: B,
                    errors: R,
                    canNavigate: K,
                }));
            break;
        case N.b4C.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(O.Z, {
                followedChannelWebhooks: Q,
                editedWebhook: k,
                selectableWebhookChannels: B,
                canNavigate: K,
                errors: R,
            });
            break;
        case N.b4C.WEBHOOKS:
            $ = (0, i.jsx)(C.Z, {
                guild: l,
                channel: I,
                customWebhooks: X,
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
                canNavigate: K,
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
                channel: I,
                applicationIntegrations: V,
                builtInIntegrations: J,
                customWebhooks: X,
                followedChannelWebhooks: Q,
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
                className: w.breadcrumbs,
                children:
                    t === N.b4C.OVERVIEW
                        ? (0, i.jsx)(s.vwX, {
                              tag: "h1",
                              children: P(N.b4C.OVERVIEW),
                          })
                        : (0, i.jsx)(s.OoM, {
                              activeId: t.toString(),
                              breadcrumbs: [N.b4C.OVERVIEW, t].map((e) => ({
                                  id: e.toString(),
                                  label: P(e, V[G]),
                              })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && q(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, i.jsx)(s.vwX, {
                                      tag: "h1",
                                      className: t ? w.breadcrumbActive : w.breadcrumbInactive,
                                      children: e.label,
                                  }),
                          }),
            }),
            $,
        ],
    });
});
