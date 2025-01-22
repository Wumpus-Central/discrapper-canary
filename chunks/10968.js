e.exports = function (e) {
    var n = {};
    function r(r) {
        var i = e.get(r);
        return void 0 === i ? [] : n[i] || [];
    }
    function i(e, n) {
        for (var i = r(e), a = 0, o = i.length; a < o; ++a)
            if (i[a] === n) {
                i.splice(a, 1);
                break;
            }
    }
    function a(e) {
        var n = r(e);
        if (!!n) n.length = 0;
    }
    return {
        get: r,
        add: function r(r, i) {
            var a = e.get(r);
            !n[a] && (n[a] = []), n[a].push(i);
        },
        removeListener: i,
        removeAllListeners: a
    };
};
