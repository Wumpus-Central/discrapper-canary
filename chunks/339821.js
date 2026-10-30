n.d(t, { A: () => N });
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
    E = n(457421),
    A = n(327019),
    h = n(174929),
    f = n(807098),
    I = n(966971);
function p(e) {
    if ("" === e) return;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? void 0 : t;
}
function T(e) {
    let t = null != e && "" !== e.lightUrl ? e.lightUrl : void 0,
        n = null != e && "" !== e.darkUrl ? e.darkUrl : void 0;
    if (null != t || null != n) return { srcLightHovered: t, srcDarkHovered: n };
}
let m = {
    [h.s.UNSPECIFIED]: void 0,
    [h.s.SM_TILE]: A.l.SM_TILE,
    [h.s.MD_TILE]: A.l.MD_TILE,
    [h.s.LG_TILE]: A.l.LG_TILE,
    [h.s.VIDEO_TILE]: A.l.VIDEO_TILE,
};
var g = n(212407),
    S = n(49999);
let N = function () {
    var e, t;
    let n,
        A,
        h = (0, _.c)(s.C.SHOP_COACHMARK),
        N =
            ((e =
                h?.properties.properties.oneofKind === "shopCoachmark" ? h.properties.properties.shopCoachmark : null),
            (n = (0, f.T)(e?.asset)),
            (0, i.useMemo)(
                () =>
                    null == e
                        ? null
                        : {
                              type: I.FF.COACHMARK,
                              title: () => e.header,
                              body: () => e.body,
                              assetDark: n ?? "",
                              assetLight: n ?? "",
                              buttonLabel: "" !== e.buttonLabel ? e.buttonLabel : void 0,
                              badgeIcon: "" !== e.badgeIcon ? e.badgeIcon : void 0,
                              badgeText: "" !== e.badgeText ? e.badgeText : void 0,
                              badgeCountdownEndsAt: p(e.badgeCountdownEndsAt),
                              showHoverGradient: e.showHoverGradient,
                              displayType: m[e.displayType],
                              entryPointBackgroundAssets: T(e.hoverBackground),
                              version: e.version,
                          },
                [n, e],
            )),
        C = (0, _.c)(s.C.SHOP_TAB_TOOLTIP),
        O =
            ((t =
                C?.properties.properties.oneofKind === "shopTabTooltip"
                    ? C.properties.properties.shopTabTooltip
                    : null),
            (A = (0, f.T)(t?.asset)),
            (0, i.useMemo)(
                () =>
                    null == t
                        ? null
                        : {
                              type: I.FF.TAB_TOOLTIP,
                              title: () => t.header,
                              body: () => t.body,
                              asset: A ?? "",
                              badgeIcon: "" !== t.badgeIcon ? t.badgeIcon : void 0,
                              badgeText: "" !== t.badgeText ? t.badgeText : void 0,
                              badgeCountdownEndsAt: p(t.badgeCountdownEndsAt),
                              showHoverGradient: t.showHoverGradient,
                              entryPointBackgroundAssets: T(t.hoverBackground),
                          },
                [A, t],
            )),
        R = N ?? O,
        L = (null != N ? h?.promotionId : C?.promotionId) ?? "",
        y = null != R && "" !== L,
        [D, v] = (0, u.Cc)(y ? o.M.SHOP_TAB_TOOLTIP : null, L, void 0, !0),
        b = y && null != D,
        M = (0, l.bG)([E.A], () => E.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)),
        [P] = (0, u.RF)(b ? null : o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, M?.version ?? 0, void 0, !0),
        U = (0, d.useHasAnyModalOpen)(),
        w = (0, g.bv)(M),
        G =
            null == P || U
                ? null
                : (function (e, t) {
                      if (t?.type === a.G.BADGE)
                          return {
                              type: I.FF.BADGE,
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
                              type: I.FF.COACHMARK,
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
                                type: I.FF.TAB_TOOLTIP,
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
                  })(w, M),
        x = b && !U ? R : null;
    return {
        shopButtonDisplayOptions: x ?? G,
        dismissShopButtonDC: i.useCallback(
            (e) => {
                if (null != x) {
                    (v(e),
                        null != M &&
                            (0, c.$l)(o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, M.version, {
                                dismissAction: S.i.AUTO_DISMISS,
                            }));
                    return;
                }
                null != G &&
                    null != M &&
                    (0, c.$l)(o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, M.version, {
                        dismissAction: e,
                        version: M.version,
                    });
            },
            [x, G, v, M],
        ),
    };
};
