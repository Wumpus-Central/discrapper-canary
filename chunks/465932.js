"use strict";
n.d(t, { MH: () => c, YG: () => h, nq: () => E });
var i = n(64700),
    r = n(17928),
    s = n(163126),
    a = n(579908),
    o = n(636194),
    l = n(71393),
    d = n(836039),
    _ = n(652215);
let u = (e) => {
        let t = (0, s.A)();
        i.useEffect(() => {
            null != e &&
                e.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                o.A.getMonetizationRestrictionsFetchState(e.id) === o.e.NOT_FETCHED &&
                a.LJ(e.id, { signal: t });
        }, [e, t]);
        let n = e?.id;
        return {
            restrictions: (0, r.yK)([o.A], () => o.A.getMonetizationRestrictions(n ?? _.dJq) ?? []),
            restrictionsLoading: (0, r.bG)(
                [o.A],
                () => o.A.getMonetizationRestrictionsFetchState(n ?? _.dJq) === o.e.FETCHING,
            ),
        };
    },
    c = (e) => {
        let t = (0, r.bG)([l.A], () => l.A.getGuild(e), [e]),
            { restrictions: n, restrictionsLoading: i } = u(t);
        return {
            shouldHideGuildPurchaseEntryPoints:
                !(
                    t?.features.has(_.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(_.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
                ) || (i ? (t?.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0) : (0, d.Y5)(n)),
            restrictionsLoading: i,
        };
    },
    E = (e) => {
        let t = (0, r.bG)([l.A], () => l.A.getGuild(e), [e]),
            { restrictions: n, restrictionsLoading: i } = u(t),
            s = i ? (t?.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) ?? !0) : (0, d.a1)(n),
            a = !!t?.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
        return {
            shouldRestrictUpdatingCreatorMonetizationSettings: s || a,
            allowSelfRemoveMonetization: !s,
            restrictionsLoading: i,
        };
    },
    h = (e) => {
        let { restrictions: t, restrictionsLoading: n } = u((0, r.bG)([l.A], () => l.A.getGuild(e), [e]));
        return { isMonetizationReapplicationDisabled: (0, d.EM)(t), restrictionsLoading: n };
    };
