(n.d(t, {
    v0: () => M,
    bg: () => P,
    WU: () => R,
    IG: () => w,
    _Q: () => G,
    Ps: () => H,
    UR: () => L,
    W1: () => b,
    $J: () => y,
    b6: () => q,
    pu: () => Q,
    se: () => K,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204));
var r,
    u = n(132500),
    l = n(323889),
    i = n(412703),
    o = n(73153),
    s = n(975807),
    a = n(507395),
    c = n(144779),
    d = n(7588),
    f = n(657375),
    A = n(968309),
    E = n(780964),
    T = n(625494),
    _ = n(723702),
    I = n(192444),
    C = n(561844),
    p = n(590202),
    S = n(738822);
function O(e, t, n) {
    switch (e) {
        case C.Dq.MAIN_CTA:
            (0, a.r)({
                type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                questContentCTA: p.Cy.GAME_STORE_OPEN_GAME_LINK,
                ...n,
                ...t,
            });
            break;
        case C.Dq.RATING_STAT:
            (0, a.r)({
                type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                questContentCTA: p.Cy.GAME_STORE_OPEN_REVIEWS,
                ...n,
                ...t,
            });
            break;
        case C.Dq.SEE_MORE:
            (0, a.r)({ type: c.F.CLICK_INTERNAL, questContentCTA: p.Cy.EXPAND, ...n, ...t });
    }
}
var m = n(651892),
    g = n(792620),
    N = n(190107),
    v = n(652215),
    h = n(105292);
function L(e) {
    let t = (0, g.t)({ quest: e }) || (0, g.fE)({ quest: e }) || (0, g.I6)(e),
        n = (0, g.uD)(e),
        r = [];
    return (t && r.push(N.fO.DESKTOP), n && r.push(N.fO.CONSOLE), r);
}
function P(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case i.n.PLAY_ON_XBOX:
                n.push(v.fg2.XBOX);
                break;
            case i.n.PLAY_ON_PLAYSTATION:
                n.push(v.fg2.PLAYSTATION);
        }
    return n;
}
function b(e) {
    let t = (0, g.vv)(e),
        n = (0, g.vl)(e);
    return t || n;
}
var R = (((r = {}).DESKTOP = "desktop"), (r.XBOX = "xbox"), (r.PLAYSTATION = "playstation"), r);
function y(e) {
    return "xbox" === e.connected_account_type ? v.fg2.XBOX : v.fg2.PLAYSTATION;
}
function M(e, t) {
    let { platformType: n, quest: r } = e;
    ((0, a.r)({
        type: c.F.CLICK_INTERNAL,
        adCreativeType: l.p.QUEST,
        adCreativeId: r.id,
        questContentCTA: t.ctaContent,
        surfaceId: t.content,
        sourceQuestContent: t.sourceQuestContent,
        impressionId: t.impressionId,
    }),
        (0, A.A)({ platformType: n, location: t.ctaContent }));
}
function w(e) {
    return y(e) === v.fg2.XBOX ? h.t["mytEv+"] : h.t.iDiwby;
}
function U(e) {
    if (((0, _.isIOS)() || "ios" === (0, _.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, _.isAndroid)() || "android" === (0, _.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function k(e) {
    if ((0, _.isAndroid)() && e.android?.androidAppId != null)
        return {
            url: `https://play.google.com/d?id=${e.android.androidAppId}`,
            os: "android",
            storeAppId: e.android.androidAppId,
            appId: null,
        };
    if ((0, _.isIOS)() && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId.slice(2) : e.ios.iosAppId;
        return { url: `https://apps.apple.com/app/id${t}`, os: "ios", storeAppId: t, appId: parseInt(t, 10) };
    }
    return null;
}
function D(e) {
    let {
        link: t,
        directLink: n,
        inlineStoreParams: r,
        trackOverlayEvent: u,
        trackOverlaySurfaceClick: l,
        appStoreOverlayCarouselScrollContext: i,
        getIosAttribution: o,
        allowExternalOpen: a = !0,
    } = e;
    return (I.OO.getConfig({ location: "quest_open_game_link" }).enabled, a && (0, s.A)(t), Promise.resolve(!1));
}
function Q(e, t) {
    let n,
        r,
        i,
        o = (0, m.Jx)(e.config),
        s = null == (n = e.config.ctaConfig) ? null : U({ url: (0, m.Jx)(e.config), android: n.android, ios: n.ios });
    (null != s && (o = s),
        (function (e) {
            try {
                return new URL(e).searchParams.has("dclid");
            } catch {
                return !1;
            }
        })(o) &&
            (o = (function (e, t) {
                try {
                    let n = new URL(e);
                    return (n.searchParams.set("dclid", t), n.toString());
                } catch {
                    return e;
                }
            })(o, (i = (0, u.A)()))));
    let { impressionId: A } = t,
        E = null != A ? (0, d.vV)(e.config.ctaConfig?.ios?.iosAppId != null, t.sourceQuestContent, e.id) : null;
    (T._.dispatch(v.jej.QUEST_GAME_LINK_OPENED),
        D({
            link: o,
            directLink: s,
            inlineStoreParams:
                null == (r = e.config.ctaConfig)
                    ? null
                    : k({ url: (0, m.Jx)(e.config), android: r.android, ios: r.ios }),
            trackOverlayEvent: (n, r, u, l, i) =>
                (0, C.eA)({
                    quest: e,
                    trackingCtx: t,
                    inlineStoreAppId: r,
                    overlayVariant: u,
                    event: n,
                    timeSpentMs: l,
                    overlaySurface: i,
                }),
            trackOverlaySurfaceClick: (n) =>
                (function (e) {
                    let { questId: t, trackingCtx: n, overlaySurface: r } = e;
                    O(
                        r,
                        {
                            surfaceId: S.uF.CUSTOM_APP_STORE_OVERLAY,
                            sourceQuestContent: n.sourceQuestContent,
                            questContentPosition: n.position,
                            impressionId: n.impressionId,
                        },
                        { adCreativeType: l.p.QUEST, adCreativeId: t },
                    );
                })({ questId: e.id, trackingCtx: t, overlaySurface: n }),
            appStoreOverlayCarouselScrollContext: { questId: e.id },
            getIosAttribution: null != E && null != A ? () => (0, f.FW)({ impressionId: A }) : void 0,
        }).then((n) => {
            "custom" === n
                ? (0, a.r)({
                      type: c.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: p.Cy.OPEN_CUSTOM_APP_STORE,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                      clickId: i,
                  })
                : (0, a.r)({
                      type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: t.ctaContent,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                      clickId: i,
                  });
        }));
}
function G(e, t) {
    let { adContentId: n, adCreativeType: r, cta: u } = e;
    !(function (e, t, n) {
        let { adContentId: r, adCreativeType: u, cta: l } = e,
            { preferExternalAppStore: i } = n,
            o = l.url,
            A = U(l);
        (null != A && (o = A), T._.dispatch(v.jej.QUEST_GAME_LINK_OPENED));
        let { impressionId: E } = t,
            _ = null != E ? (0, d.vV)(l.ios?.iosAppId != null, t.sourceQuestContent, r) : null,
            I = k(l),
            m = null != _ && null != E ? () => (0, f.FW)({ impressionId: E }) : void 0;
        function g(e) {
            "custom" === e
                ? (0, a.r)({
                      type: c.F.CLICK_INTERNAL,
                      adCreativeType: u,
                      adCreativeId: r,
                      questContentCTA: p.Cy.OPEN_CUSTOM_APP_STORE,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                  })
                : (0, a.r)({
                      type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                      adCreativeType: u,
                      adCreativeId: r,
                      questContentCTA: t.ctaContent,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                  });
        }
        if (i && null == m) {
            ((0, s.A)(o), g(!1));
            return;
        }
        D({
            link: o,
            directLink: A,
            inlineStoreParams: I,
            trackOverlayEvent: (e, n, l, i, o) =>
                (0, C.YE)({
                    adContentId: r,
                    adCreativeType: u,
                    trackingCtx: t,
                    inlineStoreAppId: n,
                    overlayVariant: l,
                    event: e,
                    timeSpentMs: i,
                    overlaySurface: o,
                }),
            trackOverlaySurfaceClick: (e) =>
                (function (e) {
                    let { adContentId: t, adCreativeType: n, trackingCtx: r, overlaySurface: u } = e;
                    O(
                        u,
                        {
                            surfaceId: S.uF.CUSTOM_APP_STORE_OVERLAY,
                            sourceQuestContent: r.sourceQuestContent,
                            questContentPosition: r.position,
                            impressionId: r.impressionId,
                        },
                        { adCreativeType: n, adCreativeId: t },
                    );
                })({ adContentId: r, adCreativeType: u, trackingCtx: t, overlaySurface: e }),
            appStoreOverlayCarouselScrollContext: { adContentId: r },
            getIosAttribution: m,
        }).then(g);
    })({ adContentId: n, adCreativeType: r, cta: u }, t, { preferExternalAppStore: !1 });
}
function q(e, t) {
    let { quest: r } = e;
    ((0, a.r)({
        type: c.F.CLICK_INTERNAL,
        adCreativeType: l.p.QUEST,
        adCreativeId: r.id,
        questContentCTA: t.ctaContent,
        surfaceId: t.content,
        sourceQuestContent: t.sourceQuestContent,
        impressionId: t.impressionId,
        questContentPosition: t.position,
    }),
        (function () {
            {
                let { openUserSettings: e } = n(766075);
                e(E.X.CONNECTIONS_CATEGORY);
            }
        })());
}
function K(e, t) {
    let { quest: n } = e;
    (0, a.r)({
        type: c.F.CLICK_INTERNAL,
        adCreativeType: l.p.QUEST,
        adCreativeId: n.id,
        questContentCTA: t.ctaContent,
        surfaceId: t.content,
        sourceQuestContent: t.sourceQuestContent,
        impressionId: t.impressionId,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
    });
    let r = P(n);
    if (1 === r.length) return (0, A.A)({ platformType: r.at(0) });
    o.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, A.A)({ platformType: e }),
        includedPlatformTypes: new Set(r),
        includeApplicationConnections: !1,
    });
}
function H(e, t, n) {
    let { quest: r } = e;
    return (
        (0, a.r)({
            type: c.F.CLICK_INTERNAL,
            adCreativeType: l.p.QUEST,
            adCreativeId: r.id,
            questContentCTA: t.ctaContent,
            surfaceId: t.content,
            sourceQuestContent: t.sourceQuestContent,
            impressionId: t.impressionId,
            questContentPosition: t.position,
            questContentRowIndex: t.rowIndex,
        }),
        (0, A.A)({ platformType: n })
    );
}
