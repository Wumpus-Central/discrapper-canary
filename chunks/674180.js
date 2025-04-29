n.d(t, {
    eC: () => p,
    gX: () => _,
    uP: () => f
});
var r = n(192379),
    i = n(442837),
    o = n(81897),
    a = n(423117),
    s = n(289393),
    l = n(430824),
    c = n(738774),
    u = n(981631);
let d = (e) => {
        let t = (0, o.Z)();
        r.useEffect(() => {
            null != e && e.hasFeature(u.oNc.CREATOR_MONETIZABLE_RESTRICTED) && s.Z.getMonetizationRestrictionsFetchState(e.id) === s.M.NOT_FETCHED && a.Xj(e.id, { signal: t });
        }, [e, t]);
        let n = null == e ? void 0 : e.id;
        return {
            restrictions: (0, i.Wu)([s.Z], () => {
                var e;
                return null != (e = s.Z.getMonetizationRestrictions(null != n ? n : u.lds)) ? e : [];
            }),
            restrictionsLoading: (0, i.e7)([s.Z], () => s.Z.getMonetizationRestrictionsFetchState(null != n ? n : u.lds) === s.M.FETCHING)
        };
    },
    f = (e) => {
        var t;
        let n = (0, i.e7)([l.Z], () => l.Z.getGuild(e), [e]),
            { restrictions: r, restrictionsLoading: o } = d(n);
        return {
            shouldHideGuildPurchaseEntryPoints: !((null == n ? void 0 : n.hasFeature(u.oNc.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(u.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) || (o ? null == (t = null == n ? void 0 : n.hasFeature(u.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || t : (0, c.uq)(r)),
            restrictionsLoading: o
        };
    },
    _ = (e) => {
        var t;
        let n = (0, i.e7)([l.Z], () => l.Z.getGuild(e), [e]),
            { restrictions: r, restrictionsLoading: o } = d(n),
            a = o ? null == (t = null == n ? void 0 : n.hasFeature(u.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || t : (0, c.Q6)(r),
            s = !!(null == n ? void 0 : n.hasFeature(u.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING));
        return {
            shouldRestrictUpdatingCreatorMonetizationSettings: a || s,
            allowSelfRemoveMonetization: !a,
            restrictionsLoading: o
        };
    },
    p = (e) => {
        let { restrictions: t, restrictionsLoading: n } = d((0, i.e7)([l.Z], () => l.Z.getGuild(e), [e]));
        return {
            isMonetizationReapplicationDisabled: (0, c.m8)(t),
            restrictionsLoading: n
        };
    };
