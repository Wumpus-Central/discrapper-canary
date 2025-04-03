n.d(t, { Z: () => P }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
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
    N = n(731072),
    O = n(494118),
    v = n(37607),
    y = n(351644),
    _ = n(108053),
    C = n(981631),
    I = n(388032),
    S = n(498181);
function E(e, t) {
    switch (e) {
        case C.b4C.APPLICATION:
            var n;
            return null != (n = null == t ? void 0 : t.application.name) ? n : '';
        case C.b4C.OVERVIEW:
            return I.NW.string(I.t.s69NLC);
        case C.b4C.CHANNEL_FOLLOWING:
            return I.NW.string(I.t.OrV60t);
        case C.b4C.TWITCH:
            return I.NW.string(I.t.q4pBGx);
        case C.b4C.WEBHOOKS:
            return I.NW.string(I.t.xOg4SE);
        case C.b4C.YOUTUBE:
            return I.NW.string(I.t.aS6cKy);
        case C.b4C.LOBBIES_LINKED:
            return I.NW.string(I.t.tqtDXF);
        default:
            return '';
    }
}
let P = i.memo(function (e) {
    let { section: t, sectionId: n, guild: l, channel: P, integrations: w, editedIntegration: T, webhooks: Z, editedWebhook: W, isFetchingWebhooks: k, refToScroller: A, errors: D, hasChanges: R } = e,
        L = (0, a.e7)([g.ZP], () => (null != l ? g.ZP.getDefaultChannel(l.id) : null)),
        M = (0, a.cj)([g.ZP], () => g.ZP.getChannels(null == l ? void 0 : l.id)),
        B = (0, a.cj)([f.Z], () =>
            o().keyBy(
                M.SELECTABLE.map((e) => e.channel).filter((e) => f.Z.can(C.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        U = (0, a.cj)([f.Z], () =>
            o().keyBy(
                M.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && f.Z.can(C.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        z = null != P ? P : L,
        H = t === C.b4C.APPLICATION ? n : null,
        [G, F] = i.useState(d.$x),
        V = i.useCallback(
            () =>
                R()
                    ? (h.S.dispatch(C.CkL.SHAKE_APP, {
                          duration: 300,
                          intensity: G
                      }),
                      F(Math.min(G + d.d7, d.w6)),
                      h.S.dispatch(C.CkL.EMPHASIZE_NOTICE),
                      !1)
                    : (F(d.$x), !0),
            [R, G]
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
            for (let t of Z) (t.channel_id in B || t.channel_id in U) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === C.ylB.CHANNEL_FOLLOWER ? i.push(t) : r.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: r,
                followedChannelWebhooks: i
            };
        }, [w, B, U, Z]);
    i.useEffect(() => {
        if (!k)
            switch (t) {
                case C.b4C.TWITCH:
                    null == X[C.ABu.TWITCH] && c.Z.setSection(C.b4C.OVERVIEW);
                    break;
                case C.b4C.YOUTUBE:
                    null == X[C.ABu.YOUTUBE] && c.Z.setSection(C.b4C.OVERVIEW);
                    break;
                case C.b4C.APPLICATION:
                    (null != H && (H in Y || H in q)) || c.Z.setSection(C.b4C.OVERVIEW);
            }
    }, [q, Y, X, H, t, k]),
        i.useEffect(() => {
            (null == l ? void 0 : l.id) != null && b.Z.getEntitlementsForGuildFetchState(l.id) === b.M.NOT_FETCHED && m.i1(l.id);
        }, [null == l ? void 0 : l.id]),
        i.useEffect(
            () => () => {
                c.Z.setSection(C.b4C.OVERVIEW, null);
            },
            []
        );
    let Q = null;
    switch (t) {
        case C.b4C.TWITCH:
            null != X[C.ABu.TWITCH] &&
                (Q = (0, r.jsx)(N.Z, {
                    guild: l,
                    integrations: X[C.ABu.TWITCH],
                    editedIntegration: T,
                    labelText: I.NW.string(I.t.q4pBGx),
                    platformType: C.ABu.TWITCH,
                    descriptionText: I.NW.string(I.t.V9kNqq),
                    helpText: I.NW.format(I.t.ro1jEB, {
                        connectAction: () =>
                            (0, u.Z)({
                                platformType: C.ABu.TWITCH,
                                location: 'Integration Settings'
                            }),
                        helpdeskArticle: x.Z.getArticleURL(C.BhN.TWITCH_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case C.b4C.YOUTUBE:
            null != X[C.ABu.YOUTUBE] &&
                (Q = (0, r.jsx)(N.Z, {
                    guild: l,
                    integrations: X[C.ABu.YOUTUBE],
                    editedIntegration: T,
                    labelText: I.NW.string(I.t.aS6cKy),
                    platformType: C.ABu.YOUTUBE,
                    descriptionText: I.NW.string(I.t['7Tv7JC']),
                    helpText: I.NW.format(I.t['4OSAQ0'], {
                        connectAction: () => (0, u.Z)({ platformType: C.ABu.YOUTUBE }),
                        helpdeskArticle: x.Z.getArticleURL(C.BhN.YOUTUBE_INTEGRATION)
                    }),
                    canNavigate: V
                }));
            break;
        case C.b4C.APPLICATION:
            var ee;
            let et = null != H ? (null != (ee = q[Y[H]]) ? ee : q[H]) : null;
            null != et &&
                (Q = (0, r.jsx)(j.Z, {
                    guild: l,
                    applicationIntegration: et,
                    editedWebhook: W,
                    selectableWebhookChannels: B,
                    errors: D,
                    canNavigate: V
                }));
            break;
        case C.b4C.CHANNEL_FOLLOWING:
            Q = (0, r.jsx)(O.Z, {
                followedChannelWebhooks: J,
                editedWebhook: W,
                selectableWebhookChannels: B,
                canNavigate: V,
                errors: D
            });
            break;
        case C.b4C.WEBHOOKS:
            Q = (0, r.jsx)(_.Z, {
                guild: l,
                channel: P,
                customWebhooks: $,
                editedWebhook: W,
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
                })({}, B, U),
                canNavigate: V,
                refToScroller: A,
                errors: D
            });
            break;
        case C.b4C.LOBBIES_LINKED:
            Q = (0, r.jsx)(v.Z, { guild: l });
            break;
        default:
            Q = (0, r.jsx)(y.Z, {
                guild: l,
                channel: P,
                applicationIntegrations: q,
                builtInIntegrations: X,
                customWebhooks: $,
                followedChannelWebhooks: J,
                isLoadingWebhooks: k || null == l,
                canCreateWebhook: null != z,
                onManageCustomWebhooks: () => {
                    c.Z.setSection(C.b4C.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    c.Z.setSection(C.b4C.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    c.Z.setSection(C.b4C.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case C.ABu.TWITCH:
                            c.Z.setSection(C.b4C.TWITCH);
                            break;
                        case C.ABu.YOUTUBE:
                            c.Z.setSection(C.b4C.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    c.Z.setSection(C.b4C.LOBBIES_LINKED);
                }
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.Z, {
                align: p.Z.Align.CENTER,
                className: S.breadcrumbs,
                children:
                    t === C.b4C.OVERVIEW
                        ? (0, r.jsx)(s.vwX, {
                              tag: 'h1',
                              children: E(C.b4C.OVERVIEW)
                          })
                        : (0, r.jsx)(s.OoM, {
                              activeId: t.toString(),
                              breadcrumbs: [C.b4C.OVERVIEW, t].map((e) => ({
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
