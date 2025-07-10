(n.d(t, { Z: () => r }), n(35282));
var a = n(848697);
let o = {
        LATIN12: a.latin12CompactTimeStamp,
        LATIN24: a.latin24CompactTimeStamp,
        ASIAN: a.asianCompactTimeStamp
    },
    i = /(AM|PM)$/;
function r(e) {
    return null != e.match(i) ? o.LATIN24 : e.length <= 5 ? o.LATIN12 : o.ASIAN;
}
