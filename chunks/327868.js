var i = r(821819),
    a = r(241777);
e.exports = !i(function () {
    var e = Error('a');
    return !('stack' in e) || (Object.defineProperty(e, 'stack', a(1, 7)), 7 !== e.stack);
});
