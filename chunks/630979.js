var i = function (e) {
        return String(Number(e)) === e ? Number(e) : e;
    },
    r = function (e, t, n, r) {
        if (r && !n) t[r] = i(e[1]);
        else for (var a = 0; a < n.length; a += 1) null != e[a + 1] && (t[n[a]] = i(e[a + 1]));
    },
    a = function (e, t, n) {
        var i = e.name && e.names;
        e.push && !t[e.push] ? (t[e.push] = []) : i && !t[e.name] && (t[e.name] = {});
        var a = e.push ? {} : i ? t[e.name] : t;
        r(n.match(e.reg), a, e.names, e.name), e.push && t[e.push].push(a);
    },
    s = n(767172),
    o = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
t.parse = function (e) {
    var t = {},
        n = [],
        i = t;
    return (
        e
            .split(/(\r\n|\r|\n)/)
            .filter(o)
            .forEach(function (e) {
                var t = e[0],
                    r = e.slice(2);
                'm' === t &&
                    (n.push({
                        rtp: [],
                        fmtp: []
                    }),
                    (i = n[n.length - 1]));
                for (var o = 0; o < (s[t] || []).length; o += 1) {
                    var l = s[t][o];
                    if (l.reg.test(r)) return a(l, i, r);
                }
            }),
        (t.media = n),
        t
    );
};
var l = function (e, t) {
    var n = t.split(/=(.+)/, 2);
    return 2 === n.length && (e[n[0]] = i(n[1])), e;
};
(t.parseParams = function (e) {
    return e.split(/\;\s?/).reduce(l, {});
}),
    (t.parseFmtpConfig = t.parseParams),
    (t.parsePayloads = function (e) {
        return e.split(' ').map(Number);
    }),
    (t.parseRemoteCandidates = function (e) {
        for (var t = [], n = e.split(' ').map(i), r = 0; r < n.length; r += 3)
            t.push({
                component: n[r],
                ip: n[r + 1],
                port: n[r + 2]
            });
        return t;
    }),
    (t.parseImageAttributes = function (e) {
        return e.split(' ').map(function (e) {
            return e
                .substring(1, e.length - 1)
                .split(',')
                .reduce(l, {});
        });
    }),
    (t.parseSimulcastStreamList = function (e) {
        return e.split(';').map(function (e) {
            return e.split(',').map(function (e) {
                var t,
                    n = !1;
                return (
                    '~' !== e[0] ? (t = i(e)) : ((t = i(e.substring(1, e.length))), (n = !0)),
                    {
                        scid: t,
                        paused: n
                    }
                );
            });
        });
    });
