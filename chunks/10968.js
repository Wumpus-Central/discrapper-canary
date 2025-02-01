e.exports = function (e) {
    var t = {};
    function n(n) {
        var i = e.get(n);
        return void 0 === i ? [] : t[i] || [];
    }
    function i(e, t) {
        for (var i = n(e), r = 0, a = i.length; r < a; ++r)
            if (i[r] === t) {
                i.splice(r, 1);
                break;
            }
    }
    function r(e) {
        var t = n(e);
        t && (t.length = 0);
    }
    return {
        get: n,
        add: function (n, i) {
            var r = e.get(n);
            t[r] || (t[r] = []), t[r].push(i);
        },
        removeListener: i,
        removeAllListeners: r
    };
};
