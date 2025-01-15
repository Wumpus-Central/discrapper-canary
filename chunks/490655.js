n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    d = n(139387),
    c = n(503089),
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
    N = n(494118),
    I = n(37607),
    j = n(351644),
    T = n(108053),
    _ = n(981631),
    Z = n(388032),
    E = n(643617);
function S(e, t) {
    switch (e) {
        case _.b4C.APPLICATION:
            var n;
            return null !== (n = null == t ? void 0 : t.application.name) && void 0 !== n ? n : '';
        case _.b4C.OVERVIEW:
            return Z.intl.string(Z.t.s69NLC);
        case _.b4C.CHANNEL_FOLLOWING:
            return Z.intl.string(Z.t.OrV60t);
        case _.b4C.TWITCH:
            return Z.intl.string(Z.t.q4pBGx);
        case _.b4C.WEBHOOKS:
            return Z.intl.string(Z.t.xOg4SE);
        case _.b4C.YOUTUBE:
            return Z.intl.string(Z.t.aS6cKy);
        case _.b4C.LOBBIES_LINKED:
            return Z.intl.string(Z.t.tqtDXF);
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
                D.SELECTABLE.map((e) => e.channel).filter((e) => x.Z.can(_.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        F = (0, o.cj)([x.Z], () =>
            a().keyBy(
                D.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && x.Z.can(_.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        W = null != y ? y : P,
        H = t === _.b4C.APPLICATION ? n : null,
        [G, z] = l.useState(c.$x),
        V = l.useCallback(
            () =>
                B()
                    ? (f.S.dispatch(_.CkL.SHAKE_APP, {
                          duration: 300,
                          intensity: G
                      }),
                      z(Math.min(G + c.d7, c.w6)),
                      f.S.dispatch(_.CkL.EMPHASIZE_NOTICE),
                      !1)
                    : (z(c.$x), !0),
            [B, G]
        ),
        K = l.useCallback((e) => !!V() && (d.Z.setSection(e), !0), [V]),
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
                if (t.channel_id in U || t.channel_id in F) null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === _.ylB.CHANNEL_FOLLOWER ? l.push(t) : i.push(t);
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
                case _.b4C.TWITCH:
                    null == J[_.ABu.TWITCH] && d.Z.setSection(_.b4C.OVERVIEW);
                    break;
                case _.b4C.YOUTUBE:
                    null == J[_.ABu.YOUTUBE] && d.Z.setSection(_.b4C.OVERVIEW);
                    break;
                case _.b4C.APPLICATION:
                    (null == H || !(H in Y || H in q)) && d.Z.setSection(_.b4C.OVERVIEW);
            }
    }, [q, Y, J, H, t, O]),
        l.useEffect(() => {
            if ((null == r ? void 0 : r.id) != null) p.Z.getEntitlementsForGuildFetchState(r.id) === p.M.NOT_FETCHED && h.i1(r.id);
        }, [null == r ? void 0 : r.id]),
        l.useEffect(
            () => () => {
                d.Z.setSection(_.b4C.OVERVIEW, null);
            },
            []
        );
    let $ = null;
    switch (t) {
        case _.b4C.TWITCH:
            null != J[_.ABu.TWITCH] &&
                ($ = (0, i.jsx)(C.Z, {
                    guild: r,
                    integrations: J[_.ABu.TWITCH],
                    editedIntegration: R,
                    labelText: Z.intl.string(Z.t.q4pBGx),
                    platformType: _.ABu.TWITCH,
                    descriptionText: Z.intl.string(Z.t.V9kNqq),
                    helpText: Z.intl.format(Z.t.ro1jEB, {
                        connectAction: () =>
                            (0, u.Z)({
                                platformType: _.ABu.TWITCH,
                                location: 'Integration Settings'
                            }),
                        helpdeskArticle: b.Z.getArticleURL(_.BhN.TWITCH_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case _.b4C.YOUTUBE:
            null != J[_.ABu.YOUTUBE] &&
                ($ = (0, i.jsx)(C.Z, {
                    guild: r,
                    integrations: J[_.ABu.YOUTUBE],
                    editedIntegration: R,
                    labelText: Z.intl.string(Z.t.aS6cKy),
                    platformType: _.ABu.YOUTUBE,
                    descriptionText: Z.intl.string(Z.t['7Tv7JC']),
                    helpText: Z.intl.format(Z.t['4OSAQ0'], {
                        connectAction: () => (0, u.Z)({ platformType: _.ABu.YOUTUBE }),
                        helpdeskArticle: b.Z.getArticleURL(_.BhN.YOUTUBE_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case _.b4C.APPLICATION:
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
        case _.b4C.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(N.Z, {
                followedChannelWebhooks: Q,
                editedWebhook: k,
                selectableWebhookChannels: U,
                canNavigate: V,
                errors: M
            });
            break;
        case _.b4C.WEBHOOKS:
            $ = (0, i.jsx)(T.Z, {
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
        case _.b4C.LOBBIES_LINKED:
            $ = (0, i.jsx)(I.Z, { guild: r });
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
                    d.Z.setSection(_.b4C.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    d.Z.setSection(_.b4C.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    d.Z.setSection(_.b4C.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case _.ABu.TWITCH:
                            d.Z.setSection(_.b4C.TWITCH);
                            break;
                        case _.ABu.YOUTUBE:
                            d.Z.setSection(_.b4C.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    d.Z.setSection(_.b4C.LOBBIES_LINKED);
                }
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.Z, {
                align: m.Z.Align.CENTER,
                className: E.breadcrumbs,
                children:
                    t === _.b4C.OVERVIEW
                        ? (0, i.jsx)(s.FormTitle, {
                              tag: 'h1',
                              children: S(_.b4C.OVERVIEW)
                          })
                        : (0, i.jsx)(s.Breadcrumbs, {
                              activeId: t.toString(),
                              breadcrumbs: [_.b4C.OVERVIEW, t].map((e) => ({
                                  id: e.toString(),
                                  label: S(e, q[H])
                              })),
                              onBreadcrumbClick: (e) => {
                                  if (t !== parseInt(e.id)) K(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, i.jsx)(s.FormTitle, {
                                      tag: 'h1',
                                      className: t ? E.breadcrumbActive : E.breadcrumbInactive,
                                      children: e.label
                                  })
                          })
            }),
            $
        ]
    });
});
