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
    o = 5,
    s = /(AM|PM)$/;
function l(e) {
    return null != e.match(s) ? a.LATIN24 : e.length <= o ? a.LATIN12 : a.ASIAN;
}
