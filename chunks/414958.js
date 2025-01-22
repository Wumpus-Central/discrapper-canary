r.d(n, {
    d: function () {
        return o;
    }
});
var i = r(951069),
    a = r(839826),
    o = (function () {
        function e(e) {
            if (0 == arguments.length) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ('function' != typeof e) throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
            i.M.connect(this, e);
        }
        return (
            (e.prototype.observe = function (e, n) {
                if (0 == arguments.length) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!(0, a.kK)(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                i.M.observe(this, e, n);
            }),
            (e.prototype.unobserve = function (e) {
                if (0 == arguments.length) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!(0, a.kK)(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                i.M.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
                i.M.disconnect(this);
            }),
            (e.toString = function () {
                return 'function ResizeObserver () { [polyfill code] }';
            }),
            e
        );
    })();
