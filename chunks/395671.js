"use strict";
n.d(t, { kJ: () => p, lg: () => h, Ay: () => E }), n(938796);
var i,
    r = (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"), (i[(i.OUT_OF_PROCESS = 1)] = "OUT_OF_PROCESS"), i),
    s = n(136722),
    a = n(315069),
    o = n(486020),
    l = n(935208);
class u extends a.A {
    id;
    name;
    static createFromServer(e) {
        return new u(e);
    }
    constructor(e) {
        super(), (this.id = e.id), (this.name = e.name);
    }
}
var c = n(889227),
    d = n(360469),
    _ = n(705751);
let f = { [d.I4]: 7, [d.qA]: 12 };
function h(e) {
    let t = { os: e.os, name: e.name };
    return (
        null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t
    );
}
class p extends a.A {
    id;
    name;
    icon;
    description;
    type;
    coverImage;
    primarySkuId;
    bot;
    splash;
    thirdPartySkus;
    isMonetized;
    isVerified;
    roleConnectionsVerificationUrl;
    parentId;
    _connectionEntrypointUrl;
    contentClassification;
    static createFromServer(e) {
        return new p({
            ...e,
            coverImage: e.cover_image,
            primarySkuId: e.primary_sku_id,
            bot: null != e.bot ? new c.A(e.bot) : null,
            thirdPartySkus: e.third_party_skus,
            roleConnectionsVerificationUrl: e.role_connections_verification_url,
            parentId: e.parent_id,
            _connectionEntrypointUrl: e.connection_entrypoint_url,
            contentClassification: e.content_classification,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.icon = e.icon),
            (this.splash = e.splash),
            (this.primarySkuId = e.primarySkuId),
            (this.thirdPartySkus = e.thirdPartySkus ?? []),
            (this.description = e.description),
            (this.bot = e.bot),
            (this.coverImage = e.coverImage),
            (this.type = e.type),
            (this.isMonetized = e.is_monetized ?? e.isMonetized),
            (this.isVerified = e.is_verified ?? e.isVerified),
            (this.roleConnectionsVerificationUrl =
                e.role_connections_verification_url ?? e.roleConnectionsVerificationUrl),
            (this.parentId = e.parent_id ?? e.parentId),
            (this._connectionEntrypointUrl = e.connection_entrypoint_url ?? e._connectionEntrypointUrl),
            (this.contentClassification = e.content_classification ?? e.contentClassification);
    }
    get connectionEntrypointUrl() {
        let { getIsRiotSocialSDKMigrationEnabled: e } = n(941314),
            { getIsValorantSocialSDKEnabled: t } = n(159276);
        return ["1443349464290168976", "1443350165678198935", "1443033465766281327"].includes(this.id) &&
            ("1443350165678198935" !== this.id || t({ location: "ApplicationRecord" })) &&
            e({ location: "ApplicationRecord" })
            ? "https://aes.sgp.pvp.net/providers/discord/link/v1"
            : this._connectionEntrypointUrl;
    }
    getIconURL(e, t) {
        return null != this.icon ? o.Ay.getGameAssetURL({ id: this.id, hash: this.icon, size: e, format: t }) : null;
    }
    getIconSource(e, t) {
        return null != this.icon ? o.Ay.getGameAssetSource({ id: this.id, hash: this.icon, size: e, format: t }) : null;
    }
    getSplashURL(e, t) {
        return null != this.splash
            ? o.Ay.getGameAssetURL({ id: this.id, hash: this.splash, size: e, keepAspectRatio: !0, format: t })
            : null;
    }
    getCoverImageURL(e) {
        return null != this.coverImage
            ? o.Ay.getApplicationIconURL({ id: this.id, icon: this.coverImage, size: e, keepAspectRatio: !0 })
            : null;
    }
}
class E extends p {
    overlay;
    overlayWarn;
    overlayCompatibilityHook;
    overlayMethods;
    hook;
    aliases;
    publishers;
    developers;
    storeListingSkuId;
    guildId;
    guild;
    executables;
    hashes;
    eulaId;
    slug;
    flags;
    maxParticipants;
    tags;
    embeddedActivityConfig;
    team;
    integrationTypesConfig;
    storefront_available;
    termsOfServiceUrl;
    privacyPolicyUrl;
    isDiscoverable;
    customInstallUrl;
    installParams;
    directoryEntry;
    categories;
    linkedGames;
    deepLinkUri;
    applicationAccountLinkBenefitConfig;
    static createFromServer(e) {
        return new E({
            ...e,
            coverImage: e.cover_image,
            primarySkuId: e.primary_sku_id,
            bot: null != e.bot ? new c.A(e.bot) : null,
            thirdPartySkus: e.third_party_skus,
            roleConnectionsVerificationUrl: e.role_connections_verification_url,
            overlayWarn: e.overlay_warn,
            overlayCompatibilityHook: e.overlay_compatibility_hook,
            overlayMethods: e.overlay_methods ?? r.DEFAULT,
            hook: e.hook,
            storeListingSkuId: e.store_listing_sku_id,
            guildId: e.guild_id,
            guild: e.guild,
            publishers: null != e.publishers ? e.publishers.map(u.createFromServer) : [],
            developers: null != e.developers ? e.developers.map(u.createFromServer) : [],
            eulaId: e.eula_id,
            slug: e.slug,
            flags: s.iu(e.flags_new ?? e.flags ?? 0),
            maxParticipants: e.max_participants,
            tags: e.tags,
            embeddedActivityConfig: e.embedded_activity_config,
            integrationTypesConfig:
                null != e.integration_types_config
                    ? Object.fromEntries(
                          Object.entries(e.integration_types_config).map((e) => {
                              let [t, n] = e;
                              return [t, { oauth2InstallParams: (n ?? {}).oauth2_install_params }];
                          }),
                      )
                    : void 0,
            termsOfServiceUrl: e.terms_of_service_url,
            privacyPolicyUrl: e.privacy_policy_url,
            isDiscoverable: e.is_discoverable,
            directoryEntry: e.directory_entry,
            categories: e.categories,
            linkedGames: e.linked_games?.map((e) => ({
                ...e,
                application: null != e.application ? E.createFromServer(e.application) : void 0,
            })),
            deepLinkUri: e.deeplink_uri,
            applicationAccountLinkBenefitConfig: e.application_account_link_benefit_config,
        });
    }
    constructor(e) {
        super(e),
            (this.overlay = e.overlay ?? !1),
            (this.overlayWarn = e.overlayWarn ?? !1),
            (this.overlayCompatibilityHook = e.overlayCompatibilityHook ?? !1),
            (this.overlayMethods = e.overlayMethods ?? r.DEFAULT),
            (this.hook = e.hook ?? !0),
            (this.aliases = e.aliases ?? []),
            (this.publishers = e.publishers ?? []),
            (this.developers = e.developers ?? []),
            (this.storeListingSkuId = e.storeListingSkuId),
            (this.guildId = e.guildId),
            (this.guild = e.guild),
            (this.executables = (e.executables ?? []).map(h)),
            (this.hashes = e.hashes ?? []),
            (this.eulaId = e.eulaId),
            (this.slug = e.slug),
            (this.flags = s.iu(e.flags ?? 0)),
            (this.tags = e.tags ?? []),
            (this.maxParticipants = e.maxParticipants),
            (this.embeddedActivityConfig = e.embedded_activity_config ?? e.embeddedActivityConfig),
            (this.team = e.team),
            (this.integrationTypesConfig = e.integrationTypesConfig),
            (this.storefront_available = e.storefront_available),
            (this.termsOfServiceUrl = e.termsOfServiceUrl),
            (this.privacyPolicyUrl = e.privacyPolicyUrl),
            (this.isDiscoverable = e.is_discoverable ?? e.isDiscoverable),
            (this.customInstallUrl = e.custom_install_url ?? e.customInstallUrl),
            (this.installParams = e.install_params ?? e.installParams),
            (this.directoryEntry = e.directory_entry ?? e.directoryEntry),
            (this.categories = e.categories),
            (this.linkedGames =
                e.linked_games?.map((e) => ({
                    ...e,
                    application: null != e.application ? E.createFromServer(e.application) : void 0,
                })) ?? e.linkedGames),
            (this.deepLinkUri = e.deepLinkUri ?? e.deeplink_uri),
            (this.applicationAccountLinkBenefitConfig =
                e.applicationAccountLinkBenefitConfig ?? e.application_account_link_benefit_config);
    }
    getCanonicalGameId() {
        return this.type === _.S7.GAME
            ? l.default.cast(this.id)
            : (this.linkedGames?.find((e) => e.application?.type === _.S7.GAME)?.id ?? null);
    }
    mergeFromApplicationUpdate(e) {
        return new E({
            id: e.id ?? this.id,
            name: e.name ?? this.name,
            icon: e.icon ?? this.icon,
            splash: e.splash ?? this.splash,
            overlay: e.overlay ?? this.overlay,
            overlayWarn: e.overlayWarn ?? this.overlayWarn,
            overlayCompatibilityHook: e.overlayCompatibilityHook ?? this.overlayCompatibilityHook,
            overlayMethods: e.overlayMethods ?? this.overlayMethods,
            hook: e.hook ?? this.hook,
            aliases: e.aliases ?? this.aliases,
            publishers: e.publishers ?? this.publishers,
            developers: e.developers ?? this.developers,
            primarySkuId: e.primarySkuId ?? this.primarySkuId,
            storeListingSkuId: e.storeListingSkuId ?? this.storeListingSkuId,
            thirdPartySkus: e.thirdPartySkus ?? this.thirdPartySkus,
            guildId: e.guildId ?? this.guildId,
            guild: e.guild ?? this.guild,
            executables: e.executables ?? this.executables,
            hashes: e.hashes ?? this.hashes,
            description: e.description ?? this.description,
            eulaId: e.eulaId ?? this.eulaId,
            slug: e.slug ?? this.slug,
            coverImage: e.coverImage ?? this.coverImage,
            bot: e.bot ?? this.bot,
            flags: e.flags ?? this.flags,
            maxParticipants: e.maxParticipants ?? this.maxParticipants,
            tags: e.tags ?? this.tags,
            embeddedActivityConfig:
                e.embeddedActivityConfig ??
                (null != this.embeddedActivityConfig ? { ...this.embeddedActivityConfig } : void 0),
            type: e.type ?? this.type,
            team: e.team ?? this.team,
            roleConnectionsVerificationUrl: e.roleConnectionsVerificationUrl ?? this.roleConnectionsVerificationUrl,
            _connectionEntrypointUrl: e._connectionEntrypointUrl ?? this._connectionEntrypointUrl,
            integrationTypesConfig: e.integrationTypesConfig ?? this.integrationTypesConfig,
            isMonetized: e.isMonetized ?? this.isMonetized,
            storefront_available: e.storefront_available ?? this.storefront_available,
            termsOfServiceUrl: e.termsOfServiceUrl ?? this.termsOfServiceUrl,
            privacyPolicyUrl: e.privacyPolicyUrl ?? this.privacyPolicyUrl,
            isVerified: e.isVerified ?? this.isVerified,
            customInstallUrl: e.customInstallUrl ?? this.customInstallUrl,
            installParams: e.installParams ?? this.installParams,
            isDiscoverable: e.isDiscoverable ?? this.isDiscoverable,
            directoryEntry: e.directoryEntry ?? this.directoryEntry,
            categories: e.categories ?? this.categories,
            linkedGames: e.linkedGames ?? this.linkedGames,
            deepLinkUri: e.deepLinkUri ?? this.deepLinkUri,
            applicationAccountLinkBenefitConfig:
                e.applicationAccountLinkBenefitConfig ?? this.applicationAccountLinkBenefitConfig,
            contentClassification: e.contentClassification ?? this.contentClassification,
        });
    }
    getMaxParticipants() {
        return this.maxParticipants ?? f[this.id] ?? 0;
    }
    supportsIntegrationTypes() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let i = this.integrationTypesConfig;
        return null != i && t.every((e) => e in i);
    }
    get destinationSkuId() {
        return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId;
    }
    get supportsOutOfProcessOverlay() {
        return E.supportsOutOfProcessOverlay(this.overlayMethods);
    }
    static supportsOutOfProcessOverlay(e) {
        let t = r.OUT_OF_PROCESS;
        return null != e && (e & t) === t;
    }
}
