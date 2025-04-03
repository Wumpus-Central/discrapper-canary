var n = r(65183).List;
t.exports = (function () {
    function t(t) {
        var e, r;
        (r = void 0),
            (e = '_decorators') in this
                ? Object.defineProperty(this, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[e] = r),
            (this._decorators = t.slice());
    }
    var e = t.prototype;
    return (
        (e.getDecorations = function (t, e) {
            var r = Array(t.getText().length).fill(null);
            return (
                this._decorators.forEach(function (n, i) {
                    var o = 0;
                    (0, n.strategy)(
                        t,
                        function (t, e) {
                            (function (t, e, r) {
                                for (var n = e; n < r; n++) if (null != t[n]) return !1;
                                return !0;
                            })(r, t, e) &&
                                ((function (t, e, r, n) {
                                    for (var i = e; i < r; i++) t[i] = n;
                                })(r, t, e, i + '.' + o),
                                o++);
                        },
                        e
                    );
                }),
                n(r)
            );
        }),
        (e.getComponentForKey = function (t) {
            var e = parseInt(t.split('.')[0], 10);
            return this._decorators[e].component;
        }),
        (e.getPropsForKey = function (t) {
            var e = parseInt(t.split('.')[0], 10);
            return this._decorators[e].props;
        }),
        t
    );
})();
