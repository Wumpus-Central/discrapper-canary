n.d(t, { A: () => C });
var i = n(582128),
    r = n(379197),
    a = n(488430),
    s = n(877624),
    l = n(855986),
    o = n(554146),
    d = n(192308),
    c = n(543862),
    u = n(263775),
    _ = n(549996),
    E = n(412260),
    A = n(457421),
    f = n(327019),
    h = n(174929),
    I = n(807098),
    p = n(894585);
function m(e) {
    if ("" === e) return;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? void 0 : t;
}
function T(e) {
    let t = null != e && "" !== e.lightUrl ? e.lightUrl : void 0,
        n = null != e && "" !== e.darkUrl ? e.darkUrl : void 0;
    if (null != t || null != n) return { srcLightHovered: t, srcDarkHovered: n };
}
let g = {
    [h.s.UNSPECIFIED]: void 0,
    [h.s.SM_TILE]: f.l.SM_TILE,
    [h.s.MD_TILE]: f.l.MD_TILE,
    [h.s.LG_TILE]: f.l.LG_TILE,
    [h.s.VIDEO_TILE]: f.l.VIDEO_TILE,
};
var S = n(212407),
    N = n(49999);
let C = function () {
    let { campaignOptions: e, dismissCampaignMarketing: t } = (function () {
            var e, t;
            let n,
                r,
                a = (0, _.c)(s.C.SHOP_COACHMARK),
                l =
                    ((e =
                        a?.properties.properties.oneofKind === "shopCoachmark"
                            ? a.properties.properties.shopCoachmark
                            : null),
                    (n = (0, I.T)(e?.asset)),
                    (0, i.useMemo)(
                        () =>
                            null == e
                                ? null
                                : {
                                      type: p.FF.COACHMARK,
                                      title: () => e.header,
                                      body: () => e.body,
                                      assetDark: n ?? "",
                                      assetLight: n ?? "",
                                      buttonLabel: "" !== e.buttonLabel ? e.buttonLabel : void 0,
                                      badgeIcon: "" !== e.badgeIcon ? e.badgeIcon : void 0,
                                      badgeText: "" !== e.badgeText ? e.badgeText : void 0,
                                      badgeCountdownEndsAt: m(e.badgeCountdownEndsAt),
                                      showHoverGradient: e.showHoverGradient,
                                      displayType: g[e.displayType],
                                      entryPointBackgroundAssets: T(e.hoverBackground),
                                      version: e.version,
                                  },
                        [n, e],
                    )),
                d = (0, _.c)(s.C.SHOP_TAB_TOOLTIP),
                c =
                    ((t =
                        d?.properties.properties.oneofKind === "shopTabTooltip"
                            ? d.properties.properties.shopTabTooltip
                            : null),
                    (r = (0, I.T)(t?.asset)),
                    (0, i.useMemo)(
                        () =>
                            null == t
                                ? null
                                : {
                                      type: p.FF.TAB_TOOLTIP,
                                      title: () => t.header,
                                      body: () => t.body,
                                      asset: r ?? "",
                                      badgeIcon: "" !== t.badgeIcon ? t.badgeIcon : void 0,
                                      badgeText: "" !== t.badgeText ? t.badgeText : void 0,
                                      badgeCountdownEndsAt: m(t.badgeCountdownEndsAt),
                                      showHoverGradient: t.showHoverGradient,
                                      entryPointBackgroundAssets: T(t.hoverBackground),
                                  },
                        [r, t],
                    )),
                E = l ?? c,
                A = (null != l ? a?.promotionId : d?.promotionId) ?? "",
                f = null != E && "" !== A,
                [h, S] = (0, u.Cc)(f ? o.M.SHOP_TAB_TOOLTIP : null, A, void 0, !0);
            return { campaignOptions: f && null != h ? E : null, dismissCampaignMarketing: S };
        })(),
        n = null != e,
        f = (0, l.bG)(
            [E.A],
            () =>
                null != E.A.lastFetchedActivePromotions ||
                (!E.A.isFetchingActivePromotions && null != E.A.lastFetchedActivePromotionsLocale),
        ),
        h = (0, l.bG)([A.A], () => A.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)),
        [C] = (0, u.RF)(!f || n ? null : o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, h?.version ?? 0, void 0, !0),
        O = (0, d.Rv)(),
        R = (0, S.bv)(h),
        L = i.useMemo(
            () =>
                null == C || O
                    ? null
                    : (function (e, t) {
                          if (t?.type === a.G.BADGE)
                              return {
                                  type: p.FF.BADGE,
                                  badgeIcon: t.badgeIcon,
                                  badgeText: t.badgeText,
                                  badgeCountdownEndsAt: t.badgeCountdownEndsAt,
                                  entrypointBackgroundStyle: t.refTargetBackground?.style,
                                  entryPointBackgroundAssets: {
                                      srcDark: e.buttonBGRestingDark,
                                      srcLight: e.buttonBGRestingLight,
                                      srcDarkHovered: e.buttonBGHoverDark,
                                      srcLightHovered: e.buttonBGHoverLight,
                                  },
                                  showHoverGradient: t.showHoverGradient,
                                  version: t.version,
                              };
                          if (t?.type === a.G.COACHMARK) {
                              let e = t.refTargetBackground;
                              return {
                                  type: p.FF.COACHMARK,
                                  title: () => t.title,
                                  body: () => t.body,
                                  assetDark: t.assetDark,
                                  assetLight: t.assetLight,
                                  buttonLabel: t.buttonLabel,
                                  badgeIcon: t.badgeIcon,
                                  badgeText: t.badgeText,
                                  badgeCountdownEndsAt: t.badgeCountdownEndsAt,
                                  showHoverGradient: t.showHoverGradient,
                                  version: t.version,
                                  displayType: t.displayType,
                                  entrypointBackgroundStyle: e?.style,
                                  entryPointBackgroundAssets: {
                                      srcDarkHovered: e?.asset?.hovered?.dark,
                                      srcLightHovered: e?.asset?.hovered?.light,
                                  },
                              };
                          }
                          return t?.type === a.G.TAB_TOOLTIP
                              ? {
                                    type: p.FF.TAB_TOOLTIP,
                                    title: () => t.title,
                                    body: () => t.body,
                                    asset: t.asset,
                                    badgeIcon: t.badgeIcon,
                                    badgeText: t.badgeText,
                                    badgeCountdownEndsAt: t.badgeCountdownEndsAt,
                                    entrypointBackgroundStyle: t.refTargetBackground?.style,
                                    entryPointBackgroundAssets: {
                                        srcDark: e.buttonBGRestingDark,
                                        srcLight: e.buttonBGRestingLight,
                                        srcDarkHovered: e.buttonBGHoverDark,
                                        srcLightHovered: e.buttonBGHoverLight,
                                    },
                                    showHoverGradient: t.showHoverGradient,
                                    version: t.version,
                                }
                              : null;
                      })(R, h),
            [C, O, R, h],
        ),
        y = O ? null : e;
    return {
        shopButtonDisplayOptions: y ?? L,
        dismissShopButtonDC: i.useCallback(
            (e) => {
                if (null != y) {
                    (t(e),
                        null != h &&
                            (0, c.$l)(o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, h.version, {
                                dismissAction: N.i.AUTO_DISMISS,
                            }));
                    return;
                }
                null != L &&
                    null != h &&
                    (0, c.$l)(o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, h.version, {
                        dismissAction: e,
                        version: h.version,
                    });
            },
            [y, L, t, h],
        ),
    };
};
