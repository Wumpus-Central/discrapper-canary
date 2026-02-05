"use strict";
n.d(t, { R: () => i });
var r = n(540185);
class i {
    id;
    type;
    applicationId;
    constructor({ id: e, applicationId: t }) {
        (this.id = e), (this.type = r.x.APPLICATION), (this.applicationId = t);
    }
    toSubmission() {
        return { id: this.id, data: { type: this.type, application_id: this.applicationId } };
    }
    isDiscardable() {
        return !1;
    }
    isValid() {
        return !0;
    }
    isEqual(e) {
        return e instanceof i && e.applicationId === this.applicationId;
    }
    getUniqueKey() {
        return `${this.type}-${this.applicationId}`;
    }
    getProfileAnalyticsOptions() {
        return { widgetType: this.type, applicationId: this.applicationId };
    }
    getProfileEditAnalyticsOptions() {
        return { widgetEdited: this.type, applicationId: this.applicationId };
    }
}
