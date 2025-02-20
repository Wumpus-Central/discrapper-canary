var r = n(821819),
    i = n(360518),
    o = n(447631),
    a = n(414629),
    s = i('iterator');
e.exports = !r(function () {
    var e = new URL('b?a=1&b=2&c=3', 'http://a'),
        t = e.searchParams,
        n = new URLSearchParams('a=1&a=2&b=3'),
        r = '';
    return (
        (e.pathname = 'c%20d'),
        t.forEach(function (e, n) {
            t.delete('b'), (r += n + e);
        }),
        n.delete('a', 2),
        n.delete('b', void 0),
        (a && (!e.toJSON || !n.has('a', 1) || n.has('a', 2) || !n.has('a', void 0) || n.has('b'))) || (!t.size && (a || !o)) || !t.sort || 'http://a/c%20d?a=1&c=3' !== e.href || '3' !== t.get('c') || 'a=1' !== String(new URLSearchParams('?a=1')) || !t[s] || 'a' !== new URL('https://a@b').username || 'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') || 'xn--e1aybc' !== new URL('http://тест').host || '#%D0%B1' !== new URL('http://a#б').hash || 'a1c3' !== r || 'x' !== new URL('http://x', void 0).host
    );
});
