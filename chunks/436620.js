r.d(n, {
    Fo: function () {
        return p;
    },
    KO: function () {
        return u;
    },
    U8: function () {
        return d;
    },
    WS: function () {
        return f;
    },
    X6: function () {
        return h;
    },
    fi: function () {
        return c;
    }
});
var i,
    a = r(264344),
    o = r.n(a);
let s = parseInt(null !== (i = o().version) && void 0 !== i ? i : '0', 10),
    l = void 0 !== o().ua && o().ua.indexOf('OculusBrowser') > -1,
    u = (() => {
        if (null == window.WebSocket) return !1;
        switch (o().name) {
            case 'IE':
            case 'Microsoft Edge':
                return s >= 15;
            default:
                return !0;
        }
    })(),
    c = l || ('Firefox' === o().name && s >= 80) || ('Chrome' === o().name && s >= 37) || ('Opera' === o().name && s >= 66) || ('Node.js' === o().name && s >= 6) || ('Electron' === o().name && s >= 1) || ('Safari' === o().name && s >= 13) || ('Microsoft Edge' === o().name && s >= 37),
    d = 'Chrome' === o().name || 'Safari' === o().name || ('Firefox' === o().name && s >= 80) || 'Opera' === o().name || 'Microsoft Edge' === o().name,
    f = l || ('Firefox' === o().name && s >= 73) || ('Safari' === o().name && s >= 13) || ('Chrome' === o().name && s >= 80) || ('Microsoft Edge' === o().name && s >= 80),
    p = ('Chrome' === o().name && s >= 58) || ('Safari' === o().name && s >= 15) || ('Firefox' === o().name && s >= 108),
    h = ('Chrome' === o().name && s >= 72) || ('Safari' === o().name && s >= 11) || ('Opera' === o().name && s >= 60) || ('Microsoft Edge' === o().name && s >= 79);
