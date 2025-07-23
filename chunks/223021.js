(n.d(t, { Z: () => r }), n(35282));
var a = n(848697);
let i = {
        LATIN12: a.latin12CompactTimeStamp,
        LATIN24: a.latin24CompactTimeStamp,
        ASIAN: a.asianCompactTimeStamp
    },
    o = /(AM|PM)$/;
function r(e) {
    return null != e.match(o) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN;
}
