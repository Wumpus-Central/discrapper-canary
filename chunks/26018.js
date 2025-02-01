var t = '%[a-f0-9]{2}',
    n = RegExp('(' + t + ')|([^%]+?)', 'gi'),
    i = RegExp('(' + t + ')+', 'gi');
function r(e, t) {
    try {
        return [decodeURIComponent(e.join(''))];
    } catch (e) {}
    if (1 === e.length) return e;
    t = t || 1;
    var n = e.slice(0, t),
        i = e.slice(t);
    return Array.prototype.concat.call([], r(n), r(i));
}
function a(e) {
    try {
        return decodeURIComponent(e);
    } catch (a) {
        for (var t = e.match(n) || [], i = 1; i < t.length; i++) t = (e = r(t, i).join('')).match(n) || [];
        return e;
    }
}
function s(e) {
    for (
        var t = {
                '%FE%FF': '\uFFFD\uFFFD',
                '%FF%FE': '\uFFFD\uFFFD'
            },
            n = i.exec(e);
        n;

    ) {
        try {
            t[n[0]] = decodeURIComponent(n[0]);
        } catch (e) {
            var r = a(n[0]);
            r !== n[0] && (t[n[0]] = r);
        }
        n = i.exec(e);
    }
    t['%C2'] = '\uFFFD';
    for (var s = Object.keys(t), o = 0; o < s.length; o++) {
        var l = s[o];
        e = e.replace(RegExp(l, 'g'), t[l]);
    }
    return e;
}
e.exports = function (e) {
    if ('string' != typeof e) throw TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof e + '`');
    try {
        return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
    } catch (t) {
        return s(e);
    }
};
