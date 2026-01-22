var r = n(503628),
    i = n(231977);
e.exports = !r(function () {
    var e = Error("a");
    return !("stack" in e) || (Object.defineProperty(e, "stack", i(1, 7)), 7 !== e.stack);
});
