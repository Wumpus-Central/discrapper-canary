var a = t(503628),
    n = t(231977);
e.exports = !a(function () {
    var e = Error("a");
    return !("stack" in e) || (Object.defineProperty(e, "stack", n(1, 7)), 7 !== e.stack);
});
