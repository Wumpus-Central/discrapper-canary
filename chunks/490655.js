n.d(t, { Z: () => P }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
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
    O = n(731072),
    y = n(494118),
    v = n(37607),
    _ = n(351644),
    C = n(108053),
    N = n(981631),
    I = n(388032),
    S = n(498181);
function E(e, t) {
    switch (e) {
        case N.b4C.APPLICATION:
            var n;
            return null != (n = null == t ? void 0 : t.application.name) ? n : '';
        case N.b4C.OVERVIEW:
            return I.intl.string(I.t.s69NLC);
        case N.b4C.CHANNEL_FOLLOWING:
            return I.intl.string(I.t.OrV60t);
        case N.b4C.TWITCH:
            return I.intl.string(I.t.q4pBGx);
        case N.b4C.WEBHOOKS:
            return I.intl.string(I.t.xOg4SE);
        case N.b4C.YOUTUBE:
            return I.intl.string(I.t.aS6cKy);
        case N.b4C.LOBBIES_LINKED:
            return I.intl.string(I.t.tqtDXF);
        default:
            return '';
    }
}
let P = i.memo(function (e) {
    let { section: t, sectionId: n, guild: l, channel: P, integrations: w, editedIntegration: T, webhooks: Z, editedWebhook: k, isFetchingWebhooks: A, refToScroller: D, errors: R, hasChanges: L } = e,
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
        z = null != P ? P : M,
        H = t === N.b4C.APPLICATION ? n : null,
        [G, F] = i.useState(d.$x),
        V = i.useCallback(
            () =>
                L()
                    ? (h.S.dispatch(N.CkL.SHAKE_APP, {
                          duration: 300,
                          intensity: G
                      }),
                      F(Math.min(G + d.d7, d.w6)),
                      h.S.dispatch(N.CkL.EMPHASIZE_NOTICE),
                      !1)
                    : (F(d.$x), !0),
            [L, G]
        ),
        K = i.useCallback((e) => !!V() && (c.Z.setSection(e), !0), [V]),
        {
            applicationIntegrations: q,
            applicationBotIds: Y,
            builtInIntegrations: X,
            customWebhooks: $,
            followedChannelWebhooks: J
        } = i.useMemo(() => {
            let e = {},
                t = {},
                n = {},
                r = [],
                i = [];
            if (null != w)
                for (let r of w)
                    if ('discord' === r.type) {
                        if (null != r.application) {
                            var l;
                            (e[r.application.id] = {
                                application: r.application,
                                integration: r,
                                webhooks: []
                            }),
                                (null == (l = r.application.bot) ? void 0 : l.id) !== void 0 && (t[r.application.bot.id] = r.application.id);
                        }
                    } else r.type in n || (n[r.type] = []), n[r.type].push(r);
            for (let t of Z) (t.channel_id in U || t.channel_id in W) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === N.ylB.CHANNEL_FOLLOWER ? i.push(t) : r.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: r,
                followedChannelWebhooks: i
            };
        }, [w, U, W, Z]);
    i.useEffect(() => {
        if (!A)
            switch (t) {
                case N.b4C.TWITCH:
                    null == X[N.ABu.TWITCH] && c.Z.setSection(N.b4C.OVERVIEW);
                    break;
                case N.b4C.YOUTUBE:
                    null == X[N.ABu.YOUTUBE] && c.Z.setSection(N.b4C.OVERVIEW);
                    break;
                case N.b4C.APPLICATION:
                    (null != H && (H in Y || H in q)) || c.Z.setSection(N.b4C.OVERVIEW);
            }
    }, [q, Y, X, H, t, A]),
        i.useEffect(() => {
            (null == l ? void 0 : l.id) != null && b.Z.getEntitlementsForGuildFetchState(l.id) === b.M.NOT_FETCHED && m.i1(l.id);
        }, [null == l ? void 0 : l.id]),
        i.useEffect(
            () => () => {
                c.Z.setSection(N.b4C.OVERVIEW, null);
            },
            []
        );
    let Q = null;
    switch (t) {
        case N.b4C.TWITCH:
            null != X[N.ABu.TWITCH] &&
                (Q = (0, r.jsx)(O.Z, {
                    guild: l,
                    integrations: X[N.ABu.TWITCH],
                    editedIntegration: T,
                    labelText: I.intl.string(I.t.q4pBGx),
                    platformType: N.ABu.TWITCH,
                    descriptionText: I.intl.string(I.t.V9kNqq),
                    helpText: I.intl.format(I.t.ro1jEB, {
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
                (Q = (0, r.jsx)(O.Z, {
                    guild: l,
                    integrations: X[N.ABu.YOUTUBE],
                    editedIntegration: T,
                    labelText: I.intl.string(I.t.aS6cKy),
                    platformType: N.ABu.YOUTUBE,
                    descriptionText: I.intl.string(I.t['7Tv7JC']),
                    helpText: I.intl.format(I.t['4OSAQ0'], {
                        connectAction: () => (0, u.Z)({ platformType: N.ABu.YOUTUBE }),
                        helpdeskArticle: x.Z.getArticleURL(N.BhN.YOUTUBE_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case N.b4C.APPLICATION:
            var ee;
            let et = null != H ? (null != (ee = q[Y[H]]) ? ee : q[H]) : null;
            null != et &&
                (Q = (0, r.jsx)(j.Z, {
                    guild: l,
                    applicationIntegration: et,
                    editedWebhook: k,
                    selectableWebhookChannels: U,
                    errors: R,
                    canNavigate: V
                }));
            break;
        case N.b4C.CHANNEL_FOLLOWING:
            Q = (0, r.jsx)(y.Z, {
                followedChannelWebhooks: J,
                editedWebhook: k,
                selectableWebhookChannels: U,
                canNavigate: V,
                errors: R
            });
            break;
        case N.b4C.WEBHOOKS:
            Q = (0, r.jsx)(C.Z, {
                guild: l,
                channel: P,
                customWebhooks: $,
                editedWebhook: k,
                selectableWebhookChannels: (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, U, W),
                canNavigate: V,
                refToScroller: D,
                errors: R
            });
            break;
        case N.b4C.LOBBIES_LINKED:
            Q = (0, r.jsx)(v.Z, { guild: l });
            break;
        default:
            Q = (0, r.jsx)(_.Z, {
                guild: l,
                channel: P,
                applicationIntegrations: q,
                builtInIntegrations: X,
                customWebhooks: $,
                followedChannelWebhooks: J,
                isLoadingWebhooks: A || null == l,
                canCreateWebhook: null != z,
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
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.Z, {
                align: p.Z.Align.CENTER,
                className: S.breadcrumbs,
                children:
                    t === N.b4C.OVERVIEW
                        ? (0, r.jsx)(s.vwX, {
                              tag: 'h1',
                              children: E(N.b4C.OVERVIEW)
                          })
                        : (0, r.jsx)(s.OoM, {
                              activeId: t.toString(),
                              breadcrumbs: [N.b4C.OVERVIEW, t].map((e) => ({
                                  id: e.toString(),
                                  label: E(e, q[H])
                              })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && K(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, r.jsx)(s.vwX, {
                                      tag: 'h1',
                                      className: t ? S.breadcrumbActive : S.breadcrumbInactive,
                                      children: e.label
                                  })
                          })
            }),
            Q
        ]
    });
});
