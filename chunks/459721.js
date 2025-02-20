var o = r(58615),
    n = r(860377),
    i = r(939059),
    a = r(746272),
    u = r(669013);
function s(t, e) {
    (this.typeNumber = t), (this.errorCorrectLevel = e), (this.modules = null), (this.moduleCount = 0), (this.dataCache = null), (this.dataList = []);
}
var l = s.prototype;
(l.addData = function (t) {
    var e = new o(t);
    this.dataList.push(e), (this.dataCache = null);
}),
    (l.isDark = function (t, e) {
        if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw Error(t + ',' + e);
        return this.modules[t][e];
    }),
    (l.getModuleCount = function () {
        return this.moduleCount;
    }),
    (l.make = function () {
        if (this.typeNumber < 1) {
            var t = 1;
            for (t = 1; t < 40; t++) {
                for (var e = n.getRSBlocks(t, this.errorCorrectLevel), r = new i(), o = 0, u = 0; u < e.length; u++) o += e[u].dataCount;
                for (var u = 0; u < this.dataList.length; u++) {
                    var s = this.dataList[u];
                    r.put(s.mode, 4), r.put(s.getLength(), a.getLengthInBits(s.mode, t)), s.write(r);
                }
                if (r.getLengthInBits() <= 8 * o) break;
            }
            this.typeNumber = t;
        }
        this.makeImpl(!1, this.getBestMaskPattern());
    }),
    (l.makeImpl = function (t, e) {
        (this.moduleCount = 4 * this.typeNumber + 17), (this.modules = Array(this.moduleCount));
        for (var r = 0; r < this.moduleCount; r++) {
            this.modules[r] = Array(this.moduleCount);
            for (var o = 0; o < this.moduleCount; o++) this.modules[r][o] = null;
        }
        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = s.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e);
    }),
    (l.setupPositionProbePattern = function (t, e) {
        for (var r = -1; r <= 7; r++) if (!(t + r <= -1) && !(this.moduleCount <= t + r)) for (var o = -1; o <= 7; o++) e + o <= -1 || this.moduleCount <= e + o || ((0 <= r && r <= 6 && (0 == o || 6 == o)) || (0 <= o && o <= 6 && (0 == r || 6 == r)) || (2 <= r && r <= 4 && 2 <= o && o <= 4) ? (this.modules[t + r][e + o] = !0) : (this.modules[t + r][e + o] = !1));
    }),
    (l.getBestMaskPattern = function () {
        for (var t = 0, e = 0, r = 0; r < 8; r++) {
            this.makeImpl(!0, r);
            var o = a.getLostPoint(this);
            (0 == r || t > o) && ((t = o), (e = r));
        }
        return e;
    }),
    (l.createMovieClip = function (t, e, r) {
        var o = t.createEmptyMovieClip(e, r);
        this.make();
        for (var n = 0; n < this.modules.length; n++)
            for (var i = +n, a = 0; a < this.modules[n].length; a++) {
                var u = +a;
                this.modules[n][a] && (o.beginFill(0, 100), o.moveTo(u, i), o.lineTo(u + 1, i), o.lineTo(u + 1, i + 1), o.lineTo(u, i + 1), o.endFill());
            }
        return o;
    }),
    (l.setupTimingPattern = function () {
        for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
        for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
    }),
    (l.setupPositionAdjustPattern = function () {
        for (var t = a.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
            for (var r = 0; r < t.length; r++) {
                var o = t[e],
                    n = t[r];
                if (null == this.modules[o][n]) for (var i = -2; i <= 2; i++) for (var u = -2; u <= 2; u++) -2 == i || 2 == i || -2 == u || 2 == u || (0 == i && 0 == u) ? (this.modules[o + i][n + u] = !0) : (this.modules[o + i][n + u] = !1);
            }
    }),
    (l.setupTypeNumber = function (t) {
        for (var e = a.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
            var o = !t && ((e >> r) & 1) == 1;
            this.modules[Math.floor(r / 3)][(r % 3) + this.moduleCount - 8 - 3] = o;
        }
        for (var r = 0; r < 18; r++) {
            var o = !t && ((e >> r) & 1) == 1;
            this.modules[(r % 3) + this.moduleCount - 8 - 3][Math.floor(r / 3)] = o;
        }
    }),
    (l.setupTypeInfo = function (t, e) {
        for (var r = (this.errorCorrectLevel << 3) | e, o = a.getBCHTypeInfo(r), n = 0; n < 15; n++) {
            var i = !t && ((o >> n) & 1) == 1;
            n < 6 ? (this.modules[n][8] = i) : n < 8 ? (this.modules[n + 1][8] = i) : (this.modules[this.moduleCount - 15 + n][8] = i);
        }
        for (var n = 0; n < 15; n++) {
            var i = !t && ((o >> n) & 1) == 1;
            n < 8 ? (this.modules[8][this.moduleCount - n - 1] = i) : n < 9 ? (this.modules[8][15 - n - 1 + 1] = i) : (this.modules[8][15 - n - 1] = i);
        }
        this.modules[this.moduleCount - 8][8] = !t;
    }),
    (l.mapData = function (t, e) {
        for (var r = -1, o = this.moduleCount - 1, n = 7, i = 0, u = this.moduleCount - 1; u > 0; u -= 2)
            for (6 == u && u--; ; ) {
                for (var s = 0; s < 2; s++)
                    if (null == this.modules[o][u - s]) {
                        var l = !1;
                        i < t.length && (l = ((t[i] >>> n) & 1) == 1), a.getMask(e, o, u - s) && (l = !l), (this.modules[o][u - s] = l), -1 == --n && (i++, (n = 7));
                    }
                if ((o += r) < 0 || this.moduleCount <= o) {
                    (o -= r), (r = -r);
                    break;
                }
            }
    }),
    (s.PAD0 = 236),
    (s.PAD1 = 17),
    (s.createData = function (t, e, r) {
        for (var o = n.getRSBlocks(t, e), u = new i(), l = 0; l < r.length; l++) {
            var f = r[l];
            u.put(f.mode, 4), u.put(f.getLength(), a.getLengthInBits(f.mode, t)), f.write(u);
        }
        for (var h = 0, l = 0; l < o.length; l++) h += o[l].dataCount;
        if (u.getLengthInBits() > 8 * h) throw Error('code length overflow. (' + u.getLengthInBits() + '>' + 8 * h + ')');
        for (u.getLengthInBits() + 4 <= 8 * h && u.put(0, 4); u.getLengthInBits() % 8 != 0; ) u.putBit(!1);
        for (; !(u.getLengthInBits() >= 8 * h) && (u.put(s.PAD0, 8), !(u.getLengthInBits() >= 8 * h)); ) {
            u.put(s.PAD1, 8);
        }
        return s.createBytes(u, o);
    }),
    (s.createBytes = function (t, e) {
        for (var r = 0, o = 0, n = 0, i = Array(e.length), s = Array(e.length), l = 0; l < e.length; l++) {
            var f = e[l].dataCount,
                h = e[l].totalCount - f;
            (o = Math.max(o, f)), (n = Math.max(n, h)), (i[l] = Array(f));
            for (var g = 0; g < i[l].length; g++) i[l][g] = 255 & t.buffer[g + r];
            r += f;
            var c = a.getErrorCorrectPolynomial(h),
                d = new u(i[l], c.getLength() - 1).mod(c);
            s[l] = Array(c.getLength() - 1);
            for (var g = 0; g < s[l].length; g++) {
                var p = g + d.getLength() - s[l].length;
                s[l][g] = p >= 0 ? d.get(p) : 0;
            }
        }
        for (var v = 0, g = 0; g < e.length; g++) v += e[g].totalCount;
        for (var m = Array(v), T = 0, g = 0; g < o; g++) for (var l = 0; l < e.length; l++) g < i[l].length && (m[T++] = i[l][g]);
        for (var g = 0; g < n; g++) for (var l = 0; l < e.length; l++) g < s[l].length && (m[T++] = s[l][g]);
        return m;
    }),
    (t.exports = s);
