!(function () {
    var e,
        i,
        r,
        n = 0,
        s = [];
    for (r = 0; r < 256; r++) s[r] = (r + 256).toString(16).substr(1);
    function o() {
        var t = ((!i || n + 16 > d.BUFFER_SIZE) && ((n = 0), (i = d.randomBytes(d.BUFFER_SIZE))), i.slice(n, (n += 16)));
        return (t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128), t;
    }
    function d() {
        var t = o();
        return s[t[0]] + s[t[1]] + s[t[2]] + s[t[3]] + '-' + s[t[4]] + s[t[5]] + '-' + s[t[6]] + s[t[7]] + '-' + s[t[8]] + s[t[9]] + '-' + s[t[10]] + s[t[11]] + s[t[12]] + s[t[13]] + s[t[14]] + s[t[15]];
    }
    (d.BUFFER_SIZE = 4096),
        (d.bin = o),
        (d.clearBuffer = function () {
            (i = null), (n = 0);
        }),
        (d.test = function (t) {
            return 'string' == typeof t && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t);
        }),
        'undefined' != typeof crypto ? (e = crypto) : 'undefined' != typeof window && void 0 !== window.msCrypto && (e = window.msCrypto),
        (e = e || a(636463)),
        (t.exports = d),
        (d.randomBytes = (function () {
            if (e) {
                if (e.randomBytes) return e.randomBytes;
                if (e.getRandomValues)
                    return 'function' != typeof Uint8Array.prototype.slice
                        ? function (t) {
                              var a = new Uint8Array(t);
                              return e.getRandomValues(a), Array.from(a);
                          }
                        : function (t) {
                              var a = new Uint8Array(t);
                              return e.getRandomValues(a), a;
                          };
            }
            return function (t) {
                var e,
                    a = [];
                for (e = 0; e < t; e++) a.push(Math.floor(256 * Math.random()));
                return a;
            };
        })());
})();
