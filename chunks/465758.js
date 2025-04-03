for (
    var e = {
            glog: function (t) {
                if (t < 1) throw Error('glog(' + t + ')');
                return e.LOG_TABLE[t];
            },
            gexp: function (t) {
                for (; t < 0; ) t += 255;
                for (; t >= 256; ) t -= 255;
                return e.EXP_TABLE[t];
            },
            EXP_TABLE: Array(256),
            LOG_TABLE: Array(256)
        },
        r = 0;
    r < 8;
    r++
)
    e.EXP_TABLE[r] = 1 << r;
for (var r = 8; r < 256; r++) e.EXP_TABLE[r] = e.EXP_TABLE[r - 4] ^ e.EXP_TABLE[r - 5] ^ e.EXP_TABLE[r - 6] ^ e.EXP_TABLE[r - 8];
for (var r = 0; r < 255; r++) e.LOG_TABLE[e.EXP_TABLE[r]] = r;
t.exports = e;
