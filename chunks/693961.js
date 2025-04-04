var r = a(621523),
    n = a(530575);
t.exports = !r(function () {
    var t = Error('a');
    return !('stack' in t) || (Object.defineProperty(t, 'stack', n(1, 7)), 7 !== t.stack);
});
