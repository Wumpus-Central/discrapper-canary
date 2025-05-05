n.d(t, { _: () => s });
var r = n(608297);
function i(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function a(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function o(e, t, n) {
    return t && a(e.prototype, t), n && a(e, n), e;
}
var s = (function () {
    function e() {
        i(this, e);
    }
    return (
        o(e, [
            {
                key: 'run',
                value: function (e, t, n, i) {
                    var a = this.parse(e, t, n, i);
                    return a
                        ? {
                              setter: new r.gr(a.value, this.validate, this.set, this.priority, this.subPriority),
                              rest: a.rest
                          }
                        : null;
                }
            },
            {
                key: 'validate',
                value: function (e, t, n) {
                    return !0;
                }
            }
        ]),
        e
    );
})();
