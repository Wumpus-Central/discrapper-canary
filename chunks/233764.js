function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { Z: () => a });
var r = (function (e) {
    return (e[(e.PRIMARY_APP_COMMAND_NOT_FOUND = 0)] = 'PRIMARY_APP_COMMAND_NOT_FOUND'), (e[(e.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED = 1)] = 'LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED'), (e[(e.INVALID_CHANNEL = 2)] = 'INVALID_CHANNEL'), e;
})(r || {});
class a {
    constructor(e) {
        i(this, 'reason', void 0), (this.reason = e);
    }
}
i(a, 'Reasons', r);
