r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(507304);
let a = {
        LATIN12: i.latin12CompactTimeStamp,
        LATIN24: i.latin24CompactTimeStamp,
        ASIAN: i.asianCompactTimeStamp
    },
    s = 5,
    o = /(AM|PM)$/;
function l(e) {
    return null != e.match(o) ? a.LATIN24 : e.length <= s ? a.LATIN12 : a.ASIAN;
}
