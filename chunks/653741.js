function r(e, t, n) {
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
n.d(t, {
    wN: () => s,
});
class i {
    isFeatureTeenByDefault(e) {
        return (this.teenByDefault & e) != 0;
    }
    hasTeenDefaults() {
        var e;
        return (null != (e = this.teenByDefault) ? e : 0) !== 0;
    }
    constructor(e) {
        r(this, "teenByDefault", void 0), (this.teenByDefault = e);
    }
}
class a {
    isFeatureAgeGated(e) {
        return (this.gatedFeatures & e) != 0;
    }
    hasAgeGatedFeatures() {
        var e;
        return (null != (e = this.gatedFeatures) ? e : 0) !== 0;
    }
    constructor(e) {
        r(this, "gatedFeatures", void 0), (this.gatedFeatures = e);
    }
}
class s {
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
        return new s(new i(e.teen_by_default_settings), new a(e.age_gated_features));
    }
    constructor(e, t) {
        r(this, "settings", void 0),
            r(this, "ageVerification", void 0),
            (this.settings = e),
            (this.ageVerification = t);
    }
}
