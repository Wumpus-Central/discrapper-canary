"use strict";
n.d(t, { A: () => s });
var i,
    r =
        (((i = r || {})[(i.PRIMARY_APP_COMMAND_NOT_FOUND = 0)] = "PRIMARY_APP_COMMAND_NOT_FOUND"),
        (i[(i.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED = 1)] = "LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED"),
        (i[(i.INVALID_CHANNEL = 2)] = "INVALID_CHANNEL"),
        i);
class s {
    reason;
    detailCode;
    static Reasons = r;
    constructor(e, t) {
        (this.reason = e), (this.detailCode = t);
    }
}
