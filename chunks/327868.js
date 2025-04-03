var r = n(821819),
    o = n(241777);
e.exports = !r(function () {
    var e = Error('a');
    return !('stack' in e) || (Object.defineProperty(e, 'stack', o(1, 7)), 7 !== e.stack);
});
