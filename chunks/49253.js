var l = n(70283),
    r = n(224689),
    a = n(240248),
    i = n(982240),
    u = n(731309),
    s = n(988341),
    o = n(682901),
    d = n(792996);
function c(e) {
    return (0, u.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== l.$.STAFF;
}
n.d(
    t,
    {},
    {
        HA: function (e, t) {
            let n = (0, i.H5)(e);
            return e.owned
                ? e.badge_id === l.$.APRIL_FOOLS_2026
                    ? d.intl.string(d.t["5LcHT0"])
                    : c(e) && null == n
                      ? t
                      : null != n && e.badge_id !== l.$.STAFF
                        ? d.intl.formatToPlainString(d.t.XmaiRQ, { date: new Date(n) })
                        : d.intl.string(d.t.sTFApF)
                : d.intl.string(d.t.uHtDcT);
        },
        JV: function (e) {
            let { badge: t, viewerBadge: n, isViewerOnUpgradeableNitro: a } = e;
            return t.badge_id !== l.$.ORB_VOID || r.T.getConfig({ location: "badge_directory_enter_void_cta" }).enabled
                ? !a && n?.owned === !0 && (n.tiers?.length ?? 0) > 0 && null == n.next_tier
                    ? d.intl.string(d.t.jY5xAL)
                    : a
                      ? d.intl.string(d.t.qkwSSp)
                      : (n?.description ?? t.description)
                : void 0;
        },
        NC: function (e, t, n) {
            let l = n ? void 0 : (t?.complex_icon_animated_url ?? e.complex_icon_animated_url),
                r =
                    l ??
                    t?.complex_icon_static_url ??
                    e.complex_icon_static_url ??
                    t?.simple_icon_url ??
                    e.simple_icon_url;
            return { animatedUrl: l, imageUrl: r };
        },
        Rt: function (e, t) {
            return e.badge_id === l.$.PREMIUM_TENURE && (t === o.PremiumTypes.TIER_0 || t === o.PremiumTypes.TIER_1);
        },
        Vg: function (e) {
            let { isNitro: t, isViewerOnUpgradeableNitro: n, viewerOwnsBadge: l } = e;
            return n ? "expressive" : l ? "secondary" : t ? "expressive" : "primary";
        },
        dy: function (e, t) {
            let n = t ?? e,
                l = (0, s.YU)(n, n.current_tier),
                r = (0, s.YU)(n, n.next_tier),
                i = n.progress?.[0];
            return {
                progress: i,
                threshold: i?.threshold ?? r?.requirements[0]?.threshold ?? null,
                currentArtUrl: l?.simple_icon_url ?? l?.complex_icon_static_url,
                nextArtUrl: r?.simple_icon_url ?? r?.complex_icon_static_url,
                helperText: (0, a.uJ)(i?.progress_helper_text) ? void 0 : i?.progress_helper_text,
            };
        },
        eJ: function (e) {
            let { badge: t, isViewingOtherUser: n, viewerOwnsBadge: r } = e;
            return n && !t.is_earnable && !r && t.badge_id !== l.$.STAFF;
        },
        f: c,
        iC: function (e, t) {
            let n = e.badge_id === l.$.PREMIUM_TENURE,
                r = n ? (t?.name ?? t?.key) : t?.name,
                a = n ? d.intl.string(d.t.Ipxkog) : e.name;
            return n
                ? { isNitro: n, eyebrow: void 0, displayName: null != r ? `${a} ${r}` : a }
                : null != r && e.owned
                  ? { isNitro: n, eyebrow: a, displayName: r }
                  : { isNitro: n, eyebrow: void 0, displayName: a };
        },
    },
);
