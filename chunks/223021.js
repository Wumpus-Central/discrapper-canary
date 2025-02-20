r.d(t, { Z: () => l }), r(301563);
var n = r(456536);
let i = {
        LATIN12: n.latin12CompactTimeStamp,
        LATIN24: n.latin24CompactTimeStamp,
        ASIAN: n.asianCompactTimeStamp
    },
    a = /(AM|PM)$/;
function l(e) {
    return null != e.match(a) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN;
}
