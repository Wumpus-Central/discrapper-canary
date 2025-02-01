var t = 'Function.prototype.bind called on incompatible ',
    n = Array.prototype.slice,
    i = Object.prototype.toString,
    r = '[object Function]';
e.exports = function (e) {
    var a,
        s = this;
    if ('function' != typeof s || i.call(s) !== r) throw TypeError(t + s);
    for (
        var o = n.call(arguments, 1),
            l = function () {
                if (!(this instanceof a)) return s.apply(e, o.concat(n.call(arguments)));
                var t = s.apply(this, o.concat(n.call(arguments)));
                return Object(t) === t ? t : this;
            },
            u = Math.max(0, s.length - o.length),
            c = [],
            d = 0;
        d < u;
        d++
    )
        c.push('$' + d);
    if (((a = Function('binder', 'return function (' + c.join(',') + '){ return binder.apply(this,arguments); }')(l)), s.prototype)) {
        var f = function () {};
        (f.prototype = s.prototype), (a.prototype = new f()), (f.prototype = null);
    }
    return a;
};
