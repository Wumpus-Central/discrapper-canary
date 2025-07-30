(n.d(t, { Z: () => E }), n(388685), n(539854));
var i = n(255367),
    r = n(73800),
    l = n(392711),
    o = n.n(l),
    a = n(442837),
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
    C = n(108053),
    N = n(981631),
    S = n(388032),
    Z = n(498181);
function I(e, t) {
    switch (e) {
        case N.b4C.APPLICATION:
            var n;
            return null != (n = null == t ? void 0 : t.application.name) ? n : '';
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
            return '';
    }
}
let E = r.memo(function (e) {
    let { section: t, sectionId: n, guild: l, channel: E, integrations: w, editedIntegration: T, webhooks: P, editedWebhook: k, isFetchingWebhooks: A, refToScroller: D, errors: R, hasChanges: L } = e,
        M = (0, a.e7)([g.ZP], () => (null != l ? g.ZP.getDefaultChannel(l.id) : null)),
        B = (0, a.cj)([g.ZP], () => g.ZP.getChannels(null == l ? void 0 : l.id)),
        U = (0, a.cj)([f.Z], () =>
            o().keyBy(
                B.SELECTABLE.map((e) => e.channel).filter((e) => f.Z.can(N.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        W = (0, a.cj)([f.Z], () =>
            o().keyBy(
                B.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && f.Z.can(N.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        H = null != E ? E : M,
        G = t === N.b4C.APPLICATION ? n : null,
        [z, F] = r.useState(d.$x),
        V = r.useCallback(
            () =>
                L()
                    ? (h.S.dispatch(N.CkL.SHAKE_APP, {
                          duration: 300,
                          intensity: z
                      }),
                      F(Math.min(z + d.d7, d.w6)),
                      h.S.dispatch(N.CkL.EMPHASIZE_NOTICE),
                      !1)
                    : (F(d.$x), !0),
            [L, z]
        ),
        K = r.useCallback((e) => !!V() && (c.Z.setSection(e), !0), [V]),
        {
            applicationIntegrations: q,
            applicationBotIds: Y,
            builtInIntegrations: X,
            customWebhooks: $,
            followedChannelWebhooks: J
        } = r.useMemo(() => {
            let e = {},
                t = {},
                n = {},
                i = [],
                r = [];
            if (null != w)
                for (let i of w)
                    if ('discord' === i.type) {
                        if (null != i.application) {
                            var l;
                            ((e[i.application.id] = {
                                application: i.application,
                                integration: i,
                                webhooks: []
                            }),
                                (null == (l = i.application.bot) ? void 0 : l.id) !== void 0 && (t[i.application.bot.id] = i.application.id));
                        }
                    } else (i.type in n || (n[i.type] = []), n[i.type].push(i));
            for (let t of P) (t.channel_id in U || t.channel_id in W) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === N.ylB.CHANNEL_FOLLOWER ? r.push(t) : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: r
            };
        }, [w, U, W, P]);
    (r.useEffect(() => {
        if (!A)
            switch (t) {
                case N.b4C.TWITCH:
                    null == X[N.ABu.TWITCH] && c.Z.setSection(N.b4C.OVERVIEW);
                    break;
                case N.b4C.YOUTUBE:
                    null == X[N.ABu.YOUTUBE] && c.Z.setSection(N.b4C.OVERVIEW);
                    break;
                case N.b4C.APPLICATION:
                    (null != G && (G in Y || G in q)) || c.Z.setSection(N.b4C.OVERVIEW);
            }
    }, [q, Y, X, G, t, A]),
        r.useEffect(() => {
            (null == l ? void 0 : l.id) != null && b.Z.getEntitlementsForGuildFetchState(l.id) === b.M.NOT_FETCHED && m.i1(l.id);
        }, [null == l ? void 0 : l.id]),
        r.useEffect(
            () => () => {
                c.Z.setSection(N.b4C.OVERVIEW, null);
            },
            []
        ));
    let Q = null;
    switch (t) {
        case N.b4C.TWITCH:
            null != X[N.ABu.TWITCH] &&
                (Q = (0, i.jsx)(v.Z, {
                    guild: l,
                    integrations: X[N.ABu.TWITCH],
                    editedIntegration: T,
                    labelText: S.intl.string(S.t.q4pBGx),
                    platformType: N.ABu.TWITCH,
                    descriptionText: S.intl.string(S.t.V9kNqq),
                    helpText: S.intl.format(S.t.ro1jEB, {
                        connectAction: () =>
                            (0, u.Z)({
                                platformType: N.ABu.TWITCH,
                                location: 'Integration Settings'
                            }),
                        helpdeskArticle: x.Z.getArticleURL(N.BhN.TWITCH_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case N.b4C.YOUTUBE:
            null != X[N.ABu.YOUTUBE] &&
                (Q = (0, i.jsx)(v.Z, {
                    guild: l,
                    integrations: X[N.ABu.YOUTUBE],
                    editedIntegration: T,
                    labelText: S.intl.string(S.t.aS6cKy),
                    platformType: N.ABu.YOUTUBE,
                    descriptionText: S.intl.string(S.t['7Tv7JC']),
                    helpText: S.intl.format(S.t['4OSAQ0'], {
                        connectAction: () => (0, u.Z)({ platformType: N.ABu.YOUTUBE }),
                        helpdeskArticle: x.Z.getArticleURL(N.BhN.YOUTUBE_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case N.b4C.APPLICATION:
            var ee;
            let et = null != G ? (null != (ee = q[Y[G]]) ? ee : q[G]) : null;
            null != et &&
                (Q = (0, i.jsx)(j.Z, {
                    guild: l,
                    applicationIntegration: et,
                    editedWebhook: k,
                    selectableWebhookChannels: U,
                    errors: R,
                    canNavigate: V
                }));
            break;
        case N.b4C.CHANNEL_FOLLOWING:
            Q = (0, i.jsx)(O.Z, {
                followedChannelWebhooks: J,
                editedWebhook: k,
                selectableWebhookChannels: U,
                canNavigate: V,
                errors: R
            });
            break;
        case N.b4C.WEBHOOKS:
            Q = (0, i.jsx)(C.Z, {
                guild: l,
                channel: E,
                customWebhooks: $,
                editedWebhook: k,
                selectableWebhookChannels: (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                ((i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i));
                            }));
                    }
                    return e;
                })({}, U, W),
                canNavigate: V,
                refToScroller: D,
                errors: R
            });
            break;
        case N.b4C.LOBBIES_LINKED:
            Q = (0, i.jsx)(y.Z, { guild: l });
            break;
        default:
            Q = (0, i.jsx)(_.Z, {
                guild: l,
                channel: E,
                applicationIntegrations: q,
                builtInIntegrations: X,
                customWebhooks: $,
                followedChannelWebhooks: J,
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
                }
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.Z, {
                align: p.Z.Align.CENTER,
                className: Z.breadcrumbs,
                children:
                    t === N.b4C.OVERVIEW
                        ? (0, i.jsx)(s.vwX, {
                              tag: 'h1',
                              children: I(N.b4C.OVERVIEW)
                          })
                        : (0, i.jsx)(s.OoM, {
                              activeId: t.toString(),
                              breadcrumbs: [N.b4C.OVERVIEW, t].map((e) => ({
                                  id: e.toString(),
                                  label: I(e, q[G])
                              })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && K(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, i.jsx)(s.vwX, {
                                      tag: 'h1',
                                      className: t ? Z.breadcrumbActive : Z.breadcrumbInactive,
                                      children: e.label
                                  })
                          })
            }),
            Q
        ]
    });
});
