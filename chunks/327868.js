var r = n(821819),
    i = n(241777);
e.exports = !r(function () {
    var e = Error('a');
    return !('stack' in e) || (Object.defineProperty(e, 'stack', i(1, 7)), 7 !== e.stack);
});
