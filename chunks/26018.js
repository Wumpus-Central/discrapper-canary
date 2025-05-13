var t = '%[a-f0-9]{2}',
    n = RegExp('(' + t + ')|([^%]+?)', 'gi'),
    r = RegExp('(' + t + ')+', 'gi');
function i(e, t) {
    try {
        return [decodeURIComponent(e.join(''))];
    } catch (e) {}
    if (1 === e.length) return e;
    t = t || 1;
    var n = e.slice(0, t),
        r = e.slice(t);
    return Array.prototype.concat.call([], i(n), i(r));
}
function a(e) {
    try {
        return decodeURIComponent(e);
    } catch (a) {
        for (var t = e.match(n) || [], r = 1; r < t.length; r++) t = (e = i(t, r).join('')).match(n) || [];
        return e;
    }
}
function o(e) {
    for (
        var t = {
                '%FE%FF': '\uFFFD\uFFFD',
                '%FF%FE': '\uFFFD\uFFFD'
            },
            n = r.exec(e);
        n;

    ) {
        try {
            t[n[0]] = decodeURIComponent(n[0]);
        } catch (e) {
            var i = a(n[0]);
            i !== n[0] && (t[n[0]] = i);
        }
        n = r.exec(e);
    }
    t['%C2'] = '\uFFFD';
    for (var o = Object.keys(t), s = 0; s < o.length; s++) {
        var l = o[s];
        e = e.replace(RegExp(l, 'g'), t[l]);
    }
    return e;
}
e.exports = function (e) {
    if ('string' != typeof e) throw TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof e + '`');
    try {
        return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
    } catch (t) {
        return o(e);
    }
};
