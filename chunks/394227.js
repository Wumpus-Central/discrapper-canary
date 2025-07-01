var n = r(621523),
    i = r(751736),
    s = r(507604),
    a = r(511696),
    o = i('iterator');
t.exports = !n(function () {
    var t = new URL('b?a=1&b=2&c=3', 'https://a'),
        e = t.searchParams,
        r = new URLSearchParams('a=1&a=2&b=3'),
        n = '';
    return (
        (t.pathname = 'c%20d'),
        e.forEach(function (t, r) {
            (e.delete('b'), (n += r + t));
        }),
        r.delete('a', 2),
        r.delete('b', void 0),
        (a && (!t.toJSON || !r.has('a', 1) || r.has('a', 2) || !r.has('a', void 0) || r.has('b'))) || (!e.size && (a || !s)) || !e.sort || 'https://a/c%20d?a=1&c=3' !== t.href || '3' !== e.get('c') || 'a=1' !== String(new URLSearchParams('?a=1')) || !e[o] || 'a' !== new URL('https://a@b').username || 'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') || 'xn--e1aybc' !== new URL('https://тест').host || '#%D0%B1' !== new URL('https://a#б').hash || 'a1c3' !== n || 'x' !== new URL('https://x', void 0).host
    );
});
