var r = n(621523),
    i = n(127849).RegExp;
e.exports = r(function () {
    var e = i("(?<a>b)", "g");
    return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
});
