n.d(t, {
    R: () => a,
});
var r = n(540185);

function i(e, t, n) {
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
class a {
    toSubmission() {
        return {
            id: this.id,
            data: {
                type: this.type,
                application_id: this.applicationId,
            },
        };
    }
    isDiscardable() {
        return !1;
    }
    isValid() {
        return !0;
    }
    isEqual(e) {
        return e instanceof a && e.applicationId === this.applicationId;
    }
    getUniqueKey() {
        return "".concat(this.type, "-").concat(this.applicationId);
    }
    getProfileAnalyticsOptions() {
        return {
            widgetType: this.type,
            applicationId: this.applicationId,
        };
    }
    getProfileEditAnalyticsOptions() {
        return {
            widgetEdited: this.type,
            applicationId: this.applicationId,
        };
    }
    constructor({ id: e, applicationId: t }) {
        i(this, "id", void 0),
            i(this, "type", void 0),
            i(this, "applicationId", void 0),
            (this.id = e),
            (this.type = r.x.APPLICATION),
            (this.applicationId = t);
    }
}
