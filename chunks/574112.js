(n.d(t, {
    IG: () => y,
    $J: () => L,
    W1: () => P,
    _Q: () => D,
    se: () => G,
    v0: () => b,
    b6: () => Q,
    pu: () => k,
    Ps: () => q,
    bg: () => R,
    UR: () => h,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204));
var r = n(115560),
    u = n(323889),
    l = n(412703),
    i = n(73153),
    o = n(975807),
    s = n(438457),
    a = n(144779),
    c = n(7588),
    d = n(249612),
    f = n(80320),
    A = n(780964),
    E = n(188567),
    _ = n(723702),
    T = n(914313),
    I = n(561844),
    C = n(590202),
    p = n(506988);
function S(e, t, n) {
    switch (e) {
        case I.Dq.MAIN_CTA:
            (0, s.r)({
                type: a.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                questContentCTA: C.Cy.GAME_STORE_OPEN_GAME_LINK,
                ...n,
                ...t,
            });
            break;
        case I.Dq.RATING_STAT:
            (0, s.r)({
                type: a.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                questContentCTA: C.Cy.GAME_STORE_OPEN_REVIEWS,
                ...n,
                ...t,
            });
            break;
        case I.Dq.SEE_MORE:
            (0, s.r)({ type: a.F.CLICK_INTERNAL, questContentCTA: C.Cy.EXPAND, ...n, ...t });
    }
}
var m = n(651892),
    O = n(792620),
    g = n(221596),
    N = n(652215),
    v = n(792996);
function h(e) {
    let t = (0, O.t)({ quest: e }) || (0, O.fE)({ quest: e }) || (0, O.I6)(e),
        n = (0, O.uD)(e),
        r = [];
    return (t && r.push(g.fO.DESKTOP), n && r.push(g.fO.CONSOLE), r);
}
function R(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case l.n.PLAY_ON_XBOX:
                n.push(N.fg2.XBOX);
                break;
            case l.n.PLAY_ON_PLAYSTATION:
                n.push(N.fg2.PLAYSTATION);
        }
    return n;
}
function P(e) {
    let t = (0, O.vv)(e),
        n = (0, O.vl)(e);
    return t || n;
}
function L(e) {
    return "xbox" === e.connected_account_type ? N.fg2.XBOX : N.fg2.PLAYSTATION;
}
function b(e, t) {
    let { platformType: n, quest: r } = e;
    ((0, s.r)({
        type: a.F.CLICK_INTERNAL,
        adCreativeType: u.p.QUEST,
        adCreativeId: r.id,
        questContentCTA: t.ctaContent,
        surfaceId: t.content,
        sourceQuestContent: t.sourceQuestContent,
        impressionId: t.impressionId,
    }),
        (0, f.A)({ platformType: n, location: t.ctaContent }));
}
function y(e) {
    return L(e) === N.fg2.XBOX ? v.t["mytEv+"] : v.t.iDiwby;
}
function M(e) {
    if (((0, _.un)() || "ios" === (0, _.R0)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, _.m0)() || "android" === (0, _.R0)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function w(e) {
    if ((0, _.m0)() && e.android?.androidAppId != null)
        return {
            url: `https://play.google.com/d?id=${e.android.androidAppId}`,
            os: "android",
            storeAppId: e.android.androidAppId,
            appId: null,
        };
    if ((0, _.un)() && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId.slice(2) : e.ios.iosAppId;
        return { url: `https://apps.apple.com/app/id${t}`, os: "ios", storeAppId: t, appId: parseInt(t, 10) };
    }
    return null;
}
function U(e) {
    let {
        link: t,
        directLink: n,
        inlineStoreParams: r,
        trackOverlayEvent: u,
        trackOverlaySurfaceClick: l,
        appStoreOverlayCarouselScrollContext: i,
        getIosAttribution: s,
        allowExternalOpen: a = !0,
    } = e;
    return (T.OO.getConfig({ location: "quest_open_game_link" }).enabled, a && (0, o.A)(t), Promise.resolve(!1));
}
function k(e, t) {
    let n,
        l,
        i,
        o = (0, m.Jx)(e.config),
        f = null == (n = e.config.ctaConfig) ? null : M({ url: (0, m.Jx)(e.config), android: n.android, ios: n.ios });
    (null != f && (o = f),
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
            })(o, (i = (0, r.A)()))));
    let { impressionId: A } = t,
        _ = null != A ? (0, c.vV)(e.config.ctaConfig?.ios?.iosAppId != null, t.sourceQuestContent, e.id) : null;
    (E._.dispatch(N.jej.QUEST_GAME_LINK_OPENED),
        U({
            link: o,
            directLink: f,
            inlineStoreParams:
                null == (l = e.config.ctaConfig)
                    ? null
                    : w({ url: (0, m.Jx)(e.config), android: l.android, ios: l.ios }),
            trackOverlayEvent: (n, r, u, l, i) =>
                (0, I.eA)({
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
                    S(
                        r,
                        {
                            surfaceId: p.uF.CUSTOM_APP_STORE_OVERLAY,
                            sourceQuestContent: n.sourceQuestContent,
                            questContentPosition: n.position,
                            impressionId: n.impressionId,
                        },
                        { adCreativeType: u.p.QUEST, adCreativeId: t },
                    );
                })({ questId: e.id, trackingCtx: t, overlaySurface: n }),
            appStoreOverlayCarouselScrollContext: { questId: e.id },
            getIosAttribution: null != _ && null != A ? () => (0, d.FW)({ impressionId: A }) : void 0,
        }).then((n) => {
            "custom" === n
                ? (0, s.r)({
                      type: a.F.CLICK_INTERNAL,
                      adCreativeType: u.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: C.Cy.OPEN_CUSTOM_APP_STORE,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                      clickId: i,
                  })
                : (0, s.r)({
                      type: a.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                      adCreativeType: u.p.QUEST,
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
function D(e, t) {
    let { adContentId: n, adCreativeType: r, cta: u } = e;
    !(function (e, t, n) {
        let { adContentId: r, adCreativeType: u, cta: l } = e,
            { preferExternalAppStore: i } = n,
            f = l.url,
            A = M(l);
        (null != A && (f = A), E._.dispatch(N.jej.QUEST_GAME_LINK_OPENED));
        let { impressionId: _ } = t,
            T = null != _ ? (0, c.vV)(l.ios?.iosAppId != null, t.sourceQuestContent, r) : null,
            m = w(l),
            O = null != T && null != _ ? () => (0, d.FW)({ impressionId: _ }) : void 0;
        function g(e) {
            "custom" === e
                ? (0, s.r)({
                      type: a.F.CLICK_INTERNAL,
                      adCreativeType: u,
                      adCreativeId: r,
                      questContentCTA: C.Cy.OPEN_CUSTOM_APP_STORE,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                  })
                : (0, s.r)({
                      type: a.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                      adCreativeType: u,
                      adCreativeId: r,
                      questContentCTA: t.ctaContent,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                  });
        }
        if (i && null == O) {
            ((0, o.A)(f), g(!1));
            return;
        }
        U({
            link: f,
            directLink: A,
            inlineStoreParams: m,
            trackOverlayEvent: (e, n, l, i, o) =>
                (0, I.YE)({
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
                    S(
                        u,
                        {
                            surfaceId: p.uF.CUSTOM_APP_STORE_OVERLAY,
                            sourceQuestContent: r.sourceQuestContent,
                            questContentPosition: r.position,
                            impressionId: r.impressionId,
                        },
                        { adCreativeType: n, adCreativeId: t },
                    );
                })({ adContentId: r, adCreativeType: u, trackingCtx: t, overlaySurface: e }),
            appStoreOverlayCarouselScrollContext: { adContentId: r },
            getIosAttribution: O,
        }).then(g);
    })({ adContentId: n, adCreativeType: r, cta: u }, t, { preferExternalAppStore: !1 });
}
function Q(e, t) {
    let { quest: r } = e;
    ((0, s.r)({
        type: a.F.CLICK_INTERNAL,
        adCreativeType: u.p.QUEST,
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
                e(A.X.CONNECTIONS_CATEGORY);
            }
        })());
}
function G(e, t) {
    let { quest: n } = e;
    (0, s.r)({
        type: a.F.CLICK_INTERNAL,
        adCreativeType: u.p.QUEST,
        adCreativeId: n.id,
        questContentCTA: t.ctaContent,
        surfaceId: t.content,
        sourceQuestContent: t.sourceQuestContent,
        impressionId: t.impressionId,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
    });
    let r = R(n);
    if (1 === r.length) return (0, f.A)({ platformType: r.at(0) });
    i.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, f.A)({ platformType: e }),
        includedPlatformTypes: new Set(r),
        includeApplicationConnections: !1,
    });
}
function q(e, t, n) {
    let { quest: r } = e;
    return (
        (0, s.r)({
            type: a.F.CLICK_INTERNAL,
            adCreativeType: u.p.QUEST,
            adCreativeId: r.id,
            questContentCTA: t.ctaContent,
            surfaceId: t.content,
            sourceQuestContent: t.sourceQuestContent,
            impressionId: t.impressionId,
            questContentPosition: t.position,
            questContentRowIndex: t.rowIndex,
        }),
        (0, f.A)({ platformType: n })
    );
}
