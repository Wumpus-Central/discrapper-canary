"use strict";
n.d(t, { wN: () => s });
class r {
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
class i {
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
class s {
    settings;
    ageVerification;
    constructor(e, t) {
        (this.settings = e), (this.ageVerification = t);
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
    static fromConnectionOpen(e) {
        return new s(new r(e.teen_by_default_settings), new i(e.age_gated_features));
    }
}
