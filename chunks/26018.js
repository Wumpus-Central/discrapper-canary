var n = '%[a-f0-9]{2}',
    r = RegExp('(' + n + ')|([^%]+?)', 'gi'),
    i = RegExp('(' + n + ')+', 'gi');
function a(e, n) {
    try {
        return [decodeURIComponent(e.join(''))];
    } catch (e) {}
    if (1 === e.length) return e;
    n = n || 1;
    var r = e.slice(0, n),
        i = e.slice(n);
    return Array.prototype.concat.call([], a(r), a(i));
}
function o(e) {
    try {
        return decodeURIComponent(e);
    } catch (o) {
        for (var n = e.match(r) || [], i = 1; i < n.length; i++) n = (e = a(n, i).join('')).match(r) || [];
        return e;
    }
}
function s(e) {
    for (
        var n = {
                '%FE%FF': '\uFFFD\uFFFD',
                '%FF%FE': '\uFFFD\uFFFD'
            },
            r = i.exec(e);
        r;

    ) {
        try {
            n[r[0]] = decodeURIComponent(r[0]);
        } catch (e) {
            var a = o(r[0]);
            a !== r[0] && (n[r[0]] = a);
        }
        r = i.exec(e);
    }
    n['%C2'] = '\uFFFD';
    for (var s = Object.keys(n), l = 0; l < s.length; l++) {
        var u = s[l];
        e = e.replace(RegExp(u, 'g'), n[u]);
    }
    return e;
}
e.exports = function (e) {
    if ('string' != typeof e) throw TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof e + '`');
    try {
        return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
    } catch (n) {
        return s(e);
    }
};
