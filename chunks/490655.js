n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(139387),
    d = n(503089),
    u = n(231757),
    m = n(600164),
    h = n(106976),
    p = n(488915),
    g = n(984933),
    x = n(496675),
    f = n(585483),
    b = n(63063),
    v = n(919196),
    C = n(731072),
    I = n(494118),
    N = n(37607),
    j = n(351644),
    _ = n(108053),
    T = n(981631),
    S = n(388032),
    Z = n(172168);
function E(e, t) {
    switch (e) {
        case T.b4C.APPLICATION:
            var n;
            return null !== (n = null == t ? void 0 : t.application.name) && void 0 !== n ? n : '';
        case T.b4C.OVERVIEW:
            return S.intl.string(S.t.s69NLC);
        case T.b4C.CHANNEL_FOLLOWING:
            return S.intl.string(S.t.OrV60t);
        case T.b4C.TWITCH:
            return S.intl.string(S.t.q4pBGx);
        case T.b4C.WEBHOOKS:
            return S.intl.string(S.t.xOg4SE);
        case T.b4C.YOUTUBE:
            return S.intl.string(S.t.aS6cKy);
        case T.b4C.LOBBIES_LINKED:
            return S.intl.string(S.t.tqtDXF);
        default:
            return '';
    }
}
t.Z = l.memo(function (e) {
    let { section: t, sectionId: n, guild: r, channel: y, integrations: A, editedIntegration: R, webhooks: L, editedWebhook: k, isFetchingWebhooks: O, refToScroller: w, errors: M, hasChanges: B } = e,
        P = (0, o.e7)([g.ZP], () => (null != r ? g.ZP.getDefaultChannel(r.id) : null)),
        D = (0, o.cj)([g.ZP], () => g.ZP.getChannels(null == r ? void 0 : r.id)),
        U = (0, o.cj)([x.Z], () =>
            a().keyBy(
                D.SELECTABLE.map((e) => e.channel).filter((e) => x.Z.can(T.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        F = (0, o.cj)([x.Z], () =>
            a().keyBy(
                D.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && x.Z.can(T.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        W = null != y ? y : P,
        H = t === T.b4C.APPLICATION ? n : null,
        [G, z] = l.useState(d.$x),
        V = l.useCallback(
            () =>
                B()
                    ? (f.S.dispatch(T.CkL.SHAKE_APP, {
                          duration: 300,
                          intensity: G
                      }),
                      z(Math.min(G + d.d7, d.w6)),
                      f.S.dispatch(T.CkL.EMPHASIZE_NOTICE),
                      !1)
                    : (z(d.$x), !0),
            [B, G]
        ),
        K = l.useCallback((e) => !!V() && (c.Z.setSection(e), !0), [V]),
        {
            applicationIntegrations: q,
            applicationBotIds: Y,
            builtInIntegrations: J,
            customWebhooks: X,
            followedChannelWebhooks: Q
        } = l.useMemo(() => {
            let e = {},
                t = {},
                n = {},
                i = [],
                l = [];
            if (null != A)
                for (let i of A)
                    if ('discord' === i.type) {
                        if (null != i.application) {
                            var r;
                            (e[i.application.id] = {
                                application: i.application,
                                integration: i,
                                webhooks: []
                            }),
                                (null === (r = i.application.bot) || void 0 === r ? void 0 : r.id) !== void 0 && (t[i.application.bot.id] = i.application.id);
                        }
                    } else !(i.type in n) && (n[i.type] = []), n[i.type].push(i);
            for (let t of L) {
                if (t.channel_id in U || t.channel_id in F) null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === T.ylB.CHANNEL_FOLLOWER ? l.push(t) : i.push(t);
            }
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: l
            };
        }, [A, U, F, L]);
    l.useEffect(() => {
        if (!O)
            switch (t) {
                case T.b4C.TWITCH:
                    null == J[T.ABu.TWITCH] && c.Z.setSection(T.b4C.OVERVIEW);
                    break;
                case T.b4C.YOUTUBE:
                    null == J[T.ABu.YOUTUBE] && c.Z.setSection(T.b4C.OVERVIEW);
                    break;
                case T.b4C.APPLICATION:
                    (null == H || !(H in Y || H in q)) && c.Z.setSection(T.b4C.OVERVIEW);
            }
    }, [q, Y, J, H, t, O]),
        l.useEffect(() => {
            if ((null == r ? void 0 : r.id) != null) p.Z.getEntitlementsForGuildFetchState(r.id) === p.M.NOT_FETCHED && h.i1(r.id);
        }, [null == r ? void 0 : r.id]),
        l.useEffect(
            () => () => {
                c.Z.setSection(T.b4C.OVERVIEW, null);
            },
            []
        );
    let $ = null;
    switch (t) {
        case T.b4C.TWITCH:
            null != J[T.ABu.TWITCH] &&
                ($ = (0, i.jsx)(C.Z, {
                    guild: r,
                    integrations: J[T.ABu.TWITCH],
                    editedIntegration: R,
                    labelText: S.intl.string(S.t.q4pBGx),
                    platformType: T.ABu.TWITCH,
                    descriptionText: S.intl.string(S.t.V9kNqq),
                    helpText: S.intl.format(S.t.ro1jEB, {
                        connectAction: () =>
                            (0, u.Z)({
                                platformType: T.ABu.TWITCH,
                                location: 'Integration Settings'
                            }),
                        helpdeskArticle: b.Z.getArticleURL(T.BhN.TWITCH_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case T.b4C.YOUTUBE:
            null != J[T.ABu.YOUTUBE] &&
                ($ = (0, i.jsx)(C.Z, {
                    guild: r,
                    integrations: J[T.ABu.YOUTUBE],
                    editedIntegration: R,
                    labelText: S.intl.string(S.t.aS6cKy),
                    platformType: T.ABu.YOUTUBE,
                    descriptionText: S.intl.string(S.t['7Tv7JC']),
                    helpText: S.intl.format(S.t['4OSAQ0'], {
                        connectAction: () => (0, u.Z)({ platformType: T.ABu.YOUTUBE }),
                        helpdeskArticle: b.Z.getArticleURL(T.BhN.YOUTUBE_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case T.b4C.APPLICATION:
            var ee;
            let et = null != H ? (null !== (ee = q[Y[H]]) && void 0 !== ee ? ee : q[H]) : null;
            null != et &&
                ($ = (0, i.jsx)(v.Z, {
                    guild: r,
                    applicationIntegration: et,
                    editedWebhook: k,
                    selectableWebhookChannels: U,
                    errors: M,
                    canNavigate: V
                }));
            break;
        case T.b4C.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(I.Z, {
                followedChannelWebhooks: Q,
                editedWebhook: k,
                selectableWebhookChannels: U,
                canNavigate: V,
                errors: M
            });
            break;
        case T.b4C.WEBHOOKS:
            $ = (0, i.jsx)(_.Z, {
                guild: r,
                channel: y,
                customWebhooks: X,
                editedWebhook: k,
                selectableWebhookChannels: {
                    ...U,
                    ...F
                },
                canNavigate: V,
                refToScroller: w,
                errors: M
            });
            break;
        case T.b4C.LOBBIES_LINKED:
            $ = (0, i.jsx)(N.Z, { guild: r });
            break;
        default:
            $ = (0, i.jsx)(j.Z, {
                guild: r,
                channel: y,
                applicationIntegrations: q,
                builtInIntegrations: J,
                customWebhooks: X,
                followedChannelWebhooks: Q,
                isLoadingWebhooks: O || null == r,
                canCreateWebhook: null != W,
                onManageCustomWebhooks: () => {
                    c.Z.setSection(T.b4C.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    c.Z.setSection(T.b4C.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    c.Z.setSection(T.b4C.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case T.ABu.TWITCH:
                            c.Z.setSection(T.b4C.TWITCH);
                            break;
                        case T.ABu.YOUTUBE:
                            c.Z.setSection(T.b4C.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    c.Z.setSection(T.b4C.LOBBIES_LINKED);
                }
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.Z, {
                align: m.Z.Align.CENTER,
                className: Z.breadcrumbs,
                children:
                    t === T.b4C.OVERVIEW
                        ? (0, i.jsx)(s.FormTitle, {
                              tag: 'h1',
                              children: E(T.b4C.OVERVIEW)
                          })
                        : (0, i.jsx)(s.Breadcrumbs, {
                              activeId: t.toString(),
                              breadcrumbs: [T.b4C.OVERVIEW, t].map((e) => ({
                                  id: e.toString(),
                                  label: E(e, q[H])
                              })),
                              onBreadcrumbClick: (e) => {
                                  if (t !== parseInt(e.id)) K(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, i.jsx)(s.FormTitle, {
                                      tag: 'h1',
                                      className: t ? Z.breadcrumbActive : Z.breadcrumbInactive,
                                      children: e.label
                                  })
                          })
            }),
            $
        ]
    });
});
