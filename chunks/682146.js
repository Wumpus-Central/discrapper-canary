var r = n(195691);
e.exports = function (e) {
    var t = r(e),
        n = 0,
        i = 0,
        o = 0,
        a = 0;
    if (t.length) {
        if (t.length > 1 && 0 === t[0].width) {
            var s = t[1];
            ((n = s.top), (i = s.right), (o = s.bottom), (a = s.left));
        } else {
            var l = t[0];
            ((n = l.top), (i = l.right), (o = l.bottom), (a = l.left));
        }
        for (var c = 1; c < t.length; c++) {
            var u = t[c];
            0 !== u.height && 0 !== u.width && ((n = Math.min(n, u.top)), (i = Math.max(i, u.right)), (o = Math.max(o, u.bottom)), (a = Math.min(a, u.left)));
        }
    }
    return {
        top: n,
        right: i,
        bottom: o,
        left: a,
        width: i - a,
        height: o - n
    };
};
