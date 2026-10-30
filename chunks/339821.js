n.d(t, { A: () => C });
var i = n(582128),
    r = n(379197),
    a = n(488430),
    s = n(877624),
    l = n(17928),
    o = n(554146),
    d = n(192308),
    c = n(501419),
    u = n(131607),
    _ = n(549996),
    E = n(412260),
    A = n(457421),
    h = n(327019),
    f = n(174929),
    I = n(807098),
    p = n(966971);
function T(e) {
    if ("" === e) return;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? void 0 : t;
}
function m(e) {
    let t = null != e && "" !== e.lightUrl ? e.lightUrl : void 0,
        n = null != e && "" !== e.darkUrl ? e.darkUrl : void 0;
    if (null != t || null != n) return { srcLightHovered: t, srcDarkHovered: n };
}
let g = {
    [f.s.UNSPECIFIED]: void 0,
    [f.s.SM_TILE]: h.l.SM_TILE,
    [f.s.MD_TILE]: h.l.MD_TILE,
    [f.s.LG_TILE]: h.l.LG_TILE,
    [f.s.VIDEO_TILE]: h.l.VIDEO_TILE,
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
                                      badgeCountdownEndsAt: T(e.badgeCountdownEndsAt),
                                      showHoverGradient: e.showHoverGradient,
                                      displayType: g[e.displayType],
                                      entryPointBackgroundAssets: m(e.hoverBackground),
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
                                      badgeCountdownEndsAt: T(t.badgeCountdownEndsAt),
                                      showHoverGradient: t.showHoverGradient,
                                      entryPointBackgroundAssets: m(t.hoverBackground),
                                  },
                        [r, t],
                    )),
                E = l ?? c,
                A = (null != l ? a?.promotionId : d?.promotionId) ?? "",
                h = null != E && "" !== A,
                [f, S] = (0, u.Cc)(h ? o.M.SHOP_TAB_TOOLTIP : null, A, void 0, !0);
            return { campaignOptions: h && null != f ? E : null, dismissCampaignMarketing: S };
        })(),
        n = null != e,
        h = (0, l.bG)(
            [E.A],
            () =>
                null != E.A.lastFetchedActivePromotions ||
                (!E.A.isFetchingActivePromotions && null != E.A.lastFetchedActivePromotionsLocale),
        ),
        f = (0, l.bG)([A.A], () => A.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)),
        [C] = (0, u.RF)(!h || n ? null : o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, f?.version ?? 0, void 0, !0),
        O = (0, d.useHasAnyModalOpen)(),
        R = (0, S.bv)(f),
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
                      })(R, f),
            [C, O, R, f],
        ),
        y = O ? null : e;
    return {
        shopButtonDisplayOptions: y ?? L,
        dismissShopButtonDC: i.useCallback(
            (e) => {
                if (null != y) {
                    (t(e),
                        null != f &&
                            (0, c.$l)(o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, f.version, {
                                dismissAction: N.i.AUTO_DISMISS,
                            }));
                    return;
                }
                null != L &&
                    null != f &&
                    (0, c.$l)(o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, f.version, {
                        dismissAction: e,
                        version: f.version,
                    });
            },
            [y, L, t, f],
        ),
    };
};
