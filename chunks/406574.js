var t = 'Function.prototype.bind called on incompatible ',
    n = Array.prototype.slice,
    r = Object.prototype.toString,
    i = '[object Function]';
e.exports = function (e) {
    var o,
        a = this;
    if ('function' != typeof a || r.call(a) !== i) throw TypeError(t + a);
    for (
        var s = n.call(arguments, 1),
            l = function () {
                if (!(this instanceof o)) return a.apply(e, s.concat(n.call(arguments)));
                var t = a.apply(this, s.concat(n.call(arguments)));
                return Object(t) === t ? t : this;
            },
            c = Math.max(0, a.length - s.length),
            u = [],
            d = 0;
        d < c;
        d++
    )
        u.push('$' + d);
    if (((o = Function('binder', 'return function (' + u.join(',') + '){ return binder.apply(this,arguments); }')(l)), a.prototype)) {
        var f = function () {};
        (f.prototype = a.prototype), (o.prototype = new f()), (f.prototype = null);
    }
    return o;
};
