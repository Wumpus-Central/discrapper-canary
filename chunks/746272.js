var o = r(338091),
    n = r(669013),
    i = r(465758),
    a = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    },
    u = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (t) {
            for (var e = t << 10; u.getBCHDigit(e) - u.getBCHDigit(u.G15) >= 0; ) e ^= u.G15 << (u.getBCHDigit(e) - u.getBCHDigit(u.G15));
            return ((t << 10) | e) ^ u.G15_MASK;
        },
        getBCHTypeNumber: function (t) {
            for (var e = t << 12; u.getBCHDigit(e) - u.getBCHDigit(u.G18) >= 0; ) e ^= u.G18 << (u.getBCHDigit(e) - u.getBCHDigit(u.G18));
            return (t << 12) | e;
        },
        getBCHDigit: function (t) {
            for (var e = 0; 0 != t; ) e++, (t >>>= 1);
            return e;
        },
        getPatternPosition: function (t) {
            return u.PATTERN_POSITION_TABLE[t - 1];
        },
        getMask: function (t, e, r) {
            switch (t) {
                case a.PATTERN000:
                    return (e + r) % 2 == 0;
                case a.PATTERN001:
                    return e % 2 == 0;
                case a.PATTERN010:
                    return r % 3 == 0;
                case a.PATTERN011:
                    return (e + r) % 3 == 0;
                case a.PATTERN100:
                    return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
                case a.PATTERN101:
                    return ((e * r) % 2) + ((e * r) % 3) == 0;
                case a.PATTERN110:
                    return (((e * r) % 2) + ((e * r) % 3)) % 2 == 0;
                case a.PATTERN111:
                    return (((e * r) % 3) + ((e + r) % 2)) % 2 == 0;
                default:
                    throw Error('bad maskPattern:' + t);
            }
        },
        getErrorCorrectPolynomial: function (t) {
            for (var e = new n([1], 0), r = 0; r < t; r++) e = e.multiply(new n([1, i.gexp(r)], 0));
            return e;
        },
        getLengthInBits: function (t, e) {
            if (1 <= e && e < 10)
                switch (t) {
                    case o.MODE_NUMBER:
                        return 10;
                    case o.MODE_ALPHA_NUM:
                        return 9;
                    case o.MODE_8BIT_BYTE:
                    case o.MODE_KANJI:
                        return 8;
                    default:
                        throw Error('mode:' + t);
                }
            if (e < 27)
                switch (t) {
                    case o.MODE_NUMBER:
                        return 12;
                    case o.MODE_ALPHA_NUM:
                        return 11;
                    case o.MODE_8BIT_BYTE:
                        return 16;
                    case o.MODE_KANJI:
                        return 10;
                    default:
                        throw Error('mode:' + t);
                }
            if (e < 41)
                switch (t) {
                    case o.MODE_NUMBER:
                        return 14;
                    case o.MODE_ALPHA_NUM:
                        return 13;
                    case o.MODE_8BIT_BYTE:
                        return 16;
                    case o.MODE_KANJI:
                        return 12;
                    default:
                        throw Error('mode:' + t);
                }
            throw Error('type:' + e);
        },
        getLostPoint: function (t) {
            for (var e = t.getModuleCount(), r = 0, o = 0; o < e; o++)
                for (var n = 0; n < e; n++) {
                    for (var i = 0, a = t.isDark(o, n), u = -1; u <= 1; u++) if (!(o + u < 0) && !(e <= o + u)) for (var s = -1; s <= 1; s++) !(n + s < 0) && !(e <= n + s) && (0 != u || 0 != s) && a == t.isDark(o + u, n + s) && i++;
                    i > 5 && (r += 3 + i - 5);
                }
            for (var o = 0; o < e - 1; o++)
                for (var n = 0; n < e - 1; n++) {
                    var l = 0;
                    t.isDark(o, n) && l++, t.isDark(o + 1, n) && l++, t.isDark(o, n + 1) && l++, t.isDark(o + 1, n + 1) && l++, (0 == l || 4 == l) && (r += 3);
                }
            for (var o = 0; o < e; o++) for (var n = 0; n < e - 6; n++) t.isDark(o, n) && !t.isDark(o, n + 1) && t.isDark(o, n + 2) && t.isDark(o, n + 3) && t.isDark(o, n + 4) && !t.isDark(o, n + 5) && t.isDark(o, n + 6) && (r += 40);
            for (var n = 0; n < e; n++) for (var o = 0; o < e - 6; o++) t.isDark(o, n) && !t.isDark(o + 1, n) && t.isDark(o + 2, n) && t.isDark(o + 3, n) && t.isDark(o + 4, n) && !t.isDark(o + 5, n) && t.isDark(o + 6, n) && (r += 40);
            for (var f = 0, n = 0; n < e; n++) for (var o = 0; o < e; o++) t.isDark(o, n) && f++;
            return r + 10 * (Math.abs((100 * f) / e / e - 50) / 5);
        }
    };
t.exports = u;
