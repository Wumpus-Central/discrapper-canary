n.d(t, { _: () => o });
var i = n(608297);
function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function a(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function s(e, t, n) {
    return t && a(e.prototype, t), n && a(e, n), e;
}
var o = (function () {
    function e() {
        r(this, e);
    }
    return (
        s(e, [
            {
                key: 'run',
                value: function (e, t, n, r) {
                    var a = this.parse(e, t, n, r);
                    return a
                        ? {
                              setter: new i.gr(a.value, this.validate, this.set, this.priority, this.subPriority),
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
