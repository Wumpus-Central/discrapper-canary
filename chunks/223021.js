n.d(t, { Z: () => s }), n(35282);
var r = n(724913);
let i = {
        LATIN12: r.latin12CompactTimeStamp,
        LATIN24: r.latin24CompactTimeStamp,
        ASIAN: r.asianCompactTimeStamp,
    },
    a = 5,
    o = /(AM|PM)$/;
function s(e) {
    return null != e.match(o) ? i.LATIN24 : e.length <= a ? i.LATIN12 : i.ASIAN;
}
