var t = 9007199254740991,
    n = /^(?:0|[1-9]\d*)$/;
function i(e, i) {
    var r = typeof e;
    return !!(i = null == i ? t : i) && ('number' == r || ('symbol' != r && n.test(e))) && e > -1 && e % 1 == 0 && e < i;
}
e.exports = i;
