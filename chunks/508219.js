var i,
    r,
    a = n(957578).Buffer,
    s = n(180756),
    o = n(138031),
    l = n(275227),
    u = n(871230),
    c = n.g.crypto && n.g.crypto.subtle,
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
function _(e) {
    if ((n.g.process && !n.g.process.browser) || !c || !c.importKey || !c.deriveBits) return Promise.resolve(!1);
    if (void 0 !== f[e]) return f[e];
    var t = h((i = i || a.alloc(8)), i, 10, 128, e)
        .then(function () {
            return !0;
        })
        .catch(function () {
            return !1;
        });
    return (f[e] = t), t;
}
function p() {
    return r || (r = n.g.process && n.g.process.nextTick ? n.g.process.nextTick : n.g.queueMicrotask ? n.g.queueMicrotask : n.g.setImmediate ? n.g.setImmediate : n.g.setTimeout);
}
function h(e, t, n, i, r) {
    return c
        .importKey('raw', e, { name: 'PBKDF2' }, !1, ['deriveBits'])
        .then(function (e) {
            return c.deriveBits(
                {
                    name: 'PBKDF2',
                    salt: t,
                    iterations: n,
                    hash: { name: r }
                },
                e,
                i << 3
            );
        })
        .then(function (e) {
            return a.from(e);
        });
}
function m(e, t) {
    e.then(
        function (e) {
            p()(function () {
                t(null, e);
            });
        },
        function (e) {
            p()(function () {
                t(e);
            });
        }
    );
}
e.exports = function (e, t, i, r, a, c) {
    'function' == typeof a && ((c = a), (a = void 0));
    var f = d[(a = a || 'sha1').toLowerCase()];
    if (!f || 'function' != typeof n.g.Promise) {
        p()(function () {
            var n;
            try {
                n = l(e, t, i, r, a);
            } catch (e) {
                return c(e);
            }
            c(null, n);
        });
        return;
    }
    if ((s(i, r), (e = u(e, o, 'Password')), (t = u(t, o, 'Salt')), 'function' != typeof c)) throw Error('No callback provided to pbkdf2');
    m(
        _(f).then(function (n) {
            return n ? h(e, t, i, r, f) : l(e, t, i, r, a);
        }),
        c
    );
};
