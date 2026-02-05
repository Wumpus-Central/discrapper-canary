"use strict";
n.d(t, { A: () => i });
var r = (function (e) {
    return (
        (e[(e.PRIMARY_APP_COMMAND_NOT_FOUND = 0)] = "PRIMARY_APP_COMMAND_NOT_FOUND"),
        (e[(e.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED = 1)] = "LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED"),
        (e[(e.INVALID_CHANNEL = 2)] = "INVALID_CHANNEL"),
        e
    );
})(r || {});
class i {
    reason;
    detailCode;
    static Reasons = r;
    constructor(e, t) {
        (this.reason = e), (this.detailCode = t);
    }
}
