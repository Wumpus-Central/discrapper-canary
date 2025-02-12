i.d(t, { Z: () => r });
var n = i(562797);
let a = {
        LATIN12: n.latin12CompactTimeStamp,
        LATIN24: n.latin24CompactTimeStamp,
        ASIAN: n.asianCompactTimeStamp
    },
    l = /(AM|PM)$/;
function r(e) {
    return null != e.match(l) ? a.LATIN24 : e.length <= 5 ? a.LATIN12 : a.ASIAN;
}
