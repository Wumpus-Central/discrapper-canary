n.d(t, {
    Ay: () => m,
    kJ: () => h,
    lg: () => _,
}),
    n(228524),
    n(938796),
    n(446912),
    n(896048);
var r = n(101359),
    i = n(315069),
    a = n(486020),
    s = n(431209),
    o = n(427157),
    l = n(360469);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {
    [l.I4]: 7,
    [l.qA]: 12,
};
function _(e) {
    let t = {
        os: e.os,
        name: e.name,
    };
    return (
        null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t
    );
}
class h extends i.A {
    static createFromServer(e) {
        return new h(
            f(u({}, e), {
                coverImage: e.cover_image,
                primarySkuId: e.primary_sku_id,
                bot: null != e.bot ? new o.A(e.bot) : null,
                thirdPartySkus: e.third_party_skus,
                roleConnectionsVerificationUrl: e.role_connections_verification_url,
                parentId: e.parent_id,
                connectionEntrypointUrl: e.connection_entrypoint_url,
            }),
        );
    }
    getIconURL(e, t) {
        return null != this.icon
            ? a.Ay.getGameAssetURL({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t,
              })
            : null;
    }
    getIconSource(e, t) {
        return null != this.icon
            ? a.Ay.getGameAssetSource({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t,
              })
            : null;
    }
    getSplashURL(e, t) {
        return null != this.splash
            ? a.Ay.getGameAssetURL({
                  id: this.id,
                  hash: this.splash,
                  size: e,
                  keepAspectRatio: !0,
                  format: t,
              })
            : null;
    }
    getCoverImageURL(e) {
        return null != this.coverImage
            ? a.Ay.getApplicationIconURL({
                  id: this.id,
                  icon: this.coverImage,
                  size: e,
                  keepAspectRatio: !0,
              })
            : null;
    }
    constructor(e) {
        var t, n, r, i, a, s;
        super(),
            c(this, "id", void 0),
            c(this, "name", void 0),
            c(this, "icon", void 0),
            c(this, "description", void 0),
            c(this, "type", void 0),
            c(this, "coverImage", void 0),
            c(this, "primarySkuId", void 0),
            c(this, "bot", void 0),
            c(this, "splash", void 0),
            c(this, "thirdPartySkus", void 0),
            c(this, "isMonetized", void 0),
            c(this, "isVerified", void 0),
            c(this, "roleConnectionsVerificationUrl", void 0),
            c(this, "parentId", void 0),
            c(this, "connectionEntrypointUrl", void 0),
            (this.id = e.id),
            (this.name = e.name),
            (this.icon = e.icon),
            (this.splash = e.splash),
            (this.primarySkuId = e.primarySkuId),
            (this.thirdPartySkus = null != (t = e.thirdPartySkus) ? t : []),
            (this.description = e.description),
            (this.bot = e.bot),
            (this.coverImage = e.coverImage),
            (this.type = e.type),
            (this.isMonetized = null != (n = e.is_monetized) ? n : e.isMonetized),
            (this.isVerified = null != (r = e.is_verified) ? r : e.isVerified),
            (this.roleConnectionsVerificationUrl =
                null != (i = e.role_connections_verification_url) ? i : e.roleConnectionsVerificationUrl),
            (this.parentId = null != (a = e.parent_id) ? a : e.parentId),
            (this.connectionEntrypointUrl = null != (s = e.connection_entrypoint_url) ? s : e.connectionEntrypointUrl);
    }
}
class m extends h {
    static createFromServer(e) {
        var t, n, i;
        return new m(
            f(u({}, e), {
                coverImage: e.cover_image,
                primarySkuId: e.primary_sku_id,
                bot: null != e.bot ? new o.A(e.bot) : null,
                thirdPartySkus: e.third_party_skus,
                roleConnectionsVerificationUrl: e.role_connections_verification_url,
                overlayWarn: e.overlay_warn,
                overlayCompatibilityHook: e.overlay_compatibility_hook,
                overlayMethods: null != (t = e.overlay_methods) ? t : r.b.DEFAULT,
                hook: e.hook,
                storeListingSkuId: e.store_listing_sku_id,
                guildId: e.guild_id,
                guild: e.guild,
                publishers: null != e.publishers ? e.publishers.map(s.A.createFromServer) : [],
                developers: null != e.developers ? e.developers.map(s.A.createFromServer) : [],
                eulaId: e.eula_id,
                slug: e.slug,
                flags: null != (n = e.flags) ? n : 0,
                maxParticipants: e.max_participants,
                tags: e.tags,
                embeddedActivityConfig: e.embedded_activity_config,
                integrationTypesConfig:
                    null != e.integration_types_config
                        ? Object.fromEntries(
                              Object.entries(e.integration_types_config).map((e) => {
                                  let [t, n] = e;
                                  return [t, { oauth2InstallParams: (null != n ? n : {}).oauth2_install_params }];
                              }),
                          )
                        : void 0,
                termsOfServiceUrl: e.terms_of_service_url,
                privacyPolicyUrl: e.privacy_policy_url,
                isDiscoverable: e.is_discoverable,
                directoryEntry: e.directory_entry,
                categories: e.categories,
                linkedGames:
                    null == (i = e.linked_games)
                        ? void 0
                        : i.map((e) =>
                              f(u({}, e), {
                                  application: null != e.application ? m.createFromServer(e.application) : void 0,
                              }),
                          ),
                deepLinkUri: e.deeplink_uri,
            }),
        );
    }
    mergeFromApplicationUpdate(e) {
        var t,
            n,
            r,
            i,
            a,
            s,
            o,
            l,
            c,
            d,
            f,
            p,
            _,
            h,
            g,
            E,
            b,
            y,
            O,
            A,
            v,
            S,
            I,
            T,
            C,
            N,
            R,
            w,
            P,
            D,
            x,
            L,
            j,
            M,
            k,
            U,
            G,
            V,
            F,
            B,
            H,
            Y,
            W,
            K,
            z;
        return new m({
            id: null != (t = e.id) ? t : this.id,
            name: null != (n = e.name) ? n : this.name,
            icon: null != (r = e.icon) ? r : this.icon,
            splash: null != (i = e.splash) ? i : this.splash,
            overlay: null != (a = e.overlay) ? a : this.overlay,
            overlayWarn: null != (s = e.overlayWarn) ? s : this.overlayWarn,
            overlayCompatibilityHook: null != (o = e.overlayCompatibilityHook) ? o : this.overlayCompatibilityHook,
            overlayMethods: null != (l = e.overlayMethods) ? l : this.overlayMethods,
            hook: null != (c = e.hook) ? c : this.hook,
            aliases: null != (d = e.aliases) ? d : this.aliases,
            publishers: null != (f = e.publishers) ? f : this.publishers,
            developers: null != (p = e.developers) ? p : this.developers,
            primarySkuId: null != (_ = e.primarySkuId) ? _ : this.primarySkuId,
            storeListingSkuId: null != (h = e.storeListingSkuId) ? h : this.storeListingSkuId,
            thirdPartySkus: null != (g = e.thirdPartySkus) ? g : this.thirdPartySkus,
            guildId: null != (E = e.guildId) ? E : this.guildId,
            guild: null != (b = e.guild) ? b : this.guild,
            executables: null != (y = e.executables) ? y : this.executables,
            hashes: null != (O = e.hashes) ? O : this.hashes,
            description: null != (A = e.description) ? A : this.description,
            eulaId: null != (v = e.eulaId) ? v : this.eulaId,
            slug: null != (S = e.slug) ? S : this.slug,
            coverImage: null != (I = e.coverImage) ? I : this.coverImage,
            bot: null != (T = e.bot) ? T : this.bot,
            flags: null != (C = e.flags) ? C : this.flags,
            maxParticipants: null != (N = e.maxParticipants) ? N : this.maxParticipants,
            tags: null != (R = e.tags) ? R : this.tags,
            embeddedActivityConfig:
                null != (w = e.embeddedActivityConfig)
                    ? w
                    : null != this.embeddedActivityConfig
                      ? u({}, this.embeddedActivityConfig)
                      : void 0,
            type: null != (P = e.type) ? P : this.type,
            team: null != (D = e.team) ? D : this.team,
            roleConnectionsVerificationUrl:
                null != (x = e.roleConnectionsVerificationUrl) ? x : this.roleConnectionsVerificationUrl,
            connectionEntrypointUrl: null != (L = e.connectionEntrypointUrl) ? L : this.connectionEntrypointUrl,
            integrationTypesConfig: null != (j = e.integrationTypesConfig) ? j : this.integrationTypesConfig,
            isMonetized: null != (M = e.isMonetized) ? M : this.isMonetized,
            storefront_available: null != (k = e.storefront_available) ? k : this.storefront_available,
            termsOfServiceUrl: null != (U = e.termsOfServiceUrl) ? U : this.termsOfServiceUrl,
            privacyPolicyUrl: null != (G = e.privacyPolicyUrl) ? G : this.privacyPolicyUrl,
            isVerified: null != (V = e.isVerified) ? V : this.isVerified,
            customInstallUrl: null != (F = e.customInstallUrl) ? F : this.customInstallUrl,
            installParams: null != (B = e.installParams) ? B : this.installParams,
            isDiscoverable: null != (H = e.isDiscoverable) ? H : this.isDiscoverable,
            directoryEntry: null != (Y = e.directoryEntry) ? Y : this.directoryEntry,
            categories: null != (W = e.categories) ? W : this.categories,
            linkedGames: null != (K = e.linkedGames) ? K : this.linkedGames,
            deepLinkUri: null != (z = e.deepLinkUri) ? z : this.deepLinkUri,
        });
    }
    getMaxParticipants() {
        var e, t;
        return null != (e = null != (t = this.maxParticipants) ? t : p[this.id]) ? e : 0;
    }
    supportsIntegrationTypes() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = this.integrationTypesConfig;
        return null != r && t.every((e) => e in r);
    }
    get destinationSkuId() {
        return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId;
    }
    get supportsOutOfProcessOverlay() {
        return m.supportsOutOfProcessOverlay(this.overlayMethods);
    }
    static supportsOutOfProcessOverlay(e) {
        let t = r.b.OUT_OF_PROCESS;
        return null != e && (e & t) === t;
    }
    constructor(e) {
        var t, n, i, a, s, o, l, d, p, h, g, E, b, y, O, A, v, S, I, T;
        super(e),
            c(this, "overlay", void 0),
            c(this, "overlayWarn", void 0),
            c(this, "overlayCompatibilityHook", void 0),
            c(this, "overlayMethods", void 0),
            c(this, "hook", void 0),
            c(this, "aliases", void 0),
            c(this, "publishers", void 0),
            c(this, "developers", void 0),
            c(this, "storeListingSkuId", void 0),
            c(this, "guildId", void 0),
            c(this, "guild", void 0),
            c(this, "executables", void 0),
            c(this, "hashes", void 0),
            c(this, "eulaId", void 0),
            c(this, "slug", void 0),
            c(this, "flags", void 0),
            c(this, "maxParticipants", void 0),
            c(this, "tags", void 0),
            c(this, "embeddedActivityConfig", void 0),
            c(this, "team", void 0),
            c(this, "integrationTypesConfig", void 0),
            c(this, "storefront_available", void 0),
            c(this, "termsOfServiceUrl", void 0),
            c(this, "privacyPolicyUrl", void 0),
            c(this, "isDiscoverable", void 0),
            c(this, "customInstallUrl", void 0),
            c(this, "installParams", void 0),
            c(this, "directoryEntry", void 0),
            c(this, "categories", void 0),
            c(this, "linkedGames", void 0),
            c(this, "deepLinkUri", void 0),
            (this.overlay = null != (t = e.overlay) && t),
            (this.overlayWarn = null != (n = e.overlayWarn) && n),
            (this.overlayCompatibilityHook = null != (i = e.overlayCompatibilityHook) && i),
            (this.overlayMethods = null != (a = e.overlayMethods) ? a : r.b.DEFAULT),
            (this.hook = null == (s = e.hook) || s),
            (this.aliases = null != (o = e.aliases) ? o : []),
            (this.publishers = null != (l = e.publishers) ? l : []),
            (this.developers = null != (d = e.developers) ? d : []),
            (this.storeListingSkuId = e.storeListingSkuId),
            (this.guildId = e.guildId),
            (this.guild = e.guild),
            (this.executables = (null != (p = e.executables) ? p : []).map(_)),
            (this.hashes = null != (h = e.hashes) ? h : []),
            (this.eulaId = e.eulaId),
            (this.slug = e.slug),
            (this.flags = null != (g = e.flags) ? g : 0),
            (this.tags = null != (E = e.tags) ? E : []),
            (this.maxParticipants = e.maxParticipants),
            (this.embeddedActivityConfig = null != (b = e.embedded_activity_config) ? b : e.embeddedActivityConfig),
            (this.team = e.team),
            (this.integrationTypesConfig = e.integrationTypesConfig),
            (this.storefront_available = e.storefront_available),
            (this.termsOfServiceUrl = e.termsOfServiceUrl),
            (this.privacyPolicyUrl = e.privacyPolicyUrl),
            (this.isDiscoverable = null != (y = e.is_discoverable) ? y : e.isDiscoverable),
            (this.customInstallUrl = null != (O = e.custom_install_url) ? O : e.customInstallUrl),
            (this.installParams = null != (A = e.install_params) ? A : e.installParams),
            (this.directoryEntry = null != (v = e.directory_entry) ? v : e.directoryEntry),
            (this.categories = e.categories),
            (this.linkedGames =
                null !=
                (S =
                    null == (T = e.linked_games)
                        ? void 0
                        : T.map((e) =>
                              f(u({}, e), {
                                  application: null != e.application ? m.createFromServer(e.application) : void 0,
                              }),
                          ))
                    ? S
                    : e.linkedGames),
            (this.deepLinkUri = null != (I = e.deepLinkUri) ? I : e.deeplink_uri);
    }
}
