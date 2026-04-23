"use strict";
n.d(t, { MH: () => _, YG: () => p, nq: () => f });
var r = n(64700),
    i = n(311907),
    s = n(163126),
    a = n(579908),
    o = n(636194),
    l = n(71393),
    u = n(836039),
    c = n(652215);
let d = (e) => {
        let t = (0, s.A)();
        r.useEffect(() => {
            null != e &&
                e.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                o.A.getMonetizationRestrictionsFetchState(e.id) === o.e.NOT_FETCHED &&
                a.LJ(e.id, { signal: t });
        }, [e, t]);
        let n = e?.id;
        return {
            restrictions: (0, i.yK)([o.A], () => o.A.getMonetizationRestrictions(n ?? c.dJq) ?? []),
            restrictionsLoading: (0, i.bG)(
                [o.A],
                () => o.A.getMonetizationRestrictionsFetchState(n ?? c.dJq) === o.e.FETCHING,
            ),
        };
    },
    _ = (e) => {
        let t = (0, i.bG)([l.A], () => l.A.getGuild(e), [e]),
            { restrictions: n, restrictionsLoading: r } = d(t);
        return {
            shouldHideGuildPurchaseEntryPoints:
                !(
                    t?.features.has(c.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
                ) || (r ? (t?.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0) : (0, u.Y5)(n)),
            restrictionsLoading: r,
        };
    },
    f = (e) => {
        let t = (0, i.bG)([l.A], () => l.A.getGuild(e), [e]),
            { restrictions: n, restrictionsLoading: r } = d(t),
            s = r ? (t?.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0) : (0, u.a1)(n),
            a = !!t?.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
        return {
            shouldRestrictUpdatingCreatorMonetizationSettings: s || a,
            allowSelfRemoveMonetization: !s,
            restrictionsLoading: r,
        };
    },
    p = (e) => {
        let { restrictions: t, restrictionsLoading: n } = d((0, i.bG)([l.A], () => l.A.getGuild(e), [e]));
        return { isMonetizationReapplicationDisabled: (0, u.EM)(t), restrictionsLoading: n };
    };
