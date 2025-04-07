n.d(t, { Z: () => i }), n(35282);
var a = n(848697);
let r = {
        LATIN12: a.latin12CompactTimeStamp,
        LATIN24: a.latin24CompactTimeStamp,
        ASIAN: a.asianCompactTimeStamp
    },
    l = /(AM|PM)$/;
function i(e) {
    return null != e.match(l) ? r.LATIN24 : e.length <= 5 ? r.LATIN12 : r.ASIAN;
}
