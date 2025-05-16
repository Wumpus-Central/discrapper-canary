var r = n(621523),
    i = n(530575);
e.exports = !r(function () {
    var e = Error('a');
    return !('stack' in e) || (Object.defineProperty(e, 'stack', i(1, 7)), 7 !== e.stack);
});
