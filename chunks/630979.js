var i = function (e) {
        return String(Number(e)) === e ? Number(e) : e;
    },
    a = function (e, n, r, a) {
        if (a && !r) n[a] = i(e[1]);
        else for (var o = 0; o < r.length; o += 1) null != e[o + 1] && (n[r[o]] = i(e[o + 1]));
    },
    o = function (e, n, r) {
        var i = e.name && e.names;
        e.push && !n[e.push] ? (n[e.push] = []) : i && !n[e.name] && (n[e.name] = {});
        var o = e.push ? {} : i ? n[e.name] : n;
        a(r.match(e.reg), o, e.names, e.name), e.push && n[e.push].push(o);
    },
    s = r(767172),
    l = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
n.parse = function (e) {
    var n = {},
        r = [],
        i = n;
    return (
        e
            .split(/(\r\n|\r|\n)/)
            .filter(l)
            .forEach(function (e) {
                var n = e[0],
                    a = e.slice(2);
                'm' === n &&
                    (r.push({
                        rtp: [],
                        fmtp: []
                    }),
                    (i = r[r.length - 1]));
                for (var l = 0; l < (s[n] || []).length; l += 1) {
                    var u = s[n][l];
                    if (u.reg.test(a)) return o(u, i, a);
                }
            }),
        (n.media = r),
        n
    );
};
var u = function (e, n) {
    var r = n.split(/=(.+)/, 2);
    return 2 === r.length && (e[r[0]] = i(r[1])), e;
};
(n.parseParams = function (e) {
    return e.split(/\;\s?/).reduce(u, {});
}),
    (n.parseFmtpConfig = n.parseParams),
    (n.parsePayloads = function (e) {
        return e.split(' ').map(Number);
    }),
    (n.parseRemoteCandidates = function (e) {
        for (var n = [], r = e.split(' ').map(i), a = 0; a < r.length; a += 3)
            n.push({
                component: r[a],
                ip: r[a + 1],
                port: r[a + 2]
            });
        return n;
    }),
    (n.parseImageAttributes = function (e) {
        return e.split(' ').map(function (e) {
            return e
                .substring(1, e.length - 1)
                .split(',')
                .reduce(u, {});
        });
    }),
    (n.parseSimulcastStreamList = function (e) {
        return e.split(';').map(function (e) {
            return e.split(',').map(function (e) {
                var n,
                    r = !1;
                return (
                    '~' !== e[0] ? (n = i(e)) : ((n = i(e.substring(1, e.length))), (r = !0)),
                    {
                        scid: n,
                        paused: r
                    }
                );
            });
        });
    });
