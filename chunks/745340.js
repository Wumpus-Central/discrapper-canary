var n = function (e) {
        return String(Number(e)) === e ? Number(e) : e;
    },
    o = function (e, t, r, o) {
        if (o && !r) t[o] = n(e[1]);
        else for (var i = 0; i < r.length; i += 1) null != e[i + 1] && (t[r[i]] = n(e[i + 1]));
    },
    i = function (e, t, r) {
        var n = e.name && e.names;
        e.push && !t[e.push] ? (t[e.push] = []) : n && !t[e.name] && (t[e.name] = {});
        var i = e.push ? {} : n ? t[e.name] : t;
        o(r.match(e.reg), i, e.names, e.name), e.push && t[e.push].push(i);
    },
    a = r(150594),
    s = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
t.parse = function (e) {
    var t = {},
        r = [],
        n = t;
    return (
        e
            .split(/(\r\n|\r|\n)/)
            .filter(s)
            .forEach(function (e) {
                var t = e[0],
                    o = e.slice(2);
                "m" === t && (r.push({ rtp: [], fmtp: [] }), (n = r[r.length - 1]));
                for (var s = 0; s < (a[t] || []).length; s += 1) {
                    var l = a[t][s];
                    if (l.reg.test(o)) return i(l, n, o);
                }
            }),
        (t.media = r),
        t
    );
};
var l = function (e, t) {
    var r = t.split(/=(.+)/, 2);
    return 2 === r.length ? (e[r[0]] = n(r[1])) : 1 === r.length && t.length > 1 && (e[r[0]] = void 0), e;
};
(t.parseParams = function (e) {
    return e.split(/;\s?/).reduce(l, {});
}),
    (t.parseFmtpConfig = t.parseParams),
    (t.parsePayloads = function (e) {
        return e.toString().split(" ").map(Number);
    }),
    (t.parseRemoteCandidates = function (e) {
        for (var t = [], r = e.split(" ").map(n), o = 0; o < r.length; o += 3)
            t.push({ component: r[o], ip: r[o + 1], port: r[o + 2] });
        return t;
    }),
    (t.parseImageAttributes = function (e) {
        return e.split(" ").map(function (e) {
            return e
                .substring(1, e.length - 1)
                .split(",")
                .reduce(l, {});
        });
    }),
    (t.parseSimulcastStreamList = function (e) {
        return e.split(";").map(function (e) {
            return e.split(",").map(function (e) {
                var t,
                    r = !1;
                return (
                    "~" !== e[0] ? (t = n(e)) : ((t = n(e.substring(1, e.length))), (r = !0)), { scid: t, paused: r }
                );
            });
        });
    });
