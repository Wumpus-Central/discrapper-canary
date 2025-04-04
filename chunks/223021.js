n.d(t, { Z: () => i }), n(301563);
var r = n(848697);
let o = {
        LATIN12: r.latin12CompactTimeStamp,
        LATIN24: r.latin24CompactTimeStamp,
        ASIAN: r.asianCompactTimeStamp
    },
    l = /(AM|PM)$/;
function i(e) {
    return null != e.match(l) ? o.LATIN24 : e.length <= 5 ? o.LATIN12 : o.ASIAN;
}
