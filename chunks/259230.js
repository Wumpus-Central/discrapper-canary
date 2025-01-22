var i = r(936940),
    a = r(641236),
    o = r(325008),
    s = r(992051),
    l = a('iterator');
e.exports = !i(function () {
    var e = new URL('b?a=1&b=2&c=3', 'http://a'),
        n = e.searchParams,
        r = new URLSearchParams('a=1&a=2&b=3'),
        i = '';
    return (
        (e.pathname = 'c%20d'),
        n.forEach(function (e, r) {
            n.delete('b'), (i += r + e);
        }),
        r.delete('a', 2),
        r.delete('b', void 0),
        (s && (!e.toJSON || !r.has('a', 1) || r.has('a', 2) || !r.has('a', void 0) || r.has('b'))) || (!n.size && (s || !o)) || !n.sort || 'http://a/c%20d?a=1&c=3' !== e.href || '3' !== n.get('c') || 'a=1' !== String(new URLSearchParams('?a=1')) || !n[l] || 'a' !== new URL('https://a@b').username || 'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') || 'xn--e1aybc' !== new URL('http://тест').host || '#%D0%B1' !== new URL('http://a#б').hash || 'a1c3' !== i || 'x' !== new URL('http://x', void 0).host
    );
});
