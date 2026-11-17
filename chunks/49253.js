var r = n(70283),
    l = n(240248),
    a = n(982240),
    i = n(731309),
    u = n(988341),
    s = n(682901),
    o = n(792996);
function c(e) {
    return (0, i.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== r.$.STAFF;
}
n.d(
    t,
    {},
    {
        HA: function (e, t) {
            let n = (0, a.H5)(e);
            return e.owned
                ? e.badge_id === r.$.APRIL_FOOLS_2026
                    ? o.intl.string(o.t["5LcHT0"])
                    : c(e) && null == n
                      ? t
                      : null != n && e.badge_id !== r.$.STAFF
                        ? o.intl.formatToPlainString(o.t.XmaiRQ, { date: new Date(n) })
                        : o.intl.string(o.t.sTFApF)
                : o.intl.string(o.t.uHtDcT);
        },
        JV: function (e) {
            let { badge: t, viewerBadge: n, isViewerOnUpgradeableNitro: r } = e;
            return !r && n?.owned === !0 && (n.tiers?.length ?? 0) > 0 && null == n.next_tier
                ? o.intl.string(o.t.jY5xAL)
                : r
                  ? o.intl.string(o.t.qkwSSp)
                  : (n?.description ?? t.description);
        },
        NC: function (e, t, n) {
            let r = n ? void 0 : (t?.complex_icon_animated_url ?? e.complex_icon_animated_url),
                l =
                    r ??
                    t?.complex_icon_static_url ??
                    e.complex_icon_static_url ??
                    t?.simple_icon_url ??
                    e.simple_icon_url;
            return { animatedUrl: r, imageUrl: l };
        },
        Rt: function (e, t) {
            return e.badge_id === r.$.PREMIUM_TENURE && (t === s.PremiumTypes.TIER_0 || t === s.PremiumTypes.TIER_1);
        },
        Vg: function (e) {
            let { isNitro: t, isViewerOnUpgradeableNitro: n, viewerOwnsBadge: r } = e;
            return n ? "expressive" : r ? "secondary" : t ? "expressive" : "primary";
        },
        dy: function (e, t) {
            let n = t ?? e,
                r = (0, u.YU)(n, n.current_tier),
                a = (0, u.YU)(n, n.next_tier),
                i = n.progress?.[0];
            return {
                progress: i,
                threshold: i?.threshold ?? a?.requirements[0]?.threshold ?? null,
                currentArtUrl: r?.simple_icon_url ?? r?.complex_icon_static_url,
                nextArtUrl: a?.simple_icon_url ?? a?.complex_icon_static_url,
                helperText: (0, l.uJ)(i?.progress_helper_text) ? void 0 : i?.progress_helper_text,
            };
        },
        eJ: function (e) {
            let { badge: t, isViewingOtherUser: n, viewerOwnsBadge: l } = e;
            return n && !t.is_earnable && !l && t.badge_id !== r.$.STAFF;
        },
        f: c,
        iC: function (e, t) {
            let n = e.badge_id === r.$.PREMIUM_TENURE,
                l = n ? (t?.name ?? t?.key) : t?.name,
                a = n ? o.intl.string(o.t.Ipxkog) : e.name;
            return n
                ? { isNitro: n, eyebrow: void 0, displayName: null != l ? `${a} ${l}` : a }
                : null != l && e.owned
                  ? { isNitro: n, eyebrow: a, displayName: l }
                  : { isNitro: n, eyebrow: void 0, displayName: a };
        },
    },
);
