var r,
    i,
    o = n(957578).Buffer,
    a = n(180756),
    s = n(138031),
    l = n(275227),
    c = n(871230),
    u = n.g.crypto && n.g.crypto.subtle,
    d = {
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
    f = [];
function p(e) {
    if ((n.g.process && !n.g.process.browser) || !u || !u.importKey || !u.deriveBits) return Promise.resolve(!1);
    if (void 0 !== f[e]) return f[e];
    var t = h((r = r || o.alloc(8)), r, 10, 128, e)
        .then(function () {
            return !0;
        })
        .catch(function () {
            return !1;
        });
    return (f[e] = t), t;
}
function _() {
    return i || (i = n.g.process && n.g.process.nextTick ? n.g.process.nextTick : n.g.queueMicrotask ? n.g.queueMicrotask : n.g.setImmediate ? n.g.setImmediate : n.g.setTimeout);
}
function h(e, t, n, r, i) {
    return u
        .importKey('raw', e, { name: 'PBKDF2' }, !1, ['deriveBits'])
        .then(function (e) {
            return u.deriveBits(
                {
                    name: 'PBKDF2',
                    salt: t,
                    iterations: n,
                    hash: { name: i }
                },
                e,
                r << 3
            );
        })
        .then(function (e) {
            return o.from(e);
        });
}
function m(e, t) {
    e.then(
        function (e) {
            _()(function () {
                t(null, e);
            });
        },
        function (e) {
            _()(function () {
                t(e);
            });
        }
    );
}
e.exports = function (e, t, r, i, o, u) {
    'function' == typeof o && ((u = o), (o = void 0));
    var f = d[(o = o || 'sha1').toLowerCase()];
    if (!f || 'function' != typeof n.g.Promise) {
        _()(function () {
            var n;
            try {
                n = l(e, t, r, i, o);
            } catch (e) {
                return u(e);
            }
            u(null, n);
        });
        return;
    }
    if ((a(r, i), (e = c(e, s, 'Password')), (t = c(t, s, 'Salt')), 'function' != typeof u)) throw Error('No callback provided to pbkdf2');
    m(
        p(f).then(function (n) {
            return n ? h(e, t, r, i, f) : l(e, t, r, i, o);
        }),
        u
    );
};
