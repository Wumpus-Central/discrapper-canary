var n = l(70283),
    r = l(240248),
    a = l(982240),
    i = l(731309),
    u = l(988341),
    s = l(682901),
    o = l(792996);
function d(e) {
    return (0, i.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== n.$.STAFF;
}
l.d(
    t,
    {},
    {
        HA: function (e, t) {
            let l = (0, a.H5)(e);
            return e.owned
                ? e.badge_id === n.$.APRIL_FOOLS_2026
                    ? o.intl.string(o.t["5LcHT0"])
                    : d(e) && null == l
                      ? t
                      : null != l && e.badge_id !== n.$.STAFF
                        ? o.intl.formatToPlainString(o.t.XmaiRQ, { date: new Date(l) })
                        : o.intl.string(o.t.sTFApF)
                : o.intl.string(o.t.uHtDcT);
        },
        JV: function (e) {
            let { badge: t, viewerBadge: l, isViewerOnUpgradeableNitro: n } = e;
            return !n && l?.owned === !0 && (l.tiers?.length ?? 0) > 0 && null == l.next_tier
                ? o.intl.string(o.t.jY5xAL)
                : n
                  ? o.intl.string(o.t.qkwSSp)
                  : (l?.description ?? t.description);
        },
        NC: function (e, t, l) {
            let n = l ? void 0 : (t?.complex_icon_animated_url ?? e.complex_icon_animated_url),
                r =
                    n ??
                    t?.complex_icon_static_url ??
                    e.complex_icon_static_url ??
                    t?.simple_icon_url ??
                    e.simple_icon_url;
            return { animatedUrl: n, imageUrl: r };
        },
        Rt: function (e, t) {
            return e.badge_id === n.$.PREMIUM_TENURE && (t === s.PremiumTypes.TIER_0 || t === s.PremiumTypes.TIER_1);
        },
        Vg: function (e) {
            let { isNitro: t, isViewerOnUpgradeableNitro: l, viewerOwnsBadge: n } = e;
            return l ? "expressive" : n ? "secondary" : t ? "expressive" : "primary";
        },
        dy: function (e, t) {
            let l = t ?? e,
                n = (0, u.YU)(l, l.current_tier),
                a = (0, u.YU)(l, l.next_tier),
                i = l.progress?.[0];
            return {
                progress: i,
                threshold: i?.threshold ?? a?.requirements[0]?.threshold ?? null,
                currentArtUrl: n?.simple_icon_url ?? n?.complex_icon_static_url,
                nextArtUrl: a?.simple_icon_url ?? a?.complex_icon_static_url,
                helperText: (0, r.uJ)(i?.progress_helper_text) ? void 0 : i?.progress_helper_text,
            };
        },
        eJ: function (e) {
            let { badge: t, isViewingOtherUser: l, viewerOwnsBadge: r } = e;
            return l && !t.is_earnable && !r && t.badge_id !== n.$.STAFF;
        },
        f: d,
        iC: function (e, t) {
            let l = e.badge_id === n.$.PREMIUM_TENURE,
                r = l ? (t?.name ?? t?.key) : t?.name,
                a = l ? o.intl.string(o.t.Ipxkog) : e.name;
            return l
                ? { isNitro: l, eyebrow: void 0, displayName: null != r ? `${a} ${r}` : a }
                : null != r && e.owned
                  ? { isNitro: l, eyebrow: a, displayName: r }
                  : { isNitro: l, eyebrow: void 0, displayName: a };
        },
    },
);
