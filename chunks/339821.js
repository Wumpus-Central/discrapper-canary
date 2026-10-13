n.d(t, { A: () => p });
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
    A = n(807098),
    h = n(966971),
    f = n(212407),
    I = n(49999);
let p = function () {
    let e,
        t = (0, _.c)(s.C.SHOP_TAB_TOOLTIP),
        n = t?.properties.properties.oneofKind === "shopTabTooltip" ? t.properties.properties.shopTabTooltip : null,
        p =
            ((e = (0, A.T)(n?.asset)),
            (0, i.useMemo)(
                () =>
                    null == n
                        ? null
                        : {
                              type: h.FF.TAB_TOOLTIP,
                              title: () => n.header,
                              body: () => n.body,
                              asset: e ?? "",
                              badgeIcon: "" !== n.badgeIcon ? n.badgeIcon : void 0,
                              badgeText: "" !== n.badgeText ? n.badgeText : void 0,
                              badgeCountdownEndsAt: (function (e) {
                                  if ("" === e) return;
                                  let t = new Date(e);
                                  return Number.isNaN(t.getTime()) ? void 0 : t;
                              })(n.badgeCountdownEndsAt),
                              showHoverGradient: n.showHoverGradient,
                              entryPointBackgroundAssets: (function (e) {
                                  let t = null != e && "" !== e.lightUrl ? e.lightUrl : void 0,
                                      n = null != e && "" !== e.darkUrl ? e.darkUrl : void 0;
                                  if (null != t || null != n) return { srcLightHovered: t, srcDarkHovered: n };
                              })(n.hoverBackground),
                          },
                [e, n],
            )),
        T = t?.promotionId ?? "",
        m = null != n && "" !== T,
        [g, S] = (0, u.Cc)(m ? o.M.SHOP_TAB_TOOLTIP : null, T, void 0, !0),
        N = m && null != g,
        C = (0, l.bG)([E.A], () => E.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)),
        [O, R] = (0, u.RF)(N ? null : o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, C?.version ?? 0, void 0, !0),
        L = (0, d.useHasAnyModalOpen)(),
        y = (0, f.bv)(C),
        D =
            null == O || L
                ? null
                : (function (e, t) {
                      if (t?.type === a.G.BADGE)
                          return {
                              type: h.FF.BADGE,
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
                              type: h.FF.COACHMARK,
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
                                type: h.FF.TAB_TOOLTIP,
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
                  })(y, C),
        v = N && !L ? p : null;
    return {
        shopButtonDisplayOptions: v ?? D,
        dismissShopButtonDC: i.useCallback(
            (e) => {
                if (null != v) {
                    (S(e),
                        null != C &&
                            (0, c.$l)(o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING, C.version, {
                                dismissAction: I.i.AUTO_DISMISS,
                            }));
                    return;
                }
                null != D && R(e);
            },
            [v, D, S, R, C],
        ),
    };
};
