r.d(t, { Z: () => i }), r(35282);
var n = r(848697);
let l = {
        LATIN12: n.latin12CompactTimeStamp,
        LATIN24: n.latin24CompactTimeStamp,
        ASIAN: n.asianCompactTimeStamp
    },
    o = /(AM|PM)$/;
function i(e) {
    return null != e.match(o) ? l.LATIN24 : e.length <= 5 ? l.LATIN12 : l.ASIAN;
}
