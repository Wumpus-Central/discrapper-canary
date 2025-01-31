n.d(t, { Z: () => o });
var i = n(507304);
let r = {
        LATIN12: i.latin12CompactTimeStamp,
        LATIN24: i.latin24CompactTimeStamp,
        ASIAN: i.asianCompactTimeStamp
    },
    a = 5,
    s = /(AM|PM)$/;
function o(e) {
    return null != e.match(s) ? r.LATIN24 : e.length <= a ? r.LATIN12 : r.ASIAN;
}
