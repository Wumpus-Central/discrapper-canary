var r = n(779688),
    o = n(132812);
e.exports = !r(function () {
    var e = Error('a');
    return !('stack' in e) || (Object.defineProperty(e, 'stack', o(1, 7)), 7 !== e.stack);
});
