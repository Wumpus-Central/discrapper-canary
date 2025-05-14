var e = r(621523),
    o = r(530575);
t.exports = !e(function () {
    var t = Error('a');
    return !('stack' in t) || (Object.defineProperty(t, 'stack', o(1, 7)), 7 !== t.stack);
});
