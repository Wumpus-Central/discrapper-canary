n.d(t, { Z: () => y }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    d = n(139387),
    c = n(503089),
    u = n(231757),
    m = n(600164),
    h = n(106976),
    x = n(488915),
    p = n(984933),
    g = n(496675),
    f = n(585483),
    b = n(63063),
    v = n(919196),
    _ = n(731072),
    j = n(494118),
    N = n(37607),
    C = n(351644),
    I = n(108053),
    Z = n(981631),
    T = n(388032),
    E = n(172168);
function S(e, t) {
    switch (e) {
        case Z.b4C.APPLICATION:
            var n;
            return null !== (n = null == t ? void 0 : t.application.name) && void 0 !== n ? n : '';
        case Z.b4C.OVERVIEW:
            return T.intl.string(T.t.s69NLC);
        case Z.b4C.CHANNEL_FOLLOWING:
            return T.intl.string(T.t.OrV60t);
        case Z.b4C.TWITCH:
            return T.intl.string(T.t.q4pBGx);
        case Z.b4C.WEBHOOKS:
            return T.intl.string(T.t.xOg4SE);
        case Z.b4C.YOUTUBE:
            return T.intl.string(T.t.aS6cKy);
        case Z.b4C.LOBBIES_LINKED:
            return T.intl.string(T.t.tqtDXF);
        default:
            return '';
    }
}
let y = l.memo(function (e) {
    let { section: t, sectionId: n, guild: a, channel: y, integrations: A, editedIntegration: k, webhooks: R, editedWebhook: L, isFetchingWebhooks: O, refToScroller: w, errors: P, hasChanges: D } = e,
        M = (0, s.e7)([p.ZP], () => (null != a ? p.ZP.getDefaultChannel(a.id) : null)),
        B = (0, s.cj)([p.ZP], () => p.ZP.getChannels(null == a ? void 0 : a.id)),
        U = (0, s.cj)([g.Z], () =>
            r().keyBy(
                B.SELECTABLE.map((e) => e.channel).filter((e) => g.Z.can(Z.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        W = (0, s.cj)([g.Z], () =>
            r().keyBy(
                B.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && g.Z.can(Z.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        z = null != y ? y : M,
        H = t === Z.b4C.APPLICATION ? n : null,
        [G, F] = l.useState(c.$x),
        V = l.useCallback(
            () =>
                D()
                    ? (f.S.dispatch(Z.CkL.SHAKE_APP, {
                          duration: 300,
                          intensity: G
                      }),
                      F(Math.min(G + c.d7, c.w6)),
                      f.S.dispatch(Z.CkL.EMPHASIZE_NOTICE),
                      !1)
                    : (F(c.$x), !0),
            [D, G]
        ),
        K = l.useCallback((e) => !!V() && (d.Z.setSection(e), !0), [V]),
        {
            applicationIntegrations: q,
            applicationBotIds: Y,
            builtInIntegrations: X,
            customWebhooks: $,
            followedChannelWebhooks: J
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
                            var a;
                            (e[i.application.id] = {
                                application: i.application,
                                integration: i,
                                webhooks: []
                            }),
                                (null === (a = i.application.bot) || void 0 === a ? void 0 : a.id) !== void 0 && (t[i.application.bot.id] = i.application.id);
                        }
                    } else i.type in n || (n[i.type] = []), n[i.type].push(i);
            for (let t of R) (t.channel_id in U || t.channel_id in W) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === Z.ylB.CHANNEL_FOLLOWER ? l.push(t) : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: l
            };
        }, [A, U, W, R]);
    l.useEffect(() => {
        if (!O)
            switch (t) {
                case Z.b4C.TWITCH:
                    null == X[Z.ABu.TWITCH] && d.Z.setSection(Z.b4C.OVERVIEW);
                    break;
                case Z.b4C.YOUTUBE:
                    null == X[Z.ABu.YOUTUBE] && d.Z.setSection(Z.b4C.OVERVIEW);
                    break;
                case Z.b4C.APPLICATION:
                    (null != H && (H in Y || H in q)) || d.Z.setSection(Z.b4C.OVERVIEW);
            }
    }, [q, Y, X, H, t, O]),
        l.useEffect(() => {
            (null == a ? void 0 : a.id) != null && x.Z.getEntitlementsForGuildFetchState(a.id) === x.M.NOT_FETCHED && h.i1(a.id);
        }, [null == a ? void 0 : a.id]),
        l.useEffect(
            () => () => {
                d.Z.setSection(Z.b4C.OVERVIEW, null);
            },
            []
        );
    let Q = null;
    switch (t) {
        case Z.b4C.TWITCH:
            null != X[Z.ABu.TWITCH] &&
                (Q = (0, i.jsx)(_.Z, {
                    guild: a,
                    integrations: X[Z.ABu.TWITCH],
                    editedIntegration: k,
                    labelText: T.intl.string(T.t.q4pBGx),
                    platformType: Z.ABu.TWITCH,
                    descriptionText: T.intl.string(T.t.V9kNqq),
                    helpText: T.intl.format(T.t.ro1jEB, {
                        connectAction: () =>
                            (0, u.Z)({
                                platformType: Z.ABu.TWITCH,
                                location: 'Integration Settings'
                            }),
                        helpdeskArticle: b.Z.getArticleURL(Z.BhN.TWITCH_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case Z.b4C.YOUTUBE:
            null != X[Z.ABu.YOUTUBE] &&
                (Q = (0, i.jsx)(_.Z, {
                    guild: a,
                    integrations: X[Z.ABu.YOUTUBE],
                    editedIntegration: k,
                    labelText: T.intl.string(T.t.aS6cKy),
                    platformType: Z.ABu.YOUTUBE,
                    descriptionText: T.intl.string(T.t['7Tv7JC']),
                    helpText: T.intl.format(T.t['4OSAQ0'], {
                        connectAction: () => (0, u.Z)({ platformType: Z.ABu.YOUTUBE }),
                        helpdeskArticle: b.Z.getArticleURL(Z.BhN.YOUTUBE_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case Z.b4C.APPLICATION:
            var ee;
            let et = null != H ? (null !== (ee = q[Y[H]]) && void 0 !== ee ? ee : q[H]) : null;
            null != et &&
                (Q = (0, i.jsx)(v.Z, {
                    guild: a,
                    applicationIntegration: et,
                    editedWebhook: L,
                    selectableWebhookChannels: U,
                    errors: P,
                    canNavigate: V
                }));
            break;
        case Z.b4C.CHANNEL_FOLLOWING:
            Q = (0, i.jsx)(j.Z, {
                followedChannelWebhooks: J,
                editedWebhook: L,
                selectableWebhookChannels: U,
                canNavigate: V,
                errors: P
            });
            break;
        case Z.b4C.WEBHOOKS:
            Q = (0, i.jsx)(I.Z, {
                guild: a,
                channel: y,
                customWebhooks: $,
                editedWebhook: L,
                selectableWebhookChannels: {
                    ...U,
                    ...W
                },
                canNavigate: V,
                refToScroller: w,
                errors: P
            });
            break;
        case Z.b4C.LOBBIES_LINKED:
            Q = (0, i.jsx)(N.Z, { guild: a });
            break;
        default:
            Q = (0, i.jsx)(C.Z, {
                guild: a,
                channel: y,
                applicationIntegrations: q,
                builtInIntegrations: X,
                customWebhooks: $,
                followedChannelWebhooks: J,
                isLoadingWebhooks: O || null == a,
                canCreateWebhook: null != z,
                onManageCustomWebhooks: () => {
                    d.Z.setSection(Z.b4C.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    d.Z.setSection(Z.b4C.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    d.Z.setSection(Z.b4C.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case Z.ABu.TWITCH:
                            d.Z.setSection(Z.b4C.TWITCH);
                            break;
                        case Z.ABu.YOUTUBE:
                            d.Z.setSection(Z.b4C.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    d.Z.setSection(Z.b4C.LOBBIES_LINKED);
                }
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.Z, {
                align: m.Z.Align.CENTER,
                className: E.breadcrumbs,
                children:
                    t === Z.b4C.OVERVIEW
                        ? (0, i.jsx)(o.vwX, {
                              tag: 'h1',
                              children: S(Z.b4C.OVERVIEW)
                          })
                        : (0, i.jsx)(o.OoM, {
                              activeId: t.toString(),
                              breadcrumbs: [Z.b4C.OVERVIEW, t].map((e) => ({
                                  id: e.toString(),
                                  label: S(e, q[H])
                              })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && K(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, i.jsx)(o.vwX, {
                                      tag: 'h1',
                                      className: t ? E.breadcrumbActive : E.breadcrumbInactive,
                                      children: e.label
                                  })
                          })
            }),
            Q
        ]
    });
});
