var a = t(860511),
    n = t(503628),
    o = t(123166),
    c = t(676528),
    s = a.structuredClone;
e.exports =
    !!s &&
    !n(function () {
        if (("DENO" === c && o > 92) || ("NODE" === c && o > 94) || ("BROWSER" === c && o > 97)) return !1;
        var e = new ArrayBuffer(8),
            r = s(e, { transfer: [e] });
        return 0 !== e.byteLength || 8 !== r.byteLength;
    });
