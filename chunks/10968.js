e.exports = function (e) {
    var t = {};
    function n(n) {
        var r = e.get(n);
        return void 0 === r ? [] : t[r] || [];
    }
    function r(e, t) {
        for (var r = n(e), i = 0, o = r.length; i < o; ++i)
            if (r[i] === t) {
                r.splice(i, 1);
                break;
            }
    }
    function i(e) {
        var t = n(e);
        t && (t.length = 0);
    }
    return {
        get: n,
        add: function (n, r) {
            var i = e.get(n);
            t[i] || (t[i] = []), t[i].push(r);
        },
        removeListener: r,
        removeAllListeners: i
    };
};
