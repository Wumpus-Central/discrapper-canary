var r = a(936940),
    n = a(879);
t.exports = !r(function () {
    var t = Error('a');
    return !('stack' in t) || (Object.defineProperty(t, 'stack', n(1, 7)), 7 !== t.stack);
});
