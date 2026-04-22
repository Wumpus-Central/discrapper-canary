"use strict";
n.d(t, { A: () => s });
var r,
    i =
        (((r = i || {})[(r.PRIMARY_APP_COMMAND_NOT_FOUND = 0)] = "PRIMARY_APP_COMMAND_NOT_FOUND"),
        (r[(r.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED = 1)] = "LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED"),
        (r[(r.INVALID_CHANNEL = 2)] = "INVALID_CHANNEL"),
        r);
class s {
    reason;
    detailCode;
    static Reasons = i;
    constructor(e, t) {
        (this.reason = e), (this.detailCode = t);
    }
}
