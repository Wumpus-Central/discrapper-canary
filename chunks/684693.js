(n.d(t, {
    v0: () => q,
    bg: () => w,
    WU: () => U,
    IG: () => G,
    _Q: () => V,
    Ps: () => W,
    UR: () => D,
    W1: () => k,
    $J: () => Q,
    b6: () => X,
    pu: () => x,
    se: () => B,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204));
var r,
    u,
    i = n(132500),
    o = n(323889),
    l = n(412703),
    s = n(73153),
    a = n(975807),
    c = n(507395),
    d = n(144779),
    E = n(7588),
    f = n(657375),
    _ = n(968309),
    A = n(780964),
    C = n(625494),
    T = n(723702),
    I = n(192444),
    p = n(945810),
    S =
        (((r = {})[(r.STEP_1_LOADED = 0)] = "STEP_1_LOADED"),
        (r[(r.STEP_2_CLICKED_INTERNAL = 1)] = "STEP_2_CLICKED_INTERNAL"),
        (r[(r.STEP_3_CLICKED_EXTERNAL = 2)] = "STEP_3_CLICKED_EXTERNAL"),
        (r[(r.STEP_4_VIEWED_NON_IMPRESSION = 3)] = "STEP_4_VIEWED_NON_IMPRESSION"),
        (r[(r.STEP_5_VIEWED_IMPRESSION = 4)] = "STEP_5_VIEWED_IMPRESSION"),
        r);
let m = (0, p.mj)({
    name: "2026-05-use-ad-analytics-interface",
    kind: "user",
    defaultConfig: { enabled: !1, maxStep: -1 },
    variations: {
        0: { enabled: !1, maxStep: -1 },
        1: { enabled: !0, maxStep: 0 },
        2: { enabled: !0, maxStep: 1 },
        3: { enabled: !0, maxStep: 2 },
        4: { enabled: !0, maxStep: 3 },
        5: { enabled: !0, maxStep: 4 },
    },
});
function O(e, t) {
    let n = m.getConfig({ location: t });
    return n.enabled && e <= n.maxStep;
}
var g = n(561844),
    N = n(590202),
    P = n(738822);
function L(e) {
    switch (e) {
        case g.Dq.MAIN_CTA:
            return N.Cy.GAME_STORE_OPEN_GAME_LINK;
        case g.Dq.RATING_STAT:
            return N.Cy.GAME_STORE_OPEN_REVIEWS;
        case g.Dq.SEE_MORE:
            return N.Cy.EXPAND;
    }
}
function v(e, t, n) {
    switch (e) {
        case g.Dq.MAIN_CTA:
            (0, c.r)({
                type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                questContentCTA: N.Cy.GAME_STORE_OPEN_GAME_LINK,
                ...n,
                ...t,
            });
            break;
        case g.Dq.RATING_STAT:
            (0, c.r)({
                type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                questContentCTA: N.Cy.GAME_STORE_OPEN_REVIEWS,
                ...n,
                ...t,
            });
            break;
        case g.Dq.SEE_MORE:
            (0, c.r)({ type: d.F.CLICK_INTERNAL, questContentCTA: N.Cy.EXPAND, ...n, ...t });
    }
}
var R = n(651892),
    h = n(792620),
    b = n(190107),
    y = n(652215),
    M = n(105292);
function D(e) {
    let t = (0, h.t)({ quest: e }) || (0, h.fE)({ quest: e }) || (0, h.I6)(e),
        n = (0, h.uD)(e),
        r = [];
    return (t && r.push(b.fO.DESKTOP), n && r.push(b.fO.CONSOLE), r);
}
function w(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case l.n.PLAY_ON_XBOX:
                n.push(y.fg2.XBOX);
                break;
            case l.n.PLAY_ON_PLAYSTATION:
                n.push(y.fg2.PLAYSTATION);
        }
    return n;
}
function k(e) {
    let t = (0, h.vv)(e),
        n = (0, h.vl)(e);
    return t || n;
}
var U = (((u = {}).DESKTOP = "desktop"), (u.XBOX = "xbox"), (u.PLAYSTATION = "playstation"), u);
function Q(e) {
    return "xbox" === e.connected_account_type ? y.fg2.XBOX : y.fg2.PLAYSTATION;
}
function q(e, t) {
    let { platformType: n, quest: r } = e;
    (O(S.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")
        ? (0, c.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: o.p.QUEST,
              adCreativeId: r.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
          })
        : (0, g.Y5)({
              questId: r.id,
              questContent: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
          }),
        (0, _.A)({ platformType: n, location: t.ctaContent }));
}
function G(e) {
    return Q(e) === y.fg2.XBOX ? M.t["mytEv+"] : M.t.iDiwby;
}
function K(e) {
    if (((0, T.isIOS)() || "ios" === (0, T.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, T.isAndroid)() || "android" === (0, T.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function H(e) {
    if ((0, T.isAndroid)() && e.android?.androidAppId != null)
        return {
            url: `https://play.google.com/d?id=${e.android.androidAppId}`,
            os: "android",
            storeAppId: e.android.androidAppId,
            appId: null,
        };
    if ((0, T.isIOS)() && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId.slice(2) : e.ios.iosAppId;
        return { url: `https://apps.apple.com/app/id${t}`, os: "ios", storeAppId: t, appId: parseInt(t, 10) };
    }
    return null;
}
function F(e) {
    let {
        link: t,
        directLink: n,
        inlineStoreParams: r,
        trackOverlayEvent: u,
        trackOverlaySurfaceClick: i,
        appStoreOverlayCarouselScrollContext: o,
        getIosAttribution: l,
        allowExternalOpen: s = !0,
    } = e;
    return (I.OO.getConfig({ location: "quest_open_game_link" }).enabled, s && (0, a.A)(t), Promise.resolve(!1));
}
function x(e, t) {
    let n,
        r,
        u,
        l = (0, R.Jx)(e.config),
        s = null == (n = e.config.ctaConfig) ? null : K({ url: (0, R.Jx)(e.config), android: n.android, ios: n.ios });
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
            })(l, (u = (0, i.A)()))));
    let { impressionId: a } = t,
        _ = null != a ? (0, E.vV)(e.config.ctaConfig?.ios?.iosAppId != null, t.sourceQuestContent, e.id) : null;
    (C._.dispatch(y.jej.QUEST_GAME_LINK_OPENED),
        F({
            link: l,
            directLink: s,
            inlineStoreParams:
                null == (r = e.config.ctaConfig)
                    ? null
                    : H({ url: (0, R.Jx)(e.config), android: r.android, ios: r.ios }),
            trackOverlayEvent: (n, r, u, i, o) =>
                (0, g.eA)({
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
                        u = L(r);
                    O(S.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")
                        ? v(
                              r,
                              {
                                  surfaceId: P.uF.CUSTOM_APP_STORE_OVERLAY,
                                  sourceQuestContent: n.sourceQuestContent,
                                  questContentPosition: n.position,
                                  impressionId: n.impressionId,
                              },
                              { adCreativeType: o.p.QUEST, adCreativeId: t },
                          )
                        : (0, g.Y5)({
                              questId: t,
                              questContent: P.uF.CUSTOM_APP_STORE_OVERLAY,
                              questContentCTA: u,
                              questContentPosition: n.position,
                              impressionId: n.impressionId,
                              sourceQuestContent: n.sourceQuestContent,
                          });
                })({ questId: e.id, trackingCtx: t, overlaySurface: n }),
            appStoreOverlayCarouselScrollContext: { questId: e.id },
            getIosAttribution: null != _ && null != a ? () => (0, f.FW)({ impressionId: a }) : void 0,
        }).then((n) => {
            "custom" === n
                ? (0, c.r)({
                      type: d.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: N.Cy.OPEN_CUSTOM_APP_STORE,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                      clickId: u,
                  })
                : O(S.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")
                  ? (0, c.r)({
                        type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                        adCreativeType: o.p.QUEST,
                        adCreativeId: e.id,
                        questContentCTA: t.ctaContent,
                        surfaceId: t.content,
                        sourceQuestContent: t.sourceQuestContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                        clickId: u,
                    })
                  : (0, g.Y5)({
                        questId: e.id,
                        questContent: t.content,
                        questContentCTA: t.ctaContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                        sourceQuestContent: t.sourceQuestContent,
                        clickId: u,
                    });
        }));
}
function V(e, t) {
    let { adContentId: n, adCreativeType: r, cta: u } = e;
    !(function (e, t, n) {
        let { adContentId: r, adCreativeType: u, cta: i } = e,
            { preferExternalAppStore: o } = n,
            l = i.url,
            s = K(i);
        (null != s && (l = s), C._.dispatch(y.jej.QUEST_GAME_LINK_OPENED));
        let { impressionId: _ } = t,
            A = null != _ ? (0, E.vV)(i.ios?.iosAppId != null, t.sourceQuestContent, r) : null,
            T = H(i),
            I = null != A && null != _ ? () => (0, f.FW)({ impressionId: _ }) : void 0;
        function p(e) {
            "custom" === e
                ? (0, c.r)({
                      type: d.F.CLICK_INTERNAL,
                      adCreativeType: u,
                      adCreativeId: r,
                      questContentCTA: N.Cy.OPEN_CUSTOM_APP_STORE,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                  })
                : O(S.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")
                  ? (0, c.r)({
                        type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                        adCreativeType: u,
                        adCreativeId: r,
                        questContentCTA: t.ctaContent,
                        surfaceId: t.content,
                        sourceQuestContent: t.sourceQuestContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                    })
                  : (0, g.vK)({
                        adContentId: r,
                        adCreativeType: u,
                        questContent: t.content,
                        questContentCTA: t.ctaContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                        sourceQuestContent: t.sourceQuestContent,
                    });
        }
        if (o && null == I) {
            ((0, a.A)(l), p(!1));
            return;
        }
        F({
            link: l,
            directLink: s,
            inlineStoreParams: T,
            trackOverlayEvent: (e, n, i, o, l) =>
                (0, g.YE)({
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
                        o = L(u);
                    O(S.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")
                        ? v(
                              u,
                              {
                                  surfaceId: P.uF.CUSTOM_APP_STORE_OVERLAY,
                                  sourceQuestContent: r.sourceQuestContent,
                                  questContentPosition: r.position,
                                  impressionId: r.impressionId,
                              },
                              { adCreativeType: n, adCreativeId: t },
                          )
                        : (0, g.vK)({
                              adContentId: t,
                              relatedQuestId: i,
                              adCreativeType: n,
                              questContent: P.uF.CUSTOM_APP_STORE_OVERLAY,
                              questContentCTA: o,
                              questContentPosition: r.position,
                              impressionId: r.impressionId,
                              sourceQuestContent: r.sourceQuestContent,
                          });
                })({ adContentId: r, adCreativeType: u, trackingCtx: t, overlaySurface: e }),
            appStoreOverlayCarouselScrollContext: { adContentId: r },
            getIosAttribution: I,
        }).then(p);
    })({ adContentId: n, adCreativeType: r, cta: u }, t, { preferExternalAppStore: !1 });
}
function X(e, t) {
    let { quest: r } = e;
    (O(S.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")
        ? (0, c.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: o.p.QUEST,
              adCreativeId: r.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
          })
        : (0, g.Y5)({
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
function B(e, t) {
    let { quest: n } = e;
    O(S.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")
        ? (0, c.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: o.p.QUEST,
              adCreativeId: n.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
          })
        : (0, g.Y5)({
              questId: n.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          });
    let r = w(n);
    if (1 === r.length) return (0, _.A)({ platformType: r.at(0) });
    s.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, _.A)({ platformType: e }),
        includedPlatformTypes: new Set(r),
        includeApplicationConnections: !1,
    });
}
function W(e, t, n) {
    let { quest: r } = e;
    return (
        O(S.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")
            ? (0, c.r)({
                  type: d.F.CLICK_INTERNAL,
                  adCreativeType: o.p.QUEST,
                  adCreativeId: r.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  impressionId: t.impressionId,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
              })
            : (0, g.Y5)({
                  questId: r.id,
                  questContent: t.content,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
                  questContentCTA: t.ctaContent,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        (0, _.A)({ platformType: n })
    );
}
