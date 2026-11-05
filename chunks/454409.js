n.d(t, { A: () => h });
var i = n(855986),
    r = n(73153),
    a = n(956956),
    s = n(362645);
class l {
    teenByDefault;
    constructor(e) {
        this.teenByDefault = e;
    }
    isFeatureTeenByDefault(e) {
        return (this.teenByDefault & e) != 0;
    }
    hasTeenDefaults() {
        return (this.teenByDefault ?? 0) !== 0;
    }
}
class o {
    gatedFeatures;
    constructor(e) {
        this.gatedFeatures = e;
    }
    isFeatureAgeGated(e) {
        return (this.gatedFeatures & e) != 0;
    }
    hasAgeGatedFeatures() {
        return (this.gatedFeatures ?? 0) !== 0;
    }
}
class d {
    shouldCollectSignal;
    consentRevokedIOS;
    consentRevokedAndroid;
    constructor(e, t = !1, n = !1) {
        ((this.shouldCollectSignal = e), (this.consentRevokedIOS = t), (this.consentRevokedAndroid = n));
    }
}
class c {
    regulation;
    constructor(e) {
        this.regulation = e;
    }
    isRegulation(e) {
        return this.regulation === e;
    }
}
class u {
    settings;
    ageVerification;
    appStore;
    mediaTakedown;
    constructor(e, t, n, i) {
        ((this.settings = e), (this.ageVerification = t), (this.appStore = n), (this.mediaTakedown = i));
    }
    isFeatureAgeGated(e) {
        return this.ageVerification.isFeatureAgeGated(e);
    }
    isFeatureTeenByDefault(e) {
        return this.settings.isFeatureTeenByDefault(e);
    }
    hasAgeGatedFeatures() {
        return this.ageVerification.hasAgeGatedFeatures();
    }
    hasTeenDefaults() {
        return this.settings.hasTeenDefaults();
    }
    shouldCollectAppStoreSignal() {
        return this.appStore.shouldCollectSignal;
    }
    isMediaTakedownRegulation(e) {
        return this.mediaTakedown.isRegulation(e);
    }
    isAppStoreConsentRevoked(e) {
        return "ios" === e ? this.appStore.consentRevokedIOS : this.appStore.consentRevokedAndroid;
    }
    static fromConnectionOpen(e) {
        let t = e.media_takedown_regulation;
        return new u(
            new l(e.teen_by_default_settings),
            new o(e.age_gated_features),
            new d(
                !0 === e.should_collect_app_store_signal,
                !0 === e.app_store_consent_revoked_ios,
                !0 === e.app_store_consent_revoked_android,
            ),
            new c((0, s.c)(t) ? t : null),
        );
    }
}
let _ = null,
    E = null;
function A(e) {
    if (null == e) return !1;
    E = (0, a.XF)(e) ?? (0, a.rE)();
}
class f extends i.Ay.Store {
    static displayName = "RegionalFeatureConfigStore";
    getRegionalFeatureConfig() {
        return _;
    }
    isFeatureAgeGated(e) {
        return _?.isFeatureAgeGated(e) ?? !1;
    }
    isSettingTeenByDefault(e) {
        return _?.isFeatureTeenByDefault(e) ?? !1;
    }
    hasAgeGatedFeatures() {
        return _?.hasAgeGatedFeatures() ?? !1;
    }
    hasTeenDefaults() {
        return _?.hasTeenDefaults() ?? !1;
    }
    shouldCollectAppStoreSignal() {
        return _?.shouldCollectAppStoreSignal() ?? !1;
    }
    isMediaTakedownRegulation(e) {
        return _?.isMediaTakedownRegulation(e) ?? !1;
    }
    isAppStoreConsentRevoked(e) {
        return _?.isAppStoreConsentRevoked(e) ?? !1;
    }
    getUserCountryCode() {
        return E;
    }
}
let h = new f(r.h, {
    CONNECTION_OPEN: function (e) {
        (A(e.countryCode),
            (_ = null != e.regionalFeatureConfig ? u.fromConnectionOpen(e.regionalFeatureConfig) : null));
    },
    SET_LOCATION_METADATA: function (e) {
        let { countryCode: t } = e;
        return A(t);
    },
});
