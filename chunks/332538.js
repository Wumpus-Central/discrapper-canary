n.d(t, { Z: () => m }), n(47120), n(230036);
var r = n(200651),
    i = n(192379),
    o = n(392711),
    l = n.n(o),
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
            return null !== (n = null === (t = u.Z.getGuild(e)) || void 0 === t ? void 0 : t.premiumSubscriberCount) && void 0 !== n ? n : 0;
        }),
        n = (0, h.Z)(e),
        o = (0, a.e7)([d.Z], () => d.Z.getNotificationStateForGuild(e), [e]),
        m = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(e)),
        { trailing: b, showUnread: v } = i.useMemo(() => {
            var e, n, i;
            if (null == m)
                return {
                    trailing: void 0,
                    showUnread: !1
                };
            let { unlocked: l } = m,
                a = (0, f.h)(l),
                u = null !== (n = null == o ? void 0 : o.lastSeenWarningNotification) && void 0 !== n ? n : Date.now(),
                d = new Date(null === (e = a[a.length - 1]) || void 0 === e ? void 0 : e.ends_at).getTime(),
                p = null !== (i = null == o ? void 0 : o.lastBoostCount) && void 0 !== i ? i : 0;
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
                            color: c.Z.BACKGROUND_MODIFIER_ACCENT
                        }),
                        showUnread: !0
                    }
                  : {
                        trailing: void 0,
                        showUnread: !1
                    };
        }, [t, null == o ? void 0 : o.lastBoostCount, null == o ? void 0 : o.lastSeenWarningNotification, m]),
        y = i.useMemo(() => {
            var e, n, r, i, a, s;
            if (null == m) return;
            let { catalog: c, powerups: u, unlocked: d, appliedBoosts: p } = m,
                h = t - p,
                f = new Set(null !== (n = null === (e = c.get(g.Us.PERK)) || void 0 === e ? void 0 : e.map((e) => e.skuId)) && void 0 !== n ? n : []).difference(new Set(null !== (r = null == o ? void 0 : o.seenPerkSkuIds) && void 0 !== r ? r : []));
            if (f.size > 0)
                return {
                    type: g.Us.PERK,
                    powerup: u.get(l().sample(Array.from(f))),
                    availableBoostCount: h
                };
            if (null == o) return;
            let b = new Set(
                null !==
                    (a = Array.from(null !== (i = d.values()) && void 0 !== i ? i : [])
                        .map((e) => {
                            var t;
                            return null == m ? void 0 : null === (t = m.powerups) || void 0 === t ? void 0 : t.get(e.sku_id);
                        })
                        .filter((e) => (null == e ? void 0 : e.type) === g.Us.LEVEL)
                        .map((e) => e.skuId)) && void 0 !== a
                    ? a
                    : []
            ).difference(new Set(null !== (s = null == o ? void 0 : o.seenLevelSkuIds) && void 0 !== s ? s : []));
            if (b.size > 0) {
                let e = Array.from(b).sort();
                return {
                    type: g.Us.LEVEL,
                    powerup: u.get(e[e.length - 1])
                };
            }
        }, [m, o, t]);
    if (n && null !== m && (null != b || v || null != y))
        return {
            trailing: b,
            showUnread: v,
            popout: y
        };
}
