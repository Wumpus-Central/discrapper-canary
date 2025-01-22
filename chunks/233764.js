var i;
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r.d(n, {
    Z: function () {
        return o;
    }
}),
    !(function (e) {
        (e[(e.PRIMARY_APP_COMMAND_NOT_FOUND = 0)] = 'PRIMARY_APP_COMMAND_NOT_FOUND'), (e[(e.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED = 1)] = 'LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED'), (e[(e.INVALID_CHANNEL = 2)] = 'INVALID_CHANNEL');
    })(i || (i = {}));
class o {
    constructor(e) {
        a(this, 'reason', void 0), (this.reason = e);
    }
}
a(o, 'Reasons', i);
