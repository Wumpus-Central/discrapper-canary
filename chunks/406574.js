var n = 'Function.prototype.bind called on incompatible ',
    r = Array.prototype.slice,
    i = Object.prototype.toString,
    a = '[object Function]';
e.exports = function (e) {
    var o,
        s = this;
    if ('function' != typeof s || i.call(s) !== a) throw TypeError(n + s);
    for (
        var l = r.call(arguments, 1),
            u = function () {
                if (!(this instanceof o)) return s.apply(e, l.concat(r.call(arguments)));
                var n = s.apply(this, l.concat(r.call(arguments)));
                return Object(n) === n ? n : this;
            },
            c = Math.max(0, s.length - l.length),
            d = [],
            f = 0;
        f < c;
        f++
    )
        d.push('$' + f);
    if (((o = Function('binder', 'return function (' + d.join(',') + '){ return binder.apply(this,arguments); }')(u)), s.prototype)) {
        var p = function () {};
        (p.prototype = s.prototype), (o.prototype = new p()), (p.prototype = null);
    }
    return o;
};
