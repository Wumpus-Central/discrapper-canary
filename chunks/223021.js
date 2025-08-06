n.d(t, { Z: () => s }), n(35282);
var r = n(848697);
let i = {
        LATIN12: r.latin12CompactTimeStamp,
        LATIN24: r.latin24CompactTimeStamp,
        ASIAN: r.asianCompactTimeStamp,
    },
    o = 5,
    a = /(AM|PM)$/;
function s(e) {
    return null != e.match(a) ? i.LATIN24 : e.length <= o ? i.LATIN12 : i.ASIAN;
}
