var r = n(503628),
    i = n(860511).RegExp;
e.exports = r(function () {
    var e = i(".", "s");
    return !(e.dotAll && e.test("\n") && "s" === e.flags);
});
