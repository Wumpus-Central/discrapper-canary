n.d(t, { d: () => o });
var r = n(807153),
    i = n(383466),
    o = (function () {
        function e(e) {
            if (0 == arguments.length) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ('function' != typeof e) throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
            r.M.connect(this, e);
        }
        return (
            (e.prototype.observe = function (e, t) {
                if (0 == arguments.length) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!(0, i.kK)(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                r.M.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
                if (0 == arguments.length) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!(0, i.kK)(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                r.M.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
                r.M.disconnect(this);
            }),
            (e.toString = function () {
                return 'function ResizeObserver () { [polyfill code] }';
            }),
            e
        );
    })();
