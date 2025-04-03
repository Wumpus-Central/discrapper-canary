n.d(t, { Z: () => i }), n(301563);
var r = n(848697);
let l = {
        LATIN12: r.latin12CompactTimeStamp,
        LATIN24: r.latin24CompactTimeStamp,
        ASIAN: r.asianCompactTimeStamp
    },
    o = /(AM|PM)$/;
function i(e) {
    return null != e.match(o) ? l.LATIN24 : e.length <= 5 ? l.LATIN12 : l.ASIAN;
}
