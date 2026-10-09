(n.d(t, {
    v0: () => D,
    bg: () => b,
    WU: () => M,
    IG: () => k,
    _Q: () => K,
    Ps: () => B,
    UR: () => R,
    W1: () => y,
    $J: () => w,
    b6: () => H,
    pu: () => G,
    se: () => F,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204));
var r,
    u = n(132500),
    i = n(323889),
    o = n(412703),
    l = n(73153),
    s = n(975807),
    a = n(274670),
    c = n(144779),
    d = n(7588),
    f = n(657375),
    E = n(968309),
    A = n(780964),
    _ = n(625494),
    C = n(723702),
    I = n(192444),
    T = n(104886),
    p = n(561844),
    S = n(590202),
    m = n(738822);
function O(e) {
    switch (e) {
        case p.Dq.MAIN_CTA:
            return S.Cy.GAME_STORE_OPEN_GAME_LINK;
        case p.Dq.RATING_STAT:
            return S.Cy.GAME_STORE_OPEN_REVIEWS;
        case p.Dq.SEE_MORE:
            return S.Cy.EXPAND;
    }
}
function g(e, t, n) {
    switch (e) {
        case p.Dq.MAIN_CTA:
            (0, a.r)({
                type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                questContentCTA: S.Cy.GAME_STORE_OPEN_GAME_LINK,
                ...n,
                ...t,
            });
            break;
        case p.Dq.RATING_STAT:
            (0, a.r)({
                type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                questContentCTA: S.Cy.GAME_STORE_OPEN_REVIEWS,
                ...n,
                ...t,
            });
            break;
        case p.Dq.SEE_MORE:
            (0, a.r)({ type: c.F.CLICK_INTERNAL, questContentCTA: S.Cy.EXPAND, ...n, ...t });
    }
}
var N = n(651892),
    P = n(792620),
    v = n(190107),
    L = n(652215),
    h = n(660183);
function R(e) {
    let t = (0, P.t)({ quest: e }) || (0, P.fE)({ quest: e }) || (0, P.I6)(e),
        n = (0, P.uD)(e),
        r = [];
    return (t && r.push(v.fO.DESKTOP), n && r.push(v.fO.CONSOLE), r);
}
function b(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.n.PLAY_ON_XBOX:
                n.push(L.fg2.XBOX);
                break;
            case o.n.PLAY_ON_PLAYSTATION:
                n.push(L.fg2.PLAYSTATION);
        }
    return n;
}
function y(e) {
    let t = (0, P.vv)(e),
        n = (0, P.vl)(e);
    return t || n;
}
var M = (((r = {}).DESKTOP = "desktop"), (r.XBOX = "xbox"), (r.PLAYSTATION = "playstation"), r);
function w(e) {
    return "xbox" === e.connected_account_type ? L.fg2.XBOX : L.fg2.PLAYSTATION;
}
function D(e, t) {
    let { platformType: n, quest: r } = e;
    ((0, T.E5)(T.kI.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")
        ? (0, a.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: i.p.QUEST,
              adCreativeId: r.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
          })
        : (0, p.Y5)({
              questId: r.id,
              questContent: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
          }),
        (0, E.A)({ platformType: n, location: t.ctaContent }));
}
function k(e) {
    return w(e) === L.fg2.XBOX ? h.t["mytEv+"] : h.t.iDiwby;
}
function U(e) {
    if (((0, C.isIOS)() || "ios" === (0, C.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, C.isAndroid)() || "android" === (0, C.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function Q(e) {
    if ((0, C.isAndroid)() && e.android?.androidAppId != null)
        return {
            url: `https://play.google.com/d?id=${e.android.androidAppId}`,
            os: "android",
            storeAppId: e.android.androidAppId,
            appId: null,
        };
    if ((0, C.isIOS)() && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId.slice(2) : e.ios.iosAppId;
        return { url: `https://apps.apple.com/app/id${t}`, os: "ios", storeAppId: t, appId: parseInt(t, 10) };
    }
    return null;
}
function q(e) {
    let {
        link: t,
        directLink: n,
        inlineStoreParams: r,
        trackOverlayEvent: u,
        trackOverlaySurfaceClick: i,
        appStoreOverlayCarouselScrollContext: o,
        getIosAttribution: l,
        allowExternalOpen: a = !0,
    } = e;
    return (I.OO.getConfig({ location: "quest_open_game_link" }).enabled, a && (0, s.A)(t), Promise.resolve(!1));
}
function G(e, t) {
    let n,
        r,
        o,
        l = (0, N.Jx)(e.config),
        s = null == (n = e.config.ctaConfig) ? null : U({ url: (0, N.Jx)(e.config), android: n.android, ios: n.ios });
    (null != s && (l = s),
        (function (e) {
            try {
                return new URL(e).searchParams.has("dclid");
            } catch {
                return !1;
            }
        })(l) &&
            (l = (function (e, t) {
                try {
                    let n = new URL(e);
                    return (n.searchParams.set("dclid", t), n.toString());
                } catch {
                    return e;
                }
            })(l, (o = (0, u.A)()))));
    let { impressionId: E } = t,
        A = null != E ? (0, d.vV)(e.config.ctaConfig?.ios?.iosAppId != null, t.sourceQuestContent, e.id) : null;
    (_._.dispatch(L.jej.QUEST_GAME_LINK_OPENED),
        q({
            link: l,
            directLink: s,
            inlineStoreParams:
                null == (r = e.config.ctaConfig)
                    ? null
                    : Q({ url: (0, N.Jx)(e.config), android: r.android, ios: r.ios }),
            trackOverlayEvent: (n, r, u, i, o) =>
                (0, p.eA)({
                    quest: e,
                    trackingCtx: t,
                    inlineStoreAppId: r,
                    overlayVariant: u,
                    event: n,
                    timeSpentMs: i,
                    overlaySurface: o,
                }),
            trackOverlaySurfaceClick: (n) =>
                (function (e) {
                    let { questId: t, trackingCtx: n, overlaySurface: r } = e,
                        u = O(r);
                    (0, T.E5)(T.kI.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")
                        ? g(
                              r,
                              {
                                  surfaceId: m.uF.CUSTOM_APP_STORE_OVERLAY,
                                  sourceQuestContent: n.sourceQuestContent,
                                  questContentPosition: n.position,
                                  impressionId: n.impressionId,
                              },
                              { adCreativeType: i.p.QUEST, adCreativeId: t },
                          )
                        : (0, p.Y5)({
                              questId: t,
                              questContent: m.uF.CUSTOM_APP_STORE_OVERLAY,
                              questContentCTA: u,
                              questContentPosition: n.position,
                              impressionId: n.impressionId,
                              sourceQuestContent: n.sourceQuestContent,
                          });
                })({ questId: e.id, trackingCtx: t, overlaySurface: n }),
            appStoreOverlayCarouselScrollContext: { questId: e.id },
            getIosAttribution: null != A && null != E ? () => (0, f.FW)({ impressionId: E }) : void 0,
        }).then((n) => {
            "custom" === n
                ? (0, a.r)({
                      type: c.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: S.Cy.OPEN_CUSTOM_APP_STORE,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                      clickId: o,
                  })
                : (0, T.E5)(T.kI.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")
                  ? (0, a.r)({
                        type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                        adCreativeType: i.p.QUEST,
                        adCreativeId: e.id,
                        questContentCTA: t.ctaContent,
                        surfaceId: t.content,
                        sourceQuestContent: t.sourceQuestContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                        clickId: o,
                    })
                  : (0, p.Y5)({
                        questId: e.id,
                        questContent: t.content,
                        questContentCTA: t.ctaContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                        sourceQuestContent: t.sourceQuestContent,
                        clickId: o,
                    });
        }));
}
function K(e, t) {
    let { adContentId: n, adCreativeType: r, cta: u } = e;
    !(function (e, t, n) {
        let { adContentId: r, adCreativeType: u, cta: i } = e,
            { preferExternalAppStore: o } = n,
            l = i.url,
            E = U(i);
        (null != E && (l = E), _._.dispatch(L.jej.QUEST_GAME_LINK_OPENED));
        let { impressionId: A } = t,
            C = null != A ? (0, d.vV)(i.ios?.iosAppId != null, t.sourceQuestContent, r) : null,
            I = Q(i),
            N = null != C && null != A ? () => (0, f.FW)({ impressionId: A }) : void 0;
        function P(e) {
            "custom" === e
                ? (0, a.r)({
                      type: c.F.CLICK_INTERNAL,
                      adCreativeType: u,
                      adCreativeId: r,
                      questContentCTA: S.Cy.OPEN_CUSTOM_APP_STORE,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                  })
                : (0, T.E5)(T.kI.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")
                  ? (0, a.r)({
                        type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                        adCreativeType: u,
                        adCreativeId: r,
                        questContentCTA: t.ctaContent,
                        surfaceId: t.content,
                        sourceQuestContent: t.sourceQuestContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                    })
                  : (0, p.vK)({
                        adContentId: r,
                        adCreativeType: u,
                        questContent: t.content,
                        questContentCTA: t.ctaContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                        sourceQuestContent: t.sourceQuestContent,
                    });
        }
        if (o && null == N) {
            ((0, s.A)(l), P(!1));
            return;
        }
        q({
            link: l,
            directLink: E,
            inlineStoreParams: I,
            trackOverlayEvent: (e, n, i, o, l) =>
                (0, p.YE)({
                    adContentId: r,
                    adCreativeType: u,
                    trackingCtx: t,
                    inlineStoreAppId: n,
                    overlayVariant: i,
                    event: e,
                    timeSpentMs: o,
                    overlaySurface: l,
                }),
            trackOverlaySurfaceClick: (e) =>
                (function (e) {
                    let { adContentId: t, adCreativeType: n, trackingCtx: r, overlaySurface: u, relatedQuestId: i } = e,
                        o = O(u);
                    (0, T.E5)(T.kI.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")
                        ? g(
                              u,
                              {
                                  surfaceId: m.uF.CUSTOM_APP_STORE_OVERLAY,
                                  sourceQuestContent: r.sourceQuestContent,
                                  questContentPosition: r.position,
                                  impressionId: r.impressionId,
                              },
                              { adCreativeType: n, adCreativeId: t },
                          )
                        : (0, p.vK)({
                              adContentId: t,
                              relatedQuestId: i,
                              adCreativeType: n,
                              questContent: m.uF.CUSTOM_APP_STORE_OVERLAY,
                              questContentCTA: o,
                              questContentPosition: r.position,
                              impressionId: r.impressionId,
                              sourceQuestContent: r.sourceQuestContent,
                          });
                })({ adContentId: r, adCreativeType: u, trackingCtx: t, overlaySurface: e }),
            appStoreOverlayCarouselScrollContext: { adContentId: r },
            getIosAttribution: N,
        }).then(P);
    })({ adContentId: n, adCreativeType: r, cta: u }, t, { preferExternalAppStore: !1 });
}
function H(e, t) {
    let { quest: r } = e;
    ((0, T.E5)(T.kI.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")
        ? (0, a.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: i.p.QUEST,
              adCreativeId: r.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
          })
        : (0, p.Y5)({
              questId: r.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          }),
        (function () {
            {
                let { openUserSettings: e } = n(766075);
                e(A.X.CONNECTIONS_CATEGORY);
            }
        })());
}
function F(e, t) {
    let { quest: n } = e;
    (0, T.E5)(T.kI.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")
        ? (0, a.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: i.p.QUEST,
              adCreativeId: n.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
          })
        : (0, p.Y5)({
              questId: n.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          });
    let r = b(n);
    if (1 === r.length) return (0, E.A)({ platformType: r.at(0) });
    l.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, E.A)({ platformType: e }),
        includedPlatformTypes: new Set(r),
        includeApplicationConnections: !1,
    });
}
function B(e, t, n) {
    let { quest: r } = e;
    return (
        (0, T.E5)(T.kI.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")
            ? (0, a.r)({
                  type: c.F.CLICK_INTERNAL,
                  adCreativeType: i.p.QUEST,
                  adCreativeId: r.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  impressionId: t.impressionId,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
              })
            : (0, p.Y5)({
                  questId: r.id,
                  questContent: t.content,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
                  questContentCTA: t.ctaContent,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        (0, E.A)({ platformType: n })
    );
}
