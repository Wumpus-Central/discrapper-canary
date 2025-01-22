var i,
    a,
    o = r(957578).Buffer,
    s = r(180756),
    l = r(138031),
    u = r(275227),
    c = r(871230),
    d = r.g.crypto && r.g.crypto.subtle,
    f = {
        sha: 'SHA-1',
        'sha-1': 'SHA-1',
        sha1: 'SHA-1',
        sha256: 'SHA-256',
        'sha-256': 'SHA-256',
        sha384: 'SHA-384',
        'sha-384': 'SHA-384',
        'sha-512': 'SHA-512',
        sha512: 'SHA-512'
    },
    p = [];
function h(e) {
    if ((r.g.process && !r.g.process.browser) || !d || !d.importKey || !d.deriveBits) return Promise.resolve(!1);
    if (void 0 !== p[e]) return p[e];
    var n = m((i = i || o.alloc(8)), i, 10, 128, e)
        .then(function () {
            return !0;
        })
        .catch(function () {
            return !1;
        });
    return (p[e] = n), n;
}
function _() {
    return a ? a : (a = r.g.process && r.g.process.nextTick ? r.g.process.nextTick : r.g.queueMicrotask ? r.g.queueMicrotask : r.g.setImmediate ? r.g.setImmediate : r.g.setTimeout);
}
function m(e, n, r, i, a) {
    return d
        .importKey('raw', e, { name: 'PBKDF2' }, !1, ['deriveBits'])
        .then(function (e) {
            return d.deriveBits(
                {
                    name: 'PBKDF2',
                    salt: n,
                    iterations: r,
                    hash: { name: a }
                },
                e,
                i << 3
            );
        })
        .then(function (e) {
            return o.from(e);
        });
}
function g(e, n) {
    e.then(
        function (e) {
            _()(function () {
                n(null, e);
            });
        },
        function (e) {
            _()(function () {
                n(e);
            });
        }
    );
}
e.exports = function (e, n, i, a, o, d) {
    'function' == typeof o && ((d = o), (o = void 0));
    var p = f[(o = o || 'sha1').toLowerCase()];
    if (!p || 'function' != typeof r.g.Promise) {
        _()(function () {
            var r;
            try {
                r = u(e, n, i, a, o);
            } catch (e) {
                return d(e);
            }
            d(null, r);
        });
        return;
    }
    if ((s(i, a), (e = c(e, l, 'Password')), (n = c(n, l, 'Salt')), 'function' != typeof d)) throw Error('No callback provided to pbkdf2');
    g(
        h(p).then(function (r) {
            return r ? m(e, n, i, a, p) : u(e, n, i, a, o);
        }),
        d
    );
};
