n.d(t, { Z: () => m }), n(47120), n(230036);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(399606),
    s = n(481060),
    c = n(377171),
    u = n(430824),
    d = n(608949),
    p = n(905128),
    h = n(639777),
    f = n(19394),
    g = n(535396);
function m(e) {
    let t = (0, a.e7)([u.Z], () => {
            var t, n;
            return null != (n = null == (t = u.Z.getGuild(e)) ? void 0 : t.premiumSubscriberCount) ? n : 0;
        }),
        n = (0, h.Z)(e),
        l = (0, a.e7)([d.Z], () => d.Z.getNotificationStateForGuild(e), [e]),
        m = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(e)),
        { trailing: b, showUnread: y } = i.useMemo(() => {
            var e, n, i;
            if (null == m)
                return {
                    trailing: void 0,
                    showUnread: !1
                };
            let { unlocked: o } = m,
                a = (0, f.h)(o),
                u = null != (n = null == l ? void 0 : l.lastSeenWarningNotification) ? n : Date.now(),
                d = new Date(null == (e = a[a.length - 1]) ? void 0 : e.ends_at).getTime(),
                p = null != (i = null == l ? void 0 : l.lastBoostCount) ? i : 0;
            return a.length > 0 && u < d
                ? {
                      trailing: (0, r.jsx)(s.P4T, {
                          color: s.TVs.colors.STATUS_WARNING,
                          size: 'sm'
                      }),
                      showUnread: !0
                  }
                : t !== p && t - p > 0
                  ? {
                        trailing: (0, r.jsx)(s.mAB, {
                            count: t - p,
                            color: c.Z.BACKGROUND_ACCENT
                        }),
                        showUnread: !0
                    }
                  : {
                        trailing: void 0,
                        showUnread: !1
                    };
        }, [t, null == l ? void 0 : l.lastBoostCount, null == l ? void 0 : l.lastSeenWarningNotification, m]),
        _ = i.useMemo(() => {
            var e, n, r, i, a, s;
            if (null == m) return;
            let { catalog: c, powerups: u, unlocked: d, appliedBoosts: p } = m,
                h = t - (null != p ? p : 0),
                f = new Set(null != (n = null == (e = c.get(g.Us.PERK)) ? void 0 : e.map((e) => e.skuId)) ? n : []).difference(new Set(null != (r = null == l ? void 0 : l.seenPerkSkuIds) ? r : []));
            if (f.size > 0)
                return {
                    type: g.Us.PERK,
                    powerup: u.get(o().sample(Array.from(f))),
                    availableBoostCount: h
                };
            if (null == l) return;
            let b = new Set(
                null !=
                (a = Array.from(null != (i = d.values()) ? i : [])
                    .map((e) => {
                        var t;
                        return null == m || null == (t = m.powerups) ? void 0 : t.get(e.sku_id);
                    })
                    .filter((e) => (null == e ? void 0 : e.type) === g.Us.LEVEL)
                    .map((e) => e.skuId))
                    ? a
                    : []
            ).difference(new Set(null != (s = null == l ? void 0 : l.seenLevelSkuIds) ? s : []));
            if (b.size > 0) {
                let e = Array.from(b).sort();
                return {
                    type: g.Us.LEVEL,
                    powerup: u.get(e[e.length - 1])
                };
            }
        }, [m, l, t]);
    if (n && null !== m && (null != b || y || null != _))
        return {
            trailing: b,
            showUnread: y,
            popout: _
        };
}
