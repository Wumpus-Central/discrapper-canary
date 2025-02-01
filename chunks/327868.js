var i = n(821819),
    r = n(241777);
e.exports = !i(function () {
    var e = Error('a');
    return !('stack' in e) || (Object.defineProperty(e, 'stack', r(1, 7)), 7 !== e.stack);
});
