r.d(t, { Z: () => a }), r(35282);
var n = r(848697);
let i = {
        LATIN12: n.latin12CompactTimeStamp,
        LATIN24: n.latin24CompactTimeStamp,
        ASIAN: n.asianCompactTimeStamp
    },
    l = /(AM|PM)$/;
function a(e) {
    return null != e.match(l) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN;
}
