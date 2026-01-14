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
n.d(t, { IC: () => o });
class i {
    isFeatureTeenByDefault(e) {
        return (this.teenByDefault & e) != 0;
    }
    constructor(e) {
        r(this, "teenByDefault", void 0), (this.teenByDefault = e);
    }
}
class a {
    isFeatureAgeGated(e) {
        return (this.gatedFeatures & e) != 0;
    }
    constructor(e) {
        r(this, "gatedFeatures", void 0), (this.gatedFeatures = e);
    }
}
class o {
    isFeatureAgeGated(e) {
        return this.ageVerification.isFeatureAgeGated(e);
    }
    isFeatureTeenByDefault(e) {
        return this.settings.isFeatureTeenByDefault(e);
    }
    static fromConnectionOpen(e) {
        return new o(new i(e.teen_by_default_settings), new a(e.age_gated_features));
    }
    constructor(e, t) {
        r(this, "settings", void 0),
            r(this, "ageVerification", void 0),
            (this.settings = e),
            (this.ageVerification = t);
    }
}
